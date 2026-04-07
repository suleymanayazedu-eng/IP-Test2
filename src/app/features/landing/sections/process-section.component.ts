import { ChangeDetectorRef, Component, NgZone, OnDestroy, inject, signal } from '@angular/core';

import { ExperienceStore } from '../../../core/store/experience.store';
import { RevealOnScrollDirective } from '../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'ip-process-section',
  standalone: true,
  imports: [RevealOnScrollDirective],
  template: `
    <section class="section shell" id="process">
      <div class="section-heading" ipRevealOnScroll>
        <p class="eyebrow">{{ store.content().process.eyebrow }}</p>
        <h2>{{ store.content().process.title }}</h2>
        <p class="section-intro">{{ store.content().process.intro }}</p>
      </div>

      <div class="process-experience" ipRevealOnScroll>
        <div class="process-steps">
          @for (step of steps(); track step.index; let index = $index) {
            <button
              class="process-step"
              type="button"
              [class.is-active]="activeStep() === index"
              (click)="selectStep(index)"
            >
              <span class="process-step-icon">
                @switch (index) {
                  @case (0) {
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  }
                  @case (1) {
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M9 3h6l4 4v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"></path>
                      <path d="M9 12h6"></path>
                      <path d="M9 16h4"></path>
                      <path d="M15.5 8.5 18 11"></path>
                    </svg>
                  }
                  @case (2) {
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 3 4 7v6c0 4.5 3.4 7.5 8 8 4.6-.5 8-3.5 8-8V7l-8-4Z"></path>
                      <path d="M9 12l2 2 4-4"></path>
                    </svg>
                  }
                  @default {
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M4 20h16"></path>
                      <path d="M6 16 14 8"></path>
                      <path d="M13 7h5v5"></path>
                      <path d="M10 20v-4"></path>
                    </svg>
                  }
                }
              </span>
              <span class="process-step-copy">
                <strong>{{ step.title }}</strong>
              </span>
            </button>
          }
        </div>

        <div class="process-panel">
          <div class="process-panel-visual">
            <span class="process-panel-icon">
              @switch (activeStep()) {
                @case (0) {
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                }
                @case (1) {
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9 3h6l4 4v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"></path>
                    <path d="M9 12h6"></path>
                    <path d="M9 16h4"></path>
                    <path d="M15.5 8.5 18 11"></path>
                  </svg>
                }
                @case (2) {
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 3 4 7v6c0 4.5 3.4 7.5 8 8 4.6-.5 8-3.5 8-8V7l-8-4Z"></path>
                    <path d="M9 12l2 2 4-4"></path>
                  </svg>
                }
                @default {
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 20h16"></path>
                    <path d="M6 16 14 8"></path>
                    <path d="M13 7h5v5"></path>
                    <path d="M10 20v-4"></path>
                  </svg>
                }
              }
            </span>
            <div class="process-panel-orbit"></div>
          </div>

          <div class="process-panel-copy">
            <p class="process-kicker">Calisma Akisi</p>
            <h3>{{ activeItem().title }}</h3>
            <p>{{ activeItem().text }}</p>
          </div>

          <div class="process-panel-actions">
            <button class="process-nav" type="button" (click)="previousStep()">Onceki</button>
            <button class="process-nav process-nav-primary" type="button" (click)="nextStep()">Sonraki</button>
          </div>

          <div class="process-progress">
            @for (step of steps(); track step.index; let index = $index) {
              <button
                class="process-progress-bar"
                type="button"
                [class.is-active]="activeStep() === index"
                [class.is-complete]="activeStep() > index"
                (click)="selectStep(index)"
              ></button>
            }
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ProcessSectionComponent implements OnDestroy {
  protected readonly store = inject(ExperienceStore);
  protected readonly activeStep = signal(0);

  private readonly zone = inject(NgZone);
  private readonly cdr = inject(ChangeDetectorRef);
  private rotationTimer?: number;

  protected readonly steps = () => this.store.content().process.steps;
  protected readonly activeItem = () => this.steps()[this.activeStep()];

  constructor() {
    this.startRotation();
  }

  protected selectStep(index: number): void {
    this.activeStep.set(index);
    this.restartRotation();
  }

  protected nextStep(): void {
    this.activeStep.update((value) => (value + 1) % this.steps().length);
    this.restartRotation();
  }

  protected previousStep(): void {
    this.activeStep.update((value) => (value - 1 + this.steps().length) % this.steps().length);
    this.restartRotation();
  }

  ngOnDestroy(): void {
    this.clearRotation();
  }

  private restartRotation(): void {
    this.clearRotation();
    this.startRotation();
  }

  private startRotation(): void {
    this.zone.runOutsideAngular(() => {
      this.rotationTimer = globalThis.setInterval(() => {
        this.zone.run(() => {
          this.activeStep.update((value) => (value + 1) % this.steps().length);
          this.cdr.markForCheck();
        });
      }, 4200);
    });
  }

  private clearRotation(): void {
    if (this.rotationTimer === undefined) return;
    globalThis.clearInterval(this.rotationTimer);
    this.rotationTimer = undefined;
  }
}
