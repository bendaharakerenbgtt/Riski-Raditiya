/**
 * InLiveIq — Living Thought Lattice (Elemen Mini Hidup)
 * Partikel mikro dan filamen halus yang bergerak tenang dan reaktif terhadap kursor.
 * Ringan, hemat daya, dan otomatis menyesuaikan warna tema saat beralih.
 */

(function () {
  'use strict';

  function initLivingCanvas() {
    const canvas = document.querySelector('#living-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let particles = [];
    let mouse = { x: -1000, y: -1000, radius: 110 };
    let animId = null;

    const coordsEl = document.getElementById('hero-coords');

    const prefersReduced = window.matchMedia && 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function resize() {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(rect.width, 280);
      height = Math.min(Math.max(rect.height || 240, 200), 300);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function getThemeColors() {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      return {
        node: isLight ? 'rgba(120, 97, 143, 0.75)' : 'rgba(181, 159, 208, 0.75)',
        line: isLight ? '120, 97, 143' : '181, 159, 208',
        lineAlpha: isLight ? 0.28 : 0.22,
        pulseCore: isLight ? '#78618F' : '#B59FD0'
      };
    }

    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = initial ? Math.random() * width : (Math.random() > 0.5 ? 2 : width - 2);
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.42;
        this.vy = (Math.random() - 0.5) * 0.42;
        this.radius = Math.random() * 1.5 + 1.2;
        this.baseRadius = this.radius;
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.02 + Math.random() * 0.02;
      }

      update() {
        this.pulse += this.pulseSpeed;
        this.radius = this.baseRadius + Math.sin(this.pulse) * 0.45;

        this.x += this.vx;
        this.y += this.vy;

        // Pantulan halus di batas area canvas
        if (this.x < 8 || this.x > width - 8) this.vx *= -1;
        if (this.y < 8 || this.y > height - 8) this.vy *= -1;

        // Interaksi kursor (menjauh lembut)
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.hypot(dx, dy);

        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius) * 0.95;
          const angle = Math.atan2(dy, dx);
          this.x += Math.cos(angle) * force * 2.6;
          this.y += Math.sin(angle) * force * 2.6;
        }
      }

      draw(colors) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, Math.max(this.radius, 0.5), 0, Math.PI * 2);
        ctx.fillStyle = colors.node;
        ctx.fill();
      }
    }

    function initParticles() {
      resize();
      particles = [];
      const count = Math.min(Math.floor(width / 32), 26);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      const colors = getThemeColors();

      // Gambar filamen koneksi antar node
      const maxDist = 95;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * colors.lineAlpha;
            ctx.strokeStyle = `rgba(${colors.line}, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Gambar partikel
      for (let i = 0; i < particles.length; i++) {
        if (!prefersReduced) particles[i].update();
        particles[i].draw(colors);
      }

      if (!prefersReduced) {
        animId = requestAnimationFrame(draw);
      }
    }

    initParticles();
    draw();

    window.addEventListener('resize', () => {
      resize();
      if (prefersReduced) draw();
    }, { passive: true });

    // Observasi perubahan tema secara real-time
    const themeObserver = new MutationObserver(() => {
      if (prefersReduced) draw();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    // Interaksi kursor
    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      if (coordsEl) {
        coordsEl.textContent = `X: ${Math.round(mouse.x).toString().padStart(3, '0')} · Y: ${Math.round(mouse.y).toString().padStart(3, '0')}`;
      }
    });

    canvas.addEventListener('mouseleave', () => {
      mouse.x = -1000;
      mouse.y = -1000;
      if (coordsEl) {
        coordsEl.textContent = 'X: --- · Y: ---';
      }
    });

    canvas.addEventListener('touchmove', (e) => {
      if (e.touches && e.touches[0]) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.touches[0].clientX - rect.left;
        mouse.y = e.touches[0].clientY - rect.top;
        if (coordsEl) {
          coordsEl.textContent = `X: ${Math.round(mouse.x).toString().padStart(3, '0')} · Y: ${Math.round(mouse.y).toString().padStart(3, '0')}`;
        }
      }
    }, { passive: true });

    canvas.addEventListener('touchend', () => {
      mouse.x = -1000;
      mouse.y = -1000;
      if (coordsEl) {
        coordsEl.textContent = 'X: --- · Y: ---';
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLivingCanvas);
  } else {
    initLivingCanvas();
  }
})();
