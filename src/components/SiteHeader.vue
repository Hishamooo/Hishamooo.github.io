<template>
  <header class="site-header" :class="{ scrolled, 'dark-mode': darkMode }" role="banner">
    <div class="container header-inner">
      <!-- Logo / Brand -->
      <a href="/" class="brand" @click.prevent="$emit('scrollTo', 'home')" aria-label="Hisham Al Hafez — go to top">
        <span class="brand-name">Hisham</span>
      </a>

      <!-- Desktop Navigation -->
      <nav class="desktop-nav" aria-label="Main navigation">
        <ul role="list">
          <li v-for="link in navLinks" :key="link.id">
            <a
              :href="'/' + link.id"
              class="nav-link"
              @click.prevent="$emit('scrollTo', link.id)"
              :aria-current="activeSection === link.id ? 'page' : undefined"
            >{{ link.label }}</a>
          </li>
        </ul>
      </nav>

      <!-- Desktop Actions -->
      <div class="header-actions" aria-label="External links and actions">
        <a
          href="https://www.linkedin.com/in/hisham-al-hafez/"
          target="_blank"
          rel="noopener noreferrer"
          class="icon-btn"
          aria-label="LinkedIn profile (opens in new tab)"
          v-tooltip.bottom="'LinkedIn'"
        >
          <i class="fab fa-linkedin-in" aria-hidden="true"></i>
        </a>
        <a
          href="/assets/documents/cv-frontend.pdf"
          download
          class="btn btn-primary btn-sm cv-btn"
          aria-label="Download CV as PDF"
        >
          <i class="fas fa-download" aria-hidden="true"></i>
          Download CV
        </a>
        <button
          class="icon-btn theme-toggle"
          @click="toggleDark"
          :aria-label="darkMode ? 'Switch to light mode' : 'Switch to dark mode'"
          v-tooltip.bottom="darkMode ? 'Light mode' : 'Dark mode'"
        >
          <i :class="darkMode ? 'fas fa-sun' : 'fas fa-moon'" aria-hidden="true"></i>
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <button
        class="mobile-menu-btn"
        @click="toggleMenu"
        :aria-expanded="menuOpen.toString()"
        aria-controls="mobile-menu"
        :aria-label="menuOpen ? 'Close navigation menu' : 'Open navigation menu'"
      >
        <span class="hamburger" :class="{ open: menuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div
      id="mobile-menu"
      class="mobile-menu"
      :class="{ open: menuOpen }"
      role="dialog"
      aria-modal="false"
      aria-label="Mobile navigation"
    >
      <nav aria-label="Mobile navigation links">
        <ul role="list">
          <li v-for="link in navLinks" :key="'m-' + link.id">
            <a
              :href="'/' + link.id"
              class="mobile-nav-link"
              @click.prevent="mobileNavClick(link.id)"
            >{{ link.label }}</a>
          </li>
        </ul>
        <div class="mobile-menu-actions">
          <a
            href="/assets/documents/cv-frontend.pdf"
            download
            class="btn btn-primary"
            @click="menuOpen = false"
          >
            <i class="fas fa-download" aria-hidden="true"></i>
            Download CV
          </a>
          <div class="mobile-icon-row">
            <a href="https://www.linkedin.com/in/hisham-al-hafez/" target="_blank" rel="noopener noreferrer" class="icon-btn" aria-label="LinkedIn (opens in new tab)">
              <i class="fab fa-linkedin-in" aria-hidden="true"></i>
            </a>
            <button class="icon-btn" @click="toggleDark" :aria-label="darkMode ? 'Switch to light mode' : 'Switch to dark mode'">
              <i :class="darkMode ? 'fas fa-sun' : 'fas fa-moon'" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </nav>
    </div>

    <!-- Overlay -->
    <div v-if="menuOpen" class="menu-overlay" @click="menuOpen = false" aria-hidden="true"></div>
  </header>
</template>

<script>
const NAV_LINKS = [
  { id: 'portfolio', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export default {
  name: 'SiteHeader',
  props: {
    darkMode: { type: Boolean, default: false },
  },
  emits: ['scrollTo', 'toggleDark'],
  data() {
    return {
      menuOpen: false,
      scrolled: false,
      activeSection: '',
      navLinks: NAV_LINKS,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll, { passive: true })
    this.onScroll()
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      this.scrolled = window.scrollY > 20

      // Active section tracking
      const ids = NAV_LINKS.map(l => l.id)
      let current = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 100) current = id
        }
      }
      this.activeSection = current
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen
      // Prevent body scroll when menu is open
      document.body.style.overflow = this.menuOpen ? 'hidden' : ''
    },
    mobileNavClick(id) {
      this.menuOpen = false
      document.body.style.overflow = ''
      this.$nextTick(() => {
        this.$emit('scrollTo', id)
      })
    },
    toggleDark() {
      this.$emit('toggleDark', !this.darkMode)
    },
  },
}
</script>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 72px;
  background-color: var(--color-background);
  border-bottom: 1px solid transparent;
  transition:
    background-color 180ms ease,
    border-color 180ms ease,
    box-shadow 180ms ease;
}

