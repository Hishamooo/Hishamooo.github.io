<template>
  <section class="section" :class="{ 'dark-mode': darkMode }" aria-labelledby="experience-heading">
    <div class="container">
      <div data-aos="fade-up">
        <h2 id="experience-heading" class="section-heading">Professional Experience</h2>
        <p class="section-subheading">7+ years building web and mobile products for international teams</p>
      </div>

      <div class="experience-list" role="list">
        <article
          v-for="(job, idx) in experience"
          :key="job.name + job.date"
          class="experience-item"
          role="listitem"
          data-aos="fade-up"
          :data-aos-delay="idx * 50"
        >
          <div class="experience-timeline-dot" aria-hidden="true"></div>

          <div class="experience-card">
            <div class="experience-header">
              <div class="experience-title-group">
                <h3 class="experience-company">
                  {{ job.name }}
                  <span v-if="job.partTime" class="part-time-badge" aria-label="Part-time role">Part-time</span>
                </h3>
                <p class="experience-position">{{ job.position }}</p>
              </div>
              <div class="experience-meta">
                <span class="experience-date">{{ job.date }}</span>
                <span class="experience-place">
                  <i class="fas fa-map-marker-alt" aria-hidden="true"></i>
                  {{ job.place }}
                </span>
              </div>
            </div>

            <p class="experience-description">{{ job.description }}</p>

            <ul class="experience-bullets" aria-label="Responsibilities and achievements">
              <li v-for="bullet in job.bullets" :key="bullet">
                <span class="bullet-dot" aria-hidden="true"></span>
                {{ bullet }}
              </li>
            </ul>

            <div class="experience-skills">
              <span class="tag" v-for="skill in job.skills" :key="skill">{{ skill }}</span>
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
  name: 'ExperienceSection',
  props: {
    darkMode: { type: Boolean, default: false },
  },
  data() {
    return {
      experience: info.experience,
    }
  },
}
</script>

<style scoped>
.experience-list {
  position: relative;
  padding-left: 28px;
}

/* Vertical line */
.experience-list::before {
  content: '';
  position: absolute;
  left: 6px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: var(--color-border);
  border-radius: 2px;
}

.dark-mode .experience-list::before {
  background: var(--color-dark-border);
}

.experience-item {
  position: relative;
  margin-bottom: 40px;
}

.experience-item:last-child {
  margin-bottom: 0;
}

.experience-timeline-dot {
  position: absolute;
  left: -28px;
  top: 20px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: var(--color-accent);
  border: 3px solid var(--color-background);
  box-shadow: 0 0 0 2px var(--color-accent);
  z-index: 1;
}

.dark-mode .experience-timeline-dot {
  border-color: var(--color-dark-background);
}

.experience-card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 28px 32px;
  transition:
    box-shadow var(--transition-fast),
    border-color var(--transition-fast);
}

.experience-card:hover {
  box-shadow: var(--shadow-card);
  border-color: rgba(59, 130, 246, 0.3);
}

.dark-mode .experience-card {
  background-color: var(--color-dark-surface);
  border-color: var(--color-dark-border);
}

.dark-mode .experience-card:hover {
  border-color: rgba(59, 130, 246, 0.4);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}

.experience-company {
  font-family: var(--font-heading);
  font-size: 18px;
  font-weight: 700;
  color: var(--color-primary);
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 4px;
}

.dark-mode .experience-company {
  color: var(--color-dark-text-primary);
}

.part-time-badge {
  font-size: 11px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 999px;
  background-color: rgba(59, 130, 246, 0.1);
  color: var(--color-accent);
  font-family: var(--font-body);
  letter-spacing: 0.3px;
  text-transform: uppercase;
}

.experience-position {
  font-size: 15px;
  font-weight: 500;
  color: var(--color-text-secondary);
  margin: 0;
}

.dark-mode .experience-position {
  color: var(--color-dark-text-secondary);
}

.experience-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  flex-shrink: 0;
}

.experience-date {
  font-size: 13px;
  font-weight: 600;
  color: var(--color-accent);
  white-space: nowrap;
}

.experience-place {
  font-size: 13px;
  color: var(--color-text-secondary);
  display: flex;
  align-items: center;
  gap: 5px;
  white-space: nowrap;
}

.dark-mode .experience-place {
  color: var(--color-dark-text-secondary);
}

.experience-description {
  font-size: 15px;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 16px;
}

.dark-mode .experience-description {
  color: var(--color-dark-text-secondary);
}

.experience-bullets {
  list-style: none;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.experience-bullets li {
  display: flex;
  gap: 10px;
  font-size: 14px;
  color: var(--color-text-primary);
  line-height: 1.55;
}

.dark-mode .experience-bullets li {
  color: var(--color-dark-text-secondary);
}

.bullet-dot {
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: var(--color-accent);
  flex-shrink: 0;
  margin-top: 7px;
}

.experience-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

/* Responsive */
@media (max-width: 680px) {
  .experience-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .experience-meta {
    align-items: flex-start;
    flex-direction: row;
    gap: 12px;
  }

  .experience-card {
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .experience-list {
    padding-left: 20px;
  }

  .experience-timeline-dot {
    left: -20px;
    width: 12px;
    height: 12px;
  }
}
</style>
