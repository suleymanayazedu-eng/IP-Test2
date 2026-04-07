import { Component, inject } from '@angular/core';

import { ExperienceStore } from '../../../core/store/experience.store';
import { RevealOnScrollDirective } from '../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'ip-trust-band',
  standalone: true,
  imports: [RevealOnScrollDirective],
  template: `
    <section class="trust-band shell" ipRevealOnScroll>
      <div>
        <strong>{{ store.content().trust.title }}</strong>
        <span>{{ store.content().trust.text }}</span>
      </div>
      <div class="trust-stats">
        @for (stat of store.content().trust.stats; track stat.label) {
          <div>
            <strong>{{ stat.value }}</strong>
            <span>{{ stat.label }}</span>
          </div>
        }
      </div>
    </section>
  `,
})
export class TrustBandComponent {
  protected readonly store = inject(ExperienceStore);
}
