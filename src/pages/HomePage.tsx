import { HeroCarousel } from '../components/HeroCarousel';
import { GalleryGrid } from '../components/GalleryGrid';
import { ContactForm } from '../components/ContactForm';
import { aboutData, contactInfo, galleries, coreValues } from '../data/mockData';
import { Mail, Phone, MapPin, Camera, Award, Users, Clock } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

interface HomePageProps {
  onNavigate: (page: string, sectionId?: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <>
      {/* Hero Section with Carousel */}
      <div id="home">
        <HeroCarousel onViewPortfolio={() => scrollToSection('portfolio')} />
      </div>

      {/* Tentang Kami Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-4 bg-black text-white border-2 border-black">
                Mara Picture
              </Badge>
            </motion.div>
            <h2 className="mb-4 text-4xl md:text-5xl text-black">
              Fotografer Profesional untuk Wisuda<br />di Yogyakarta & Solo
            </h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              Abadikan momen kelulusan Anda dengan sentuhan profesional. 
              Kami spesialis dalam fotografi wisuda, prewedding, dan berbagai event istimewa lainnya.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 mb-16" 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div 
              className="text-center border-2 border-black p-6 hover:bg-black hover:text-white transition-all duration-300 hover:scale-105"
              variants={scaleIn}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Camera size={32} className="mx-auto mb-3" />
              <div className="text-3xl mb-1">3+</div>
              <div className="text-sm opacity-70">Tahun Pengalaman</div>
            </motion.div>
            <motion.div 
              className="text-center border-2 border-black p-6 hover:bg-black hover:text-white transition-all duration-300 hover:scale-105"
              variants={scaleIn}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Users size={32} className="mx-auto mb-3" />
              <div className="text-3xl mb-1">50+</div>
              <div className="text-sm opacity-70">Klien Puas</div>
            </motion.div>
            <motion.div 
              className="text-center border-2 border-black p-6 hover:bg-black hover:text-white transition-all duration-300 hover:scale-105"
              variants={scaleIn}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Award size={32} className="mx-auto mb-3" />
              <div className="text-3xl mb-1">3+</div>
              <div className="text-sm opacity-70">Penghargaan</div>
            </motion.div>
            <motion.div 
              className="text-center border-2 border-black p-6 hover:bg-black hover:text-white transition-all duration-300 hover:scale-105"
              variants={scaleIn}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Clock size={32} className="mx-auto mb-3" />
              <div className="text-3xl mb-1">24/7</div>
              <div className="text-sm opacity-70">Fast Response</div>
            </motion.div>
          </motion.div>

          {/* Value Proposition */}
          <motion.div 
            className="grid md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            {coreValues.slice(0, 3).map((value, index) => (
              <motion.div
                key={value.id}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="border-2 border-black h-full hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <h3 className="mb-3 text-black">{value.title}</h3>
                    <p className="text-sm text-black/70">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section id="portfolio" className="py-20 px-4 bg-black text-white">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-4 bg-white text-black border-2 border-white">
                Portfolio
              </Badge>
            </motion.div>
            <h2 className="mb-4 text-4xl md:text-5xl text-white">Karya Terbaik Kami</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Lihat hasil pemotretan wisuda, prewedding, portrait, dan event yang telah kami dokumentasikan
            </p>
          </motion.div>
          
          {/* Portfolio Preview Grid - 4 terbaik */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {galleries.slice(0, 4).map((gallery, index) => (
              <motion.div 
                key={gallery.id} 
                className="group cursor-pointer"
                variants={scaleIn}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="aspect-square overflow-hidden border-2 border-white mb-3">
                  <ImageWithFallback
                    src={gallery.coverImage}
                    alt={gallery.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <Badge className="mb-2 bg-white text-black border-2 border-white text-xs">
                  {gallery.category}
                </Badge>
                <h3 className="text-white">{gallery.name}</h3>
                <p className="text-sm text-white/60">{gallery.client}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              onClick={() => onNavigate('portfolio')}
              className="bg-white text-black hover:bg-white/90 border-2 border-white transition-all duration-300"
              size="lg"
            >
              Lihat Semua Portfolio
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-black text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            {/* Photo */}
            <motion.div 
              className="order-2 md:order-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInLeft}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="aspect-square overflow-hidden border-2 border-white shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback
                  src={aboutData.photoUrl}
                  alt={aboutData.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Bio */}
            <motion.div 
              className="order-1 md:order-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-4 text-4xl md:text-5xl text-white">About {aboutData.name}</h2>
              <p className="mb-4 text-xl text-white/80">{aboutData.title}</p>
              <p className="text-white/70 leading-relaxed mb-6">
                {aboutData.bio}
              </p>
              <motion.div 
                className="space-y-3 text-white/90 mb-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.div 
                  className="flex items-center gap-2"
                  variants={fadeInUp}
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>3+ tahun pengalaman profesional</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2"
                  variants={fadeInUp}
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>50+ client puas</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2"
                  variants={fadeInUp}
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Sertifikasi Nasional</span>
                </motion.div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={() => onNavigate('about')}
                  className="bg-white text-black hover:bg-white/90 border-2 border-white transition-all duration-300"
                >
                  Selengkapnya Tentang Kami
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
          >
            <h2 className="mb-4 text-4xl md:text-5xl text-black">Get In Touch</h2>
            <p className="text-black/70">
              Ready to book a session or have questions? Let's connect!
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            {/* Contact Info */}
            <motion.div variants={fadeInLeft}>
              <h3 className="mb-6 text-black">Contact Information</h3>
              
              <motion.div 
                className="space-y-4"
                variants={staggerContainer}
              >
                <motion.div 
                  className="flex items-start gap-3"
                  variants={fadeInUp}
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-5 h-5 mt-1 text-black flex-shrink-0" />
                  <div>
                    <p className="text-black/60">Email</p>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="text-black hover:underline"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-3"
                  variants={fadeInUp}
                  whileHover={{ x: 5 }}
                >
                  <Phone className="w-5 h-5 mt-1 text-black flex-shrink-0" />
                  <div>
                    <p className="text-black/60">Phone</p>
                    <a 
                      href={`tel:${contactInfo.phone}`}
                      className="text-black hover:underline"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-3"
                  variants={fadeInUp}
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="w-5 h-5 mt-1 text-black flex-shrink-0" />
                  <div>
                    <p className="text-black/60">Location</p>
                    <p className="text-black">{contactInfo.location}</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Business Hours */}
              <motion.div 
                className="mt-8 p-4 bg-black text-white"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="mb-3 text-white">Business Hours</h4>
                <div className="space-y-2 text-sm text-white/90">
                  <div className="flex justify-between">
                    <span>Senin - Jumat</span>
                    <span>09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sabtu</span>
                    <span>10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Minggu</span>
                    <span>By Appointment</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeInRight}>
              <ContactForm />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
