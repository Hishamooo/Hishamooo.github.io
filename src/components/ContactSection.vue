<template>
  <section class="section contact-section" :class="{ 'dark-mode': darkMode }" aria-labelledby="contact-heading">
    <div class="container contact-inner">
      <div class="contact-content" data-aos="fade-up">
        <h2 id="contact-heading" class="section-heading">Let's build something useful</h2>
        <p class="contact-intro">
          I'm open to Software Developer, Frontend, Full-Stack and selected Software Engineer in Test opportunities in Spain and across Europe.
        </p>

        <div class="contact-actions">
          <a
            href="mailto:hisham.hafez96@outlook.com"
            class="btn btn-primary"
          >
            <i class="fas fa-envelope" aria-hidden="true"></i>
            Email me
          </a>
          <a
            href="https://www.linkedin.com/in/hisham-al-hafez/"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-outline"
          >
            <i class="fab fa-linkedin-in" aria-hidden="true"></i>
            LinkedIn
          </a>
          <a
            href="/assets/documents/cv-frontend.pdf"
            download
            class="btn btn-outline"
          >
            <i class="fas fa-download" aria-hidden="true"></i>
            Download CV
          </a>
        </div>

        <div class="contact-details">
          <a href="mailto:hisham.hafez96@outlook.com" class="contact-detail-item">
            <i class="fas fa-envelope" aria-hidden="true"></i>
            <span>hisham.hafez96@outlook.com</span>
          </a>
          <a href="tel:+34679288907" class="contact-detail-item">
            <i class="fas fa-phone" aria-hidden="true"></i>
            <span>+34 679 288 907</span>
          </a>
          <div class="contact-detail-item contact-detail-item--static">
            <i class="fas fa-map-marker-alt" aria-hidden="true"></i>
            <span>Madrid, Spain</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import info from '../../info'

export default {
  name: 'ContactSection',
  props: {
    darkMode: { type: Boolean, default: false },
  },
  data() {
    return {
      contact: info.contact,
    }
  },
}
</script>

<style scoped>
.contact-section {
  background-color: var(--color-primary);
}

.dark-mode.contact-section {
  background-color: var(--color-dark-surface);
}

.contact-inner {
  text-align: center;
  max-width: 640px;
}

.contact-section .section-heading {
  color: #fff;
  margin-bottom: 16px;
}

.dark-mode .contact-section .section-heading,
.contact-section.dark-mode .section-heading {
  color: var(--color-dark-text-primary);
}

.contact-intro {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 40px;
}

.dark-mode .contact-intro {
  color: var(--color-dark-text-secondary);
}

.contact-actions {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 40px;
}

/* Override btn styles inside dark contact section */
.contact-section .btn-primary {
  background-color: var(--color-accent);
  color: #fff;
}

.contact-section .btn-primary:hover {
  background-color: #2563EB;
}

.contact-section .btn-outline {
  color: #fff;
  border-color: rgba(255, 255, 255, 0.4);
  background-color: transparent;
}

.contact-section .btn-outline:hover {
  border-color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
}

.dark-mode.contact-section .btn-outline {
  color: var(--color-dark-text-primary);
  border-color: var(--color-dark-border);
}

.dark-mode.contact-section .btn-outline:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

/* Contact details */
.contact-details {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
}

.contact-detail-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.contact-detail-item:hover {
  color: #fff;
  text-decoration: none;
}

.contact-detail-item--static {
  cursor: default;
}

.dark-mode .contact-detail-item {
  color: var(--color-dark-text-secondary);
}

.dark-mode .contact-detail-item:hover {
  color: var(--color-dark-text-primary);
}

.contact-detail-item .fas,
.contact-detail-item .fab {
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
}

.dark-mode .contact-detail-item .fas,
.dark-mode .contact-detail-item .fab {
  color: var(--color-accent);
}

/* Responsive */
@media (max-width: 580px) {
  .contact-actions {
    flex-direction: column;
    align-items: center;
  }

  .contact-actions .btn {
    justify-content: center;
    width: 100%;
    max-width: 280px;
  }

  .contact-details {
    flex-direction: column;
    align-items: center;
  }
}
</style>
