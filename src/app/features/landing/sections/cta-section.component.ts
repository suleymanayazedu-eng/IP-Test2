import { Component, inject } from '@angular/core';

import { ExperienceStore } from '../../../core/store/experience.store';
import { RevealOnScrollDirective } from '../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'ip-cta-section',
  standalone: true,
  imports: [RevealOnScrollDirective],
  template: `
    <section class="section shell">
      <div class="cta-banner" ipRevealOnScroll>
        <div>
          <p class="eyebrow">{{ store.content().cta.eyebrow }}</p>
          <h2>{{ store.content().cta.title }}</h2>
        </div>
        <a class="button button-primary" href="#contact">{{ store.content().cta.button }}</a>
      </div>
    </section>
  `,
})
export class CtaSectionComponent {
  protected readonly store = inject(ExperienceStore);
}
