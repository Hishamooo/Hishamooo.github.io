<template>
  <section class="section section--subtle" :class="{ 'dark-mode': darkMode }" aria-labelledby="about-heading">
    <div class="container about-inner">
      <!-- About text -->
      <div class="about-content" data-aos="fade-up">
        <h2 id="about-heading" class="section-heading">About</h2>
        <p class="about-text">{{ about.text }}</p>

        <ul class="about-facts" aria-label="Quick facts">
          <li v-for="fact in about.facts" :key="fact">
            <i class="fas fa-check" aria-hidden="true"></i>
            {{ fact }}
          </li>
        </ul>
      </div>

      <!-- Education & Languages -->
      <div class="about-aside" data-aos="fade-up" data-aos-delay="80">
        <!-- Education -->
        <div class="aside-block">
          <h3 class="aside-title">Education</h3>
          <div v-for="edu in education" :key="edu.name" class="aside-item">
            <p class="aside-item-name">{{ edu.name }}</p>
            <p class="aside-item-sub">{{ edu.degree }}</p>
            <p class="aside-item-date">{{ edu.date }}</p>
          </div>
          <div v-for="cert in certifications" :key="cert.name" class="aside-item">
            <p class="aside-item-name">{{ cert.name }}</p>
            <p class="aside-item-sub">{{ cert.description }}</p>
            <p class="aside-item-date">{{ cert.date }}</p>
          </div>
        </div>

        <!-- Languages -->
        <div class="aside-block">
          <h3 class="aside-title">Languages</h3>
          <div v-for="lang in languages" :key="lang.name" class="aside-item aside-item--inline">
            <span class="aside-item-name">{{ lang.name }}</span>
            <span class="aside-item-level">{{ lang.level }}</span>
          </div>
        </div>

        <!-- Profile image -->
        <div class="profile-wrap" v-if="picture">
          <img
            :src="picture"
            alt="Hisham Al Hafez — Software Developer"
            class="profile-img"
            width="200"
            height="200"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import info from '../../info'

export default {
  name: 'AboutSection',
  props: {
    darkMode: { type: Boolean, default: false },
  },
  data() {
    return {
      about: info.about,
      education: info.education,
      certifications: info.certifications,
      languages: info.languages,
      picture: info.flat_picture,
    }
  },
}
</script>

<style scoped>
.about-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: start;
}

.about-text {
  font-size: 17px;
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: 32px;
}

.dark-mode .about-text {
  color: var(--color-dark-text-secondary);
}

.about-facts {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.about-facts li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  font-weight: 500;
  color: var(--color-text-primary);
}

.dark-mode .about-facts li {
  color: var(--color-dark-text-secondary);
}

.about-facts .fa-check {
  color: var(--color-accent);
  font-size: 12px;
  flex-shrink: 0;
}

/* Aside */
.about-aside {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.aside-block {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 24px;
}

.dark-mode .aside-block {
  background-color: var(--color-dark-surface);
  border-color: var(--color-dark-border);
}

.aside-title {
  font-family: var(--font-heading);
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  color: var(--color-text-secondary);
  margin-bottom: 16px;
}

.dark-mode .aside-title {
  color: var(--color-dark-text-secondary);
}

.aside-item {
  margin-bottom: 16px;
}

.aside-item:last-child {
  margin-bottom: 0;
}

.aside-item--inline {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.aside-item-name {
  font-size: 15px;
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0 0 2px;
}

.dark-mode .aside-item-name {
  color: var(--color-dark-text-primary);
}

.aside-item-sub {
  font-size: 14px;
  color: var(--color-text-secondary);
  margin: 0 0 2px;
}

.dark-mode .aside-item-sub {
  color: var(--color-dark-text-secondary);
}

.aside-item-date {
  font-size: 13px;
  color: var(--color-accent);
  font-weight: 500;
  margin: 0;
}

.aside-item-level {
  font-size: 13px;
  color: var(--color-text-secondary);
}

.dark-mode .aside-item-level {
  color: var(--color-dark-text-secondary);
}

/* Profile image */
.profile-wrap {
  display: flex;
  justify-content: center;
}

.profile-img {
  width: 100%;
  max-width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid var(--color-border);
}

/* Responsive */
@media (max-width: 900px) {
  .about-inner {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>
