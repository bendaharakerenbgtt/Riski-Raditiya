/**
 * InLiveIq — Detail Page Dynamic Renderer (Bahasa Indonesia)
 * Merender Studi Kasus Proyek Menggunakan 7-Step Narrative Engineering Framework:
 * 1. Hook (Pertanyaan Provokatif & Premis)
 * 2. Context (Latar Belakang & Realita Lapangan)
 * 3. Problem (Akar Persoalan yang Spesifik)
 * 4. Exploration (Proses Berpikir & Trade-offs Opsi)
 * 5. Execution (Arsitektur Teknis & Koding Kunci)
 * 6. Evidence (Metrik Terukur, Galeri Multi-Media & Video Demo)
 * 7. Reflection (Pelajaran Berharga & Rencana Masa Depan)
 */

(function () {
  'use strict';

  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  // Render Halaman Detail Proyek
  function renderProjectDetail() {
    const container = document.querySelector('#project-detail-container');
    if (!container) return;

    const projectId = getQueryParam('id') || 'ai-cognitive-engine';
    const project = typeof getProjectById === 'function' ? getProjectById(projectId) : null;

    if (!project) {
      container.innerHTML = `
        <div class="container section" style="text-align: center; padding: 6rem 1rem;">
          <h1 class="section-title">Studi Kasus Tidak Ditemukan</h1>
          <p style="color: var(--text-secondary); margin-bottom: 2rem;">Proyek yang Anda cari tidak ditemukan dalam arsip ini.</p>
          <a href="index.html#projects" class="btn-download-cv">Kembali ke Karya Utama</a>
        </div>
      `;
      return;
    }

    document.title = `${project.title} — Studi Kasus 7 Langkah Portofolio`;

    const sec = project.sections;

    // Helper untuk render teknologi tags
    const techTags = Array.isArray(project.tags)
      ? project.tags.map(t => `<span class="project-tag" style="font-size: 0.825rem; padding: 0.35rem 0.85rem;">${t}</span>`).join('')
      : '';

    // Helper untuk render kartu metrik terukur
    const metricsCards = (project.metrics && project.metrics.length > 0)
      ? project.metrics.map(m => `
          <div class="detail-metric-card">
            <span class="detail-metric-value">${m.value}</span>
            <span class="detail-metric-label">${m.label}</span>
          </div>
        `).join('')
      : '';

    // Helper untuk render kartu trade-offs eksplorasi
    const tradeoffsHtml = (sec.exploration && sec.exploration.tradeoffs)
      ? sec.exploration.tradeoffs.map(t => `
          <div class="detail-tradeoff-item ${t.verdict.toLowerCase().includes('dipilih') ? 'is-selected' : ''}">
            <div class="tradeoff-header">
              <span class="tradeoff-verdict-badge">${t.verdict}</span>
              <strong class="tradeoff-option-title">${t.option}</strong>
            </div>
            <p class="tradeoff-reason">${t.reason}</p>
          </div>
        `).join('')
      : '';

    // Helper untuk render galeri gambar
    const galleryItems = (project.gallery && project.gallery.length > 0)
      ? project.gallery.map((img, idx) => `
          <figure class="detail-gallery-figure">
            <div class="detail-gallery-img-wrapper">
              <img src="${img.url}" alt="${img.alt || project.title}" loading="lazy" decoding="async" />
            </div>
            <figcaption class="detail-gallery-caption">
              <strong>Preview ${idx + 1}:</strong> ${img.caption}
            </figcaption>
          </figure>
        `).join('')
      : `
        <figure class="detail-gallery-figure">
          <div class="detail-gallery-img-wrapper">
            <img src="${project.heroImage}" alt="${project.title}" loading="lazy" decoding="async" />
          </div>
          <figcaption class="detail-gallery-caption">
            <strong>Preview 1:</strong> Tangkapan layar antarmuka utama ${project.title}.
          </figcaption>
        </figure>
      `;

    // Video Section (Embed or Elegant Placeholder)
    let videoMarkup = '';
    if (project.videoUrl && project.videoUrl.trim() !== '') {
      videoMarkup = `
        <div class="detail-video-container">
          <iframe src="${project.videoUrl}" title="Video Walkthrough ${project.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      `;
    } else {
      videoMarkup = `
        <div class="detail-video-placeholder">
          <div class="video-placeholder-icon">
            <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
          <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.4rem;">Video Walkthrough &amp; Interaksi</h4>
          <p style="font-size: 0.9rem; color: var(--text-secondary); max-width: 48ch; margin: 0 auto 1.25rem auto;">
            Video demonstrasi rekaman layar (Loom / YouTube) untuk proyek ini siap dipasang untuk memperlihatkan interaksi alur kerja nyata.
          </p>
          <a href="${project.githubUrl || 'https://github.com/bendaharakerenbgtt'}" target="_blank" rel="noopener noreferrer" class="btn-download-cv" style="font-size: 0.85rem; padding: 0.55rem 1.4rem;">
            <span>Lihat Repositori Kode di GitHub ↗</span>
          </a>
        </div>
      `;
    }

    container.innerHTML = `
      <article class="project-detail-article">
        <!-- Breadcrumb & Back Action -->
        <div class="container" style="padding-top: 1.5rem; margin-bottom: 2rem;">
          <a href="index.html#projects" class="detail-back-link">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Kembali ke Beranda &amp; Karya</span>
          </a>
        </div>

        <!-- Header Editorial Proyek -->
        <header class="detail-header">
          <div class="container">
            <div class="detail-eyebrow-row">
              <span class="detail-monogram-tag">STUDI KASUS // 7-STEP FRAMEWORK // ${project.year}</span>
              <span class="detail-status-pill">${project.status}</span>
            </div>

            <h1 class="detail-main-title">${project.title}</h1>
            <p class="detail-lead-subtitle">${project.subtitle}</p>

            <!-- Links & Action Row -->
            <div class="detail-action-bar">
              <div class="detail-tags-wrap">
                ${techTags}
              </div>
              <div class="detail-links-group">
                ${project.githubUrl ? `
                  <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="detail-ext-link">
                    <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    <span>GitHub Repo ↗</span>
                  </a>
                ` : ''}
                ${project.liveUrl ? `
                  <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="detail-ext-link detail-ext-link--primary">
                    <span>Akses Live Demo ↗</span>
                  </a>
                ` : ''}
              </div>
            </div>
          </div>
        </header>

        <!-- Lead Banner Image -->
        <div class="container" style="margin-bottom: 3.5rem;">
          <div class="detail-lead-visual">
            <img src="${project.heroImage}" alt="${project.title}" width="1200" height="700" loading="eager" />
          </div>
        </div>

        <!-- Main Case Study Content & Sticky Navigation -->
        <div class="container">
          <div class="detail-content-layout">
            
            <!-- Sticky Aside Table of Contents -->
            <aside class="detail-sticky-toc" aria-label="Daftar Isi 7 Langkah Studi Kasus">
              <div class="detail-toc-box">
                <span class="detail-toc-title">7-STEP FRAMEWORK</span>
                <nav class="detail-toc-nav">
                  <a href="#step-1-hook" class="detail-toc-item active">1. The Hook</a>
                  <a href="#step-2-context" class="detail-toc-item">2. Context &amp; Realita</a>
                  <a href="#step-3-problem" class="detail-toc-item">3. The Real Problem</a>
                  <a href="#step-4-exploration" class="detail-toc-item">4. Exploration &amp; Trade-offs</a>
                  <a href="#step-5-execution" class="detail-toc-item">5. Technical Execution</a>
                  <a href="#step-6-evidence" class="detail-toc-item">6. Evidence &amp; Showcase</a>
                  <a href="#step-7-reflection" class="detail-toc-item">7. Reflection &amp; Future</a>
                </nav>
              </div>
            </aside>

            <!-- Article Body (7-Step Narrative) -->
            <div class="detail-article-body">
              
              <!-- LANGKAH 1: HOOK -->
              <section id="step-1-hook" class="detail-article-section">
                <span class="detail-step-badge">LANGKAH 01 // HOOK &amp; PREMISE</span>
                <h2 class="detail-section-heading">1. Premis &amp; Pertanyaan Pembuka</h2>
                <div class="detail-hook-quote">
                  <span class="hook-quote-glyph">“</span>
                  <p class="hook-quote-text">${sec.hook}</p>
                </div>
              </section>

              <!-- LANGKAH 2: CONTEXT -->
              <section id="step-2-context" class="detail-article-section">
                <span class="detail-step-badge">LANGKAH 02 // CONTEXT &amp; BACKGROUND</span>
                <h2 class="detail-section-heading">2. Konteks Lapangan &amp; Audiens</h2>
                <p class="detail-paragraph">${sec.context}</p>
              </section>

              <!-- LANGKAH 3: PROBLEM -->
              <section id="step-3-problem" class="detail-article-section">
                <span class="detail-step-badge">LANGKAH 03 // THE ROOT PROBLEM</span>
                <h2 class="detail-section-heading">3. Akar Persoalan yang Dihadapi</h2>
                <p class="detail-paragraph">${sec.problem}</p>
              </section>

              <!-- LANGKAH 4: EXPLORATION & TRADE-OFFS -->
              <section id="step-4-exploration" class="detail-article-section">
                <span class="detail-step-badge">LANGKAH 04 // ENGINEERING JUDGMENT</span>
                <h2 class="detail-section-heading">4. Eksplorasi Pilihan &amp; Trade-offs</h2>
                <p class="detail-paragraph">${sec.exploration.narrative}</p>
                
                <div class="detail-tradeoffs-list">
                  ${tradeoffsHtml}
                </div>
              </section>

              <!-- LANGKAH 5: EXECUTION -->
              <section id="step-5-execution" class="detail-article-section">
                <span class="detail-step-badge">LANGKAH 05 // TECHNICAL EXECUTION</span>
                <h2 class="detail-section-heading">5. Arsitektur &amp; Koding Kunci</h2>
                <p class="detail-paragraph">${sec.execution.architecture}</p>

                <h4 style="font-family: var(--font-mono); font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-primary); margin: 1.5rem 0 0.75rem 0;">Pilar Implementasi Solusi:</h4>
                <ul class="detail-checklist">
                  ${sec.execution.keyImplementations.map(k => `<li>${k}</li>`).join('')}
                </ul>

                <h4 style="font-family: var(--font-mono); font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-primary); margin: 2rem 0 0.85rem 0;">Stack Teknologi yang Digunakan:</h4>
                <div class="detail-tech-grid">
                  ${sec.execution.technologies.map(t => `
                    <div class="detail-tech-card">
                      <span class="tech-card-glyph">◈</span>
                      <span>${t}</span>
                    </div>
                  `).join('')}
                </div>
              </section>

              <!-- LANGKAH 6: EVIDENCE & SHOWCASE -->
              <section id="step-6-evidence" class="detail-article-section">
                <span class="detail-step-badge">LANGKAH 06 // EVIDENCE &amp; IMPACT</span>
                <h2 class="detail-section-heading">6. Bukti Nyata &amp; Hasil Terukur</h2>
                <p class="detail-paragraph">${sec.evidenceText}</p>

                <!-- Metrics Grid -->
                ${metricsCards ? `
                  <div class="detail-metrics-grid">
                    ${metricsCards}
                  </div>
                ` : ''}

                <!-- Multi-Image Visual Gallery -->
                <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin-top: 2.25rem; margin-bottom: 0.5rem;">Galeri Preview &amp; Alur Antarmuka</h3>
                <div class="detail-gallery-grid">
                  ${galleryItems}
                </div>

                <!-- Video Walkthrough -->
                <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin-top: 2.5rem; margin-bottom: 0.5rem;">Video Walkthrough &amp; Interaksi</h3>
                ${videoMarkup}
              </section>

              <!-- LANGKAH 7: REFLECTION & FUTURE -->
              <section id="step-7-reflection" class="detail-article-section">
                <span class="detail-step-badge">LANGKAH 07 // REFLECTION &amp; ROADMAP</span>
                <h2 class="detail-section-heading">7. Refleksi &amp; Pelajaran Berharga</h2>
                <p class="detail-paragraph">${sec.reflection}</p>

                <div class="detail-callout-box">
                  <h4 class="callout-title">Rencana &amp; Roadmap Masa Depan (What's Next)</h4>
                  <p class="callout-text">${sec.futureHorizons}</p>
                </div>
              </section>

              <!-- Bottom Action CTA -->
              <div class="detail-bottom-cta">
                <h3 class="cta-box-title">Tertarik Mendiskusikan Proyek Ini?</h3>
                <p class="cta-box-desc">
                  Kotak pesan saya selalu terbuka untuk kolaborasi pembangunan aplikasi web modern, desain interaksi multimedia, atau rekayasa kode presisi.
                </p>
                <div class="cta-actions-wrap">
                  <a href="index.html#contact" class="btn-download-cv">
                    <span>Mulai Percakapan / Kontak ↗</span>
                  </a>
                  <a href="index.html#projects" class="detail-ext-link">
                    <span>Lihat Karya Lainnya</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </article>
    `;

    // Inisialisasi Scroll Spy untuk Aside TOC
    setTimeout(() => {
      const tocLinks = document.querySelectorAll('.detail-toc-item');
      const sections = document.querySelectorAll('.detail-article-section');
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
        }, { rootMargin: '-15% 0px -70% 0px' });
        sections.forEach(s => observer.observe(s));
      }
    }, 120);
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderProjectDetail();
  });
})();
