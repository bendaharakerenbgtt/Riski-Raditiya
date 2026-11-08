/**
 * InLiveIq — Signature Organic Multi-Point Theme Transition
 * 
 * Transisi gelombang organik multi-titik yang tahan banting,
 * kompatibel dengan VS Code Live Server, webview lokal, dan semua peramban modern.
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'inliveiq_theme';
  const THEME_DARK = 'dark';
  const THEME_LIGHT = 'light';

  // Warna latar target sesuai sistem warna InLiveIq
  const THEME_COLORS = {
    dark: '#222126',
    light: '#F5F3EF'
  };

  // Safe storage helper (mencegah crash SecurityError di webview / Live Server VS Code)
  let inMemoryTheme = null;
  const safeStorage = {
    get(key) {
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          return window.localStorage.getItem(key);
        }
      } catch (e) {
        // Abaikan restriction error
      }
      return inMemoryTheme;
    },
    set(key, val) {
      inMemoryTheme = val;
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          window.localStorage.setItem(key, val);
        }
      } catch (e) {
        // Abaikan restriction error
      }
    }
  };

  let isTransitioning = false;
  let canvas = null;
  let ctx = null;

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

  function initCanvas() {
    if (!canvas && typeof document !== 'undefined') {
      canvas = document.createElement('canvas');
      canvas.id = 'theme-transition-canvas';
      canvas.setAttribute('aria-hidden', 'true');
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = '999999';
      canvas.style.opacity = '1';
      canvas.style.transition = 'opacity 0.24s ease-out';
      if (document.body) {
        document.body.appendChild(canvas);
      } else {
        document.documentElement.appendChild(canvas);
      }
      ctx = canvas.getContext('2d');
    }
    return ctx;
  }

  function resizeCanvas() {
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    if (ctx) {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
  }

  function updateToggleButtons(theme) {
    const isDark = theme === THEME_DARK;
    const labelText = isDark ? 'Beralih ke mode terang' : 'Beralih ke mode gelap';

    const toggles = document.querySelectorAll('.theme-toggle');
    toggles.forEach(toggle => {
      toggle.setAttribute('aria-label', labelText);
      toggle.setAttribute('title', labelText);

      const iconDark = toggle.querySelector('.theme-icon-dark');
      const iconLight = toggle.querySelector('.theme-icon-light');

      if (iconDark && iconLight) {
        if (isDark) {
          // Sedang dalam dark mode: tampilkan ikon matahari (untuk beralih ke terang)
          iconDark.style.display = 'none';
          iconLight.style.display = 'block';
        } else {
          // Sedang dalam light mode: tampilkan ikon bulan (untuk beralih ke gelap)
          iconDark.style.display = 'block';
          iconLight.style.display = 'none';
        }
      }
    });
  }

  function applyThemeInstant(theme) {
    const targetTheme = (theme === THEME_LIGHT) ? THEME_LIGHT : THEME_DARK;

    // Terapkan ke documentElement dan body
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

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function runOrganicTransition(sourceX, sourceY, targetTheme) {
    let prefersReducedMotion = false;
    try {
      prefersReducedMotion = window.matchMedia && 
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch (e) {}

    // Jika user mengaktifkan reduced motion atau canvas tidak didukung, langsung ganti
    if (prefersReducedMotion || !window.requestAnimationFrame) {
      applyThemeInstant(targetTheme);
      return;
    }

    try {
      if (!initCanvas()) {
        applyThemeInstant(targetTheme);
        return;
      }
    } catch (e) {
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

    const clickX = (typeof sourceX === 'number' && !isNaN(sourceX)) ? sourceX : w * 0.85;
    const clickY = (typeof sourceY === 'number' && !isNaN(sourceY)) ? sourceY : 40;

    // 7 Titik asal penyebaran organik
    const origins = [
      { x: clickX, y: clickY, delay: 0, maxR: maxDimension * 1.0 },
      { x: w * 0.15, y: h * 0.25, delay: 35, maxR: maxDimension * 0.85 },
      { x: w * 0.85, y: h * 0.20, delay: 50, maxR: maxDimension * 0.85 },
      { x: w * 0.35, y: h * 0.65, delay: 70, maxR: maxDimension * 0.85 },
      { x: w * 0.70, y: h * 0.75, delay: 85, maxR: maxDimension * 0.8 },
      { x: w * 0.50, y: h * 0.40, delay: 45, maxR: maxDimension * 0.85 },
      { x: w * 0.10, y: h * 0.85, delay: 100, maxR: maxDimension * 0.75 }
    ];

    const duration = 480; // ms
    const startTime = performance.now();
    let domApplied = false;

    // Watchdog timer jika rAF terhambat
    const watchdog = setTimeout(() => {
      if (!domApplied) {
        domApplied = true;
        applyThemeInstant(targetTheme);
      }
      if (canvas) canvas.style.opacity = '0';
      setTimeout(() => {
        if (ctx) ctx.clearRect(0, 0, w, h);
        isTransitioning = false;
      }, 200);
    }, duration + 100);

    function step(now) {
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

      // Terapkan tema ke DOM saat gelombang sudah menutupi sebagian besar layar
      if (elapsed >= duration * 0.75 && !domApplied) {
        domApplied = true;
        applyThemeInstant(targetTheme);
      }

      if (elapsed < duration) {
        requestAnimationFrame(step);
      } else {
        clearTimeout(watchdog);
        ctx.fillRect(0, 0, w, h);
        if (!domApplied) {
          domApplied = true;
          applyThemeInstant(targetTheme);
        }

        // Fade out canvas pelan sehingga tema baru di DOM terlihat halus
        canvas.style.opacity = '0';
        setTimeout(() => {
          if (ctx) ctx.clearRect(0, 0, w, h);
          isTransitioning = false;
        }, 220);
      }
    }

    requestAnimationFrame(step);
  }

  function toggleTheme(event) {
    if (isTransitioning) return;

    const current = getCurrentTheme();
    const next = (current === THEME_DARK) ? THEME_LIGHT : THEME_DARK;

    let sourceX = window.innerWidth * 0.85;
    let sourceY = 40;

    if (event) {
      const btn = event.currentTarget || (event.target ? event.target.closest('.theme-toggle') : null);
      if (btn) {
        const rect = btn.getBoundingClientRect();
        sourceX = rect.left + rect.width / 2;
        sourceY = rect.top + rect.height / 2;
      } else if (typeof event.clientX === 'number' && event.clientX > 0) {
        sourceX = event.clientX;
        sourceY = event.clientY;
      }
    }

    runOrganicTransition(sourceX, sourceY, next);
  }

  function initTheme() {
    const initialDocTheme = document.documentElement.getAttribute('data-theme');
    const savedTheme = safeStorage.get(STORAGE_KEY) || initialDocTheme || getSystemPreference();
    applyThemeInstant(savedTheme);

    window.addEventListener('resize', () => {
      if (canvas && !isTransitioning) {
        resizeCanvas();
      }
    }, { passive: true });

    // Pasang listener langsung ke tombol-tombol yang sudah ada
    function bindButtons() {
      const toggles = document.querySelectorAll('.theme-toggle');
      toggles.forEach(btn => {
        btn.onclick = function (e) {
          e.preventDefault();
          toggleTheme(e);
        };
      });
    }

    bindButtons();

    // Event delegation sebagai cadangan
    document.addEventListener('click', (e) => {
      const toggle = e.target.closest('.theme-toggle');
      if (toggle) {
        e.preventDefault();
        toggleTheme(e);
      }
    });

    // Deteksi jika tema sistem berganti dan user belum pernah memilih manual
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

  // API global
  window.InLiveIqTheme = {
    toggle: toggleTheme,
    set: applyThemeInstant,
    get: getCurrentTheme
  };

  // Jalankan inisialisasi secepat mungkin
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }
})();
