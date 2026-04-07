import { Directive, ElementRef, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[ipRevealOnScroll]',
  standalone: true,
  host: {
    class: 'reveal',
  },
})
export class RevealOnScrollDirective implements OnInit {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);

  ngOnInit(): void {
    if (!('IntersectionObserver' in globalThis)) {
      this.element.nativeElement.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          this.element.nativeElement.classList.add('is-visible');
          observer.disconnect();
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -40px 0px' },
    );

    observer.observe(this.element.nativeElement);
  }
}
