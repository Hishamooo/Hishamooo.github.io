<template>
  <div id="app" :class="{ 'dark-mode': darkMode }">
    <router-view v-if="$route.name === 'project'" />
    <template v-else>
      <SiteHeader @scrollTo="scrollToSection" @toggleDark="toggleDark" :darkMode="darkMode" />
      <main>
        <HeroSection id="home" :darkMode="darkMode" @scrollTo="scrollToSection" />
        <FeaturedProjects id="portfolio" :darkMode="darkMode" />
        <ExperienceSection id="experience" :darkMode="darkMode" />
        <SkillsSection id="skills" :darkMode="darkMode" />
        <AdditionalProjects :darkMode="darkMode" />
        <AboutSection id="about" :darkMode="darkMode" />
        <ContactSection id="contact" :darkMode="darkMode" />
      </main>
      <SiteFooter :darkMode="darkMode" @scrollTo="scrollToSection" />
    </template>
  </div>
</template>

<script>
import SiteHeader from "./components/SiteHeader.vue";
import HeroSection from "./components/HeroSection.vue";
import FeaturedProjects from "./components/FeaturedProjects.vue";
import ExperienceSection from "./components/ExperienceSection.vue";
import SkillsSection from "./components/SkillsSection.vue";
import AdditionalProjects from "./components/AdditionalProjects.vue";
import AboutSection from "./components/AboutSection.vue";
import ContactSection from "./components/ContactSection.vue";
import SiteFooter from "./components/SiteFooter.vue";

import info from "../info";

export default {
  name: "App",
  components: {
    SiteHeader,
    HeroSection,
    FeaturedProjects,
    ExperienceSection,
    SkillsSection,
    AdditionalProjects,
    AboutSection,
    ContactSection,
    SiteFooter,
  },
  data() {
    return {
      darkMode: false,
    };
  },
  created() {
    const saved = this.$cookie.get("darkMode");
    if (saved !== null) {
      this.darkMode = saved === "true";
    } else if (window.matchMedia) {
      this.darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
  },
  methods: {
    toggleDark(val) {
      this.darkMode = val;
      this.$cookie.set("darkMode", String(val));
    },
    scrollToSection(id) {
      if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        this.$router.push("/").catch(() => {});
      } else {
        const el = document.getElementById(id);
        if (el) {
          const offset = el.getBoundingClientRect().top + window.scrollY - 72;
          window.scrollTo({ top: offset, behavior: "smooth" });
        }
        if (this.$route.path !== "/" + id) {
          this.$router.push("/" + id).catch(() => {});
        }
      }
    },
  },
};
</script>

<style>
/* =========================================================
   DESIGN SYSTEM — CSS CUSTOM PROPERTIES
   ========================================================= */
:root {
  --color-primary: #1C3753;
  --color-primary-interactive: #365F91;
  --color-accent: #3B82F6;

  --color-text-primary: #1F2937;
  --color-text-secondary: #667085;

  --color-background: #FFFFFF;
  --color-background-subtle: #F7F9FC;
  --color-surface: #FFFFFF;
  --color-border: #E4E7EC;

  --color-dark-background: #101828;
  --color-dark-surface: #1D2939;
  --color-dark-text-primary: #F9FAFB;
  --color-dark-text-secondary: #D0D5DD;
  --color-dark-border: #344054;

  --font-heading: 'Montserrat', 'Inter', sans-serif;
  --font-body: 'Inter', 'Montserrat', sans-serif;

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;

  --shadow-card: 0 4px 16px rgba(16, 24, 40, 0.06);
  --shadow-card-hover: 0 12px 32px rgba(16, 24, 40, 0.10);

  --container-max: 1180px;
  --container-pad: 24px;

  --transition-fast: 180ms ease;
}

/* =========================================================
   GLOBAL RESET & BASE
   ========================================================= */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  color: var(--color-text-primary);
  background-color: var(--color-background);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

#app {
  width: 100%;
  min-height: 100%;
  overflow-x: hidden;
  background-color: var(--color-background);
  color: var(--color-text-primary);
  transition: background-color 200ms ease, color 200ms ease;
}

#app.dark-mode {
  background-color: var(--color-dark-background);
  color: var(--color-dark-text-primary);
}

main {
  padding-top: 72px; /* nav height */
}

/* =========================================================
   TYPOGRAPHY
   ========================================================= */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  line-height: 1.2;
  color: var(--color-text-primary);
}

