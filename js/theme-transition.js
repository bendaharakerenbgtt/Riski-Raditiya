/**
 * InLiveIq — Signature Organic Multi-Point Theme Transition
 * 
 * Creates an organic, multi-origin wave spreading transition when switching
 * between dark and light themes, as specified in the Master Project Brief.
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'inliveiq_theme';
  const THEME_DARK = 'dark';
  const THEME_LIGHT = 'light';

  // Target background colors defined in color system
  const THEME_COLORS = {
    dark: '#222126',
    light: '#F5F3EF'
  };

  let isTransitioning = false;
  let canvas = null;
  let ctx = null;

  function getSystemPreference() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
      ? THEME_LIGHT
      : THEME_DARK;
  }

  function getCurrentTheme() {
    return document.documentElement.getAttribute('data-theme') || THEME_DARK;
  }

  function initCanvas() {
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.id = 'theme-transition-canvas';
      canvas.setAttribute('aria-hidden', 'true');
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = '99999';
      canvas.style.opacity = '1';
      canvas.style.transition = 'opacity 0.22s ease-out';
      document.body.appendChild(canvas);
      ctx = canvas.getContext('2d');
    }
    return ctx;
  }

  function resizeCanvas() {
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    if (ctx) {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
  }

  function updateToggleButtons(theme) {
    const toggles = document.querySelectorAll('.theme-toggle');
    toggles.forEach(toggle => {
      const isDark = theme === THEME_DARK;
      toggle.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} theme`);
      toggle.setAttribute('title', `Switch to ${isDark ? 'light' : 'dark'} theme`);
      
      const iconDark = toggle.querySelector('.theme-icon-dark');
      const iconLight = toggle.querySelector('.theme-icon-light');
      if (iconDark && iconLight) {
        if (isDark) {
          iconDark.style.display = 'none';
          iconLight.style.display = 'block';
        } else {
          iconDark.style.display = 'block';
          iconLight.style.display = 'none';
        }
      }
    });
  }

  function applyThemeInstant(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    updateToggleButtons(theme);
  }

  // Smooth cubic ease out
  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function easeOutQuad(t) {
    return 1 - (1 - t) * (1 - t);
  }

  function runOrganicTransition(sourceX, sourceY, targetTheme) {
    const prefersReducedMotion = window.matchMedia && 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      applyThemeInstant(targetTheme);
      return;
    }

    if (!initCanvas()) {
      applyThemeInstant(targetTheme);
      return;
    }

    isTransitioning = true;
    resizeCanvas();
    canvas.style.opacity = '1';

    const w = window.innerWidth;
    const h = window.innerHeight;
    const maxDimension = Math.hypot(w, h);
    const targetColor = THEME_COLORS[targetTheme] || (targetTheme === THEME_LIGHT ? '#F5F3EF' : '#222126');

    // Default source position to top right if not provided
    const clickX = typeof sourceX === 'number' ? sourceX : w * 0.85;
    const clickY = typeof sourceY === 'number' ? sourceY : 40;

    // 6-7 Organic origin points spreading organically across the surface
    const origins = [
      { x: clickX, y: clickY, delay: 0, speed: 1.0, maxR: maxDimension * 0.95 },
      { x: w * 0.15, y: h * 0.25, delay: 40, speed: 0.95, maxR: maxDimension * 0.8 },
      { x: w * 0.85, y: h * 0.20, delay: 60, speed: 0.9, maxR: maxDimension * 0.85 },
      { x: w * 0.35, y: h * 0.65, delay: 75, speed: 0.95, maxR: maxDimension * 0.85 },
      { x: w * 0.70, y: h * 0.75, delay: 90, speed: 0.9, maxR: maxDimension * 0.8 },
      { x: w * 0.50, y: h * 0.40, delay: 50, speed: 1.0, maxR: maxDimension * 0.85 },
      { x: w * 0.10, y: h * 0.85, delay: 110, speed: 0.85, maxR: maxDimension * 0.75 }
    ];

    const duration = 520; // ms for expansion to full coverage
    const startTime = performance.now();
    let themeApplied = false;

    // Safety watchdog for background tabs or environments where rAF is throttled
    const safetyTimer = setTimeout(() => {
      if (!themeApplied) {
        themeApplied = true;
        applyThemeInstant(targetTheme);
      }
      if (isTransitioning) {
        if (canvas) canvas.style.opacity = '0';
        setTimeout(() => {
          if (ctx) ctx.clearRect(0, 0, w, h);
          isTransitioning = false;
        }, 220);
      }
    }, duration + 80);

    function animate(now) {
      const elapsed = now - startTime;
      ctx.clearRect(0, 0, w, h);

      ctx.fillStyle = targetColor;

      origins.forEach(pt => {
        if (elapsed > pt.delay) {
          const ptElapsed = elapsed - pt.delay;
          const ptDuration = duration - pt.delay;
          const progress = Math.min(Math.max(ptElapsed / ptDuration, 0), 1);
          const eased = easeOutCubic(progress);
          const r = pt.maxR * eased;

          if (r > 0) {
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, r, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      });

      // Once the shapes have expanded sufficiently to cover screen, switch DOM
      if (elapsed >= duration * 0.82 && !themeApplied) {
        themeApplied = true;
        applyThemeInstant(targetTheme);
      }

      if (elapsed < duration) {
        requestAnimationFrame(animate);
      } else {
        clearTimeout(safetyTimer);
        // Complete full screen coverage assurance
        ctx.fillRect(0, 0, w, h);
        if (!themeApplied) {
          themeApplied = true;
          applyThemeInstant(targetTheme);
        }

        // Smoothly fade canvas out now that DOM underneath is target theme
        canvas.style.opacity = '0';
        setTimeout(() => {
          if (ctx) ctx.clearRect(0, 0, w, h);
          isTransitioning = false;
        }, 230);
      }
    }

    requestAnimationFrame(animate);
  }

  function toggleTheme(event) {
    if (isTransitioning) return;

    const current = getCurrentTheme();
    const next = current === THEME_DARK ? THEME_LIGHT : THEME_DARK;

    let sourceX = window.innerWidth * 0.85;
    let sourceY = 40;

    if (event && event.currentTarget) {
      const rect = event.currentTarget.getBoundingClientRect();
      sourceX = rect.left + rect.width / 2;
      sourceY = rect.top + rect.height / 2;
    } else if (event && typeof event.clientX === 'number') {
      sourceX = event.clientX;
      sourceY = event.clientY;
    }

    runOrganicTransition(sourceX, sourceY, next);
  }

  // Initialization
  function initTheme() {
    const initialDocTheme = document.documentElement.getAttribute('data-theme');
    const savedTheme = localStorage.getItem(STORAGE_KEY) || initialDocTheme || getSystemPreference();
    applyThemeInstant(savedTheme);

    window.addEventListener('resize', () => {
      if (canvas && !isTransitioning) {
        resizeCanvas();
      }
    }, { passive: true });

    // Attach to toggle buttons
    document.addEventListener('click', (e) => {
      const toggle = e.target.closest('.theme-toggle');
      if (toggle) {
        e.preventDefault();
        toggleTheme(e);
      }
    });

    // Listen to system changes if user hasn't explicitly set preference
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
        if (!localStorage.getItem(STORAGE_KEY)) {
          applyThemeInstant(e.matches ? THEME_LIGHT : THEME_DARK);
        }
      });
    }
  }

  // Expose toggle globally for accessibility or scripts
  window.InLiveIqTheme = {
    toggle: toggleTheme,
    set: applyThemeInstant,
    get: getCurrentTheme
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }
})();
