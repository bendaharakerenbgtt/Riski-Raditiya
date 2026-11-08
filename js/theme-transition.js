/**
 * InLiveIq — Buttery Smooth Dark/Light Theme Transition Engine
 * 
 * Implements:
 * 1. Native View Transitions API with GPU-accelerated Circular Radial Reveal (Chrome, Edge, Safari 18+)
 * 2. Silky CSS Universal Cross-Fade & Fallback (Firefox, older browsers)
 * 3. Interactive Elastic Spin & Sun ↔ Moon Morph Animation on Toggle Button
 * 4. Safe Cross-Environment LocalStorage & System Scheme Synchronization
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'inliveiq_theme';
  const THEME_DARK = 'dark';
  const THEME_LIGHT = 'light';

  // Target background hex values for smooth transitions
  const THEME_BG_COLORS = {
    dark: '#04070c',
    light: '#f5f6fa'
  };

  // Safe storage helper (prevents SecurityError crashes on restricted webviews or iframes)
  let inMemoryTheme = null;
  const safeStorage = {
    get(key) {
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          return window.localStorage.getItem(key);
        }
      } catch (e) {}
      return inMemoryTheme;
    },
    set(key, val) {
      inMemoryTheme = val;
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          window.localStorage.setItem(key, val);
        }
      } catch (e) {}
    }
  };

  let isTransitioning = false;

  function getSystemPreference() {
    try {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        return THEME_LIGHT;
      }
    } catch (e) {}
    return THEME_DARK;
  }

  function getCurrentTheme() {
    const fromDoc = document.documentElement.getAttribute('data-theme');
    if (fromDoc === THEME_LIGHT || fromDoc === THEME_DARK) return fromDoc;
    const fromBody = document.body ? document.body.getAttribute('data-theme') : null;
    if (fromBody === THEME_LIGHT || fromBody === THEME_DARK) return fromBody;
    return safeStorage.get(STORAGE_KEY) || THEME_DARK;
  }

  function updateToggleButtons(theme) {
    const isDark = theme === THEME_DARK;
    const labelText = isDark ? 'Beralih ke mode terang' : 'Beralih ke mode gelap';

    const buttons = document.querySelectorAll('.theme-toggle-btn, .theme-toggle');
    buttons.forEach(btn => {
      btn.setAttribute('aria-label', labelText);
      btn.setAttribute('title', labelText);
    });
  }

  function applyThemeInstant(theme) {
    const targetTheme = (theme === THEME_LIGHT) ? THEME_LIGHT : THEME_DARK;

    document.documentElement.setAttribute('data-theme', targetTheme);
    document.documentElement.classList.remove('theme-dark', 'theme-light');
    document.documentElement.classList.add(`theme-${targetTheme}`);

    if (document.body) {
      document.body.setAttribute('data-theme', targetTheme);
      document.body.classList.remove('theme-dark', 'theme-light');
      document.body.classList.add(`theme-${targetTheme}`);
    }

    safeStorage.set(STORAGE_KEY, targetTheme);
    updateToggleButtons(targetTheme);
  }

  function triggerButtonAnimation(btn) {
    if (!btn) return;
    btn.classList.remove('toggling');
    // Force DOM reflow to re-trigger css keyframe animation
    void btn.offsetWidth;
    btn.classList.add('toggling');
    setTimeout(() => {
      btn.classList.remove('toggling');
    }, 600);
  }

  /**
   * Main Theme Toggle with GPU-Accelerated Circular Clip-Path Reveal
   */
  function toggleTheme(event) {
    if (isTransitioning) return;

    const currentTheme = getCurrentTheme();
    const nextTheme = (currentTheme === THEME_DARK) ? THEME_LIGHT : THEME_DARK;

    // Detect click origin coordinates for the radial wave
    let clickX = window.innerWidth * 0.85;
    let clickY = 40;
    let triggerBtn = null;

    if (event) {
      triggerBtn = event.currentTarget || (event.target ? event.target.closest('.theme-toggle-btn, .theme-toggle') : null);
      if (triggerBtn) {
        const rect = triggerBtn.getBoundingClientRect();
        clickX = rect.left + rect.width / 2;
        clickY = rect.top + rect.height / 2;
        triggerButtonAnimation(triggerBtn);
      } else if (typeof event.clientX === 'number' && event.clientX > 0) {
        clickX = event.clientX;
        clickY = event.clientY;
      }
    }

    if (!triggerBtn) {
      const defaultBtn = document.querySelector('.theme-toggle-btn, .theme-toggle');
      if (defaultBtn) {
        const rect = defaultBtn.getBoundingClientRect();
        clickX = rect.left + rect.width / 2;
        clickY = rect.top + rect.height / 2;
        triggerButtonAnimation(defaultBtn);
      }
    }

    // Check reduced motion preference
    let prefersReducedMotion = false;
    try {
      prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch (e) {}

    // CASE 1: Modern View Transitions API (Chrome 111+, Edge 111+, Safari 18+)
    if (document.startViewTransition && !prefersReducedMotion) {
      isTransitioning = true;

      const transition = document.startViewTransition(() => {
        applyThemeInstant(nextTheme);
      });

      transition.ready.then(() => {
        // Calculate the maximum radius required to sweep the entire screen from the click point
        const maxRadius = Math.hypot(
          Math.max(clickX, window.innerWidth - clickX),
          Math.max(clickY, window.innerHeight - clickY)
        );

        const clipAnimation = document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${clickX}px ${clickY}px)`,
              `circle(${maxRadius}px at ${clickX}px ${clickY}px)`
            ]
          },
          {
            duration: 520,
            easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
            pseudoElement: '::view-transition-new(root)'
          }
        );

        clipAnimation.onfinish = () => {
          isTransitioning = false;
        };
      }).catch(() => {
        isTransitioning = false;
      });

      return;
    }

    // CASE 2: Fallback for other browsers (Ultra-Smooth CSS Interpolation + Ripple Overlay)
    isTransitioning = true;
    document.documentElement.classList.add('theme-transitioning');

    // Spawn a gentle radial ripple overlay
    if (!prefersReducedMotion) {
      const ripple = document.createElement('div');
      ripple.className = 'theme-ripple-fallback';
      const maxRadius = Math.hypot(
        Math.max(clickX, window.innerWidth - clickX),
        Math.max(clickY, window.innerHeight - clickY)
      );
      const diameter = maxRadius * 2.2;
      ripple.style.width = `${diameter}px`;
      ripple.style.height = `${diameter}px`;
      ripple.style.left = `${clickX}px`;
      ripple.style.top = `${clickY}px`;
      ripple.style.background = THEME_BG_COLORS[nextTheme] || '#04070c';
      document.body.appendChild(ripple);

      // Trigger expansion
      requestAnimationFrame(() => {
        ripple.style.transform = 'translate(-50%, -50%) scale(1)';
        ripple.style.opacity = '0';
      });

      setTimeout(() => {
        if (ripple.parentNode) {
          ripple.parentNode.removeChild(ripple);
        }
      }, 600);
    }

    applyThemeInstant(nextTheme);

    setTimeout(() => {
      document.documentElement.classList.remove('theme-transitioning');
      isTransitioning = false;
    }, 480);
  }

  function initTheme() {
    const initialDocTheme = document.documentElement.getAttribute('data-theme');
    const savedTheme = safeStorage.get(STORAGE_KEY) || initialDocTheme || getSystemPreference();
    applyThemeInstant(savedTheme);

    // Event listener binding on theme toggle buttons
    function bindButtons() {
      const buttons = document.querySelectorAll('.theme-toggle-btn, .theme-toggle');
      buttons.forEach(btn => {
        btn.onclick = function (e) {
          e.preventDefault();
          toggleTheme(e);
        };
      });
    }

    bindButtons();

    // Event delegation backup
    document.addEventListener('click', (e) => {
      const toggle = e.target.closest('.theme-toggle-btn, .theme-toggle');
      if (toggle) {
        e.preventDefault();
        toggleTheme(e);
      }
    });

    // Detect OS theme change if user hasn't explicitly set one
    try {
      if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
          if (!safeStorage.get(STORAGE_KEY)) {
            applyThemeInstant(e.matches ? THEME_LIGHT : THEME_DARK);
          }
        });
      }
    } catch (e) {}
  }

  // Global API
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
