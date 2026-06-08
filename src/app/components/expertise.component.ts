import { Component, signal } from '@angular/core';

interface SubSection {
  title: string;
  points: string[];
}

interface ExpertiseTab {
  id: string;
  label: string;
  icon: string;
  description: string;
  sections: SubSection[];
}

@Component({
  selector: 'app-expertise',
  standalone: true,
  imports: [],
  template: `
    <section class="expertise-section section-padding">
      <div class="container">
        <!-- DevOps, Cloud & Mobile Section -->
        <h2 class="section-title">DevOps, Cloud & Mobile Expertise</h2>
        
        <div class="expertise-container" style="margin-bottom: 5rem;">
          <!-- Tab Bar Navigation -->
          <div class="tabs-scroll-wrapper">
            <div class="tabs-bar">
              @for (tab of devOpsTabs; track tab.id) {
                <button 
                  class="tab-btn" 
                  [class.active]="activeDevOpsTabId() === tab.id"
                  (click)="setActiveDevOpsTab(tab.id)"
                >
                  <i [class]="tab.icon + ' tab-icon'"></i>
                  <span>{{ tab.label }}</span>
                </button>
              }
            </div>
          </div>

          <!-- Tab Content Display -->
          @if (activeDevOpsTab(); as tab) {
            <div class="tab-content">
              <div class="tab-header-details">
                <div class="tab-title-group">
                  <i [class]="tab.icon + ' tab-glow-icon'"></i>
                  <h3>{{ tab.label }} Specialization</h3>
                </div>
                <p class="tab-desc">{{ tab.description }}</p>
              </div>
              
              <div class="details-grid">
                @for (sec of tab.sections; track sec.title) {
                  <div class="detail-card animate-fade-in">
                    <h4>{{ sec.title }}</h4>
                    <ul class="detail-list">
                      @for (pt of sec.points; track pt) {
                        <li>
                          <i class="fas fa-check-circle check-icon"></i>
                          <span>{{ pt }}</span>
                        </li>
                      }
                    </ul>
                  </div>
                }
              </div>
            </div>
          }
        </div>

        <!-- AI & Data Science Section -->
        <h2 class="section-title" style="margin-top: 4rem;">AI & Data Science Specialization</h2>
        
        <div class="expertise-container">
          <!-- Tab Bar Navigation -->
          <div class="tabs-scroll-wrapper">
            <div class="tabs-bar">
              @for (tab of aiTabs; track tab.id) {
                <button 
                  class="tab-btn" 
                  [class.active]="activeAITabId() === tab.id"
                  (click)="setActiveAITab(tab.id)"
                >
                  <i [class]="tab.icon + ' tab-icon'"></i>
                  <span>{{ tab.label }}</span>
                </button>
              }
            </div>
          </div>

          <!-- Tab Content Display -->
          @if (activeAITab(); as tab) {
            <div class="tab-content">
              <div class="tab-header-details">
                <div class="tab-title-group">
                  <i [class]="tab.icon + ' tab-glow-icon'"></i>
                  <h3>{{ tab.label }} Specialization</h3>
                </div>
                <p class="tab-desc">{{ tab.description }}</p>
              </div>
              
              <div class="details-grid">
                @for (sec of tab.sections; track sec.title) {
                  <div class="detail-card animate-fade-in">
                    <h4>{{ sec.title }}</h4>
                    <ul class="detail-list">
                      @for (pt of sec.points; track pt) {
                        <li>
                          <i class="fas fa-check-circle check-icon"></i>
                          <span>{{ pt }}</span>
                        </li>
                      }
                    </ul>
                  </div>
                }
              </div>
            </div>
          }
        </div>

      </div>
    </section>
  `,
  styles: [`
    .expertise-section {
      background-color: var(--bg-color-light);
      border-top: 1px solid var(--border-color);
      border-bottom: 1px solid var(--border-color);
    }

    .expertise-container {
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }

    /* Tabs Bar styling */
    .tabs-scroll-wrapper {
      width: 100%;
      overflow-x: auto;
      scrollbar-width: none;
      -ms-overflow-style: none;
      padding: 5px 0;
    }

    .tabs-scroll-wrapper::-webkit-scrollbar {
      display: none;
    }

    .tabs-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      padding-bottom: 1rem;
      width: 100%;
      justify-content: flex-start;
    }

    .tab-btn {
      background: transparent;
      border: 1px solid transparent;
      color: var(--text-muted);
      padding: 10px 18px;
      border-radius: 8px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.65rem;
      font-family: var(--font-family-accent);
      font-size: 0.85rem;
      font-weight: 700;
      text-transform: uppercase;
      transition: var(--transition-smooth);
      flex-shrink: 0;
    }

    .tab-btn:hover {
      color: var(--primary-color);
      background-color: rgba(0, 242, 254, 0.03);
      border-color: rgba(0, 242, 254, 0.1);
    }

    .tab-btn.active {
      color: var(--primary-color);
      border-color: var(--primary-color);
      background-color: rgba(0, 242, 254, 0.05);
      box-shadow: var(--shadow-glow);
      text-shadow: var(--shadow-glow);
    }

    .tab-icon {
      font-size: 1.1rem;
    }

    /* Tab Content Styling */
    .tab-content {
      animation: fadeIn 0.4s ease-out;
    }

    .tab-header-details {
      margin-bottom: 2.5rem;
      background-color: var(--bg-card);
      border: 1px solid var(--border-color);
      padding: 2rem;
      border-radius: 12px;
      backdrop-filter: blur(12px);
    }

    .tab-title-group {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 0.75rem;
    }

    .tab-glow-icon {
      font-size: 1.75rem;
      color: var(--primary-color);
      text-shadow: var(--shadow-glow);
    }

    .tab-title-group h3 {
      font-size: 1.6rem;
      color: #fff;
    }

    .tab-desc {
      color: var(--text-muted);
      font-size: 1.1rem;
      line-height: 1.7;
      text-align: justify;
    }

    /* Grid layout for detailed cards */
    .details-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), 1fr));
      gap: 2rem;
    }

    @media (max-width: 576px) {
      .details-grid {
        grid-template-columns: 1fr;
      }
    }

    .detail-card {
      background-color: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 2.25rem;
      box-shadow: var(--shadow-dark);
      transition: var(--transition-smooth);
      backdrop-filter: blur(12px);
    }

    .detail-card:hover {
      transform: translateY(-3px);
      border-color: rgba(0, 242, 254, 0.3);
      box-shadow: 0 10px 25px rgba(0, 242, 254, 0.05);
    }

    .detail-card h4 {
      font-family: var(--font-family-accent);
      font-size: 1.25rem;
      color: var(--accent-color);
      margin-bottom: 1.5rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      padding-bottom: 0.5rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .detail-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .detail-list li {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      font-size: 0.95rem;
      line-height: 1.6;
      color: var(--text-color);
      text-align: justify;
    }

    .check-icon {
      color: var(--primary-color);
      font-size: 1rem;
      margin-top: 0.2rem;
      flex-shrink: 0;
    }

    /* Animations */
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-fade-in {
      animation: fadeIn 0.5s ease-out;
    }
  `]
})
export class ExpertiseComponent {
  protected readonly activeDevOpsTabId = signal('aws');
  protected readonly activeAITabId = signal('gen-ai');

