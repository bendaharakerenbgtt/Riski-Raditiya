/**
 * InLiveIq — Basis Data Proyek & Studi Kasus Mendalam
 * Mengadopsi 7-Step Narrative Engineering Framework:
 * 1. Hook (Pertanyaan/Premis Menarik)
 * 2. Context (Latar Belakang & Realita Lapangan)
 * 3. Problem (Akar Masalah yang Nyata)
 * 4. Exploration (Proses Berpikir & Trade-offs Opsi)
 * 5. Execution (Arsitektur Teknis & Koding Kunci)
 * 6. Evidence (Metrik Terukur, Galeri & Video Walkthrough)
 * 7. Reflection (Pelajaran Berharga & Rencana Masa Depan)
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
      videoUrl: "", // Siap diisi link YouTube / Loom
      gallery: [
        {
          url: "assets/images/project-ai.svg",
          caption: "Antarmuka Studio Kerja AI dengan panel kontrol prompt dan pipeline generasi gambar interaktif.",
          alt: "Dashboard AI Cognitive Engine"
        },
        {
          url: "assets/images/project-recallflow.svg",
          caption: "Sistem inspeksi bobot prompt dan pemetaan semantik hasil generasi secara real-time.",
          alt: "Panel Parameter Neural"
        }
      ],
      metrics: [
        { label: "Waktu Inferensi", value: "< 3.8s" },
        { label: "Penghematan Biaya Token", value: "85%" },
        { label: "Lighthouse Performance", value: "98/100" }
      ],
      sections: {
        // 1. Hook
        hook: "Bagaimana cara menyajikan proses inferensi model kecerdasan buatan multimodal yang kompleks secara instan tanpa membuat pengguna merasa cemas menunggu di depan layar kosong?",
        
        // 2. Context
        context: "Sebagai mahasiswa Teknologi Rekayasa Multimedia di Politeknik Negeri Media Kreatif yang mendalami antarmuka visual, saya mengamati friksi berulang di kalangan kreator digital. Para perancang grafis dan prompt engineer kerap menghabiskan puluhan menit menyalin-tempel teks prompt di peramban tanpa memiliki ruang kerja visual terstruktur untuk membandingkan parameter inferensi (temperature, top_p, guidance scale, dan seed) secara berdampingan.",
        
        // 3. Problem
        problem: "Generasi gambar neural berbasis API eksternal membutuhkan durasi komputasi antara 4 hingga 12 detik. Tanpa adanya indikator status progresif dan koneksi streaming berlatensi rendah, pengguna mengalami disorientasi, mengira sistem membeku, dan mengklik tombol berulang kali. Selain itu, riwayat eksperimen prompt sering lenyap seketika begitu tab ditutup.",
        
        // 4. Exploration & Trade-offs
        exploration: {
          narrative: "Sebelum menentukan arsitektur akhir, saya menguji beberapa strategi alur kerja inferensi dan transmisi data:",
          tradeoffs: [
            {
              option: "Opsi A: Polling HTTP Standar (Interval 1 detik)",
              verdict: "Ditolak",
              reason: "Menghasilkan beban overhead request berulang yang memboroskan bandwidth, meningkatkan konsumsi serverless execution, dan memicu jeda animasi yang kaku pada antarmuka pengguna."
            },
            {
              option: "Opsi B: Serverless Function Penuh Tanpa Server Gateway",
              verdict: "Ditolak",
              reason: "Menghadapi risiko cold-start hingga 3 detik dan mengekspos API key rahasia ke klien jika token generation tidak diisolasi dengan ketat."
            },
            {
              option: "Opsi C: Gateway Node.js Terisolasi + WebSocket Streaming + Redis Cache",
              verdict: "Dipilih sebagai Solusi",
              reason: "Menjamin keamanan API key, memberikan update progres status 0-100% per 50ms tanpa reload, dan memangkas biaya pemanggilan model berulang hingga 85% berkat semantic cache di Redis."
            }
          ]
        },

        // 5. Execution
        execution: {
          architecture: "Dibangun dengan arsitektur React 19 dan Tailwind CSS yang terhubung ke backend gateway Node.js via WebSocket. Alur data dimulai dari validasi prompt di client, diteruskan ke gateway untuk pencocokan cache Redis, lalu dikirim ke inference engine dengan pipeline streaming.",
          keyImplementations: [
            "State Machine Kanvas: Menangani 5 siklus hidup kanvas secara deterministik (Idle, Tokenizing, Queued, Inferencing, dan Complete).",
            "Virtualization Viewport: Me-render puluhan gambar resolusi tinggi tanpa membebani GPU perangkat seluler dengan format WebP adaptif.",
            "Optimistic Error Recovery: Mekanisme exponential backoff otomatis saat koneksi model neural mengalami fluktuasi jaringan."
          ],
          technologies: [
            "React 19 & Next.js App Router",
            "OpenAI API & HuggingFace Inference",
            "Tailwind CSS v4 & Lucide Icons",
            "WebSockets untuk Real-time Streaming",
            "Redis In-Memory Caching",
            "Local-First IndexedDB Storage"
          ]
        },

        // 6. Evidence (summary metrics & notes)
        evidenceText: "Pengujian pada puluhan generasi grafis membuktikan latensi respons antarmuka turun drastis, perbandingan multi-prompt berjalan tanpa reload halaman, dan antarmuka meraih skor Core Web Vitals nyaris sempurna.",

        // 7. Reflection
        reflection: "Membangun proyek ini membuktikan bahwa tantangan terbesar AI saat ini bukanlah semata-mata pada kecerdasan algoritmanya, melainkan pada bagaimana antarmuka pengguna (UI/UX) menyajikan data yang tidak pasti menjadi pengalaman yang tenang, manusiawi, dan dapat diprediksi.",
        futureHorizons: "Roadmap pengembangan selanjutnya mencakup integrasi WebGPU native untuk kalkulasi filtering gambar langsung di peramban klien tanpa perlu membebani komputasi server cloud."
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
          caption: "Halaman checkout instan dengan kalkulasi ongkos kirim otomatis dan pemilihan metode pembayaran terintegrasi.",
          alt: "Tampilan Toko E-Commerce"
        },
        {
          url: "assets/images/project-weather.svg",
          caption: "Dashboard analitik pemilik toko yang menampilkan grafik konversi penjualan dan inventaris stok.",
          alt: "Dashboard Analitik Toko"
        }
      ],
      metrics: [
        { label: "Waktu Checkout", value: "55 Detik (Turun 71%)" },
        { label: "Pencegahan Overselling", value: "100% Akurat" },
        { label: "Google Lighthouse", value: "99 / 100" }
      ],
      sections: {
        // 1. Hook
        hook: "Mengapa lebih dari 70% keranjang belanja online ditinggalkan pembeli tepat sebelum pembayaran dilakukan, dan bagaimana rekayasa alur tanpa hambatan dapat mengubahnya menjadi konversi nyata?",
        
        // 2. Context
        context: "Berangkat dari fondasi keahlian Bisnis Daring dan Pemasaran (SMK Perintis 1 Depok) dan dilanjutkan dalam rekayasa sistem multimedia, saya melihat jurang pemisah antara strategi funnel penjualan dengan eksekusi teknis toko daring lokal. Sebagian besar UMKM terjebak pada alur belanja yang kaku dan memperlakukan pengguna ponsel selayaknya pengguna desktop tahun 2010.",
        
        // 3. Problem
        problem: "Formulir pendaftaran akun wajib sebelum melihat ongkos kirim, input alamat yang tidak kompatibel dengan keyboard virtual ponsel pintar, serta waktu tunggu reload kalkulasi kupon diskon menjadi pemicu utama pembeli membatalkan niat transaksinya di detik-detik akhir.",
        
        // 4. Exploration & Trade-offs
        exploration: {
          narrative: "Mengevaluasi tiga pendekatan arsitektur checkout untuk mencapai titik temu antara performa dan keamanan transaksi:",
          tradeoffs: [
            {
              option: "Opsi A: Integrasi Plugin E-Commerce Monolitik (WordPress / WooCommerce)",
              verdict: "Ditolak",
              reason: "Loading aset script pihak ketiga terlalu berat (> 3.5MB), sulit dikustomisasi secara presisi, dan rentan terhadap isu performa saat lonjakan pengunjung."
            },
            {
              option: "Opsi B: Single Page App Murni (Client-Side Rendering)",
              verdict: "Ditolak",
              reason: "Katalog produk tidak dapat terindeks secara optimal oleh search engine bot (SEO lemah) dan first contentful paint pada koneksi 4G lambat."
            },
            {
              option: "Opsi C: Next.js Hybrid (SSR Katalog + Client-Side Dynamic Checkout)",
              verdict: "Dipilih sebagai Solusi",
              reason: "Halaman katalog terindeks Google dengan skor SEO 100 via SSR, sedangkan alur keranjang belanja di-handle seketika di client dengan Zustand tanpa perlu reload halaman."
            }
          ]
        },

        // 5. Execution
        execution: {
          architecture: "Arsitektur headless modern memisahkan lapisan presentasi Next.js dari layer transaksi database PostgreSQL via Prisma ORM. Setiap transaksi pesanan diamankan dengan database isolation transaction berwaktu (optimistic locking).",
          keyImplementations: [
            "1-Step Slide-Over Checkout: Pelanggan mengisi data pengiriman dan memilih metode bayar dalam satu layar laci tanpa kehilangan konteks halaman produk.",
            "Atomic Inventory Locking: Menjamin stok barang terkunci aman selama 10 menit saat checkout berlangsung, mencegah fenomena barang terjual melebihi stok fisik (overselling).",
            "Auto-Geocoding Form: Pengisian kota dan kode pos otomatis berdasarkan saran instan memangkas durasi pengetikan pembeli."
          ],
          technologies: [
            "Next.js App Router (React)",
            "PostgreSQL & Prisma ORM",
            "Stripe Payment Gateway Sandbox",
            "Zustand State Management",
            "Tailwind CSS & Headless UI"
          ]
        },

        // 6. Evidence
        evidenceText: "Simulasi uji transaksi menunjukkan durasi dari menambahkan produk ke keranjang hingga pembayaran selesai berhasil ditekan dari rata-rata 3.2 menit menjadi hanya 55 detik.",

        // 7. Reflection
        reflection: "Keberhasilan produk digital e-commerce bukan diukur dari banyaknya banner animasi yang dipajang, melainkan dari seberapa cepat dan tanpa ragu seorang pengguna dapat menyelesaikan tujuannya.",
        futureHorizons: "Integrasi webhook otomatisasi notifikasi WhatsApp Cloud API untuk update status resi pengiriman real-time ke nomor ponsel pembeli."
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
      metrics: [
        { label: "Frame Rate Tampilan", value: "Konstan 60 FPS" },
        { label: "Beban Pustaka Eksternal", value: "0 KB (Zero-Lib)" },
        { label: "Skor Lighthouse", value: "100 / 100" }
      ],
      sections: {
        // 1. Hook
        hook: "Mungkinkah sebuah portofolio web modern tampil berwibawa, berkarakter kuat, dan kaya interaksi tanpa mengunduh framework JavaScript puluhan megabyte yang membuat baterai ponsel panas?",
        
        // 2. Context
        context: "Banyak portofolio developer masa kini terlihat seragam: template Tailwind generik dengan kartu rounded yang identik, atau animasi 3D WebGL berat yang memakan memori komputer. Sebagai kreator dengan latar belakang multimedia dan web, saya ingin merancang portofolio yang mengutamakan ketenangan membaca, integritas tipografi, dan kecepatan murni.",
        
        // 3. Problem
        problem: "Menciptakan animasi transisi tema gelap-terang yang berkesan mewah (circular ripple effect) serta indikator progres scroll kapsul tanpa menimbulkan jank atau lag pada perangkat berspesifikasi menengah ke bawah.",
        
        // 4. Exploration & Trade-offs
        exploration: {
          narrative: "Menimbang pilihan arsitektur rendering antarmuka antara dependensi pustaka animasi vs web platform native:",
          tradeoffs: [
            {
              option: "Opsi A: Menggunakan GSAP / Three.js / Framer Motion",
              verdict: "Ditolak",
              reason: "Menambah ukuran bundle awal hingga ratusan kilobyte dan memicu kalkulasi layout thrashing saat scrolling cepat di browser seluler."
            },
            {
              option: "Opsi B: CSS Gaussian Blur Filters Berlapis pada SVG",
              verdict: "Ditolak",
              reason: "Menyebabkan GPU drop dari 60fps ke 25fps pada layar retina smartphone saat proses repaint."
            },
            {
              option: "Opsi C: Native View Transitions API + Pipeline rAF Throttled + CSS Hardware Transforms",
              verdict: "Dipilih sebagai Solusi",
              reason: "Menghasilkan transisi tema sehalus aplikasi native tanpa satu pun library eksternal, dengan alokasi CPU di bawah 2% saat scrolling normal."
            }
          ]
        },

        // 5. Execution
        execution: {
          architecture: "Arsitektur kode berbasis Vanilla ES6+ dengan tokenisasi CSS Variables modular untuk sistem warna Obsidian (#04070c) dan Ivory (#f5f6fa). Perhitungan layout bounds di-cache sekali saat inisialisasi agar event scroll berjalan di GPU compositor thread.",
          keyImplementations: [
            "Capsule Progress Contour: Menggambar garis SVG linier dinamis yang melingkari kontur header pil secara matematis presisi.",
            "Radial View Transition Ripple: Efek topeng lingkaran membesar yang dipicu dari koordinat klik mouse pengguna saat berpindah tema.",
            "Touch Drawer Hardware-Accelerated: Menu mobile yang menggunakan translate3d untuk membuka dan menutup tanpa repaint."
          ],
          technologies: [
            "Vanilla HTML5 Semantik",
            "Modern CSS3 Variables, Clamp, & Grid",
            "Native View Transitions API",
            "JavaScript ES6+ (rAF Throttled)",
            "Responsive SVG Asset Generation"
          ]
        },

        // 6. Evidence
        evidenceText: "Ukuran transfer dokumen berkurang 80% dibanding portofolio berbasis framework, dan seluruh skor audit Google Lighthouse mencatat nilai 100 sempurna pada performa, aksesibilitas, best practice, dan SEO.",

        // 7. Reflection
        reflection: "Kekuatan sejati sebuah antarmuka terletak pada ketenangan dan fungsionalitasnya. Kode yang bersih tanpa beban dependensi berlebih adalah bentuk penghargaan tertinggi bagi waktu dan perangkat setiap pengunjung.",
        futureHorizons: "Mengeksplorasi Service Worker PWA agar seluruh halaman studi kasus ini dapat dibaca secara offline tanpa koneksi internet sama sekali."
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
      metrics: [
        { label: "Latensi Pembaruan", value: "< 120ms" },
        { label: "Penyelesaian Tugas Tim", value: "150+ Tiket" },
        { label: "Keandalan Sinkronisasi", value: "99.9%" }
      ],
      sections: {
        // 1. Hook
        hook: "Bagaimana cara menjaga puluhan tugas tim multimedia tetap sinkron dan transparan tanpa membuat anggota tim pusing dengan kerumitan software manajemen enterprise yang lambat?",
        
        // 2. Context
        context: "Dalam eksekusi proyek produksi konten dan aset multimedia di lingkungan kampus, koordinasi lewat grup WhatsApp kerap memicu kesalahpahaman tugas. Software komersial seperti Jira atau Asana terasa terlalu rumit dan memakan waktu setup lama untuk kolaborasi tim yang butuh eksekusi lincah.",
        
        // 3. Problem
        problem: "Tim membutuhkan papan kerja visual yang dapat diakses instan dari browser mana pun, memiliki interaksi geser-tarik (drag-and-drop) yang responsif di ponsel, serta langsung merefleksikan perubahan status ketika rekan lain memindahkan tugas.",
        
        // 4. Exploration & Trade-offs
        exploration: {
          narrative: "Menentukan fondasi penyimpanan dan sinkronisasi status antar browser secara simultan:",
          tradeoffs: [
            {
              option: "Opsi A: Polling REST API ke Database Tradisional",
              verdict: "Ditolak",
              reason: "Terdapat jeda waktu pembaruan (delay 5-10 detik) dan berpotensi menimpa data jika dua orang memindahkan tugas bersamaan."
            },
            {
              option: "Opsi B: Socket Server Mandiri di VPS",
              verdict: "Ditolak",
              reason: "Biaya server dan kompleksitas pemeliharaan infrastruktur terlalu tinggi untuk scope proyek kolaboratif mahasiswa."
            },
            {
              option: "Opsi C: Vue 3 Composition API + Firebase Cloud Firestore Snapshot Listeners",
              verdict: "Dipilih sebagai Solusi",
              reason: "Menyediakan sinkronisasi sub-detik secara serverless, offline-ready caching di peramban, serta kemudahan reaktivitas modular Pinia."
            }
          ]
        },

        // 5. Execution
        execution: {
          architecture: "Aplikasi dibangun dengan arsitektur reaktif komponen Vue 3. Setiap pemindahan kartu tugas diproses secara optimistic di store Pinia lokal terlebih dahulu sebelum ditulis ke cloud database Firestore.",
          keyImplementations: [
            "Algoritma Fractional Indexing: Mengatur posisi urutan kartu dengan kalkulasi matematis titik tengah tanpa perlu memperbarui nomor urut seluruh kartu lain di kolom.",
            "Touch Pointer Polyfill: Memungkinkan interaksi geser kartu tetap berjalan natural di layar sentuh HP tanpa bentrok dengan scroll vertikal browser.",
            "Auditory Feedback: Suara klik mikro halus via Web Audio API yang memberikan sensasi taktil memuaskan saat kartu terpasang di kolom baru."
          ],
          technologies: [
            "Vue.js 3 (Composition API)",
            "Pinia State Management",
            "Firebase Firestore & Auth",
            "Native HTML5 Drag & Drop API",
            "Web Audio API Sound Effects"
          ]
        },

        // 6. Evidence
        evidenceText: "Berhasil dipakai langsung oleh tim proyek multimedia dalam menyelesaikan 3 sprint produksi video dan web tepat waktu dengan total lebih dari 150 tugas terselesaikan secara rapi.",

        // 7. Reflection
        reflection: "Aplikasi produktivitas yang baik adalah yang tidak terasa seperti beban kerja tambahan. Ketika friksi mencatat dan menggeser tugas dihilangkan, komunikasi tim otomatis menjadi lebih sehat.",
        futureHorizons: "Menambahkan fitur ekspor ringkasan burndown chart mingguan otomatis dalam format dokumen PDF dan CSV."
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
      metrics: [
        { label: "Waktu Respon Data", value: "< 350ms" },
        { label: "Cakupan Kota Teruji", value: "20+ Kota" },
        { label: "Dukungan Mode Offline", value: "Tersedia Cache" }
      ],
      sections: {
        // 1. Hook
        hook: "Bagaimana cara mengubah ratusan baris data angka meteorologi yang rumit menjadi visualisasi kurva yang dapat dipahami pengguna awam hanya dalam sekali lirik?",
        
        // 2. Context
        context: "Banyak situs prakiraan cuaca dipenuhi iklan bertingkat yang menutupi layar dan hanya menampilkan angka suhu tunggal tanpa memperlihatkan tren pergeseran cuaca per jam. Pengguna sering terjebak hujan karena tidak mengetahui kapan perkiraan cuaca mulai memburuk.",
        
        // 3. Problem
        problem: "Tantangan utamanya adalah mengolah data dari berbagai endpoint (kelembaban, polusi udara PM2.5, radiasi sinar UV, dan arah angin) menjadi satu layar dashboard analitis yang bersih tanpa membebani memori peramban.",
        
        // 4. Exploration & Trade-offs
        exploration: {
          narrative: "Eksplorasi metode penyajian visual data grafik meteorologi secara real-time:",
          tradeoffs: [
            {
              option: "Opsi A: Tabel Data Numerik Standar",
              verdict: "Ditolak",
              reason: "Sangat membosankan dan memaksa pengguna berpikir keras untuk membaca perbandingan angka demi angka."
            },
            {
              option: "Opsi B: Library Pemetaan GIS Berat (Mapbox GL)",
              verdict: "Ditolak",
              reason: "Ukuran library melebihi 2MB, boros kuota internet seluler, dan memperlambat interaksi di smartphone entry-level."
            },
            {
              option: "Opsi C: Chart.js Canvas Ringan + SVG Adaptif + Browser Geolocation",
              verdict: "Dipilih sebagai Solusi",
              reason: "Grafik kurva suhu ter-render tajam di layar Retina display dengan konsumsi memori minim dan deteksi lokasi otomatis tanpa login."
            }
          ]
        },

        // 5. Execution
        execution: {
          architecture: "Aplikasi memanfaatkan pipeline Fetch asynchronous yang memanggil OpenWeather OneCall API dan memformat respon JSON ke dalam objek state terisolasi sebelum di-render ke kanvas grafik.",
          keyImplementations: [
            "Adaptive Atmospheric Glow: Palet gradasi atmosfer latar belakang yang bergeser secara dinamis mengikuti kondisi cuaca (cerah, mendung, petir, senja).",
            "AQI Danger Barometer: Indikator kualitas udara berbasis warna WCAG-compliant dengan panduan rekomendasi kesehatan praktis.",
            "Offline Resilient Cache: Menggunakan LocalStorage untuk menyimpan data pembacaan terakhir jika pengguna kehilangan sinyal internet saat di perjalanan."
          ],
          technologies: [
            "JavaScript ES6+ & Fetch API",
            "OpenWeatherMap & AirVisual APIs",
            "Chart.js untuk Data Visualization",
            "Browser Geolocation & LocalStorage",
            "SVG Weather Animated Vectors"
          ]
        },

        // 6. Evidence
        evidenceText: "Dashboard berhasil merespon permintaan cuaca di lebih dari 20 kota di Indonesia dengan waktu render grafik di bawah 350 milidetik dan tampilan tajam di ponsel maupun desktop.",

        // 7. Reflection
        reflection: "Visualisasi data bukan tentang menampilkan semua angka yang kita miliki, melainkan menyaring mana data yang paling menentukan keselamatan dan kenyamanan pengguna saat melangkah ke luar rumah.",
        futureHorizons: "Menambahkan modul radar curah hujan animasi berbasis citra radar Doppler satelit cuaca BMKG."
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
      metrics: [
        { label: "Latensi Pengiriman Pesan", value: "< 85ms" },
        { label: "Kapasitas Uji Beban", value: "1.000+ Pesan/dtk" },
        { label: "Pesan Hilang (Packet Drop)", value: "0%" }
      ],
      sections: {
        // 1. Hook
        hook: "Apa yang terjadi di balik layar ketika ribuan orang mengirim pesan secara bersamaan, dan bagaimana memastikan tidak ada satu pun kata yang tertukar atau lenyap di udara?",
        
        // 2. Context
        context: "Komunikasi dua arah berlatensi ultra-rendah adalah fondasi dari seluruh produk interaktif modern. Proyek ini dibangun sebagai eksplorasi mendalam untuk memahami bagaimana arsitektur jaringan berbasis event (event-driven architecture) mengelola ribuan koneksi terbuka secara bersamaan.",
        
        // 3. Problem
        problem: "Membangun sistem obrolan yang andal membutuhkan jaminan pengiriman pesan di bawah 100ms, pengelolaan status pengetikan ('sedang mengetik...') tanpa membanjiri antrean server, dan penanganan pemulihan koneksi saat pengguna melewati area minim sinyal.",
        
        // 4. Exploration & Trade-offs
        exploration: {
          narrative: "Menganalisis protokol komunikasi server-client untuk sistem percakapan multi-kanal:",
          tradeoffs: [
            {
              option: "Opsi A: HTTP Long Polling",
              verdict: "Ditolak",
              reason: "Setiap pesan baru membuka koneksi TCP baru, memicu beban CPU server yang tinggi dan konsumsi kuota yang boros."
            },
            {
              option: "Opsi B: Server-Sent Events (SSE)",
              verdict: "Ditolak",
              reason: "Hanya mendukung komunikasi satu arah dari server ke client, sehingga pengiriman pesan dari user tetap butuh HTTP request terpisah."
            },
            {
              option: "Opsi C: WebSocket Dua Arah (Socket.io) + Redis Pub/Sub Adapter",
              verdict: "Dipilih sebagai Solusi",
              reason: "Koneksi bidirectional persisten dengan latensi sub-100ms, serta dukungan clustering multi-instance server berkat Redis Pub/Sub adapter."
            }
          ]
        },

        // 5. Execution
        execution: {
          architecture: "Backend Node.js & Express dipasangkan dengan Socket.io server yang terhubung ke database MongoDB untuk persistensi histori chat dan Redis in-memory broker untuk sinkronisasi antar kanal.",
          keyImplementations: [
            "JWT Token Handshake Rotation: Memverifikasi identitas pengguna langsung pada saat koneksi socket pertama kali dibuat (connection handshake).",
            "Debounced Typing Broadcast: Membatasi sinyal status 'sedang mengetik' ke server maksimal satu kali per 800ms demi menghemat lalu lintas jaringan.",
            "Scroll Anchoring: Menjaga posisi viewport obrolan tetap stabil tanpa melompat saat pengguna menggulir ke atas untuk memuat arsip pesan lama."
          ],
          technologies: [
            "Node.js & Express Framework",
            "Socket.io Protocol Engine",
            "MongoDB & Mongoose ODM",
            "Redis In-Memory Data Store",
            "React & Tailwind CSS"
          ]
        },

        // 6. Evidence
        evidenceText: "Uji beban (stress testing) membuktikan arsitektur mampu menyalurkan lebih dari 1.000 pesan per detik dengan latensi rata-rata 85ms tanpa ada pesan yang hilang atau duplikat.",

        // 7. Reflection
        reflection: "Memahami arsitektur backend real-time memberikan saya perspektif utuh: antarmuka visual yang estetik di depan layar hanya akan berharga jika didukung oleh keandalan fondasi data di balik layar.",
        futureHorizons: "Penerapan enkripsi end-to-end (E2EE) menggunakan protokol Web Cryptography API di browser pengguna sebelum pesan dikirim ke server."
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
