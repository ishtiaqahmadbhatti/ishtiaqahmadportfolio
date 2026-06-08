import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <section class="contact-section section-padding">
      <div class="container">
        <h2 class="section-title">Get In Touch</h2>
        <p class="contact-subtitle">Have a project in mind, a job opportunity, or just want to chat? Feel free to reach out!</p>
        
        <div class="contact-grid">
          <!-- Info Details Column -->
          <div class="contact-info">
            <div class="info-block">
              <i class="fas fa-paper-plane info-icon"></i>
              <div>
                <h4>Drop a line</h4>
                <p><a href="mailto:ishtiaq.ahmad.devpro@gmail.com">ishtiaq.ahmad.devpro&#64;gmail.com</a></p>
              </div>
            </div>
            
            <div class="info-block">
              <i class="fas fa-map-marked-alt info-icon"></i>
              <div>
                <h4>Current Base</h4>
                <p>Bahria Town Phase 8, Rawalpindi, Pakistan</p>
              </div>
            </div>

            <div class="info-block">
              <i class="fas fa-clock info-icon"></i>
              <div>
                <h4>Availability</h4>
                <p>Mon - Fri: 9:00 AM - 6:00 PM (GMT+5)</p>
              </div>
            </div>
          </div>

          <!-- Interactive Form Column -->
          <div class="contact-form-wrapper">
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="contact-form">
              
              <!-- Form Field: Name -->
              <div class="form-group">
                <label for="name" [class.error]="hasError('name')">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  formControlName="name"
                  placeholder="Enter your name"
                  [class.invalid]="hasError('name')"
                />
                @if (hasError('name')) {
                  <span class="error-msg">
                    Name is required.
                  </span>
                }
              </div>

              <!-- Form Field: Email -->
              <div class="form-group">
                <label for="email" [class.error]="hasError('email')">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  formControlName="email"
                  placeholder="Enter your email"
                  [class.invalid]="hasError('email')"
                />
                @if (hasError('email')) {
                  <span class="error-msg">
                    Please enter a valid email address.
                  </span>
                }
              </div>

              <!-- Form Field: Message -->
              <div class="form-group">
                <label for="message" [class.error]="hasError('message')">Message</label>
                <textarea 
                  id="message" 
                  formControlName="message" 
                  rows="5"
                  placeholder="Write your message here..."
                  [class.invalid]="hasError('message')"
                ></textarea>
                @if (hasError('message')) {
                  <span class="error-msg">
                    Message must be at least 10 characters.
                  </span>
                }
              </div>

              <!-- Submit Trigger -->
              <button 
                type="submit" 
                class="btn btn-primary submit-btn" 
                [disabled]="isSubmitting() || contactForm.invalid"
              >
                @if (!isSubmitting()) {
                  <span>Send Message</span>
                } @else {
                  <span class="spinner-wrapper">
                    <i class="fas fa-spinner fa-spin"></i> Sending...
                  </span>
                }
              </button>
            </form>

            <!-- Success Status alert overlay -->
            @if (showSuccess()) {
              <div class="success-toast">
                <i class="fas fa-check-circle success-toast-icon"></i>
                <div>
                  <h5>Message Sent!</h5>
                  <p>Thank you for reaching out. I'll get back to you soon.</p>
                </div>
                <button class="toast-close" (click)="closeToast()">&times;</button>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-section {
      background-color: var(--bg-color-light);
      border-top: 1px solid var(--border-color);
      border-bottom: 1px solid var(--border-color);
    }

    .contact-subtitle {
      text-align: center;
      max-width: 600px;
      margin: -40px auto 60px;
      color: var(--text-muted);
      font-size: 1.1rem;
      line-height: 1.7;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: 0.9fr 1.1fr;
      gap: 4rem;
      align-items: start;
    }

    @media (max-width: 992px) {
      .contact-grid {
        grid-template-columns: 1fr;
        gap: 3rem;
      }
      .contact-subtitle {
        margin-bottom: 40px;
      }
    }

    /* Info Sidebar Column */
    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .info-block {
      background-color: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 1.5rem 2rem;
      display: flex;
      align-items: center;
      gap: 1.5rem;
      backdrop-filter: blur(12px);
      box-shadow: var(--shadow-dark);
      transition: var(--transition-smooth);
    }

    .info-block:hover {
      transform: translateX(5px);
      border-color: rgba(0, 242, 254, 0.3);
    }

    .info-icon {
      font-size: 1.8rem;
      color: var(--primary-color);
      text-shadow: var(--shadow-glow);
      width: 40px;
      text-align: center;
    }

    .info-block h4 {
      font-family: var(--font-family-accent);
      color: var(--accent-color);
      font-size: 1.1rem;
      margin-bottom: 0.25rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .info-block p {
      color: var(--text-color);
      font-size: 0.95rem;
    }

    .info-block a {
      transition: var(--transition-smooth);
    }

    .info-block a:hover {
      color: var(--primary-color);
      text-shadow: var(--shadow-glow);
    }

    /* Form Container */
    .contact-form-wrapper {
      position: relative;
    }

    .contact-form {
      background-color: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 3rem;
      backdrop-filter: blur(12px);
      box-shadow: var(--shadow-dark);
      display: flex;
      flex-direction: column;
      gap: 1.75rem;
    }

    @media (max-width: 576px) {
      .contact-form {
        padding: 2rem 1.5rem;
      }
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .form-group label {
      font-family: var(--font-family-accent);
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--primary-color);
      text-transform: uppercase;
      letter-spacing: 1px;
      transition: var(--transition-smooth);
    }

    .form-group label.error {
      color: var(--accent-color);
    }

    .form-group input,
    .form-group textarea {
      background-color: rgba(8, 11, 17, 0.6);
      border: 1px solid var(--border-color);
      color: var(--text-color);
      padding: 0.85rem 1.15rem;
      border-radius: 6px;
      font-family: var(--font-family-main);
      font-size: 1rem;
      transition: var(--transition-smooth);
    }

    .form-group input::placeholder,
    .form-group textarea::placeholder {
      color: rgba(255, 255, 255, 0.2);
    }

    .form-group input:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: var(--shadow-glow);
      background-color: rgba(8, 11, 17, 0.85);
    }

    .form-group input.invalid,
    .form-group textarea.invalid {
      border-color: var(--accent-color);
    }

    .error-msg {
      font-size: 0.8rem;
      color: var(--accent-color);
      margin-top: 0.15rem;
    }

    .submit-btn {
      width: 100%;
      padding: 1rem;
      font-size: 1.1rem;
      margin-top: 0.5rem;
    }

    .submit-btn:disabled {
      opacity: 0.55;
      cursor: not-allowed;
      box-shadow: none;
      transform: none;
    }

    .spinner-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }

    /* Success Alert overlay toast styling */
    .success-toast {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(16, 20, 29, 0.96);
      border: 1px solid var(--primary-color);
      border-radius: 12px;
      backdrop-filter: blur(16px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 2rem;
      gap: 1rem;
      animation: fadeIn 0.4s ease-out;
      z-index: 5;
    }

    .success-toast-icon {
      font-size: 3.5rem;
      color: var(--primary-color);
      text-shadow: var(--shadow-glow);
    }

    .success-toast h5 {
      font-family: var(--font-family-accent);
      font-size: 1.6rem;
      color: #fff;
    }

    .success-toast p {
      color: var(--text-muted);
      font-size: 1.05rem;
      max-width: 320px;
      line-height: 1.6;
    }

    .toast-close {
      position: absolute;
      top: 1.25rem;
      right: 1.5rem;
      background: transparent;
      border: none;
      color: var(--text-muted);
      font-size: 1.8rem;
      cursor: pointer;
      line-height: 1;
      transition: var(--transition-smooth);
    }

    .toast-close:hover {
      color: var(--accent-color);
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }
  `]
})
export class ContactComponent {
  protected readonly contactForm: FormGroup;
  protected readonly isSubmitting = signal(false);
  protected readonly showSuccess = signal(false);

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  protected hasError(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  protected onSubmit() {
    if (this.contactForm.invalid) {
      return;
    }

    this.isSubmitting.set(true);

    // Simulate network submission delay
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.showSuccess.set(true);
      this.contactForm.reset();
    }, 1500);
  }

  protected closeToast() {
    this.showSuccess.set(false);
  }
}