  protected readonly devOpsTabs: ExpertiseTab[] = [
    {
      id: 'aws',
      label: 'AWS',
      icon: 'fab fa-aws',
      description: 'My expertise in Amazon Web Services (AWS) is extensive, covering a wide array of services crucial for building scalable, secure, and highly available cloud infrastructure.',
      sections: [
        {
          title: 'Core Compute & Networking',
          points: [
            'Understanding of EC2 instances, security groups, Elastic IPs, and various EC2 instance types.',
            'Deep knowledge of VPC for network isolation, subnets (public/private), Internet Gateways, NAT Gateways, NACLs, VPC Peering, and Transit Gateway for complex network architectures.'
          ]
        },
        {
          title: 'Storage Solutions',
          points: [
            'Proficient in Elastic Block Storage (EBS) volumes, snapshots, lifecycle management, encryption, and AMI creation and sharing.',
            'Experienced with Amazon S3 for object storage, static website hosting, versioning, replication, logging, storage classes, and data lifecycle management.'
          ]
        },
        {
          title: 'Load Balancing & Auto Scaling',
          points: [
            'Expertise in Classic, Application, and Network Load Balancers for traffic distribution.',
            'Skilled in Auto Scaling Groups (ASG) for dynamic scaling and ensuring high availability.'
          ]
        },
        {
          title: 'Identity & Access Management (IAM)',
          points: [
            'In-depth understanding of IAM service, groups, password policies, Multi-Factor Authentication (MFA), roles, and using AWS CLI with various account configurations.'
          ]
        },
        {
          title: 'Content Delivery & DNS',
          points: [
            'Knowledge of CloudFront for content delivery, invalidation, access control, and integration with S3.',
            'Proficient in Route53 for DNS management, domain registration, various routing policies (Simple, Weightage, Geolocation, Latency, Failover, Multivalue Answer, IP Based), health checks, traffic policies, and DNS firewall.'
          ]
        },
        {
          title: 'Database Services',
          points: [
            'Hands-on experience with Amazon RDS for relational databases, including creating databases, connecting instances, Read Replicas, Multi-AZ deployments, and Aurora database management.',
            'Familiar with Amazon DynamoDB for NoSQL solutions, including table creation, partition/sort keys, read/write capacity units, local/global secondary indexes, point-in-time recovery, backups, and global tables.'
          ]
        },
        {
          title: 'Messaging & Monitoring',
          points: [
            'Familiarity with Amazon Simple Email Service (SES) for email verification and customization.',
            'Knowledge of Simple Notification Service (SNS) for various notification types (SMS, HTTP/S).',
            'Proficient in CloudWatch for monitoring, custom dashboards, alarms (billing, composite), agent installation, and log analysis.'
          ]
        },
        {
          title: 'Serverless & API Management',
          points: [
            'Strong understanding of AWS Lambda for serverless functions, event triggering (S3, ALB), cold vs. hot starts, layers, versions, and aliases.',
            'Expertise in API Gateway for building serverless APIs, including HTTP/REST integrations, mock integrations, direct DynamoDB integration, parameter handling, request/response transformations, authentication with IAM roles, and API key protection.'
          ]
        }
      ]
    },
    {
      id: 'k8s',
      label: 'Kubernetes',
      icon: 'fas fa-cubes',
      description: 'My expertise in Kubernetes encompasses a wide range of core concepts, advanced features, and practical applications, making me proficient in deploying, managing, and scaling containerized applications.',
      sections: [
        {
          title: 'Core Concepts & Architecture',
          points: [
            'In-depth knowledge of Kubernetes architecture, including master and worker nodes, API Server, Scheduler, etcd, Controller Manager, Kubelet, Kube-proxy, and Container Network Interface (CNI).'
          ]
        },
        {
          title: 'Fundamental Objects & Ingress',
          points: [
            'Strong grasp of essential Kubernetes objects such as Pods, Namespaces, Deployments, StatefulSets, DaemonSets, ReplicaSets, and CronJobs.',
            'Expertise in exposing applications using Services and managing external access with Ingress for traffic routing and re-routing.'
          ]
        },
        {
          title: 'Tools & Provisioning',
          points: [
            'Proficient in using kubectl for cluster interaction, defining resources with YAML manifests, and implementing monitoring with Prometheus and Grafana.',
            'Experience with Minikube for local development, Kind (Kubernetes in Docker) for local clusters, and understanding of managed services like Amazon EKS, Azure AKS, and Google GKE.'
          ]
        },
        {
          title: 'Security, Scaling & Projects',
          points: [
            'Knowledge of Role-Based Access Control (RBAC) and implementation of Horizontal Pod Autoscaling (HPA) for dynamic application capacity.',
            'Deployed and managed 3-tier applications (front-end, back-end, databases) on Kubernetes and implemented CI/CD pipelines for microservices.'
          ]
        },
        {
          title: 'Kubernetes Deployment Strategies',
          points: [
            'Recreate: Completely shutting down the old version of an application before spinning up the new one. While simple, it causes downtime and is generally not recommended for production.',
            'Rolling Update: The most common default strategy in Kubernetes. It gradually replaces old pods with new ones, ensuring continuous availability with zero downtime. New pods are created before old ones are terminated.',
            'Blue/Green Deployment: Maintains two identical production environments (Blue for current, Green for new). The new version is deployed and tested in Green. Once validated, traffic is instantly switched from Blue to Green, ensuring zero downtime and easy rollback.',
            'Canary Deployment: A controlled rollout where a new version is exposed to a small subset of users (e.g., 5-10%) first. This allows for real-world testing and performance monitoring before a full rollout to all users, minimizing risk and ensuring zero downtime.',
            'Progressive Delivery: An advanced approach that extends Canary deployments by enabling a gradual rollout to different user segments or regions, often integrated with CI/CD pipelines for automated and controlled releases. Ensures zero downtime.',
            'A/B Testing: Used for experimentation, directing different user groups to different application versions to compare their performance or user engagement.',
            'Shadow Testing (Shadow Deployment): Involves sending a copy of live production traffic to a new version of the application running in parallel, without affecting live users. This helps validate the new version under real load before full deployment.'
          ]
        }
      ]
    },
    {
      id: 'terraform',
      label: 'Terraform',
      icon: 'fas fa-code-branch',
      description: 'My expertise in Terraform focuses on leveraging Infrastructure as Code (IaC) principles to efficiently provision, manage, and scale cloud resources across various providers.',
      sections: [
        {
          title: 'Infrastructure as Code (IaC)',
          points: [
            'Deep understanding of Terraform as an IaC tool for automating the creation, modification, and destruction of infrastructure. This approach ensures consistent and repeatable deployments, minimizing manual errors and accelerating delivery.'
          ]
        },
        {
          title: 'Core Concepts & Workflow',
          points: [
            'Providers: Extensive experience with various Terraform providers, especially the AWS provider, for managing cloud services.',
            'HCL (HashiCorp Configuration Language): Skilled in writing declarative infrastructure configurations using HCL.',
            'Resources & Data Sources: Defining and managing infrastructure components (e.g., EC2 instances, S3 buckets, VPCs) using Terraform resources and retrieving external data using data sources.',
            'Variables & Outputs: Utilizing input variables for flexible configurations and defining outputs to extract deployment information.',
            'Workflow: Proficient in the standard Terraform workflow: terraform init, plan, apply, and destroy.'
          ]
        },
        {
          title: 'State Management',
          points: [
            'In-depth knowledge of Terraform state files, remote backends (e.g. S3), state locks (DynamoDB), importing existing resources, and manipulating state command keys like terraform state rm.'
          ]
        },
        {
          title: 'Advanced Modularity & Applications',
          points: [
            'Experience in creating and utilizing Terraform modules for developing reusable, standardized infrastructure templates, workspaces, conditional expressions, loops, dynamic blocks, and automated EKS cluster deployments.'
          ]
        }
      ]
    },
    {
      id: 'docker',
      label: 'Docker',
      icon: 'fab fa-docker',
      description: 'My expertise in Docker enables me to containerize applications efficiently, ensuring consistent environments across development, testing, and production.',
      sections: [
        {
          title: 'Architecture & Core Concepts',
          points: [
            'Understanding what Docker is, its history (DotCloud, CNCF), and solving the "It works on my machine" problem by creating isolated container environments.',
            'In-depth knowledge of Docker components (Engine, Daemon, CLI) and runtimes like Containerd.',
            'Virtualization vs. Containerization: Clear distinction between VMs and Docker containers, highlighting the lightweight nature of containers sharing the host OS kernel.'
          ]
        },
        {
          title: 'Images, Best Practices & Volumes',
          points: [
            'Dockerfile Instructions: Skilled in FROM, WORKDIR, COPY, RUN, CMD, and ENTRYPOINT commands.',
            'Docker Volumes & Data Persistence: Expertise in managing container data using Docker Volumes to ensure data persistence.',
            'Multi-Stage Builds: Implementing multi-stage builds to create optimized, smaller final runtime images.'
          ]
        },
        {
          title: 'Compose & Advanced Tools',
          points: [
            'Docker Compose: Proficient in compose configs orchestrating multi-container environments with a single command.',
            'Docker Scout & Init: Vulnerability scanning with Docker Scout, and automatic boilerplate generation with Docker Init.'
          ]
        }
      ]
    },
    {
      id: 'jenkins',
      label: 'Jenkins',
      icon: 'fab fa-jenkins',
      description: 'My expertise in Jenkins is centered on building robust Continuous Integration and Continuous Delivery (CI/CD) pipelines, automating the software development lifecycle from code commit to deployment.',
      sections: [
        {
          title: 'Administration & Setup',
          points: [
            'CI/CD Fundamentals: Deep understanding of automating code integration and release cycles.',
            'Setup: Installing and configuring Jenkins on virtual machines (e.g., AWS EC2 instances).'
          ]
        },
        {
          title: 'Job & Pipeline Creation',
          points: [
            'Jobs: Freestyle projects, Declarative Pipelines (Groovy scripts mapping Stage setups), Multi-Configuration, and Multi-Branch Pipelines.',
            'Master-Agent Architecture: Setting up and managing Jenkins in a distributed architecture with a master node and agent nodes.'
          ]
        },
        {
          title: 'Triggers, Shared Libs & Secrets',
          points: [
            'Triggers: SCM Polling, GitHub Webhooks, and cron scheduled builds.',
            'Shared Libraries: Developing shared libraries for code reusability across pipelines.',
            'Credentials: Managing PAT tokens, credentials loading, and SSH private keys securely.'
          ]
        },
        {
          title: 'DevSecOps & Integrations',
          points: [
            'DevSecOps: Image scanning with Trivy, dependency scanning with OWASP Dependency-Check, and static analysis quality gates with SonarQube.',
            'Integrations: Automated builds for Docker, Kubernetes deployments, ArgoCD GitOps triggers, Prometheus/Grafana logs, and Helm charts packaging.'
          ]
        }
      ]
    },
    {
      id: 'ansible',
      label: 'Ansible',
      icon: 'fas fa-sliders-h',
      description: 'My expertise in Ansible focuses on automation for configuration management, application deployment, and orchestration, enabling efficient and scalable IT infrastructure management.',
      sections: [
        {
          title: 'Core Architecture & Playbooks',
          points: [
            'Configuration Management: Automating server setups to ensure consistency across dev, staging, and production.',
            'Architecture: Agentless design using SSH for communication, simplifying configuration setups.',
            'Playbooks: Writing declarative Ansible Playbooks in YAML to define desired target configurations.'
          ]
        },
        {
          title: 'Inventory & Tasks Orchestration',
          points: [
            'Inventory: Host file configs, server groups, and custom execution variables.',
            'Modules & Ad-Hoc Commands: apt, service, copy, ping modules and quick one-off CLI execution tasks.',
            'Variables & Facts: Gathering system facts, variables matching, templates creation, SSH key configs, and CI/CD integration.'
          ]
        }
      ]
    },
    {
      id: 'gitlab',
      label: 'GitLab',
      icon: 'fab fa-gitlab',
      description: 'My expertise in GitLab spans its comprehensive capabilities for the entire DevOps lifecycle, from source code management to advanced CI/CD and DevSecOps practices.',
      sections: [
        {
          title: 'SCM & Integrated CI/CD',
          points: [
            'SCM: Git hosting, branching, merge requests, code reviews, and group permissions.',
            'Pipelines: Defining multi-stage pipelines in .gitlab-ci.yml files executed by shared or self-hosted GitLab Runners.'
          ]
        },
        {
          title: 'Variables, DevSecOps & Registries',
          points: [
            'Secrets: Masked variables and pipeline environment credentials.',
            'DevSecOps: SAST quality scans, Trivy image scans, container registries, Web IDE modifications, Auto DevOps configurations, and comparisons with Github/Bitbucket.'
          ]
        }
      ]
    },
    {
      id: 'shell',
      label: 'Shell Scripting',
      icon: 'fas fa-terminal',
      description: 'My expertise in Shell Scripting is fundamental for automating repetitive tasks, managing system configurations, and orchestrating complex workflows in Linux environments.',
      sections: [
        {
          title: 'Scripting Fundamentals',
          points: [
            'Introduction: Linux kernel interfaces, shell variables declaration, and shebang scripts syntax.',
            'Operations: User inputs (read -p), command line arguments ($1, $2, etc.), if/else conditionals, loops (for, while), functions, and error handling exit codes ($?).'
          ]
        },
        {
          title: 'Log Management & Rotation',
          points: [
            'Logs: Log parsing, archiving backups (tar/zip), cron scheduling automation, file permissions, and cloud ops scripting with AWS CLI.'
          ]
        },
        {
          title: 'Real-World Projects',
          points: [
            'Automating AWS cloud operations and resource provisioning.',
            'Implementing backup and rotation strategies for server directories and log files.',
            'Setting up and managing development environments in Linux.'
          ]
        }
      ]
    },
    {
      id: 'mobile',
      label: 'Mobile Development',
      icon: 'fas fa-mobile-alt',
      description: 'Building high-performance cross-platform and hybrid mobile applications using modern web and native technologies.',
      sections: [
        {
          title: 'Flutter & Dart',
          points: [
            'Framework Integration: Developing natively compiled cross-platform applications for Android and iOS using the Flutter SDK.',
            'Dart Language: Implementing asynchronous programming, reactive state streams, and object-oriented architectures.'
          ]
        },
        {
          title: 'Ionic & Capacitor',
          points: [
            'Hybrid App Development: Building high-performance web-native hybrid mobile interfaces using the Ionic framework.',
            'Capacitor Runtimes: Utilizing Capacitor plugins to bridge web application logic with native device hardware APIs (Camera, Geolocation, Storage).'
          ]
        },
        {
          title: 'Native Integration & Deployment',
          points: [
            'Build Automation: Conducting mobile builds, managing native dependencies, and configuring Android SDK and Gradle build scripts.',
            'Deployment Pipelines: Package distribution setups, internal staging tests, and release pipelines.'
          ]
        },
        {
          title: 'Google Play Console & Monetization',
          points: [
            'App Store Publication: Managing complete app release lifecycles in Google Play Console (drafting store listings, configuring internal/closed testing tracks, target audience settings, and rollouts).',
            'AdMob Integration: Implementing mobile ad integrations via Google AdMob SDK (banner, interstitial, and rewarded video ads) and setting up secure ads.txt compliance.'
          ]
        }
      ]
    }
  ];

