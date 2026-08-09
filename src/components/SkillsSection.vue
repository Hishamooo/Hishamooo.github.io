<template>
  <section class="section section--subtle" :class="{ 'dark-mode': darkMode }" aria-labelledby="skills-heading">
    <div class="container">
      <div data-aos="fade-up">
        <h2 id="skills-heading" class="section-heading">Technical Expertise</h2>
        <p class="section-subheading">Technologies and tools I work with regularly</p>
      </div>

      <div class="skills-grid">
        <div
          v-for="(group, idx) in skills"
          :key="group.title"
          class="skill-group"
          data-aos="fade-up"
          :data-aos-delay="idx * 60"
        >
          <div class="skill-group-header">
            <div class="skill-icon-wrap" aria-hidden="true">
              <i :class="group.icon"></i>
            </div>
            <h3 class="skill-group-title">{{ group.title }}</h3>
          </div>
          <ul class="skill-list" :aria-label="group.title + ' skills'">
            <li v-for="skill in group.info" :key="skill" class="skill-item">
              {{ skill }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import info from '../../info'

export default {
  name: 'SkillsSection',
  props: {
    darkMode: { type: Boolean, default: false },
  },
  data() {
    return {
      skills: info.skills,
    }
  },
}
</script>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.skill-group {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 28px;
  transition:
    box-shadow var(--transition-fast),
    transform var(--transition-fast),
    border-color var(--transition-fast);
}

.skill-group:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-card);
  border-color: rgba(59, 130, 246, 0.25);
}

.dark-mode .skill-group {
  background-color: var(--color-dark-surface);
  border-color: var(--color-dark-border);
}

.dark-mode .skill-group:hover {
  border-color: rgba(59, 130, 246, 0.35);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.skill-group-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.skill-icon-wrap {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-sm);
  background-color: rgba(59, 130, 246, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--color-accent);
  font-size: 16px;
}

.dark-mode .skill-icon-wrap {
  background-color: rgba(59, 130, 246, 0.12);
}

.skill-group-title {
  font-family: var(--font-heading);
  font-size: 16px;
  font-weight: 700;
  color: var(--color-primary);
}

.dark-mode .skill-group-title {
  color: var(--color-dark-text-primary);
}

.skill-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.skill-item {
  font-size: 13px;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 4px;
  background-color: var(--color-background-subtle);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
  line-height: 1.5;
}

.dark-mode .skill-item {
  background-color: rgba(255, 255, 255, 0.05);
  color: var(--color-dark-text-secondary);
  border-color: var(--color-dark-border);
}

/* Responsive */
@media (max-width: 960px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 580px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
