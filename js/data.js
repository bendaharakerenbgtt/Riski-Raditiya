/**
 * InLiveIq — Basis Data Proyek & Wawasan (Bahasa Indonesia)
 * Data terstruktur yang mematuhi Master Project Brief dengan pendekatan editorial personal.
 */

const InLiveIqData = {
  projects: [
    {
      id: "cognitive-note-engine",
      title: "RecallFlow: Mesin Catatan Kognitif",
      subtitle: "Lingkungan markdown bebas distraksi yang dirancang khusus untuk pengingatan aktif (active recall) dan sintesis konsep non-linear.",
      category: "Alat Belajar & Ergonomi Kognitif",
      featured: true,
      year: "2026",
      status: "Riset Aktif & Penggunaan Harian",
      summary: "Eksplorasi tentang bagaimana kita dapat mengingat dan mengolah pengetahuan tanpa terjebak dalam ilusi menimbun informasi secara pasif.",
      heroImage: "assets/images/project-recallflow.svg",
      tags: ["Sistem Belajar", "Ergonomi Kognitif", "Vanilla JS", "Local-First"],
      sections: {
        overview: "RecallFlow adalah reaksi sadar terhadap tren aplikasi manajemen pengetahuan pribadi (PKM) modern yang kian membengkak dengan fitur berlebih. Alih-alih mengutamakan plugin tanpa akhir, database grafis yang rumit, atau web clipper otomatis, alat ini berfokus pada titik friksi kognitif yang benar-benar memfasilitasi retensi jangka panjang: pemaksaan sintesis kata-kata sendiri, petunjuk pengingatan aktif berkala, dan peringkasan progresif yang disengaja.",
        background: "Selama beberapa tahun melakukan riset mandiri dalam ilmu kognitif dan rekayasa perangkat lunak, saya mengamati pola jebakan yang berulang: 'collector's fallacy' (jebakan kolektor). Menyimpan artikel atau menyorot seluruh bab buku memberikan kepuasan instan seolah kita telah memahami materinya, namun ketika diuji seminggu kemudian, hampir tidak ada yang melekat dalam ingatan. Masalahnya bukan kekurangan informasi; melainkan ketiadaan pemrosesan kognitif yang aktif saat menyerapnya.",
        problem: "Sebagian besar alat pencatat digital dioptimalkan untuk penyimpanan dan temu-kembali cepat, bukan untuk pemahaman dan pengendapan mental. Mereka membuat proses menyimpan begitu mudah sementara proses berpikir menjadi pilihan sampingan. Pengguna berakhir dengan museum digital berisi kutipan-kutipan yang tak pernah dibaca lagi, alih-alih membangun jejaring pemahaman di dalam kepala mereka sendiri.",
        goals: [
          "Menghilangkan kebisingan antarmuka dan beban kognitif berlebih selama proses penulisan catatan.",
          "Menerapkan mekanisme pertanyaan pengingatan berkala (spaced retrieval) yang bersumber dari ringkasan mandiri pengguna.",
          "Menjamin kepemilikan data penuh melalui berkas teks Markdown murni yang tersimpan lokal di komputer tanpa ketergantungan cloud.",
          "Membatasi opsi kustomisasi visual agar mencegah penundaan produktif (procrastination disguised as setup) dan menjaga fokus pada penulisan."
        ],
        planning: "Pengembangan dimulai dengan sketsa di atas kertas dan pencatatan alur kerja membaca-ke-sintesis pribadi selama tiga bulan. Saya mencatat di mana letak kelelahan mental terjadi dan menemukan bahwa berpindah jendela antara bahan bacaan dan aplikasi catatan merusak alur berpikir mendalam. Arsitektur dirancang dari awal untuk mendukung sintesis dua panel fokus dengan catatan tepi lipat (folding margin notes).",
        implementation: "Dibangun menggunakan teknologi web murni (vanilla) tanpa dependensi pihak ketiga, memanfaatkan IndexedDB untuk penyimpanan luring instan dan ekspor berkas Markdown standar. Antarmuka menerapkan skala tipografi ketat dengan tinggi baris (line-height) 1.7 yang nyaman, margin yang lega, dan pintasan papan ketik cepat. Penjadwal pengingatan lokal berjalan mandiri tanpa perlu server luar.",
        technologies: [
          "Vanilla JavaScript (ES6+)",
          "IndexedDB untuk penyimpanan lokal",
          "Web Storage API",
          "Parser Markdown AST Kustom",
          "CSS Grid & Custom Properties",
          "Canvas API untuk visualisasi kurva retensi"
        ],
        challenges: [
          "Visualisasi Graf vs. Hubungan Bermakna: Banyak alat membanggakan grafik node 3D interaktif yang tampak keren namun memberikan nilai kognitif yang minim. Saya menolak menambahkan graf visual dan menggantinya dengan indeks asosiatif dua arah yang memunculkan konsep terkait berdasarkan kesamaan pertanyaan konseptual.",
          "Mencegah Pembengkakan Fitur: Menolak godaan untuk menambahkan sinkronisasi pihak ketiga dan hierarki tag yang rumit demi mempertahankan premis utama: menulis secara aktif, bukan mengelola basis data."
        ],
        results: "RecallFlow telah menjadi ruang kerja utama saya selama lebih dari 9 bulan. Dalam pengujian tolak ukur pribadi pada 120 catatan konsep, retensi ingatan setelah 30 hari meningkat lebih dari 40% dibandingkan metode dokumentasi linear biasa. Yang lebih penting, waktu yang terbuang untuk mengutak-atik tata letak berkurang hingga nol.",
        reflection: "Membangun RecallFlow mengajarkan saya bahwa perangkat lunak bisa memperkuat kognisi manusia atau justru memperparah distraksi. Keputusan desain paling berharga sering kali adalah apa yang sengaja kita tinggalkan. Pembelajaran terjadi dalam pergulatan yang sungguh-sungguh untuk memahami dan mengartikulasikan gagasan, bukan dalam mekanisme menekan tombol simpan."
      }
    },
    {
      id: "percept-cognitive-ui",
      title: "Percept: Ergonomi Tipografi & Beban Kognitif",
      subtitle: "Utilitas diagnostik peramban untuk menganalisis hierarki visual, alur gerak mata, dan kelelahan pembaca pada media digital.",
      category: "Psikologi & Desain Digital",
      featured: true,
      year: "2026",
      status: "Utilitas Riset Terbuka",
      summary: "Meneliti bagaimana persepsi manusia memproses hierarki editorial dibandingkan kekacauan visual antarmuka, dan menerjemahkan prinsip psikologi kognitif menjadi metrik terukur.",
      heroImage: "assets/images/project-percept.svg",
      tags: ["Psikologi Persepsi", "Ergonomi Tipografi", "Aksesibilitas", "Design Systems"],
      sections: {
        overview: "Percept adalah alat diagnostik editorial yang dirancang untuk membantu penulis, desainer, dan pendidik mengevaluasi seberapa mudah konten mereka diserap oleh mata manusia. Dengan memadukan formula kontras warna WCAG dengan analisis kepadatan tipografi dan ritme baca, Percept memberikan skor objektif terhadap kenyamanan membaca.",
        background: "Halaman web modern sering kali dipenuhi tuntutan visual yang saling berebut perhatian: bilah navigasi lengket (sticky), jendela sembulan (popup) newsletter, kontras warna yang buruk, dan jarak antarbaris yang sempit. Saat membaca teks analitis panjang, kekacauan visual ini menimbulkan kelelahan kognitif yang terukur, memaksa pembaca hanya membaca sekilas alih-alih menyerap esensi pemikiran.",
        problem: "Meskipun alat pemeriksa aksesibilitas mampu mendeteksi ketiadaan atribut alt atau kegagalan kontras biner, mereka jarang mengevaluasi ergonomi perseptual secara menyeluruh: Apakah panjang baris (measure) nyaman bagi gerakan mata sakadik alami? Apakah skala judul seimbang terhadap teks isi? Apakah ruang kosong (whitespace) mengarahkan fokus atau justru membingungkan?",
        goals: [
          "Merumuskan 'Indeks Kejelasan Kognitif' berdasarkan skala tipografi, panjang baris, kontras, dan kepadatan visual.",
          "Menyediakan peta panas visual (heatmap) secara real-time yang menunjukkan di mana perhatian pembaca rentan terhenti atau buyar.",
          "Memberikan saran perbaikan tipografi editorial yang praktis dan mudah dipahami.",
          "Menjaga antarmuka alat tetap minimal, cepat, dan sepenuhnya mencerminkan prinsip ketenangan yang diadvokasikannya."
        ],
        planning: "Saya meninjau literatur psikologi membaca, meneliti studi gerakan mata sakadik, batas legibilitas dari Cambridge Ergonomics Group, dan Teori Beban Kognitif Sweller. Dari temuan ini, saya menetapkan empat pilar utama: Rasio Hierarki Tipografi, Indeks Kenyamanan Ukuran Baris, Persentase Kepadatan Visual, dan Stabilitas Kontras.",
        implementation: "Alat ini menerima input berupa teks markdown atau URL langsung. Memanfaatkan Web Worker agar tidak membebani utas utama, alat menghitung jumlah karakter per baris, proporsi tinggi baris, keselarasan skala modular (merujuk pada skala musikal klasik), serta menghasilkan hamparan kanvas yang menampilkan distribusi luminansi visual.",
        technologies: [
          "Vanilla JavaScript & Web Workers",
          "HTML5 Canvas API untuk visualisasi heatmap",
          "Formula Luminansi WCAG 2.2",
          "CSS Modern Fluid Typography (clamp)",
          "Diagram Alir Visual SVG"
        ],
        challenges: [
          "Subjektivitas vs. Objektivitas: Tipografi memiliki nuansa rasa dan seni yang tidak bisa dipatok kaku oleh angka matematis semata. Saya mengatasinya dengan memperlakukan metrik sebagai indikator penunjuk arah, bukan hukum mutlak, serta memberikan keleluasaan sesuai konteks bacaan (misal dokumentasi teknis vs prosa reflektif).",
          "Kinerja pada Dokumen Panjang: Menghitung kotak pembatas (bounding box) pada puluhan ribu kata dapat membuat browser melambat. Memindahkan seluruh kalkulasi ke Web Worker menjaga antarmuka tetap berjalan mulus di 60fps."
        ],
        results: "Percept telah digunakan untuk mengaudit dan mengoptimalkan lebih dari 50 tulisan editorial dan materi edukasi. Penguji melaporkan penurunan kelelahan mata subjektif sebesar 32% dan peningkatan daya pemahaman mendalam ketika membaca versi teks yang telah disesuaikan.",
        reflection: "Desain bukan sekadar tentang rupa luar sesuatu; desain adalah lingkungan kognitif yang kita sediakan bagi pikiran orang lain. Saat kita menghargai kapasitas mental pembaca melalui tipografi yang tenang dan ruang kosong yang lapang, kita sedang menghormati isi gagasan sekaligus orang yang meluangkan waktu membacanya."
      }
    },
    {
      id: "curio-mental-models",
      title: "Curio: Eksplorasi Model Mental",
      subtitle: "Koleksi interaktif berisi eksperimen pikiran untuk memahami prinsip-prinsip dari teori keputusan, pemikiran sistem, dan psikologi.",
      category: "Pendidikan & Model Mental",
      featured: true,
      year: "2025 – 2026",
      status: "Ruang Pengetahuan Terbuka",
      summary: "Mengubah kerangka berpikir abstrak menjadi simulasi mikro interaktif yang nyata, menjembatani jurang antara teori hafalan dan intuisi praktis.",
      heroImage: "assets/images/project-curio.svg",
      tags: ["Pemikiran Sistem", "Pembelajaran Interaktif", "Teori Keputusan", "Explorable Explanations"],
      sections: {
        overview: "Curio adalah repositori visual interaktif berisi 12 model mental dasar—seperti Dampak Tingkat Kedua (Second-Order Effects), Inversi, Penggandaan (Compounding), dan Normalisasi Deviasi. Alih-alih menyajikannya hanya lewat paragraf statis, Curio mengajak pengunjung memanipulasi variabel secara langsung dan menyaksikan konsekuensi sistemik yang terjadi.",
        background: "Kita sering diajari berbagai kerangka berpikir dalam buku dan artikel, namun kata-kata kerap gagal menyampaikan dinamika nyata dari umpan balik melingkar (feedback loops) dan dampak non-linear. Terinspirasi oleh konsep 'Explorable Explanations' dari Bret Victor, saya ingin menguji apakah simulasi mini dapat memberikan intuisi mendalam tentang cara kerja sebuah sistem.",
        problem: "Prinsip-prinsip abstrak sangat mudah dipahami secara dangkal saat membaca contoh kasus yang sederhana, tetapi sangat sulit dikenali di tengah situasi dunia nyata yang rumit. Membaca pasif menciptakan ilusi kemahiran yang cepat menguap begitu berhadapan dengan kompleksitas hidup.",
        goals: [
          "Menciptakan simulasi interaktif yang ringan dan memuat dalam waktu kurang dari satu detik di perangkat apa pun.",
          "Memastikan setiap simulasi memiliki interaksi yang intuitif tanpa perlu petunjuk penggunaan yang bertele-tele.",
          "Menyandingkan setiap simulasi dengan studi kasus autentik dan pertanyaan reflektif.",
          "Mempertahankan bahasa visual editorial yang tenang, minimal, dan terfokus pada mekanisme konseptual."
        ],
        planning: "Untuk setiap model mental, saya menyuling mekanisme matematika atau logika di baliknya ke dalam representasi paling sederhana. Contohnya, pada 'Pemikiran Tingkat Kedua', saya membuat model intervensi lalu lintas di mana pelebaran jalan justru memicu permintaan terinduksi (induced demand) dan meningkatkan kemacetan dalam jangka panjang.",
        implementation: "Setiap widget dibangun sebagai mesin keadaan (state machine) mandiri menggunakan SVG deklaratif dan JavaScript murni. Penggeser (slider) memungkinkan manipulasi parameter secara langsung yang seketika memperbarui kurva visual. Teks narasi pun ikut beradaptasi secara dinamis menceritakan implikasi dari perubahan tersebut.",
        technologies: [
          "Generasi SVG Deklaratif",
          "Manajemen Keadaan Reaktif (Vanilla JS)",
          "Tata Letak Editorial CSS Grid & Flexbox",
          "Mesin Simulasi Matematis Ringan",
          "Aksesibilitas ARIA Live Regions"
        ],
        challenges: [
          "Menghindari Gimmick: Sangat mudah bagi elemen interaktif untuk tergelincir menjadi sekadar mainan visual yang justru mengaburkan pemahaman. Setiap interaksi harus murni memperlihatkan hubungan kausalitas yang tak kasat mata.",
          "Kemudahan Sentuhan di Ponsel: Penggeser dan grafik reaktif membutuhkan kalibrasi target sentuh dan penyesuaian skala viewport SVG agar tetap nyaman digunakan di layar ponsel."
        ],
        results: "Curio telah dirujuk oleh kelompok belajar, pembelajar otodidak, dan mahasiswa desain di berbagai negara. Rata-rata durasi kunjungan melampaui 4 menit 30 detik, membuktikan bahwa pengunjung benar-benar bereksperimen dan berinteraksi mendalam dengan materi.",
        reflection: "Pemahaman sejati bukanlah kondisi pasif menerima informasi; pemahaman adalah proses aktif merekonstruksi realitas di dalam pikiran kita sendiri. Ketika kita memberi kendali kepada seseorang untuk menguji sebuah sistem dan melihat reaksinya, rasa ingin tahu bertransformasi menjadi kebijaksanaan nyata."
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
      heroImage: "assets/images/insight-synthesis.svg",
      content: [
        {
          heading: "Godaan Perpustakaan Digital",
          paragraphs: [
            "Kita hidup di masa di mana tindakan menyimpan sebuah ide sering kali disalahartikan sebagai tindakan memahaminya. Hanya dengan satu klik atau ekstensi peramban, kita dapat menangkap esai berbobot ribuan kata, membubuhi metadata rapi, dan menyimpannya ke dalam aplikasi catatan.",
            "Pada detik itu juga, otak kita merasakan kepuasan semu: sensasi bahwa kita telah menguasai sesuatu. Inilah yang oleh para pendidik disebut sebagai 'collector's fallacy'—keyakinan bawah sadar bahwa mengumpulkan artefak pengetahuan sama nilainya dengan menyerap pengetahuan itu sendiri ke dalam diri.",
            "Seminggu kemudian, jika kita diminta menjelaskan gagasan inti tulisan tersebut kepada seorang kawan sambil menyeruput kopi, kita mendapati diri kita terbata-bata. Dokumen itu tersimpan aman di media penyimpanan; namun pikiran kita sendiri sesungguhnya belum berubah sedikit pun."
          ]
        },
        {
          heading: "Pengodean Penuh Usaha: Satu-satunya Jalan Menuju Retensi",
          paragraphs: [
            "Psikologi kognitif berulang kali menegaskan bahwa proses belajar tidak terjadi melalui paparan pasif semata; ia terjadi melalui upaya memanggil kembali memori (retrieval) dan sintesis mandiri yang memerlukan daya pikir.",
            "Saat kita membaca teks, otak kita berada dalam mode rekognisi pasif. Semuanya tampak runtut dan jelas semata-mata karena sang penulis telah melakukan kerja kognitif berat dalam menstrukturkan argumen tersebut.",
            "Begitu kita menutup layar dan memaksa diri merangkum konsep tersebut dalam dua kalimat sederhana bagi orang awam—seperti yang dipraktikkan fisikawan Richard Feynman—ilusi keahlian itu langsung runtuh. Titik-titik kelemahan dalam pemahaman kita terlihat jelas.",
            "Rasa tidak nyaman ini bukanlah tanda kegagalan. Ini adalah sensasi fisiologis sesungguhnya dari proses belajar yang sedang berlangsung. Tanpa gesekan usaha tersebut, informasi hanya mengalir lewat laksana air di atas batu yang licin."
          ]
        },
        {
          heading: "Protokol Sederhana untuk Belajar Setiap Hari",
          paragraphs: [
            "Untuk melepaskan diri dari jebakan penimbun informasi, saya menerapkan tiga batasan sederhana dalam keseharian saya:",
            "1. Karantina 24 Jam: Ketika menemukan bacaan yang menarik, saya tidak langsung menyimpannya ke catatan permanen. Tautan itu masuk ke antrean sementara. Jika setelah satu hari bacaan itu masih terasa penting, baru saya baca; jika tidak, saya mengarsipkannya tanpa rasa bersalah.",
            "2. Aturan Sintesis Dua Kalimat: Tidak ada artikel atau bab buku yang boleh masuk ke catatan permanen saya tanpa disertai setidaknya dua kalimat yang ditulis murni dari pikiran saya sendiri, menjawab: 'Apa kebenaran yang tidak klise di sini?' dan 'Bagaimana hal ini mengubah cara saya berpikir atau bertindak?'",
            "3. Bangun Sesuatu Dengannya: Pengetahuan yang tidak difungsikan akan layu dengan cepat. Entah itu menuliskan refleksi singkat, menggambar skema pemikiran, atau membangun prototipe sederhana, menggunakan sebuah gagasan adalah cara paling sahih untuk benar-benar memilikinya."
          ]
        },
        {
          heading: "Ketenangan dari Mengetahui Lebih Sedikit, Lebih Mendalam",
          paragraphs: [
            "Ketika kita berhenti mengukur perkembangan intelektual dari seberapa banyak artikel yang telah kita bookmark, dan mulai mengukurnya dari seberapa jernih kita mampu menjelaskan inti sebuah gagasan, relasi kita dengan informasi akan berubah.",
            "Kecemasan karena merasa tertinggal oleh setiap tren baru akan sirna perlahan. Menggantikannya adalah rasa ingin tahu yang jauh lebih tenang dan terarah—rasa ingin tahu yang mencari kedalaman daripada kecepatan, dan mengutamakan sintesis pemikiran daripada sekadar penumpukan arsip."
          ]
        }
      ],
      takeaways: [
        "Menyimpan bacaan memicu rasa puas semu tanpa terjadi pengendapan kognitif nyata.",
        "Pemanggilan memori aktif (active recall) dan artikulasi mandiri adalah syarat mutlak pemahaman.",
        "Menerapkan batasan sintesis mengubah kebiasaan menimbun pasif menjadi intuisi yang abadi."
      ]
    },
    {
      id: "cognitive-friction-restraint-ui",
      title: "Friksi Kognitif: Mengapa Menahan Diri Adalah Fitur Antarmuka Terbaik",
      subtitle: "Di lanskap digital yang penuh animasi mikro dan perebutan atensi, ketenangan tata letak memberikan ruang bagi pemahaman.",
      category: "Psikologi",
      date: "28 September 2026",
      readTime: "6 menit baca",
      summary: "Meneliti bagaimana kebisingan visual menguras daya ingat kerja manusia, dan mengapa ketenangan editorial adalah bentuk penghormatan sejati kepada pembaca.",
      heroImage: "assets/images/insight-friction.svg",
      content: [
        {
          heading: "Kebisingan Lingkungan Web Kontemporer",
          paragraphs: [
            "Buka hampir semua situs web saat ini, dan Anda akan menjumpai antarmuka yang bersaing keras melawan kontennya sendiri. Spanduk meluncur dari sudut bawah. Lencana angka berkedip merah terang. Gradien warna latar bergeser tanpa henti. Kotak informasi (tooltip) muncul tiba-tiba tanpa diminta.",
            "Setiap elemen tersebut kemungkinan besar dapat dijustifikasi secara terpisah oleh sebuah metrik: konversi mikro, persentase engagement, atau tren estetika terkini. Namun secara kolektif, mereka membebankan pajak yang berat pada sistem kognitif manusia: beban kognitif berlebih (extraneous cognitive load)."
          ]
        },
        {
          heading: "Kerapuhan Memori Kerja Manusia",
          paragraphs: [
            "Memori kerja manusia sangatlah terbatas. Seperti yang diamati oleh psikolog kognitif George Miller dan dikonfirmasi oleh berbagai riset lanjutan, kapasitas sadar kita untuk menahan dan mengolah potongan informasi berbeda secara bersamaan sangat kecil—hanya berkisar empat hingga tujuh elemen dalam kondisi optimal.",
            "Setiap elemen yang bergerak, setiap hierarki visual yang bertabrakan, dan setiap ukuran teks yang tidak konsisten memaksa korteks visual melakukan evaluasi bawah sadar: 'Apakah gerakan ini relevan? Apakah ini peringatan darurat? Ke mana mata saya harus tertuju selanjutnya?'",
            "Pada saat pembaca akhirnya tiba di paragraf argumen utama, sebagian besar anggaran energi fokus mereka telah terkuras habis. Kita kerap bertanya-tanya mengapa membaca artikel panjang di layar terasa melelahkan; penyebabnya sering kali bukan panjangnya teks, melainkan lingkungan visual di mana teks itu disajikan."
          ]
        },
        {
          heading: "Filosofi Editorial: Desain sebagai Ruang Tenang",
          paragraphs: [
            "Desain editorial, yang telah disempurnakan selama berabad-abad dalam tradisi percetakan, memahami sebuah kebenaran mendasar: tipografi itu sendirilah antarmukanya. Ketika tipografi diperlakukan dengan hormat—skala yang proporsional, panjang baris yang pas (antara 55 hingga 75 karakter), dan ruang putih yang lapang—pembaca memasuki kondisi perendaman alami.",
            "Ruang putih bukanlah kekosongan atau kemalasan desain. Ruang putih adalah ruang bernapas yang berstruktur. Ia memisahkan gagasan, menegakkan urutan kepentingan tanpa perlu warna menyolok, dan memberi jeda istirahat bagi mata di antara paragraf.",
            "Kemampuan menahan diri menuntut keyakinan yang matang. Itu berarti kita percaya bahwa gagasan kita cukup berbobot, sehingga tidak memerlukan bola 3D, ikon melompat-lompat, atau kembang api visual yang berlebihan demi mempertahankan perhatian orang lain."
          ]
        },
        {
          heading: "Merancang untuk Pikiran yang Berpikir",
          paragraphs: [
            "Ketika kita merancang ruang pribadi, portofolio, maupun perangkat lunak, tolok ukur utama kita sebaiknya bukanlah sekadar waktu di halaman atau frekuensi klik, melainkan kejelasan kognitif.",
            "Apakah antarmuka ini membuat pengunjung merasa tenang dan berdaya, atau justru terdistraksi dan kewalahan? Apakah ruang ini menjernihkan alur berpikir mereka atau memecah fokus? Di tengah rimba kebisingan informasi yang tak terbatas, kejelasan yang hening adalah pengalaman paling berharga yang dapat Anda berikan."
          ]
        }
      ],
      takeaways: [
        "Stimulus visual yang berlebihan menguras kapasitas memori kerja yang sangat terbatas.",
        "Tipografi proporsional dan ruang putih lapang harus menjadi kerangka navigasi utama.",
        "Antarmuka editorial yang tenang memberdayakan pembaca untuk berpikir mendalam dan reflektif."
      ]
    },
    {
      id: "learning-in-public-unfinished",
      title: "Belajar Terbuka di Ruang Publik: Merangkul Hal yang Belum Selesai",
      subtitle: "Mengapa mendokumentasikan proses belajar yang nyata menciptakan relasi yang lebih bermakna daripada otoritas palsu.",
      category: "Refleksi Personal",
      date: "19 Agustus 2026",
      readTime: "4 menit baca",
      summary: "Refleksi tentang melepaskan dorongan untuk terlihat sempurna, dan menemukan kegembiraan dalam mendokumentasikan rasa ingin tahu dan pertumbuhan yang jujur.",
      heroImage: "assets/images/insight-learning.svg",
      content: [
        {
          heading: "Tuntutan untuk Selalu Tampil Sempurna",
          paragraphs: [
            "Ada aturan tak tertulis yang kerap membayangi ruang digital profesional kita: hanya bagikan apa yang sudah selesai, berkilau, dan menuai keberhasilan. Kita didorong untuk menampilkan diri sebagai pakar, ahli, dan pemimpin pemikiran yang memiliki jawaban instan atas setiap pertanyaan rumit.",
            "Namun sikap ini menciptakan beban yang melelahkan. Jika kita hanya bersedia menerbitkan sesuatu saat merasa yakin sepenuhnya, kita hampir tidak akan pernah membagikan apa pun. Lebih buruk lagi, kita menutup diri dari fase paling berharga dalam perjalanan intelektual: momen tersandung, bertanya-tanya, dan memperbaiki kekeliruan di sepanjang jalan."
          ]
        },
        {
          heading: "Pergeseran dari Pakar Menjadi Penjelajah",
          paragraphs: [
            "Ketika Anda beralih dari posisi 'pakar yang tahu segalanya' menjadi 'penjelajah yang selalu penasaran', seluruh beban emosional itu terangkat. Anda tidak lagi sedang mempertahankan reputasi semu; Anda hanya sedang membagikan catatan lapangan dari apa yang Anda temui.",
            "Mengatakan 'Inilah hal yang saat ini sedang saya coba pahami, di sinilah saya sempat buntu, dan inilah yang mengejutkan saya' mengundang dialog yang sehat, bukan perdebatan status. Sikap ini membuka pintu bagi orang lain yang juga sedang belajar untuk bergabung tanpa rasa terintimidasi.",
            "Rasa ingin tahu pada hakikatnya adalah sikap rendah hati. Ia berawal dari pengakuan jujur bahwa apa yang belum kita ketahui jauh lebih luas daripada apa yang telah kita ketahui. Keterbukaan itu bukanlah tanda kelemahan; ia adalah syarat mutlak bagi pertumbuhan apa pun yang bermakna."
          ]
        },
        {
          heading: "Membangun InLiveIq sebagai Buku Catatan Hidup",
          paragraphs: [
            "Website ini lahir dari filosofi tersebut. InLiveIq bukanlah lembar riwayat hidup korporat yang kaku, bukan pula panggung etalase yang dirancang untuk memukau dengan istilah teknis yang muluk. Ini adalah ruang editorial yang hidup.",
            "Sebuah tempat untuk mencatat apa yang memantik rasa penasaran saya, gagasan apa yang menggugat asumsi lama saya, dan bagaimana eksperimen-eksperimen kecil berbuah pemahaman yang kokoh. Sebagian pemikiran di sini akan terus berevolusi; sebagian lainnya mungkin akan direvisi atau digantikan seiring bertambahnya wawasan saya.",
            "Dan itulah esensi sesungguhnya. Selama kita masih memiliki rasa ingin tahu, perjalanan ini akan terus berlanjut."
          ]
        }
      ],
      takeaways: [
        "Perfeksionisme menghambat dialog yang bermakna dan mematikan keberanian berkarya.",
        "Mendokumentasikan proses belajar mengundang umpan balik sehat dan pertumbuhan bersama.",
        "Rasa ingin tahu yang autentik jauh lebih bernilai dan bertahan lama daripada kilau otoritas semu."
      ]
    }
  ]
};

function getProjectById(id) {
  return InLiveIqData.projects.find(p => p.id === id) || null;
}

function getInsightById(id) {
  return InLiveIqData.insights.find(i => i.id === id) || null;
}

function getRelatedInsights(currentId, count = 2) {
  return InLiveIqData.insights.filter(i => i.id !== currentId).slice(0, count);
}

function getRelatedProjects(currentId, count = 2) {
  return InLiveIqData.projects.filter(p => p.id !== currentId).slice(0, count);
}
