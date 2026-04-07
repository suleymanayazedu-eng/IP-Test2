import { DOCUMENT } from '@angular/common';
import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { Language, Season, siteContent } from '../content/site-content';

const languageKey = 'preferred-language';
const seasonKey = 'preferred-season';

@Injectable({ providedIn: 'root' })
export class ExperienceStore {
  private readonly document = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  readonly language = signal<Language>(this.detectLanguage());
  readonly season = signal<Season>(this.detectSeason());
  readonly mobileNavOpen = signal(false);
  readonly themePaletteOpen = signal(false);
  readonly content = computed(() => siteContent[this.language()]);

  constructor() {
    effect(() => {
      const currentLanguage = this.language();
      const metaContent = this.content().meta;

      this.document.documentElement.lang = currentLanguage;
      this.title.setTitle(metaContent.title);
      this.meta.updateTag({ name: 'description', content: metaContent.description });
      this.safeLocalStorageSet(languageKey, currentLanguage);
    });

    effect(() => {
      const currentSeason = this.season();
      this.document.body.dataset['season'] = currentSeason;
      this.safeLocalStorageSet(seasonKey, currentSeason);
    });
  }

  toggleLanguage(): void {
    this.language.update((value) => (value === 'tr' ? 'en' : 'tr'));
  }

  setSeason(season: Season): void {
    this.season.set(season);
    this.themePaletteOpen.set(false);
  }

  toggleMobileNav(): void {
    this.mobileNavOpen.update((value) => !value);
  }

  closeMobileNav(): void {
    this.mobileNavOpen.set(false);
  }

  toggleThemePalette(): void {
    this.themePaletteOpen.update((value) => !value);
  }

  closeThemePalette(): void {
    this.themePaletteOpen.set(false);
  }

  private detectLanguage(): Language {
    const saved = this.safeLocalStorageGet(languageKey);
    if (saved === 'tr' || saved === 'en') {
      return saved;
    }

    const browserLanguage = globalThis.navigator?.language?.toLowerCase() ?? 'tr';
    return browserLanguage.startsWith('tr') ? 'tr' : 'en';
  }

  private detectSeason(): Season {
    const saved = this.safeLocalStorageGet(seasonKey);
    if (saved === 'spring' || saved === 'summer' || saved === 'autumn' || saved === 'winter') {
      return saved;
    }

    const month = new Date().getMonth();
    if (month >= 2 && month <= 4) return 'spring';
    if (month >= 5 && month <= 7) return 'summer';
    if (month >= 8 && month <= 10) return 'autumn';
    return 'winter';
  }

  private safeLocalStorageGet(key: string): string | null {
    try {
      return globalThis.localStorage?.getItem(key) ?? null;
    } catch {
      return null;
    }
  }

  private safeLocalStorageSet(key: string, value: string): void {
    try {
      globalThis.localStorage?.setItem(key, value);
    } catch {
      return;
    }
  }
}