  protected readonly aiTabs: ExpertiseTab[] = [
    {
      id: 'gen-ai',
      label: 'Generative & Agentic AI',
      icon: 'fas fa-robot',
      description: 'Orchestrating robust stateful agent environments, multi-agent networks, transcript indexers, and local LLM pipelines.',
      sections: [
        {
          title: 'Agentic Frameworks & Multi-Agents',
          points: [
            'LangGraph Multi-Agent Systems: Designing stateful cyclic workflow graphs, sequential/parallel node execution, and conditional/iterative routing logic.',
            'Human-in-the-Loop (HITL): Constructing runtime approval gates, interactive human interruptions, and manual state-override interfaces.'
          ]
        },
        {
          title: 'Observability & Tooling',
          points: [
            'LangSmith Observability & Telemetry: Implementing production tracing, debugging run latency, tracking token costs, and optimizing LLM/graph pipelines.',
            'State Persistence & Time Travel: Implementing SQLite checkpointers to support durable agent memory, state histories, and time-travel rollback/replay capabilities.'
          ]
        },
        {
          title: 'Generative Frameworks & Local LLMs',
          points: [
            'LangChain Core & LCEL: Constructing prompts, models, structured output formatters, output parsers, and custom chains via LCEL Runnables.',
            'Local LLMs (Ollama) & Agents: Deploying private open-source models (Llama3, Mistral) on edge hardware, configuring custom Modelfiles, and creating Tool Calling Agents.'
          ]
        },
        {
          title: 'RAG & Custom Client Integration',
          points: [
            'RAG & Chatbot Applications: Building advanced semantic search loaders, text splitters, Vector Stores, and custom Retrievers (e.g. YouTube Chatbot, Resume Chat).',
            'Model Context Protocol (MCP): Designing client-server architectures, building/deploying local and remote MCP servers (Claude Desktop integration), and constructing custom MCP Clients to connect LLMs to external data and tools.'
          ]
        }
      ]
    },
    {
      id: 'deep-learning',
      label: 'Deep Learning & Neural Networks',
      icon: 'fas fa-network-wired',
      description: 'Architecting and optimizing artificial neural networks, computer vision, sequence modeling, and transformer pipelines using PyTorch.',
      sections: [
        {
          title: 'PyTorch Core & Data Pipes',
          points: [
            'PyTorch Framework: Expertly utilizing PyTorch Tensors, Autograd automatic differentiation engine, custom nn.Module declarations, and GPU-accelerated training structures (CUDA).',
            'Custom Data Pipelines: Overriding PyTorch Dataset and DataLoader classes to implement optimized batch preprocessing and asynchronous data streaming.'
          ]
        },
        {
          title: 'Neural Network Design & Tuning',
          points: [
            'Artificial Neural Networks (ANN): Designing Multi-Layer Perceptrons (MLP), optimizing Forward/Backpropagation, and resolving Vanishing/Exploding Gradient problems using early stopping and weight decay.',
            'Optuna Hyperparameter Tuning: Integrating Optuna to run automated trial pruners and search algorithms for neural network hyperparameters.'
          ]
        },
        {
          title: 'Vision, Sequence & Transformers',
          points: [
            'Computer Vision (CNN) & Transfer Learning: Structuring Convolutional Neural Networks, using data augmentation, and applying pre-trained weights (ResNet, VGG) via PyTorch Transfer Learning pipelines.',
            'Sequence Models (RNN/LSTM): Building Recurrent Neural Networks, Long Short-Term Memory (LSTM) cells, and Gated Recurrent Units (GRU) in PyTorch to deploy Next Word Predictors and Question Answering systems.',
            'Transformers & Attention Mechanisms: Designing Encoder-Decoder Seq2Seq layouts, Scaled Dot-Product Self-Attention, Multi-Head Attention blocks, Positional Encodings, and Layer Normalization.'
          ]
        }
      ]
    },
    {
      id: 'machine-learning',
      label: 'Traditional Machine Learning',
      icon: 'fas fa-chart-line',
      description: 'Building reliable regression, classification, and clustering models using robust feature engineering and validation pipelines.',
      sections: [
        {
          title: 'Supervised Models',
          points: [
            'Regression Models: Implementing Simple, Multiple Linear, and Polynomial Regression.',
            'Classification Algorithms: Deploying Logistic Regression, Softmax Multiclass Regression, K-Nearest Neighbors (KNN), Naive Bayes, and Support Vector Machines (SVM).'
          ]
        },
        {
          title: 'Optimization & Regularization',
          points: [
            'Regularization: Preventing overfitting using Ridge (L2), Lasso (L1) Regularization, and ElasticNet.',
            'Gradient Descent Optimization: Implementing Batch, Stochastic, and Mini-Batch Gradient Descent models from scratch.'
          ]
        },
        {
          title: 'Dimensionality & Validation',
          points: [
            'Feature Engineering & PCA: Feature selection (Filter, Wrapper, Embedded methods), handling missing values, multicollinearity, and Principal Component Analysis (PCA) / Singular Value Decomposition (SVD).',
            'Validation & Metrics: Implementing Cross Validation, Confusion Matrices, Precision, Recall, F1 Score, and ROC-AUC curves.'
          ]
        }
      ]
    },
    {
      id: 'data-science',
      label: 'Data Science & Analytics',
      icon: 'fas fa-chart-bar',
      description: 'Data extraction, pipeline cleaning, exploratory data analysis, and user-facing dashboard deployment.',
      sections: [
        {
          title: 'Data Wrangling & Exploration',
          points: [
            'Analysis & Cleanliness: Data structures manipulation using NumPy & Pandas (Series, DataFrames, GroupBy, Merging, MultiIndex, Pivoting, Vectorized Strings).',
            'Exploratory Data Analysis (EDA): Performing comprehensive smartphone and laptop datasets case studies to extract market insights.'
          ]
        },
        {
          title: 'Extraction & Visualization',
          points: [
            'Web Scraping & ETL: Gathering data via advanced Web Scraping (Selenium, BeautifulSoup, requests) and orchestrating ETL workflows.',
            'Visualization: Plotting interactive charts and graphs using Matplotlib, Seaborn, and Plotly Express.'
          ]
        },
        {
          title: 'Application Dashboards',
          points: [
            'Web App Dashboards: Deploying Data Science and data analytics scripts into user-facing web tools using Flask and Streamlit.'
          ]
        }
      ]
    },
    {
      id: 'stats',
      label: 'Statistics & Probability',
      icon: 'fas fa-percentage',
      description: 'Statistical modeling, probability distributions, hypothesis testing, and mathematical foundations.',
      sections: [
        {
          title: 'Descriptive & Inferential Statistics',
          points: [
            'Statistical Analysis: Measures of center, variance, Normal/Gaussian Distribution, Central Limit Theorem, and Confidence Intervals.'
          ]
        },
        {
          title: 'Hypothesis Testing & Foundations',
          points: [
            'Hypothesis Testing: Formulating null/alternative claims and calculating p-values using t-tests, Chi-Square tests, and ANOVA tests.',
            'Linear Algebra: Mappings of Vectors, Matrices operations, and Eigen decomposition.'
          ]
        }
      ]
    },
    {
      id: 'sql',
      label: 'SQL, NoSQL & Vector DBs',
      icon: 'fas fa-database',
      description: 'Expertise in SQL relational design, NoSQL document modeling, and high-dimensional vector embeddings for AI systems.',
      sections: [
        {
          title: 'Database Design & Schema',
          points: [
            'Database Design: Designing relational database schemas and normalizations (1NF, 2NF, 3NF) in MS SQL Server, PostgreSQL, and MySQL.'
          ]
        },
        {
          title: 'Query Logic & Optimization',
          points: [
            'Queries: Writing highly optimized JOINs, subqueries, grouping/sorting procedures, and advanced window functions across SQL dialects.'
          ]
        },
        {
          title: 'NoSQL & Vector Databases',
          points: [
            'NoSQL Document Store: Modeling flexible JSON schemas, collections, indexes, and aggregation pipelines in MongoDB.',
            'Vector Databases: Managing high-dimensional vector indexes, semantic similarity searches, distance metrics, and document chunk retrieval in ChromaDB and FAISS.'
          ]
        },
        {
          title: 'Stored Logic & Transactions',
          points: [
            'Database Logic: Mappings of Views, User Defined Functions (UDFs), Stored Procedures, and Transaction Controls.'
          ]
        }
      ]
    }
  ];

  protected activeDevOpsTab() {
    return this.devOpsTabs.find(t => t.id === this.activeDevOpsTabId());
  }

  protected setActiveDevOpsTab(tabId: string) {
    this.activeDevOpsTabId.set(tabId);
  }

  protected activeAITab() {
    return this.aiTabs.find(t => t.id === this.activeAITabId());
  }

  protected setActiveAITab(tabId: string) {
    this.activeAITabId.set(tabId);
  }
}
