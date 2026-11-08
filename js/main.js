/**
 * InLiveIq — Main Interactive Controller (Bahasa Indonesia)
 * Indikator scroll komprehensif, jam hidup real-time, HUD mengambang,
 * navigasi ramah aksesibilitas, drawer responsif, salin clipboard, dan form.
 */

(function () {
  'use strict';

  // 1. Indikator Progress Scroll & Floating HUD
  function initScrollProgress() {
    const bars = document.querySelectorAll('.scroll-progress-bar');
    const hudThumb = document.getElementById('hud-thumb');
    const hudPct = document.getElementById('hud-pct');
    const heroScrollPct = document.getElementById('hero-scroll-pct');
    const hudNavItems = document.querySelectorAll('.hud-nav-item');

    function update() {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const totalH = document.documentElement.scrollHeight - window.innerHeight;
      const pct = totalH > 0 ? Math.min(Math.max((scrollY / totalH) * 100, 0), 100) : 0;
      const pctRounded = Math.round(pct);

      // Bar progress atas
      bars.forEach(bar => {
        bar.style.width = pct + '%';
      });

      // HUD mengambang kanan
      if (hudThumb) {
        hudThumb.style.top = pct + '%';
      }
      if (hudPct) {
        hudPct.textContent = pctRounded + '%';
      }

      // Indikator persentase di Hero
      if (heroScrollPct) {
        heroScrollPct.textContent = pctRounded + '%';
      }

      // Deteksi section aktif untuk HUD dots
      if (hudNavItems.length > 0) {
        const sections = Array.from(hudNavItems).map(item => {
          const targetId = item.getAttribute('data-target') || item.getAttribute('href')?.replace('#', '');
          const el = document.getElementById(targetId);
          return { item, el };
        }).filter(s => s.el);

        const currentPos = scrollY + (window.innerHeight * 0.35);
        let activeFound = false;

        for (let i = sections.length - 1; i >= 0; i--) {
          const sec = sections[i];
          if (sec.el.offsetTop <= currentPos) {
            hudNavItems.forEach(ni => ni.classList.remove('active'));
            sec.item.classList.add('active');
            activeFound = true;
            break;
          }
        }

        if (!activeFound && hudNavItems[0]) {
          hudNavItems.forEach(ni => ni.classList.remove('active'));
          hudNavItems[0].classList.add('active');
        }
      }
    }

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();
  }

  // 2. Jam Hidup Real-Time (WIB / Jakarta)
  function initLiveClock() {
    const clockEl = document.getElementById('live-clock');
    if (!clockEl) return;

    function tick() {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('id-ID', {
          timeZone: 'Asia/Jakarta',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        });
        clockEl.textContent = `${formatter.format(now)} WIB`;
      } catch (e) {
        // Fallback jika timezone API terbatas
        const d = new Date();
        const pad = (n) => n.toString().padStart(2, '0');
        clockEl.textContent = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())} WIB`;
      }
    }

    tick();
    setInterval(tick, 1000);
  }

  // 3. Mobile Menu Drawer Controller
  function initMobileMenu() {
    const toggleBtn = document.querySelector('.mobile-nav-toggle');
    const drawer = document.querySelector('.mobile-drawer');
    if (!toggleBtn || !drawer) return;

    let isOpen = false;

    function openDrawer() {
      isOpen = true;
      drawer.classList.add('open');
      toggleBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      const iconOpen = toggleBtn.querySelector('.icon-menu');
      const iconClose = toggleBtn.querySelector('.icon-close');
      if (iconOpen) iconOpen.style.display = 'none';
      if (iconClose) iconClose.style.display = 'block';
    }

    function closeDrawer() {
      isOpen = false;
      drawer.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      const iconOpen = toggleBtn.querySelector('.icon-menu');
      const iconClose = toggleBtn.querySelector('.icon-close');
      if (iconOpen) iconOpen.style.display = 'block';
      if (iconClose) iconClose.style.display = 'none';
    }

    toggleBtn.addEventListener('click', () => {
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });

    const drawerLinks = drawer.querySelectorAll('.nav-link');
    drawerLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeDrawer();
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeDrawer();
      }
    });
  }

  // 4. Highlight Nav Link Aktif
  function initActiveNav() {
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';

    const links = document.querySelectorAll('.desktop-nav .nav-link, .mobile-drawer .nav-link');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      const linkPage = href.split('/').pop().split('#')[0];
      
      if (linkPage === page || (page === '' && linkPage === 'index.html')) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  }

  // 5. Salin Email ke Clipboard
  function initEmailCopy() {
    const copyBtns = document.querySelectorAll('.copy-email-btn');
    copyBtns.forEach(btn => {
      btn.addEventListener('click', async () => {
        const email = btn.getAttribute('data-email') || 'hello@inliveiq.com';
        try {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(email);
          } else {
            const ta = document.createElement('textarea');
            ta.value = email;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
          }
          const originalText = btn.textContent;
          btn.textContent = 'Alamat Tersalin!';
          btn.style.borderColor = 'var(--accent)';
          btn.style.color = 'var(--accent)';
          setTimeout(() => {
            btn.textContent = originalText;
            btn.style.borderColor = '';
            btn.style.color = '';
          }, 2200);
        } catch (err) {
          console.warn('Clipboard gagal:', err);
        }
      });
    });
  }

  // 6. Form Kontak
  function initContactForm() {
    const form = document.querySelector('#contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const feedback = document.querySelector('.form-feedback');
      const submitBtn = form.querySelector('button[type="submit"]');

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Mengirimkan pesan...';
      }

      setTimeout(() => {
        if (feedback) {
          feedback.classList.add('success');
          feedback.textContent = 'Terima kasih atas pesan Anda. Digerakkan oleh rasa ingin tahu dan refleksi yang mendalam, saya akan membalas pesan Anda sesegera mungkin.';
        }
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Kirim Pesan';
        }
      }, 550);
    });
  }

  // 7. ScrollSpy untuk Daftar Isi Kasus (TOC)
  function initCaseStudyTOC() {
    const tocLinks = document.querySelectorAll('.toc-link');
    const sections = document.querySelectorAll('.case-section');
    if (!tocLinks.length || !sections.length) return;

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
    }, {
      rootMargin: '-10% 0px -75% 0px'
    });

    sections.forEach(sec => observer.observe(sec));
  }

  // 8. Filter Kategori Arsip
  function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('[data-category]');
    if (!filterBtns.length || !items.length) return;

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-filter');

        items.forEach(item => {
          const itemCat = item.getAttribute('data-category');
          if (category === 'all' || itemCat === category || itemCat.includes(category)) {
            item.style.display = '';
            item.style.opacity = '0';
            requestAnimationFrame(() => {
              item.style.transition = 'opacity 0.25s ease';
              item.style.opacity = '1';
            });
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  // Inisialisasi saat DOM siap
  document.addEventListener('DOMContentLoaded', () => {
    initScrollProgress();
    initLiveClock();
    initMobileMenu();
    initActiveNav();
    initEmailCopy();
    initContactForm();
    initCaseStudyTOC();
    initFilters();
  });
})();
