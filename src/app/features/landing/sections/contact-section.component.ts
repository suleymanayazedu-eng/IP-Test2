import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ExperienceStore } from '../../../core/store/experience.store';
import { RevealOnScrollDirective } from '../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'ip-contact-section',
  standalone: true,
  imports: [FormsModule, RevealOnScrollDirective],
  template: `
    <section class="section shell" id="contact">
      <div class="section-heading" ipRevealOnScroll>
        <p class="eyebrow">{{ store.content().contact.eyebrow }}</p>
        <h2>{{ store.content().contact.title }}</h2>
      </div>
      <div class="contact-layout">
        <article class="contact-card" ipRevealOnScroll>
          <h3>{{ store.content().contact.cardTitle }}</h3>
          <p>{{ store.content().contact.cardText }}</p>
          <div class="contact-actions">
            <a class="button button-primary" href="tel:05433093256">{{ store.content().contact.call }}</a>
            <a class="button button-secondary" href="https://wa.me/905433093256" target="_blank" rel="noreferrer">
              {{ store.content().contact.whatsapp }}
            </a>
          </div>
          <ul class="contact-list">
            @for (item of store.content().contact.items; track item.label) {
              <li>
                @if (item.href) {
                  <a [href]="item.href" [target]="item.href.startsWith('http') ? '_blank' : null" rel="noreferrer">
                    {{ item.label }}: {{ item.value }}
                  </a>
                } @else {
                  <span>{{ item.label }}: {{ item.value }}</span>
                }
              </li>
            }
          </ul>
        </article>
        <form class="contact-form" ipRevealOnScroll (ngSubmit)="submit()">
          <label>
            <span>{{ store.content().form.nameLabel }}</span>
            <input type="text" name="name" [(ngModel)]="form.name" [placeholder]="store.content().form.namePlaceholder" />
          </label>
          <label>
            <span>{{ store.content().form.phoneLabel }}</span>
            <input type="tel" name="phone" [(ngModel)]="form.phone" [placeholder]="store.content().form.phonePlaceholder" />
          </label>
          <label>
            <span>{{ store.content().form.projectLabel }}</span>
            <div class="select-shell">
              <select name="projectType" [(ngModel)]="form.projectType">
                <option value="" disabled>{{ store.content().form.projectPlaceholder }}</option>
                @for (projectType of store.content().form.projectTypes; track projectType) {
                  <option [value]="projectType">{{ projectType }}</option>
                }
              </select>
            </div>
          </label>
          <label>
            <span>{{ store.content().form.uploadLabel }}</span>
            <label class="upload-shell" for="project-images">
              <input id="project-images" type="file" multiple accept="image/*" (change)="handleFiles($event)" />
              <strong>{{ selectedFilesLabel() || store.content().form.uploadHint }}</strong>
            </label>
          </label>
          <label>
            <span>{{ store.content().form.messageLabel }}</span>
            <textarea
              name="message"
              rows="5"
              [(ngModel)]="form.message"
              [placeholder]="store.content().form.messagePlaceholder"
            ></textarea>
          </label>
          <button class="button button-primary" type="submit">
            {{ submitLabel() || store.content().form.submit }}
          </button>
        </form>
      </div>
    </section>
  `,
})
export class ContactSectionComponent {
  protected readonly store = inject(ExperienceStore);
  protected readonly submitLabel = signal('');
  protected readonly selectedFilesLabel = signal('');
  protected readonly form = {
    name: '',
    phone: '',
    projectType: '',
    message: '',
  };

  protected handleFiles(event: Event): void {
    const input = event.target as HTMLInputElement;
    const files = input.files;

    if (!files || files.length === 0) {
      this.selectedFilesLabel.set('');
      return;
    }

    const fileNames = Array.from(files)
      .slice(0, 2)
      .map((file) => file.name)
      .join(', ');
    const suffix = files.length > 2 ? ` +${files.length - 2} dosya` : '';

    this.selectedFilesLabel.set(`${fileNames}${suffix}`);
  }

  protected submit(): void {
    this.submitLabel.set(this.store.content().meta.formSuccess);
    this.form.name = '';
    this.form.phone = '';
    this.form.projectType = '';
    this.form.message = '';
    this.selectedFilesLabel.set('');
    globalThis.setTimeout(() => this.submitLabel.set(''), 2200);
  }
}
