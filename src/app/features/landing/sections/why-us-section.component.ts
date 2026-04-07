import { Component, inject } from '@angular/core';

import { ExperienceStore } from '../../../core/store/experience.store';
import { RevealOnScrollDirective } from '../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'ip-why-us-section',
  standalone: true,
  imports: [RevealOnScrollDirective],
  template: `
    <section class="section shell" id="why-us">
      <div class="section-heading" ipRevealOnScroll>
        <p class="eyebrow">{{ store.content().whyUs.eyebrow }}</p>
        <h2>{{ store.content().whyUs.title }}</h2>
      </div>
      <div class="reason-grid">
        @for (card of store.content().whyUs.cards; track card.title) {
          <article class="reason-card" ipRevealOnScroll>
            <h3>{{ card.title }}</h3>
            <p>{{ card.text }}</p>
          </article>
        }
      </div>
    </section>
  `,
})
export class WhyUsSectionComponent {
  protected readonly store = inject(ExperienceStore);
}
