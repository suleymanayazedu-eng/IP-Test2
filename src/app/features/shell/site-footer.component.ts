import { Component, inject } from '@angular/core';

import { ExperienceStore } from '../../core/store/experience.store';

@Component({
  selector: 'ip-site-footer',
  standalone: true,
  template: `
    <footer class="site-footer">
      <div class="shell footer-shell">
        <div class="footer-brand">
          <span class="footer-logo">
            <img src="icon/icon.jpg" alt="Ismet Peyzaj footer logo" />
          </span>
          <div>
            <strong>Ismet Peyzaj</strong>
            <p>{{ store.content().footer.description }}</p>
          </div>
        </div>
        <div class="footer-meta">
          <p>{{ store.content().footer.note }}</p>
          <p>{{ store.content().footer.copy }}</p>
        </div>
      </div>
    </footer>
  `,
})
export class SiteFooterComponent {
  protected readonly store = inject(ExperienceStore);
}
