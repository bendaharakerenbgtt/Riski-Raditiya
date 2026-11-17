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
      id: "solecare",
      title: "Solecare (Soleful Soaks)",
      subtitle: "Sistem manajemen laundry dan perawatan sepatu dengan pelacakan resi mandiri, cetak nota PDF instan, dan kontrol status antrean.",
      category: "Aplikasi Bisnis & Web App",
      featured: true,
      year: "2026",
      status: "Aktif & Digunakan",
      summary: "Aplikasi web untuk usaha perawatan sepatu yang memudahkan kasir mencatat pesanan, mencetak nota digital/PDF, serta memberi pelanggan akses cek status cucian secara mandiri.",
      heroImage: "assets/images/project-ecommerce.svg",
      tags: ["React 18", "React Router v6", "jsPDF", "html2canvas", "CSS3"],
      githubUrl: "https://github.com/solefuladmin-dot/Soleful-Soaks",
      liveUrl: "https://github.com/solefuladmin-dot/Soleful-Soaks",
      videoUrl: "",
      gallery: [
        {
          url: "assets/images/project-ecommerce.svg",
          caption: "Antarmuka kasir dan pelacakan resi pelanggan yang responsif di layar HP maupun desktop.",
          alt: "Dashboard Solecare"
        },
        {
          url: "assets/images/project-task.svg",
          caption: "Manajemen status pengerjaan sepatu dari antrean masuk, pencucian, pengeringan, hingga siap diambil.",
          alt: "Status Antrean Solecare"
        }
      ],
      metrics: [
        { label: "Chat Status Manual", value: "Turun ~75%" },
        { label: "Cetak Nota PDF", value: "1 Klik Instan" },
        { label: "Akses Pelanggan", value: "24/7 Mandiri" }
      ],
      sections: {
        hook: "Bagaimana cara memastikan status cucian puluhan pasang sepatu per hari tetap akurat tanpa membuat staf kasir tenggelam dalam chat WhatsApp yang menanyakan 'sepatu saya sudah selesai belum?'",
        context: "Usaha jasa cuci dan perawatan sepatu memiliki alur pengerjaan bertahap (deep clean, unyellowing, repaint) yang memakan waktu beberapa hari. Selama ini, pencatatan masih mengandalkan nota kertas fisik dan konfirmasi manual lewat chat.",
        problem: "Pelanggan sering menanyakan progres cuciannya lewat WhatsApp, sementara kasir harus membongkar tumpukan nota fisik di rak gudang. Hal ini memicu antrean lambat dan risiko salah ambil barang saat jam sibuk akhir pekan.",
        exploration: {
          narrative: "Dalam merancang sistem ini, saya membandingkan beberapa pendekatan agar ringan dan langsung bisa dipakai operasional toko:",
          tradeoffs: [
            {
              option: "Opsi A: Spreadsheet Manual + Share Link",
              verdict: "Ditolak",
              reason: "Berisiko data terhapus tidak sengaja, tampilan di HP berantakan, dan tidak bisa mencetak nota resmi otomatis."
            },
            {
              option: "Opsi B: Aplikasi Desktop Berat (Electron)",
              verdict: "Ditolak",
              reason: "Tidak bisa diakses fleksibel dari HP kasir atau pelanggan yang ingin mengecek status dari rumah."
            },
            {
              option: "Opsi C: React 18 SPA + React Router + jsPDF",
              verdict: "Dipilih sebagai Solusi",
              reason: "Cepat, responsif di HP maupun laptop kasir, dan bisa langsung mengekspor nota transaksi ke PDF siap cetak atau kirim WhatsApp."
            }
          ]
        },
        execution: {
          architecture: "Dibangun menggunakan React 18 dengan navigasi React Router v6 yang memisahkan halaman input kasir, daftar antrean aktif, dan halaman cek resi. Modul ekspor nota memanfaatkan html2canvas dan jsPDF.",
          keyImplementations: [
            "Generator Nota PDF Otomatis: Mengubah tampilan ringkasan pesanan menjadi file PDF rapi dalam satu klik untuk dibagikan ke pelanggan.",
            "Pelacakan Status Bertahap: Memudahkan tim memindahkan status pengerjaan dari 'Diterima', 'Proses Cuci', hingga 'Siap Diambil'.",
            "Antarmuka Mobile-Friendly: Tombol dan tabel dirancang agar nyaman disentuh kasir melalui tablet atau smartphone."
          ],
          technologies: [
            "React 18",
            "React Router DOM v6",
            "jsPDF & html2canvas",
            "Modern CSS3 Responsive"
          ]
        },
        evidenceText: "Sistem ini berhasil merapikan alur pencatatan pesanan harian dan memangkas waktu pembuatan nota serta pertanyaan status berulang dari pelanggan.",
        reflection: "Aplikasi operasional UMKM tidak harus rumit; yang paling dibutuhkan adalah kecepatan input kasir dan kejelasan informasi bagi pelanggan.",
        futureHorizons: "Integrasi notifikasi WhatsApp otomatis saat status sepatu berubah menjadi 'Siap Diambil'."
      }
    },
    {
      id: "bendahara-2026",
      title: "Bendahara 2026",
      subtitle: "Sistem administrasi keuangan kas, persetujuan pengajuan dana, dan pengarsipan surat terpadu untuk organisasi.",
      category: "Sistem Administrasi & Web App",
      featured: true,
      year: "2026",
      status: "Aktif & Digunakan",
      summary: "Platform web terpusat untuk mengelola arus kas masuk-keluar, alur persetujuan (approve/reject) pengajuan anggaran, serta dokumentasi surat menyurat organisasi.",
      heroImage: "assets/images/project-task.svg",
      tags: ["HTML5", "CSS3", "Vanilla JS", "Admin Panel"],
      githubUrl: "https://github.com/bendaharakerenbgtt/Bendahara2026",
      liveUrl: "https://github.com/bendaharakerenbgtt/Bendahara2026",
      videoUrl: "",
      gallery: [
        {
          url: "assets/images/project-task.svg",
          caption: "Dashboard admin bendahara untuk memantau saldo kas, pengajuan dana, dan status persetujuan.",
          alt: "Dashboard Bendahara 2026"
        },
        {
          url: "assets/images/project-portfolio.svg",
          caption: "Modul arsip surat dan aset kabinet yang terhubung langsung dengan administrasi keuangan.",
          alt: "Arsip Surat Bendahara 2026"
        }
      ],
      metrics: [
        { label: "Alur Persetujuan", value: "Approve / Reject Cepat" },
        { label: "Transparansi Kas", value: "Real-Time" },
        { label: "Beban Pustaka", value: "Ringan (Vanilla JS)" }
      ],
      sections: {
        hook: "Bagaimana cara menjaga transparansi kas organisasi dan mempercepat proses persetujuan dana kegiatan tanpa terjebak file Excel yang saling menimpa?",
        context: "Sebagai bendahara atau pengelola keuangan organisasi, pencatatan pemasukan, pengeluaran, serta verifikasi pengajuan dana dari berbagai divisi sering kali tercecer di berbagai grup chat dan dokumen terpisah.",
        problem: "Tanpa satu pintu administrasi yang jelas, pengajuan dana sulit dilacak statusnya (apakah sudah disetujui atau ditolak), dan arsip surat pertanggungjawaban sering tercecer saat dibutuhkan untuk audit.",
        exploration: {
          narrative: "Memilih arsitektur yang paling praktis, cepat dibuka, dan mudah dirawat oleh pengurus organisasi:",
          tradeoffs: [
            {
              option: "Opsi A: Google Sheets Bersama",
              verdict: "Ditolak",
              reason: "Formula rentan rusak jika diedit banyak orang dan tidak memiliki alur tombol persetujuan yang terstruktur."
            },
            {
              option: "Opsi B: Framework Berat dengan Setup Server Kompleks",
              verdict: "Ditolak",
              reason: "Membutuhkan biaya hosting dan pemeliharaan tinggi untuk skala organisasi."
            },
            {
              option: "Opsi C: Web App Modular (HTML5, CSS3, Vanilla JS)",
              verdict: "Dipilih sebagai Solusi",
              reason: "Sangat ringan, langsung berjalan cepat di browser apa pun, dan mudah dikustomisasi sesuai kebutuhan divisi."
            }
          ]
        },
        execution: {
          architecture: "Aplikasi dibagi menjadi modul Admin Dashboard, manajemen surat, dan aset kabinet. Logika persetujuan (approve/reject) diproses langsung dengan pembaruan status visual yang jelas.",
          keyImplementations: [
            "Sistem Persetujuan Dana (Approve/Reject): Memudahkan bendahara meninjau dan memutuskan pengajuan anggaran dengan catatan alasan yang jelas.",
            "Integrasi Arsip Surat & Aset: Menyatukan dokumen surat masuk/keluar dan aset organisasi dalam satu struktur folder yang rapi.",
            "Antarmuka Bersih & Fokus: Meminimalkan distraksi agar pengurus bisa langsung melihat angka saldo dan daftar tunggu persetujuan."
          ],
          technologies: [
            "HTML5 Semantik",
            "Modern CSS3",
            "Vanilla JavaScript",
            "Modular Admin Layout"
          ]
        },
        evidenceText: "Mempermudah alur kerja administrasi keuangan organisasi dan menyatukan proses persetujuan dana serta pengarsipan surat dalam satu tempat.",
        reflection: "Keteraturan data di awal adalah kunci utama agar laporan pertanggungjawaban di akhir periode tidak menjadi beban berat.",
        futureHorizons: "Menambahkan fitur ekspor laporan kas bulanan otomatis ke format PDF dan Excel."
      }
    },
    {
      id: "polimedia-fasilitas",
      title: "Polimedia Fasilitas",
      subtitle: "Platform peminjaman ruang dan fasilitas kampus berbasis web dengan autentikasi aman dan validasi jadwal terstruktur.",
      category: "Full Stack & Kampus",
      featured: true,
      year: "2026",
      status: "Aktif & Dalam Pengembangan",
      summary: "Sistem informasi peminjaman fasilitas di lingkungan Politeknik Negeri Media Kreatif untuk mencegah bentrok jadwal, mempercepat izin pemakaian ruang, dan menjaga keamanan data pengguna.",
      heroImage: "assets/images/project-ai.svg",
      tags: ["Next.js 16", "React 19", "PostgreSQL", "Argon2", "Zod"],
      githubUrl: "https://github.com/bendaharakerenbgtt/polimedia-fasilitas",
      liveUrl: "https://github.com/bendaharakerenbgtt/polimedia-fasilitas",
      videoUrl: "",
      gallery: [
        {
          url: "assets/images/project-ai.svg",
          caption: "Halaman utama pemilihan fasilitas dan pengecekan ketersediaan jadwal ruang kampus.",
          alt: "Dashboard Polimedia Fasilitas"
        },
        {
          url: "assets/images/project-weather.svg",
          caption: "Panel verifikasi peminjaman dan manajemen data ruang berbasis database PostgreSQL.",
          alt: "Panel Admin Polimedia Fasilitas"
        }
      ],
      metrics: [
        { label: "Keamanan Password", value: "Argon2 Hashing" },
        { label: "Validasi Input", value: "Zod Schema" },
        { label: "Database", value: "PostgreSQL" }
      ],
      sections: {
        hook: "Bagaimana cara mahasiswa dan unit kegiatan kampus meminjam ruang atau alat praktikum tanpa drama jadwal bentrok dan proses birokrasi kertas yang memakan waktu?",
        context: "Di lingkungan Politeknik Negeri Media Kreatif, kebutuhan peminjaman ruang kelas, studio, maupun fasilitas kampus oleh mahasiswa dan organisasi sangat tinggi setiap minggunya.",
        problem: "Pengecekan ketersediaan ruang secara manual sering menyebabkan jadwal ganda (double booking) dan pengajuan izin yang sulit dipantau statusnya oleh peminjam.",
        exploration: {
          narrative: "Menentukan stack teknologi modern yang menjamin keamanan data akun serta konsistensi jadwal di database:",
          tradeoffs: [
            {
              option: "Opsi A: Form Google Biasa",
              verdict: "Ditolak",
              reason: "Tidak bisa mengecek bentrok jadwal secara otomatis dan tidak ada sistem login terverifikasi."
            },
            {
              option: "Opsi B: Database NoSQL Tanpa Skema Ketat",
              verdict: "Ditolak",
              reason: "Kurang ideal untuk relasi jadwal peminjaman, data ruang, dan status persetujuan yang saling bergantung."
            },
            {
              option: "Opsi C: Next.js 16 + React 19 + PostgreSQL + Argon2 + Zod",
              verdict: "Dipilih sebagai Solusi",
              reason: "Memberikan performa server-side yang cepat, keamanan hashing password modern (Argon2), dan validasi data ketat dengan Zod."
            }
          ]
        },
        execution: {
          architecture: "Dibangun dengan Next.js 16 dan React 19 yang terhubung langsung ke database relasional PostgreSQL melalui driver `pg`. Keamanan akun dijaga dengan `@node-rs/argon2` dan seluruh input form divalidasi menggunakan `zod`.",
          keyImplementations: [
            "Autentikasi Aman dengan Argon2: Melindungi kredensial mahasiswa dan admin menggunakan standar hashing kriptografi modern.",
            "Validasi Skema Ketat (Zod): Mencegah data jadwal atau input peminjaman yang tidak valid masuk ke database.",
            "Manajemen Relasi PostgreSQL: Menjamin integritas data antara daftar fasilitas, peminjam, dan rentang waktu pemakaian."
          ],
          technologies: [
            "Next.js 16 & React 19",
            "PostgreSQL (pg)",
            "Argon2 Password Hashing",
            "Zod Schema Validation"
          ]
        },
        evidenceText: "Fondasi sistem berhasil dibangun dengan standar keamanan tinggi, validasi data yang ketat, dan struktur database yang siap menangani peminjaman fasilitas kampus.",
        reflection: "Membangun sistem untuk lingkungan kampus mengajarkan pentingnya validasi data sejak awal agar tidak ada celah jadwal bentrok di kemudian hari.",
        futureHorizons: "Menambahkan tampilan kalender visual interaktif dan notifikasi status persetujuan otomatis."
      }
    },
    {
      id: "universal-surat",
      title: "Universal Surat (GenSurat)",
      subtitle: "Generator surat resmi dan dokumen organisasi otomatis dengan format rapi siap cetak tanpa perlu mengatur margin manual.",
      category: "Produktivitas & Otomatisasi",
      featured: true,
      year: "2026",
      status: "Selesai",
      summary: "Alat bantu pembuatan surat resmi organisasi dan instansi berbasis web yang mengubah input formulir sederhana menjadi dokumen berformat standar yang langsung siap cetak.",
      heroImage: "assets/images/project-portfolio.svg",
      tags: ["HTML5", "CSS3", "Vanilla JS", "Print Layout"],
      githubUrl: "https://github.com/bendaharakerenbgtt/gensurat",
      liveUrl: "https://github.com/bendaharakerenbgtt/gensurat",
      videoUrl: "",
      gallery: [
        {
          url: "assets/images/project-portfolio.svg",
          caption: "Formulir pengisian data surat yang langsung terhubung dengan pratinjau dokumen secara instan.",
          alt: "Tampilan Universal Surat"
        }
      ],
      metrics: [
        { label: "Waktu Buat Surat", value: "< 1 Menit" },
        { label: "Format Dokumen", value: "Standar Siap Cetak" },
        { label: "Dependensi", value: "0 KB (Murni Web)" }
      ],
      sections: {
        hook: "Kenapa membuat satu surat resmi di pengolah kata sering menghabiskan waktu 20 menit hanya untuk merapikan kop surat, nomor surat, dan posisi tanda tangan yang bergeser?",
        context: "Pengurus organisasi dan panitia acara sering kali harus membuat puluhan surat (undangan, peminjaman, permohonan) dengan format kop dan struktur yang sama, namun selalu mengulang pengaturan layout dari nol.",
        problem: "Mengedit file dokumen secara manual rawan membuat format berantakan, salah penomoran, atau posisi tanda tangan terpotong saat berpindah halaman.",
        exploration: {
          narrative: "Mencari cara paling ringan agar siapa saja bisa membuat surat rapi langsung dari browser tanpa instal aplikasi tambahan:",
          tradeoffs: [
            {
              option: "Opsi A: Template Word (.docx) Manual",
              verdict: "Ditolak",
              reason: "Layout sering berubah saat dibuka di versi Word atau perangkat yang berbeda."
            },
            {
              option: "Opsi B: Backend Generator PDF Berat",
              verdict: "Ditolak",
              reason: "Membutuhkan server khusus hanya untuk merender teks surat sederhana."
            },
            {
              option: "Opsi C: Web Generator Murni + CSS Print Media",
              verdict: "Dipilih sebagai Solusi",
              reason: "Instan, bisa langsung pratinjau di layar, dan hasilnya konsisten saat dicetak atau disimpan sebagai PDF dari browser."
            }
          ]
        },
        execution: {
          architecture: "Dibangun dengan HTML5, CSS3, dan Vanilla JavaScript yang memisahkan area input form di sisi pengguna dengan kanvas pratinjau dokumen berstandar ukuran kertas A4/F4.",
          keyImplementations: [
            "Pratinjau Langsung (Live Preview): Setiap teks yang diketik di formulir langsung muncul pada posisi surat yang tepat.",
            "Layout Cetak Presisi: Menggunakan aturan CSS `@media print` agar kop surat, isi, dan kolom tanda tangan tidak terpotong saat dicetak.",
            "Aset Kabinet Terintegrasi: Menyediakan pilihan logo dan atribut surat organisasi secara langsung."
          ],
          technologies: [
            "HTML5 Semantik",
            "CSS3 Print Media Queries",
            "Vanilla JavaScript"
          ]
        },
        evidenceText: "Memangkas waktu pembuatan surat resmi dari puluhan menit menjadi di bawah satu menit dengan hasil tata letak yang selalu konsisten.",
        reflection: "Alat bantu yang baik adalah alat yang menghilangkan pekerjaan berulang yang membosankan, sehingga tim bisa fokus pada isi dan tujuan acaranya.",
        futureHorizons: "Menambahkan penyimpanan riwayat nomor surat otomatis dan variasi template surat yang lebih beragam."
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
