import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="not-found-container">
      <div class="glow-bg"></div>
      
      <div class="not-found-content">
        <h1 class="error-code">404</h1>
        
        <div class="glitch-wrapper">
          <h2 class="error-message">Lost in Cyber Space?</h2>
        </div>
        
        <p class="error-description">
          The page you are trying to access doesn't exist, has been moved, or is temporarily unavailable. Let's guide you back to safety.
        </p>

        <div class="action-wrapper">
          <a routerLink="/" class="back-home-btn">
            <i class="fas fa-home"></i>
            <span>Back to Home</span>
          </a>
        </div>
      </div>
      
      <div class="decorations">
        <span class="particle p1"></span>
        <span class="particle p2"></span>
        <span class="particle p3"></span>
        <span class="particle p4"></span>
      </div>
    </div>
  `,
  styles: [`
    .not-found-container {
      min-height: 85vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      background-color: #080b11; /* Match var(--bg-color-dark) */
      color: #fff;
      overflow: hidden;
      padding: 2rem;
      text-align: center;
      font-family: var(--font-family-main);
    }

    .glow-bg {
      position: absolute;
      width: 450px;
      height: 450px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(0, 242, 254, 0.08) 0%, rgba(155, 81, 224, 0.03) 70%, transparent 100%);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
      z-index: 1;
      filter: blur(50px);
    }

    .not-found-content {
      position: relative;
      z-index: 2;
      max-width: 550px;
      margin: 0 auto;
    }

    .error-code {
      font-family: var(--font-family-accent);
      font-size: 8rem;
      font-weight: 800;
      line-height: 1;
      margin: 0;
      background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: 0 0 40px rgba(0, 242, 254, 0.2);
      letter-spacing: 2px;
      animation: pulse 3s infinite ease-in-out;
    }

    .error-message {
      font-family: var(--font-family-accent);
      font-size: 2rem;
      font-weight: 700;
      color: #fff;
      margin-top: 1rem;
      margin-bottom: 1.25rem;
      text-transform: uppercase;
      letter-spacing: 1.5px;
    }

    .error-description {
      font-size: 1.05rem;
      color: var(--text-muted);
      line-height: 1.6;
      margin-bottom: 2.5rem;
      padding: 0 1rem;
    }

    .back-home-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
      color: #080b11;
      padding: 0.9rem 2rem;
      font-family: var(--font-family-accent);
      font-weight: 700;
      font-size: 0.95rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      border-radius: 50px;
      text-decoration: none;
      box-shadow: var(--shadow-glow);
      transition: var(--transition-smooth);
      border: 1px solid transparent;
    }

    .back-home-btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 25px rgba(0, 242, 254, 0.4);
      color: #080b11;
    }

    .back-home-btn i {
      font-size: 1.1rem;
    }

    /* Floating background particles */
    .decorations {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      pointer-events: none;
      z-index: 1;
    }

    .particle {
      position: absolute;
      background-color: var(--primary-color);
      border-radius: 50%;
      opacity: 0.3;
      filter: blur(1px);
    }

    .p1 { width: 8px; height: 8px; top: 15%; left: 20%; animation: float 12s infinite linear; }
    .p2 { width: 5px; height: 5px; top: 70%; left: 15%; animation: float 8s infinite linear reverse; background-color: var(--secondary-color); }
    .p3 { width: 6px; height: 6px; top: 25%; right: 20%; animation: float 15s infinite linear; background-color: var(--secondary-color); }
    .p4 { width: 10px; height: 10px; top: 75%; right: 15%; animation: float 10s infinite linear reverse; }

    @keyframes pulse {
      0%, 100% { transform: scale(1); text-shadow: 0 0 40px rgba(0, 242, 254, 0.2); }
      50% { transform: scale(1.05); text-shadow: 0 0 60px rgba(0, 242, 254, 0.4); }
    }

    @keyframes float {
      0% { transform: translateY(0) rotate(0deg); opacity: 0.1; }
      50% { transform: translateY(-30px) rotate(180deg); opacity: 0.4; }
      100% { transform: translateY(0) rotate(360deg); opacity: 0.1; }
    }

    @media (max-width: 768px) {
      .error-code { font-size: 6rem; }
      .error-message { font-size: 1.5rem; }
      .error-description { font-size: 0.95rem; }
    }
  `]
})
export class NotFoundComponent {}
