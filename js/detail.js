/**
 * InLiveIq — Detail Page Dynamic Renderer (Bahasa Indonesia)
 * Merender 10 Poin Studi Kasus Proyek secara sistematis dan terstruktur.
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

    const projectId = getQueryParam('id') || 'cognitive-note-engine';
    const project = typeof getProjectById === 'function' ? getProjectById(projectId) : null;

    if (!project) {
      container.innerHTML = `
        <div class="container section" style="text-align: center; padding: 6rem 1rem;">
          <h1 class="section-title">Studi Kasus Tidak Ditemukan</h1>
          <p style="color: var(--text-secondary); margin-bottom: 2rem;">Proyek yang Anda cari tidak ditemukan dalam arsip InLiveIq.</p>
          <a href="projects.html" class="btn btn-primary">Kembali ke Arsip Proyek</a>
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
              Kembali ke Arsip Proyek
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
              <span>Tahun / Lini Masa:</span> <strong>${project.year}</strong>
            </div>
            <div class="editorial-meta-item">
              <span>Ranah:</span> <strong>${project.category}</strong>
            </div>
          </div>
        </div>
      </header>

      <!-- Visual Utama -->
      <div class="container">
        <div class="editorial-lead-image">
          <img src="${project.heroImage}" alt="Skema Arsitektur ${project.title}" />
        </div>
      </div>

      <!-- Struktur Studi Kasus 10 Poin -->
      <div class="container">
        <div class="case-study-grid">
          <!-- Indeks Daftar Isi Lengket (Sticky TOC) -->
          <aside class="case-study-nav">
            <h4 style="font-size: 0.8125rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted); margin-bottom: 1rem;">Indeks Studi Kasus</h4>
            <nav aria-label="Indeks Bagian">
              <ul class="toc-list">
                <li><a href="#overview" class="toc-link active">1. Ringkasan Eksekutif</a></li>
                <li><a href="#background" class="toc-link">2. Latar Belakang &amp; Konteks</a></li>
                <li><a href="#problem" class="toc-link">3. Masalah atau Tantangan</a></li>
                <li><a href="#goals" class="toc-link">4. Sasaran &amp; Tujuan</a></li>
                <li><a href="#planning" class="toc-link">5. Perencanaan &amp; Proses</a></li>
                <li><a href="#implementation" class="toc-link">6. Desain &amp; Implementasi</a></li>
                <li><a href="#technologies" class="toc-link">7. Teknologi yang Digunakan</a></li>
                <li><a href="#challenges" class="toc-link">8. Tantangan &amp; Keputusan</a></li>
                <li><a href="#results" class="toc-link">9. Hasil &amp; Temuan</a></li>
                <li><a href="#reflection" class="toc-link">10. Refleksi &amp; Pembelajaran</a></li>
              </ul>
            </nav>
          </aside>

          <!-- Konten Bagian -->
          <div class="case-study-content">
            <section id="overview" class="case-section">
              <span class="case-section-num">POIN 01 // LANDASAN</span>
              <h2 class="case-section-title">1. Ringkasan Eksekutif</h2>
              <p>${sec.overview}</p>
            </section>

            <section id="background" class="case-section">
              <span class="case-section-num">POIN 02 // ASAL-USUL</span>
              <h2 class="case-section-title">2. Latar Belakang dan Konteks</h2>
              <p>${sec.background}</p>
            </section>

            <section id="problem" class="case-section">
              <span class="case-section-num">POIN 03 // EKSPLORASI MASALAH</span>
              <h2 class="case-section-title">3. Masalah atau Tantangan</h2>
              <p>${sec.problem}</p>
            </section>

            <section id="goals" class="case-section">
              <span class="case-section-num">POIN 04 // SASARAN</span>
              <h2 class="case-section-title">4. Sasaran dan Tujuan</h2>
              <ul>
                ${sec.goals.map(g => `<li>${g}</li>`).join('')}
              </ul>
            </section>

            <section id="planning" class="case-section">
              <span class="case-section-num">POIN 05 // METODOLOGI</span>
              <h2 class="case-section-title">5. Perencanaan dan Proses</h2>
              <p>${sec.planning}</p>
            </section>

            <section id="implementation" class="case-section">
              <span class="case-section-num">POIN 06 // EKSEKUSI DESAIN</span>
              <h2 class="case-section-title">6. Desain dan Implementasi</h2>
              <p>${sec.implementation}</p>
            </section>

            <section id="technologies" class="case-section">
              <span class="case-section-num">POIN 07 // PERANGKAT &amp; STACK</span>
              <h2 class="case-section-title">7. Teknologi yang Digunakan</h2>
              <div class="tech-tags-list">
                ${sec.technologies.map(t => `<span class="tech-tag-pill">${t}</span>`).join('')}
              </div>
            </section>

            <section id="challenges" class="case-section">
              <span class="case-section-num">POIN 08 // TITIK KRUSIAL</span>
              <h2 class="case-section-title">8. Tantangan dan Keputusan Penting</h2>
              ${sec.challenges.map(c => `<p>${c}</p>`).join('')}
            </section>

            <section id="results" class="case-section">
              <span class="case-section-num">POIN 09 // BUKTI &amp; DAMPAK</span>
              <h2 class="case-section-title">9. Hasil dan Temuan</h2>
              <p>${sec.results}</p>
            </section>

            <section id="reflection" class="case-section">
              <span class="case-section-num">POIN 10 // SINTESIS AKHIR</span>
              <h2 class="case-section-title">10. Refleksi dan Pelajaran yang Dipetik</h2>
              <p>${sec.reflection}</p>
            </section>

            <!-- Proyek Terkait Lainnya -->
            <div style="border-top: 1px solid var(--border-subtle); padding-top: 3.5rem; margin-top: 4rem;">
              <h3 style="font-size: 1.35rem; margin-bottom: 1.5rem;">Jelajahi Studi Kasus Lainnya</h3>
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

    // Re-inisialisasi TOC scroll spy
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

  document.addEventListener('DOMContentLoaded', () => {
    renderProjectDetail();
  });
})();
