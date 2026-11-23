/* ==========================================================================
   Bilingual Dictionary & Switcher (Indonesian / English)
   ========================================================================== */
(function () {
  const TRANSLATIONS = {
    id: {
      // Sidebar & Navigation
      sidebar_timeline_title: 'Timeline & Status',
      sidebar_projects_count: '4 Proyek Nyata',
      nav_hero: 'hero.tsx — Beranda',
      nav_about: 'about.md — Tentang Saya',
      nav_education: 'education.json — Pendidikan',
      nav_projects: 'projects.config.ts — Karya',
      nav_skills: 'skills.yaml — Keahlian',
      nav_services: 'services.json — Layanan',
      nav_contact: 'contact.env — Hubungi Saya',
      nav_cta: 'Mulai Diskusi Proyek',

      // Hero
      hero_title: 'Halo, aku Riski Raditiya.',
      hero_desc_1: 'Mahasiswa Teknologi Rekayasa Multimedia yang senang mengeksplorasi teknologi, memahami cara kerja sesuatu, dan mencoba berbagai ide lewat proyek nyata.',
      hero_desc_2: 'Buatku, hal menarik bukan cuma soal hasil akhirnya, tapi juga proses mencari tahu bagaimana sesuatu bisa bekerja.',
      hero_cta: 'Lihat Karya',

      // About
      about_title: 'Tentang Saya',
      about_subtitle: 'Selalu Ada Hal Baru untuk Dipelajari.',
      about_p1: 'Rasa penasaran sering jadi awal dari sesuatu yang menarik.',
      about_p2: 'Aku adalah mahasiswa Teknologi Rekayasa Multimedia yang punya ketertarikan pada teknologi, pengetahuan, dan berbagai hal baru yang bisa dieksplorasi.',
      about_p3: 'Aku senang mengulik bagaimana sesuatu bekerja, mencari tahu alasan di baliknya, lalu mencoba menerapkan apa yang sudah dipelajari. Bagiku, belajar bukan sekadar tahu banyak hal, tetapi benar-benar memahami dan bisa menggunakannya.',
      about_p4: 'Lewat teknologi, eksperimen, dan berbagai proyek yang aku kerjakan, aku terus mencoba mengembangkan kemampuan dan memperluas wawasan. Aku juga percaya bahwa pengetahuan akan jauh lebih bermakna ketika nggak berhenti di diri sendiri, tetapi bisa dibagikan dan bermanfaat bagi orang lain.',

      // Education
      edu_title: 'Pendidikan',
      edu_subtitle: 'Perjalanan Belajar — Setiap pengalaman punya perannya sendiri dalam membentuk kemampuan dan cara pandangku.',
      edu_1_status: 'Sedang Berjalan',
      edu_1_period: '2024 – Sekarang',
      edu_1_degree: 'Teknologi Rekayasa Multimedia',
      edu_1_inst: 'Politeknik Negeri Media Kreatif (Polimedia)',
      edu_1_meta: 'Diploma IV (Sarjana Terapan) • Kampus Jakarta',
      edu_2_status: 'Lulus',
      edu_2_period: '2021 – 2024',
      edu_2_degree: 'Bisnis Daring dan Pemasaran (BDP)',
      edu_2_inst: 'SMK Perintis 1 Depok',
      edu_2_meta: 'Sekolah Menengah Kejuruan • Kota Depok',

      // Projects
      proj_title: 'Karya & Proyek',
      proj_subtitle: 'Ide yang Nggak Berhenti di Kepala. Mulai dari sistem informasi, otomasi dokumen, sampai aplikasi web untuk kebutuhan nyata.',
      proj_1_desc: 'Sistem pengelolaan laundry dan perawatan sepatu. Dilengkapi tracking resi, cetak nota PDF, dan pemantauan status pengerjaan agar operasional lebih mudah dikelola.',
      proj_2_desc: 'Sistem informasi keuangan untuk organisasi LDK IMIP. Membantu pencatatan transaksi, penyimpanan bukti pembayaran, pengelolaan kas anggota, hingga pembuatan dokumen laporan secara otomatis.',
      proj_3_title: 'Web Polimedia Fasilitas',
      proj_3_desc: 'Platform peminjaman ruang dan fasilitas kampus yang membantu mengelola proses pengajuan hingga persetujuan secara lebih terstruktur.',
      proj_4_desc: 'Generator surat resmi organisasi mahasiswa dengan fitur live preview ukuran A4, edit dokumen langsung, dan ekspor ke PDF maupun DOCX.',
      proj_link: 'Lihat Cerita Proyek ↗',

      // Skills
      skills_title: 'Keahlian Utama',
      skills_subtitle: 'Hal-Hal yang Sering Aku Kerjakan — Kemampuan yang terus aku kembangkan lewat proses belajar, eksperimen, dan pengerjaan berbagai proyek.',
      skill_1: 'Perancangan Sistem & Alur Bisnis',
      skill_2: 'UI/UX & Antarmuka Web',
      skill_3: 'AI-Assisted Web Development',
      skill_4: 'Google Workspace & Otomasi Data',
      skill_5: 'Deployment & Iterasi Produk',
      skill_6: 'Desain Grafis & Video Editing (Canva, CapCut)',

      // Services
      serv_title: 'Tiga Cara Kerja Sama',
      serv_subtitle: 'Ada Ide yang Mau Dibikin Nyata? Aku terbuka untuk membantu kebutuhan website dan aplikasi web, mulai dari halaman promosi sederhana sampai sistem dengan alur kerja khusus.',
      serv_1_desc: 'Cocok buat kamu yang butuh landing page untuk memperkenalkan produk, bisnis, acara, atau layanan dengan tampilan menarik dan informatif.',
      serv_1_prefix: 'Mulai dari',
      serv_1_f1: 'Satu halaman lengkap dengan desain responsif untuk HP dan laptop.',
      serv_1_f2: 'Estimasi pengerjaan 1–2 minggu.',
      serv_1_f3: 'Optimasi performa dan SEO dasar, termasuk Open Graph untuk tampilan saat link dibagikan.',
      serv_1_f4: 'Tombol CTA yang terhubung ke WhatsApp, email, atau formulir.',
      serv_1_f5: 'Garansi perbaikan bug selama 30 hari setelah rilis.',
      serv_1_cta: 'Mulai Single Page ↗',

      serv_2_badge: 'Paling Diminati',
      serv_2_desc: 'Butuh lebih dari sekadar website? Layanan ini cocok buat kamu yang ingin membangun website multi-halaman atau aplikasi web dengan fitur dan alur kerja sesuai kebutuhan bisnis maupun organisasi.',
      serv_2_prefix: 'Mulai dari',
      serv_2_f1: 'Website multi-halaman atau sistem operasional (3–6 minggu).',
      serv_2_f2: 'Perancangan alur sistem dan struktur data sebelum pengembangan.',
      serv_2_f3: 'Database fleksibel, mulai dari Google Sheets & Apps Script hingga PostgreSQL.',
      serv_2_f4: 'Dukungan ekspor laporan PDF/DOCX atau dashboard admin.',
      serv_2_f5: 'Bantuan deployment agar aplikasi bisa diakses secara online.',
      serv_2_f6: 'Garansi perbaikan bug selama 60 hari setelah serah terima.',
      serv_2_cta: 'Diskusi Full Build ↗',

      serv_3_title: 'Pendampingan Bulanan',
      serv_3_desc: 'Website sudah jadi, tapi masih butuh perawatan atau pengembangan? Layanan ini cocok untuk menjaga sistem tetap berjalan sekaligus menyesuaikannya dengan kebutuhan baru.',
      serv_3_prefix: 'Biaya bulanan',
      serv_3_period: '/bulan',
      serv_3_f1: 'Alokasi 4 hari kerja efektif per bulan.',
      serv_3_f2: 'Pembaruan konten, fitur ringan, dan peningkatan UX secara berkala.',
      serv_3_f3: 'Respons pada minggu yang sama melalui email atau WhatsApp.',
      serv_3_f4: 'Pengecekan performa dan backup data rutin.',
      serv_3_f5: 'Layanan bisa dijeda atau dihentikan dengan pemberitahuan 14–30 hari sebelumnya.',
      serv_3_cta: 'Bahas Retainer ↗',

      // Terms
      terms_comment: '// KETENTUAN KERJA SAMA — Biar dari Awal Sama-Sama Jelas',
      term_1_title: '01. Pembayaran',
      term_1_desc: 'DP 40–50% dibayarkan di awal sebelum pengerjaan dimulai. Pelunasan dilakukan setelah sistem selesai diuji bersama dan siap dirilis.',
      term_2_title: '02. Revisi',
      term_2_desc: 'Setiap paket sudah termasuk 2–3 kali revisi minor, seperti perubahan teks, warna, dan penyesuaian layout. Penambahan fitur besar di luar kesepakatan awal akan dibahas terpisah.',
      term_3_title: '03. Domain & Server',
      term_3_desc: 'Aku bisa membantu deployment menggunakan layanan hosting gratis seperti GitHub Pages atau Cloudflare Pages. Untuk domain berbayar (.com/.id) maupun VPS, biayanya ditanggung klien.',
      term_4_title: '04. Materi & Hak Milik',
      term_4_desc: 'Klien menyiapkan logo, teks, dan data awal yang dibutuhkan agar pengerjaan sesuai target. Setelah pembayaran lunas, seluruh kode dan aset proyek menjadi hak milik klien.',

      // Contact
      contact_title: 'Hubungi Saya',
      contact_subtitle: 'Punya Ide atau Proyek yang Mau Didiskusikan? Nggak harus sudah punya konsep matang, kita bisa mulai dari diskusi sederhana.',
      contact_location_label: 'Lokasi',
      contact_form_name: 'Nama Lengkap',
      contact_form_name_ph: 'Nama kamu...',
      contact_form_email: 'Alamat Email',
      contact_form_email_ph: 'email@domain.com...',
      contact_form_msg: 'Pesan',
      contact_form_msg_ph: 'Ceritakan sedikit tentang ide atau kebutuhan proyekmu...',
      contact_form_send: 'Kirim Pesan',

      // Footer & Trust Toast
      footer_copy: '© 2026 Riski Raditiya. Dibuat dengan rasa ingin tahu dan semangat untuk terus berkembang.',
      trust_title: 'Selamat datang di Workspace Riski Raditiya',
      trust_body: 'Apakah Anda memercayai pembuat folder ini untuk menjelajahi seluruh karya, eksperimen, dan dokumentasi di dalamnya?',
      trust_accept: 'Ya, Saya Percaya',
      trust_projects: 'Lihat Karya'
    },

    en: {
      // Sidebar & Navigation
      sidebar_timeline_title: 'Timeline & Status',
      sidebar_projects_count: '4 Real Projects',
      nav_hero: 'hero.tsx — Home',
      nav_about: 'about.md — About Me',
      nav_education: 'education.json — Education',
      nav_projects: 'projects.config.ts — Projects',
      nav_skills: 'skills.yaml — Core Skills',
      nav_services: 'services.json — Services',
      nav_contact: 'contact.env — Get in Touch',
      nav_cta: 'Start a Project',

      // Hero
      hero_title: "Hey, I'm Riski Raditiya.",
      hero_desc_1: 'A Multimedia Engineering Technology student who enjoys exploring technology, figuring out how things work, and bringing ideas to life through real-world projects.',
      hero_desc_2: "For me, it's not just about the final result. The process of figuring things out is just as interesting.",
      hero_cta: 'Explore My Work',

      // About
      about_title: 'About Me',
      about_subtitle: 'Always Something New to Explore.',
      about_p1: 'Curiosity is often where interesting things begin.',
      about_p2: "I'm a Multimedia Engineering Technology student with a strong interest in technology, knowledge, and exploring new ideas.",
      about_p3: "I enjoy figuring out how things work, understanding the reasons behind them, and finding ways to put what I've learned into practice. To me, learning isn't just about collecting information—it's about understanding things deeply and knowing how to apply them.",
      about_p4: 'Through technology, experiments, and the projects I work on, I keep developing my skills and broadening my perspective. I also believe knowledge becomes more meaningful when it does not stop with us, but is shared and made useful to others.',

      // Education
      edu_title: 'Education',
      edu_subtitle: 'My Learning Journey — Every experience plays a part in shaping what I know, what I can do, and how I see the world.',
      edu_1_status: 'Currently Studying',
      edu_1_period: '2024 – Present',
      edu_1_degree: 'Multimedia Engineering Technology',
      edu_1_inst: 'Politeknik Negeri Media Kreatif (Polimedia)',
      edu_1_meta: "Applied Bachelor's Degree • Jakarta Campus",
      edu_2_status: 'Graduated',
      edu_2_period: '2021 – 2024',
      edu_2_degree: 'Online Business and Marketing (BDP)',
      edu_2_inst: 'SMK Perintis 1 Depok',
      edu_2_meta: 'Vocational High School • Depok, Indonesia',

      // Projects
      proj_title: 'Projects & Work',
      proj_subtitle: "Ideas Worth Bringing to Life — ranging from information systems and document automation to web applications built for real-world needs.",
      proj_1_desc: 'A laundry and shoe care management system featuring order tracking, PDF receipt generation, and service status monitoring to make daily operations easier to manage.',
      proj_2_desc: 'A financial management system for LDK IMIP, built to streamline transaction records, payment evidence storage, member contributions, and automated report generation.',
      proj_3_title: 'Polimedia Facilities Portal',
      proj_3_desc: 'A campus facility and room booking platform designed to organize requests and manage multi-level approval workflows.',
      proj_4_desc: 'An official letter generator for student organizations, featuring an A4 live preview, direct document editing, and PDF/DOCX export.',
      proj_link: 'Explore Project ↗',

      // Skills
      skills_title: 'Core Skills',
      skills_subtitle: "What I Enjoy Working On — Skills I'm continuously developing through learning, experimentation, and hands-on projects.",
      skill_1: 'System Design & Business Workflows',
      skill_2: 'UI/UX & Web Interfaces',
      skill_3: 'AI-Assisted Web Development',
      skill_4: 'Google Workspace & Data Automation',
      skill_5: 'Deployment & Product Iteration',
      skill_6: 'Graphic Design & Video Editing (Canva, CapCut)',

      // Services
      serv_title: 'Three Ways to Work Together',
      serv_subtitle: "Got an Idea? Let's Build It. I help bring web projects to life, from simple landing pages to custom web applications tailored to specific business or organizational workflows.",
      serv_1_desc: 'Perfect for introducing your product, business, event, or service through a clean, engaging, and informative landing page.',
      serv_1_prefix: 'Starting at',
      serv_1_f1: 'One complete page with responsive layouts for mobile and desktop.',
      serv_1_f2: 'Estimated delivery: 1–2 weeks.',
      serv_1_f3: 'Performance optimization and basic SEO, including Open Graph for link previews.',
      serv_1_f4: 'CTA buttons connected to WhatsApp, email, or forms.',
      serv_1_f5: '30-day bug-fixing warranty after launch.',
      serv_1_cta: 'Get Started ↗',

      serv_2_badge: 'Most Popular',
      serv_2_desc: 'Need more than just a landing page? This service is for multi-page websites or web applications with custom features and workflows tailored to your business or organization.',
      serv_2_prefix: 'Starting at',
      serv_2_f1: 'Multi-page websites or fully functional web systems (3–6 weeks).',
      serv_2_f2: 'System workflow and data structure planning before development.',
      serv_2_f3: 'Flexible database options, from Google Sheets & Apps Script to PostgreSQL.',
      serv_2_f4: 'PDF/DOCX report exports or an admin dashboard.',
      serv_2_f5: 'Deployment assistance to get your application online.',
      serv_2_f6: '60-day bug-fixing warranty after handover.',
      serv_2_cta: 'Discuss Your Project ↗',

      serv_3_title: 'Monthly Support',
      serv_3_desc: 'Already have a website but need ongoing maintenance or improvements? This service helps keep your system running smoothly while adapting to your evolving needs.',
      serv_3_prefix: 'Monthly fee',
      serv_3_period: '/month',
      serv_3_f1: 'Up to 4 effective working days per month.',
      serv_3_f2: 'Regular content updates, minor features, and UX improvements.',
      serv_3_f3: 'Response within the same week via email or WhatsApp.',
      serv_3_f4: 'Routine performance checks and data backups.',
      serv_3_f5: "Can be paused or discontinued with 14–30 days' notice.",
      serv_3_cta: 'Discuss Monthly Support ↗',

      // Terms
      terms_comment: '// WORKING TOGETHER — Clear Expectations. Better Results.',
      term_1_title: '01. Payment',
      term_1_desc: 'An upfront deposit of 40–50% is required before development begins. The remaining balance is due after the system has been tested together and is ready for launch.',
      term_2_title: '02. Revisions',
      term_2_desc: 'Each package includes 2–3 rounds of minor revisions, such as text changes, color adjustments, and layout refinements. Major feature additions outside the original agreement are quoted separately.',
      term_3_title: '03. Domain & Hosting',
      term_3_desc: 'I can help deploy your project using free hosting platforms such as GitHub Pages or Cloudflare Pages. Any paid domain (.com/.id) or VPS hosting costs are covered by the client.',
      term_4_title: '04. Materials & Ownership',
      term_4_desc: 'Clients provide the logo, copy, and initial data needed to keep the project on schedule. Once full payment is received, all project code and assets become the client’s property.',

      // Contact
      contact_title: 'Get in Touch',
      contact_subtitle: "Have an Idea or Project in Mind? You don't need everything figured out yet—we can start with a simple conversation.",
      contact_location_label: 'Location',
      contact_form_name: 'Full Name',
      contact_form_name_ph: 'Your name...',
      contact_form_email: 'Email Address',
      contact_form_email_ph: 'email@domain.com...',
      contact_form_msg: 'Your Message',
      contact_form_msg_ph: 'Tell me a little about your idea or project...',
      contact_form_send: 'Send Message',

      // Footer & Trust Toast
      footer_copy: '© 2026 Riski Raditiya. Built with curiosity and a passion for continuous learning.',
      trust_title: "Welcome to Riski Raditiya's Workspace",
      trust_body: 'Do you trust the author of this folder to explore all projects, experiments, and documentation inside?',
      trust_accept: 'Yes, I Trust',
      trust_projects: 'Explore Work'
    }
  };

  function applyLanguage(lang) {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.id;
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    document.querySelectorAll('.lang-opt').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    if (typeof window.updateTypewriterLang === 'function') {
      window.updateTypewriterLang(lang);
    }

    try {
      localStorage.setItem('portfolio_lang', lang);
    } catch (e) {}
  }

  document.addEventListener('DOMContentLoaded', () => {
    let saved = 'id';
    try {
      const stored = localStorage.getItem('portfolio_lang');
      if (stored === 'en' || stored === 'id') saved = stored;
    } catch (e) {}

    document.querySelectorAll('.lang-opt').forEach((btn) => {
      btn.addEventListener('click', () => {
        applyLanguage(btn.getAttribute('data-lang') || 'id');
      });
    });

    if (saved !== 'id') {
      applyLanguage(saved);
    }
  });
})();
