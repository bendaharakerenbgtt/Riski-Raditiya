/**
 * Portfolio Main Interactive Controller (White Nuance / Deep Obsidian)
 * Hairline Scroll Progress, Interactive Typewriter, Animated Skill Progress,
 * Mobile Drawer, Stats Counter, and Smooth Navigation.
 */

(function () {
  'use strict';

  // 1. Capsule Contour Scroll Progress Indicator (Follows Pill Curve Seamlessly)
  function initScrollProgress() {
    const wrapper = document.querySelector('.nav-pill-wrapper');
    const track = document.getElementById('capsule-progress-track');
    const fill = document.getElementById('capsule-progress-fill');
    if (!wrapper || !track || !fill) return;

    let pathTotalLength = 0;

    function updatePath() {
      const w = wrapper.offsetWidth;
      const h = wrapper.offsetHeight;
      const r = h / 2;

      // Follow the exact bottom contour of the capsule pill:
      // Starts at middle of left cap (1, r), curves down to (r, h - 1),
      // runs across the bottom to (w - r, h - 1), and curves up to (w - 1, r)
      const d = `M 1,${r} A ${r},${r} 0 0,0 ${r},${h - 1} L ${w - r},${h - 1} A ${r},${r} 0 0,0 ${w - 1},${r}`;
      
      track.setAttribute('d', d);
      fill.setAttribute('d', d);

      try {
        pathTotalLength = fill.getTotalLength() || (w + 20);
      } catch (e) {
        pathTotalLength = w + 20;
      }

      fill.style.strokeDasharray = `${pathTotalLength} ${pathTotalLength}`;
      updateScroll();
    }

    function updateScroll() {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const docHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      );
      const winHeight = window.innerHeight || document.documentElement.clientHeight || 800;
      const totalH = docHeight - winHeight;
      const pct = totalH > 0 ? Math.min(Math.max(scrollY / totalH, 0), 1) : 0;

      const offset = pathTotalLength * (1 - pct);
      fill.style.strokeDashoffset = offset;

      // Header scrolled state
      const header = document.querySelector('.site-header');
      if (header) {
        if (scrollY > 20) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    }

    window.addEventListener('resize', updatePath);
    window.addEventListener('scroll', updateScroll, { passive: true });
    updatePath();
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
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        el.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        el.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 110;
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        // Pause at end of phrase
        typingSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 400;
      }

      setTimeout(type, typingSpeed);
    }

    type();
  }

  // 3. Mobile Navigation Drawer
  function initMobileNav() {
    const toggleBtn = document.querySelector('.mobile-menu-toggle');
    const drawer = document.querySelector('.mobile-nav-drawer');
    const closeBtn = document.querySelector('.mobile-drawer-close');
    if (!toggleBtn || !drawer) return;

    function open() {
      drawer.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function close() {
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    }

    toggleBtn.addEventListener('click', open);
    if (closeBtn) closeBtn.addEventListener('click', close);

    const links = drawer.querySelectorAll('a');
    links.forEach(l => l.addEventListener('click', close));

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
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !animated) {
            animated = true;
            bars.forEach(bar => {
              const target = bar.getAttribute('data-pct') || '80%';
              bar.style.width = target;
            });
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.25 });

      observer.observe(section);
    } else {
      bars.forEach(bar => {
        bar.style.width = bar.getAttribute('data-pct') || '80%';
      });
    }
  }

  // 5. Contact Form Handler (Validation & Interactive Feedback)
  function initContactForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('.btn-send-message');
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
      }, 1000);
    });
  }

  // 6. Active Navigation Highlighting
  function initActiveNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.desktop-nav-menu a');

    function checkActive() {
      const scrollY = window.pageYOffset + 140;
      sections.forEach(sec => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        if (scrollY >= top && scrollY < top + height) {
          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }

    window.addEventListener('scroll', checkActive, { passive: true });
    checkActive();
  }

  // DOM Content Loaded Initializer
  document.addEventListener('DOMContentLoaded', () => {
    initScrollProgress();
    initTypewriter();
    initMobileNav();
    initSkillBars();
    initContactForm();
    initActiveNavHighlight();
  });
})();
