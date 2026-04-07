import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild, inject, signal } from '@angular/core';
import EmblaCarousel, { EmblaCarouselType } from 'embla-carousel';

import { ExperienceStore } from '../../../core/store/experience.store';
import { RevealOnScrollDirective } from '../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'ip-projects-section',
  standalone: true,
  imports: [RevealOnScrollDirective],
  template: `
    <section class="section shell" id="projects">
      <div class="section-heading" ipRevealOnScroll>
        <p class="eyebrow">{{ store.content().projects.eyebrow }}</p>
        <h2>{{ store.content().projects.title }}</h2>
      </div>
      <div class="carousel-head" ipRevealOnScroll>
        <p class="carousel-note">{{ store.content().projects.note }}</p>
        <div class="carousel-actions">
          <button class="carousel-button" type="button" [disabled]="!canScrollPrev()" (click)="scrollPrev()">&#8592;</button>
          <button class="carousel-button" type="button" [disabled]="!canScrollNext()" (click)="scrollNext()">&#8594;</button>
        </div>
      </div>
      <div class="project-scroller" ipRevealOnScroll>
        <div class="project-viewport" #viewport>
          <div class="project-track">
            @for (item of store.content().projects.items; track item.title) {
              <article class="project-card" [style.background-image]="'url(' + item.image + ')'">
                <div class="project-content">
                  <p class="project-type">{{ item.type }}</p>
                  <h3>{{ item.title }}</h3>
                  <span class="project-meta">{{ item.meta }}</span>
                </div>
              </article>
            }
          </div>
        </div>
        <div class="carousel-dots">
          @for (item of store.content().projects.items; track item.title; let index = $index) {
            <button
              class="carousel-dot"
              type="button"
              [class.is-active]="selectedIndex() === index"
              [attr.aria-label]="'Go to slide ' + (index + 1)"
              (click)="scrollTo(index)"
            ></button>
          }
        </div>
      </div>
    </section>
  `,
})
export class ProjectsSectionComponent implements AfterViewInit, OnDestroy {
  protected readonly store = inject(ExperienceStore);
  protected readonly canScrollPrev = signal(false);
  protected readonly canScrollNext = signal(true);
  protected readonly selectedIndex = signal(0);

  @ViewChild('viewport') private viewport?: ElementRef<HTMLDivElement>;

  private embla?: EmblaCarouselType;

  ngAfterViewInit(): void {
    const viewportElement = this.viewport?.nativeElement;
    if (!viewportElement) return;

    this.embla = EmblaCarousel(viewportElement, {
      align: 'start',
      containScroll: 'trimSnaps',
      dragFree: false,
      loop: false,
      slidesToScroll: 1,
    });

    this.updateControls();
    this.embla.on('select', () => this.updateControls());
    this.embla.on('reInit', () => this.updateControls());
  }

  ngOnDestroy(): void {
    this.embla?.destroy();
  }

  protected scrollPrev(): void {
    this.embla?.scrollPrev();
  }

  protected scrollNext(): void {
    this.embla?.scrollNext();
  }

  protected scrollTo(index: number): void {
    this.embla?.scrollTo(index);
  }

  private updateControls(): void {
    if (!this.embla) return;

    this.canScrollPrev.set(this.embla.canScrollPrev());
    this.canScrollNext.set(this.embla.canScrollNext());
    this.selectedIndex.set(this.embla.selectedScrollSnap());
  }
}
