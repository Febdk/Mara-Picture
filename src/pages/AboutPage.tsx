import { 
  aboutData, 
  companyStory, 
  coreValues, 
  teamMembers, 
  awards, 
  testimonials,
  equipment,
  photographyProcess,
  statistics
} from '../data/mockData';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Heart, 
  Star, 
  Lightbulb, 
  Shield, 
  Camera, 
  Award,
  Users,
  Target,
  CheckCircle2,
  Quote
} from 'lucide-react';
import { motion } from 'motion/react';

interface AboutPageProps {
  onNavigate: (page: string, sectionId?: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const scrollToContact = () => {
    onNavigate('home', 'contact');
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  const getValueIcon = (iconName: string) => {
    switch (iconName) {
      case 'heart':
        return <Heart size={32} />;
      case 'star':
        return <Star size={32} />;
      case 'lightbulb':
        return <Lightbulb size={32} />;
      case 'shield':
        return <Shield size={32} />;
      default:
        return <Heart size={32} />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="pt-32 pb-20 px-4 bg-black text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={scaleIn}>
              <Badge className="mb-4 bg-white text-black border-2 border-white">About Us</Badge>
            </motion.div>
            <motion.h1 
              className="mb-6 text-5xl md:text-6xl text-white"
              variants={fadeInUp}
            >
              Meet Mara Picture
            </motion.h1>
            <motion.p 
              className="text-xl text-white/80 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Lebih dari sekadar fotografi - kami adalah storyteller yang mengabadikan 
              setiap emosi dan momen berharga dalam hidup Anda.
            </motion.p>
          </motion.div>

          {/* Statistics */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {statistics.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center border-2 border-white p-6 hover:bg-white hover:text-black transition-colors duration-300"
                variants={scaleIn}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <div className="text-4xl mb-2">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Company Story */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6 text-4xl text-black">Our Story</h2>
              <Badge className="mb-4 bg-black text-white border-2 border-black">
                Founded in {companyStory.founded}
              </Badge>
              <div className="space-y-4 text-black/70">
                {companyStory.story.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden border-2 border-black">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1698502453332-03fa2ddceb71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoZXIlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzYyMTYyMDE0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Photography Equipment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white text-black border-2 border-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="text-black" size={32} />
                  <h3 className="text-black">Our Mission</h3>
                </div>
                <p className="text-black/70 leading-relaxed">
                  {companyStory.mission}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white text-black border-2 border-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="text-black" size={32} />
                  <h3 className="text-black">Our Vision</h3>
                </div>
                <p className="text-black/70 leading-relaxed">
                  {companyStory.vision}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-4xl text-black">Our Core Values</h2>
            <p className="text-black/70 max-w-2xl mx-auto">
              Nilai-nilai fundamental yang menjadi fondasi setiap karya dan layanan kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value) => (
              <Card key={value.id} className="border-2 border-black hover:bg-black hover:text-white transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-black text-white group-hover:bg-white group-hover:text-black border-2 border-black mx-auto mb-4 flex items-center justify-center transition-colors duration-300">
                    {getValueIcon(value.icon)}
                  </div>
                  <h3 className="mb-3">{value.title}</h3>
                  <p className="text-sm opacity-70">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
     <section className="py-20 px-4 bg-black text-white">
  <div className="container mx-auto max-w-6xl">
    <div className="text-center mb-16">
      <h2 className="mb-4 text-4xl text-white">Meet Our Team</h2>
      <p className="text-white/70 max-w-2xl mx-auto">
        Tim profesional yang berdedikasi untuk menghadirkan hasil terbaik di setiap project
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto"> 
  {teamMembers.map((member) => (
    <div key={member.id} className="group text-center">
        
      <div className="aspect-square overflow-hidden border-2 border-white mb-4 mx-auto w-full max-w-[200px] rounded-full"> {/* <-- Ubah max-w-xs menjadi max-w-[200px] atau max-w-sm untuk ukuran yang lebih spesifik */}
        <ImageWithFallback
          src={member.photoUrl}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
      <h3 className="mb-1 text-white">{member.name}</h3>
      <p className="text-sm text-white/60 mb-3">{member.role}</p>
      <p className="text-sm text-white/80 leading-relaxed">
        {member.bio}
      </p>
    </div>
  ))}
</div>
  </div>
</section>

      {/* Photography Process */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-4xl text-black">Our Process</h2>
            <p className="text-black/70 max-w-2xl mx-auto">
              Pendekatan sistematis kami untuk memastikan hasil yang konsisten dan memuaskan
            </p>
          </div>

          <div className="space-y-8">
            {photographyProcess.map((process) => (
              <div key={process.step} className="flex gap-6 items-start">
                <div className="w-16 h-16 bg-black text-white flex items-center justify-center flex-shrink-0 border-2 border-black text-2xl">
                  {process.step}
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-black">{process.title}</h3>
                  <p className="text-black/70 leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Technology */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-4xl text-white">Equipment & Technology</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Kami menggunakan peralatan profesional terbaik untuk menghasilkan kualitas maksimal
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Cameras */}
            <Card className="bg-white text-black border-2 border-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Camera className="text-black" size={24} />
                  <h3 className="text-black">Cameras & Drones</h3>
                </div>
                <ul className="space-y-2">
                  {equipment.cameras.map((camera, index) => (
                    <li key={index} className="flex items-start gap-2 text-black/70">
                      <CheckCircle2 size={16} className="mt-1 flex-shrink-0 text-black" />
                      <span>{camera}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Lenses */}
            <Card className="bg-white text-black border-2 border-white">
              <CardContent className="p-6">
                <h3 className="mb-4 text-black">Premium Lenses</h3>
                <ul className="space-y-2">
                  {equipment.lenses.map((lens, index) => (
                    <li key={index} className="flex items-start gap-2 text-black/70">
                      <CheckCircle2 size={16} className="mt-1 flex-shrink-0 text-black" />
                      <span>{lens}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Lighting */}
            <Card className="bg-white text-black border-2 border-white">
              <CardContent className="p-6">
                <h3 className="mb-4 text-black">Lighting Equipment</h3>
                <ul className="space-y-2">
                  {equipment.lighting.map((light, index) => (
                    <li key={index} className="flex items-start gap-2 text-black/70">
                      <CheckCircle2 size={16} className="mt-1 flex-shrink-0 text-black" />
                      <span>{light}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Accessories */}
            <Card className="bg-white text-black border-2 border-white">
              <CardContent className="p-6">
                <h3 className="mb-4 text-black">Support Equipment</h3>
                <ul className="space-y-2">
                  {equipment.accessories.map((accessory, index) => (
                    <li key={index} className="flex items-start gap-2 text-black/70">
                      <CheckCircle2 size={16} className="mt-1 flex-shrink-0 text-black" />
                      <span>{accessory}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-4xl text-black">Awards & Recognition</h2>
            <p className="text-black/70 max-w-2xl mx-auto">
              Pencapaian dan pengakuan yang kami terima atas dedikasi dan kualitas karya kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award) => (
              <Card key={award.id} className="border-2 border-black hover:bg-black hover:text-white transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-black text-white group-hover:bg-white group-hover:text-black border-2 border-black flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                      <Award size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2">{award.title}</h3>
                      <p className="text-sm opacity-70">
                        {award.organization}
                      </p>
                      <Badge className="mt-2 bg-black text-white group-hover:bg-white group-hover:text-black border-2 border-current">
                        {award.year}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-4xl text-white">What Our Clients Say</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Kepercayaan dan kepuasan client adalah prioritas utama kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-white text-black border-2 border-white">
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl text-black">Ready to Work With Us?</h2>
          <p className="text-xl text-black/70 mb-8 max-w-2xl mx-auto">
            Mari wujudkan visi fotografi Anda bersama Mara Picture. 
            Hubungi kami untuk konsultasi gratis dan diskusikan project Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-all duration-300"
            >
              Hubungi Kami
            </Button>
            <Button 
              onClick={() => onNavigate('portfolio')}
              size="lg"
              variant="outline"
              className="border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300"
            >
              Lihat Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
