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
    const sections = Array.from(document.querySelectorAll('section[id]'));
    const desktopLinks = Array.from(document.querySelectorAll('.desktop-nav-menu a'));
    const mobileLinks = Array.from(document.querySelectorAll('.mobile-nav-links a'));

    let pathTotalLength = 0;
    let totalScrollable = 1;
    let sectionBounds = [];
    let isScrolled = false;
    let currentActiveId = '';
    let scrollTicking = false;
    let resizeTicking = false;

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

      // Update capsule progress bar without layout reads
      if (fill && pathTotalLength > 0) {
        const pct = Math.min(Math.max(scrollY / totalScrollable, 0), 1);
        const offset = pathTotalLength * (1 - pct);
        fill.style.strokeDashoffset = `${offset}`;
      }

      // Toggle header scrolled class only when state changes
      if (header) {
        const nextScrolled = scrollY > 20;
        if (nextScrolled !== isScrolled) {
          isScrolled = nextScrolled;
          header.classList.toggle('scrolled', isScrolled);
        }
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
      "I'm a Developer",
      "I'm a Creator",
      "I'm a Problem Solver",
      "I'm a UI/UX Builder"
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

  // DOM Content Loaded Initializer
  document.addEventListener('DOMContentLoaded', () => {
    initScrollSystem();
    initTypewriter();
    initMobileNav();
    initSkillBars();
    initScrollReveal();
    initContactForm();
  });
})();
