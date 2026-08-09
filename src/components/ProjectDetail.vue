<template>
  <div class="project-detail" :class="{ 'dark-mode': darkMode }">
    <!-- Loading state -->
    <div v-if="loading" class="detail-loading container">
      <p>Loading…</p>
    </div>

    <!-- Not found -->
    <div v-else-if="!project" class="detail-not-found container">
      <h1>Project not found</h1>
      <p>The project you're looking for doesn't exist or has been moved.</p>
      <router-link to="/" class="btn btn-primary">← Back to portfolio</router-link>
    </div>

    <!-- Project detail -->
    <template v-else>
      <!-- Back navigation -->
      <nav class="detail-nav" aria-label="Breadcrumb">
        <div class="container detail-nav-inner">
          <router-link to="/" class="back-link">
            <i class="fas fa-arrow-left" aria-hidden="true"></i>
            Back to portfolio
          </router-link>
          <button class="icon-btn theme-toggle" @click="toggleDark" :aria-label="darkMode ? 'Switch to light mode' : 'Switch to dark mode'">
            <i :class="darkMode ? 'fas fa-sun' : 'fas fa-moon'" aria-hidden="true"></i>
          </button>
        </div>
      </nav>

      <main class="detail-main">
        <!-- Hero -->
        <header class="detail-hero">
          <div class="container">
            <div class="detail-meta">
              <span class="detail-category">{{ project.role }}</span>
              <span class="detail-date">{{ project.date }}</span>
            </div>
            <h1 class="detail-title">{{ project.name }}</h1>
            <p class="detail-tagline">{{ project.tagline }}</p>

            <div class="detail-tech">
              <span class="tag" v-for="tech in project.technologies" :key="tech">{{ tech }}</span>
            </div>

            <div class="detail-actions" v-if="project.visit">
              <a
                :href="project.visit"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-primary"
              >
                {{ project.ctaLabel || 'Visit product' }}
                <i class="fas fa-external-link-alt" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </header>

        <!-- Screenshots -->
        <section class="detail-screenshots" aria-label="Project screenshots" v-if="project.pictures && project.pictures.length">
          <div class="container">
            <div class="screenshots-grid">
              <figure
                v-for="(pic, idx) in visibleScreenshots"
                :key="idx"
                class="screenshot-figure"
                :class="{ 'screenshot-figure--featured': idx === 0 }"
              >
                <img
                  :src="pic.img"
                  :alt="pic.alt"
                  class="screenshot-image"
                  :loading="idx === 0 ? 'eager' : 'lazy'"
                  @error="onImgError($event)"
                />
              </figure>
            </div>
            <button
              v-if="hasMoreScreenshots"
              class="btn btn-outline btn-sm show-more-btn"
              @click="showAllScreenshots = !showAllScreenshots"
            >
              {{ showAllScreenshots ? 'Show fewer' : 'Show all ' + project.pictures.length + ' screenshots' }}
            </button>
          </div>
        </section>

        <!-- Details -->
        <div class="detail-content container">
          <div class="detail-grid">
            <!-- Main content -->
            <article class="detail-article">
              <section class="detail-section" aria-labelledby="overview-heading" v-if="project.description">
                <h2 id="overview-heading">Project overview</h2>
                <p>{{ project.description }}</p>
              </section>

              <section class="detail-section" aria-labelledby="role-heading" v-if="project.role">
                <h2 id="role-heading">My role</h2>
                <p><strong>{{ project.role }}</strong><span v-if="project.company"> at {{ project.company }}</span></p>
                <p class="text-secondary" v-if="project.date">{{ project.date }}</p>
              </section>

              <section class="detail-section" aria-labelledby="contributions-heading" v-if="project.contributions && project.contributions.length">
                <h2 id="contributions-heading">Key contributions</h2>
                <ul class="detail-bullets">
                  <li v-for="c in project.contributions" :key="c">{{ c }}</li>
                </ul>
              </section>
            </article>

            <!-- Sidebar -->
            <aside class="detail-sidebar">
              <div class="sidebar-block">
                <h3>Technologies</h3>
                <div class="sidebar-tech">
                  <span class="tag" v-for="tech in project.technologies" :key="tech">{{ tech }}</span>
                </div>
              </div>

              <div class="sidebar-block" v-if="project.visit">
                <h3>External link</h3>
                <a
                  :href="project.visit"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="sidebar-link"
                >
                  {{ project.visit }}
                  <i class="fas fa-external-link-alt" aria-hidden="true"></i>
                </a>
              </div>

              <router-link to="/" class="btn btn-outline btn-sm back-btn">
                <i class="fas fa-arrow-left" aria-hidden="true"></i>
                Back to portfolio
              </router-link>
            </aside>
          </div>
        </div>
      </main>

      <footer class="detail-footer">
        <div class="container">
          <p>© {{ currentYear }} Hisham Al Hafez</p>
        </div>
      </footer>
    </template>
  </div>
