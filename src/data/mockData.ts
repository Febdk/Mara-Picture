// Mock Data untuk Mara Picture - Photography Portfolio Website

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

export interface Gallery {
  id: number;
  name: string;
  client: string;
  category: string;
  date: string;
  coverImage: string;
  description: string;
  images: GalleryImage[];
}

export interface Service {
  id: number;
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
  description: string;
}

export interface SocialMedia {
  name: string;
  url: string;
  icon: string;
}

export interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

// Data Hero Carousel
export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: "public/images/carosel-1.jpg",
    title: "Abadikan Momen Berharga Anda",
    subtitle: "Fotografi Profesional untuk Setiap Cerita Hidup Anda"
  },
  {
    id: 2,
    image: "public/images/carosel-2.jpg",
    title: "Momen Yang Tak Terlupakan",
    subtitle: "Mengabadikan Setiap Detail Hari Istimewa Anda"
  },
  {
    id: 3,
    image: "public/images/carosel-3.jpg",
    title: "Potrait yang Bercerita",
    subtitle: "Menangkap Kepribadian dan Emosi dalam Setiap Frame"
  },
  {
    id: 4,
    image: "public/images/carosel-4.jpg",
    title: "Perayaan Yang Abadi",
    subtitle: "Setiap cerita akan terabasikan dengan sebuah visual yang memukau"
  }
];

// Data Gallery berbasis Job/Client
export const galleries: Gallery[] = [
  {
    id: 1,
    name: "Wisuda Ayu Grads",
    client: "Ayu Grads",
    category: "Fotografi Wisuda",
    date: "2024-12-15",
    coverImage: "public/images/Wisuda-Ayu Grads/Wisuda-Ayu Grads-Utama.jpg",
    description: "Abadikan momen kelulusanmu dengan keluarga dan di abadikan oleh Mara Picture",
    images: [
      { id: 1, src: "public/images/Wisuda-Ayu Grads/Wisuda-Ayu Grads-1.jpg", alt: "Ayu Foto 1" },
      { id: 2, src: "public/images/Wisuda-Ayu Grads/Wisuda-Ayu Grads-2.jpg", alt: "Ayu Foto 2" },
      { id: 3, src: "public/images/Wisuda-Ayu Grads/Wisuda-Ayu Grads-3.jpg", alt: "Ayu Foto 3" }
    ]
  },
  {
    id: 2,
    name: "Wisuda Siti Alfa Graduation.",
    client: "Siti Alfa Graduation.",
    category: "Fotografi Wisuda",
    date: "2024-11-20",
    coverImage: "public/images/Wisuda-SitiAlfa/Siti-Utama.jpg",
    description: "Kebahagiaan yang terpancar dari momen wisuda Siti Alfa Graduation.",
    images: [
      { id: 1, src: "public/images/Wisuda-SitiAlfa/Siti-1.jpg", alt: "Pencapaian" },
      { id: 2, src: "public/images/Wisuda-SitiAlfa/Siti-2.jpg", alt: "Kebahagiaan" },
      { id: 3, src: "public/images/Wisuda-SitiAlfa/Siti-3.jpg", alt: "Keseberagaman" },
    ]
  },
  {
    id: 3,
    name: "Wisuda Anonimus",
    client: "Anonimus",
    category: "Fotografi Wisuda",
    date: "2024-10-05",
    coverImage: "public/images/Wisuda-Anonimus/Anonimus-Utama.jpg",
    description: "Momen yang tak terulang",
    images: [
      { id: 1, src: "public/images/Wisuda-Anonimus/Anonimus-1.jpg", alt: "Pasangan" },
      { id: 2, src: "public/images/Wisuda-Anonimus/Anonimus-2.jpg", alt: "Solo Potraite" },
      { id: 3, src: "public/images/Wisuda-Anonimus/Anonimus-3.jpg", alt: "Family Potraite" },
    ]
  },  
  {
    id: 4,
    name: "Wisuda Rizky",
    client: "Rizky",
    category: "Fotografi Wisuda",
    date: "2024-09-18",
    coverImage: "public/images/Wisuda-Rizky/Wisuda-Rizky-Utama.jpg",
    description: "Sesi foto yang penuh kebahagiaan bersama keluarga tercinta di hari wisuda Rizky.",
    images: [
      { id: 1, src: "public/images/Wisuda-Rizky/Wisuda-Rizky-1.jpg", alt: "Cendit Foto 1" },
      { id: 2, src: "public/images/Wisuda-Rizky/Wisuda-Rizky-2.jpg", alt: "Family portrait 1" },
      { id: 3, src: "public/images/Wisuda-Rizky/Wisuda-Rizky-3.jpg", alt: "Family portrait 2" }
    ]
  },
];

