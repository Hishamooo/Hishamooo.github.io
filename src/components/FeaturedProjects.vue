<template>
  <section class="section section--subtle" :class="{ 'dark-mode': darkMode }" aria-labelledby="featured-heading">
    <div class="container">
      <div class="section-header" data-aos="fade-up">
        <h2 id="featured-heading" class="section-heading">Featured Work</h2>
        <p class="section-subheading">Selected projects from the last few years</p>
      </div>

      <div class="featured-list">
        <article
          v-for="(project, idx) in projects"
          :key="project.slug"
          class="featured-card"
          :class="{ 'featured-card--reverse': idx % 2 === 1 }"
          data-aos="fade-up"
        >
          <!-- Screenshot -->
          <div class="featured-screenshot">
            <div class="screenshot-container">
              <img
                :src="(project.cover || project.pictures[0]).img"
                :alt="(project.cover || project.pictures[0]).alt"
                class="screenshot-img"
                loading="lazy"
                width="560"
                height="340"
              />
            </div>
          </div>

          <!-- Content -->
          <div class="featured-content">
            <div class="featured-meta">
              <span class="featured-category">{{ project.role }}</span>
            </div>
            <h3 class="featured-title">{{ project.name }}</h3>
            <p class="featured-description">{{ project.description }}</p>

            <ul class="featured-contributions" aria-label="Key contributions">
              <li v-for="c in project.contributions" :key="c">
                <i class="fas fa-check-circle contribution-icon" aria-hidden="true"></i>
                {{ c }}
              </li>
            </ul>

            <div class="featured-tech">
              <span class="tag" v-for="tech in project.technologies" :key="tech">{{ tech }}</span>
            </div>

            <div class="featured-actions">
              <router-link
                :to="'/projects/' + project.slug"
                class="btn btn-primary btn-sm"
              >
                {{ project.ctaLabel || 'View case study' }}
                <i class="fas fa-arrow-right" aria-hidden="true"></i>
              </router-link>
              <a
                v-if="project.visit"
                :href="project.visit"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-outline btn-sm"
              >
                Visit product
                <i class="fas fa-external-link-alt" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import info from '../../info'

export default {
  name: 'FeaturedProjects',
  props: {
    darkMode: { type: Boolean, default: false },
  },
  data() {
    return {
      projects: info.featuredProjects,
    }
  },
}
</script>

<style scoped>
.section-header {
  text-align: center;
  margin-bottom: 64px;
}

.featured-list {
  display: flex;
  flex-direction: column;
  gap: 80px;
}

.featured-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}

.featured-card--reverse {
  direction: rtl;
}

.featured-card--reverse > * {
  direction: ltr;
}

/* Screenshot */
.featured-screenshot {
  position: relative;
}

.screenshot-container {
  border-radius: var(--radius-lg);
  overflow: hidden;
  background-color: var(--color-background-subtle);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-card);
  aspect-ratio: 16 / 10;
  transition: box-shadow var(--transition-fast);
}

.dark-mode .screenshot-container {
  background-color: var(--color-dark-surface);
  border-color: var(--color-dark-border);
}

.screenshot-container:hover {
  box-shadow: var(--shadow-card-hover);
}

.screenshot-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
}

/* Content */
.featured-meta {
  margin-bottom: 12px;
}

.featured-category {
  font-size: 13px;
  font-weight: 600;
  color: var(--color-accent);
  letter-spacing: 0.3px;
  text-transform: uppercase;
}

.featured-title {
  font-family: var(--font-heading);
  font-size: clamp(24px, 3vw, 30px);
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 12px;
  line-height: 1.2;
}

.dark-mode .featured-title {
  color: var(--color-dark-text-primary);
}

.featured-description {
  font-size: 16px;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 20px;
}

.dark-mode .featured-description {
  color: var(--color-dark-text-secondary);
}

.featured-contributions {
  list-style: none;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.featured-contributions li {
  display: flex;
  gap: 10px;
  font-size: 14px;
  color: var(--color-text-secondary);
  line-height: 1.5;
}

.dark-mode .featured-contributions li {
  color: var(--color-dark-text-secondary);
}

.contribution-icon {
  color: var(--color-accent);
  flex-shrink: 0;
  margin-top: 2px;
  font-size: 13px;
}

.featured-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 24px;
}

.featured-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

/* Responsive */
@media (max-width: 900px) {
  .featured-card {
    grid-template-columns: 1fr;
    gap: 32px;
    direction: ltr;
  }

  .featured-card--reverse {
    direction: ltr;
  }
}

@media (max-width: 480px) {
  .featured-actions {
    flex-direction: column;
  }
}
</style>
