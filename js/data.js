/**
 * InLiveIq — Basis Data Proyek & Studi Kasus Mendalam
 * Menerapkan Kerangka 5 Pilar Cerita (Portfolio Case Study & Project Story Writer):
 * 01. Gambaran Besar — Apa yang aku buat?
 * 02. Why — Kenapa aku membuat ini?
 * 03. Development & Challenges — Pengembangan dan Masalah
 * 04. The Outcome — Hasil dan Penerimaan
 * 05. Reflection — Apa yang aku pelajari?
 */

const InLiveIqData = {
  projects: [
    {
      id: "solecare",
      title: "SoleCare: Dari Rencana yang Kegedean sampai Aplikasi yang Benar-Benar Dipakai",
      subtitle: "Aplikasi web yang membantu manajemen operasional mitra Soleful Soaks! Shoes Care, dari alur kerja kasir sampai pesanan selesai.",
      category: "Aplikasi Bisnis & Mitra UMKM",
      featured: true,
      year: "2026",
      status: "Aktif Digunakan Mitra",
      summary: "Aplikasi web manajemen operasional mitra untuk menggantikan pencatatan manual WhatsApp pada usaha perawatan sepatu.",
      logo: "assets/projects/solecare/logo.jpg",
      heroImage: "assets/projects/solecare/01_beranda_pc.png",
      tags: ["React 18", "Google Spreadsheet", "Apps Script", "Cloudflare Pages", "jsPDF"],
      githubUrl: "https://github.com/bendaharakerenbgtt/solcare",
      liveUrl: "https://bendaharakerenbgtt.github.io/solcare/",
      videoUrl: "", // Siap diisi tautan Loom / YouTube Walkthrough
      gallery: [
        {
          url: "assets/projects/solecare/01_beranda_pc.png",
          caption: "Halaman beranda publik Soleful Soaks! lengkap dengan fitur lacak status pesanan dan alur cuci sepatu.",
          alt: "Beranda Publik SoleCare"
        },
        {
          url: "assets/projects/solecare/02_admin_dashboard_pc.png",
          caption: "Dashboard admin operasional untuk memantau antrean masuk, proses cuci, hingga sepatu siap ambil.",
          alt: "Dashboard Admin SoleCare"
        },
        {
          url: "assets/projects/solecare/03_admin_antrian_pc.png",
          caption: "Daftar pesanan dan antrean cuci dengan kontrol status yang terhubung langsung ke Google Spreadsheet.",
          alt: "Manajemen Antrean SoleCare"
        },
        {
          url: "assets/projects/solecare/04_admin_tambah_pesanan_pc.png",
          caption: "Formulir input pesanan baru untuk kasir sekaligus menghasilkan nota digital dan nomor resi.",
          alt: "Form Tambah Pesanan SoleCare"
        },
        {
          url: "assets/projects/solecare/05_beranda_hp.png",
          caption: "Tampilan responsif di smartphone untuk pelanggan yang mengakses informasi layanan.",
          alt: "Tampilan Mobile Beranda SoleCare",
          isMobile: true
        },
        {
          url: "assets/projects/solecare/06_cek_pesanan_hp.png",
          caption: "Halaman lacak progres sepatu dari smartphone pelanggan tanpa perlu bertanya manual lewat chat.",
          alt: "Cek Pesanan Mobile SoleCare",
          isMobile: true
        }
      ],
      customStory: {
        sections: [
          {
            id: "gambaran-besar",
            tocTitle: "Gambaran Besar",
            heading: "Gambaran Besar",
            paragraphs: [
              "SoleCare adalah aplikasi web yang membantu manajemen operasional mitra, dari alur kerja kasir sampai pesanan selesai."
            ]
          },
          {
            id: "kenapa-membuatnya",
            tocTitle: "Kenapa Aku Membuatnya",
            heading: "Kenapa Aku Membuatnya",
            paragraphs: [
              "Awalnya ini tugas dari mata kuliah Multimedia Masyarakat. Salah satu syaratnya, kami harus punya mitra, dan akhirnya kelompokku yang beranggotakan empat orang memilih Soleful Soaks! Shoes Care.",
              "Sebelumnya, pencatatan di sana semuanya manual lewat WhatsApp. Pesanan masuk, dioper dari tangan ke tangan karyawan, lalu dibuatkan nota, sampai akhirnya dicatat sebagai transaksi. Semua itu dikerjakan dua karyawan yang juga harus mencuci sepatunya, dan pengerjaan satu pesanan butuh 3–4 hari. Dari rekap mitra bulan September 2026, rata-rata ada tiga pelanggan yang ditolak setiap minggu karena antrean penuh.",
              "Tujuan mata kuliah ini adalah membantu mitra sesuai program studi masing-masing. Karena aku dari Multimedia, aku melihat celah itu di sini, dan aku ingin membantunya lewat sebuah aplikasi."
            ]
          },
          {
            id: "siapa-terlibat",
            tocTitle: "Siapa Saja yang Terlibat",
            heading: "Siapa Saja yang Terlibat",
            paragraphs: [
              "Biar adil, aku sebut satu per satu. Kami berempat membantu mitra dari dua sisi: branding Instagram dan operasional."
            ],
            bullets: [
              "<strong>Adila dan Syakib</strong> mengurus branding Instagram.",
              "<strong>Aku dan Haris</strong> mengurus operasional. Karena ini pekerjaan berdua, kami membagi tugas: aku yang membuat platformnya, Haris yang meninjau platform itu sekaligus datang dan berkonsultasi ke mitra, apakah ini sudah oke atau belum."
            ]
          },
          {
            id: "rencana-awal",
            tocTitle: "Rencana Awal Terlalu Besar",
            heading: "Rencana Awal yang Terlalu Besar",
            paragraphs: [
              "Sebelum memikirkan teknologi dan bahasa pemrograman, aku melihat dulu apa saja yang dibutuhkan dan bagaimana supaya aplikasi web ini benar-benar membantu. Aku mengerahkan semua yang aku punya, lalu mulai menyusun rencana: React, database Supabase, penyimpanan foto before-after yang tersambung ke Drive, dan hosting di Cloudflare Pages.",
              "Fiturnya banyak sekali, dan mitra pun oke-oke saja. Tapi justru di situ aku merasa ini bukan hal yang bagus. Terlalu kompleks, dan aku buntu sekali. Aku mulai menyerah, bahkan sempat kepikiran membuatnya fiktif saja, tidak sampai benar-benar digunakan."
            ]
          },
          {
            id: "titik-balik",
            tocTitle: "Titik Balik: Aplikasi Bilas",
            heading: "Titik Balik: Aplikasi Bilas",
            paragraphs: [
              "Untungnya, saat wawancara aku teringat bahwa mitra pernah memakai aplikasi Android bernama Bilas. Dari situ aku yakin: kalau mereka sampai berlangganan, berarti mereka paham betul tata letak dan kebutuhan yang ada di aplikasi itu. Jadi aku mulai mengikuti Bilas.",
              "Tidak butuh waktu lama, aku mempelajarinya sampai tahap mirip sekali. Dan ternyata Bilas cukup kompleks, mirip aplikasi laundry. Di sinilah aku mulai menyeleksi fitur-fitur yang mungkin tidak akan terpakai.",
              "Yang menyeleksi dan menguji fitur adalah aku dan Haris, tentu saja bersama mitra. Setelah melewati banyak revisi panjang, akhirnya mitra mengangkat jempol. Aplikasi sudah jadi, tinggal dirapikan."
            ]
          },
          {
            id: "fitur-dipangkas",
            tocTitle: "Fitur yang Dipangkas",
            heading: "Fitur yang Dipangkas",
            paragraphs: [
              "Banyak sekali fitur yang akhirnya di-cut karena terlalu rumit untuk skala kios kecil. Ini perbandingan rencana awal dengan realisasinya di lapangan:"
            ],
            comparisonTable: {
              headers: ["Aspek", "Rencana Awal", "Realisasi"],
              rows: [
                [
                  "Penyimpanan Data",
                  "Database Supabase penuh (PostgreSQL, Auth kompleks, dan RLS)",
                  "Google Spreadsheet via Apps Script agar mitra bisa langsung melihat dan mengelola isi data usahanya sendiri"
                ],
                [
                  "Dokumentasi Foto",
                  "Upload & penyimpanan foto before-after otomatis tersambung ke Google Drive",
                  "Fokus ke alur kasir, cek resi digital, dan kolase ringkas di browser tanpa beban storage Drive yang rumit"
                ],
                [
                  "Fitur Operasional Laundry",
                  "Filter status offline-online, shortcut mesin cuci/pengering, dan modul kompleks ala aplikasi Bilas",
                  "Dipangkas total; disisakan pencatatan pesanan kasir, antrean, nota PDF, dan pengiriman link resi ke WhatsApp"
                ],
                [
                  "Akses & Login Karyawan",
                  "Sistem manajemen akun multi-level & login 1-klik yang rumit",
                  "Login simpel untuk 2 karyawan dengan sinkronisasi data langsung antar perangkat kasir"
                ]
              ]
            }
          },
          {
            id: "pilihan-akhir",
            tocTitle: "Pilihan Akhir",
            heading: "Pilihan Akhir",
            paragraphs: [
              "Akhirnya aku memilih penyimpanan Google Spreadsheet yang terhubung lewat Apps Script. Menurutku ini yang paling ramah untuk mitra. Mereka jadi paham juga bahwa isi data usahanya ada di dalam spreadsheet itu, bukan di tempat asing yang tidak bisa mereka lihat. Dan tidak lupa, aku hosting di Cloudflare Pages yang gratis."
            ]
          },
          {
            id: "refleksi",
            tocTitle: "Refleksi",
            heading: "Refleksi",
            paragraphs: [
              "Akhirnya aku mengerti. Dari sekian banyak fitur yang aku buat dengan penuh niat, ternyata sedikit sekali yang mungkin benar-benar terpakai. Apalagi ini usaha kecil, sebuah kios kecil dengan dua karyawan.",
              "Proyek ini mengubah caraku melihat sebuah produk. Dulu aku berpikir aplikasi yang bagus itu yang arsitekturnya paling canggih dan fiturnya paling lengkap. Sekarang aku sadar, teknologi terbaik buat mitra adalah teknologi yang paling sedikit bikin mereka mikir saat jam sibuk. Kalau mengulang proyek ini dari awal, aku tidak akan langsung menyusun stack rumit di atas kertas—aku bakal duduk di kiosnya dulu, melihat cara mereka mencatat satu pesanan, lalu membuat versi paling kecilnya untuk langsung dicoba hari itu juga."
            ]
          },
          {
            id: "lihat-hasilnya",
            tocTitle: "Lihat Hasilnya",
            heading: "Lihat Hasilnya",
            paragraphs: [
              "Kalau kalian penasaran dengan apa yang aku buat, kunjungi repositori GitHub-nya melalui tombol di atas atau lihat cuplikan tampilannya di bawah ini."
            ],
            showMedia: true
          }
        ]
      }
    },
    {
      id: "bendahara-2026",
      title: "Dana IMIP: Dari Satu Masalah Pencatatan hingga Sistem Keuangan Organisasi",
      subtitle: "Sistem informasi pengelolaan keuangan berbasis web yang dikembangkan untuk UKM LDK IMIP Politeknik Negeri Media Kreatif.",
      category: "Sistem Informasi & Keuangan Organisasi",
      featured: true,
      year: "2026",
      status: "Digunakan Operasional (Juni 2026)",
      summary: "Sistem terintegrasi untuk pencatatan transaksi, pengelolaan bukti pembayaran, pemantauan keuangan, kas anggota, hingga penyusunan dokumen pertanggungjawaban kegiatan.",
      logo: "assets/projects/dana-imip/logo.png",
      heroImage: "assets/projects/dana-imip/01_dashboard_pc.png",
      tags: ["HTML/CSS/JS", "Google Apps Script", "Google Sheets", "Google Drive", "Vercel"],
      githubUrl: "https://github.com/RiskiRaditiya/DanaImip",
      liveUrl: "https://riskiraditiya.github.io/DanaImip/",
      videoUrl: "",
      gallery: [
        {
          url: "assets/projects/dana-imip/01_dashboard_pc.png",
          caption: "Dashboard ringkasan saldo kas gabungan, GoPay, brankas tunai, dan grafik keuangan organisasi.",
          alt: "Dashboard Dana IMIP"
        },
        {
          url: "assets/projects/dana-imip/02_laporan_keuangan_pc.png",
          caption: "Laporan keuangan terperinci lengkap dengan tren arus kas dan komposisi belanja kegiatan.",
          alt: "Laporan Keuangan Dana IMIP"
        },
        {
          url: "assets/projects/dana-imip/03_riwayat_transaksi_pc.png",
          caption: "Riwayat transaksi pemasukan dan pengeluaran yang terhubung dengan bukti nota di Google Drive.",
          alt: "Riwayat Transaksi Dana IMIP"
        },
        {
          url: "assets/projects/dana-imip/04_kegiatan_proker_pc.png",
          caption: "Halaman pengelolaan program kerja dan perbandingan antara anggaran dengan realisasi.",
          alt: "Kegiatan Proker Dana IMIP"
        },
        {
          url: "assets/projects/dana-imip/05_admin_dashboard_pc.png",
          caption: "Panel admin bendahara untuk verifikasi kas anggota dan pengelolaan data operasional.",
          alt: "Dashboard Admin Dana IMIP"
        },
        {
          url: "assets/projects/dana-imip/06_dashboard_hp.png",
          caption: "Tampilan mobile dashboard keuangan yang nyaman dipantau pengurus dari smartphone.",
          alt: "Dashboard Mobile Dana IMIP",
          isMobile: true
        }
      ],
      customStory: {
        sections: [
          {
            id: "gambaran-besar",
            tocTitle: "Gambaran Besar",
            heading: "Gambaran Besar",
            paragraphs: [
              "Dana IMIP adalah sistem informasi pengelolaan keuangan berbasis web yang dikembangkan untuk UKM LDK IMIP Politeknik Negeri Media Kreatif.",
              "Sistem ini berangkat dari kebutuhan sederhana: membuat proses pencatatan keuangan organisasi lebih praktis dan terintegrasi. Namun, seiring pengembangan dan penggunaannya dalam kegiatan organisasi, cakupannya berkembang menjadi sistem yang membantu proses pencatatan transaksi, pengelolaan bukti transaksi, pemantauan keuangan, hingga penyusunan dokumen pertanggungjawaban kegiatan.",
              "Dana IMIP mulai dikembangkan pada April 2026 dan mulai digunakan dalam operasional organisasi pada Juni 2026."
            ]
          },
          {
            id: "kenapa-membuatnya",
            tocTitle: "Kenapa Aku Membuatnya?",
            heading: "Kenapa Aku Membuatnya?",
            paragraphs: [
              "Ide pengembangan Dana IMIP muncul dari pengalamanku mengelola keuangan organisasi sebagai bagian dari Departemen Bendahara.",
              "Saat itu, pencatatan keuangan masih menggunakan dua Google Sheets yang terpisah, yaitu untuk mencatat transaksi dan mengelola kas. Akibatnya, informasi yang seharusnya saling berkaitan perlu diperbarui di tempat berbeda.",
              "Masalah lainnya muncul ketika harus mengumpulkan bukti transaksi. Nota atau bukti pembayaran tersimpan sebagai foto secara terpisah di Google Drive. Ketika menyusun laporan pertanggungjawaban kegiatan, aku perlu mencari kembali bukti tersebut, mencocokkannya dengan transaksi, lalu menguraikan barang dan harga satu per satu.",
              "Proses ini cukup menyita waktu, terutama ketika satu nota berisi beberapa barang yang harus dicatat secara terpisah dalam dokumen pertanggungjawaban.",
              "Dari pengalaman tersebut, muncul keinginan untuk membuat proses pengelolaan keuangan menjadi lebih terintegrasi. Tujuannya bukan hanya mengurangi pekerjaan manual, tetapi juga membantu organisasi memantau kondisi keuangan dan mempermudah penyusunan laporan."
            ]
          },
          {
            id: "berawal-satu-masalah",
            tocTitle: "Berawal dari Satu Masalah",
            heading: "Berawal dari Satu Masalah",
            paragraphs: [
              "Pada awalnya, aku tidak langsung merencanakan sebuah sistem dengan banyak fitur.",
              "Fokus utamanya adalah menyelesaikan masalah pencatatan dan pengelolaan transaksi yang selama ini dilakukan secara terpisah. Namun, ketika mulai mengembangkan sistem, aku melihat bahwa beberapa proses lain ternyata saling berhubungan.",
              "Pencatatan transaksi berkaitan dengan bukti pembayaran. Transaksi berkaitan dengan kegiatan organisasi. Sementara itu, data transaksi dan bukti pembayaran dibutuhkan kembali ketika menyusun dokumen pertanggungjawaban.",
              "Akhirnya, pengembangan tidak berhenti pada pencatatan transaksi saja. Sistem mulai dikembangkan untuk menghubungkan proses-proses tersebut dalam satu alur kerja."
            ]
          },
          {
            id: "bukan-sekadar-website",
            tocTitle: "Bukan Sekadar Membuat Website",
            heading: "Bukan Sekadar Membuat Website",
            paragraphs: [
              "Salah satu hal yang menjadi perhatian selama pengembangan adalah bagaimana sistem dapat mengikuti kebutuhan operasional organisasi.",
              "Aku tidak ingin hanya membuat halaman untuk menampilkan angka atau menyimpan transaksi. Data yang dimasukkan harus bisa digunakan kembali untuk kebutuhan lain.",
              "Karena itu, beberapa bagian sistem dikembangkan agar saling terhubung. Transaksi dapat dikaitkan dengan kegiatan, bukti pembayaran dapat disimpan bersama data transaksi, dan informasi keuangan dapat ditampilkan dalam bentuk ringkasan maupun laporan yang lebih terperinci.",
              "Aku juga berkonsultasi dengan sekretaris organisasi untuk menyesuaikan format dokumen pertanggungjawaban agar hasil yang dihasilkan sistem sesuai dengan kebutuhan administrasi organisasi."
            ]
          },
          {
            id: "tantangan-terbesar",
            tocTitle: "Tantangan: Dokumen Otomatis",
            heading: "Tantangan Terbesar: Membuat Dokumen Secara Otomatis",
            paragraphs: [
              "Bagian yang paling menantang selama pengembangan adalah membuat fitur otomatisasi dokumen rincian keuangan kegiatan.",
              "Sebelumnya, penyusunan rincian pengeluaran membutuhkan proses pengumpulan dan penulisan ulang informasi dari transaksi serta nota. Satu nota bisa berisi beberapa barang, sedangkan dokumen pertanggungjawaban membutuhkan rincian setiap barang beserta harganya.",
              "Aku kemudian mengembangkan fitur yang memungkinkan data rincian barang dan harga dimasukkan ke sistem, lalu diolah menjadi dokumen secara otomatis.",
              "Hasilnya dapat diekspor ke format Word dan PDF, termasuk lampiran foto bukti transaksi. Dengan begitu, proses penyusunan dokumen tidak lagi sepenuhnya bergantung pada penyalinan informasi secara manual.",
              "Fitur ini menjadi salah satu bagian penting karena menghubungkan pencatatan keuangan dengan kebutuhan administrasi dan pertanggungjawaban kegiatan."
            ]
          },
          {
            id: "fitur-dikembangkan",
            tocTitle: "Fitur yang Dikembangkan",
            heading: "Fitur yang Dikembangkan",
            comparisonTable: {
              headers: ["Bagian", "Fungsi"],
              rows: [
                ["Dashboard", "Menampilkan ringkasan saldo, kas, GoPay, serta grafik keuangan organisasi"],
                ["Transaksi", "Mencatat pemasukan dan pengeluaran beserta bukti transaksi dan informasi pendukung"],
                ["Laporan Keuangan", "Menampilkan rincian pemasukan, pengeluaran, serta komposisi penggunaan dana"],
                ["Kegiatan", "Mengelola informasi kegiatan dan membandingkan anggaran dengan realisasi"],
                ["Kas Anggota", "Memfasilitasi pengajuan pembayaran kas dan verifikasi oleh bendahara"],
                ["Dokumen Otomatis", "Menghasilkan dokumen rincian keuangan kegiatan dalam format Word dan PDF"]
              ]
            }
          },
          {
            id: "pilihan-teknologi",
            tocTitle: "Pilihan Teknologi",
            heading: "Pilihan Teknologi",
            paragraphs: [
              "Dana IMIP dikembangkan menggunakan teknologi web dengan memanfaatkan beberapa layanan yang saling terhubung:"
            ],
            bullets: [
              "<strong>HTML, CSS, dan JavaScript</strong> sebagai teknologi utama antarmuka.",
              "<strong>Google Apps Script</strong> sebagai backend untuk memproses permintaan dan mengelola data.",
              "<strong>Google Sheets</strong> sebagai media penyimpanan data.",
              "<strong>Google Drive</strong> untuk menyimpan bukti transaksi dan dokumen.",
              "<strong>GitHub</strong> untuk menyimpan kode sumber.",
              "<strong>Vercel</strong> untuk melakukan deployment website."
            ],
            afterParagraphs: [
              "Pendekatan ini dipilih dengan mempertimbangkan kebutuhan sistem dan pemanfaatan layanan yang sudah tersedia, sehingga pengembangan dapat dilakukan tanpa harus bergantung pada infrastruktur server berbayar yang kompleks."
            ]
          },
          {
            id: "digunakan-operasional",
            tocTitle: "Digunakan dalam Operasional",
            heading: "Digunakan dalam Operasional",
            paragraphs: [
              "Dana IMIP mulai digunakan dalam kegiatan operasional organisasi pada Juni 2026.",
              "Penggunaannya membantu menggantikan sebagian besar proses pencatatan dan pengelolaan keuangan yang sebelumnya dilakukan secara manual. Data transaksi, bukti pembayaran, serta informasi kegiatan kini dapat dikelola melalui satu sistem.",
              "Dalam proses penerapannya, anggota Departemen Bendahara juga diperkenalkan dengan cara penggunaan sistem agar dapat menyesuaikan diri dengan alur kerja yang baru.",
              "Bagi saya, bagian ini menjadi hal yang cukup penting. Sistem yang dikembangkan bukan hanya selesai dibuat, tetapi juga mulai digunakan untuk membantu pekerjaan organisasi sehari-hari."
            ]
          },
          {
            id: "refleksi",
            tocTitle: "Refleksi",
            heading: "Refleksi",
            paragraphs: [
              "Dana IMIP mengajarkan saya bahwa membangun sebuah sistem bukan hanya tentang menentukan teknologi atau membuat fitur sebanyak mungkin.",
              "Hal yang lebih penting adalah memahami masalah yang benar-benar terjadi, melihat hubungan antara satu proses dengan proses lainnya, lalu mengembangkan solusi yang bisa digunakan dalam kondisi nyata.",
              "Pengembangan sistem ini juga membuat saya memahami bahwa kebutuhan pengguna tidak selalu terlihat sejak awal. Beberapa kebutuhan baru muncul ketika sistem mulai digunakan dan proses kerja organisasi mulai terhubung.",
              "Karena itu, Dana IMIP masih memiliki ruang untuk dikembangkan lebih lanjut."
            ]
          },
          {
            id: "rencana-selanjutnya",
            tocTitle: "Selanjutnya: Persuratan",
            heading: "Selanjutnya: Menghubungkan Realisasi Kegiatan dengan Persuratan",
            paragraphs: [
              "Salah satu rencana pengembangan berikutnya adalah membuat generator surat yang terintegrasi dengan data realisasi kegiatan.",
              "Saat ini, informasi yang sudah dicatat dalam proses realisasi masih berpotensi perlu dimasukkan kembali ketika menyusun dokumen persuratan. Ke depannya, data tersebut diharapkan dapat digunakan kembali secara otomatis untuk mengisi informasi pada surat yang dibutuhkan.",
              "Dengan begitu, proses administrasi tidak perlu mengulang penginputan data yang sebenarnya sudah tersedia di sistem.",
              "Harapannya, Dana IMIP dapat berkembang dari sistem pengelolaan keuangan menjadi sistem administrasi organisasi yang lebih terintegrasi."
            ]
          },
          {
            id: "lihat-hasilnya",
            tocTitle: "Lihat Hasilnya",
            heading: "Lihat Hasilnya",
            paragraphs: [
              "Dana IMIP — dibangun dari kebutuhan nyata, dikembangkan melalui proses, dan digunakan untuk membantu pekerjaan organisasi. Kunjungi repositori atau lihat pratinjau tampilannya di bawah ini."
            ],
            showMedia: true
          }
        ]
      }
    },
    {
      id: "polimedia-fasilitas",
      title: "Web Polimedia Fasilitas: Membawa Alur Peminjaman Kampus ke Web",
      subtitle: "Web peminjaman fasilitas kampus untuk kegiatan yang membutuhkan alur persuratan dan persetujuan berjenjang.",
      category: "Full Stack & Sistem Kampus",
      featured: true,
      year: "2026",
      status: "Tahap Produksi",
      summary: "Sistem peminjaman fasilitas kampus yang membawa skema persuratan dan persetujuan berjenjang ke dalam web, lengkap dengan anti-bentrok jadwal dan portal petugas.",
      logo: "assets/projects/polimedia-fasilitas/logo.svg",
      heroImage: "assets/projects/polimedia-fasilitas/01_landing_pc.png",
      tags: ["Next.js 16", "React 19", "PostgreSQL", "Argon2", "Zod", "Server Actions"],
      githubUrl: "https://github.com/bendaharakerenbgtt/polimedia-fasilitas",
      liveUrl: "https://bendaharakerenbgtt.github.io/polimedia-fasilitas/",
      videoUrl: "",
      gallery: [
        {
          url: "assets/projects/polimedia-fasilitas/01_landing_pc.png",
          caption: "Halaman utama publik yang menampilkan agenda resmi kampus PoliMedia yang sudah disetujui.",
          alt: "Landing Page Polimedia Fasilitas"
        },
        {
          url: "assets/projects/polimedia-fasilitas/02_kalender_pc.png",
          caption: "Kalender agenda dan ketersediaan fasilitas kampus untuk mencegah bentrok jadwal antar ormawa.",
          alt: "Kalender Fasilitas Polimedia"
        },
        {
          url: "assets/projects/polimedia-fasilitas/03_form_pengajuan_pc.png",
          caption: "Formulir pengajuan peminjaman digital dengan validasi minimal H-3 dan sistem hold slot.",
          alt: "Form Pengajuan Peminjaman"
        },
        {
          url: "assets/projects/polimedia-fasilitas/04_wadir_approvals_pc.png",
          caption: "Dashboard persetujuan pimpinan (Wakil Direktur) untuk meninjau, merevisi, atau menyetujui pengajuan.",
          alt: "Dashboard Approval Wadir"
        },
        {
          url: "assets/projects/polimedia-fasilitas/05_laporan_sba_pc.png",
          caption: "Modul pelaporan pasca-acara dalam bentuk Surat Berita Acara (SBA) dan realisasi kegiatan.",
          alt: "Laporan SBA Pasca Acara"
        },
        {
          url: "assets/projects/polimedia-fasilitas/06_portal_satpam_pc.png",
          caption: "Portal khusus petugas kebersihan dan satpam untuk memantau jadwal pemakaian ruangan di lapangan.",
          alt: "Portal Petugas & Satpam"
        },
        {
          url: "assets/projects/polimedia-fasilitas/07_dashboard_hp.png",
          caption: "Tampilan mobile dashboard ormawa untuk memantau status persetujuan berjenjang.",
          alt: "Dashboard Mobile Ormawa",
          isMobile: true
        }
      ],
      customStory: {
        sections: [
          {
            id: "gambaran-besar",
            tocTitle: "Gambaran Besar",
            heading: "Gambaran Besar",
            paragraphs: [
              "Web Polimedia Fasilitas adalah web peminjaman fasilitas kampus, khususnya untuk kegiatan yang butuh persiapan banyak lewat surat-menyurat. Idenya sederhana: aku membawa skema peminjaman kampus ke dalam web, supaya prosesnya lebih tertata, dari siapa saja yang perlu tahu tentang surat itu sampai siapa penanggung jawabnya."
            ]
          },
          {
            id: "kenapa-membuatnya",
            tocTitle: "Kenapa Aku Membuatnya",
            heading: "Kenapa Aku Membuatnya",
            paragraphs: [
              "Proyek ini lahir dari keinginanku sendiri. Aku tahu betul alur persuratan peminjaman fasilitas, dan aku melihat prosesnya bisa jauh lebih tertata kalau dipindahkan ke sistem yang jelas.",
              "Di sisi lain, ini juga tugas mata kuliah Rekayasa Perangkat Lunak (RPL) yang harus mengikuti SDLC. Jadi proyek ini berjalan di dua jalur: keinginan pribadi dan tuntutan akademik."
            ]
          },
          {
            id: "siapa-terlibat",
            tocTitle: "Siapa Saja yang Terlibat",
            heading: "Siapa Saja yang Terlibat",
            paragraphs: [
              "Ada enam aktor utama dalam sistem ini:"
            ],
            bullets: [
              "Ormawa (Organisasi Mahasiswa)",
              "Dosen Pembimbing",
              "Kaprodi",
              "Wakil Direktur Bidang Kemahasiswaan",
              "Subbagian Umum",
              "Admin"
            ],
            afterParagraphs: [
              "Ditambah satu portal khusus untuk petugas dan satpam di lapangan, supaya mereka tahu ruangan mana yang akan dipakai dan kapan.",
              "Alur persuratannya berjenjang dan berbeda untuk tiap jenis organisasi:"
            ],
            comparisonTable: {
              headers: ["Jenis organisasi", "Alur persetujuan"],
              rows: [
                ["UKM", "Dosen Pembimbing → BEM → MPM → Wadir"],
                ["HIMA", "Kaprodi → MPM → Wadir → Subbagian Umum"],
                ["BEM", "MPM → Wadir"],
                ["MPM", "Wadir"]
              ]
            }
          },
          {
            id: "apa-yang-dibangun",
            tocTitle: "Apa Saja yang Aku Bangun",
            heading: "Apa Saja yang Aku Bangun",
            paragraphs: [
              "<strong>Pengajuan dan jadwal</strong>"
            ],
            bullets: [
              "Formulir pengajuan digital dengan aturan minimal H-3 sebelum acara.",
              "Sistem hold slot sementara, supaya jadwal tidak diserobot organisasi lain saat formulir sedang diisi.",
              "Anti-bentrok jadwal langsung di level database.",
              "Kalender fasilitas kampus dan daftar inventaris ruangan."
            ],
            afterParagraphs: [
              "<strong>Persetujuan:</strong> Approval berjenjang, lengkap dengan fitur revisi (pengajuan dikembalikan ke pemohon dengan catatan, tidak mulai dari nol) dan reschedule.",
              "<strong>Setelah acara:</strong> Laporan pasca-acara dalam bentuk SBA (Surat Berita Acara), termasuk realisasi keuangan dan rundown.",
              "<strong>Pendukung:</strong> Portal khusus petugas dan satpam, notifikasi di tiap tahap, serta Audit Log di panel Admin supaya setiap aksi penting tercatat.",
              "<strong>Teknologi:</strong> Next.js 16 (App Router &amp; Server Actions), React 19, TypeScript, Tailwind CSS v4, dan PostgreSQL. Untuk keamanan dan kualitas, aku memakai validasi Zod, enkripsi password Argon2, dan testing dengan Vitest."
            ]
          },
          {
            id: "berhenti-di-produksi",
            tocTitle: "Kenapa Berhenti di Produksi",
            heading: "Kenapa Berhenti di Tahap Produksi",
            paragraphs: [
              "Merealisasikan sistem seperti ini butuh banyak peninjauan, dari manajemen sampai semua pihak yang terlibat. Aku sempat sampai di titik sharing dengan beberapa pihak. Tapi akhirnya aku berhenti, karena salah satu pihak enggan melanjutkan, walaupun bukan pihak yang kedudukannya tinggi.",
              "Faktor lainnya, ini tugas mata kuliah yang terikat SDLC dengan waktu yang tidak lama. Jadi aku berhenti sampai tahap produksi saja."
            ]
          },
          {
            id: "tantangan-sebenarnya",
            tocTitle: "Tantangan yang Sebenarnya",
            heading: "Tantangan yang Sebenarnya",
            paragraphs: [
              "Setelah proyek ini, aku sadar tantangan terbesarnya bukan di kodenya. Selain maintenance, tantangannya adalah kepercayaan. Banyak orang menganggap modernisasi itu sulit, takut malah jadi lebih buruk, atau khawatir datanya gampang hilang. Kekhawatiran itu manusiawi, dan itu tidak bisa dijawab hanya dengan fitur yang lengkap."
            ]
          },
          {
            id: "refleksi",
            tocTitle: "Refleksi",
            heading: "Refleksi",
            paragraphs: [
              "Membangun sistem yang melibatkan banyak pihak mengajarkanku bahwa kode yang rapi dan fitur yang lengkap tidak otomatis membuat sistem bisa langsung dipakai. Setiap aktor punya kebiasaan, kekhawatiran, dan kepentingan masing-masing.",
              "Kalau mengulang proyek ini dari awal, aku tidak akan langsung fokus membangun semuanya sekaligus. Aku akan lebih dulu mengajak pihak-pihak yang terlibat untuk berdiskusi sejak awal, menunjukkan prototipe kecil, dan memastikan mereka merasa aman dengan perubahan alurnya sebelum masuk ke pengembangan penuh.",
              "Berhenti di tahap produksi memang terasa disayangkan, karena sistemnya sudah siap. Tapi dari sini aku belajar bahwa dalam proyek nyata, mendapatkan kepercayaan pengguna sama pentingnya dengan membangun sistemnya itu sendiri."
            ]
          },
          {
            id: "lihat-hasilnya",
            tocTitle: "Lihat Hasilnya",
            heading: "Lihat Hasilnya",
            paragraphs: [
              "Kalau kalian penasaran dengan apa yang aku buat, kunjungi GitHub-nya melalui tombol di atas atau lihat cuplikan tampilannya di bawah ini."
            ],
            showMedia: true
          }
        ]
      }
    },
    {
      id: "universal-surat",
      title: "GenSurat: Generator Surat untuk Dunia Ormawa",
      subtitle: "Platform pembuat surat resmi organisasi mahasiswa dengan live preview kertas A4, quick-edit, dan ekspor langsung ke PDF serta DOCX.",
      category: "Produktivitas & Otomatisasi Web",
      featured: true,
      year: "2026",
      status: "Tahap Penyesuaian & Aktif Dipakai",
      summary: "Generator surat resmi untuk ormawa yang mendukung SPM, SBA, SPZ, dan SUD dengan live preview A4, kustomisasi kop, tanda tangan fleksibel, dan ekspor PDF/DOCX.",
      logo: "assets/projects/gensurat/logo.png",
      heroImage: "assets/projects/gensurat/01_editor_spz_pc.png",
      tags: ["HTML5", "CSS3", "Tailwind CSS", "Vanilla JavaScript", "PWA"],
      githubUrl: "https://github.com/bendaharakerenbgtt/gensurat",
      liveUrl: "https://bendaharakerenbgtt.github.io/gensurat/",
      videoUrl: "",
      gallery: [
        {
          url: "assets/projects/gensurat/01_editor_spz_pc.png",
          caption: "Editor surat dua kolom dengan Live Preview kertas A4 real-time dan tombol ekspor Word/PDF.",
          alt: "Editor & Live Preview GenSurat"
        },
        {
          url: "assets/projects/gensurat/02_arsip_surat_pc.png",
          caption: "Halaman arsip surat organisasi lokal untuk menyimpan, mencari, dan menduplikasi draf surat.",
          alt: "Arsip Surat GenSurat"
        },
        {
          url: "assets/projects/gensurat/03_pdf_inspector_pc.png",
          caption: "Inspektor struktur dokumen dan kustomisasi kop organisasi, watermark, serta ekspor PDF/DOCX.",
          alt: "Struktur Dokumen GenSurat"
        },
        {
          url: "assets/projects/gensurat/04_form_sba_pc.png",
          caption: "Formulir lengkap Surat Berita Acara (SBA) dengan pengaturan penandatangan berjenjang dan lampiran.",
          alt: "Formulir SBA GenSurat"
        },
        {
          url: "assets/projects/gensurat/05_editor_hp.png",
          caption: "Tampilan mobile editor GenSurat yang tetap ringan dan bisa dipakai offline lewat PWA.",
          alt: "Tampilan Mobile GenSurat",
          isMobile: true
        }
      ],
      customStory: {
        sections: [
          {
            id: "gambaran-besar",
            tocTitle: "Gambaran Besar",
            heading: "Gambaran Besar",
            paragraphs: [
              "GenSurat adalah platform yang aku buat untuk memudahkan proses persuratan di dunia organisasi mahasiswa (ormawa). Pengguna tinggal mengisi data, melihat hasilnya langsung di kertas A4, lalu mencetak atau mengekspornya."
            ]
          },
          {
            id: "kenapa-membuatnya",
            tocTitle: "Kenapa Aku Membuatnya",
            heading: "Kenapa Aku Membuatnya",
            paragraphs: [
              "GenSurat berawal dari salah satu sub-ide, atau turunan, dari Dana IMIP. Di setiap surat kegiatan, terkadang ada lampiran atau laporan keuangannya. Dari situ aku mulai berpikir, “kenapa nggak sekalian dibuatin generator suratnya aja?”",
              "Respon dari pihak sekretaris pun positif."
            ]
          },
          {
            id: "kondisinya-sekarang",
            tocTitle: "Kondisinya Sekarang",
            heading: "Kondisinya Sekarang",
            paragraphs: [
              "GenSurat masih dalam tahap penyesuaian. Platformnya sudah bisa dipakai langsung untuk kebutuhan operasional, tapi kadang masih ada bug atau permintaan penyesuaian kecil dari pengguna."
            ]
          },
          {
            id: "surat-didukung",
            tocTitle: "Surat yang Didukung",
            heading: "Surat yang Didukung",
            paragraphs: [
              "GenSurat mencakup empat jenis surat resmi:"
            ],
            comparisonTable: {
              headers: ["Singkatan", "Jenis surat"],
              rows: [
                ["SPM", "Surat Permohonan"],
                ["SBA", "Surat Berita Acara"],
                ["SPZ", "Surat Perizinan"],
                ["SUD", "Surat Undangan"]
              ]
            }
          },
          {
            id: "fitur-utama",
            tocTitle: "Fitur Utama",
            heading: "Fitur Utama",
            paragraphs: [
              "<strong>1. Live Preview Kertas A4 dan Quick-Edit</strong><br>Hasil akhir surat langsung terlihat secara real-time dalam tampilan kertas A4 yang rapi. Bagian-bagiannya, seperti kop, nomor surat, tujuan, isi, sampai tanda tangan, bisa diklik langsung di pratinjau dan diedit cepat lewat popover. Jadi pengguna tidak perlu bolak-balik mencari kolom di form.",
              "<strong>2. Kustomisasi Kop, Logo Kabinet, dan Watermark</strong><br>Logo kabinet, logo organisasi, email kop, sampai watermark di latar belakang kertas bisa diganti, sehingga setiap ormawa atau kabinet bisa memakai identitasnya sendiri.",
              "<strong>3. Penomoran Surat dan Kode Delegasi Fleksibel</strong><br>Format nomor surat menyesuaikan otomatis dengan jenis surat, bulan Romawi, dan tahun. Kode organisasi atau delegasi (default <code>ORG</code>) bisa diubah bebas sesuai nama himpunan atau UKM, misalnya <code>HMJ-TI</code> atau <code>LDK-IMIP</code>.",
              "<strong>4. Pengaturan Tanda Tangan yang Lengkap</strong><br>Penandatangan yang didukung:"
            ],
            bullets: [
              "Ketua Pelaksana",
              "Ketua Organisasi",
              "Dosen Pembina (jabatan, nama, dan NIP/NIDN bebas diubah)",
              "Ketua Umum MPM",
              "Ketua BEM (nama, NIM, dan periode bisa diubah, jabatan resminya tetap otomatis)",
              "Wakil Direktur III"
            ],
            afterParagraphs: [
              "Tiap penandatangan punya toggle aktif/nonaktif sesuai kebutuhan surat, dan ada opsi stempel/cap ormawa untuk surat tertentu seperti SPM.",
              "<strong>5. Lampiran Otomatis</strong><br>• <strong>SBA:</strong> mendukung lampiran laporan keuangan serta nota dan dokumentasi.<br>• <strong>SUD:</strong> punya editor lampiran rundown acara yang langsung tersusun rapi di halaman lampiran.",
              "<strong>6. Manajemen Draf dan Riwayat</strong><br>Surat yang sedang dibuat atau sudah selesai bisa disimpan sebagai draf di browser, dibuka lagi, diduplikasi, atau direset ke template bawaan kapan saja."
            ]
          },
          {
            id: "teknologi",
            tocTitle: "Teknologi",
            heading: "Teknologi",
            paragraphs: [
              "Aku sengaja membuatnya ringan, berjalan langsung di browser tanpa backend berat."
            ],
            bullets: [
              "<strong>Frontend:</strong> HTML5, CSS3, Tailwind CSS, dan Vanilla JavaScript.",
              "<strong>Penyimpanan dan offline:</strong> LocalStorage untuk draf dan riwayat surat di perangkat pengguna, plus PWA dengan Service Worker supaya akses cepat dan tetap jalan saat offline.",
              "<strong>Antarmuka dan ekspor:</strong> Font Awesome dan SweetAlert2 untuk UI yang interaktif, serta cetak atau ekspor langsung ke PDF dan DOCX (Word)."
            ]
          },
          {
            id: "refleksi",
            tocTitle: "Refleksi",
            heading: "Refleksi",
            paragraphs: [
              "Aku memilih membangun GenSurat tanpa backend supaya aksesnya cepat, ringan, dan data draf surat tetap tersimpan aman di perangkat masing-masing pengguna. Tidak perlu login, tidak perlu server, dan tetap bisa dipakai meski koneksi internet sedang tidak stabil.",
              "Permintaan penyesuaian yang paling menarik datang langsung dari kebiasaan sekretaris di lapangan—mulai dari detail kecil seperti opsi mengubah nama dan periode di tanda tangan BEM/MPM, sampai kebutuhan mengedit isi langsung dari tampilan pratinjau tanpa bolak-balik ke form.",
              "Melihat sesuatu yang aku buat benar-benar dipakai oleh sekretaris untuk kebutuhan operasional sehari-hari rasanya memuaskan sekali. Dari situ aku makin paham bahwa aplikasi yang berguna bukan yang paling rumit arsitekturnya, tapi yang paling pas memotong pekerjaan berulang penggunanya."
            ]
          },
          {
            id: "coba-sendiri",
            tocTitle: "Coba Sendiri",
            heading: "Coba Sendiri",
            paragraphs: [
              "Kalau kalian penasaran, kunjungi GenSurat lewat tombol <strong>Buka Projek</strong> atau lihat kodenya lewat tombol <strong>GitHub Repo</strong> di atas."
            ],
            showMedia: true
          }
        ]
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
  
  // Alias mapping untuk link lama jika ada bookmark
  const aliasMap = {
    'soleful': 'solecare',
    'soleful-soaks': 'solecare',
    'bendahara': 'bendahara-2026',
    'polimedia': 'polimedia-fasilitas',
    'gensurat': 'universal-surat',
    'surat': 'universal-surat'
  };

  const targetId = aliasMap[cleanId] || cleanId;
  return InLiveIqData.projects.find(p => p.id === targetId) || InLiveIqData.projects[0];
}

function getRelatedProjects(currentId, count = 2) {
  return InLiveIqData.projects.filter(p => p.id !== currentId).slice(0, count);
}