</template>

<script>
import info from '../../info'

const FALLBACK = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500"%3E%3Crect width="800" height="500" fill="%23F7F9FC"/%3E%3Ctext x="50%25" y="50%25" font-family="sans-serif" font-size="18" fill="%23999" text-anchor="middle" dominant-baseline="middle"%3EScreenshot unavailable%3C/text%3E%3C/svg%3E'

const MAX_INITIAL = 4

export default {
  name: 'ProjectDetail',
  data() {
    return {
      project: null,
      loading: true,
      darkMode: false,
      showAllScreenshots: false,
      currentYear: new Date().getFullYear(),
    }
  },
  computed: {
    allProjects() {
      return [...(info.featuredProjects || []), ...(info.additionalProjects || [])]
    },
    visibleScreenshots() {
      if (!this.project || !this.project.pictures) return []
      if (this.showAllScreenshots) return this.project.pictures
      return this.project.pictures.slice(0, MAX_INITIAL)
    },
    hasMoreScreenshots() {
      return this.project && this.project.pictures && this.project.pictures.length > MAX_INITIAL
    },
  },
  created() {
    this.loadProject()
    const saved = document.cookie.split('; ').find(r => r.startsWith('darkMode='))
    if (saved) {
      this.darkMode = saved.split('=')[1] === 'true'
    } else if (window.matchMedia) {
      this.darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
  },
  methods: {
    loadProject() {
      const slug = this.$route.params.slug
      this.project = this.allProjects.find(p => p.slug === slug) || null
      this.loading = false
      if (this.project) {
        document.title = this.project.name + ' — Hisham Al Hafez'
      } else {
        document.title = 'Project not found — Hisham Al Hafez'
      }
    },
    toggleDark() {
      this.darkMode = !this.darkMode
      document.cookie = 'darkMode=' + this.darkMode + '; path=/'
    },
    onImgError(e) {
      e.target.src = FALLBACK
    },
  },
  watch: {
    '$route.params.slug'() {
      this.loadProject()
    },
  },
}
</script>

<style>
/* Global for detail page */
.project-detail {
  min-height: 100vh;
  background-color: var(--color-background);
  color: var(--color-text-primary);
  font-family: var(--font-body);
}

.project-detail.dark-mode {
  background-color: var(--color-dark-background);
  color: var(--color-dark-text-primary);
}
</style>

<style scoped>
/* Nav */
.detail-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--color-background);
  border-bottom: 1px solid var(--color-border);
  padding-block: 14px;
}

.dark-mode .detail-nav {
  background-color: var(--color-dark-background);
  border-bottom-color: var(--color-dark-border);
}

.detail-nav-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 500;
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.back-link:hover {
  color: var(--color-primary);
  text-decoration: none;
}

.dark-mode .back-link {
  color: var(--color-dark-text-secondary);
}

.dark-mode .back-link:hover {
  color: var(--color-accent);
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
}

.dark-mode .icon-btn {
  color: var(--color-dark-text-secondary);
}

/* Hero */
.detail-hero {
  padding-block: 60px;
  background-color: var(--color-background-subtle);
  border-bottom: 1px solid var(--color-border);
}

.dark-mode .detail-hero {
  background-color: var(--color-dark-surface);
  border-bottom-color: var(--color-dark-border);
}

