/**
 * InLiveIq — Detail Page Dynamic Renderer (Bahasa Indonesia Alami)
 * Menampilkan Studi Kasus Proyek Secara Natural, Enak Dibaca, dan Bebas Jargon/Istilah Kaku.
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
          <h1 class="section-title">Proyek Tidak Ditemukan</h1>
          <p style="color: var(--text-secondary); margin-bottom: 2rem;">Proyek yang Anda cari tidak ditemukan dalam arsip ini.</p>
          <a href="index.html#projects" class="btn-download-cv">Kembali ke Karya Utama</a>
        </div>
      `;
      return;
    }

    document.title = `${project.title} — Detail Proyek`;

    const sec = project.sections;

    // Helper untuk render teknologi tags
    const techTags = Array.isArray(project.tags)
      ? project.tags.map(t => `<span class="project-tag" style="font-size: 0.825rem; padding: 0.35rem 0.85rem;">${t}</span>`).join('')
      : '';

    // Helper untuk render kartu hasil capaian
    const metricsCards = (project.metrics && project.metrics.length > 0)
      ? project.metrics.map(m => `
          <div class="detail-metric-card">
            <span class="detail-metric-value">${m.value}</span>
            <span class="detail-metric-label">${m.label}</span>
          </div>
        `).join('')
      : '';

    // Helper untuk render pilihan solusi
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
              <strong>Tampilan ${idx + 1}:</strong> ${img.caption}
            </figcaption>
          </figure>
        `).join('')
      : `
        <figure class="detail-gallery-figure">
          <div class="detail-gallery-img-wrapper">
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
          <iframe src="${project.videoUrl}" title="Demo Video ${project.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
          <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.4rem;">Demo &amp; Alur Penggunaan</h4>
          <p style="font-size: 0.9rem; color: var(--text-secondary); max-width: 48ch; margin: 0 auto 1.25rem auto;">
            Video ringkas alur kerja dan fitur utama proyek ini sedang disiapkan untuk presentasi demo.
          </p>
          <a href="${project.githubUrl || 'https://github.com/bendaharakerenbgtt'}" target="_blank" rel="noopener noreferrer" class="btn-download-cv" style="font-size: 0.85rem; padding: 0.55rem 1.4rem;">
            <span>Buka Kode di GitHub ↗</span>
          </a>
        </div>
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
            <span>Kembali ke Beranda</span>
          </a>
        </div>

        <!-- Header Proyek -->
        <header class="detail-header">
          <div class="container">
            <div class="detail-eyebrow-row">
              <span class="detail-monogram-tag">PROYEK // ${project.year}</span>
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
                    <span>Repositori GitHub ↗</span>
                  </a>
                ` : ''}
                ${project.liveUrl ? `
                  <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="detail-ext-link detail-ext-link--primary">
                    <span>Coba Demo ↗</span>
                  </a>
                ` : ''}
              </div>
            </div>
          </div>
        </header>

        <!-- Banner Visual Gambar Utama -->
        <div class="container" style="margin-bottom: 3.5rem;">
          <div class="detail-lead-visual">
            <img src="${project.heroImage}" alt="${project.title}" width="1200" height="700" loading="eager" />
          </div>
        </div>

        <!-- Layout Konten & Daftar Isi -->
        <div class="container">
          <div class="detail-content-layout">
            
            <!-- Sticky Aside Daftar Isi -->
            <aside class="detail-sticky-toc" aria-label="Daftar Isi Halaman">
              <div class="detail-toc-box">
                <span class="detail-toc-title">DAFTAR ISI</span>
                <nav class="detail-toc-nav">
                  <a href="#bagian-1-pertanyaan" class="detail-toc-item active">1. Pertanyaan Utama</a>
                  <a href="#bagian-2-latar-belakang" class="detail-toc-item">2. Latar Belakang</a>
                  <a href="#bagian-3-masalah" class="detail-toc-item">3. Masalah Nyata</a>
                  <a href="#bagian-4-pilihan-solusi" class="detail-toc-item">4. Pilihan &amp; Solusi</a>
                  <a href="#bagian-5-cara-kerja" class="detail-toc-item">5. Cara Kerja &amp; Teknologi</a>
                  <a href="#bagian-6-hasil-dan-preview" class="detail-toc-item">6. Hasil &amp; Preview</a>
                  <a href="#bagian-7-pelajaran" class="detail-toc-item">7. Pelajaran &amp; Rencana</a>
                </nav>
              </div>
            </aside>

            <!-- Isi Artikel -->
            <div class="detail-article-body">
              
              <!-- 1. Pertanyaan Utama -->
              <section id="bagian-1-pertanyaan" class="detail-article-section">
                <span class="detail-step-badge">BAGIAN 01</span>
                <h2 class="detail-section-heading">1. Pertanyaan Utama</h2>
                <div class="detail-hook-quote">
                  <p class="hook-quote-text">${sec.hook}</p>
                </div>
              </section>

              <!-- 2. Latar Belakang -->
              <section id="bagian-2-latar-belakang" class="detail-article-section">
                <span class="detail-step-badge">BAGIAN 02</span>
                <h2 class="detail-section-heading">2. Latar Belakang &amp; Kebutuhan Pengguna</h2>
                <p class="detail-paragraph">${sec.context}</p>
              </section>

              <!-- 3. Masalah Nyata -->
              <section id="bagian-3-masalah" class="detail-article-section">
                <span class="detail-step-badge">BAGIAN 03</span>
                <h2 class="detail-section-heading">3. Masalah yang Terjadi di Lapangan</h2>
                <p class="detail-paragraph">${sec.problem}</p>
              </section>

              <!-- 4. Pilihan & Solusi -->
              <section id="bagian-4-pilihan-solusi" class="detail-article-section">
                <span class="detail-step-badge">BAGIAN 04</span>
                <h2 class="detail-section-heading">4. Pertimbangan &amp; Pilihan Solusi</h2>
                <p class="detail-paragraph">${sec.exploration.narrative}</p>
                
                <div class="detail-tradeoffs-list">
                  ${tradeoffsHtml}
                </div>
              </section>

              <!-- 5. Cara Kerja & Teknologi -->
              <section id="bagian-5-cara-kerja" class="detail-article-section">
                <span class="detail-step-badge">BAGIAN 05</span>
                <h2 class="detail-section-heading">5. Cara Kerja Sistem &amp; Teknologi</h2>
                <p class="detail-paragraph">${sec.execution.architecture}</p>

                <h4 style="font-family: var(--font-mono); font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-primary); margin: 1.5rem 0 0.75rem 0;">Poin Penting Pembuatan:</h4>
                <ul class="detail-checklist">
                  ${sec.execution.keyImplementations.map(k => `<li>${k}</li>`).join('')}
                </ul>

                <h4 style="font-family: var(--font-mono); font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-primary); margin: 2rem 0 0.85rem 0;">Teknologi yang Dipakai:</h4>
                <div class="detail-tech-grid">
                  ${sec.execution.technologies.map(t => `
                    <div class="detail-tech-card">
                      <span class="tech-card-glyph">◈</span>
                      <span>${t}</span>
                    </div>
                  `).join('')}
                </div>
              </section>

              <!-- 6. Hasil & Preview -->
              <section id="bagian-6-hasil-dan-preview" class="detail-article-section">
                <span class="detail-step-badge">BAGIAN 06</span>
                <h2 class="detail-section-heading">6. Hasil Nyata &amp; Tampilan</h2>
                <p class="detail-paragraph">${sec.evidenceText}</p>

                <!-- Kartu Hasil/Metrik -->
                ${metricsCards ? `
                  <div class="detail-metrics-grid">
                    ${metricsCards}
                  </div>
                ` : ''}

                <!-- Galeri Preview Gambar -->
                <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin-top: 2.25rem; margin-bottom: 0.5rem;">Preview Gambar Antarmuka</h3>
                <div class="detail-gallery-grid">
                  ${galleryItems}
                </div>

                <!-- Video Demo -->
                <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin-top: 2.5rem; margin-bottom: 0.5rem;">Demo Video</h3>
                ${videoMarkup}
              </section>

              <!-- 7. Pelajaran & Rencana -->
              <section id="bagian-7-pelajaran" class="detail-article-section">
                <span class="detail-step-badge">BAGIAN 07</span>
                <h2 class="detail-section-heading">7. Pelajaran &amp; Rencana ke Depan</h2>
                <p class="detail-paragraph">${sec.reflection}</p>

                <div class="detail-callout-box">
                  <h4 class="callout-title">Rencana Pengembangan Lanjutan</h4>
                  <p class="callout-text">${sec.futureHorizons}</p>
                </div>
              </section>

              <!-- Bagian Kontak Bawah -->
              <div class="detail-bottom-cta">
                <h3 class="cta-box-title">Tertarik Membahas Proyek Ini?</h3>
                <p class="cta-box-desc">
                  Saya selalu terbuka untuk diskusi santai mengenai pembuatan website, desain multimedia, atau kerja sama proyek baru.
                </p>
                <div class="cta-actions-wrap">
                  <a href="index.html#contact" class="btn-download-cv">
                    <span>Hubungi Saya ↗</span>
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
