import { Component, inject } from '@angular/core';

import { ExperienceStore } from '../../../core/store/experience.store';
import { RevealOnScrollDirective } from '../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'ip-about-section',
  standalone: true,
  imports: [RevealOnScrollDirective],
  template: `
    <section class="section shell" id="about">
      <div class="section-heading" ipRevealOnScroll>
        <p class="eyebrow">{{ store.content().about.eyebrow }}</p>
        <h2>{{ store.content().about.title }}</h2>
      </div>
      <div class="about-layout">
        <article class="about-panel" ipRevealOnScroll>
          <p>{{ store.content().about.textOne }}</p>
          <p>{{ store.content().about.textTwo }}</p>
        </article>
        <div class="about-features" ipRevealOnScroll>
          @for (feature of store.content().about.features; track feature.title) {
            <article>
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.text }}</p>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class AboutSectionComponent {
  protected readonly store = inject(ExperienceStore);
}