// Data Paket Layanan/Services
export const services: Service[] = [
  {
    id: 1,
    name: "Basic Package",
    price: "Rp 2.500.000",
    description: "Paket ideal untuk sesi foto sederhana dengan kualitas profesional",
    features: [
      "2 jam sesi foto",
      "1 lokasi pengambilan",
      "50 foto yang sudah di-edit",
      "Resolusi digital high-quality",
      "Online gallery",
      "Konsultasi via WhatsApp",
      "Revisi minor editing"
    ]
  },
  {
    id: 2,
    name: "Premium Package",
    price: "Rp 5.000.000",
    description: "Paket terpopuler dengan fitur lengkap untuk acara spesial Anda",
    features: [
      "5 jam sesi foto",
      "2 lokasi pengambilan",
      "150 foto yang sudah di-edit",
      "Resolusi digital high-quality",
      "Online gallery premium",
      "USB flashdisk eksklusif",
      "10 foto cetak ukuran 8R",
      "Video slideshow cinematic",
      "Free 1x konsultasi offline"
    ],
    popular: true
  },
  {
    id: 3,
    name: "Wedding Package",
    price: "Rp 8.500.000",
    description: "Paket spesial pernikahan dengan dokumentasi menyeluruh",
    features: [
      "Full day coverage (12 jam)",
      "3+ lokasi (akad, resepsi, dll)",
      "300+ foto edited",
      "2 fotografer profesional",
      "Video highlight cinematic (5-7 menit)",
      "Drone photography",
      "Album premium 30x30 cm (40 halaman)",
      "USB flashdisk eksklusif + box",
      "Online gallery premium",
      "Free engagement session"
    ]
  },
  {
    id: 4,
    name: "Commercial Package",
    price: "Mulai dari Rp 3.000.000",
    description: "Solusi fotografi untuk kebutuhan bisnis dan komersial",
    features: [
      "Product photography",
      "Food & beverage styling",
      "Corporate headshots",
      "Event coverage",
      "Professional editing",
      "Usage rights untuk marketing",
      "Fast delivery (3-5 hari)",
      "Unlimited revisi minor"
    ]
  },
  {
    id: 5,
    name: "Portrait Session",
    price: "Rp 1.800.000",
    description: "Sesi potret personal atau keluarga dengan nuansa artistik",
    features: [
      "1.5 jam sesi foto",
      "Indoor atau outdoor",
      "30 foto edited",
      "Make-up consultation",
      "Wardrobe tips",
      "High-resolution files",
      "Print-ready files",
      "Online gallery"
    ]
  },
  {
    id: 6,
    name: "Custom Package",
    price: "Hubungi Kami",
    description: "Paket disesuaikan dengan kebutuhan spesifik Anda",
    features: [
      "Durasi sesuai kebutuhan",
      "Unlimited locations",
      "Custom editing style",
      "Video cinematography option",
      "Multiple photographers",
      "Album & print customization",
      "Drone photography",
      "Konsultasi personal mendalam",
      "Flexible payment terms"
    ]
  }
];

// Data Social Media
export const socialMedia: SocialMedia[] = [
  {
    name: "Instagram",
    url: "https://instagram.com/marapicture",
    icon: "instagram"
  },
  {
    name: "Facebook",
    url: "https://facebook.com/marapicture",
    icon: "facebook"
  },
  {
    name: "Email",
    url: "mailto:contact@marapicture.com",
    icon: "mail"
  }
];

// Data About
export const aboutData = {
  name: "Mara",
  title: "Meet the Photographer",
  bio: [
    "I'am Endri as a photographer from Mara Picture. I have one year experience as a full time photographer specializing in Graduation, Family, Couple, etc.",
    " I live in Yogyakarta.",
    " Let's connect! You can also call me Asep, hehe.."
  ],
  photoUrl: "public/images/foto-fg.png"
};

// Hero Section Data
export const heroData = {
  title: "Abadikan Momen Berharga Anda",
  subtitle: "Fotografi Profesional untuk Setiap Cerita Hidup Anda",
  backgroundImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&h=1080&fit=crop"
};

