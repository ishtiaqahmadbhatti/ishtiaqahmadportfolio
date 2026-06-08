import { Component } from '@angular/core';
import { HeroComponent } from './hero.component';
import { AboutComponent } from './about.component';
import { SkillsComponent } from './skills.component';
import { ExpertiseComponent } from './expertise.component';
import { PortfolioComponent } from './portfolio.component';
import { ResumeComponent } from './resume.component';
import { ContactComponent } from './contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExpertiseComponent,
    PortfolioComponent,
    ResumeComponent,
    ContactComponent
  ],
  template: `
    <app-hero id="home"></app-hero>
    <app-about id="about"></app-about>
    <app-skills id="skills"></app-skills>
    <app-expertise id="expertise"></app-expertise>
    <app-portfolio id="portfolio"></app-portfolio>
    <app-resume id="resume"></app-resume>
    <app-contact id="contact"></app-contact>
  `
})
export class HomeComponent {}