.detail-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.detail-category {
  font-size: 13px;
  font-weight: 600;
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.detail-date {
  font-size: 13px;
  color: var(--color-text-secondary);
}

.dark-mode .detail-date {
  color: var(--color-dark-text-secondary);
}

.detail-title {
  font-family: var(--font-heading);
  font-size: clamp(32px, 5vw, 52px);
  font-weight: 800;
  color: var(--color-primary);
  margin-bottom: 16px;
  line-height: 1.15;
}

.dark-mode .detail-title {
  color: var(--color-dark-text-primary);
}

.detail-tagline {
  font-size: 18px;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 24px;
  max-width: 640px;
}

.dark-mode .detail-tagline {
  color: var(--color-dark-text-secondary);
}

.detail-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 28px;
}

.detail-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

/* Screenshots */
.detail-screenshots {
  padding-block: 48px;
  background-color: var(--color-background);
  border-bottom: 1px solid var(--color-border);
}

.dark-mode .detail-screenshots {
  background-color: var(--color-dark-background);
  border-bottom-color: var(--color-dark-border);
}

.screenshots-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 24px;
}

.screenshot-figure {
  margin: 0;
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--color-border);
  background-color: var(--color-background-subtle);
  aspect-ratio: 16 / 10;
}

.dark-mode .screenshot-figure {
  border-color: var(--color-dark-border);
  background-color: var(--color-dark-surface);
}

.screenshot-figure--featured {
  grid-column: 1 / -1;
  aspect-ratio: 16 / 9;
}

.screenshot-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
}

.show-more-btn {
  display: block;
  margin-inline: auto;
}

/* Content grid */
.detail-content {
  padding-block: 60px;
}

.detail-grid {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 60px;
  align-items: start;
}

.detail-article {
  min-width: 0;
}

.detail-section {
  margin-bottom: 48px;
}

.detail-section h2 {
  font-family: var(--font-heading);
  font-size: 20px;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 16px;
}

.dark-mode .detail-section h2 {
  color: var(--color-dark-text-primary);
}

.detail-section p {
  font-size: 16px;
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: 8px;
}

.dark-mode .detail-section p {
  color: var(--color-dark-text-secondary);
}

.detail-section p.text-secondary {
  font-size: 14px;
  color: var(--color-text-secondary);
}

.detail-bullets {
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.detail-bullets li {
  font-size: 15px;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.dark-mode .detail-bullets li {
  color: var(--color-dark-text-secondary);
}

/* Sidebar */
.detail-sidebar {
  position: sticky;
  top: 80px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.sidebar-block {
  background-color: var(--color-background-subtle);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 20px;
}

.dark-mode .sidebar-block {
  background-color: var(--color-dark-surface);
  border-color: var(--color-dark-border);
}

.sidebar-block h3 {
  font-family: var(--font-heading);
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  color: var(--color-text-secondary);
  margin-bottom: 12px;
}

.dark-mode .sidebar-block h3 {
  color: var(--color-dark-text-secondary);
}

.sidebar-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.sidebar-link {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: var(--color-accent);
  word-break: break-all;
  text-decoration: none;
}

.sidebar-link:hover {
  text-decoration: underline;
}

.back-btn {
  width: 100%;
  justify-content: center;
}

/* Loading / Not found */
.detail-loading,
.detail-not-found {
  padding-block: 80px;
  text-align: center;
}

.detail-not-found h1 {
  font-size: 32px;
  margin-bottom: 16px;
}

.detail-not-found p {
  font-size: 16px;
  color: var(--color-text-secondary);
  margin-bottom: 32px;
}

/* Footer */
.detail-footer {
  background-color: var(--color-background-subtle);
  border-top: 1px solid var(--color-border);
  padding-block: 20px;
  text-align: center;
}

.dark-mode .detail-footer {
  background-color: var(--color-dark-surface);
  border-top-color: var(--color-dark-border);
}

.detail-footer p {
  font-size: 13px;
  color: var(--color-text-secondary);
  margin: 0;
}

/* Responsive */
@media (max-width: 900px) {
  .detail-grid {
    grid-template-columns: 1fr;
  }

  .detail-sidebar {
    position: static;
  }

  .screenshots-grid {
    grid-template-columns: 1fr;
  }

  .screenshot-figure--featured {
    grid-column: auto;
  }
}
</style>
