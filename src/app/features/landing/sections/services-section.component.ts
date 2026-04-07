import { Component, inject } from '@angular/core';

import { ExperienceStore } from '../../../core/store/experience.store';
import { RevealOnScrollDirective } from '../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'ip-services-section',
  standalone: true,
  imports: [RevealOnScrollDirective],
  template: `
    <section class="section shell" id="services">
      <div class="section-heading" ipRevealOnScroll>
        <p class="eyebrow">{{ store.content().services.eyebrow }}</p>
        <h2>{{ store.content().services.title }}</h2>
      </div>
      <div class="service-grid">
        @for (card of store.content().services.cards; track card.index) {
          <article class="service-card" ipRevealOnScroll>
            <span class="service-index">{{ card.index }}</span>
            <h3>{{ card.title }}</h3>
            <p>{{ card.text }}</p>
          </article>
        }
      </div>
    </section>
  `,
})
export class ServicesSectionComponent {
  protected readonly store = inject(ExperienceStore);
}
