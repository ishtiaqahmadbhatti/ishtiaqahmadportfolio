import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TimelineItem {
  date: string;
  title: string;
  subtitle: string;
  description: string;
  align: 'left' | 'right';
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="about-section section-padding">
      <div class="container">
        <h2 class="section-title">About Me</h2>
        <div class="about-content">
          <div class="about-bio">
            <p>
              I am a Computer Science graduate with a high-standing CGPA of <strong>3.45/4.0</strong> from <strong>Arid Agriculture University Rawalpindi, Pakistan</strong>. From the outset of my academic journey, I have been deeply driven by the challenge of transforming complex theoretical concepts into robust, production-ready systems. Today, as a Full Stack Software, AI, Cloud & DevOps Engineer, I operate at the intersection of application development, cloud-native deployments, and advanced cognitive systems, crafting high-performance digital solutions that scale.
            </p>
            <p>
              With over 3+ years of professional remote engineering experience at <strong>URemit International Corporation (UAE)</strong>, I specialize in architecting reliable backend infrastructures using <strong>.NET Core (C#)</strong> and <strong>FastAPI (Python)</strong>, complemented by reactive, high-fidelity user interfaces built with <strong>Angular</strong>. My mobile and desktop development expertise covers building cross-platform apps using <strong>Flutter</strong>, hybrid solutions with <strong>Ionic and Capacitor</strong>, and legacy integration client software. To support these systems, I build automated CI/CD orchestration pipelines, manage containerized clusters using <strong>Docker</strong> and <strong>Kubernetes</strong>, and engineer secure, resilient cloud solutions on <strong>AWS</strong>.
            </p>
            <p>
              A major focus of my technical expansion is in artificial intelligence and deep learning. Through rigorous training and hands-on projects—including the <em>Data Science Mentorship Program</em> and <em>100 Days of Deep Learning</em>—I have mastered high-dimensional tensors, GPU-accelerated training, and custom neural architectures in <strong>PyTorch</strong>. I design state-of-the-loop Agentic AI workflows using <strong>LangChain</strong> and <strong>LangGraph</strong>, build local and remote <strong>Model Context Protocol (MCP)</strong> servers to interface LLMs with custom enterprise databases, and configure SQLite-backed state persistence alongside <strong>LangSmith</strong> telemetry for production observability.
            </p>
            <p>
              I believe in clean-code architectures, meticulous observability, and security-first engineering. Whether implementing a real-time transactional system, optimizing cloud infrastructure costs, or developing an agentic RAG solution to interact with structured and unstructured datasets, I approach every project with a devotion to performance and fine details. My goal is to continually push boundaries, innovate alongside emerging technological trends, and construct intelligent software that drives tangible value.
            </p>
          </div>
          
          <div class="about-details">
            <!-- Contact Card -->
            <div class="details-card">
              <h3>Contact Details</h3>
              <ul>
                <li>
                  <i class="fas fa-phone-alt"></i>
                  <div>
                    <span class="label">Phone</span>
                    <a href="tel:+923156721703" class="value">+92 315-6721703</a>
                  </div>
                </li>
                <li>
                  <i class="fas fa-envelope"></i>
                  <div>
                    <span class="label">Email</span>
                    <a href="mailto:ishtiaq.ahmad.devpro@gmail.com" class="value">ishtiaq.ahmad.devpro&#64;gmail.com</a>
                  </div>
                </li>
                <li>
                  <i class="fas fa-map-marker-alt"></i>
                  <div>
                    <span class="label">Location</span>
                    <span class="value">Bahria Town Phase 8, Rawalpindi, Pakistan</span>
                  </div>
                </li>
              </ul>
            </div>

            <!-- Online Presence Card -->
            <div class="details-card">
              <h3>Online Presence</h3>
              <ul>
                <li>
                  <i class="fab fa-linkedin-in"></i>
                  <div>
                    <span class="label">LinkedIn</span>
                    <a href="https://www.linkedin.com/in/ishtiaqahmadbhatti/" target="_blank" class="value hover-link">linkedin.com/in/ishtiaqahmadbhatti/</a>
                  </div>
                </li>
                <li>
                  <i class="fab fa-github"></i>
                  <div>
                    <span class="label">GitHub</span>
                    <a href="https://github.com/ishtiaqahmadbhatti" target="_blank" class="value hover-link">github.com/ishtiaqahmadbhatti</a>
                  </div>
                </li>
                <li>
                  <i class="fab fa-gitlab"></i>
                  <div>
                    <span class="label">GitLab</span>
                    <a href="https://gitlab.com/ishtiaqahmadbhatti" target="_blank" class="value hover-link">gitlab.com/ishtiaqahmadbhatti</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <!-- Academic & Career Timeline Section -->
          <div class="education-timeline">
            <h3 class="timeline-heading">Education & Journey</h3>
            
            <!-- Desktop Winding Snake Timeline -->
            <div class="snake-timeline">
              <div 
                *ngFor="let item of timeline; let i = index" 
                class="snake-node"
                [style.grid-row]="getGridRow(i)"
                [style.grid-column]="getGridCol(i)"
              >
                <div *ngIf="i === 0" class="endpoint-label start">Start</div>
                <div *ngIf="i === timeline.length - 1" class="endpoint-label end">End</div>

                <div class="snake-card">
                  <span class="timeline-date">{{ item.date }}</span>
                  <h4>{{ item.title }}</h4>
                  <div class="timeline-sub">{{ item.subtitle }}</div>
                  <p class="timeline-desc">{{ item.description }}</p>
                </div>
                
                <div 
                  *ngIf="i < timeline.length - 1" 
                  [class]="'connector ' + getConnectorClass(i)"
                ></div>
              </div>
            </div>

            <!-- Mobile Vertical Timeline -->
            <div class="timeline-wrapper">
              <div 
                *ngFor="let item of timeline" 
                class="timeline-node" 
                [class.left]="item.align === 'left'" 
                [class.right]="item.align === 'right'"
              >
                <div class="timeline-marker"></div>
                <div class="timeline-box">
                  <span class="timeline-date">{{ item.date }}</span>
                  <h4>{{ item.title }}</h4>
                  <div class="timeline-sub">{{ item.subtitle }}</div>
                  <p class="timeline-desc">{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-section {
      background-color: var(--bg-color-light);
      border-top: 1px solid var(--border-color);
      border-bottom: 1px solid var(--border-color);
    }

    .about-content {
      display: flex;
      flex-direction: column;
      gap: 4.5rem;
    }

    .about-bio {
      font-size: 1.15rem;
      line-height: 1.85;
      color: var(--text-color);
      max-width: 100%;
      margin: 0 auto;
      text-align: justify;
    }

    .about-bio p {
      margin-bottom: 1.5rem;
    }

    .about-bio p:last-child {
      margin-bottom: 0;
    }

    .about-bio strong {
      color: var(--primary-color);
      font-weight: 600;
    }

    .about-details {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
      gap: 2.5rem;
    }

    .details-card {
      background-color: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 2.5rem;
      box-shadow: var(--shadow-dark);
      transition: var(--transition-smooth);
      backdrop-filter: blur(12px);
    }

    .details-card:hover {
      transform: translateY(-5px);
      border-color: rgba(0, 242, 254, 0.4);
      box-shadow: 0 15px 35px rgba(0, 242, 254, 0.08);
    }

    .details-card h3 {
      font-family: var(--font-family-accent);
      font-size: 1.5rem;
      color: var(--accent-color);
      margin-bottom: 1.75rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      padding-bottom: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .details-card ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .details-card ul li {
      display: flex;
      align-items: flex-start;
      gap: 1.25rem;
    }

    .details-card ul li i {
      color: var(--primary-color);
      font-size: 1.3rem;
      margin-top: 0.2rem;
      width: 24px;
      text-align: center;
      transition: var(--transition-smooth);
    }

    .details-card:hover ul li i {
      transform: scale(1.1);
      text-shadow: var(--shadow-glow);
    }

    .details-card .label {
      display: block;
      font-size: 0.8rem;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 0.15rem;
    }

    .details-card .value {
      font-size: 1.05rem;
      color: var(--text-color);
      word-break: break-all;
    }

    .details-card a.value:hover {
      color: var(--primary-color);
      text-shadow: var(--shadow-glow);
    }

    /* Timeline Section Heading */
    .timeline-heading {
      font-family: var(--font-family-accent);
      font-size: 1.75rem;
      color: #fff;
      text-align: center;
      margin-bottom: 1.5rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      position: relative;
    }

    .timeline-heading::after {
      content: '';
      position: absolute;
      width: 50px;
      height: 3px;
      background-color: var(--primary-color);
      left: 50%;
      transform: translateX(-50%);
      bottom: -10px;
      border-radius: 1px;
      box-shadow: var(--shadow-glow);
    }

    @media (max-width: 768px) {
      .details-card {
        padding: 2rem;
      }
    }

    .snake-timeline {
      display: none;
    }

    @media (min-width: 993px) {
      .snake-timeline {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-row-gap: 6rem;
        grid-column-gap: 3.5rem;
        position: relative;
        max-width: 1100px;
        margin: 4rem auto 2rem;
        padding: 40px;
      }
      .timeline-wrapper {
        display: none;
      }
    }

    .snake-node {
      position: relative;
      z-index: 2;
    }

    .snake-card {
      background-color: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 1.5rem;
      box-shadow: var(--shadow-dark);
      backdrop-filter: blur(12px);
      transition: var(--transition-smooth);
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 0.5rem;
      text-align: left;
    }

    .snake-card:hover {
      transform: translateY(-5px);
      border-color: var(--primary-color);
      box-shadow: 0 10px 25px rgba(0, 242, 254, 0.08);
    }

    .snake-card h4 {
      font-size: 1.1rem;
      color: #fff;
      margin-bottom: 0.15rem;
      font-family: var(--font-family-accent);
    }

    .snake-card .timeline-date {
      font-family: var(--font-family-accent);
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--primary-color);
      text-transform: uppercase;
      letter-spacing: 1px;
      align-self: flex-start;
      background-color: rgba(0, 242, 254, 0.05);
      border: 1px solid rgba(0, 242, 254, 0.2);
      padding: 2px 8px;
      border-radius: 4px;
      margin-bottom: 0.5rem;
    }

    .snake-card .timeline-sub {
      font-size: 0.85rem;
      color: var(--accent-color);
      font-weight: 500;
    }

    .snake-card .timeline-desc {
      font-size: 0.85rem;
      color: var(--text-muted);
      line-height: 1.5;
      text-align: justify;
    }

    /* Start/End Label styling */
    .endpoint-label {
      position: absolute;
      font-family: var(--font-family-accent);
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
      color: #05070a;
      padding: 3px 10px;
      border-radius: 12px;
      box-shadow: var(--shadow-glow);
      z-index: 10;
    }

    .endpoint-label.start {
      top: -15px;
      left: 15px;
    }

    .endpoint-label.end {
      bottom: -15px;
      right: 15px;
    }

    /* Connectors */
    .connector {
      pointer-events: none;
    }

    .connector.line-right {
      position: absolute;
      top: 50%;
      left: 100%;
      width: 3.5rem; /* Match gap */
      height: 3px;
      background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
      transform: translateY(-50%);
      z-index: 1;
      box-shadow: var(--shadow-glow);
    }

    .connector.line-left {
      position: absolute;
      top: 50%;
      right: 100%;
      width: 3.5rem; /* Match gap */
      height: 3px;
      background: linear-gradient(-90deg, var(--primary-color), var(--secondary-color));
      transform: translateY(-50%);
      z-index: 1;
      box-shadow: var(--shadow-glow);
    }

    .connector.loop-right {
      position: absolute;
      top: 50%;
      left: calc(100% - 10px);
      width: calc(3.5rem + 20px);
      height: calc(100% + 6rem + 3px); /* 100% height + row gap (6rem) */
      border: 3px solid var(--secondary-color);
      border-left: none;
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
      z-index: 1;
      box-shadow: 2px 0 10px rgba(155, 81, 224, 0.2);
    }

    .connector.loop-left {
      position: absolute;
      top: 50%;
      right: calc(100% - 10px);
      width: calc(3.5rem + 20px);
      height: calc(100% + 6rem + 3px); /* 100% height + row gap (6rem) */
      border: 3px solid var(--primary-color);
      border-right: none;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      z-index: 1;
      box-shadow: -2px 0 10px rgba(0, 242, 254, 0.2);
    }
  `]
})
export class AboutComponent {
  protected readonly timeline: TimelineItem[] = [
    {
      date: '2018 - 2022',
      title: 'BS Computer Science',
      subtitle: 'Arid Agriculture University Rawalpindi',
      description: 'Acquired core computing knowledge in programming, databases, data structures, and computer networks. Graduated with a high-standing CGPA of 3.45/4.0.',
      align: 'left'
    },
    {
      date: '2022 (3 Months)',
      title: 'Software Engineering Intern',
      subtitle: 'Attendance Management System Project',
      description: 'Worked with ASP.NET MVC, Entity Framework, jQuery, Bootstrap, Ajax, and MS SQL Server to deploy and coordinate automated user check-in dashboards.',
      align: 'right'
    },
    {
      date: '2022 - 2025',
      title: 'Full Stack & DevOps Engineer (3+ Years)',
      subtitle: 'URemit International Corporation, UAE (Remote)',
      description: 'Engineered high-performance backend Web APIs and secure financial system routes. Developed reactive customer dashboards in Angular, cross-platform mobile apps with Ionic/Capacitor, and legacy Windows integration clients. Managed container orchestration (Docker & Kubernetes) and automated cloud deployments on AWS.',
      align: 'left'
    },
    {
      date: '2022 - 2023',
      title: 'Data Science Mentorship Program',
      subtitle: 'Data Science & Machine Learning Training',
      description: 'Completed a comprehensive mentorship program focusing on Python fundamentals, OOP, SQL databases, descriptive/inferential statistics, linear algebra, and supervised/unsupervised machine learning models (Regression, KNN, SVM, Naive Bayes, PCA).',
      align: 'right'
    },
    {
      date: '2023 - 2024',
      title: '100 Days of Deep Learning',
      subtitle: 'Advanced Deep Learning & Transformer Architectures',
      description: 'Completed a comprehensive 100-day course covering Artificial Neural Networks (ANN), Convolutional Neural Networks (CNN), Recurrent Neural Networks (RNN), LSTMs, GRUs, and Transformer architectures (Self-Attention, Multi-Head Attention, Encoder-Decoder Seq2Seq).',
      align: 'left'
    },
    {
      date: '2025',
      title: 'Generative AI using LangChain',
      subtitle: 'LangChain Framework, RAG Systems, & Autonomous Agents',
      description: 'Completed hands-on training on the LangChain framework, including Prompt Templates, Structured Outputs, and custom workflow pipelines via LangChain Expression Language (LCEL Runnables). Developed memory-backed Retrieval Augmented Generation (RAG) applications (e.g. YouTube Chatbot) with splitters, loaders, Vector Stores, and Retrievers. Implemented Tool Calling Autonomous Agents (ReAct loops) and hosted local open-source LLMs (Llama3, Mistral) locally using Ollama.',
      align: 'right'
    },
    {
      date: '2025',
      title: 'Agentic AI using LangGraph',
      subtitle: 'LangGraph Stateful Multi-Agent Orchestration & Observability',
      description: 'Mastered production-grade Agentic AI workflows using LangGraph. Designed stateful cyclic workflows including sequential, parallel, conditional, and iterative graph structures. Configured SQLite-backed state persistence, time travel debugging/rollback systems, custom Model Context Protocol (MCP) clients, and Human-in-the-loop (HITL) manual approval interfaces. Integrated end-to-end telemetry, tracing, and monitoring with LangSmith.',
      align: 'left'
    },
    {
      date: '2026',
      title: 'Model Context Protocol (MCP)',
      subtitle: 'MCP Client-Server Architecture & Claude Integrations',
      description: 'Completed dedicated training on Anthropic\'s Model Context Protocol (MCP). Built and deployed local and remote MCP servers exposing tools, resources, and prompt configurations to LLM environments. Integrated custom servers with Claude Desktop. Designed robust client-server schemas and explored the full MCP initialization, transport, and connection lifecycles.',
      align: 'right'
    },
    {
      date: '2026',
      title: 'Practical Deep Learning using PyTorch',
      subtitle: 'Practical Deep Learning using PyTorch',
      description: 'Completed practical deep learning program using PyTorch. Built custom neural pipelines implementing high-dimensional Tensors, PyTorch Autograd backpropagation graphs, custom Dataset and DataLoader structures, and custom nn.Module classes. Deployed GPU-accelerated training models (CUDA), conducted hyperparameter tuning using Optuna, and developed CNN, RNN, and LSTM sequence models (e.g. Next Word Predictors & QA systems).',
      align: 'left'
    }
  ];

  getGridRow(index: number): number {
    return Math.floor(index / 3) + 1;
  }

  getGridCol(index: number): number {
    const row = this.getGridRow(index);
    if (row % 2 === 1) {
      return (index % 3) + 1;
    } else {
      return 3 - (index % 3);
    }
  }

  getConnectorClass(index: number): string {
    if (index === this.timeline.length - 1) return 'none';
    
    const row = this.getGridRow(index);
    const posInRow = index % 3; // 0, 1, or 2
    
    if (row % 2 === 1) { // Odd rows (1, 3): left-to-right
      if (posInRow === 2) {
        return 'loop-right'; // From right of this card, loops down to next card below
      }
      return 'line-right'; // Straight line to the right
    } else { // Even row (2): right-to-left
      if (posInRow === 2) {
        return 'loop-left'; // From left of this card, loops down to next card below
      }
      return 'line-left'; // Straight line to the left
    }
  }
}
