import { services } from '../data/mockData';
import { ServiceCard } from '../components/ServiceCard';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Camera, Award, Clock, Users, GraduationCap, Heart, Briefcase, User, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface ServicesPageProps {
  onNavigate: (page: string, sectionId?: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const scrollToContact = () => {
    onNavigate('home', 'contact');
  };

  const handleBooking = () => {
    onNavigate('booking');
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <motion.section 
        className="py-20 px-4 bg-black text-white"
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
          <motion.div variants={scaleIn}>
            <Badge className="mb-4 bg-white text-black border-2 border-white">
              Paket Layanan
            </Badge>
          </motion.div>
          <motion.h1 
            className="mb-6 text-5xl md:text-6xl text-white"
            variants={fadeInUp}
          >
            Paket Foto Wisuda
          </motion.h1>
          <motion.p 
            className="text-xl text-white/80 mb-8"
            variants={fadeInUp}
          >
            Layanan fotografi wisuda profesional yang dirancang khusus untuk momen kelulusan Anda. 
            Hasil berkualitas tinggi di Yogyakarta & Solo.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={handleBooking}
                size="lg"
                className="bg-white text-black hover:bg-white/90 border-2 border-white transition-all duration-300"
              >
                Pesan Sekarang
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={scrollToContact}
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                Konsultasi Gratis
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.h2 
            className="text-center mb-12 text-3xl md:text-4xl text-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Mara Picture?
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div 
              className="text-center"
              variants={scaleIn}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="w-16 h-16 bg-black text-white flex items-center justify-center mx-auto mb-4 border-2 border-black"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Camera size={32} />
              </motion.div>
              <h3 className="mb-2 text-black">Professional Equipment</h3>
              <p className="text-black/60">
                Menggunakan kamera dan lensa terbaik untuk hasil maksimal
              </p>
            </motion.div>
            <motion.div 
              className="text-center"
              variants={scaleIn}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="w-16 h-16 bg-black text-white flex items-center justify-center mx-auto mb-4 border-2 border-black"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Award size={32} />
              </motion.div>
              <h3 className="mb-2 text-black">8+ Years Experience</h3>
              <p className="text-black/60">
                Berpengalaman menangani berbagai jenis proyek fotografi
              </p>
            </motion.div>
            <motion.div 
              className="text-center"
              variants={scaleIn}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="w-16 h-16 bg-black text-white flex items-center justify-center mx-auto mb-4 border-2 border-black"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Clock size={32} />
              </motion.div>
              <h3 className="mb-2 text-black">Fast Delivery</h3>
              <p className="text-black/60">
                Proses editing cepat dengan kualitas terjamin
              </p>
            </motion.div>
            <motion.div 
              className="text-center"
              variants={scaleIn}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="w-16 h-16 bg-black text-white flex items-center justify-center mx-auto mb-4 border-2 border-black"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Users size={32} />
              </motion.div>
              <h3 className="mb-2 text-black">200+ Happy Clients</h3>
              <p className="text-black/60">
                Kepercayaan client adalah prioritas utama kami
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Packages */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Sparkles className="w-12 h-12 text-white mx-auto mb-4" />
            </motion.div>
            <h2 className="mb-6 text-5xl md:text-6xl text-white">Jenis Layanan</h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Solusi fotografi profesional untuk berbagai momen penting dalam hidup Anda
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Tabs defaultValue="wisuda" className="w-full">
              <TabsList className="w-full justify-center mb-12 bg-white/10 backdrop-blur-sm border-2 border-white/20 h-auto p-2 gap-2 flex-wrap">
                <TabsTrigger 
                  value="wisuda" 
                  className="data-[state=active]:bg-white data-[state=active]:text-black text-white px-6 py-3 flex items-center gap-2"
                >
                  <GraduationCap className="w-5 h-5" />
                  Wisuda
                </TabsTrigger>
                <TabsTrigger 
                  value="wedding" 
                  className="data-[state=active]:bg-white data-[state=active]:text-black text-white px-6 py-3 flex items-center gap-2"
                >
                  <Heart className="w-5 h-5" />
                  Wedding
                </TabsTrigger>
                <TabsTrigger 
                  value="portrait" 
                  className="data-[state=active]:bg-white data-[state=active]:text-black text-white px-6 py-3 flex items-center gap-2"
                >
                  <User className="w-5 h-5" />
                  Portrait
                </TabsTrigger>
                <TabsTrigger 
                  value="commercial" 
                  className="data-[state=active]:bg-white data-[state=active]:text-black text-white px-6 py-3 flex items-center gap-2"
                >
                  <Briefcase className="w-5 h-5" />
                  Commercial
                </TabsTrigger>
              </TabsList>

              {/* Wisuda Tab */}
              <TabsContent value="wisuda" className="mt-0">
                <motion.div 
                  className="grid md:grid-cols-2 gap-8 items-center"
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                >
                  <motion.div 
                    className="order-2 md:order-1"
                    variants={fadeInUp}
                  >
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden border-4 border-white">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1623461487986-9400110de28e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzYyNzQwMjIwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="Graduation Photography"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 text-white">
                        <Badge className="bg-white text-black mb-2">Spesialisasi</Badge>
                        <p className="text-lg">Yogyakarta & Solo</p>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="order-1 md:order-2 space-y-6"
                    variants={fadeInUp}
                  >
                    <div>
                      <h3 className="text-3xl md:text-4xl mb-4 text-white">Fotografi Wisuda</h3>
                      <p className="text-white/80 mb-6">
                        Abadikan momen kelulusan yang tak terlupakan dengan hasil foto berkualitas tinggi. 
                        Kami berpengalaman menangani sesi foto wisuda di berbagai universitas.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-white mb-1">Sesi Foto Individual</h4>
                          <p className="text-white/70 text-sm">Potret wisuda personal dengan berbagai pose dan angle terbaik</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-white mb-1">Foto Keluarga</h4>
                          <p className="text-white/70 text-sm">Dokumentasi momen kebersamaan dengan orang tua dan keluarga</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-white mb-1">Foto Grup Teman</h4>
                          <p className="text-white/70 text-sm">Kenangan bersama sahabat seperjuangan kuliah</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-white mb-1">Fast Editing & Delivery</h4>
                          <p className="text-white/70 text-sm">Hasil foto siap dalam 3-5 hari kerja dengan kualitas terbaik</p>
                        </div>
                      </div>
                    </div>

                    <motion.div 
                      className="flex gap-4 pt-4"
                      whileHover={{ scale: 1.02 }}
                    >
                      <Button
                        onClick={scrollToContact}
                        size="lg"
                        className="bg-white text-black hover:bg-white/90 border-2 border-white transition-all duration-300"
                      >
                        Tanya Paket Wisuda
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </TabsContent>

              {/* Wedding Tab */}
              <TabsContent value="wedding" className="mt-0">
                <motion.div 
                  className="grid md:grid-cols-2 gap-8 items-center"
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                >
                  <motion.div 
                    className="order-2 md:order-1"
                    variants={fadeInUp}
                  >
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden border-4 border-white">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1533091090875-1ff4acc497dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzYyNzE2MzI2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="Wedding Photography"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 text-white">
                        <Badge className="bg-white text-black mb-2">Premium</Badge>
                        <p className="text-lg">Full Day Coverage</p>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="order-1 md:order-2 space-y-6"
                    variants={fadeInUp}
                  >
                    <div>
                      <h3 className="text-3xl md:text-4xl mb-4 text-white">Wedding Photography</h3>
                      <p className="text-white/80 mb-6">
                        Dokumentasi lengkap hari pernikahan Anda dari akad hingga resepsi. 
                        Kami menangkap setiap momen berharga dengan gaya fotografi yang natural dan emosional.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-white mb-1">Full Day Coverage</h4>
                          <p className="text-white/70 text-sm">Liputan lengkap mulai dari persiapan hingga resepsi (12 jam)</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-white mb-1">2 Fotografer Profesional</h4>
                          <p className="text-white/70 text-sm">Tim fotografer berpengalaman untuk hasil maksimal</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-white mb-1">Video Highlight Cinematic</h4>
                          <p className="text-white/70 text-sm">Video pendek 5-7 menit dengan editing cinematic</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-white mb-1">Premium Album</h4>
                          <p className="text-white/70 text-sm">Album cetak premium ukuran 30x30cm dengan 40 halaman</p>
                        </div>
                      </div>
                    </div>

                    <motion.div 
                      className="flex gap-4 pt-4"
                      whileHover={{ scale: 1.02 }}
                    >
                      <Button
                        onClick={scrollToContact}
                        size="lg"
                        className="bg-white text-black hover:bg-white/90 border-2 border-white transition-all duration-300"
                      >
                        Tanya Paket Wedding
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </TabsContent>

              {/* Portrait Tab */}
              <TabsContent value="portrait" className="mt-0">
                <motion.div 
                  className="grid md:grid-cols-2 gap-8 items-center"
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                >
                  <motion.div 
                    className="order-2 md:order-1"
                    variants={fadeInUp}
                  >
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden border-4 border-white">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjI2Njk2MjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="Portrait Photography"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 text-white">
                        <Badge className="bg-white text-black mb-2">Personal</Badge>
                        <p className="text-lg">Indoor & Outdoor</p>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="order-1 md:order-2 space-y-6"
                    variants={fadeInUp}
                  >
                    <div>
                      <h3 className="text-3xl md:text-4xl mb-4 text-white">Portrait Photography</h3>
                      <p className="text-white/80 mb-6">
                        Sesi foto potret personal, keluarga, atau profesional dengan hasil yang natural dan artistic. 
                        Cocok untuk keperluan bisnis, social media, atau kenangan keluarga.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-white mb-1">Professional Headshot</h4>
                          <p className="text-white/70 text-sm">Potret profesional untuk LinkedIn, CV, atau company profile</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-white mb-1">Family Portrait</h4>
                          <p className="text-white/70 text-sm">Sesi foto keluarga yang hangat dan natural</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-white mb-1">Lifestyle Photography</h4>
                          <p className="text-white/70 text-sm">Foto dengan konsep lifestyle untuk social media atau personal branding</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-white mb-1">Wardrobe & Makeup Tips</h4>
                          <p className="text-white/70 text-sm">Konsultasi gratis untuk outfit dan makeup yang sesuai</p>
                        </div>
                      </div>
                    </div>

                    <motion.div 
                      className="flex gap-4 pt-4"
                      whileHover={{ scale: 1.02 }}
                    >
                      <Button
                        onClick={scrollToContact}
                        size="lg"
                        className="bg-white text-black hover:bg-white/90 border-2 border-white transition-all duration-300"
                      >
                        Tanya Paket Portrait
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </TabsContent>

              {/* Commercial Tab */}
              <TabsContent value="commercial" className="mt-0">
                <motion.div 
                  className="grid md:grid-cols-2 gap-8 items-center"
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                >
                  <motion.div 
                    className="order-2 md:order-1"
                    variants={fadeInUp}
                  >
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden border-4 border-white">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1660557989690-d09a28f6356e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzYyNzUxMTA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="Commercial Photography"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 text-white">
                        <Badge className="bg-white text-black mb-2">Business</Badge>
                        <p className="text-lg">Commercial Use Rights</p>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="order-1 md:order-2 space-y-6"
                    variants={fadeInUp}
                  >
                    <div>
                      <h3 className="text-3xl md:text-4xl mb-4 text-white">Commercial Photography</h3>
                      <p className="text-white/80 mb-6">
                        Solusi fotografi profesional untuk kebutuhan bisnis dan komersial. 
                        Dari product photography hingga event coverage dengan hasil berkualitas tinggi.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-white mb-1">Product Photography</h4>
                          <p className="text-white/70 text-sm">Foto produk berkualitas tinggi untuk e-commerce dan marketing</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-white mb-1">Food & Beverage</h4>
                          <p className="text-white/70 text-sm">Food styling dan fotografi untuk restaurant dan café</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-white mb-1">Corporate Event</h4>
                          <p className="text-white/70 text-sm">Dokumentasi acara perusahaan, seminar, dan konferensi</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-white mb-1">Fast Turnaround</h4>
                          <p className="text-white/70 text-sm">Delivery cepat 3-5 hari untuk kebutuhan marketing yang urgent</p>
                        </div>
                      </div>
                    </div>

                    <motion.div 
                      className="flex gap-4 pt-4"
                      whileHover={{ scale: 1.02 }}
                    >
                      <Button
                        onClick={scrollToContact}
                        size="lg"
                        className="bg-white text-black hover:bg-white/90 border-2 border-white transition-all duration-300"
                      >
                        Tanya Paket Commercial
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.h2 
            className="text-center mb-12 text-3xl md:text-4xl text-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Layanan Tambahan
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div 
              className="p-6 border-2 border-black hover:bg-black hover:text-white transition-colors duration-300"
              variants={scaleIn}
              whileHover={{ scale: 1.05, rotate: 1 }}
            >
              <h3 className="mb-3">Extra Hours</h3>
              <p className="text-sm opacity-70">Tambahan waktu sesi foto di luar paket untuk mengabadikan lebih banyak momen</p>
            </motion.div>
            <motion.div 
              className="p-6 border-2 border-black hover:bg-black hover:text-white transition-colors duration-300"
              variants={scaleIn}
              whileHover={{ scale: 1.05, rotate: -1 }}
            >
              <h3 className="mb-3">Video Highlights</h3>
              <p className="text-sm opacity-70">Video cinematic 3-5 menit dengan musik untuk kenangan yang lebih hidup</p>
            </motion.div>
            <motion.div 
              className="p-6 border-2 border-black hover:bg-black hover:text-white transition-colors duration-300"
              variants={scaleIn}
              whileHover={{ scale: 1.05, rotate: 1 }}
            >
              <h3 className="mb-3">Drone Photography</h3>
              <p className="text-sm opacity-70">Aerial shots menggunakan drone profesional untuk perspektif yang spektakuler</p>
            </motion.div>
            <motion.div 
              className="p-6 border-2 border-black hover:bg-black hover:text-white transition-colors duration-300"
              variants={scaleIn}
              whileHover={{ scale: 1.05, rotate: -1 }}
            >
              <h3 className="mb-3">Premium Album</h3>
              <p className="text-sm opacity-70">Album cetak premium dengan berbagai ukuran dan desain custom</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <motion.h2 
            className="text-center mb-16 text-3xl md:text-4xl text-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            How It Works
          </motion.h2>
          <motion.div 
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div 
              className="flex gap-6 items-start"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
            >
              <motion.div 
                className="w-12 h-12 bg-black text-white flex items-center justify-center flex-shrink-0 border-2 border-black"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                1
              </motion.div>
              <div>
                <h3 className="mb-2 text-black">Consultation</h3>
                <p className="text-black/70">
                  Hubungi kami untuk konsultasi gratis. Diskusikan kebutuhan, konsep, dan budget Anda.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="flex gap-6 items-start"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
            >
              <motion.div 
                className="w-12 h-12 bg-black text-white flex items-center justify-center flex-shrink-0 border-2 border-black"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                2
              </motion.div>
              <div>
                <h3 className="mb-2 text-black">Booking & Planning</h3>
                <p className="text-black/70">
                  Pilih paket dan tentukan tanggal. Kami akan membantu merencanakan detail sesi foto.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="flex gap-6 items-start"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
            >
              <motion.div 
                className="w-12 h-12 bg-black text-white flex items-center justify-center flex-shrink-0 border-2 border-black"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                3
              </motion.div>
              <div>
                <h3 className="mb-2 text-black">Photo Session</h3>
                <p className="text-black/70">
                  Sesi foto berlangsung sesuai jadwal. Kami akan memastikan Anda merasa nyaman dan natural.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="flex gap-6 items-start"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
            >
              <motion.div 
                className="w-12 h-12 bg-black text-white flex items-center justify-center flex-shrink-0 border-2 border-black"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                4
              </motion.div>
              <div>
                <h3 className="mb-2 text-black">Editing & Review</h3>
                <p className="text-black/70">
                  Foto akan di-edit secara profesional. Anda dapat memberikan feedback untuk revisi.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="flex gap-6 items-start"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
            >
              <motion.div 
                className="w-12 h-12 bg-black text-white flex items-center justify-center flex-shrink-0 border-2 border-black"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                5
              </motion.div>
              <div>
                <h3 className="mb-2 text-black">Delivery</h3>
                <p className="text-black/70">
                  Terima hasil akhir dalam format digital high-resolution melalui online gallery.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black text-white">
        <motion.div 
          className="container mx-auto max-w-3xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="mb-6 text-4xl md:text-5xl text-white"
            variants={fadeInUp}
          >
            Siap Mengabadikan Momen Wisuda Anda?
          </motion.h2>
          <motion.p 
            className="text-xl text-white/80 mb-8"
            variants={fadeInUp}
          >
            Hubungi kami sekarang untuk konsultasi dan informasi lebih lanjut. Slot terbatas untuk setiap periode wisuda!
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-white text-black hover:bg-white/90 border-2 border-white transition-all duration-300"
              >
                Hubungi Kami
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={() => onNavigate('portfolio')}
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                Lihat Portfolio
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