// Contact Info
export const contactInfo = {
  email: "contact@marapicture.com",
  phone: "+62 812-3456-7890",
  whatsapp: "6281234567890", // Format tanpa + dan spasi
  whatsappMessage: "Halo Mara Picture, saya ingin menanyakan tentang layanan fotografi wisuda.",
  location: "Yogyakarta & Solo, Indonesia",
  operationalHours: "Senin - Sabtu, 09:00 - 18:00 WIB",
  instagram: "https://instagram.com/marapicture",
  facebook: "https://facebook.com/marapicture",
  address: "Jl. Kaliurang KM 5, Yogyakarta"
};

// Extended About Data
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  photoUrl: string;
}

export interface CompanyValue {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Award {
  id: number;
  title: string;
  year: string;
  organization: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  photoUrl: string;
}

// Company Story & Mission
export const companyStory = {
  founded: "2024",
  story: `Mara Picture is a professional graduation photographer, available in Yogyakarta, Surakarta, etc.

Mara Picture was established in 2024, precisely May 24, 2024.

Mara Picture operates in the creative industry focusing on photography

Mara Picture not only serves graduation photography, also provides couple photography, event documentation, and wedding photography.`,
  mission: "Mengabadikan setiap momen berharga dengan sentuhan artistik dan profesional, menciptakan kenangan visual yang akan dihargai selamanya.",
  vision: "Menjadi photography vendor pilihan utama yang dikenal karena kualitas, kreativitas, dan dedikasi dalam setiap karya."
};

// Core Values
export const coreValues: CompanyValue[] = [
  {
    id: 1,
    title: "Authenticity",
    description: "Kami percaya pada keaslian emosi dan momen. Setiap foto yang kami ambil menangkap keindahan alami tanpa dibuat-buat.",
    icon: "heart"
  },
  {
    id: 2,
    title: "Excellence",
    description: "Standar kualitas tinggi dalam setiap aspek - dari peralatan, teknik fotografi, hingga layanan customer service.",
    icon: "star"
  },
  {
    id: 3,
    title: "Innovation",
    description: "Selalu mengikuti tren fotografi terkini dan mengeksplorasi teknik baru untuk memberikan hasil yang fresh dan modern.",
    icon: "lightbulb"
  },
  {
    id: 4,
    title: "Integrity",
    description: "Transparansi dalam harga, ketepatan waktu, dan komitmen penuh terhadap setiap project yang kami tangani.",
    icon: "shield"
  }
];

// Team Members
export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Koko Endri",
    role: "Founder & Lead Photographer",
    bio: "Dengan 3+ tahun pengalaman, Mara memiliki keahlian khusus dalam wedding dan portrait photography. Bersertifikasi internasional dan telah memenangkan berbagai award fotografi.",
    photoUrl: "public/images/foto-fg.png"
  },
  {
     id: 1,
    name: "Koko Endri",
    role: "Founder & Lead Photographer",
    bio: "Dengan 3+ tahun pengalaman, Mara memiliki keahlian khusus dalam wedding dan portrait photography. Bersertifikasi internasional dan telah memenangkan berbagai award fotografi.",
    photoUrl: "public/images/foto-fg.png"
  }
];

// Awards & Recognition
export const awards: Award[] = [  
  {
    id: 1,
    title: "Best Wedding Photographer Jakarta",
    year: "2024",
    organization: "Indonesian Photography Association"
  },
  {
    id: 2,
    title: "Excellence in Portrait Photography",
    year: "2023",
    organization: "Asia Pacific Photography Awards"
  },
  {
    id: 3,
    title: "Top 10 Emerging Photographers",
    year: "2022",
    organization: "Photography Magazine Indonesia"
  }
];

