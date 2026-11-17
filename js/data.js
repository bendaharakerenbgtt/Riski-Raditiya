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
      heroImage: "assets/images/project-ecommerce.svg",
      tags: ["React 18", "Google Spreadsheet", "Apps Script", "Cloudflare Pages", "jsPDF"],
      githubUrl: "https://github.com/bendaharakerenbgtt/solcare",
      liveUrl: "https://bendaharakerenbgtt.github.io/solcare/",
      videoUrl: "", // Siap diisi tautan Loom / YouTube Walkthrough
      gallery: [
        {
          url: "assets/images/project-ecommerce.svg",
          caption: "Alur kasir dan pembuatan nota digital untuk pencatatan pesanan pelanggan.",
          alt: "Antarmuka Kasir SoleCare"
        },
        {
          url: "assets/images/project-task.svg",
          caption: "Tampilan status pesanan dan pelacakan progres cuci sepatu.",
          alt: "Status Pesanan SoleCare"
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
      heroImage: "assets/images/project-task.svg",
      tags: ["HTML/CSS/JS", "Google Apps Script", "Google Sheets", "Google Drive", "Vercel"],
      githubUrl: "https://github.com/RiskiRaditiya/DanaImip",
      liveUrl: "https://riskiraditiya.github.io/DanaImip/",
      videoUrl: "",
      gallery: [
        {
          url: "assets/images/project-task.svg",
          caption: "Dashboard ringkasan saldo, kas, GoPay, serta grafik keuangan organisasi.",
          alt: "Dashboard Dana IMIP"
        },
        {
          url: "assets/images/project-portfolio.svg",
          caption: "Modul penyusunan dokumen rincian keuangan kegiatan otomatis ke format Word dan PDF.",
          alt: "Dokumen Otomatis Dana IMIP"
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
      heroImage: "assets/images/project-ai.svg",
      tags: ["Next.js 16", "React 19", "PostgreSQL", "Argon2", "Zod", "Server Actions"],
      githubUrl: "https://github.com/bendaharakerenbgtt/polimedia-fasilitas",
      liveUrl: "https://bendaharakerenbgtt.github.io/polimedia-fasilitas/",
      videoUrl: "",
      gallery: [
        {
          url: "assets/images/project-ai.svg",
          caption: "Halaman katalog fasilitas kampus dengan informasi kapasitas, fasilitas studio, dan status ruang.",
          alt: "Katalog Fasilitas Polimedia"
        },
        {
          url: "assets/images/project-weather.svg",
          caption: "Panel validasi peminjaman dan pengelolaan jadwal ruang berbasis PostgreSQL.",
          alt: "Panel Verifikasi Jadwal"
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
      title: "Universal Surat (GenSurat)",
      subtitle: "Generator surat resmi dan dokumen organisasi otomatis dengan tata letak standar siap cetak tanpa geser margin.",
      category: "Produktivitas & Otomatisasi Web",
      featured: true,
      year: "2026",
      status: "Selesai & Siap Pakai",
      summary: "Aplikasi web pembuat surat resmi organisasi dan instansi yang mengubah input data sederhana menjadi dokumen formal berstandar baku dengan pratinjau langsung dan hasil cetak PDF yang presisi.",
      heroImage: "assets/images/project-portfolio.svg",
      tags: ["HTML5 Semantik", "CSS3 Print Media", "Vanilla JavaScript", "Live Document Preview"],
      githubUrl: "https://github.com/bendaharakerenbgtt/gensurat",
      liveUrl: "https://bendaharakerenbgtt.github.io/gensurat/",
      videoUrl: "",
      gallery: [
        {
          url: "assets/images/project-portfolio.svg",
          caption: "Panel formulir data surat yang terhubung langsung dengan pratinjau dokumen otomatis.",
          alt: "Tampilan Universal Surat"
        }
      ],
      metrics: [
        { label: "Waktu Buat Surat", value: "< 1 Menit" },
        { label: "Margin & Tata Letak", value: "Presisi Standar A4/F4" },
        { label: "Aksesibilitas", value: "Tanpa Instal Aplikasi" }
      ],
      content: {
        // 01. Gambaran Besar
        overview: "Universal Surat (GenSurat) adalah aplikasi web produktivitas yang dirancang untuk mengotomatisasi pembuatan surat-surat resmi (surat undangan, peminjaman alat, permohonan izin kegiatan, surat tugas). Pengguna cukup mengisi beberapa kolom isian di formulir sebelah kiri, dan lembar surat berstandar formal lengkap dengan kop organisasi, penomoran otomatis, isi surat, dan kolom tanda tangan akan langsung tersusun rapi di kanvas pratinjau sebelah kanan siap dicetak atau disimpan sebagai PDF.",
        
        // 02. Why
        why: "Dalam kehidupan organisasi kampus dan kepanitiaan, sekretaris sering menghabiskan waktu hingga 20-30 menit hanya untuk merapikan satu lembar surat di aplikasi word processor. Format margin sering melompat, posisi logo kop surat berantakan saat dibuka di komputer lain, dan posisi tanda tangan kerap terlempar ke halaman kedua. Masalah sepele ini membuang waktu produktif panitia. Aku membuat Universal Surat agar siapa saja bisa menghasilkan surat berformat standar sempurna dalam waktu kurang dari 60 detik.",
        
        // 03. Development & Challenges
        development: {
          narrative: "Aplikasi ini dibangun menggunakan arsitektur web native (HTML5, Modern CSS, dan Vanilla JavaScript) untuk menjaga kecepatan reaksi rendering instan.",
          stackReason: "Tidak memerlukan framework besar karena inti kebutuhan aplikasi adalah kecepatan binding input teks ke elemen dokumen HTML dan ketepatan aturan media cetak (`@media print`).",
          struggle: "Tantangan teknis utama adalah membuat tampilan dokumen yang ada di layar monitor peramban sama persis (pixel-perfect) dengan hasil ketika tombol 'Cetak / Simpan PDF' ditekan. Peramban web sering menambahkan margin default atau header URL otomatis saat print. Aku memecahkannya dengan konfigurasi CSS `@page` khusus (`size: A4 portrait; margin: 0;`) serta padding terisolasi yang memastikan tata letak surat tetap terkunci rapi pada ukuran lembar kertas fisik.",
          tradeoffs: [
            {
              decision: "Memanfaatkan Native Browser Print Engine dibanding PDF Backend Renderer",
              reason: "Aplikasi bisa berjalan 100% di browser tanpa ketergantungan server berbayar, bahkan bisa digunakan secara offline."
            },
            {
              decision: "Pratinjau Dua Kolom (Side-by-Side)",
              reason: "Pengguna langsung melihat hasil jadinya detik itu juga saat mengetik tanpa perlu bolak-balik klik tombol generate."
            }
          ]
        },

        // 04. The Outcome
        outcome: {
          summary: "Universal Surat berhasil memangkas waktu administratif pembuatan surat resmi panitia secara dramatis. Pengurus tidak perlu lagi repot mengatur spasi paragraf atau margin manual, dan format dokumen yang dihasilkan selalu konsisten di mata instansi penerima.",
          features: [
            "Live Preview Real-Time: Dokumen surat terupdate otomatis seketika saat huruf diketikkan.",
            "Kop Surat & Aset Kabinet Otomatis: Logo dan identitas lembaga terpasang rapi dan proporsional.",
            "Cetak Ramah Kertas: Format terkunci satu halaman penuh tanpa risiko tanda tangan terpotong ke lembar baru."
          ]
        },

        // 05. Reflection
        reflection: {
          learnings: "Mengerjakan proyek ini menyadarkan aku bahwa memahami fitur mendalam dari standar CSS asli (seperti print stylesheets dan layout sizing) sering kali jauh lebih efisien daripada buru-buru menambahkan pustaka eksternal yang berat.",
          tradeoffsLeft: "Format jenis template saat ini masih berfokus pada surat formal organisasi standar Indonesia.",
          futurePlan: "Menambahkan fitur penyimpanan buku agenda nomor surat keluar otomatis dan ekspor tanda tangan digital ber-barcode."
        }
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
