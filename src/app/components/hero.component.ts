import { Component, OnInit, OnDestroy, signal, ChangeDetectionStrategy } from '@angular/core';

interface Stat {
  label: string;
  count: number;
  target: number;
  suffix: string;
  isDecimal?: boolean;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  template: `
    <section class="hero-section">
      <div class="hero-grid container">
        <div class="hero-text">
          <div class="glitch-container">
            <span class="cyber-badge">SYSTEMS & SOLUTIONS</span>
          </div>
          <h1 class="hero-title">
            I am a <br />
            <span class="highlight-cyan"
              >{{ typedLine1() }}
              @if (isLine1Active()) {
                <span class="cursor">|</span>
              }
            </span>
            <br />
            <span class="highlight-purple"
              >{{ typedLine2() }}
              @if (isLine2Active()) {
                <span class="cursor">|</span>
              }
            </span>
          </h1>
          <p class="hero-subtitle">
            Crafting robust web solutions, automating cloud-native pipelines, and engineering
            intelligent Agentic AI/RAG systems. Specializing in high-performance Web APIs (.NET &
            FastAPI), reactive single-page applications (Angular), cross-platform mobile apps
            (Flutter), and automated DevOps orchestration (AWS & CI/CD).
          </p>

          <div class="hero-actions">
            <a href="#contact" class="btn btn-primary" (click)="scrollToContact($event)"
              >Let's Connect</a
            >
            <a href="#about" class="btn btn-secondary" (click)="scrollToAbout($event)"
              >Discover More</a
            >
          </div>

          <!-- Dynamic Stats Dashboard Grid -->
          <div class="hero-stats">
            @for (stat of stats(); track stat.label) {
              <div class="stat-item">
                <span class="stat-number">
                  {{ stat.isDecimal ? stat.count.toFixed(2) : stat.count }}{{ stat.suffix }}
                </span>
                <span class="stat-label">{{ stat.label }}</span>
              </div>
            }
          </div>
        </div>

        <!-- Advanced Tech Profile Shield -->
        <div class="hero-image-wrapper">
          <div class="image-border-glow">
            <!-- Rotating Dashboard Ring -->
            <div class="cyber-ring"></div>

            <!-- Tech Corner Brackets -->
            <div class="tech-bracket top-left"></div>
            <div class="tech-bracket top-right"></div>
            <div class="tech-bracket bottom-left"></div>
            <div class="tech-bracket bottom-right"></div>

            <!-- Laser Scanning Line -->
            <div class="scanline"></div>

            <!-- Dual-Image Hover Reveal Container -->
            <div class="profile-pic-container">
              <img src="profile.jpeg" alt="Ishtiaq Ahmad Profile" class="profile-pic pic-base" />
              <img
                src="ishtiaqprofile.png"
                alt="Ishtiaq Ahmad Styled Profile"
                class="profile-pic pic-overlay"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: [
    `
      .hero-section {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: radial-gradient(
          circle at center,
          rgba(16, 20, 29, 0.4) 0%,
          rgba(8, 11, 17, 1) 100%
        );
        padding-top: 120px;
        padding-bottom: 70px;
        position: relative;
        overflow: hidden;
      }

      .hero-grid {
        display: grid;
        grid-template-columns: 1.4fr 0.6fr;
        align-items: flex-start;
        gap: 2.5rem;
        width: 100%;
      }