.site-header.scrolled {
  border-bottom-color: var(--color-border);
  box-shadow: 0 2px 12px rgba(16, 24, 40, 0.06);
}

.site-header.dark-mode {
  background-color: var(--color-dark-background);
}

.site-header.dark-mode.scrolled {
  border-bottom-color: var(--color-dark-border);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
}

.header-inner {
  display: flex;
  align-items: center;
  height: 72px;
  gap: 8px;
}

/* Brand */
.brand {
  flex-shrink: 0;
  text-decoration: none;
  margin-right: auto;
}

.brand-name {
  font-family: var(--font-heading);
  font-size: 20px;
  font-weight: 700;
  color: var(--color-primary);
  letter-spacing: -0.3px;
  transition: color var(--transition-fast);
}

.dark-mode .brand-name {
  color: var(--color-dark-text-primary);
}

/* Desktop Nav */
.desktop-nav {
  display: flex;
  align-items: center;
}

.desktop-nav ul {
  display: flex;
  list-style: none;
  gap: 4px;
}

.nav-link {
  display: block;
  padding: 8px 14px;
  font-size: 15px;
  font-weight: 500;
  color: var(--color-text-secondary);
  text-decoration: none;
  border-radius: var(--radius-sm);
  transition:
    color var(--transition-fast),
    background-color var(--transition-fast);
}

.nav-link:hover {
  color: var(--color-text-primary);
  background-color: var(--color-background-subtle);
  text-decoration: none;
}

.nav-link[aria-current="page"] {
  color: var(--color-primary);
  font-weight: 600;
}

.dark-mode .nav-link {
  color: var(--color-dark-text-secondary);
}

.dark-mode .nav-link:hover {
  color: var(--color-dark-text-primary);
  background-color: rgba(255,255,255,0.06);
}

.dark-mode .nav-link[aria-current="page"] {
  color: var(--color-accent);
}

/* Header Actions */
.header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--radius-sm);
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--color-text-secondary);
  font-size: 16px;
  text-decoration: none;
  transition:
    color var(--transition-fast),
    background-color var(--transition-fast);
}

.icon-btn:hover {
  color: var(--color-text-primary);
  background-color: var(--color-background-subtle);
  text-decoration: none;
}

.dark-mode .icon-btn {
  color: var(--color-dark-text-secondary);
}

.dark-mode .icon-btn:hover {
  color: var(--color-dark-text-primary);
  background-color: rgba(255,255,255,0.08);
}

.cv-btn {
  margin-left: 4px;
  height: 36px;
  white-space: nowrap;
}

/* Mobile Menu Button */
.mobile-menu-btn {
  display: none;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 6px;
  border-radius: var(--radius-sm);
  color: var(--color-text-primary);
}

.dark-mode .mobile-menu-btn {
  color: var(--color-dark-text-primary);
}

.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 22px;
  height: 16px;
  position: relative;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 2px;
  background-color: currentColor;
  border-radius: 2px;
  transition: transform 200ms ease, opacity 200ms ease;
  transform-origin: center;
}

.hamburger.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
}

.hamburger.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile Menu */
.mobile-menu {
  display: none;
  position: fixed;
  top: 72px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-background);
  padding: 24px var(--container-pad) 40px;
  overflow-y: auto;
  transform: translateX(100%);
  transition: transform 220ms ease;
  z-index: 999;
}

.mobile-menu.open {
  transform: translateX(0);
}

.dark-mode .mobile-menu {
  background-color: var(--color-dark-background);
}

.mobile-menu ul {
  list-style: none;
  margin-bottom: 32px;
}

.mobile-nav-link {
  display: block;
  padding: 14px 0;
  font-size: 20px;
  font-weight: 600;
  color: var(--color-text-primary);
  text-decoration: none;
  border-bottom: 1px solid var(--color-border);
  transition: color var(--transition-fast);
}

.mobile-nav-link:hover {
  color: var(--color-primary);
  text-decoration: none;
}

.dark-mode .mobile-nav-link {
  color: var(--color-dark-text-primary);
  border-bottom-color: var(--color-dark-border);
}

.dark-mode .mobile-nav-link:hover {
  color: var(--color-accent);
}

.mobile-menu-actions {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 8px;
}

.mobile-icon-row {
  display: flex;
  gap: 12px;
  align-items: center;
}

.menu-overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 998;
}

/* Responsive */
@media (max-width: 880px) {
  .desktop-nav,
  .header-actions {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
  }

  .mobile-menu {
    display: block;
  }

  .menu-overlay {
    display: block;
  }
}
</style>
