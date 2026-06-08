import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="resume-section section-padding">
      <div class="container">
        <h2 class="section-title">Resume</h2>

        <!-- Download CTA Button -->
        <div class="resume-actions">
          <a 
            href="resume.pdf" 
            download="Ishtiaq_Ahmad_Resume.pdf" 
            class="download-btn"
          >
            <i class="fas fa-file-download"></i>
            <span>Download PDF Resume</span>
          </a>
        </div>

        <!-- Professional Resume Sheet -->
        <div class="resume-sheet">
          
          <!-- Resume Header Info -->
          <div class="resume-header">
            <div class="header-main">
              <h1>Ishtiaq Ahmad</h1>
              <p class="title-subtitle">Full Stack Software, AI, Cloud & DevOps Engineer</p>
            </div>
            <div class="header-contact">
              <div class="contact-item">
                <i class="fas fa-envelope"></i>
                <a href="mailto:ishtiaq.ahmad.devpro@gmail.com">ishtiaq.ahmad.devpro&#64;gmail.com</a>
              </div>
              <div class="contact-item">
                <i class="fab fa-linkedin"></i>
                <a href="https://linkedin.com/in/ishtiaqahmadbhatti" target="_blank" rel="noopener noreferrer">linkedin.com/in/ishtiaqahmadbhatti</a>
              </div>
              <div class="contact-item">
                <i class="fab fa-github"></i>
                <a href="https://github.com/ishtiaqahmadbhatti" target="_blank" rel="noopener noreferrer">github.com/ishtiaqahmadbhatti</a>
              </div>
              <div class="contact-item">
                <i class="fab fa-gitlab"></i>
                <a href="https://gitlab.com/ishtiaqahmadbhatti" target="_blank" rel="noopener noreferrer">gitlab.com/ishtiaqahmadbhatti</a>
              </div>
              <div class="contact-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>Rawalpindi, Pakistan</span>
              </div>
            </div>
          </div>

          <hr class="resume-divider" />

          <!-- Resume Content Columns -->
          <div class="resume-content-grid">
            
            <!-- Left Column: Summary, Experience -->
            <div class="resume-left-col">
              
              <!-- Professional Summary -->
              <div class="resume-block">
                <h3 class="block-title"><i class="fas fa-user-circle"></i> Professional Summary</h3>
                <p class="summary-text">
                  Result-oriented Full Stack Software, AI, Cloud & DevOps Engineer with over 3 years of hands-on experience designing, developing, and deploying scalable web, mobile, and cloud-native applications. Proficient in building robust APIs with .NET and FastAPI, creating responsive frontends in Angular, and developing cross-platform mobile apps with Flutter. Expert in DevOps practices, CI/CD automation, and cloud management using AWS, Terraform, Docker, and Kubernetes. Deeply skilled in building stateful, multi-agent AI systems, custom Model Context Protocol (MCP) clients/servers, and semantic retrieval (RAG) pipelines using LangChain and LangGraph.
                </p>
              </div>

              <!-- Professional Experience -->
              <div class="resume-block">
                <h3 class="block-title"><i class="fas fa-briefcase"></i> Work Experience</h3>
                
                <!-- Job 1 -->
                <div class="timeline-item">
                  <div class="item-header">
                    <h4>Full Stack & DevOps Engineer</h4>
                    <span class="date-badge">2022 - 2025</span>
                  </div>
                  <p class="company-name">URemit International Corporation, UAE (Remote)</p>
                  <ul class="points-list">
                    <li>Engineered high-performance, secure backend REST APIs and microservices using C# .NET Core, ensuring high availability for financial remittance channels.</li>
                    <li>Developed responsive, dynamic SPA user interfaces and client dashboards using Angular 14+ and HTML5/SASS.</li>
                    <li>Built cross-platform and hybrid mobile applications using Ionic and Capacitor, bridging native hardware features with web logic.</li>
                    <li>Deployed and managed cloud infrastructure on Amazon Web Services (AWS), utilizing EC2, S3, RDS, IAM, API Gateway, Lambda, and Route53.</li>
                    <li>Automated infrastructure provisioning and configuration management using Terraform scripts and Ansible playbooks.</li>
                    <li>Containerized applications using Docker and orchestrated container deployments inside Kubernetes clusters (AWS EKS).</li>
                    <li>Set up comprehensive automated CI/CD pipelines using Jenkins, GitHub Actions, and GitLab CI/CD with integrated security/quality gates (SonarQube, Trivy).</li>
                  </ul>
                </div>

                <!-- Job 2 -->
                <div class="timeline-item">
                  <div class="item-header">
                    <h4>Software Engineering Intern</h4>
                    <span class="date-badge">2022 (3 Months)</span>
                  </div>
                  <p class="company-name">Attendance Management System Project</p>
                  <ul class="points-list">
                    <li>Developed web interfaces for user check-in dashboards using ASP.NET MVC, Entity Framework, jQuery, and Bootstrap.</li>
                    <li>Optimized MS SQL Server database queries and stored procedures, improving page load speeds by 25%.</li>
                    <li>Leveraged Ajax calls for asynchronous form submissions and real-time validation checks.</li>
                  </ul>
                </div>

              </div>

            </div>

            <!-- Right Column: Education, Specialized Training -->
            <div class="resume-right-col">
              
              <!-- Education -->
              <div class="resume-block">
                <h3 class="block-title"><i class="fas fa-graduation-cap"></i> Education</h3>
                <div class="education-item">
                  <h4>BS in Computer Science</h4>
                  <p class="school-name">Arid Agriculture University Rawalpindi</p>
                  <p class="edu-meta">2018 - 2022 | CGPA: 3.45 / 4.0</p>
                  <p class="edu-desc">Gained comprehensive foundation in software engineering, OOP, databases, networks, data structures, and algorithms.</p>
                </div>
              </div>

              <!-- Specialized Training -->
              <div class="resume-block">
                <h3 class="block-title"><i class="fas fa-graduation-cap"></i> Specialized Training</h3>
                
                <div class="certification-item">
                  <h5>Model Context Protocol (MCP)</h5>
                  <p class="cert-meta">2026</p>
                  <p class="cert-desc">Built local/remote MCP servers, tools integration, and Claude Desktop integrations.</p>
                </div>

                <div class="certification-item">
                  <h5>Practical Deep Learning using PyTorch</h5>
                  <p class="cert-meta">2026</p>
                  <p class="cert-desc">GPU CUDA training, Custom Dataset/DataLoader, and Optuna tuning.</p>
                </div>

                <div class="certification-item">
                  <h5>Agentic AI using LangGraph</h5>
                  <p class="cert-meta">2025</p>
                  <p class="cert-desc">Stateful cyclic workflows, SQLite persistence, and LangSmith telemetry.</p>
                </div>

                <div class="certification-item">
                  <h5>Generative AI using LangChain</h5>
                  <p class="cert-meta">2025</p>
                  <p class="cert-desc">LangChain chains/LCEL, retrievers, RAG chatbot, and local Ollama model agents.</p>
                </div>

                <div class="certification-item">
                  <h5>100 Days of Deep Learning</h5>
                  <p class="cert-meta">2023 - 2024</p>
                  <p class="cert-desc">Neural architectures including ANN, CNN, RNN, LSTM, and Transformers.</p>
                </div>

                <div class="certification-item">
                  <h5>Data Science Mentorship Program</h5>
                  <p class="cert-meta">2022 - 2023</p>
                  <p class="cert-desc">Python OOP, SQL, probability, inferential statistics, linear algebra, and ML algorithms.</p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  `,
  styles: [`
    .resume-section {
      background-color: var(--bg-color-light);
      border-top: 1px solid var(--border-color);
      border-bottom: 1px solid var(--border-color);
    }

    .resume-actions {
      display: flex;
      justify-content: center;
      margin-bottom: 3rem;
    }

    .download-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
      color: #080b11;
      padding: 0.95rem 2.25rem;
      font-family: var(--font-family-accent);
      font-weight: 700;
      font-size: 0.95rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      border-radius: 50px;
      text-decoration: none;
      box-shadow: var(--shadow-glow);
      transition: var(--transition-smooth);
    }

    .download-btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 25px rgba(0, 242, 254, 0.4);
      color: #080b11;
    }

    .download-btn i {
      font-size: 1.1rem;
    }

    /* Resume Sheet Styling */
    .resume-sheet {
      background-color: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 16px;
      padding: 3.5rem;
      box-shadow: var(--shadow-dark);
      backdrop-filter: blur(12px);
      color: var(--text-color);
      max-width: 1100px;
      margin: 0 auto;
    }

    .resume-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 2rem;
    }

    .header-main h1 {
      font-family: var(--font-family-accent);
      font-size: 2.8rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: #fff;
      margin-bottom: 0.5rem;
    }

    .title-subtitle {
      color: var(--primary-color);
      font-family: var(--font-family-accent);
      font-size: 1.15rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      text-shadow: var(--shadow-glow);
    }

    .header-contact {
      display: flex;
      flex-direction: column;
      gap: 0.65rem;
      font-size: 0.9rem;
    }

    .contact-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      color: var(--text-muted);
    }

    .contact-item i {
      color: var(--secondary-color);
      width: 16px;
      text-align: center;
    }

    .contact-item a {
      color: var(--text-muted);
      text-decoration: none;
      transition: var(--transition-smooth);
    }

    .contact-item a:hover {
      color: var(--primary-color);
    }

    .resume-divider {
      border: none;
      height: 1px;
      background: linear-gradient(90deg, rgba(255, 255, 255, 0.02), var(--border-color), rgba(255, 255, 255, 0.02));
      margin: 2.5rem 0;
    }

    /* Grid Layout */
    .resume-content-grid {
      display: grid;
      grid-template-columns: 1.8fr 1.2fr;
      gap: 3.5rem;
    }

    .resume-block {
      margin-bottom: 2.5rem;
    }

    .block-title {
      font-family: var(--font-family-accent);
      font-size: 1.3rem;
      color: #fff;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 1.5rem;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      padding-bottom: 0.5rem;
    }

    .block-title i {
      color: var(--primary-color);
    }

    .summary-text {
      color: var(--text-muted);
      line-height: 1.7;
      text-align: justify;
      font-size: 0.95rem;
    }

    /* Experience timeline */
    .timeline-item {
      position: relative;
      padding-left: 1.5rem;
      border-left: 2px solid rgba(0, 242, 254, 0.15);
      margin-bottom: 2rem;
    }

    .timeline-item::before {
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: var(--primary-color);
      left: -6px;
      top: 6px;
      box-shadow: var(--shadow-glow);
    }

    .item-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.25rem;
    }

    .item-header h4 {
      font-family: var(--font-family-accent);
      font-size: 1.05rem;
      color: #fff;
    }

    .date-badge {
      font-family: var(--font-family-accent);
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--primary-color);
      background-color: rgba(0, 242, 254, 0.08);
      padding: 3px 10px;
      border-radius: 20px;
      border: 1px solid rgba(0, 242, 254, 0.2);
    }

    .company-name {
      color: var(--secondary-color);
      font-size: 0.9rem;
      font-weight: 500;
      margin-bottom: 0.85rem;
    }

    .points-list {
      list-style-type: none;
      padding-left: 0;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .points-list li {
      position: relative;
      padding-left: 1.25rem;
      color: var(--text-muted);
      font-size: 0.9rem;
      line-height: 1.5;
    }

    .points-list li::before {
      content: '•';
      color: var(--primary-color);
      font-weight: bold;
      position: absolute;
      left: 0;
      top: 0;
    }

    /* Education styling */
    .education-item {
      background-color: rgba(255, 255, 255, 0.01);
      border: 1px solid rgba(255, 255, 255, 0.03);
      padding: 1.5rem;
      border-radius: 8px;
    }

    .education-item h4 {
      font-family: var(--font-family-accent);
      font-size: 1.05rem;
      color: #fff;
      margin-bottom: 0.25rem;
    }

    .school-name {
      color: var(--secondary-color);
      font-weight: 500;
      font-size: 0.9rem;
      margin-bottom: 0.25rem;
    }

    .edu-meta {
      font-size: 0.85rem;
      color: var(--primary-color);
      font-weight: 500;
      margin-bottom: 0.75rem;
    }

    .edu-desc {
      color: var(--text-muted);
      font-size: 0.85rem;
      line-height: 1.5;
    }

    /* Certifications styling */
    .certification-item {
      background-color: rgba(255, 255, 255, 0.01);
      border: 1px solid rgba(255, 255, 255, 0.02);
      padding: 1rem 1.25rem;
      border-radius: 8px;
      margin-bottom: 1rem;
    }

    .certification-item h5 {
      font-family: var(--font-family-accent);
      font-size: 0.95rem;
      color: #fff;
      margin-bottom: 0.2rem;
    }

    .cert-meta {
      font-size: 0.8rem;
      color: var(--secondary-color);
      font-weight: 500;
      margin-bottom: 0.4rem;
    }

    .cert-desc {
      color: var(--text-muted);
      font-size: 0.8rem;
      line-height: 1.4;
    }

    @media (max-width: 992px) {
      .resume-content-grid {
        grid-template-columns: 1fr;
        gap: 2.5rem;
      }
      .resume-sheet {
        padding: 2.5rem;
      }
    }

    @media (max-width: 768px) {
      .resume-header {
        flex-direction: column;
        gap: 1.5rem;
      }
      .header-main h1 {
        font-size: 2.2rem;
      }
      .resume-sheet {
        padding: 1.75rem;
      }
    }
  `]
})
export class ResumeComponent {}
