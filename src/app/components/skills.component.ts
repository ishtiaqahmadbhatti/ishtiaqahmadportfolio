import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section class="skills-section section-padding">
      <div class="container">
        <h2 class="section-title">Development Skills</h2>

        <!-- Interactive Search & Filtering Panel -->
        <div class="skills-filter-panel">
          <div class="search-box">
            <i class="fas fa-search search-icon"></i>
            <input 
              type="text" 
              placeholder="Search skills (e.g. Angular, AWS, Python...)" 
              [ngModel]="searchQuery()"
              (ngModelChange)="onSearchChange($event)"
            />
          </div>

          <div class="filter-buttons">
            @for (filter of filters; track filter) {
              <button 
                class="filter-btn" 
                [class.active]="selectedCategory() === filter"
                (click)="selectCategory(filter)"
              >
                {{ filter }}
              </button>
            }
          </div>
        </div>
        
        <!-- Skills Cards Grid -->
        @if (filteredCategories().length > 0) {
          <div class="skills-grid">
            @for (cat of filteredCategories(); track cat.title) {
              <div class="skill-card">
                <div class="card-header">
                  <i [class]="cat.icon + ' category-icon'"></i>
                  <h3>{{ cat.title }}</h3>
                </div>
                <ul class="skills-list">
                  @for (skill of cat.skills; track skill.name) {
                    <li>
                      <i [class]="skill.icon + ' skill-icon'"></i>
                      <span>{{ skill.name }}</span>
                    </li>
                  }
                </ul>
              </div>
            }
          </div>
        } @else {
          <div class="no-results-card">
            <i class="fas fa-search-minus alert-icon"></i>
            <p>No matching skills found for "{{ searchQuery() }}". Try adjusting your search keywords!</p>
          </div>
        }

      </div>
    </section>
  `,
  styles: [`
    .skills-section {
      background-color: var(--bg-color-dark);
      position: relative;
    }

    /* Filter & Search Bar styling */
    .skills-filter-panel {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
      margin-bottom: 4rem;
      flex-wrap: wrap;
    }

    .search-box {
      position: relative;
      flex: 1;
      max-width: 450px;
      min-width: 280px;
    }

    .search-box input {
      width: 100%;
      background-color: var(--bg-card);
      border: 1px solid var(--border-color);
      color: var(--text-color);
      padding: 0.85rem 1rem 0.85rem 2.75rem;
      border-radius: 8px;
      font-family: var(--font-family-main);
      font-size: 0.95rem;
      transition: var(--transition-smooth);
      backdrop-filter: blur(12px);
    }

    .search-box input:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: var(--shadow-glow);
    }

    .search-icon {
      position: absolute;
      left: 1.15rem;
      top: 50%;
      transform: translateY(-50%);
      color: var(--text-muted);
      font-size: 1rem;
      transition: var(--transition-smooth);
    }

    .search-box input:focus + .search-icon {
      color: var(--primary-color);
      text-shadow: var(--shadow-glow);
    }

    .filter-buttons {
      display: flex;
      gap: 0.75rem;
      flex-wrap: wrap;
    }

    .filter-btn {
      background-color: rgba(255, 255, 255, 0.01);
      border: 1px solid var(--border-color);
      color: var(--text-muted);
      padding: 8px 18px;
      border-radius: 6px;
      cursor: pointer;
      font-family: var(--font-family-accent);
      font-size: 0.8rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      transition: var(--transition-smooth);
    }

    .filter-btn:hover {
      color: var(--primary-color);
      border-color: rgba(0, 242, 254, 0.4);
      background-color: rgba(0, 242, 254, 0.02);
    }

    .filter-btn.active {
      color: var(--primary-color);
      border-color: var(--primary-color);
      background-color: rgba(0, 242, 254, 0.05);
      box-shadow: var(--shadow-glow);
      text-shadow: var(--shadow-glow);
    }

    /* Skills Grid mapping */
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
      gap: 2.5rem;
    }

    .skill-card {
      background-color: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 2.25rem;
      box-shadow: var(--shadow-dark);
      transition: var(--transition-smooth);
      backdrop-filter: blur(12px);
    }

    .skill-card:hover {
      transform: translateY(-5px);
      border-color: rgba(155, 81, 224, 0.4);
      box-shadow: 0 15px 35px rgba(155, 81, 224, 0.08);
    }

    .card-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.75rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      padding-bottom: 0.75rem;
    }

    .category-icon {
      font-size: 1.75rem;
      color: var(--secondary-color);
      text-shadow: var(--shadow-glow-purple);
    }

    .skill-card:hover .category-icon {
      color: var(--primary-color);
      text-shadow: var(--shadow-glow);
    }

    .card-header h3 {
      font-family: var(--font-family-accent);
      font-size: 1.4rem;
      color: #fff;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .skills-list {
      list-style: none;
      display: grid;
      grid-template-columns: 1fr;
      gap: 0.85rem;
    }

    .skills-list li {
      background-color: rgba(255, 255, 255, 0.02);
      padding: 0.75rem 1.15rem;
      border-radius: 6px;
      display: flex;
      align-items: center;
      gap: 0.85rem;
      font-size: 0.95rem;
      border-left: 3px solid var(--primary-color);
      transition: var(--transition-smooth);
    }

    .skills-list li:hover {
      background-color: rgba(0, 242, 254, 0.04);
      transform: translateX(5px);
      border-left-color: var(--secondary-color);
    }

    .skill-icon {
      color: var(--primary-color);
      font-size: 1.1rem;
      width: 20px;
      text-align: center;
      transition: var(--transition-smooth);
    }

    .skills-list li:hover .skill-icon {
      color: var(--secondary-color);
      transform: scale(1.15);
    }

    /* No results styling */
    .no-results-card {
      background-color: var(--bg-card);
      border: 1px solid var(--accent-color);
      border-radius: 12px;
      padding: 3rem;
      text-align: center;
      box-shadow: var(--shadow-dark);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      max-width: 600px;
      margin: 2rem auto 0;
    }

    .alert-icon {
      font-size: 3rem;
      color: var(--accent-color);
      text-shadow: 0 0 10px rgba(255, 62, 62, 0.3);
    }

    .no-results-card p {
      color: var(--text-muted);
      font-size: 1.1rem;
    }

    @media (max-width: 768px) {
      .skill-card {
        padding: 1.75rem;
      }
      .skills-filter-panel {
        flex-direction: column;
        align-items: stretch;
      }
      .search-box {
        max-width: unset;
      }
    }
  `]
})
export class SkillsComponent {
  protected readonly searchQuery = signal('');
  protected readonly selectedCategory = signal('All');

  protected readonly filters = ['All', 'Frontend', 'Backend', 'Database', 'DevOps', 'Mobile', 'Software & Tools', 'Data Science', 'Machine Learning', 'Deep Learning', 'Generative AI', 'Agentic AI'];

  protected readonly skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      icon: 'fas fa-laptop-code',
      skills: [
        { name: 'Angular 14+', icon: 'fab fa-angular' },
        { name: 'React JS', icon: 'fab fa-react' },
        { name: 'HTML 5', icon: 'fab fa-html5' },
        { name: 'CSS 3 & SASS', icon: 'fab fa-css3-alt' },
        { name: 'JavaScript & TypeScript', icon: 'fab fa-js' },
        { name: 'Bootstrap', icon: 'fab fa-bootstrap' }
      ]
    },
    {
      title: 'Backend',
      icon: 'fas fa-server',
      skills: [
        { name: 'C#', icon: 'fab fa-cuttlefish' },
        { name: 'Dot Net Framework & Core', icon: 'fas fa-code' },
        { name: 'Python', icon: 'fab fa-python' },
        { name: 'FastAPI', icon: 'fas fa-bolt' },
        { name: 'Dart', icon: 'fas fa-code' },
        { name: 'Flutter', icon: 'fas fa-mobile-alt' }
      ]
    },
    {
      title: 'Database',
      icon: 'fas fa-database',
      skills: [
        { name: 'MS SQL Server', icon: 'fas fa-database' },
        { name: 'PostgreSQL', icon: 'fas fa-database' },
        { name: 'MySQL', icon: 'fas fa-database' },
        { name: 'MongoDB', icon: 'fas fa-database' },
        { name: 'Firebase', icon: 'fas fa-database' },
        { name: 'Vector Databases (Chroma/FAISS)', icon: 'fas fa-database' }
      ]
    },
    {
      title: 'DevOps',
      icon: 'fas fa-cogs',
      skills: [
        { name: 'Amazon Web Services (AWS)', icon: 'fab fa-aws' },
        { name: 'Terraform', icon: 'fas fa-code-branch' },
        { name: 'Ansible', icon: 'fas fa-sliders-h' },
        { name: 'Docker', icon: 'fab fa-docker' },
        { name: 'Kubernetes', icon: 'fas fa-cubes' },
        { name: 'Jenkins', icon: 'fab fa-jenkins' },
        { name: 'ArgoCD', icon: 'fas fa-sync-alt' },
        { name: 'GitHub Actions', icon: 'fab fa-github' },
        { name: 'GitLab CI/CD', icon: 'fab fa-gitlab' },
        { name: 'Prometheus', icon: 'fas fa-chart-line' },
        { name: 'Grafana', icon: 'fas fa-tachometer-alt' }
      ]
    },
    {
      title: 'Mobile',
      icon: 'fas fa-mobile-alt',
      skills: [
        { name: 'Flutter Framework', icon: 'fas fa-mobile-alt' },
        { name: 'Dart Language', icon: 'fas fa-code' },
        { name: 'Ionic Framework', icon: 'fas fa-mobile-alt' },
        { name: 'Capacitor Runtime', icon: 'fas fa-plug' },
        { name: 'Android SDK & Gradle', icon: 'fab fa-android' },
        { name: 'Google Play Store Publication', icon: 'fab fa-google-play' },
        { name: 'AdMob Ad Integration', icon: 'fas fa-ad' }
      ]
    },
    {
      title: 'Software & Tools',
      icon: 'fas fa-tools',
      skills: [
        { name: 'Visual Studio & VS Code', icon: 'fas fa-file-code' },
        { name: 'MS SQL Server Management Studio', icon: 'fas fa-database' },
        { name: 'OpenAPI Swagger & Postman', icon: 'fas fa-network-wired' },
        { name: 'Android Studio', icon: 'fab fa-android' },
        { name: 'Antigravity', icon: 'fas fa-rocket' },
        { name: 'Claude Code', icon: 'fas fa-terminal' },
        { name: 'Jupyter Notebook', icon: 'fas fa-book-open' },
        { name: 'PostgreSQL', icon: 'fas fa-database' }
      ]
    },
    {
      title: 'Data Science',
      icon: 'fas fa-chart-bar',
      skills: [
        { name: 'Python Fundamentals & OOP', icon: 'fab fa-python' },
        { name: 'NumPy & Pandas Analysis', icon: 'fas fa-table' },
        { name: 'Plotting (Matplotlib & Seaborn)', icon: 'fas fa-chart-line' },
        { name: 'Web Scraping (Selenium)', icon: 'fas fa-spider' },
        { name: 'Exploratory Data Analysis (EDA)', icon: 'fas fa-chart-bar' },
        { name: 'SQL DDL, DML & Joins', icon: 'fas fa-database' },
        { name: 'SQL Window Functions & Subqueries', icon: 'fas fa-database' },
        { name: 'Descriptive & Inferential Stats', icon: 'fas fa-square-root-alt' },
        { name: 'Probability & Normal Distributions', icon: 'fas fa-percentage' },
        { name: 'Hypothesis Testing (t-test, ANOVA)', icon: 'fas fa-vial' },
        { name: 'Linear Algebra & SVD / PCA', icon: 'fas fa-calculator' }
      ]
    },
    {
      title: 'Machine Learning',
      icon: 'fas fa-project-diagram',
      skills: [
        { name: 'Linear & Polynomial Regression', icon: 'fas fa-chart-line' },
        { name: 'Gradient Descent Optimization', icon: 'fas fa-subway' },
        { name: 'Regularization (Lasso & Ridge)', icon: 'fas fa-sliders-h' },
        { name: 'Classification (KNN, Naive Bayes)', icon: 'fas fa-project-diagram' },
        { name: 'Logistic & Softmax Regression', icon: 'fas fa-percentage' },
        { name: 'Support Vector Machines (SVM)', icon: 'fas fa-shield-alt' },
        { name: 'Feature Selection & Engineering', icon: 'fas fa-filter' },
        { name: 'Cross Validation & Tuning', icon: 'fas fa-sync' }
      ]
    },
    {
      title: 'Deep Learning',
      icon: 'fas fa-brain',
      skills: [
        { name: 'PyTorch Framework', icon: 'fas fa-fire' },
        { name: 'PyTorch Autograd & Tensors', icon: 'fas fa-vector-square' },
        { name: 'Dataset & DataLoader Customization', icon: 'fas fa-tasks' },
        { name: 'GPU Training (CUDA)', icon: 'fas fa-microchip' },
        { name: 'Optuna Hyperparameter Tuning', icon: 'fas fa-sliders-h' },
        { name: 'Deep Learning (Keras & TF)', icon: 'fas fa-brain' },
        { name: 'Neural Networks (ANN & MLP)', icon: 'fas fa-project-diagram' },
        { name: 'Computer Vision (CNN)', icon: 'fas fa-eye' },
        { name: 'Sequence Models (RNN & LSTM)', icon: 'fas fa-history' },
        { name: 'Transformer & Attention Models', icon: 'fas fa-bolt' },
        { name: 'Neural Optimizers (Adam & SGD)', icon: 'fas fa-tachometer-alt' }
      ]
    },
    {
      title: 'Generative AI',
      icon: 'fas fa-brain',
      skills: [
        { name: 'LangChain Framework', icon: 'fas fa-link' },
        { name: 'LangChain Models & Components', icon: 'fas fa-cubes' },
        { name: 'Prompts & Structured Outputs', icon: 'fas fa-keyboard' },
        { name: 'LCEL (Chains & Runnables)', icon: 'fas fa-route' },
        { name: 'Document Loaders & Text Splitters', icon: 'fas fa-file-alt' },
        { name: 'Vector Stores & Retrievers', icon: 'fas fa-database' },
        { name: 'Retrieval Augmented Gen (RAG)', icon: 'fas fa-search' },
        { name: 'YouTube Chatbot (RAG System)', icon: 'fab fa-youtube' },
        { name: 'LangChain Tool Calling & Agents', icon: 'fas fa-project-diagram' },
        { name: 'Ollama (Local LLMs Masterclass)', icon: 'fas fa-desktop' }
      ]
    },
    {
      title: 'Agentic AI',
      icon: 'fas fa-robot',
      skills: [
        { name: 'LangGraph Framework', icon: 'fas fa-network-wired' },
        { name: 'LangGraph Core Concepts', icon: 'fas fa-project-diagram' },
        { name: 'Sequential & Parallel Workflows', icon: 'fas fa-code-branch' },
        { name: 'Conditional & Iterative Workflows', icon: 'fas fa-redo' },
        { name: 'Persistence & Time Travel', icon: 'fas fa-history' },
        { name: 'LangGraph + SQLite Integration', icon: 'fas fa-database' },
        { name: 'LangSmith Observability & Tracing', icon: 'fas fa-binoculars' },
        { name: 'MCP Clients & Servers', icon: 'fas fa-laptop-code' },
        { name: 'RAG using LangGraph', icon: 'fas fa-search' },
        { name: 'Human-in-the-Loop (HITL)', icon: 'fas fa-user-check' },
        { name: 'Short-Term & Long-Term Memory', icon: 'fas fa-brain' },
        { name: 'Autonomous Multi-Agent Systems', icon: 'fas fa-robot' },
        { name: 'Advanced RAG (CRAG & Self-RAG)', icon: 'fas fa-shield-alt' }
      ]
    }
  ];

  protected readonly filteredCategories = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const catFilter = this.selectedCategory();

    return this.skillCategories
      .filter(cat => catFilter === 'All' || cat.title === catFilter)
      .map(cat => {
        const matchingSkills = cat.skills.filter(skill => 
          skill.name.toLowerCase().includes(query)
        );
        return {
          ...cat,
          skills: matchingSkills
        };
      })
      .filter(cat => cat.skills.length > 0);
  });

  protected onSearchChange(newQuery: string) {
    this.searchQuery.set(newQuery);
  }

  protected selectCategory(category: string) {
    this.selectedCategory.set(category);
  }
}
