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
      title: "Solecare",
      subtitle: "Sistem manajemen laundry dan perawatan sepatu dengan pelacakan resi mandiri, cetak nota PDF instan, dan kontrol antrean pengerjaan.",
      category: "Aplikasi Bisnis & Layanan",
      featured: true,
      year: "2026",
      status: "Aktif Digunakan",
      summary: "Aplikasi operasional toko cuci dan perawatan sepatu yang mempermudah kasir mendata pesanan, mencetak nota digital PDF siap bagikan ke WhatsApp, serta memberi pelanggan akses cek status cucian secara mandiri 24 jam.",
      heroImage: "assets/images/project-ecommerce.svg",
      tags: ["React 18", "React Router v6", "jsPDF", "html2canvas", "CSS3 Responsive"],
      githubUrl: "https://github.com/bendaharakerenbgtt/solcare",
      liveUrl: "https://github.com/bendaharakerenbgtt/solcare",
      videoUrl: "", // Siap diisi tautan Loom / YouTube Walkthrough
      gallery: [
        {
          url: "assets/images/project-ecommerce.svg",
          caption: "Halaman kasir untuk pencatatan pesanan cepat dan pembuatan nota transaksi digital.",
          alt: "Antarmuka Kasir Solecare"
        },
        {
          url: "assets/images/project-task.svg",
          caption: "Papan kontrol antrean status pengerjaan sepatu dari tahap diterima hingga siap diambil.",
          alt: "Manajemen Status Solecare"
        }
      ],
      metrics: [
        { label: "Pertanyaan Status WA", value: "Turun ~75%" },
        { label: "Cetak Nota PDF", value: "1 Klik Instan" },
        { label: "Akses Cek Resi", value: "24/7 Mandiri" }
      ],
      content: {
        // 01. Gambaran Besar
        overview: "Solecare adalah aplikasi web manajemen operasional untuk usaha jasa perawatan dan pencucian sepatu. Aplikasi ini menyediakan alur kerja terpadu: kasir dapat memasukkan data pesanan pelanggan, memilih jenis treatment sepatu (deep clean, unyellowing, repaint), langsung mengekspor nota transaksi resmi berformat PDF, serta memberikan nomor resi unik agar pelanggan bisa melacak progres sepatunya secara mandiri dari smartphone mereka tanpa harus bertanya manual ke kasir.",
        
        // 02. Why — Kenapa aku membuat ini?
        why: "Di usaha jasa perawatan sepatu, proses pengerjaan butuh waktu beberapa hari dan melewati tahapan spesifik. Sebelumnya, seluruh pencatatan mengandalkan nota kertas manual dan pesan chat WhatsApp. Akibatnya, setiap akhir pekan kasir dibanjiri puluhan chat pelanggan yang menanyakan 'sepatu saya sudah selesai belum?'. Staf kasir harus bolak-balik membongkar tumpukan nota fisik di gudang, memicu antrean kasir tersendat dan bahkan risiko salah penyerahan sepatu pelanggan. Aku membuat Solecare untuk menghapus friksi manual ini dan memberikan kejelasan status bagi pemilik toko maupun pelanggan.",
        
        // 03. Development & Challenges — Pengembangan dan masalah
        development: {
          narrative: "Aku memilih membangun Solecare dengan React 18 dan React Router DOM v6 agar antarmukanya beroperasi sebagai Single Page Application yang lincah diakses dari tablet kasir maupun ponsel pelanggan.",
          stackReason: "React 18 memberikan manajemen state komponen yang reaktif saat kasir menambah multi-item sepatu dalam satu transaksi. Pustaka jsPDF dan html2canvas dipilih agar proses generate nota fisik dan digital terjadi langsung di sisi peramban (client-side) tanpa membebani server backend.",
          struggle: "Tantangan tersulit adalah memastikan hasil cetak nota PDF memiliki ukuran proporsional layaknya struk kasir termal di semua ukuran layar smartphone. Awalnya, hasil render html2canvas di perangkat mobile sering mengalami blur atau terpotong pada batas margin. Aku mengatasinya dengan membuat kontainer DOM tersembunyi beresolusi tetap (fixed DPI canvas) yang dioptimalkan khusus saat proses konversi ke PDF dijalankan.",
          tradeoffs: [
            {
              decision: "Memilih Client-Side PDF Generation dibanding Server-Side PDF",
              reason: "Menghilangkan biaya infrastruktur server rendering dan membuat cetak struk instan tanpa jeda koneksi internet lambat."
            },
            {
              decision: "Pelacakan Berbasis Kode Resi Ringkas",
              reason: "Pelanggan tidak perlu repot membuat akun atau login password, cukup memasukkan kode resi untuk melihat status terkini."
            }
          ]
        },

        // 04. The Outcome — Hasil dan penerimaan
        outcome: {
          summary: "Aplikasi ini berhasil mengotomatisasi pencatatan pesanan harian dan secara signifikan memangkas pertanyaan status cucian via WhatsApp hingga sekitar 75%. Pelanggan merasa lebih puas karena bisa melihat transparansi tahapan pengerjaan sepatu mereka, sementara tim kasir dapat fokus pada pelayanan fisik di toko.",
          features: [
            "Input Cepat Multi-Item: Kasir dapat menambahkan beberapa pasang sepatu dengan treatment berbeda dalam satu invoice.",
            "Generator Nota PDF Siap Bagikan: File struk rapi dapat langsung diunduh atau dikirimkan ke nomor WhatsApp pelanggan dalam hitungan detik.",
            "Halaman Pelacakan Publik: Cek status cucian mandiri (Diterima ➔ Proses Cuci ➔ Pengeringan ➔ Siap Diambil)."
          ]
        },

        // 05. Reflection — Apa yang aku pelajari?
        reflection: {
          learnings: "Membangun Solecare menyadarkan aku bahwa software yang bernilai bukan software yang paling rumit teknologinya, melainkan yang paling cepat menyelesaikan masalah nyata pengguna di lapangan. Kemudahan antarmuka bagi staf toko yang sibuk jauh lebih penting daripada animasi yang berlebihan.",
          tradeoffsLeft: "Saat ini data status masih tersinkronisasi via database web dan belum memiliki bot WhatsApp otomatis mandiri untuk broadcast notifikasi instan.",
          futurePlan: "Rencana pengembangan selanjutnya adalah integrasi WhatsApp Gateway API agar sistem dapat otomatis mengirimkan pesan 'Sepatu Anda sudah selesai dan siap diambil' saat kasir mengubah status ke tahap akhir."
        }
      }
    },
    {
      id: "bendahara-2026",
      title: "Bendahara 2026",
      subtitle: "Sistem administrasi keuangan kas, verifikasi pengajuan dana, dan pengarsipan surat organisasi terpadu.",
      category: "Sistem Informasi & Administrasi",
      featured: true,
      year: "2026",
      status: "Aktif Digunakan",
      summary: "Platform web terpusat untuk mengelola arus kas masuk dan keluar organisasi, alur persetujuan (approve/reject) pengajuan anggaran divisi, serta pengarsipan dokumen surat dinas secara rapi.",
      heroImage: "assets/images/project-task.svg",
      tags: ["HTML5 Semantik", "Modern CSS3", "Vanilla JavaScript", "Admin Dashboard"],
      githubUrl: "https://github.com/bendaharakerenbgtt/Bendahara2026",
      liveUrl: "https://github.com/bendaharakerenbgtt/Bendahara2026",
      videoUrl: "",
      gallery: [
        {
          url: "assets/images/project-task.svg",
          caption: "Dashboard admin bendahara yang menampilkan saldo kas terkini dan daftar tunggu persetujuan dana.",
          alt: "Dashboard Bendahara 2026"
        },
        {
          url: "assets/images/project-portfolio.svg",
          caption: "Modul integrasi arsip surat masuk dan berkas pertanggungjawaban kegiatan.",
          alt: "Arsip Surat Bendahara 2026"
        }
      ],
      metrics: [
        { label: "Verifikasi Pengajuan", value: "Real-Time Satu Pintu" },
        { label: "Transparansi Saldo", value: "100% Tercatat" },
        { label: "Performa Web", value: "Ringan Tanpa Framework" }
      ],
      content: {
        // 01. Gambaran Besar
        overview: "Bendahara 2026 adalah sistem manajemen administrasi dan keuangan organisasi berbasis web. Sistem ini dirancang untuk memudahkan bendahara dan ketua organisasi mengontrol seluruh arus keluar-masuk uang kas, memproses verifikasi persetujuan (approve/reject) nota proposal anggaran dari tiap divisi, serta menyimpan arsip surat keputusan dan laporan pertanggungjawaban dalam satu dashboard terpusat.",
        
        // 02. Why
        why: "Dalam pengelolaan organisasi mahasiswa atau kepanitiaan, pencatatan keuangan sering kali berantakan karena tersebar di berbagai file spreadsheet pribadi dan grup chat terpisah. Hal ini sering memicu selisih saldo kas, pengajuan dana yang tertimbun tanpa kejelasan status, serta kepanikan saat audit Laporan Pertanggungjawaban (LPJ) di akhir masa jabatan. Aku membangun Bendahara 2026 untuk menghadirkan sistem administrasi satu pintu yang transparan dan tertib sejak hari pertama kepengurusan.",
        
        // 03. Development & Challenges
        development: {
          narrative: "Aku sengaja merancang Bendahara 2026 dengan pendekatan zero-dependency (HTML5, Modern CSS3, dan Vanilla JavaScript murni) agar aplikasinya super cepat dibuka di laptop jadul sekalipun tanpa perlu setup environment Node.js yang rumit bagi pengurus umum.",
          stackReason: "Vanilla JS memberikan kontrol penuh atas DOM rendering dan memori. Menggunakan CSS Grid dan CSS Custom Properties modular membuat tema admin dashboard mudah dikustomisasi sesuai identitas kabinet organisasi.",
          struggle: "Kebuntuan teknis yang sempat dihadapi adalah menjaga konsistensi alur verifikasi multi-status (Menunggu, Disetujui, Ditolak dengan Catatan) agar tidak bisa diubah sembarangan jika transaksi sudah dikunci oleh bendahara utama. Aku menyelesaikannya dengan merancang state validator berbasis event di mana setiap perubahan status wajib menyertakan log nama verifikator dan alasan catatan.",
          tradeoffs: [
            {
              decision: "Memilih Vanilla JavaScript dibanding Framework Kompleks",
              reason: "Sistem langsung bisa dijalankan oleh bendahara baru tanpa perlu keahlian teknis pemrograman."
            },
            {
              decision: "Penyatuan Modul Keuangan dan Arsip Surat",
              reason: "Setiap pengeluaran kas wajib terhubung langsung dengan nomor surat persetujuan kegiatan."
            }
          ]
        },

        // 04. The Outcome
        outcome: {
          summary: "Sistem ini telah membantu menertibkan birokrasi keuangan organisasi, mempercepat waktu persetujuan proposal kegiatan dari berhari-hari menjadi beberapa jam, dan mengeliminasi risiko dokumen nota kas yang hilang.",
          features: [
            "Pusat Saldo Kas Real-Time: Visualisasi pemasukan, pengeluaran, dan sisa saldo anggaran bersih.",
            "Panel Persetujuan Cepat: Fitur satu-klik approve atau reject dengan kolom feedback alasan perbaikan.",
            "Integrasi Berkas Kabinet: Manajemen surat permohonan dan aset inventaris yang terindeks rapi."
          ]
        },

        // 05. Reflection
        reflection: {
          learnings: "Proyek ini membuktikan bahwa kerapian arsitektur data dan kejelasan alur logika manusia jauh lebih krusial daripada sekadar menggunakan library terkini. Membangun alat yang langsung mempermudah kerja tim adalah kepuasan tersendiri.",
          tradeoffsLeft: "Penyimpanan data lokal peramban saat ini masih perlu dicadangkan manual jika berganti perangkat kerja.",
          futurePlan: "Menghubungkan sistem ke database cloud terenkripsi dan menambahkan generator laporan neraca keuangan otomatis format Excel/PDF."
        }
      }
    },
    {
      id: "polimedia-fasilitas",
      title: "Polimedia Fasilitas",
      subtitle: "Platform peminjaman ruang dan sarana kampus berbasis web dengan autentikasi aman dan validasi jadwal terstruktur.",
      category: "Full Stack & Sistem Kampus",
      featured: true,
      year: "2026",
      status: "Dalam Pengembangan Aktif",
      summary: "Sistem informasi peminjaman fasilitas di lingkungan Politeknik Negeri Media Kreatif yang mencegah bentrok jadwal penggunaan studio/kelas, mempercepat birokrasi perizinan, dan melindungi data civitas akademika.",
      heroImage: "assets/images/project-ai.svg",
      tags: ["Next.js 16", "React 19", "PostgreSQL", "Argon2", "Zod", "Server Actions"],
      githubUrl: "https://github.com/bendaharakerenbgtt/polimedia-fasilitas",
      liveUrl: "https://github.com/bendaharakerenbgtt/polimedia-fasilitas",
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
      metrics: [
        { label: "Keamanan Akun", value: "Argon2 Encryption" },
        { label: "Validasi Jadwal", value: "Zod Schema Strict" },
        { label: "Integritas Data", value: "PostgreSQL Relational" }
      ],
      content: {
        // 01. Gambaran Besar
        overview: "Polimedia Fasilitas adalah platform web full-stack modern yang dikembangkan untuk mengelola proses permohonan dan peminjaman sarana fisik di kampus Politeknik Negeri Media Kreatif. Melalui platform ini, mahasiswa dan pengurus organisasi dapat menelusuri katalog ruangan (studio rekaman, lab komputer multimedia, auditorium), melihat ketersediaan jadwal kosong, dan mengajukan peminjaman secara transparan kepada bagian pengelola fasilitas.",
        
        // 02. Why
        why: "Di kampus vokasi kreatif seperti Polimedia, aktivitas praktikum dan produksi karya multimedia berlangsung sangat intensif. Selama ini, peminjaman ruang kelas dan studio masih menggunakan formulir kertas fisik yang harus ditandatangani manual ke beberapa lantai. Prosedur ini lambat dan sering memicu konflik jadwal ganda (double-booking) ketika dua kelompok mahasiswa merasa sama-sama berhak memakai ruangan yang sama pada jam yang sama. Aku menginisiasi sistem ini untuk mendigitalkan birokrasi kampus agar lebih adil, transparan, dan efisien.",
        
        // 03. Development & Challenges
        development: {
          narrative: "Aku memilih arsitektur modern Next.js 16 dengan React 19 dan database relasional PostgreSQL melalui native driver `pg` untuk menjamin kecepatan render server-side dan ketahanan transaksi jadwal.",
          stackReason: "Next.js App Router dan Server Actions memungkinkan data formulir divalidasi langsung di server tanpa mengekspos endpoint API publik yang rentan. Keamanan kata sandi mahasiswa dilindungi dengan algoritma hashing mutakhir `@node-rs/argon2`, sedangkan keabsahan waktu peminjaman dijamin dengan validasi skema ketat dari `zod`.",
          struggle: "Masalah teknis paling pelik adalah mendeteksi tumpang tindih waktu (time range overlap) saat beberapa peminjam mengajukan permohonan di ruangan yang sama pada menit yang bersamaan. Jika hanya dicek di client-side, risiko race condition sangat besar. Solusinya, aku merancang query transaksi SQL tingkat database yang mengecek konflik rentang waktu `(waktu_mulai < booking_selesai AND waktu_selesai > booking_mulai)` sebelum mengunci pencatatan baru.",
          tradeoffs: [
            {
              decision: "Memilih Database PostgreSQL dibanding NoSQL",
              reason: "Menjamin integritas relasi yang ketat antara entitas Pengguna, Ruangan, Jadwal, dan Log Status."
            },
            {
              decision: "Validasi Zod di Sisi Server",
              reason: "Menjamin tidak ada data tanggal kadaluarsa atau format NIM palsu yang lolos ke database."
            }
          ]
        },

        // 04. The Outcome
        outcome: {
          summary: "Fondasi sistem berhasil dibangun dengan standar industri: autentikasi aman, pencegahan jadwal bentrok secara otomatis, serta antarmuka modern yang nyaman dipakai oleh mahasiswa dari ponsel cerdas mereka.",
          features: [
            "Deteksi Bentrok Jadwal Otomatis: Sistem langsung menolak pengajuan jika waktu yang dipilih sudah terisi kegiatan lain.",
            "Sistem Akun Mahasiswa Terverifikasi: Registrasi dan login aman berstandar enkripsi Argon2.",
            "Panel Admin Pengelola Kampus: Hak akses khusus bagi staf fasilitas untuk menyetujui, menjadwalkan ulang, atau menolak permohonan."
          ]
        },

        // 05. Reflection
        reflection: {
          learnings: "Menggarap proyek full-stack kampus ini memperdalam pemahaman aku tentang betapa krusialnya integritas data di lapisan database. Keamanan dan validasi data bukanlah pelengkap, melainkan fondasi utama sebuah aplikasi yang menangani kepentingan publik.",
          tradeoffsLeft: "Tampilan kalender saat ini masih berbasis daftar slot waktu dan belum berbentuk kalender visual drag-and-drop interaktif penuh.",
          futurePlan: "Menambahkan tampilan kalender interaktif per lantai gedung serta sistem verifikasi tiket masuk ruangan menggunakan dynamic QR code."
        }
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
      liveUrl: "https://github.com/bendaharakerenbgtt/gensurat",
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
