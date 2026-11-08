/**
 * InLiveIq — Main Interactive Controller
 * Clean, lightweight vanilla JavaScript for navigation, mobile menu,
 * accessible drawer, filters, and TOC scroll highlighting.
 */

(function () {
  'use strict';

  // 1. Mobile Menu Drawer Controller
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

    // Close on navigation link click
    const drawerLinks = drawer.querySelectorAll('.nav-link');
    drawerLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeDrawer();
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeDrawer();
      }
    });
  }

  // 2. Active Nav Link Highlighting
  function initActiveNav() {
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';

    const links = document.querySelectorAll('.nav-link');
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

  // 3. Email Copy Interaction
  function initEmailCopy() {
    const copyBtns = document.querySelectorAll('.copy-email-btn');
    copyBtns.forEach(btn => {
      btn.addEventListener('click', async () => {
        const email = btn.getAttribute('data-email') || 'hello@inliveiq.com';
        try {
          await navigator.clipboard.writeText(email);
          const originalText = btn.textContent;
          btn.textContent = 'Copied to clipboard';
          btn.style.borderColor = 'var(--accent)';
          btn.style.color = 'var(--accent)';
          setTimeout(() => {
            btn.textContent = originalText;
            btn.style.borderColor = '';
            btn.style.color = '';
          }, 2200);
        } catch (err) {
          console.error('Clipboard copy failed:', err);
        }
      });
    });
  }

  // 4. Contact Form Interaction
  function initContactForm() {
    const form = document.querySelector('#contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const feedback = document.querySelector('.form-feedback');
      const submitBtn = form.querySelector('button[type="submit"]');

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending message...';
      }

      setTimeout(() => {
        if (feedback) {
          feedback.classList.add('success');
          feedback.textContent = 'Thank you for your message. Driven by curiosity and thoughtful reflection, I will respond soon.';
        }
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send Message';
        }
      }, 600);
    });
  }

  // 5. Case Study Table of Contents ScrollSpy
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

  // 6. Category Filter for Projects and Insights Archives
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

  document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initActiveNav();
    initEmailCopy();
    initContactForm();
    initCaseStudyTOC();
    initFilters();
  });
})();
