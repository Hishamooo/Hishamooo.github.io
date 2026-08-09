<template>
  <footer class="site-footer" :class="{ 'dark-mode': darkMode }" role="contentinfo">
    <div class="container footer-inner">
      <div class="footer-brand">
        <span class="brand-name">Hisham Al Hafez</span>
        <p class="footer-tagline">Senior Frontend Developer · Madrid, Spain</p>
      </div>

      <nav class="footer-nav" aria-label="Footer navigation">
        <ul role="list">
          <li v-for="link in navLinks" :key="link.id">
            <a :href="'/' + link.id" class="footer-link" @click.prevent="$emit('scrollTo', link.id)">{{ link.label }}</a>
          </li>
        </ul>
      </nav>

      <div class="footer-social">
        <a
          href="https://www.linkedin.com/in/hisham-al-hafez/"
          target="_blank"
          rel="noopener noreferrer"
          class="social-icon-btn"
          aria-label="LinkedIn profile (opens in new tab)"
        >
          <i class="fab fa-linkedin-in" aria-hidden="true"></i>
        </a>
        <a
          href="mailto:hisham.hafez96@outlook.com"
          class="social-icon-btn"
          aria-label="Email Hisham Al Hafez"
        >
          <i class="fas fa-envelope" aria-hidden="true"></i>
        </a>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <p>© {{ currentYear }} Hisham Al Hafez</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter',
  props: {
    darkMode: { type: Boolean, default: false },
  },
  emits: ['scrollTo'],
  data() {
    return {
      currentYear: new Date().getFullYear(),
      navLinks: [
        { id: 'portfolio', label: 'Work' },
        { id: 'experience', label: 'Experience' },
        { id: 'skills', label: 'Skills' },
        { id: 'about', label: 'About' },
        { id: 'contact', label: 'Contact' },
      ],
    }
  },
}
</script>

<style scoped>
.site-footer {
  background-color: var(--color-background-subtle);
  border-top: 1px solid var(--color-border);
}

.dark-mode.site-footer {
  background-color: var(--color-dark-surface);
  border-top-color: var(--color-dark-border);
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding-top: 48px;
  padding-bottom: 48px;
  flex-wrap: wrap;
}

.brand-name {
  font-family: var(--font-heading);
  font-size: 18px;
  font-weight: 700;
  color: var(--color-primary);
  display: block;
  margin-bottom: 4px;
}

.dark-mode .brand-name {
  color: var(--color-dark-text-primary);
}

.footer-tagline {
  font-size: 13px;
  color: var(--color-text-secondary);
  margin: 0;
}

.dark-mode .footer-tagline {
  color: var(--color-dark-text-secondary);
}

.footer-nav ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 4px 20px;
}

.footer-link {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.footer-link:hover {
  color: var(--color-primary);
  text-decoration: none;
}

.dark-mode .footer-link {
  color: var(--color-dark-text-secondary);
}

.dark-mode .footer-link:hover {
  color: var(--color-accent);
}

.footer-social {
  display: flex;
  gap: 8px;
}

.social-icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: var(--radius-sm);
  background-color: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text-secondary);
  font-size: 15px;
  text-decoration: none;
  transition:
    color var(--transition-fast),
    background-color var(--transition-fast),
    border-color var(--transition-fast);
}

.social-icon-btn:hover {
  color: var(--color-primary);
  background-color: var(--color-background);
  border-color: var(--color-primary);
  text-decoration: none;
}

.dark-mode .social-icon-btn {
  border-color: var(--color-dark-border);
  color: var(--color-dark-text-secondary);
}

.dark-mode .social-icon-btn:hover {
  color: var(--color-accent);
  border-color: var(--color-accent);
  background-color: rgba(59, 130, 246, 0.08);
}

.footer-bottom {
  border-top: 1px solid var(--color-border);
  padding-block: 16px;
}

.dark-mode .footer-bottom {
  border-top-color: var(--color-dark-border);
}

.footer-bottom p {
  font-size: 13px;
  color: var(--color-text-secondary);
  margin: 0;
  text-align: center;
}

.dark-mode .footer-bottom p {
  color: var(--color-dark-text-secondary);
}

/* Responsive */
@media (max-width: 680px) {
  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }

  .footer-nav ul {
    flex-wrap: wrap;
    gap: 8px 16px;
  }
}
</style>
