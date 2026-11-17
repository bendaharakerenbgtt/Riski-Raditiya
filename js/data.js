/**
 * InLiveIq — Basis Data Proyek & Studi Kasus Mendalam
 * 6 Proyek Unggulan dengan Artikel Komprehensif, Media Galeri & Video Walkthrough.
 */

const InLiveIqData = {
  projects: [
    {
      id: "ai-cognitive-engine",
      title: "AI Cognitive Engine",
      subtitle: "Generator gambar dan analisis kognitif cerdas dengan pemrosesan model neural real-time serta optimasi latensi rendah.",
      category: "Kecerdasan Buatan & Web App",
      featured: true,
      year: "2026",
      status: "Aktif & Dalam Pengembangan",
      summary: "Platform eksplorasi generative AI berbasis web yang mengubah instruksi prompt multimodal menjadi aset grafis beresolusi tinggi dengan feedback streaming visual.",
      heroImage: "assets/images/project-ai.svg",
      tags: ["React 19", "OpenAI API", "Tailwind CSS", "WebSockets", "Node.js"],
      githubUrl: "https://github.com/bendaharakerenbgtt",
      liveUrl: "https://github.com/bendaharakerenbgtt",
      videoUrl: "", // Siap diisi link YouTube/Loom/Embed
      gallery: [
        {
          url: "assets/images/project-ai.svg",
          caption: "Antarmuka Studio Kerja AI dengan panel kontrol prompt dan pipeline generasi gambar interaktif.",
          alt: "Dashboard AI Cognitive Engine"
        },
        {
          url: "assets/images/project-recallflow.svg",
          caption: "Sistem inspeksi bobot prompt dan pemetaan semantik hasil generasi.",
          alt: "Panel Parameter Neural"
        }
      ],
      sections: {
        overview: "AI Cognitive Engine adalah platform web eksperimental yang dibangun untuk menjembatani model visi generatif dengan alur kerja kreator digital. Alih-alih antarmuka obrolan teks standar, platform ini mengadopsi format kanvas modular di mana prompt, parameter latensi (temperature, top_p, seed), dan variasi gambar dapat dievaluasi secara berdampingan tanpa reload.",
        background: "Sebagai mahasiswa Teknologi Rekayasa Multimedia di Politeknik Negeri Media Kreatif, saya sering mengamati friksi antara kreator visual dengan antarmuka AI yang kaku. Banyak prompt engineer menghabiskan waktu bolak-balik menyalin prompt tanpa bisa membandingkan perbedaan parameter visual secara terstruktur. Proyek ini lahir dari keinginan menciptakan workbench yang ramah desainer grafis dan multimedia developer.",
        problem: "Generasi AI gambar biasanya membutuhkan waktu tunggu 4 hingga 12 detik. Tanpa indikator progresif dan streaming status yang presisi, pengguna mengalami disorientasi dan mengklik tombol berulang kali. Selain itu, penyimpanan riwayat prompt sering kali hilang saat peramban ditutup.",
        goals: [
          "Menciptakan antarmuka studio kanvas yang responsif di desktop maupun layar sentuh tablet.",
          "Menerapkan arsitektur streaming WebSocket untuk memberikan progres latensi setiap proses inferensi neural.",
          "Menyediakan sistem bookmark dan ekspor aset resolusi tinggi lengkap dengan metadata prompt (EXIF/JSON).",
          "Mencapai skor aksesibilitas dan performa Core Web Vitals 95+ dengan rendering berbasis CSS modern."
        ],
        planning: "Proses diawali dengan studi benchmarking antarmuka Midjourney, Leonardo, dan DALL-E 3. Dari sana dirancang diagram state machine untuk menangani 5 kondisi kanvas: Idle, Tokenizing, Queued, Inferencing (0-100%), dan Post-Processing. Desain UI difokuskan pada palet gelap monokromatik agar warna gambar yang dihasilkan AI tetap menjadi fokus visual utama.",
        implementation: "Dibangun dengan React dan Tailwind CSS, menggunakan custom hooks untuk mengelola state asynchronous. Komunikasi API diisolasi melalui backend gateway Node.js dengan caching Redis untuk prompt berulang, memangkas biaya token dan mempercepat waktu muat variasi yang sama hingga 85%.",
        technologies: [
          "React 19 & Next.js App Router",
          "OpenAI API & HuggingFace Inference",
          "Tailwind CSS v4 & Lucide Icons",
          "WebSockets untuk Real-time Streaming",
          "Local-First IndexedDB Caching"
        ],
        challenges: [
          "Manajemen Memori pada Galeri Beresolusi Tinggi: Me-render puluhan gambar resolusi 2048px dalam satu sesi membuat tab browser mobile rentan crash. Solusinya adalah menerapkan virtualization list dan format WebP terkompresi adaptif sesuai viewport.",
          "Handling Error Timeout: Koneksi API neural yang kadang fluktuatif diatasi dengan strategi exponential backoff dan optimistic queue status pada UI."
        ],
        results: "Platform berhasil memproses ratusan variasi grafis dengan latensi streaming rata-rata di bawah 3.8 detik. Efisiensi perbandingan prompt meningkat drastis berkat antarmuka side-by-side comparison.",
        reflection: "Membangun proyek ini memperdalam pemahaman saya tentang bagaimana desain interaksi (UI/UX) memegang peranan krusial dalam membuat teknologi kecerdasan buatan terasa manusiawi, intuitif, dan tidak mengintimidasi pengguna."
      }
    },
    {
      id: "ecommerce-platform",
      title: "E-Commerce Platform Modern",
      subtitle: "Arsitektur toko online terintegrasi dengan checkout instan, manajemen katalog dinamis, dan analitik konversi penjualan.",
      category: "Full Stack & E-Commerce",
      featured: true,
      year: "2025",
      status: "Studi Kasus Selesai",
      summary: "Sistem e-commerce tangguh dengan arsitektur headless, pembayaran multi-gateway, dan antarmuka belanja berkecepatan tinggi yang dioptimalkan untuk mobile-first.",
      heroImage: "assets/images/project-ecommerce.svg",
      tags: ["Next.js", "Stripe Gateway", "PostgreSQL", "Prisma ORM", "Zustand"],
      githubUrl: "https://github.com/bendaharakerenbgtt",
      liveUrl: "https://github.com/bendaharakerenbgtt",
      videoUrl: "",
      gallery: [
        {
          url: "assets/images/project-ecommerce.svg",
          caption: "Halaman checkout instan dengan kalkulasi ongkos kirim otomatis dan pemilihan metode pembayaran.",
          alt: "Tampilan Toko E-Commerce"
        },
        {
          url: "assets/images/project-weather.svg",
          caption: "Dashboard analitik pemilik toko yang menampilkan grafik konversi penjualan dan inventaris stok.",
          alt: "Dashboard Analitik Toko"
        }
      ],
      sections: {
        overview: "Proyek toko online modern yang menggabungkan kemudahan navigasi belanja konsumen dengan dashboard analitik komprehensif bagi pemilik bisnis. Memanfaatkan latar belakang saya di Bisnis Daring dan Pemasaran (SMK Perintis 1 Depok), platform ini dirancang dengan prinsip konversi funnel penjualan yang ketat dan minim hambatan (frictionless checkout).",
        background: "Banyak platform e-commerce lokal memiliki alur checkout yang berbelit-belit: pendaftaran akun wajib sebelum melihat ongkir, formulir pengiriman yang tidak ramah keyboard ponsel, dan proses loading lambat. Hal ini mengakibatkan tingkat cart abandonment mencapai 70%.",
        problem: "Konsumen modern mengutamakan kecepatan dan transparansi total biaya sejak halaman produk. Tantangan utamanya adalah menyajikan kalkulasi pajak, diskon kupon, dan estimasi kurir pengiriman secara instan tanpa perlu reload halaman.",
        goals: [
          "Membangun alur checkout satu langkah (1-step frictionless checkout) yang memangkas waktu transaksi hingga 60%.",
          "Mendukung pembayaran multi-channel (QRIS, Kartu Kredit, Virtual Account) dengan webhook konfirmasi instan.",
          "Menerapkan SEO terstruktur (JSON-LD Schema) untuk setiap produk agar otomatis terindeks kaya di Google Search.",
          "Desain antarmuka responsif dengan target waktu muat pertama (LCP) di bawah 1.2 detik pada jaringan 4G."
        ],
        planning: "Alur belanja dipetakan ke dalam micro-interactions: Drawer cart yang dapat diakses dari mana saja, validasi form real-time dengan pesan error berbahasa manusia, dan konfirmasi pesanan via WhatsApp/Email otomatis.",
        implementation: "Front-end memanfaatkan Next.js dengan SSR untuk SEO optimal dan Client Components untuk keranjang belanja interaktif yang didukung Zustand. Database PostgreSQL dikelola menggunakan Prisma ORM dengan indeks relasi produk yang cepat.",
        technologies: [
          "Next.js App Router (React)",
          "PostgreSQL & Prisma ORM",
          "Stripe & Payment Gateway Sandbox",
          "Zustand State Management",
          "Tailwind CSS & Headless UI"
        ],
        challenges: [
          "Sinkronisasi Stok Real-time saat Puncak Flash Sale: Menghindari masalah overselling ketika beberapa pembeli checkout di detik yang sama. Dipecahkan menggunakan atomic database transactions dan pesanan berkunci waktu (optimistic locking).",
          "Performa Filter Produk: Penggunaan debounce search dan server action filtering memastikan pencarian produk tetap mulus tanpa jeda lag."
        ],
        results: "Pengujian simulasi transaksi menunjukkan waktu checkout berhasil dipangkas dari 3.2 menit menjadi hanya 55 detik. Skor Lighthouse untuk Performance, Accessibility, Best Practices, dan SEO meraih rata-rata 98/100.",
        reflection: "Proyek ini membuktikan bahwa sinergi antara strategi pemasaran digital (funnel konversi) dan rekayasa kode yang bersih adalah kunci utama keberhasilan sebuah produk digital bernilai bisnis tinggi."
      }
    },
    {
      id: "editorial-portfolio",
      title: "Editorial Portfolio Web",
      subtitle: "Ruang portofolio tenang bernuansa monokromatik dengan transisi organik tanpa dependensi eksternal berat.",
      category: "Frontend Architecture & UI/UX",
      featured: true,
      year: "2026",
      status: "Rilis Produksi",
      summary: "Website portofolio personal dengan pendekatan estetika editorial, arsitektur 60fps GPU-accelerated, serta sistem tema ganda (Obsidian Dark / Ivory Light).",
      heroImage: "assets/images/project-portfolio.svg",
      tags: ["HTML5 Semantik", "Modern CSS", "Vanilla JavaScript", "View Transitions", "Responsive"],
      githubUrl: "https://github.com/bendaharakerenbgtt/Riski-Raditiya",
      liveUrl: "https://github.com/bendaharakerenbgtt/Riski-Raditiya",
      videoUrl: "",
      gallery: [
        {
          url: "assets/images/project-portfolio.svg",
          caption: "Eksplorasi tata letak tipografi editorial monokromatik dengan hierarki visual yang tajam dan nyaman dibaca.",
          alt: "Tampilan Editorial Portfolio"
        },
        {
          url: "assets/images/fan-white-glow.svg",
          caption: "Aksen visual geometris tradisional bercahaya putih yang memberikan karakter autentik personal.",
          alt: "Aksen Visual Kipas"
        }
      ],
      sections: {
        overview: "Website portofolio yang sedang Anda jelajahi ini dirancang untuk mematahkan stereotip website developer yang bising dengan efek 3D berlebihan atau kartu-kartu generik. Dengan mengutamakan kejelasan tipografi editorial, performa kilat, dan tata letak yang bernapas lega, situs ini memancarkan profesionalisme dan kematangan desain.",
        background: "Banyak portofolio kreator masa kini terjebak menggunakan template framework raksasa seberat puluhan megabyte yang lambat dimuat dan boros baterai HP. Sebagai calon sarjana terapan multimedia yang berfokus pada web, saya ingin membuktikan bahwa kode murni yang dirancang presisi jauh lebih elegan, abadi, dan bertenaga.",
        problem: "Menciptakan antarmuka yang terasa sangat halus (silky smooth) di 60fps pada semua jenis peramban tanpa mengorbankan kedalaman visual atau membuat GPU perangkat seluler kepanasan.",
        goals: [
          "Menghilangkan seluruh dependensi eksternal pihak ketiga (Zero Heavy Libraries).",
          "Menerapkan View Transitions API dengan efek circular ripple mask saat mengganti tema Dark/Light.",
          "Memastikan waktu muat awal mendekati instan (< 0.5 detik) dan 100% responsif di semua ukuran layar (360px hingga 1540px).",
          "Menyajikan dokumentasi studi kasus terstruktur recruiter-grade yang mudah dipelajari calon rekan kolaborasi."
        ],
        planning: "Merancang fondasi CSS Tokens untuk palet warna Deep Obsidian (#04070c) dan Warm Ivory (#f5f6fa). Mengeliminasi semua filter Gaussian blur bertingkat pada SVG dan menggantikannya dengan native hardware-accelerated radial gradients.",
        implementation: "Menggabungkan pemantauan scroll dengan pipeline requestAnimationFrame tunggal, caching layout metrics, dan scroll-margin dinamis agar header melayang berbentuk kapsul selalu presisi.",
        technologies: [
          "Vanilla HTML5 Semantik",
          "Modern CSS3 Variables, Clamp, & Grid",
          "Native View Transitions API",
          "JavaScript ES6+ (rAF Throttled)",
          "Responsive SVG Asset Generation"
        ],
        challenges: [
          "Sinkronisasi Jalur Scroll Progress Kapsul: Membuat indikator garis progress SVG mengikuti lengkungan border radius 9999px secara tepat di semua resolusi layar.",
          "Kontras Ganda Antara Dark dan Light Mode: Menjamin semua teks dan ikon memiliki rasio kontras di atas 7:1 sesuai standar AAA WCAG."
        ],
        results: "Beban transfer aset berkurang hingga 80%, skor Lighthouse konsisten 100 di Desktop & Mobile, serta pengalaman interaksi yang licin dan nyaman tanpa stuttering.",
        reflection: "Kekuatan sejati sebuah antarmuka terletak pada ketenangan dan fungsionalitasnya. Kode yang bersih adalah bentuk penghormatan paling tulus kepada setiap orang yang meluangkan waktu mengunjungi karya kita."
      }
    },
    {
      id: "task-flow-kanban",
      title: "Task Flow Kanban",
      subtitle: "Manajemen alur kerja kolaboratif real-time dengan sinkronisasi status tanpa jeda dan dukungan drag-and-drop intuitif.",
      category: "Aplikasi Kolaboratif & Produktivitas",
      featured: false,
      year: "2025",
      status: "Selesai & Digunakan Tim",
      summary: "Papan tugas interaktif bergaya Kanban untuk tim proyek multimedia dan developer dengan pembaruan instan, penugasan tiket, dan metrik sprint.",
      heroImage: "assets/images/project-task.svg",
      tags: ["Vue 3", "Pinia", "Firebase Firestore", "HTML5 Drag-Drop", "CSS Grid"],
      githubUrl: "https://github.com/bendaharakerenbgtt",
      liveUrl: "https://github.com/bendaharakerenbgtt",
      videoUrl: "",
      gallery: [
        {
          url: "assets/images/project-task.svg",
          caption: "Papan Kanban interaktif dengan kolom To Do, In Progress, dan Done beserta kartu tugas fleksibel.",
          alt: "Tampilan Kanban Board"
        }
      ],
      sections: {
        overview: "Aplikasi manajemen tugas visual yang dirancang untuk mengorganisasi alur kerja tim kreatif secara visual. Mengedepankan kemudahan pemindahan kartu tugas antar status dengan feedback suara dan animasi mikro yang memuaskan.",
        background: "Dalam kerja tim pembuatan konten dan proyek multimedia kampus, koordinasi tenggat waktu sering berantakan jika hanya menggunakan grup chat. Aplikasi komersial seperti Jira terasa terlalu rumit untuk tim kecil, sementara Trello memiliki keterbatasan kustomisasi alur kerja lokal.",
        problem: "Tim membutuhkan papan status yang ringan, dapat dibuka di browser tanpa login yang berbelit, dan langsung tersinkronisasi ketika ada anggota yang memindahkan kartu tugas.",
        goals: [
          "Membangun interaksi drag-and-drop mulus berbasis native HTML5 API tanpa library pihak ketiga yang berat.",
          "Menerapkan real-time listener cloud database agar perubahan posisi kartu langsung terlihat oleh seluruh rekan tim seketika.",
          "Menyediakan sistem filter tag prioritas (Tinggi, Sedang, Rendah) dan batas waktu otomatis.",
          "Desain antarmuka modular yang tetap mudah digeser pada layar sentuh smartphone."
        ],
        planning: "Merancang data model relasional bersarang untuk Boards, Columns, Cards, dan Comments. Menyiapkan optimistic UI updates sehingga pemindahan kartu terasa instan sebelum data selesai ditulis ke server.",
        implementation: "Menggunakan Vue 3 Composition API untuk reaktivitas komponen yang modular, Pinia sebagai single source of truth, dan Firebase Firestore sebagai backend real-time database.",
        technologies: [
          "Vue.js 3 (Composition API)",
          "Pinia State Management",
          "Firebase Firestore & Auth",
          "HTML5 Drag and Drop API",
          "Custom Sound Effects Web Audio API"
        ],
        challenges: [
          "Touch Event Drag-and-Drop pada Layar Ponsel: Native HTML5 drag-and-drop memiliki keterbatasan pada peramban mobile. Dibuat polyfill pointer events yang menerjemahkan sentuhan jari menjadi aksi seret kartu yang presisi.",
          "Konflik Urutan Kartu Bersamaan: Menerapkan algoritma fractional indexing untuk mengurutkan posisi kartu tanpa perlu memperbarui indeks seluruh kartu lain di kolom."
        ],
        results: "Berhasil digunakan oleh tim proyek dalam menyelesaikan 3 sprint produksi video dan web multimedia tepat waktu dengan total lebih dari 150 tugas terselesaikan.",
        reflection: "Kunci dari aplikasi produktivitas adalah kecepatan eksekusi. Ketika friksi mencatat dan memindahkan tugas dihilangkan, produktivitas tim secara alami akan melonjak."
      }
    },
    {
      id: "atmos-weather-radar",
      title: "Atmos Weather Radar",
      subtitle: "Visualisasi metrik meteorologi dan radar kualitas udara 24 jam berbasis data satelit global terintegrasi.",
      category: "Visualisasi Data & API Integrasi",
      featured: false,
      year: "2025",
      status: "Selesai",
      summary: "Dashboard cuaca analitis yang menyajikan informasi iklim mikro, indeks kualitas udara (AQI), dan prakiraan cuaca 7 hari secara grafis dan interaktif.",
      heroImage: "assets/images/project-weather.svg",
      tags: ["REST API", "Chart.js", "GeoJSON Mapping", "OpenWeather", "CSS Backdrop"],
      githubUrl: "https://github.com/bendaharakerenbgtt",
      liveUrl: "https://github.com/bendaharakerenbgtt",
      videoUrl: "",
      gallery: [
        {
          url: "assets/images/project-weather.svg",
          caption: "Dashboard radar cuaca dengan grafik tren suhu dan visualisasi arah angin waktu nyata.",
          alt: "Tampilan Atmos Weather Radar"
        }
      ],
      sections: {
        overview: "Aplikasi visualisasi data cuaca yang mengubah angka-angka mentah meteorologi menjadi diagram visual yang mudah dipahami oleh pengguna umum, traveler, dan penggemar aktivitas luar ruangan.",
        background: "Sebagian besar aplikasi cuaca default hanya menyajikan suhu saat ini tanpa konteks tren beberapa jam ke depan, atau dipenuhi iklan banner yang mengganggu kenyamanan pengguna saat butuh info cepat sebelum bepergian.",
        problem: "Menyajikan data cuaca kompleks (kelembaban, radiasi UV, titik embun, tekanan udara, kecepatan angin) ke dalam satu layar ringkas tanpa membuat pengguna merasa kewalahan oleh data.",
        goals: [
          "Integrasi otomatis dengan Geolocation API untuk mendeteksi kota pengguna secara instan dan akurat.",
          "Visualisasi grafik tren suhu 24 jam dan curah hujan menggunakan visual data chart interaktif.",
          "Menyediakan panduan peringatan kualitas udara (AQI) berbasis warna intuitif yang mudah dibaca sepintas.",
          "Dukungan pencarian kota global dengan fitur autocomplete dan riwayat pencarian tersimpan lokal."
        ],
        planning: "Membagi antarmuka menjadi 3 zona informasi: Kartu Pahlawan (kondisi saat ini & visual cuaca adaptif), Garis Tren 24 Jam (grafik kurva halus), dan Grid Matriks Metrik Lingkungan.",
        implementation: "Mengambil data dari OpenWeatherMap OneCall API, memetakan ikon vektor SVG animasi sesuai kode kondisi cuaca, dan merender grafik performa tinggi dengan Chart.js yang dioptimalkan untuk rasio retina display.",
        technologies: [
          "JavaScript ES6+ & Fetch API",
          "OpenWeatherMap & AirVisual APIs",
          "Chart.js untuk Data Visualization",
          "Browser Geolocation & LocalStorage",
          "SVG Weather Animated Vectors"
        ],
        challenges: [
          "Visual Cuaca Dinamis Sesuai Waktu dan Kondisi: Membuat transisi latar belakang yang berubah halus antara pagi, siang terik, senja, malam berbintang, atau saat badai petir tanpa merusak keterbacaan teks angka.",
          "Konektivitas Terputus: Menyiapkan cache data cuaca terakhir dan pesan penanganan koneksi offline yang informatif."
        ],
        results: "Aplikasi memberikan pembaruan data cuaca dalam waktu respon di bawah 400ms dan telah diuji akurasinya di lebih dari 20 kota di Indonesia.",
        reflection: "Proyek ini mempertajam keterampilan saya dalam mengolah data JSON mentah dari external API dan menampilkannya menjadi karya desain informasi yang bernilai guna tinggi bagi kehidupan sehari-hari."
      }
    },
    {
      id: "nexus-realtime-network",
      title: "Nexus Realtime Network",
      subtitle: "Arsitektur jejaring percakapan multi-kanal dengan sistem websocket terdistribusi dan enkripsi pesan.",
      category: "Backend & Komunikasi Real-time",
      featured: false,
      year: "2024",
      status: "Selesai",
      summary: "Aplikasi pesan instan berbasis web berlatensi rendah yang mendukung obrolan grup terstruktur, ruang diskusi bertopik, dan indikator kehadiran pengguna aktif.",
      heroImage: "assets/images/project-social.svg",
      tags: ["MERN Stack", "Socket.io", "Redis", "JWT Auth", "Node.js"],
      githubUrl: "https://github.com/bendaharakerenbgtt",
      liveUrl: "https://github.com/bendaharakerenbgtt",
      videoUrl: "",
      gallery: [
        {
          url: "assets/images/project-social.svg",
          caption: "Antarmuka percakapan multi-kanal dengan penunjuk status online, pembagian berkas, dan ruang pesan terorganisir.",
          alt: "Tampilan Nexus Realtime Network"
        }
      ],
      sections: {
        overview: "Platform komunikasi percakapan modern yang dibangun untuk menunjang kolaborasi grup secara terstruktur, dilengkapi kanal berbasis topik, pesan privat dua arah, dan pengiriman notifikasi instan.",
        background: "Mempelajari protokol jaringan dan komunikasi dua arah (bidirectional) adalah pilar fundamental dalam rekayasa multimedia modern. Proyek ini dibangun sebagai riset mendalam tentang bagaimana arsitektur event-driven bekerja di skala aplikasi percakapan nyata.",
        problem: "Membangun sistem chat yang andal memerlukan sinkronisasi pesan dengan latensi sub-detik, penanganan status 'typing...' tanpa membanjiri server, dan jaminan pesan tidak hilang saat koneksi pengguna sempat terputus.",
        goals: [
          "Mencapai latensi pengiriman pesan di bawah 150ms menggunakan protokol Socket.io WebSocket.",
          "Menerapkan sistem autentikasi aman berbasis JSON Web Token (JWT) dengan refresh token rotation.",
          "Mendukung kanal publik, obrolan privat terenkripsi, dan indikator pengguna online/offline real-time.",
          "Penyimpanan riwayat obrolan tak terbatas dengan pagination infinite scroll yang ringan."
        ],
        planning: "Merancang skema event Socket.io untuk join_room, message_sent, typing_indicator, dan disconnect. Memanfaatkan Redis sebagai message broker untuk mendukung skalabilitas multi-instance server.",
        implementation: "Dibangun dengan MongoDB untuk penyimpanan pesan fleksibel, Express.js dan Node.js di sisi backend, serta React di sisi antarmuka pengguna untuk interaksi pesan yang reaktif.",
        technologies: [
          "Node.js & Express Framework",
          "Socket.io Engine",
          "MongoDB & Mongoose",
          "Redis In-Memory Data Store",
          "React & Tailwind CSS"
        ],
        challenges: [
          "Scaling WebSocket Connections: Menangani ratusan koneksi socket aktif tanpa kehabisan thread memori. Diatasi dengan clustering process dan pub/sub Redis.",
          "Scroll Position Restoration: Memastikan posisi jendela chat tetap stabil saat pengguna menggulir ke atas untuk memuat riwayat pesan lama (infinite scroll)."
        ],
        results: "Pengujian beban (load testing) membuktikan sistem mampu menangani lebih dari 1.000 pesan per detik dengan waktu pengiriman rata-rata 85ms tanpa ada pesan yang terduplikasi.",
        reflection: "Memahami rekayasa backend real-time memberikan saya perspektif utuh sebagai pengembang multimedia: keindahan antarmuka di layar hanya akan bersinar jika ditopang oleh arsitektur data yang kokoh dan berkinerja tinggi."
      }
    }
  ],

  insights: [
    {
      id: "collectors-fallacy-synthesis",
      title: "Jebakan Kolektor dan Seni Sintesis Aktif",
      subtitle: "Mengapa menimbun tautan bacaan dan menyorot paragraf memberi kita ilusi pemahaman—dan bagaimana beralih ke sintesis mandiri.",
      category: "Pembelajaran",
      date: "14 Oktober 2026",
      readTime: "5 menit baca",
      summary: "Mengumpulkan informasi terasa seperti sebuah kemajuan, tetapi pemahaman nyata baru dimulai saat kita memaksa diri mengartikulasikan kembali gagasan tersebut dengan bahasa kita sendiri.",
      heroImage: "assets/images/insight-synthesis.svg"
    }
  ]
};

function getProjectById(id) {
  if (!id) return InLiveIqData.projects[0];
  const cleanId = id.toLowerCase().trim();
  
  // Direct match
  const direct = InLiveIqData.projects.find(p => p.id === cleanId);
  if (direct) return direct;
  
  // Alias mapping untuk link lama
  const aliasMap = {
    'recallflow': 'ai-cognitive-engine',
    'cognitive-note-engine': 'ai-cognitive-engine',
    'percept': 'ecommerce-platform',
    'percept-cognitive-ui': 'ecommerce-platform',
    'curio': 'editorial-portfolio',
    'curio-mental-models': 'editorial-portfolio',
    'ai': 'ai-cognitive-engine',
    'ecommerce': 'ecommerce-platform',
    'portfolio': 'editorial-portfolio',
    'task': 'task-flow-kanban',
    'weather': 'atmos-weather-radar',
    'social': 'nexus-realtime-network'
  };

  const targetId = aliasMap[cleanId] || cleanId;
  return InLiveIqData.projects.find(p => p.id === targetId) || InLiveIqData.projects[0];
}

function getRelatedProjects(currentId, count = 2) {
  return InLiveIqData.projects.filter(p => p.id !== currentId).slice(0, count);
}