.dark-mode h1,
.dark-mode h2,
.dark-mode h3,
.dark-mode h4,
.dark-mode h5,
.dark-mode h6 {
  color: var(--color-dark-text-primary);
}

p {
  line-height: 1.6;
}

a {
  color: var(--color-accent);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* =========================================================
   LAYOUT UTILITIES
   ========================================================= */
.container {
  max-width: var(--container-max);
  margin-inline: auto;
  padding-inline: var(--container-pad);
}

.section {
  padding-block: 80px;
}

.section--subtle {
  background-color: var(--color-background-subtle);
}

.dark-mode .section--subtle {
  background-color: var(--color-dark-surface);
}

.section-heading {
  font-family: var(--font-heading);
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 8px;
}

.dark-mode .section-heading {
  color: var(--color-dark-text-primary);
}

.section-subheading {
  font-size: 16px;
  color: var(--color-text-secondary);
  margin-bottom: 48px;
}

.dark-mode .section-subheading {
  color: var(--color-dark-text-secondary);
}

/* =========================================================
   BUTTONS
   ========================================================= */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: var(--radius-sm);
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  text-decoration: none;
  transition:
    background-color var(--transition-fast),
    color var(--transition-fast),
    border-color var(--transition-fast),
    box-shadow var(--transition-fast),
    transform var(--transition-fast);
}

.btn:focus-visible {
  outline: 3px solid rgba(59, 130, 246, 0.45);
  outline-offset: 3px;
}

.btn:hover {
  text-decoration: none;
  transform: translateY(-1px);
}

.btn-primary {
  background-color: var(--color-primary);
  color: #fff;
}

.btn-primary:hover {
  background-color: var(--color-primary-interactive);
  color: #fff;
}

.btn-outline {
  background-color: transparent;
  color: var(--color-primary);
  border: 1.5px solid var(--color-border);
}

.btn-outline:hover {
  border-color: var(--color-primary);
  background-color: var(--color-background-subtle);
  color: var(--color-primary);
}

.dark-mode .btn-outline {
  color: var(--color-dark-text-primary);
  border-color: var(--color-dark-border);
}

.dark-mode .btn-outline:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
  background-color: rgba(59, 130, 246, 0.08);
}

.btn-accent {
  background-color: var(--color-accent);
  color: #fff;
}

.btn-accent:hover {
  background-color: #2563EB;
  color: #fff;
}

.btn-sm {
  padding: 8px 16px;
  font-size: 14px;
}

/* =========================================================
   TAGS / BADGES
   ========================================================= */
.tag {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 500;
  background-color: #EFF6FF;
  color: #1D4ED8;
  line-height: 1.6;
}

.dark-mode .tag {
  background-color: rgba(59, 130, 246, 0.15);
  color: #93C5FD;
}

/* =========================================================
   FOCUS STATES
   ========================================================= */
a:focus-visible,
button:focus-visible,
[tabindex]:focus-visible {
  outline: 3px solid rgba(59, 130, 246, 0.45);
  outline-offset: 3px;
  border-radius: 4px;
}

/* =========================================================
   SCROLLBAR
   ========================================================= */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: var(--color-border);
  border-radius: 9px;
}
::-webkit-scrollbar-thumb:hover {
  background: #9CA3AF;
}

/* =========================================================
   REDUCED MOTION
   ========================================================= */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* =========================================================
   TOOLTIP (v-tooltip)
   ========================================================= */
.tooltip {
  display: block !important;
  z-index: 10000;
}
.tooltip .tooltip-inner {
  background: var(--color-primary);
  color: #fff;
  border-radius: 6px;
  font-size: 12px;
  padding: 4px 10px;
}
.tooltip .tooltip-arrow {
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  margin: 5px;
  border-color: var(--color-primary);
  z-index: 1;
}
.tooltip[x-placement^="top"] {
  margin-bottom: 5px;
}
.tooltip[x-placement^="top"] .tooltip-arrow {
  border-width: 5px 5px 0 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  bottom: -5px;
  left: calc(50% - 5px);
}
.tooltip[x-placement^="bottom"] {
  margin-top: 5px;
}
.tooltip[x-placement^="bottom"] .tooltip-arrow {
  border-width: 0 5px 5px 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-top-color: transparent !important;
  top: -5px;
  left: calc(50% - 5px);
}
.tooltip[aria-hidden="true"] {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.15s, visibility 0.15s;
}
.tooltip[aria-hidden="false"] {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.15s;
}
</style>
