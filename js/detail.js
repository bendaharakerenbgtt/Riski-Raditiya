/**
 * InLiveIq — Detail Page Dynamic Renderer
 * Renders the 10-point project case study or the full insight article layout.
 */

(function () {
  'use strict';

  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  // Render Project Detail Page
  function renderProjectDetail() {
    const container = document.querySelector('#project-detail-container');
    if (!container) return;

    const projectId = getQueryParam('id') || 'cognitive-note-engine';
    const project = typeof getProjectById === 'function' ? getProjectById(projectId) : null;

    if (!project) {
      container.innerHTML = `
        <div class="container section" style="text-align: center; padding: 6rem 1rem;">
          <h1 class="section-title">Project Case Study Not Found</h1>
          <p style="color: var(--text-secondary); margin-bottom: 2rem;">The requested project could not be located in the InLiveIq archive.</p>
          <a href="projects.html" class="btn btn-primary">Return to Projects Archive</a>
        </div>
      `;
      return;
    }

    document.title = `${project.title} — InLiveIq`;

    const sec = project.sections;
    const related = typeof getRelatedProjects === 'function' ? getRelatedProjects(project.id) : [];

    container.innerHTML = `
      <!-- Header -->
      <header class="editorial-header">
        <div class="container">
          <div style="margin-bottom: 1.5rem;">
            <a href="projects.html" class="link-editorial">
              <svg viewBox="0 0 24 24" fill="none"><path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              Back to Projects Archive
            </a>
          </div>
          <div><span class="editorial-tag">${project.category}</span></div>
          <h1 class="editorial-header-title">${project.title}</h1>
          <p class="editorial-header-subtitle">${project.subtitle}</p>

          <div class="editorial-meta-bar">
            <div class="editorial-meta-item">
              <span>Status:</span> <strong>${project.status}</strong>
            </div>
            <div class="editorial-meta-item">
              <span>Timeline:</span> <strong>${project.year}</strong>
            </div>
            <div class="editorial-meta-item">
              <span>Domain:</span> <strong>${project.category}</strong>
            </div>
          </div>
        </div>
      </header>

      <!-- Main Visual -->
      <div class="container">
        <div class="editorial-lead-image">
          <img src="${project.heroImage}" alt="${project.title} Schematic Diagram" />
        </div>
      </div>

      <!-- 10-Point Case Study Structure -->
      <div class="container">
        <div class="case-study-grid">
          <!-- Sticky Table of Contents -->
          <aside class="case-study-nav">
            <h4 style="font-size: 0.8125rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted); margin-bottom: 1rem;">Case Study Index</h4>
            <nav>
              <ul class="toc-list">
                <li><a href="#overview" class="toc-link active">1. Overview</a></li>
                <li><a href="#background" class="toc-link">2. Background &amp; Context</a></li>
                <li><a href="#problem" class="toc-link">3. Problem or Challenge</a></li>
                <li><a href="#goals" class="toc-link">4. Goals</a></li>
                <li><a href="#planning" class="toc-link">5. Planning &amp; Process</a></li>
                <li><a href="#implementation" class="toc-link">6. Design &amp; Implementation</a></li>
                <li><a href="#technologies" class="toc-link">7. Technologies Used</a></li>
                <li><a href="#challenges" class="toc-link">8. Challenges &amp; Decisions</a></li>
                <li><a href="#results" class="toc-link">9. Results</a></li>
                <li><a href="#reflection" class="toc-link">10. Reflection &amp; Lessons Learned</a></li>
              </ul>
            </nav>
          </aside>

          <!-- Content Sections -->
          <div class="case-study-content">
            <section id="overview" class="case-section">
              <span class="case-section-num">POINT 01 // FOUNDATION</span>
              <h2 class="case-section-title">1. Overview</h2>
              <p>${sec.overview}</p>
            </section>

            <section id="background" class="case-section">
              <span class="case-section-num">POINT 02 // ORIGIN</span>
              <h2 class="case-section-title">2. Background and Context</h2>
              <p>${sec.background}</p>
            </section>

            <section id="problem" class="case-section">
              <span class="case-section-num">POINT 03 // INQUIRY</span>
              <h2 class="case-section-title">3. Problem or Challenge</h2>
              <p>${sec.problem}</p>
            </section>

            <section id="goals" class="case-section">
              <span class="case-section-num">POINT 04 // OBJECTIVES</span>
              <h2 class="case-section-title">4. Goals</h2>
              <ul>
                ${sec.goals.map(g => `<li>${g}</li>`).join('')}
              </ul>
            </section>

            <section id="planning" class="case-section">
              <span class="case-section-num">POINT 05 // METHODOLOGY</span>
              <h2 class="case-section-title">5. Planning and Process</h2>
              <p>${sec.planning}</p>
            </section>

            <section id="implementation" class="case-section">
              <span class="case-section-num">POINT 06 // EXECUTION</span>
              <h2 class="case-section-title">6. Design and Implementation</h2>
              <p>${sec.implementation}</p>
            </section>

            <section id="technologies" class="case-section">
              <span class="case-section-num">POINT 07 // TOOLING</span>
              <h2 class="case-section-title">7. Technologies Used</h2>
              <div class="tech-tags-list">
                ${sec.technologies.map(t => `<span class="tech-tag-pill">${t}</span>`).join('')}
              </div>
            </section>

            <section id="challenges" class="case-section">
              <span class="case-section-num">POINT 08 // CRITICAL PIVOTS</span>
              <h2 class="case-section-title">8. Challenges and Decisions</h2>
              ${sec.challenges.map(c => `<p>${c}</p>`).join('')}
            </section>

            <section id="results" class="case-section">
              <span class="case-section-num">POINT 09 // EVIDENCE</span>
              <h2 class="case-section-title">9. Results</h2>
              <p>${sec.results}</p>
            </section>

            <section id="reflection" class="case-section">
              <span class="case-section-num">POINT 10 // SYNTHESIS</span>
              <h2 class="case-section-title">10. Reflection and Lessons Learned</h2>
              <p>${sec.reflection}</p>
            </section>

            <!-- Other Projects -->
            <div style="border-top: 1px solid var(--border-subtle); padding-top: 3.5rem; margin-top: 4rem;">
              <h3 style="font-size: 1.35rem; margin-bottom: 1.5rem;">Explore Other Projects</h3>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem;">
                ${related.map(r => `
                  <a href="project-detail.html?id=${r.id}" class="project-visual-link" style="padding: 1.5rem;">
                    <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--accent); font-weight: 600; display: block; margin-bottom: 0.5rem;">${r.category}</span>
                    <h4 style="font-size: 1.15rem; margin-bottom: 0.5rem; color: var(--text-primary);">${r.title}</h4>
                    <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.5;">${r.subtitle}</p>
                  </a>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // Re-initialize TOC scroll spy
    setTimeout(() => {
      const tocLinks = document.querySelectorAll('.toc-link');
      const sections = document.querySelectorAll('.case-section');
      if (window.IntersectionObserver && sections.length) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const id = entry.target.getAttribute('id');
              tocLinks.forEach(link => {
                if (link.getAttribute('href') === `#${id}`) {
                  link.classList.add('active');
                } else {
                  link.classList.remove('active');
                }
              });
            }
          });
        }, { rootMargin: '-10% 0px -70% 0px' });
        sections.forEach(s => observer.observe(s));
      }
    }, 100);
  }

  // Render Insight Article Page
  function renderInsightDetail() {
    const container = document.querySelector('#insight-detail-container');
    if (!container) return;

    const insightId = getQueryParam('id') || 'collectors-fallacy-synthesis';
    const insight = typeof getInsightById === 'function' ? getInsightById(insightId) : null;

    if (!insight) {
      container.innerHTML = `
        <div class="container section" style="text-align: center; padding: 6rem 1rem;">
          <h1 class="section-title">Essay Not Found</h1>
          <p style="color: var(--text-secondary); margin-bottom: 2rem;">The requested insight note could not be found.</p>
          <a href="insights.html" class="btn btn-primary">Return to Knowledge &amp; Insights</a>
        </div>
      `;
      return;
    }

    document.title = `${insight.title} — InLiveIq`;

    const related = typeof getRelatedInsights === 'function' ? getRelatedInsights(insight.id) : [];

    container.innerHTML = `
      <!-- Header -->
      <header class="editorial-header">
        <div class="container">
          <div style="margin-bottom: 1.5rem;">
            <a href="insights.html" class="link-editorial">
              <svg viewBox="0 0 24 24" fill="none"><path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              Back to Insights Archive
            </a>
          </div>
          <div><span class="editorial-tag">${insight.category}</span></div>
          <h1 class="editorial-header-title">${insight.title}</h1>
          <p class="editorial-header-subtitle">${insight.subtitle}</p>

          <div class="editorial-meta-bar">
            <div class="editorial-meta-item">
              <span>Published:</span> <strong>${insight.date}</strong>
            </div>
            <div class="editorial-meta-item">
              <span>Estimated Reading Time:</span> <strong>${insight.readTime}</strong>
            </div>
            <div class="editorial-meta-item">
              <span>Domain:</span> <strong>${insight.category}</strong>
            </div>
          </div>
        </div>
      </header>

      <!-- Main Visual -->
      <div class="container">
        <div class="editorial-lead-image">
          <img src="${insight.heroImage}" alt="${insight.title} Concept Diagram" />
        </div>
      </div>

      <!-- Article Content -->
      <div class="container">
        <article class="article-prose">
          ${insight.content.map(c => `
            <section style="margin-bottom: 2.5rem;">
              <h2>${c.heading}</h2>
              ${c.paragraphs.map(p => `<p>${p}</p>`).join('')}
            </section>
          `).join('')}

          <!-- Key Takeaways Box -->
          <div class="article-key-takeaways">
            <h3>Key Takeaways &amp; Working Principles</h3>
            <ul>
              ${insight.takeaways.map(t => `<li>${t}</li>`).join('')}
            </ul>
          </div>

          <!-- Closing reflection note -->
          <div style="font-family: var(--font-serif); font-style: italic; color: var(--text-secondary); border-top: 1px solid var(--border-subtle); padding-top: 2rem; margin-top: 3rem;">
            <p>Shared as an evolving thought. If this sparked a connection, challenge, or question in your own learning practice, feel welcome to <a href="contact.html" style="color: var(--accent); text-decoration: underline;">send a note</a>.</p>
          </div>

          <!-- Related Reading -->
          <div style="border-top: 1px solid var(--border-subtle); padding-top: 3.5rem; margin-top: 4rem;">
            <h3 style="font-size: 1.35rem; margin-bottom: 1.5rem;">Related Insights</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
              ${related.map(r => `
                <a href="insight-detail.html?id=${r.id}" class="insight-card" style="padding: 1.5rem;">
                  <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--accent); font-weight: 600; display: block; margin-bottom: 0.5rem;">${r.category} • ${r.readTime}</span>
                  <h4 style="font-size: 1.15rem; margin-bottom: 0.5rem; color: var(--text-primary);">${r.title}</h4>
                  <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.5;">${r.summary}</p>
                </a>
              `).join('')}
            </div>
          </div>
        </article>
      </div>
    `;
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderProjectDetail();
    renderInsightDetail();
  });
})();