      .hero-text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
      }

      .glitch-container {
        margin-bottom: 1.5rem;
        animation: fadeInDown 0.8s ease-out;
      }

      .cyber-badge {
        font-family: var(--font-family-accent);
        font-size: 0.75rem;
        font-weight: 700;
        color: var(--primary-color);
        border: 1px solid var(--primary-color);
        padding: 6px 14px;
        border-radius: 4px;
        letter-spacing: 2px;
        text-transform: uppercase;
        background-color: rgba(0, 242, 254, 0.05);
        box-shadow: 0 0 10px rgba(0, 242, 254, 0.1);
      }

      .hero-title {
        font-size: 2.8rem;
        line-height: 1.15;
        font-weight: 700;
        color: #fff;
        margin-bottom: 1.5rem;
        animation: fadeInUp 1s ease-out;
        height: 4em;
        max-width: 850px;
      }

      .and-connector {
        font-family: var(--font-family-main);
        font-weight: 300;
        color: var(--text-muted);
      }

      .highlight-cyan {
        color: var(--primary-color);
        text-shadow: var(--shadow-glow);
      }

      .highlight-purple {
        color: var(--secondary-color);
        text-shadow: var(--shadow-glow-purple);
      }

      .cursor {
        display: inline-block;
        font-weight: 300;
        animation: blink 0.75s step-end infinite;
        margin-left: 2px;
        color: var(--primary-color);
      }

      .highlight-purple .cursor {
        color: var(--secondary-color);
      }

      @keyframes blink {
        from,
        to {
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
      }

      .hero-subtitle {
        font-size: 1.25rem;
        color: var(--text-muted);
        margin-top: 0;
        margin-bottom: 2.5rem;
        max-width: 850px;
        line-height: 1.7;
        animation: fadeInUp 1.2s ease-out;
      }

      .hero-actions {
        display: flex;
        gap: 1.5rem;
        margin-bottom: 3.5rem;
        animation: fadeInUp 1.4s ease-out;
      }

      /* Stats Grid Dashboard */
      .hero-stats {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
        width: 100%;
        max-width: 100%;
        animation: fadeInUp 1.6s ease-out;
      }

      .stat-item {
        background-color: rgba(255, 255, 255, 0.01);
        border: 1px solid rgba(255, 255, 255, 0.03);
        border-left: 3px solid var(--primary-color);
        padding: 1rem 0.75rem;
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        transition: var(--transition-smooth);
      }

      .stat-item:hover {
        background-color: rgba(0, 242, 254, 0.02);
        border-color: var(--border-color);
        transform: translateY(-2px);
      }

      .stat-number {
        font-family: var(--font-family-accent);
        font-size: 2rem;
        font-weight: 700;
        color: #fff;
        text-shadow: var(--shadow-glow);
        line-height: 1.1;
      }

      .stat-label {
        font-size: 0.8rem;
        color: var(--text-muted);
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      /* Advanced Profile Image Layout */
      .hero-image-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        animation: zoomIn 1s cubic-bezier(0.16, 1, 0.3, 1);
      }

      .image-border-glow {
        position: relative;
        width: 340px;
        height: 340px;
        border-radius: 50%;
        padding: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(16, 20, 29, 0.5);
        border: 1px solid var(--border-color);
        box-shadow: var(--shadow-dark);
        transition: var(--transition-smooth);
      }

      /* Outer spinning tech-ring */
      .cyber-ring {
        position: absolute;
        width: calc(100% + 24px);
        height: calc(100% + 24px);
        border-radius: 50%;
        border: 2px dashed var(--primary-color);
        opacity: 0.35;
        animation: spinRing 25s linear infinite;
        pointer-events: none;
        transition: var(--transition-smooth);
        z-index: 1;
      }

      .image-border-glow:hover .cyber-ring {
        opacity: 0.75;
        border-color: var(--secondary-color);
        width: calc(100% + 32px);
        height: calc(100% + 32px);
      }

      /* Cyber tech brackets */
      .tech-bracket {
        position: absolute;
        width: 24px;
        height: 24px;
        border: 3px solid var(--primary-color);
        opacity: 0.6;
        transition: var(--transition-smooth);
        pointer-events: none;
        z-index: 2;
      }

      .tech-bracket.top-left {
        top: -10px;
        left: -10px;
        border-right: none;
        border-bottom: none;
      }

      .tech-bracket.top-right {
        top: -10px;
        right: -10px;
        border-left: none;
        border-bottom: none;
      }

      .tech-bracket.bottom-left {
        bottom: -10px;
        left: -10px;
        border-right: none;
        border-top: none;
      }

      .tech-bracket.bottom-right {
        bottom: -10px;
        right: -10px;
        border-left: none;
        border-top: none;
      }

      .image-border-glow:hover .tech-bracket {
        border-color: var(--secondary-color);
        width: 32px;
        height: 32px;
      }

      /* Scanning laser overlay */
      .scanline {
        position: absolute;
        width: calc(100% - 16px);
        height: 4px;
        background: linear-gradient(90deg, transparent, var(--primary-color), transparent);
        box-shadow: var(--shadow-glow);
        top: 8px;
        left: 8px;
        z-index: 5;
        border-radius: 50%;
        pointer-events: none;
        opacity: 0.65;
        animation: scanLaser 4s ease-in-out infinite;
      }

      /* Core image wrap */
      .profile-pic-container {
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        overflow: hidden;
        border: 4px solid var(--bg-color-dark);
        background-color: var(--bg-color-light);
        box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.8);
        z-index: 3;
      }

      .profile-pic {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
      }

      .pic-base {
        opacity: 1;
        transform: scale(1);
        z-index: 3;
      }

      .pic-overlay {
        opacity: 0;
        transform: scale(1.1) rotate(-5deg);
        z-index: 4;
        filter: contrast(1.05) brightness(1.05);
      }

      /* Hover animation swap base and overlay pics */
      .image-border-glow:hover .pic-base {
        opacity: 0;
        transform: scale(0.9) rotate(5deg);
      }

      .image-border-glow:hover .pic-overlay {
        opacity: 1;
        transform: scale(1) rotate(0);
      }

      .image-border-glow:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-glow);
        border-color: var(--primary-color);
      }

      /* Keyframes for layout */
      @keyframes spinRing {
        to {
          transform: rotate(360deg);
        }
      }

      @keyframes scanLaser {
        0% {
          top: 8px;
          opacity: 0;
        }
        15% {
          opacity: 0.8;
        }
        85% {
          opacity: 0.8;
        }
        100% {
          top: calc(100% - 12px);
          opacity: 0;
        }
      }

      @media (max-width: 992px) {
        .hero-grid {
          grid-template-columns: 1fr;
          gap: 3.5rem;
          text-align: center;
        }
        .hero-text {
          align-items: center;
          text-align: center;
        }
        .hero-title {
          font-size: 2.3rem;
          height: 4.5em;
        }
        .hero-actions {
          justify-content: center;
        }
        .hero-stats {
          margin: 0 auto;
        }
        .image-border-glow {
          width: 280px;
          height: 280px;
        }
      }

      @media (max-width: 480px) {
        .hero-title {
          font-size: 1.8rem;
          height: 5.5em;
        }
        .hero-subtitle {
          font-size: 1.05rem;
        }
        .hero-actions {
          flex-direction: column;
          width: 100%;
          gap: 1rem;
        }
        .hero-actions .btn {
          width: 100%;
          text-align: center;
        }
        .hero-stats {
          grid-template-columns: 1fr;
          width: 100%;
        }
        .image-border-glow {
          width: 240px;
          height: 240px;
        }
      }
    `,
  ],
})
export class HeroComponent implements OnInit, OnDestroy {
  protected readonly stats = signal<Stat[]>([
    { label: 'Major Projects', count: 0, target: 6, suffix: '+' },
    { label: 'AWS Services Used', count: 0, target: 12, suffix: '+' },
    { label: 'DevOps Tools', count: 0, target: 8, suffix: '+' },
    { label: 'Graduation CGPA', count: 0.0, target: 3.45, suffix: '/4.0', isDecimal: true },
  ]);

  protected readonly typedLine1 = signal('');
  protected readonly typedLine2 = signal('');
  protected readonly isLine1Active = signal(true);
  protected readonly isLine2Active = signal(false);

  private readonly line1Text = 'Full Stack Software,';
  private readonly line2Text = 'AI, Cloud & DevOps Engineer';
  private typingCycleInterval: any;

  ngOnInit() {
    this.animateCounters();
    this.startTypingCycle();
  }

  ngOnDestroy() {
    if (this.typingCycleInterval) {
      clearInterval(this.typingCycleInterval);
    }
  }

  private startTypingCycle() {
    this.runTypingEffect();
    // Restart typing effect every 10 seconds
    this.typingCycleInterval = setInterval(() => {
      this.runTypingEffect();
    }, 10000);
  }

  private runTypingEffect() {
    // Reset typing states
    this.typedLine1.set('');
    this.typedLine2.set('');
    this.isLine1Active.set(true);
    this.isLine2Active.set(false);

    let index1 = 0;
    const interval1 = setInterval(() => {
      if (index1 < this.line1Text.length) {
        this.typedLine1.set(this.line1Text.substring(0, index1 + 1));
        index1++;
      } else {
        clearInterval(interval1);
        this.isLine1Active.set(false);
        this.isLine2Active.set(true);
        this.startTypingLine2();
      }
    }, 60);
  }

  private startTypingLine2() {
    let index2 = 0;
    const interval2 = setInterval(() => {
      if (index2 < this.line2Text.length) {
        this.typedLine2.set(this.line2Text.substring(0, index2 + 1));
        index2++;
      } else {
        clearInterval(interval2);
      }
    }, 60);
  }

  scrollToContact(event: Event) {
    event.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }

  scrollToAbout(event: Event) {
    event.preventDefault();
    const element = document.getElementById('about');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }

  private animateCounters() {
    const duration = 1500; // 1.5 seconds
    const intervalTime = 30; // 30ms step
    const steps = duration / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      this.stats.update((currentStats) =>
        currentStats.map((stat) => {
          if (stat.isDecimal) {
            const increment = stat.target / steps;
            const newCount = parseFloat((increment * currentStep).toFixed(2));
            return {
              ...stat,
              count: newCount >= stat.target ? stat.target : newCount,
            };
          } else {
            const increment = Math.ceil(stat.target / steps);
            const newCount = Math.min(stat.target, stat.count + increment);
            return {
              ...stat,
              count: newCount,
            };
          }
        }),
      );

      if (currentStep >= steps) {
        clearInterval(interval);
        this.stats.update((currentStats) =>
          currentStats.map((stat) => ({ ...stat, count: stat.target })),
        );
      }
    }, intervalTime);
  }
}
