import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  template: `
    <section class="portfolio-section section-padding">
      <div class="container">
        <h2 class="section-title">My Portfolio</h2>

        <div class="slider-wrapper">
          <button class="slide-btn slide-prev" (click)="scrollLeft()" aria-label="Previous Slide">
            <i class="fas fa-chevron-left"></i>
          </button>

          <div class="portfolio-grid" #sliderContainer>
            @for (proj of projects; track proj.title) {
              <div class="portfolio-card">
                <div class="project-icon-wrapper">
                  <i class="fas fa-project-diagram proj-icon"></i>
                </div>
                <h3>{{ proj.title }}</h3>
                <p>{{ proj.description }}</p>

                @if (proj.link) {
                  <a [href]="proj.link" target="_blank" class="project-link">
                    <i class="fas fa-external-link-alt"></i> Visit Live Site
                  </a>
                }

                <div class="tech-tags">
                  @for (tag of proj.tags; track tag) {
                    <span class="tag">{{ tag }}</span>
                  }
                </div>
              </div>
            }
          </div>

          <button class="slide-btn slide-next" (click)="scrollRight()" aria-label="Next Slide">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: [
    `
      .portfolio-section {
        background-color: var(--bg-color-dark);
        position: relative;
      }

      .slider-wrapper {
        position: relative;
        display: flex;
        align-items: center;
        margin: 0 auto;
      }

      .portfolio-grid {
        display: flex;
        overflow-x: auto;
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch;
        gap: 2.25rem;
        padding: 20px 5px;
        scrollbar-width: none;
        -ms-overflow-style: none;
        width: 100%;
      }

      .portfolio-grid::after {
        content: '';
        flex: 0 0 2rem;
        width: 2rem;
      }

      .portfolio-grid::-webkit-scrollbar {
        display: none;
      }

      .portfolio-card {
        flex: 0 0 auto;
        width: 330px;
        background-color: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: 12px;
        padding: 2.5rem 2rem;
        box-shadow: var(--shadow-dark);
        text-align: center;
        transition: var(--transition-smooth);
        backdrop-filter: blur(12px);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.25rem;
      }

      .portfolio-card:hover {
        transform: translateY(-5px);
        border-color: rgba(0, 242, 254, 0.4);
        box-shadow: 0 15px 35px rgba(0, 242, 254, 0.08);
      }

      .project-icon-wrapper {
        width: 65px;
        height: 65px;
        border-radius: 50%;
        background-color: rgba(0, 242, 254, 0.05);
        border: 1px solid rgba(0, 242, 254, 0.2);
        display: flex;
        justify-content: center;
        align-items: center;
        transition: var(--transition-smooth);
      }

      .portfolio-card:hover .project-icon-wrapper {
        background-color: rgba(155, 81, 224, 0.05);
        border-color: rgba(155, 81, 224, 0.2);
        transform: rotateY(180deg);
      }

      .proj-icon {
        font-size: 1.5rem;
        color: var(--primary-color);
        transition: var(--transition-smooth);
      }

      .portfolio-card:hover .proj-icon {
        color: var(--secondary-color);
      }

      .portfolio-card h3 {
        font-size: 1.3rem;
        color: #fff;
        font-family: var(--font-family-accent);
        min-height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .portfolio-card p {
        font-size: 0.95rem;
        color: var(--text-muted);
        line-height: 1.6;
        flex-grow: 1;
        text-align: justify;
      }

      .project-link {
        font-size: 0.85rem;
        font-weight: 700;
        color: var(--primary-color);
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 6px 12px;
        border: 1px solid rgba(0, 242, 254, 0.2);
        border-radius: 6px;
        transition: var(--transition-smooth);
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        cursor: pointer;
      }

      .project-link:hover {
        background-color: rgba(0, 242, 254, 0.05);
        border-color: var(--primary-color);
        box-shadow: var(--shadow-glow);
        text-shadow: var(--shadow-glow);
        transform: translateY(-2px);
      }

      .tech-tags {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.5rem;
        margin-top: auto;
      }

      .tag {
        font-size: 0.75rem;
        background-color: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.05);
        color: var(--text-color);
        padding: 4px 10px;
        border-radius: 4px;
        transition: var(--transition-smooth);
      }

      .portfolio-card:hover .tag {
        border-color: var(--primary-color);
        background-color: rgba(0, 242, 254, 0.02);
        color: var(--primary-color);
      }

      /* Slider Button Controls */
      .slide-btn {
        background-color: rgba(16, 20, 29, 0.85);
        border: 1px solid var(--border-color);
        color: var(--primary-color);
        border-radius: 50%;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.25rem;
        cursor: pointer;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 10;
        transition: var(--transition-smooth);
        box-shadow: var(--shadow-dark);
        backdrop-filter: blur(5px);
      }

      .slide-btn:hover {
        background-color: var(--primary-color);
        color: #05070a;
        box-shadow: var(--shadow-glow);
        border-color: var(--primary-color);
      }

      .slide-prev {
        left: -25px;
      }

      .slide-next {
        right: -25px;
      }

      @media (max-width: 992px) {
        .slide-prev {
          left: -10px;
        }
        .slide-next {
          right: -10px;
        }
      }

      @media (max-width: 576px) {
        .portfolio-card {
          width: 280px;
          padding: 2rem 1.5rem;
        }
        .slide-btn {
          width: 40px;
          height: 40px;
          font-size: 1rem;
        }
        .slide-prev {
          left: -5px;
        }
        .slide-next {
          right: -5px;
        }
      }
    `,
  ],
})
export class PortfolioComponent {
  @ViewChild('sliderContainer') sliderContainer!: ElementRef<HTMLDivElement>;

  protected readonly projects: Project[] = [
    {
      title: 'Smart Converter',
      description:
        'A massive multi-platform file conversion suite featuring 245+ tools across 15+ categories. Engineered with a FastAPI/Python 3.14 backend, an Angular web dashboard, and a premium Flutter mobile client. Leverages PostgreSQL database configurations and Docker containers.',
      tags: ['FastAPI', 'Python', 'Angular', 'Flutter', 'PostgreSQL', 'Docker'],
      link: 'https://smartconverter.net/',
    },
    {
      title: 'Smart Downloader',
      description:
        'A robust multi-platform media downloading and transcription service. Engineered with a FastAPI/Python backend utilizing yt-dlp, OpenAI Whisper AI for audio-to-text transcribing, and FFmpeg for media stream merging. Deployed serverless on AWS Lambda using Docker containers, integrated with Amazon S3, an Angular web dashboard, and a Flutter mobile app.',
      tags: ['FastAPI', 'Python', 'OpenAI Whisper', 'AWS Lambda', 'Angular', 'Flutter'],
      link: 'https://smartdownloader.techmindsforge.com',
    },
    {
      title: 'ChatWithData',
      description:
        'An agentic RAG (Retrieval-Augmented Generation) platform enabling interactive Q&A over documents and YouTube video transcripts. Features a FastAPI/Python backend utilizing LangChain, LangGraph (with LangSmith observability), a local FAISS vector database, and FastMCP server protocol. Serves web queries via a responsive Angular client and mobile requests using a cross-platform Flutter application.',
      tags: ['FastAPI', 'LangChain', 'LangGraph', 'FAISS', 'Angular', 'Flutter'],
      link: 'https://chatwithdata.techmindsforge.com',
    },
    {
      title: 'Smart Reader',
      description:
        'An advanced multi-format client-side document and ebook reader application. Engineered with custom ePUB parsing, PDF rendering (PDF.js), and dynamic document formatting (Mammoth.js for Word, SheetJS for Excel sheets, and Marked for Markdown). Uses browser IndexedDB for offline document storage, and includes detailed reading session analytics with customizable viewing configurations. Powered by an Angular web app and a Flutter mobile client.',
      tags: ['Angular', 'Flutter', 'ePub.js', 'IndexedDB', 'PDF.js', 'Mammoth.js'],
    },
    {
      title: 'URemit API Services',
      description:
        'Engineered high-performance backend Web APIs for financial transactions. Standardized routes and models, built logging configurations, and connected endpoints securely to MS SQL databases.',
      tags: ['C#', '.NET Core API', 'MS SQL Server', 'Swagger'],
    },
    {
      title: 'URemit Web App',
      description:
        'Developed custom screens and reactive interfaces matching customer criteria. Managed routing states, validated data structures, and resolved integration issues with backend REST APIs.',
      tags: ['Angular 14', 'TypeScript', 'HTML5/CSS3', 'RxJS'],
    },
    {
      title: 'URemit Mobile App',
      description:
        'Built cross-platform application screens using web technology. Designed dynamic list views, configured mobile push notices, and bundled build scripts using Android Studio.',
      tags: ['Ionic Framework', 'Capacitor', 'Angular', 'TypeScript'],
    },
    {
      title: 'URemit Desktop App',
      description:
        'Created desktop software integration modules supporting legacy devices. Integrated Windows Forms, automated update checks, and mapped API connections securely.',
      tags: ['C#', 'Windows Forms', 'REST API Client', 'XML'],
    },
    {
      title: 'Attendance Management',
      description:
        'Built during an internship. Automates employee logs, records clock-ins/outs, tracks leave approvals, and models dynamic dashboards. Used EF, jQuery, and MVC templates.',
      tags: ['ASP.NET MVC', 'Entity Framework', 'jQuery', 'Bootstrap'],
    },
    {
      title: 'GROCERY PRO App (FYP)',
      description:
        'Final Year Project. Direct Android application connecting local grocery systems to shoppers. Features search filters, item listings, cart storage, and mock-payment layouts.',
      tags: ['Android Studio', 'Java/Kotlin', 'SQLite', 'Firebase'],
    },
  ];

  scrollLeft() {
    this.sliderContainer.nativeElement.scrollBy({
      left: -350,
      behavior: 'smooth',
    });
  }

  scrollRight() {
    this.sliderContainer.nativeElement.scrollBy({
      left: 350,
      behavior: 'smooth',
    });
  }
}