// Client Testimonials
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Desi & Arya",
    role: "Wedding Client",
    content: "Mara Picture benar-benar luar biasa! Mereka berhasil menangkap setiap momen spesial di hari pernikahan kami dengan sempurna. Hasil fotonya sangat natural dan penuh emosi. Highly recommended!",
    rating: 5,
    photoUrl: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=100&h=100&fit=crop"
  },
  {
    id: 2,
    name: "Sarah Wijaya",
    role: "Corporate Client",
    content: "Professional, tepat waktu, dan hasil yang melampaui ekspektasi. Foto-foto untuk company profile kami sangat berkualitas dan sesuai dengan brief yang kami berikan.",
    rating: 5,
    photoUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop"
  },
  {
    id: 3,
    name: "Keluarga Tan",
    role: "Family Portrait",
    content: "Suasananya sangat nyaman saat sesi foto, Mara dan tim sangat sabar terutama dengan anak-anak kami. Hasilnya amazing, sekarang foto keluarga kami terpajang indah di rumah!",
    rating: 5,
    photoUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=100&h=100&fit=crop"
  },
  {
    id: 4,
    name: "Rina & Budi",
    role: "Prewedding Client",
    content: "Sesi prewedding kami di pantai sangat memorable. Mara punya banyak ide kreatif dan membuat kami yang awalnya kaku jadi natural di depan kamera. Love all the photos!",
    rating: 5,
    photoUrl: "https://images.unsplash.com/photo-1594240462689-f61f36e18f2a?w=100&h=100&fit=crop"
  },
  {
    id: 5,
    name: "Urban Café",
    role: "Commercial Client",
    content: "Kerjasama yang sangat smooth! Tim Mara Picture memahami branding kami dan menghasilkan foto produk yang aesthetic dan menarik. Penjualan menu kami meningkat setelah menggunakan foto-foto mereka.",
    rating: 5,
    photoUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=100&h=100&fit=crop"
  },
  {
    id: 6,
    name: "PT Digital Indonesia",
    role: "Event Coverage",
    content: "Dokumentasi event Tech Summit kami sangat profesional. Semua momen penting ter-capture dengan baik dan delivery tepat waktu untuk kebutuhan publikasi kami.",
    rating: 5,
    photoUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=100&h=100&fit=crop"
  }
];

// Equipment & Technology
export const equipment = {
  cameras: [
    "Canon EOS R5 (45MP Full Frame)",
    "Sony A7R IV (61MP Full Frame)",
    "Canon EOS R6 (Backup Body)",
    "DJI Mavic 3 Pro (Drone)"
  ],
  lenses: [
    "Canon RF 24-70mm f/2.8L IS USM",
    "Canon RF 70-200mm f/2.8L IS USM",
    "Canon RF 85mm f/1.2L USM",
    "Canon RF 15-35mm f/2.8L IS USM",
    "Sony FE 24-70mm f/2.8 GM II",
    "Sony FE 85mm f/1.4 GM"
  ],
  lighting: [
    "Profoto B10 Plus (Flash System)",
    "Godox AD200 Pro (Portable Flash)",
    "LED Continuous Lighting Panel",
    "Reflectors & Diffusers Kit"
  ],
  accessories: [
    "DJI RS 3 Pro Gimbal Stabilizer",
    "Peak Design Travel Tripod",
    "Wireless Trigger System",
    "Memory Cards (CFexpress & SD)",
    "Portable SSD Storage"
  ]
};

// Process & Approach
export const photographyProcess = [
  {
    step: 1,
    title: "Initial Consultation",
    description: "Kami memulai dengan konsultasi mendalam untuk memahami visi, kebutuhan, dan ekspektasi Anda. Diskusi tentang konsep, lokasi, timeline, dan budget."
  },
  {
    step: 2,
    title: "Planning & Preparation",
    description: "Membuat detail planning termasuk shot list, timeline, dan koordinasi logistik. Kami juga melakukan site visit jika diperlukan untuk memastikan hasil maksimal."
  },
  {
    step: 3,
    title: "Photo Session",
    description: "Sesi foto berlangsung dengan profesional dan menyenangkan. Kami menciptakan suasana yang nyaman agar Anda dapat tampil natural dan authentic."
  },
  {
    step: 4,
    title: "Selection & Editing",
    description: "Foto-foto terbaik dipilih dan melalui proses editing profesional. Color grading, retouching, dan enhancement dilakukan dengan standar tinggi."
  },
  {
    step: 5,
    title: "Review & Revision",
    description: "Anda akan mendapat preview hasil editing dan dapat memberikan feedback untuk revisi minor sesuai kebutuhan."
  },
  {
    step: 6,
    title: "Final Delivery",
    description: "Hasil akhir dikirimkan dalam format high-resolution melalui online gallery yang mudah diakses. Album cetak juga disiapkan sesuai paket."
  }
];

// Statistics
export const statistics = [
  { label: "Years of Experience", value: "3+" },
  { label: "Happy Clients", value: "50+" },
  { label: "Projects Completed", value: "75+" },
  { label: "Awards Won", value: "3+" },
  { label: "Team Members", value: "2" },
  { label: "Countries Covered", value: "1" }
];
