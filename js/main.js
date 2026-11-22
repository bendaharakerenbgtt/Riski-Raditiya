/**
 * Portfolio Main Interactive Controller (White Nuance / Deep Obsidian)
 * Ultra-Smooth rAF Scroll Pipeline, Cached Layout Metrics, Hardware-Accelerated
 * Scroll Reveal, Interactive Typewriter, Skill Bars, and Mobile Navigation.
 */

(function () {
  'use strict';

  // 1. Unified rAF Scroll Controller (Progress Bar + Sticky Header + Active Nav)
  function initScrollSystem() {
    const header = document.querySelector('.site-header');
    const wrapper = document.querySelector('.nav-pill-wrapper');
    const track = document.getElementById('capsule-progress-track');
    const fill = document.getElementById('capsule-progress-fill');
    const topLineFill = document.getElementById('top-scroll-line-fill');
    const topLineContainer = document.querySelector('.top-scroll-line-container');
    const sections = Array.from(document.querySelectorAll('section[id]'));
    const desktopLinks = Array.from(document.querySelectorAll('.desktop-nav-menu a'));
    const mobileLinks = Array.from(document.querySelectorAll('.mobile-nav-links a'));
    const ideTabs = Array.from(document.querySelectorAll('.vscode-tab'));
    const explorerLinks = Array.from(document.querySelectorAll('.explorer-file-link'));
    const breadcrumbFile = document.getElementById('breadcrumb-file');
    const breadcrumbSymbol = document.getElementById('breadcrumb-symbol');
    const statusbarCursor = document.getElementById('statusbar-cursor');
    const statusbarLang = document.getElementById('statusbar-lang');

    const sectionMeta = {
      hero: { file: 'hero.tsx', symbol: 'RiskiRaditiya', lang: 'TypeScript JSX', line: 1 },
      about: { file: 'about.md', symbol: '# Tentang Saya', lang: 'Markdown', line: 28 },
      education: { file: 'education.json', symbol: '"education"', lang: 'JSON', line: 64 },
      projects: { file: 'projects.config.ts', symbol: 'flagshipProjects', lang: 'TypeScript', line: 112 },
      skills: { file: 'skills.yaml', symbol: 'core_skills', lang: 'YAML', line: 185 },
      contact: { file: 'contact.env', symbol: 'CONTACT_EMAIL', lang: 'DotEnv', line: 220 }
    };

    let pathTotalLength = 0;
    let totalScrollable = 1;
    let sectionBounds = [];
    let isScrolled = false;
    let currentActiveId = '';
    let scrollTicking = false;
    let resizeTicking = false;
    let lastScrollY = window.scrollY || window.pageYOffset || 0;

    function measureLayout() {
      // Measure capsule SVG path
      if (wrapper && track && fill) {
        const w = wrapper.offsetWidth;
        const h = wrapper.offsetHeight;
        const r = h / 2;
        const d = `M 1,${r} A ${r},${r} 0 0,0 ${r},${h - 1} L ${w - r},${h - 1} A ${r},${r} 0 0,0 ${w - 1},${r}`;

        track.setAttribute('d', d);
        fill.setAttribute('d', d);

        try {
          pathTotalLength = fill.getTotalLength() || (w + 20);
        } catch (e) {
          pathTotalLength = w + 20;
        }

        fill.style.strokeDasharray = `${pathTotalLength} ${pathTotalLength}`;
      }

      // Cache document scrollable height
      const docHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body ? document.body.scrollHeight : 0
      );
      const winHeight = window.innerHeight || document.documentElement.clientHeight || 800;
      totalScrollable = Math.max(docHeight - winHeight, 1);

      // Cache section vertical bounds
      const scrollY = window.scrollY || window.pageYOffset || 0;
      sectionBounds = sections.map((sec) => {
        const rect = sec.getBoundingClientRect();
        const top = rect.top + scrollY;
        return {
          id: sec.id,
          top: top,
          bottom: top + rect.height
        };
      });

      renderScrollFrame();
    }

    function renderScrollFrame() {
      scrollTicking = false;
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const pct = Math.min(Math.max(scrollY / totalScrollable, 0), 1);

      // Update capsule progress bar without layout reads
      if (fill && pathTotalLength > 0) {
        const offset = pathTotalLength * (1 - pct);
        fill.style.strokeDashoffset = `${offset}`;
      }

      // Update top hairline progress bar
      if (topLineFill) {
        topLineFill.style.transform = `scaleX(${pct})`;
      }

      // Toggle header scrolled class & smart auto-hide (hide on scroll down, show on scroll up)
      if (header) {
        const nextScrolled = scrollY > 20;
        if (nextScrolled !== isScrolled) {
          isScrolled = nextScrolled;
          header.classList.toggle('scrolled', isScrolled);
        }

        const deltaY = scrollY - lastScrollY;
        if (scrollY > 120 && deltaY > 8) {
          // Scrolling down - sembunyikan header, tampilkan garis indikator di atas
          header.classList.add('header-hidden');
          if (topLineContainer) topLineContainer.classList.add('active');
        } else if (deltaY < -12 || scrollY <= 60) {
          // Scrolling up atau kembali ke atas - tampilkan kembali header
          header.classList.remove('header-hidden');
          if (topLineContainer) topLineContainer.classList.remove('active');
        }
        lastScrollY = Math.max(0, scrollY);
      }

      // Update active navigation link using cached bounds
      if (sectionBounds.length > 0) {
        const probeY = scrollY + 160;
        let matchedId = sectionBounds[0].id;

        for (let i = 0; i < sectionBounds.length; i++) {
          const b = sectionBounds[i];
          if (probeY >= b.top && probeY < b.bottom) {
            matchedId = b.id;
            break;
          }
        }

        if (matchedId !== currentActiveId) {
          currentActiveId = matchedId;
          const targetHref = `#${matchedId}`;
          desktopLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === targetHref);
          });
          mobileLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === targetHref);
          });
          ideTabs.forEach((tab) => {
            tab.classList.toggle('active', tab.getAttribute('data-section') === matchedId);
          });
          explorerLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('data-section') === matchedId);
          });

          const meta = sectionMeta[matchedId];
          if (meta) {
            if (breadcrumbFile) breadcrumbFile.textContent = meta.file;
            if (breadcrumbSymbol) breadcrumbSymbol.textContent = meta.symbol;
            if (statusbarLang) statusbarLang.textContent = meta.lang;
            if (statusbarCursor) statusbarCursor.textContent = `Ln ${meta.line}, Col 1`;
          }
        }
      }
    }

    function onScroll() {
      if (!scrollTicking) {
        scrollTicking = true;
        window.requestAnimationFrame(renderScrollFrame);
      }
    }

    function onResize() {
      if (!resizeTicking) {
        resizeTicking = true;
        window.requestAnimationFrame(() => {
          resizeTicking = false;
          measureLayout();
        });
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    window.addEventListener('load', measureLayout, { once: true });

    if ('ResizeObserver' in window && document.body) {
      const ro = new ResizeObserver(onResize);
      ro.observe(document.body);
    }

    measureLayout();
  }

  // 2. Interactive Typewriter Effect for Hero
  function initTypewriter() {
    const el = document.getElementById('hero-typewriter-text');
    if (!el) return;

    const phrases = [
      "Digital Product Builder",
      "UI/UX & Web Explorer",
      "Multimedia Student"
    ];

    let phraseIndex = 0;
    let charIndex = phrases[0].length;
    let isDeleting = true;

    function type() {
      const currentPhrase = phrases[phraseIndex];
      let delay = 100;

      if (isDeleting) {
        charIndex--;
        el.textContent = currentPhrase.substring(0, charIndex);
        delay = 45;
      } else {
        charIndex++;
        el.textContent = currentPhrase.substring(0, charIndex);
        delay = 95;
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        delay = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        delay = 350;
      }

      setTimeout(type, delay);
    }

    setTimeout(type, 1800);
  }

  // 3. Mobile Navigation Drawer (Accessible & Touch-Responsive)
  function initMobileNav() {
    const toggleBtn = document.querySelector('.mobile-menu-toggle');
    const drawer = document.querySelector('.mobile-nav-drawer');
    const closeBtn = document.querySelector('.mobile-drawer-close');
    if (!toggleBtn || !drawer) return;

    function open() {
      drawer.classList.add('open');
      toggleBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function close() {
      drawer.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    toggleBtn.addEventListener('click', () => {
      if (drawer.classList.contains('open')) {
        close();
      } else {
        open();
      }
    });

    if (closeBtn) closeBtn.addEventListener('click', close);

    const links = drawer.querySelectorAll('a');
    links.forEach((l) => l.addEventListener('click', close));

    // Explorer Sidebar Toggle (Closed by Default)
    const explorerToggleBtn = document.getElementById('explorer-toggle-btn');
    const vscodeSidebar = document.getElementById('vscode-sidebar');
    if (explorerToggleBtn && vscodeSidebar) {
      explorerToggleBtn.addEventListener('click', () => {
        const isCollapsed = vscodeSidebar.classList.toggle('collapsed');
        const isOpen = !isCollapsed;
        explorerToggleBtn.classList.toggle('active', isOpen);
        explorerToggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('open')) {
        close();
      }
    });
  }

  // 4. Animated Skill Bars on Intersection
  function initSkillBars() {
    const section = document.querySelector('.skills-section');
    if (!section) return;

    const bars = document.querySelectorAll('.skill-fill-bar');
    let animated = false;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !animated) {
              animated = true;
              bars.forEach((bar) => {
                bar.style.width = bar.getAttribute('data-pct') || '80%';
              });
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(section);
    } else {
      bars.forEach((bar) => {
        bar.style.width = bar.getAttribute('data-pct') || '80%';
      });
    }
  }

  // 5. Hardware-Accelerated Scroll Reveal for Cards & Sections
  function initScrollReveal() {
    let prefersReduced = false;
    try {
      prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch (e) {}

    if (prefersReduced || !('IntersectionObserver' in window)) return;

    const targets = document.querySelectorAll(
      '.section-common-header, .stat-box, .philosophy-card, .mission-card, .edu-card, .project-card, .skill-item, .contact-info-item, .contact-form-card'
    );

    targets.forEach((el, idx) => {
      el.classList.add('reveal-item');
      el.style.setProperty('--reveal-delay', `${(idx % 3) * 60}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -40px 0px', threshold: 0.08 }
    );

    targets.forEach((el) => observer.observe(el));
  }

  // 6. Contact Form Handler (Validation & Interactive Feedback)
  function initContactForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('.btn-send-message');
      if (!submitBtn) return;
      const origText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Mengirimkan pesan...</span>';

      setTimeout(() => {
        submitBtn.innerHTML = '<span>✓ Pesan Berhasil Terkirim!</span>';
        submitBtn.style.background = '#27c93f';
        submitBtn.style.color = '#ffffff';
        form.reset();

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = origText;
          submitBtn.style.background = '';
          submitBtn.style.color = '';
        }, 3500);
      }, 900);
    });
  }

  // 7. VS Code Workspace Trust / Welcome Toast
  function initTrustToast() {
    const toast = document.getElementById('vscode-trust-toast');
    if (!toast) return;

    try {
      if (sessionStorage.getItem('vscode_trust_dismissed') === '1') {
        toast.remove();
        return;
      }
    } catch (e) {}

    function dismiss() {
      toast.classList.add('is-hidden');
      try {
        sessionStorage.setItem('vscode_trust_dismissed', '1');
      } catch (e) {}
      setTimeout(() => toast.remove(), 280);
    }

    const closeBtn = document.getElementById('trust-toast-close');
    const acceptBtn = document.getElementById('trust-btn-accept');
    const projectsBtn = document.getElementById('trust-btn-projects');

    if (closeBtn) closeBtn.addEventListener('click', dismiss);
    if (acceptBtn) acceptBtn.addEventListener('click', dismiss);
    if (projectsBtn) projectsBtn.addEventListener('click', dismiss);
  }

  // 8. VS Code Command Palette (Ctrl+P / Ctrl+K)
  function initCommandPalette() {
    const backdrop = document.getElementById('vscode-palette-backdrop');
    const trigger = document.getElementById('vscode-command-trigger');
    const input = document.getElementById('vscode-palette-input');
    const resultsList = document.getElementById('vscode-palette-results');
    const closeBtn = document.getElementById('vscode-palette-close');
    if (!backdrop || !input || !resultsList) return;

    const commands = [
      { label: 'hero.tsx', sub: 'Beranda', badge: 'TSX', badgeClass: 'badge-tsx', action: () => { window.location.hash = '#hero'; } },
      { label: 'about.md', sub: 'Tentang Saya', badge: 'MD', badgeClass: 'badge-md', action: () => { window.location.hash = '#about'; } },
      { label: 'education.json', sub: 'Pendidikan', badge: '{ }', badgeClass: 'badge-json', action: () => { window.location.hash = '#education'; } },
      { label: 'projects.config.ts', sub: 'Karya & Proyek', badge: 'TS', badgeClass: 'badge-ts', action: () => { window.location.hash = '#projects'; } },
      { label: 'skills.yaml', sub: 'Keahlian Utama', badge: 'YML', badgeClass: 'badge-yml', action: () => { window.location.hash = '#skills'; } },
      { label: 'contact.env', sub: 'Hubungi Saya (iqirrt@gmail.com)', badge: 'ENV', badgeClass: 'badge-env', action: () => { window.location.hash = '#contact'; } },
      { label: 'SoleCare', sub: 'Studi Kasus — Aplikasi Laundry Sepatu', badge: 'CASE', badgeClass: 'badge-ts', action: () => { window.location.href = 'project-detail.html?id=solecare'; } },
      { label: 'Dana IMIP', sub: 'Studi Kasus — Keuangan LDK IMIP', badge: 'CASE', badgeClass: 'badge-ts', action: () => { window.location.href = 'project-detail.html?id=bendahara-2026'; } },
      { label: 'Web Polimedia Fasilitas', sub: 'Studi Kasus — Peminjaman Kampus', badge: 'CASE', badgeClass: 'badge-ts', action: () => { window.location.href = 'project-detail.html?id=polimedia-fasilitas'; } },
      { label: 'GenSurat', sub: 'Studi Kasus — Generator Surat Ormawa', badge: 'CASE', badgeClass: 'badge-ts', action: () => { window.location.href = 'project-detail.html?id=universal-surat'; } },
      { label: 'Toggle Explorer Sidebar', sub: 'Buka / Tutup Sidebar Kiri', badge: 'CMD', badgeClass: 'badge-tsx', action: () => { const btn = document.getElementById('explorer-toggle-btn'); if (btn) btn.click(); } },
      { label: 'Buka GitHub', sub: 'github.com/bendaharakerenbgtt', badge: 'EXT', badgeClass: 'badge-md', action: () => { window.open('https://github.com/bendaharakerenbgtt', '_blank', 'noopener,noreferrer'); } }
    ];

    let filtered = commands.slice();
    let selectedIndex = 0;

    function render() {
      resultsList.innerHTML = '';
      if (filtered.length === 0) {
        const empty = document.createElement('li');
        empty.className = 'palette-item';
        empty.textContent = 'Tidak ada hasil yang cocok.';
        resultsList.appendChild(empty);
        return;
      }

      filtered.forEach((cmd, idx) => {
        const li = document.createElement('li');
        li.className = 'palette-item' + (idx === selectedIndex ? ' selected' : '');
        li.setAttribute('role', 'option');
        li.innerHTML = `<span class="palette-item-left"><span class="file-badge ${cmd.badgeClass}">${cmd.badge}</span><span>${cmd.label}</span></span><span class="palette-item-sub">${cmd.sub}</span>`;
        li.addEventListener('click', () => {
          close();
          cmd.action();
        });
        resultsList.appendChild(li);
      });
    }

    function open() {
      backdrop.classList.add('open');
      backdrop.setAttribute('aria-hidden', 'false');
      input.value = '';
      filtered = commands.slice();
      selectedIndex = 0;
      render();
      setTimeout(() => input.focus(), 20);
    }

    function close() {
      backdrop.classList.remove('open');
      backdrop.setAttribute('aria-hidden', 'true');
    }

    if (trigger) trigger.addEventListener('click', open);
    if (closeBtn) closeBtn.addEventListener('click', close);
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) close();
    });

    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      filtered = commands.filter((c) => c.label.toLowerCase().includes(q) || c.sub.toLowerCase().includes(q));
      selectedIndex = 0;
      render();
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (filtered.length > 0) {
          selectedIndex = (selectedIndex + 1) % filtered.length;
          render();
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (filtered.length > 0) {
          selectedIndex = (selectedIndex - 1 + filtered.length) % filtered.length;
          render();
        }
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          const item = filtered[selectedIndex];
          close();
          item.action();
        }
      } else if (e.key === 'Escape') {
        close();
      }
    });

    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key.toLowerCase() === 'p' || e.key.toLowerCase() === 'k')) {
        e.preventDefault();
        if (backdrop.classList.contains('open')) {
          close();
        } else {
          open();
        }
      }
    });
  }

  // DOM Content Loaded Initializer
  document.addEventListener('DOMContentLoaded', () => {
    initScrollSystem();
    initTypewriter();
    initMobileNav();
    initSkillBars();
    initScrollReveal();
    initContactForm();
    initTrustToast();
    initCommandPalette();
  });
})();
