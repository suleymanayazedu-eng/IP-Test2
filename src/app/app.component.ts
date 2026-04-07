import { Component } from '@angular/core';

import { AboutSectionComponent } from './features/landing/sections/about-section.component';
import { ContactSectionComponent } from './features/landing/sections/contact-section.component';
import { CtaSectionComponent } from './features/landing/sections/cta-section.component';
import { HeroSectionComponent } from './features/landing/sections/hero-section.component';
import { ProjectsSectionComponent } from './features/landing/sections/projects-section.component';
import { ProcessSectionComponent } from './features/landing/sections/process-section.component';
import { ServicesSectionComponent } from './features/landing/sections/services-section.component';
import { TrustBandComponent } from './features/landing/sections/trust-band.component';
import { WhyUsSectionComponent } from './features/landing/sections/why-us-section.component';
import { SiteFooterComponent } from './features/shell/site-footer.component';
import { SiteHeaderComponent } from './features/shell/site-header.component';

@Component({
  selector: 'ip-root',
  standalone: true,
  imports: [
    SiteHeaderComponent,
    HeroSectionComponent,
    TrustBandComponent,
    AboutSectionComponent,
    ProcessSectionComponent,
    ServicesSectionComponent,
    ProjectsSectionComponent,
    WhyUsSectionComponent,
    CtaSectionComponent,
    ContactSectionComponent,
    SiteFooterComponent,
  ],
  template: `
    <div class="page-shell ambient-orb">
      <ip-site-header />
      <main>
        <ip-hero-section />
        <ip-trust-band />
        <ip-about-section />
        <ip-process-section />
        <ip-services-section />
        <ip-projects-section />
        <ip-why-us-section />
        <ip-cta-section />
        <ip-contact-section />
      </main>
      <ip-site-footer />
    </div>
  `,
})
export class AppComponent {}
