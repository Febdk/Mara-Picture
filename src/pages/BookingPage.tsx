import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Calendar, MapPin, Camera, MessageCircle, CheckCircle2 } from 'lucide-react';
import { contactInfo } from '../data/mockData';
import { Badge } from '../components/ui/badge';
import { motion } from 'motion/react';

interface BookingPageProps {
  onNavigate: (page: string, sectionId?: string) => void;
}

export function BookingPage({ onNavigate }: BookingPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    location: '',
    serviceType: '',
    notes: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `
*BOOKING FOTO WISUDA - MARA PICTURE*

Nama: ${formData.name}
No. HP: ${formData.phone}
Email: ${formData.email}
Tanggal Wisuda: ${formData.date}
Lokasi: ${formData.location}
Jenis Layanan: ${formData.serviceType}
Catatan: ${formData.notes || '-'}

Mohon konfirmasi ketersediaan jadwal. Terima kasih!
    `.trim();

    const whatsappUrl = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const benefits = [
    "Konfirmasi booking langsung via WhatsApp",
    "Konsultasi gratis mengenai paket dan lokasi",
    "Flexible reschedule jika ada perubahan",
    "Pembayaran mudah & aman",
    "Customer service responsif"
  ];

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
              Booking
            </Badge>
          </motion.div>
          <motion.h1 
            className="mb-4 text-4xl md:text-5xl text-white"
            variants={fadeInUp}
          >
            Pesan Paket Foto Wisuda
          </motion.h1>
          <motion.p 
            className="text-xl text-white/80 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Isi form di bawah ini dan kami akan menghubungi Anda via WhatsApp untuk konfirmasi booking
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Booking Form Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Form */}
            <Card className="border-2 border-black">
              <CardHeader className="border-b-2 border-black">
                <CardTitle className="text-black">Formulir Pemesanan</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmitWhatsApp} className="space-y-4">
                  {/* Nama */}
                  <div>
                    <Label htmlFor="name" className="text-black">Nama Lengkap *</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama lengkap Anda"
                      className="border-2 border-black/20 focus:border-black"
                    />
                  </div>

                  {/* No HP */}
                  <div>
                    <Label htmlFor="phone" className="text-black">Nomor WhatsApp *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="08xxxxxxxxxx"
                      className="border-2 border-black/20 focus:border-black"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email" className="text-black">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="email@example.com"
                      className="border-2 border-black/20 focus:border-black"
                    />
                  </div>

                  {/* Tanggal */}
                  <div>
                    <Label htmlFor="date" className="text-black">Tanggal Wisuda *</Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      required
                      value={formData.date}
                      onChange={handleInputChange}
                      className="border-2 border-black/20 focus:border-black"
                    />
                  </div>

                  {/* Lokasi */}
                  <div>
                    <Label htmlFor="location" className="text-black">Lokasi / Kampus *</Label>
                    <Select 
                      required
                      onValueChange={(value) => handleSelectChange('location', value)}
                    >
                      <SelectTrigger className="border-2 border-black/20 focus:border-black">
                        <SelectValue placeholder="Pilih lokasi" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="UGM Yogyakarta">UGM Yogyakarta</SelectItem>
                        <SelectItem value="UNY Yogyakarta">UNY Yogyakarta</SelectItem>
                        <SelectItem value="UII Yogyakarta">UII Yogyakarta</SelectItem>
                        <SelectItem value="UPN Yogyakarta">UPN Veteran Yogyakarta</SelectItem>
                        <SelectItem value="UNS Solo">UNS Solo</SelectItem>
                        <SelectItem value="UMS Solo">UMS Solo</SelectItem>
                        <SelectItem value="lainnya">Lainnya</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Jenis Layanan */}
                  <div>
                    <Label htmlFor="serviceType" className="text-black">Jenis Layanan *</Label>
                    <Select 
                      required
                      onValueChange={(value) => handleSelectChange('serviceType', value)}
                    >
                      <SelectTrigger className="border-2 border-black/20 focus:border-black">
                        <SelectValue placeholder="Pilih paket layanan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Paket Basic - Foto Digital">Paket Basic - Foto Digital</SelectItem>
                        <SelectItem value="Paket Standard - Digital + Cetak">Paket Standard - Digital + Cetak</SelectItem>
                        <SelectItem value="Paket Premium - Studio + Outdoor">Paket Premium - Studio + Outdoor</SelectItem>
                        <SelectItem value="Paket Group - Foto Angkatan">Paket Group - Foto Angkatan</SelectItem>
                        <SelectItem value="Custom - Konsultasi">Custom Package</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Catatan */}
                  <div>
                    <Label htmlFor="notes" className="text-black">Catatan Tambahan</Label>
                    <Textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="Tulis catatan atau permintaan khusus (opsional)"
                      rows={3}
                      className="border-2 border-black/20 focus:border-black"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white border-2 border-[#25D366]"
                    size="lg"
                  >
                    <MessageCircle size={20} className="mr-2" />
                    Kirim via WhatsApp
                  </Button>

                  <p className="text-sm text-black/60 text-center mt-2">
                    * Wajib diisi
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Info & Benefits */}
            <div className="space-y-6">
              {/* Contact Info */}
              <Card className="border-2 border-black">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-black">Informasi Kontak</h3>
                  
                  <div className="space-y-3 text-black/80">
                    <div className="flex items-start gap-3">
                      <MessageCircle size={20} className="mt-1 flex-shrink-0 text-black" />
                      <div>
                        <p className="text-black">WhatsApp</p>
                        <p>{contactInfo.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin size={20} className="mt-1 flex-shrink-0 text-black" />
                      <div>
                        <p className="text-black">Lokasi</p>
                        <p>{contactInfo.location}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Calendar size={20} className="mt-1 flex-shrink-0 text-black" />
                      <div>
                        <p className="text-black">Jam Operasional</p>
                        <p>{contactInfo.operationalHours}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card className="border-2 border-black">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-black">Keuntungan Booking</h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2 text-black/80">
                        <CheckCircle2 size={20} className="mt-0.5 flex-shrink-0 text-black" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="border-2 border-black bg-black text-white">
                <CardContent className="p-6">
                  <Camera size={32} className="mb-3 text-white" />
                  <h3 className="mb-2 text-white">Butuh Konsultasi?</h3>
                  <p className="text-white/80 mb-4 text-sm">
                    Belum yakin paket mana yang cocok? Hubungi kami untuk konsultasi gratis!
                  </p>
                  <Button 
                    onClick={() => onNavigate('services')}
                    variant="outline" 
                    className="w-full border-2 border-white text-white hover:bg-white hover:text-black"
                  >
                    Lihat Paket Layanan
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Info */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl text-white">Proses Booking</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-black mx-auto mb-4 flex items-center justify-center text-2xl border-2 border-white">
                1
              </div>
              <h4 className="mb-2 text-white">Isi Form</h4>
              <p className="text-sm text-white/70">
                Lengkapi data booking Anda
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white text-black mx-auto mb-4 flex items-center justify-center text-2xl border-2 border-white">
                2
              </div>
              <h4 className="mb-2 text-white">Chat WhatsApp</h4>
              <p className="text-sm text-white/70">
                Tim kami akan merespons segera
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white text-black mx-auto mb-4 flex items-center justify-center text-2xl border-2 border-white">
                3
              </div>
              <h4 className="mb-2 text-white">Konfirmasi</h4>
              <p className="text-sm text-white/70">
                Jadwal & paket dikonfirmasi
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white text-black mx-auto mb-4 flex items-center justify-center text-2xl border-2 border-white">
                4
              </div>
              <h4 className="mb-2 text-white">Sesi Foto</h4>
              <p className="text-sm text-white/70">
                Nikmati sesi foto wisuda Anda!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
