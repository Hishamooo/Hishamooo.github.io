<template>
  <section class="section" :class="{ 'dark-mode': darkMode }" aria-labelledby="additional-heading">
    <div class="container">
      <div data-aos="fade-up">
        <h2 id="additional-heading" class="section-heading">Additional Projects</h2>
        <p class="section-subheading">More work across healthcare, education and mobile platforms</p>
      </div>

      <div class="projects-grid">
        <article
          v-for="(project, idx) in projects"
          :key="project.slug"
          class="project-card"
          data-aos="fade-up"
          :data-aos-delay="idx * 60"
        >
          <div class="project-screenshot">
            <img
              :src="project.pictures[0].img"
              :alt="project.pictures[0].alt"
              class="project-img"
              loading="lazy"
              width="320"
              height="180"
              @error="onImgError($event)"
            />
          </div>
          <div class="project-body">
            <h3 class="project-title">{{ project.name }}</h3>
            <p class="project-tagline">{{ project.tagline }}</p>
            <div class="project-tech">
              <span class="tag" v-for="tech in project.technologies" :key="tech">{{ tech }}</span>
            </div>
            <div class="project-actions">
              <router-link
                :to="'/projects/' + project.slug"
                class="btn btn-outline btn-sm"
              >
                View case study
              </router-link>
              <a
                v-if="project.visit"
                :href="project.visit"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-outline btn-sm"
              >
                {{ project.ctaLabel || 'View project' }}
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

const FALLBACK = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="320" height="180" viewBox="0 0 320 180"%3E%3Crect width="320" height="180" fill="%23F7F9FC"/%3E%3Ctext x="50%25" y="50%25" font-family="sans-serif" font-size="14" fill="%23999" text-anchor="middle" dominant-baseline="middle"%3ENo image%3C/text%3E%3C/svg%3E'

export default {
  name: 'AdditionalProjects',
  props: {
    darkMode: { type: Boolean, default: false },
  },
  data() {
    return {
      projects: info.additionalProjects,
    }
  },
  methods: {
    onImgError(e) {
      e.target.src = FALLBACK
    },
  },
}
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.project-card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-card);
  transition:
    transform var(--transition-fast),
    box-shadow var(--transition-fast),
    border-color var(--transition-fast);
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card-hover);
  border-color: rgba(59, 130, 246, 0.25);
}

.dark-mode .project-card {
  background-color: var(--color-dark-surface);
  border-color: var(--color-dark-border);
}

.dark-mode .project-card:hover {
  border-color: rgba(59, 130, 246, 0.4);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
}

.project-screenshot {
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background-color: var(--color-background-subtle);
}

.dark-mode .project-screenshot {
  background-color: rgba(255, 255, 255, 0.03);
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
  transition: transform 300ms ease;
}

.project-card:hover .project-img {
  transform: scale(1.03);
}

.project-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
}

.project-title {
  font-family: var(--font-heading);
  font-size: 17px;
  font-weight: 700;
  color: var(--color-primary);
  margin: 0;
}

.dark-mode .project-title {
  color: var(--color-dark-text-primary);
}

.project-tagline {
  font-size: 14px;
  color: var(--color-text-secondary);
  line-height: 1.5;
  margin: 0;
  flex: 1;
}

.dark-mode .project-tagline {
  color: var(--color-dark-text-secondary);
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.project-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 4px;
}

/* Responsive */
@media (max-width: 960px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 580px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
