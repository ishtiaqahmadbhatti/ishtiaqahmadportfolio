import { Component, HostListener, signal, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="footer">
      <div class="container footer-content">
        <p class="copyright">
          &copy; {{ currentYear }} <span class="highlight">Ishtiaq Ahmad</span>. All rights
          reserved.
        </p>

        <div class="social-links">
          <a
            href="https://www.linkedin.com/in/ishtiaqahmadbhatti/"
            target="_blank"
            aria-label="LinkedIn"
            class="social-btn"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/ishtiaqahmadbhatti"
            target="_blank"
            aria-label="GitHub"
            class="social-btn"
          >
            <i class="fab fa-github"></i>
          </a>
          <a
            href="https://gitlab.com/ishtiaqahmadbhatti"
            target="_blank"
            aria-label="GitLab"
            class="social-btn"
          >
            <i class="fab fa-gitlab"></i>
          </a>
        </div>
      </div>

      <!-- Floating Scroll-To-Top Button -->
      <button
        class="scroll-top-btn"
        [class.visible]="showScrollTop()"
        (click)="scrollToTop()"
        aria-label="Scroll to Top"
      >
        <i class="fas fa-chevron-up"></i>
      </button>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: [
    `
      .footer {
        background-color: var(--bg-color-dark);
        padding: 2.5rem 0;
        border-top: 1px solid var(--border-color);
        position: relative;
      }

      .footer-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 1.5rem;
        padding-right: 4rem;
      }

      .copyright {
        font-size: 0.95rem;
        color: var(--text-muted);
      }

      .copyright .highlight {
        color: #fff;
        font-weight: 500;
      }

      /* Social Icons Styling */
      .social-links {
        display: flex;
        gap: 1.25rem;
      }

      .social-btn {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.02);
        border: 1px solid var(--border-color);
        color: var(--text-muted);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.1rem;
        transition: var(--transition-smooth);
      }

      .social-btn:hover {
        color: var(--primary-color);
        background-color: rgba(0, 242, 254, 0.05);
        border-color: var(--primary-color);
        transform: translateY(-3px);
        box-shadow: var(--shadow-glow);
      }

      /* Floating Button */
      .scroll-top-btn {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background-color: var(--bg-color-light);
        border: 1px solid var(--border-color);
        color: var(--primary-color);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.1rem;
        cursor: pointer;
        z-index: 99;
        opacity: 0;
        visibility: hidden;
        transform: translateY(15px);
        transition: var(--transition-smooth);
        box-shadow: var(--shadow-dark);
      }

      .scroll-top-btn.visible {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }

      .scroll-top-btn:hover {
        background-color: var(--primary-color);
        color: #05070a;
        box-shadow: var(--shadow-glow);
        border-color: var(--primary-color);
      }

      @media (max-width: 768px) {
        .footer-content {
          flex-direction: column;
          text-align: center;
          padding-right: 0;
        }
        .scroll-top-btn {
          bottom: 1.5rem;
          right: 1.5rem;
          width: 42px;
          height: 42px;
        }
      }
    `,
  ],
})
export class FooterComponent {
  protected readonly currentYear = new Date().getFullYear();
  protected readonly showScrollTop = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollTop.set(window.scrollY > 300);
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
