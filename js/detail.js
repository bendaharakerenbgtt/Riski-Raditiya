/**
 * InLiveIq — Detail Page Dynamic Renderer
 * Menerapkan Kerangka 5 Bagian Cerita (Portfolio Case Study Writer):
 * 01. Gambaran Besar — Apa yang aku buat?
 * 02. Why — Kenapa aku membuat ini?
 * 03. Development & Challenges — Pengembangan dan Masalah
 * 04. The Outcome — Hasil dan Penerimaan
 * 05. Reflection — Apa yang aku pelajari?
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

    const projectId = getQueryParam('id') || 'solecare';
    const project = typeof getProjectById === 'function' ? getProjectById(projectId) : null;

    if (!project) {
      container.innerHTML = `
        <div class="container section" style="text-align: center; padding: 6rem 1rem;">
          <h1 class="section-title">Proyek Tidak Ditemukan</h1>
          <p style="color: var(--text-secondary); margin-bottom: 2rem;">Karya yang Anda cari tidak tersedia dalam arsip ini.</p>
          <a href="index.html#projects" class="btn-download-cv">Kembali ke Karya Utama</a>
        </div>
      `;
      return;
    }

    document.title = `${project.title} — Studi Kasus Portofolio`;

    const c = project.content || {};
    const hasCustomStory = Boolean(project.customStory && Array.isArray(project.customStory.sections));

    // Helper mapping logo ikon teknologi (SVG inline)
    function getTechIcon(tag) {
      const lower = tag.toLowerCase().trim();
      if (lower.includes('react')) {
        return `<svg viewBox="-11.5 -10.23174 23 20.46348" width="14" height="14" fill="none"><circle cx="0" cy="0" r="2.05" fill="#61dafb"/><g stroke="#61dafb" stroke-width="1"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>`;
      }
      if (lower.includes('sheets') || lower.includes('spreadsheet')) {
        return `<svg viewBox="0 0 24 24" width="14" height="14"><path fill="#0F9D58" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/><path fill="#FFF" d="M19 11H5V9h14v2zm0 4H5v-2h14v2zm-8 4H5v-2h6v2zm8 0h-6v-2h6v2zM19 7H5V5h14v2z"/></svg>`;
      }
      if (lower.includes('apps script')) {
        return `<svg viewBox="0 0 24 24" width="14" height="14"><path fill="#4285F4" d="M4 3h16c.55 0 1 .45 1 1v16c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1z"/><path fill="#FFF" d="M9.5 8.5L6 12l3.5 3.5 1.4-1.4L8.8 12l2.1-2.1L9.5 8.5zm5 0l-1.4 1.4 2.1 2.1-2.1 2.1 1.4 1.4 3.5-3.5-3.5-3.5z"/></svg>`;
      }
      if (lower.includes('cloudflare')) {
        return `<svg viewBox="0 0 24 24" width="14" height="14" fill="#F38020"><path d="M18.3 12.3c-.2-1.8-1.7-3.1-3.6-3.1-1.3 0-2.4.6-3 1.6-.4-.3-.9-.5-1.5-.5-1.4 0-2.5 1.1-2.5 2.5 0 .2 0 .4.1.6-1.5.2-2.7 1.5-2.7 3.1 0 1.7 1.4 3.1 3.1 3.1h10.4c1.7 0 3.1-1.4 3.1-3.1 0-1.6-1.2-2.9-2.8-3.1-.1-.4-.3-.8-.6-1.2z"/></svg>`;
      }
      if (lower.includes('pdf')) {
        return `<svg viewBox="0 0 24 24" width="14" height="14" fill="#E5252A"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9.5 8.5h-2v3H6V8h3.5c1.4 0 2 .9 2 1.75 0 1-.7 1.75-2 1.75zm5.5 3H12V8h3c1.7 0 2.5 1.1 2.5 3.25S16.7 14.5 15 14.5zm4.5-4h-2.5v1.5h2v1.5h-2v2.5H15V8h4.5v1.5z"/></svg>`;
      }
      if (lower.includes('html') || lower.includes('css')) {
        return `<svg viewBox="0 0 24 24" width="14" height="14" fill="#E44D26"><path d="M3 2l1.8 20.2 7.2 2 7.2-2L21 2H3zm14.4 6.3h-7.6l.2 2.3h7.2l-.6 6.7-4.6 1.3-4.6-1.3-.3-3.6h2.2l.2 1.9 2.5.7 2.5-.7.3-3H6.8L6.2 6.1h11.4l-.2 2.2z"/></svg>`;
      }
      if (lower.includes('drive')) {
        return `<svg viewBox="0 0 24 24" width="14" height="14"><path fill="#FFC107" d="M8.5 3.5l5.2 9H3.3l5.2-9z"/><path fill="#2684FC" d="M13.7 12.5l5.2 9H8.5l5.2-9z"/><path fill="#00AC47" d="M3.3 21.5l5.2-9 5.2 9H3.3z"/></svg>`;
      }
      if (lower.includes('vercel')) {
        return `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 2L2 19.8h20L12 2z"/></svg>`;
      }
      if (lower.includes('next')) {
        return `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 0a12 12 0 1 0 12 12A12.014 12.014 0 0 0 12 0zm5.1 16.5l-6-7.8v7.8H9.5V7.5h1.6l6 7.8V7.5h1.6v9z"/></svg>`;
      }
      if (lower.includes('postgres')) {
        return `<svg viewBox="0 0 24 24" width="14" height="14" fill="#336791"><path d="M12 2C6.5 2 2 6.5 2 12c0 3.6 1.9 6.7 4.8 8.4V17c-.9-.6-1.5-1.7-1.5-2.9 0-1.9 1.6-3.5 3.5-3.5h.7c.3-.8.9-1.5 1.7-1.9-.3-.5-.5-1.1-.5-1.7 0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5c0 .6-.2 1.2-.5 1.7.8.4 1.4 1.1 1.7 1.9h.7c1.9 0 3.5 1.6 3.5 3.5 0 1.2-.6 2.3-1.5 2.9v3.4c2.9-1.7 4.8-4.8 4.8-8.4 0-5.5-4.5-10-10-10z"/></svg>`;
      }
      if (lower.includes('javascript') || lower === 'js') {
        return `<svg viewBox="0 0 24 24" width="14" height="14"><rect width="24" height="24" fill="#F7DF1E" rx="3"/><path d="M7 17.5c1 .5 2.2.8 3.2.1.8-.5 1-1.6 1-3.6V7h-2v7c0 .8-.2 1.2-.7 1.4-.4.1-.9.1-1.5-.1v2.2zm7.6-.2c1.2.6 2.5.9 3.8.3 1.2-.6 1.6-1.8 1.6-3 0-2.3-2.3-2.6-3.5-3.1-.7-.3-1-.6-1-1.1 0-.6.5-1 1.3-1 .8 0 1.6.3 2.1.6l.8-1.7c-.8-.5-1.8-.7-2.9-.7-1.8 0-3.3 1.1-3.3 2.9 0 2.2 2.3 2.5 3.5 3 .7.3 1 .6 1 1.1 0 .7-.6 1.1-1.5 1.1-.9 0-1.9-.4-2.5-.8l-.9 1.6z"/></svg>`;
      }
      if (lower.includes('zod')) {
        return `<svg viewBox="0 0 24 24" width="14" height="14" fill="#3068B7"><path d="M3 4h18v3.5L8.5 16.5H21V20H3v-3.5L15.5 7.5H3V4z"/></svg>`;
      }
      if (lower.includes('argon')) {
        return `<svg viewBox="0 0 24 24" width="14" height="14" fill="#10B981"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>`;
      }
      if (lower.includes('preview') || lower.includes('actions') || lower.includes('print')) {
        return `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`;
      }
      return `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
    }

    // Helper untuk render teknologi tags
    const techTags = Array.isArray(project.tags)
      ? project.tags.map(t => `
          <span class="project-tag" style="font-size: 0.825rem; padding: 0.35rem 0.85rem;">
            ${getTechIcon(t)}
            <span>${t}</span>
          </span>
        `).join('')
      : '';

    // Helper untuk render kartu metrik hasil
    const metricsCards = (project.metrics && project.metrics.length > 0)
      ? project.metrics.map(m => `
          <div class="detail-metric-card">
            <span class="detail-metric-value">${m.value}</span>
            <span class="detail-metric-label">${m.label}</span>
          </div>
        `).join('')
      : '';

    // Helper untuk render keputusan arsitektur (tradeoffs)
    const tradeoffsHtml = (c.development && c.development.tradeoffs && c.development.tradeoffs.length > 0)
      ? c.development.tradeoffs.map(t => `
          <div class="detail-tradeoff-item is-selected">
            <div class="tradeoff-header">
              <span class="tradeoff-verdict-badge">Keputusan Desain</span>
              <strong class="tradeoff-option-title">${t.decision}</strong>
            </div>
            <p class="tradeoff-reason">${t.reason}</p>
          </div>
        `).join('')
      : '';

    // Helper untuk render galeri gambar
    const galleryItems = (project.gallery && project.gallery.length > 0)
      ? project.gallery.map((img, idx) => `
          <figure class="detail-gallery-figure ${img.isMobile ? 'is-mobile-shot' : ''}">
            <div class="detail-gallery-img-wrapper" onclick="window.openImageLightbox && window.openImageLightbox('${img.url}', '${(img.caption || img.alt || project.title).replace(/'/g, "\\'")}')">
              <img src="${img.url}" alt="${img.alt || project.title}" loading="lazy" decoding="async" />
              <span class="gallery-zoom-hint" aria-hidden="true">Perbesar ↗</span>
            </div>
            <figcaption class="detail-gallery-caption">
              <strong>Tampilan ${idx + 1}:</strong> ${img.caption}
            </figcaption>
          </figure>
        `).join('')
      : `
        <figure class="detail-gallery-figure">
          <div class="detail-gallery-img-wrapper" onclick="window.openImageLightbox && window.openImageLightbox('${project.heroImage}', '${project.title.replace(/'/g, "\\'")}')">
            <img src="${project.heroImage}" alt="${project.title}" loading="lazy" decoding="async" />
          </div>
          <figcaption class="detail-gallery-caption">
            <strong>Tampilan 1:</strong> Cuplikan antarmuka utama ${project.title}.
          </figcaption>
        </figure>
      `;

    // Video Section
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
          <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.4rem;">Video Demo &amp; Walkthrough</h4>
          <p style="font-size: 0.9rem; color: var(--text-secondary); max-width: 48ch; margin: 0 auto 1.25rem auto;">
            Video demonstrasi singkat alur penggunaan dan fitur utama proyek ini sedang dipersiapkan untuk presentasi portofolio.
          </p>
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-download-cv" style="font-size: 0.85rem; padding: 0.55rem 1.4rem;">
            <span>Lihat Repositori di GitHub ↗</span>
          </a>
        </div>
      `;
    }

    // Builder untuk customStory vs default 5-pilar
    let tocLinksHtml = '';
    let articleSectionsHtml = '';

    if (hasCustomStory) {
      tocLinksHtml = project.customStory.sections.map((s, idx) => `
        <a href="#${s.id}" class="detail-toc-item ${idx === 0 ? 'active' : ''}">${s.tocTitle}</a>
      `).join('');

      articleSectionsHtml = project.customStory.sections.map(s => {
        const paras = (s.paragraphs || []).map(p => `<p class="detail-paragraph">${p}</p>`).join('');
        const bullets = (s.bullets && s.bullets.length > 0)
          ? `<ul class="detail-checklist">${s.bullets.map(b => `<li>${b}</li>`).join('')}</ul>`
          : '';
        let tableHtml = '';
        if (s.comparisonTable) {
          const headers = s.comparisonTable.headers.map(h => `<th>${h}</th>`).join('');
          const rows = s.comparisonTable.rows.map(r => `<tr>${r.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('');
          tableHtml = `
            <div class="detail-table-wrap">
              <table class="detail-comparison-table">
                <thead><tr>${headers}</tr></thead>
                <tbody>${rows}</tbody>
              </table>
            </div>
          `;
        }
        const afterParas = (s.afterParagraphs || []).map(p => `<p class="detail-paragraph" style="margin-top: 1.25rem;">${p}</p>`).join('');
        const mediaHtml = s.showMedia ? `
          <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin-top: 2rem; margin-bottom: 0.75rem;">Preview Tampilan</h4>
          <div class="detail-gallery-grid">${galleryItems}</div>
          <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin-top: 2.25rem; margin-bottom: 0.75rem;">Video Demo</h4>
          ${videoMarkup}
        ` : '';

        return `
          <section id="${s.id}" class="detail-article-section">
            <h2 class="detail-section-heading">${s.heading}</h2>
            ${paras}
            ${bullets}
            ${tableHtml}
            ${afterParas}
            ${mediaHtml}
          </section>
        `;
      }).join('');
    } else {
      tocLinksHtml = `
        <a href="#cerita-01-gambaran" class="detail-toc-item active">01. Gambaran Besar</a>
        <a href="#cerita-02-why" class="detail-toc-item">02. The Why</a>
        <a href="#cerita-03-dev" class="detail-toc-item">03. Dev &amp; Challenges</a>
        <a href="#cerita-04-outcome" class="detail-toc-item">04. The Outcome</a>
        <a href="#cerita-05-reflection" class="detail-toc-item">05. Reflection</a>
      `;

      articleSectionsHtml = `
        <section id="cerita-01-gambaran" class="detail-article-section">
          <h2 class="detail-section-heading">01. Gambaran Besar</h2>
          <p class="detail-paragraph">${c.overview || ''}</p>
        </section>

        <section id="cerita-02-why" class="detail-article-section">
          <h2 class="detail-section-heading">02. The Why</h2>
          <p class="detail-paragraph">${c.why || ''}</p>
        </section>

        <section id="cerita-03-dev" class="detail-article-section">
          <h2 class="detail-section-heading">03. Dev &amp; Challenges</h2>
          <p class="detail-paragraph">${c.development ? c.development.narrative : ''}</p>
          <div class="detail-callout-box">
            <h4 class="callout-title">Keputusan Arsitektur &amp; Stack Teknologi</h4>
            <p class="callout-text">${c.development ? c.development.stackReason : ''}</p>
          </div>
          <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin: 2rem 0 0.75rem 0;">Tantangan Teknis Terberat &amp; Solusi:</h4>
          <p class="detail-paragraph">${c.development ? c.development.struggle : ''}</p>
          <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin: 2rem 0 0.85rem 0;">Keputusan Kunci:</h4>
          <div class="detail-tradeoffs-list">${tradeoffsHtml}</div>
        </section>

        <section id="cerita-04-outcome" class="detail-article-section">
          <h2 class="detail-section-heading">04. The Outcome</h2>
          <p class="detail-paragraph">${c.outcome ? c.outcome.summary : ''}</p>
          <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin: 1.75rem 0 0.75rem 0;">Fitur Utama yang Berhasil Terwujud:</h4>
          <ul class="detail-checklist">
            ${(c.outcome && c.outcome.features ? c.outcome.features : []).map(f => `<li>${f}</li>`).join('')}
          </ul>
          ${metricsCards ? `
            <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin: 2rem 0 0.75rem 0;">Hasil &amp; Capaian:</h4>
            <div class="detail-metrics-grid">${metricsCards}</div>
          ` : ''}
          <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin-top: 2.25rem; margin-bottom: 0.75rem;">Preview Tampilan</h4>
          <div class="detail-gallery-grid">${galleryItems}</div>
          <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin-top: 2.5rem; margin-bottom: 0.75rem;">Video Demo</h4>
          ${videoMarkup}
        </section>

        <section id="cerita-05-reflection" class="detail-article-section">
          <h2 class="detail-section-heading">05. Reflection</h2>
          <p class="detail-paragraph">${c.reflection ? c.reflection.learnings : ''}</p>
          <div class="detail-callout-box" style="margin-top: 1.5rem;">
            <h4 class="callout-title">Kekurangan &amp; Kompromi Saat Ini:</h4>
            <p class="callout-text">${c.reflection ? c.reflection.tradeoffsLeft : ''}</p>
          </div>
          <div class="detail-callout-box" style="margin-top: 1.25rem; border-left-color: var(--text-primary);">
            <h4 class="callout-title">Rencana Perbaikan di Masa Depan (What's Next):</h4>
            <p class="callout-text">${c.reflection ? c.reflection.futurePlan : ''}</p>
          </div>
        </section>
      `;
    }

    container.innerHTML = `
      <article class="project-detail-article">
        <!-- Tombol Kembali -->
        <div class="container" style="padding-top: 1.5rem; margin-bottom: 2rem;">
          <a href="index.html#projects" class="detail-back-link">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Kembali ke Beranda &amp; Karya</span>
          </a>
        </div>

        <!-- Header Proyek -->
        <header class="detail-header">
          <div class="container">
            <div class="detail-title-with-logo">
              ${project.logo ? `<img src="${project.logo}" alt="Logo ${project.title}" class="detail-project-logo" width="44" height="44" />` : ''}
              <h1 class="detail-main-title">${project.title}</h1>
            </div>
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
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    <span>Buka Projek ↗</span>
                  </a>
                ` : ''}
              </div>
            </div>
          </div>
        </header>

        <!-- Banner Visual Utama -->
        <div class="container" style="margin-bottom: 3.5rem;">
          <div class="detail-lead-visual has-browser-frame" onclick="window.openImageLightbox && window.openImageLightbox('${project.heroImage}', '${project.title.replace(/'/g, "\\'")}')">
            <div class="browser-mockup-bar" aria-hidden="true">
              <div class="browser-dots"><span></span><span></span><span></span></div>
              <span class="browser-url">${project.id}.app</span>
            </div>
            <img src="${project.heroImage}" alt="${project.title}" width="1200" height="700" loading="eager" />
          </div>
        </div>

        <!-- Layout Konten & Sticky TOC -->
        <div class="container">
          <div class="detail-content-layout">
            
            <!-- Sticky Aside TOC -->
            <aside class="detail-sticky-toc" aria-label="Daftar Isi">
              <div class="detail-toc-box">
                <span class="detail-toc-title">DAFTAR ISI</span>
                <nav class="detail-toc-nav">
                  ${tocLinksHtml}
                </nav>
              </div>
            </aside>

            <!-- Isi Artikel -->
            <div class="detail-article-body">
              ${articleSectionsHtml}

              <!-- Bottom CTA -->
              <div class="detail-bottom-cta">
                <h3 class="cta-box-title">Tertarik Membahas Proyek Ini?</h3>
                <p class="cta-box-desc">
                  Kotak pesan saya selalu terbuka untuk diskusi mengenai pengembangan aplikasi web, perancangan antarmuka, atau kesempatan kolaborasi.
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

    // Scroll Spy untuk Aside TOC
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

  // Lightbox Modal untuk melihat screenshot ukuran penuh
  window.openImageLightbox = function (src, caption) {
    let overlay = document.getElementById('image-lightbox-modal');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'image-lightbox-modal';
      overlay.className = 'image-lightbox-modal';
      overlay.innerHTML = `
        <div class="lightbox-backdrop"></div>
        <div class="lightbox-dialog" role="dialog" aria-modal="true">
          <button type="button" class="lightbox-close-btn" aria-label="Tutup pratinjau">&times;</button>
          <img class="lightbox-img" src="" alt="" />
          <p class="lightbox-caption"></p>
        </div>
      `;
      document.body.appendChild(overlay);

      const close = () => {
        overlay.classList.remove('is-open');
        document.body.style.overflow = '';
      };

      overlay.querySelector('.lightbox-backdrop').addEventListener('click', close);
      overlay.querySelector('.lightbox-close-btn').addEventListener('click', close);
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('is-open')) close();
      });
    }

    const imgEl = overlay.querySelector('.lightbox-img');
    const capEl = overlay.querySelector('.lightbox-caption');
    imgEl.src = src;
    imgEl.alt = caption || 'Preview Screenshot';
    capEl.textContent = caption || '';
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  document.addEventListener('DOMContentLoaded', () => {
    renderProjectDetail();
  });
})();
