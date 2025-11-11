import { useState } from 'react';
import { GalleryGrid } from '../components/GalleryGrid';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Quote, Star } from 'lucide-react';
import { testimonials } from '../data/mockData';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'motion/react';

interface PortfolioPageProps {
  onNavigate: (page: string, sectionId?: string) => void;
}

export function PortfolioPage({ onNavigate }: PortfolioPageProps) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section 
        className="pt-32 pb-12 px-4 bg-black text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="container mx-auto max-w-4xl text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <Badge className="mb-4 bg-white text-black border-2 border-white">
              Portfolio
            </Badge>
          </motion.div>
          <motion.h1 
            className="mb-4 text-4xl md:text-5xl text-white"
            variants={fadeInUp}
          >
            Karya Terbaik Kami
          </motion.h1>
          <motion.p 
            className="text-xl text-white/80 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Jelajahi koleksi foto wisuda, prewedding, portrait, dan event dari berbagai proyek yang telah kami kerjakan
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section 
        className="py-20 px-4 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto">
          <GalleryGrid />
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-4 bg-white text-black border-2 border-white">
                Testimonial
              </Badge>
            </motion.div>
            <motion.h2 
              className="mb-4 text-4xl text-white"
              variants={fadeInUp}
            >
              Apa Kata Klien Kami
            </motion.h2>
            <motion.p 
              className="text-white/70 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Kepuasan dan kepercayaan klien adalah prioritas utama kami
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="bg-white text-black border-2 border-white h-full">
                  <CardContent className="p-6">
                    <Quote className="text-black mb-4" size={32} />
                    <p className="text-black/80 leading-relaxed mb-4 italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-3 mt-4 pt-4 border-t-2 border-black/10">
                      <ImageWithFallback
                        src={testimonial.photoUrl}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-black"
                      />
                      <div>
                        <h4 className="text-black">{testimonial.name}</h4>
                        <p className="text-sm text-black/60">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-1 mt-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="black" className="text-black" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <motion.div 
          className="container mx-auto max-w-4xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="mb-6 text-4xl text-black"
            variants={fadeInUp}
          >
            Tertarik dengan Hasil Karya Kami?
          </motion.h2>
          <motion.p 
            className="text-xl text-black/70 mb-8 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Mari wujudkan momen istimewa Anda menjadi karya foto yang memorable bersama Mara Picture
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
          >
            <motion.button 
              onClick={() => onNavigate('booking')}
              className="px-8 py-3 bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-colors duration-300"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Pesan Sekarang
            </motion.button>
            <motion.button 
              onClick={() => onNavigate('services')}
              className="px-8 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Lihat Paket Layanan
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
