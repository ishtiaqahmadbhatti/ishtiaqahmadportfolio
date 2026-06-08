import { Component, OnInit, HostListener, signal, inject } from '@angular/core';
import { Router } from '@angular/router';

interface ThemeOption {
  id: string;
  name: string;
  color: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <header class="header" [class.scrolled]="isScrolled()">
      <div class="container navbar">
        <a href="#home" class="logo" (click)="scrollToSection($event, 'home')">
          ISHTIAQ <span class="accent">AHMAD</span>
        </a>

        <!-- Desktop Navigation & Controls -->
        <div class="desktop-controls">
          <nav class="desktop-nav">
            <ul class="nav-links">
              @for (link of navLinks; track link.id) {
                <li>
                  <a 
                    [href]="'#' + link.id" 
                    [class.active]="activeSection() === link.id"
                    (click)="scrollToSection($event, link.id)"
                  >
                    {{ link.label }}
                  </a>
                </li>
              }
            </ul>
          </nav>

          <!-- Theme Palette Selector -->
          <div class="theme-palette">
            @for (theme of themes; track theme.id) {
              <button 
                class="theme-dot" 
                [class.active]="activeTheme() === theme.id"
                [style.background-color]="theme.color"
                (click)="setTheme(theme.id)"
                [attr.aria-label]="'Switch to ' + theme.name + ' theme'"
                [title]="theme.name + ' Theme'"
              ></button>
            }
          </div>
        </div>

        <!-- Mobile Controls Toggle -->
        <div class="mobile-controls">
          <!-- Theme dots in mobile bar -->
          <div class="theme-palette mobile-inline">
            @for (theme of themes; track theme.id) {
              <button 
                class="theme-dot" 
                [class.active]="activeTheme() === theme.id"
                [style.background-color]="theme.color"
                (click)="setTheme(theme.id)"
                [title]="theme.name + ' Theme'"
              ></button>
            }
          </div>

