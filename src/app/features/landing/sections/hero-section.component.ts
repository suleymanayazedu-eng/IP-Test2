import { Component, inject } from '@angular/core';

import { ExperienceStore } from '../../../core/store/experience.store';
import { RevealOnScrollDirective } from '../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'ip-hero-section',
  standalone: true,
  imports: [RevealOnScrollDirective],
  template: `
    <section class="hero section shell" id="hero">
      <div class="hero-copy" ipRevealOnScroll>
        <p class="eyebrow">{{ store.content().hero.eyebrow }}</p>
        <h1 [innerHTML]="store.content().hero.titleHtml"></h1>
        <p class="hero-text">{{ store.content().hero.text }}</p>
        <div class="hero-actions">
          <a class="button button-primary" href="#contact">{{ store.content().hero.primaryCta }}</a>
          <a class="button button-secondary" href="#projects">{{ store.content().hero.secondaryCta }}</a>
        </div>
        <ul class="hero-points">
          @for (point of store.content().hero.points; track point) {
            <li>{{ point }}</li>
          }
        </ul>
      </div>

      <div class="hero-visual" ipRevealOnScroll>
        <article class="showcase-card main-card">
          <p>{{ store.content().hero.featuredLabel }}</p>
          <h2>{{ store.content().hero.featuredTitle }}</h2>
          <span>{{ store.content().hero.featuredText }}</span>
        </article>
        <div class="showcase-grid">
          @for (metric of store.content().hero.metrics; track metric.label) {
            <article class="showcase-card accent-card">
              <p>{{ metric.value }}</p>
              <span>{{ metric.label }}</span>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class HeroSectionComponent {
  protected readonly store = inject(ExperienceStore);
}
