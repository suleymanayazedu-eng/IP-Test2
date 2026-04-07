import { Component, HostListener, inject } from '@angular/core';

import { ExperienceStore } from '../../core/store/experience.store';

@Component({
  selector: 'ip-site-header',
  standalone: true,
  template: `
    <header class="site-header shell">
      <a class="brand" href="#hero" (click)="store.closeMobileNav()">
        <span class="brand-mark">
          <img src="icon/icon.jpg" alt="Ismet Peyzaj logo" />
        </span>
        <span class="brand-copy">
          <strong>İsmet Peyzaj</strong>
        </span>
      </a>

      <button
        class="nav-toggle"
        type="button"
        [attr.aria-expanded]="store.mobileNavOpen()"
        aria-label="Toggle menu"
        (click)="store.toggleMobileNav()"
      >
        <span></span>
        <span></span>
      </button>

      <nav class="site-nav" [class.is-open]="store.mobileNavOpen()">
        <a href="#about" (click)="store.closeMobileNav()">{{ store.content().nav.about }}</a>
        <a href="#services" (click)="store.closeMobileNav()">{{ store.content().nav.services }}</a>
        <a href="#projects" (click)="store.closeMobileNav()">{{ store.content().nav.projects }}</a>
        <a href="#why-us" (click)="store.closeMobileNav()">{{ store.content().nav.whyUs }}</a>
        <a href="#contact" (click)="store.closeMobileNav()">{{ store.content().nav.contact }}</a>
        <a class="nav-cta" href="#contact" (click)="store.closeMobileNav()">{{ store.content().nav.cta }}</a>
      </nav>

      <div class="micro-controls">
        <button class="micro-trigger" type="button" (click)="store.toggleLanguage()">
          {{ store.language().toUpperCase() }}
        </button>
        <div class="theme-picker">
          <button
            class="micro-trigger theme-trigger"
            type="button"
            [attr.aria-expanded]="store.themePaletteOpen()"
            (click)="store.toggleThemePalette()"
          >
            <span class="theme-orb"></span>
          </button>
          <div class="micro-palette" [class.is-open]="store.themePaletteOpen()">
            @for (season of seasons; track season.value) {
              <button
                class="micro-option"
                type="button"
                [class.is-active]="store.season() === season.value"
                [attr.aria-label]="season.label"
                (click)="store.setSeason(season.value)"
              >
                {{ season.short }}
              </button>
            }
          </div>
        </div>
      </div>
    </header>
  `,
})
export class SiteHeaderComponent {
  protected readonly store = inject(ExperienceStore);
  protected readonly seasons = [
    { value: 'spring', label: 'Spring theme', short: 'SP' },
    { value: 'summer', label: 'Summer theme', short: 'SU' },
    { value: 'autumn', label: 'Autumn theme', short: 'AU' },
    { value: 'winter', label: 'Winter theme', short: 'WI' },
  ] as const;

  @HostListener('document:click', ['$event'])
  closePalette(event: MouseEvent): void {
    const target = event.target as HTMLElement | null;
    if (!target?.closest('.theme-picker')) {
      this.store.closeThemePalette();
    }
  }
}
