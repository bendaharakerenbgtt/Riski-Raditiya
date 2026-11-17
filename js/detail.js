/**
 * InLiveIq — Detail Page Dynamic Renderer (Bahasa Indonesia)
 * Merender Studi Kasus Proyek Komprehensif dengan Format Editorial Recruiter-Grade,
 * Media Galeri Foto, Video Walkthrough Embed/Placeholder, dan GitHub Link.
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

    document.title = `${project.title} — Studi Kasus Portofolio`;

    const sec = project.sections;
    const related = typeof getRelatedProjects === 'function' ? getRelatedProjects(project.id, 2) : [];

    // Helper untuk render list tujuan
    const goalsList = Array.isArray(sec.goals) 
      ? sec.goals.map(g => `<li>${g}</li>`).join('') 
      : `<li>${sec.goals || ''}</li>`;

    // Helper untuk render teknologi tags
    const techTags = Array.isArray(project.tags)
      ? project.tags.map(t => `<span class="project-tag" style="font-size: 0.825rem; padding: 0.35rem 0.85rem;">${t}</span>`).join('')
      : '';

    // Helper untuk galeri gambar
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
          <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.4rem;">Video Walkthrough &amp; Demo</h4>
          <p style="font-size: 0.9rem; color: var(--text-secondary); max-width: 48ch; margin: 0 auto 1.25rem auto;">
            Video demonstrasi alur kerja interaktif dan rekaman walkthrough fitur proyek ini sedang disiapkan untuk sesi presentasi.
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
              <span class="section-eyebrow" style="margin-bottom: 0; justify-content: flex-start;">STUDI KASUS // ${project.year}</span>
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
            <aside class="detail-sticky-toc" aria-label="Daftar Isi Studi Kasus">
              <div class="detail-toc-box">
                <span class="detail-toc-title">DAFTAR ISI STUDI KASUS</span>
                <nav class="detail-toc-nav">
                  <a href="#section-ringkasan" class="detail-toc-item active">1. Ringkasan &amp; Konteks</a>
                  <a href="#section-masalah" class="detail-toc-item">2. Eksplorasi Masalah</a>
                  <a href="#section-sasaran" class="detail-toc-item">3. Sasaran &amp; Solusi</a>
                  <a href="#section-arsitektur" class="detail-toc-item">4. Arsitektur &amp; Teknologi</a>
                  <a href="#section-tantangan" class="detail-toc-item">5. Tantangan &amp; Solusi</a>
                  <a href="#section-galeri" class="detail-toc-item">6. Galeri &amp; Preview</a>
                  <a href="#section-video" class="detail-toc-item">7. Video Walkthrough</a>
                  <a href="#section-hasil" class="detail-toc-item">8. Dampak &amp; Refleksi</a>
                </nav>
              </div>
            </aside>

            <!-- Article Body -->
            <div class="detail-article-body">
              
              <!-- 1. Ringkasan & Konteks -->
              <section id="section-ringkasan" class="detail-article-section">
                <span class="detail-step-badge">BAGIAN 01 // OVERVIEW</span>
                <h2 class="detail-section-heading">1. Ringkasan Eksekutif &amp; Konteks</h2>
                <p class="detail-paragraph">${sec.overview}</p>
                <div class="detail-callout-box">
                  <h4 class="callout-title">Latar Belakang Eksplorasi</h4>
                  <p class="callout-text">${sec.background}</p>
                </div>
              </section>

              <!-- 2. Masalah atau Tantangan -->
              <section id="section-masalah" class="detail-article-section">
                <span class="detail-step-badge">BAGIAN 02 // PROBLEM STATEMENT</span>
                <h2 class="detail-section-heading">2. Masalah Nyata yang Dihadapi</h2>
                <p class="detail-paragraph">${sec.problem}</p>
              </section>

              <!-- 3. Sasaran & Tujuan -->
              <section id="section-sasaran" class="detail-article-section">
                <span class="detail-step-badge">BAGIAN 03 // OBJECTIVES</span>
                <h2 class="detail-section-heading">3. Sasaran &amp; Target Terukur</h2>
                <ul class="detail-checklist">
                  ${goalsList}
                </ul>
              </section>

              <!-- 4. Arsitektur & Teknologi -->
              <section id="section-arsitektur" class="detail-article-section">
                <span class="detail-step-badge">BAGIAN 04 // ARCHITECTURE</span>
                <h2 class="detail-section-heading">4. Perencanaan Desain &amp; Stack Teknologi</h2>
                <p class="detail-paragraph">${sec.planning}</p>
                <p class="detail-paragraph">${sec.implementation}</p>

                <div class="detail-tech-grid">
                  ${Array.isArray(sec.technologies) ? sec.technologies.map(t => `
                    <div class="detail-tech-card">
                      <span class="tech-card-glyph">◈</span>
                      <span>${t}</span>
                    </div>
                  `).join('') : ''}
                </div>
              </section>

              <!-- 5. Tantangan & Keputusan Penting -->
              <section id="section-tantangan" class="detail-article-section">
                <span class="detail-step-badge">BAGIAN 05 // ENGINEERING TRADEOFFS</span>
                <h2 class="detail-section-heading">5. Tantangan Teknis Terberat &amp; Solusi</h2>
                ${Array.isArray(sec.challenges) 
                  ? sec.challenges.map(c => `<p class="detail-paragraph">${c}</p>`).join('') 
                  : `<p class="detail-paragraph">${sec.challenges || ''}</p>`}
              </section>

              <!-- 6. Galeri & Preview Media -->
              <section id="section-galeri" class="detail-article-section">
                <span class="detail-step-badge">BAGIAN 06 // VISUAL SHOWCASE</span>
                <h2 class="detail-section-heading">6. Preview Gambar &amp; Alur Antarmuka</h2>
                <div class="detail-gallery-grid">
                  ${galleryItems}
                </div>
              </section>

              <!-- 7. Video Walkthrough Embed -->
              <section id="section-video" class="detail-article-section">
                <span class="detail-step-badge">BAGIAN 07 // INTERACTION DEMO</span>
                <h2 class="detail-section-heading">7. Demonstrasi Video Walkthrough</h2>
                ${videoMarkup}
              </section>

              <!-- 8. Dampak & Refleksi -->
              <section id="section-hasil" class="detail-article-section">
                <span class="detail-step-badge">BAGIAN 08 // IMPACT &amp; LEARNING</span>
                <h2 class="detail-section-heading">8. Hasil Terukur &amp; Refleksi Pembelajaran</h2>
                <p class="detail-paragraph">${sec.results}</p>
                <div class="detail-callout-box" style="border-left-color: var(--accent);">
                  <h4 class="callout-title">Pelajaran yang Dipetik (Takeaway)</h4>
                  <p class="callout-text">${sec.reflection}</p>
                </div>
              </section>

              <!-- CTA Kolaborasi Bawah -->
              <div class="detail-bottom-cta">
                <h3 style="font-size: 1.35rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.5rem;">Tertarik Mendiskusikan Proyek Ini Lebih Lanjut?</h3>
                <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 1.5rem;">
                  Kotak pesan saya selalu terbuka untuk kolaborasi pembuatan sistem web, antarmuka multimedia, atau rekayasa kode presisi.
                </p>
                <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                  <a href="index.html#contact" class="btn-download-cv">
                    <span>Mulai Percakapan / Hubungi ↗</span>
                  </a>
                  <a href="index.html#projects" class="detail-ext-link">
                    <span>Kembali ke Karya Lainnya</span>
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