          <button 
            class="mobile-menu-btn" 
            [class.open]="isMenuOpen()" 
            (click)="toggleMenu()"
            aria-label="Toggle Navigation Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Menu -->
      <div class="mobile-nav" [class.open]="isMenuOpen()">
        <ul class="mobile-nav-links">
          @for (link of navLinks; track link.id) {
            <li>
              <a 
                [href]="'#' + link.id" 
                [class.active]="activeSection() === link.id"
                (click)="scrollToSection($event, link.id)"
              >
                {{ link.label }}
              </a>
            </li>
          }
        </ul>
      </div>
    </header>
  `,
  styles: [`
    .header {
      background-color: rgba(8, 11, 17, 0.7);
      padding: 1.25rem 0;
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 1000;
      transition: var(--transition-smooth);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.03);
    }

    .header.scrolled {
      padding: 0.85rem 0;
      background-color: rgba(8, 11, 17, 0.95);
      border-bottom: 1px solid var(--border-color);
      box-shadow: var(--shadow-dark);
    }

    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-family: var(--font-family-accent);
      font-size: 1.5rem;
      font-weight: 700;
      color: #fff;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
    }

    .logo .accent {
      color: var(--primary-color);
      text-shadow: var(--shadow-glow);
    }

    .desktop-controls {
      display: flex;
      align-items: center;
      gap: 2.5rem;
    }

    .nav-links {
      list-style: none;
      display: flex;
      gap: 2rem;
    }

    .nav-links a {
      color: var(--text-muted);
      font-size: 0.95rem;
      font-family: var(--font-family-accent);
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 1px;
      position: relative;
      padding: 0.5rem 0;
    }

    .nav-links a::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 0;
      left: 0;
      background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
      transition: var(--transition-smooth);
      box-shadow: var(--shadow-glow);
    }

    .nav-links a:hover,
    .nav-links a.active {
      color: var(--primary-color);
      text-shadow: var(--shadow-glow);
    }

    .nav-links a:hover::after,
    .nav-links a.active::after {
      width: 100%;
    }

    /* Theme Switcher dots */
    .theme-palette {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }

    .theme-dot {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      border: 2px solid transparent;
      cursor: pointer;
      transition: var(--transition-smooth);
      box-shadow: 0 0 5px rgba(0,0,0,0.5);
    }

    .theme-dot:hover {
      transform: scale(1.25);
    }

    .theme-dot.active {
      border-color: #fff;
      box-shadow: 0 0 10px currentColor;
    }

    .mobile-controls {
      display: none;
      align-items: center;
      gap: 1.25rem;
    }

    .mobile-inline {
      margin-right: 0.5rem;
    }

    /* Mobile Toggle Button */
    .mobile-menu-btn {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 30px;
      height: 20px;
      background: transparent;
      border: none;
      cursor: pointer;
      z-index: 1001;
    }

    .mobile-menu-btn span {
      display: block;
      width: 100%;
      height: 2px;
      background-color: var(--text-color);
      transition: var(--transition-smooth);
      border-radius: 2px;
    }

    .mobile-menu-btn.open span:nth-child(1) {
      transform: translateY(9px) rotate(45deg);
      background-color: var(--primary-color);
    }

    .mobile-menu-btn.open span:nth-child(2) {
      opacity: 0;
    }

    .mobile-menu-btn.open span:nth-child(3) {
      transform: translateY(-9px) rotate(-45deg);
      background-color: var(--primary-color);
    }

    /* Mobile Nav Panel */
    .mobile-nav {
      position: fixed;
      top: 0;
      right: -100%;
      width: 80%;
      max-width: 350px;
      height: 100vh;
      background-color: rgba(16, 20, 29, 0.98);
      backdrop-filter: blur(20px);
      z-index: 999;
      transition: var(--transition-smooth);
      display: flex;
      align-items: center;
      justify-content: center;
      border-left: 1px solid var(--border-color);
      box-shadow: var(--shadow-dark);
    }

    .mobile-nav.open {
      right: 0;
    }

    .mobile-nav-links {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 2.5rem;
      text-align: center;
      width: 100%;
      padding: 2rem;
    }

    .mobile-nav-links a {
      color: var(--text-muted);
      font-size: 1.25rem;
      font-family: var(--font-family-accent);
      text-transform: uppercase;
      letter-spacing: 2px;
      display: block;
      padding: 0.5rem 0;
    }

    .mobile-nav-links a:hover,
    .mobile-nav-links a.active {
      color: var(--primary-color);
      text-shadow: var(--shadow-glow);
    }

    @media (max-width: 992px) {
      .desktop-controls {
        display: none;
      }
      .mobile-controls {
        display: flex;
      }
    }
  `]
})
export class HeaderComponent implements OnInit {
  private readonly router = inject(Router);
  protected readonly isScrolled = signal(false);
  protected readonly isMenuOpen = signal(false);
  protected readonly activeSection = signal('home');
  protected readonly activeTheme = signal('default');

  protected readonly navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'expertise', label: 'Expertise' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' }
  ];

  protected readonly themes: ThemeOption[] = [
    { id: 'default', name: 'Cyber Cyan', color: '#00f2fe' },
    { id: 'matrix', name: 'Matrix Green', color: '#39ff14' },
    { id: 'vaporwave', name: 'Vaporwave Pink', color: '#ff007f' },
    { id: 'sunset', name: 'Sunset Orange', color: '#ff5e62' },
    { id: 'cyberpunk', name: 'Cyberpunk Gold', color: '#f1c40f' },
    { id: 'crimson', name: 'Crimson Red', color: '#ff0844' },
    { id: 'ocean', name: 'Ocean Blue', color: '#0070f3' }
  ];

  ngOnInit() {
    this.checkScroll();
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('portfolio-theme') || 'default';
      this.setTheme(savedTheme);
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
    this.spySections();
  }

  toggleMenu() {
    this.isMenuOpen.set(!this.isMenuOpen());
  }

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    this.isMenuOpen.set(false);
    
    if (typeof window !== 'undefined') {
      const currentUrl = this.router.url.split('#')[0].split('?')[0];
      if (currentUrl !== '/' && currentUrl !== '') {
        this.router.navigate(['/']).then(() => {
          setTimeout(() => {
            this.scroll(sectionId);
          }, 150);
        });
      } else {
        this.scroll(sectionId);
      }
    }
  }

  private scroll(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  setTheme(themeId: string) {
    this.activeTheme.set(themeId);
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio-theme', themeId);
      
      // Clear existing themes from body
      document.body.classList.remove(
        'theme-matrix', 
        'theme-vaporwave', 
        'theme-sunset', 
        'theme-cyberpunk', 
        'theme-crimson', 
        'theme-ocean'
      );
      
      // Apply class if not default
      if (themeId !== 'default') {
        document.body.classList.add(`theme-${themeId}`);
      }
    }
  }

  private checkScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  private spySections() {
    const scrollPosition = window.scrollY + 120; // offset for triggers

    for (const link of this.navLinks) {
      const el = document.getElementById(link.id);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          this.activeSection.set(link.id);
        }
      }
    }
  }
}
