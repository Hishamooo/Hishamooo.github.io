<template>
  <section class="hero section" :class="{ 'dark-mode': darkMode }" aria-labelledby="hero-heading">
    <div class="container hero-inner">
      <div class="hero-content" data-aos="fade-up" data-aos-duration="600">
        <p class="hero-eyebrow">
          <span class="eyebrow-dot" aria-hidden="true"></span>
          {{ hero.eyebrow }}
        </p>
        <h1 id="hero-heading" class="hero-heading">
          {{ hero.heading }}
        </h1>
        <p class="hero-description">{{ hero.description }}</p>

        <div class="hero-actions">
          <a
            href="#portfolio"
            class="btn btn-primary"
            @click.prevent="$emit('scrollTo', 'portfolio')"
          >
            {{ hero.actions.primary.label }}
            <i class="fas fa-arrow-down" aria-hidden="true"></i>
          </a>
          <a
            :href="hero.actions.cv.href"
            download
            class="btn btn-outline"
          >
            <i class="fas fa-download" aria-hidden="true"></i>
            {{ hero.actions.cv.label }}
          </a>
          <a
            href="#contact"
            class="btn btn-outline"
            @click.prevent="$emit('scrollTo', 'contact')"
          >
            {{ hero.actions.contact.label }}
          </a>
        </div>

        <div class="hero-social">
          <a
            :href="links.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
            aria-label="LinkedIn profile (opens in new tab)"
          >
            <i class="fab fa-linkedin-in" aria-hidden="true"></i>
            LinkedIn
          </a>
        </div>
      </div>

      <div class="hero-visual" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100" aria-hidden="true">
        <div class="hero-card">
          <div class="hero-card-row">
            <span class="hero-card-label">Status</span>
            <span class="hero-card-value available">Open to opportunities</span>
          </div>
          <div class="hero-card-row">
            <span class="hero-card-label">Based in</span>
            <span class="hero-card-value">
              <i class="fas fa-map-marker-alt" aria-hidden="true"></i>
              Madrid, Spain
            </span>
          </div>
          <div class="hero-card-row">
            <span class="hero-card-label">Focus</span>
            <span class="hero-card-value">Senior Frontend</span>
          </div>
          <div class="hero-card-row">
            <span class="hero-card-label">Experience</span>
            <span class="hero-card-value">7+ years</span>
          </div>
          <hr class="hero-card-divider" />
          <div class="hero-tech-stack">
            <span class="tag" v-for="t in techHighlights" :key="t">{{ t }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Subtle decorative background -->
    <div class="hero-bg" aria-hidden="true"></div>
  </section>
</template>

<script>
import info from '../../info'

export default {
  name: 'HeroSection',
  props: {
    darkMode: { type: Boolean, default: false },
  },
  emits: ['scrollTo'],
  data() {
    return {
      hero: info.hero,
      links: info.links,
      techHighlights: ['Vue.js', 'Nuxt.js', 'TypeScript', 'Directus', 'LLM/RAG'],
    }
  },
}
</script>

<style scoped>
.hero {
  position: relative;
  padding-top: 80px;
  padding-bottom: 80px;
  overflow: hidden;
  min-height: calc(100vh - 72px);
  display: flex;
  align-items: center;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  background:
    radial-gradient(ellipse 60% 50% at 70% 40%, rgba(59, 130, 246, 0.06) 0%, transparent 70%),
    radial-gradient(ellipse 40% 60% at 20% 70%, rgba(28, 55, 83, 0.04) 0%, transparent 70%);
  pointer-events: none;
}

.dark-mode .hero-bg {
  background:
    radial-gradient(ellipse 60% 50% at 70% 40%, rgba(59, 130, 246, 0.08) 0%, transparent 70%),
    radial-gradient(ellipse 40% 60% at 20% 70%, rgba(59, 130, 246, 0.04) 0%, transparent 70%);
}

.hero-inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
  width: 100%;
}

/* Content side */
.hero-content {
  max-width: 580px;
}

.hero-eyebrow {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 600;
  color: var(--color-primary-interactive);
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.dark-mode .hero-eyebrow {
  color: var(--color-accent);
}

.eyebrow-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--color-accent);
  flex-shrink: 0;
}

.hero-heading {
  font-family: var(--font-heading);
  font-size: clamp(36px, 5vw, 58px);
  font-weight: 800;
  color: var(--color-primary);
  line-height: 1.1;
  letter-spacing: -0.5px;
  margin-bottom: 24px;
}

.dark-mode .hero-heading {
  color: var(--color-dark-text-primary);
}

.hero-description {
  font-size: clamp(16px, 2vw, 19px);
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: 36px;
}

.dark-mode .hero-description {
  color: var(--color-dark-text-secondary);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 32px;
}

.hero-social {
  display: flex;
  align-items: center;
  gap: 12px;
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.social-link:hover {
  color: var(--color-primary);
  text-decoration: none;
}

.dark-mode .social-link {
  color: var(--color-dark-text-secondary);
}

.dark-mode .social-link:hover {
  color: var(--color-accent);
}

.social-divider {
  color: var(--color-border);
  font-weight: 300;
}

/* Visual side — info card */
.hero-visual {
  display: flex;
  justify-content: center;
}

.hero-card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 32px;
  width: 100%;
  max-width: 360px;
  box-shadow: var(--shadow-card);
}

.dark-mode .hero-card {
  background-color: var(--color-dark-surface);
  border-color: var(--color-dark-border);
}

.hero-card-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid var(--color-border);
}

.dark-mode .hero-card-row {
  border-bottom-color: var(--color-dark-border);
}

.hero-card-row:last-of-type {
  border-bottom: none;
}

.hero-card-label {
  font-size: 13px;
  color: var(--color-text-secondary);
  font-weight: 500;
}

.dark-mode .hero-card-label {
  color: var(--color-dark-text-secondary);
}

.hero-card-value {
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text-primary);
  display: flex;
  align-items: center;
  gap: 5px;
}

.dark-mode .hero-card-value {
  color: var(--color-dark-text-primary);
}

.hero-card-value.available {
  color: #059669;
  background-color: #ECFDF5;
  padding: 2px 10px;
  border-radius: 999px;
  font-size: 12px;
}

.dark-mode .hero-card-value.available {
  color: #34D399;
  background-color: rgba(52, 211, 153, 0.1);
}

.hero-card-divider {
  border: none;
  border-top: 1px solid var(--color-border);
  margin: 16px 0;
}

.dark-mode .hero-card-divider {
  border-top-color: var(--color-dark-border);
}

.hero-tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

/* Responsive */
@media (max-width: 900px) {
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .hero {
    min-height: unset;
    padding-top: 60px;
    padding-bottom: 60px;
  }

  .hero-visual {
    justify-content: flex-start;
  }

  .hero-card {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .hero-actions {
    flex-direction: column;
  }

  .hero-actions .btn {
    justify-content: center;
  }

  .hero-card {
    padding: 20px;
  }
}
</style>
