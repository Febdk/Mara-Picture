import { Check } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Service } from '../data/mockData';
import { motion } from 'motion/react';

interface ServiceCardProps {
  service: Service;
  onBookClick: () => void;
}

// Images for popular cards
const popularImages = {
  'Premium Package': 'https://images.unsplash.com/photo-1705581900506-44182011fea7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  'Wedding Package': 'https://images.unsplash.com/photo-1759887244219-17c3d64a7f01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
};

export function ServiceCard({ service, onBookClick }: ServiceCardProps) {
  const hasHeaderImage = service.popular && (popularImages[service.name as keyof typeof popularImages]);
  const headerImageUrl = hasHeaderImage ? popularImages[service.name as keyof typeof popularImages] : '';

  return (
    <Card 
      className={`relative h-full flex flex-col overflow-hidden rounded-3xl ${
        service.popular 
          ? 'border-[3px] border-yellow-600 bg-white text-black shadow-2xl' 
          : 'border-2 border-gray-700 bg-gray-800 text-white'
      }`}
    >
      {/* Header with image background for popular cards */}
      <CardHeader 
        className="text-center pb-4 pt-6 px-6 relative h-[160px] flex flex-col justify-center"
        style={hasHeaderImage ? {
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${headerImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        } : {}}
      >
        {service.popular && (
          <div className="absolute top-4 left-4 bg-yellow-600 text-white px-3 py-1 text-xs rounded-full">
            Most Popular
          </div>
        )}
        
        <CardTitle className={`mb-2 ${hasHeaderImage ? 'text-white' : service.popular ? 'text-black' : 'text-white'}`}>
          {service.name}
        </CardTitle>
        <p className={`text-sm line-clamp-2 ${hasHeaderImage ? 'text-white/90' : service.popular ? 'text-black/70' : 'text-white/70'}`}>
          {service.description}
        </p>
      </CardHeader>

      <CardContent className="flex-grow px-6 py-6 overflow-y-auto">
        <motion.ul 
          className="space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {service.features.map((feature, index) => (
            <motion.li 
              key={index} 
              className="flex items-start gap-3"
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${service.popular ? 'text-green-600' : 'text-white'}`} />
              <span className="text-sm">{feature}</span>
            </motion.li>
          ))}
        </motion.ul>
      </CardContent>

      <CardFooter className="pt-4 pb-6 px-6 mt-auto h-[80px] flex items-center">
        <Button 
          className={`w-full rounded-full transition-colors duration-300 ${
            service.popular 
              ? 'bg-yellow-600 text-white border-0 hover:bg-yellow-700' 
              : 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-black'
          }`}
          onClick={onBookClick}
        >
          Hubungi Kami
        </Button>
      </CardFooter>
    </Card>
  );
}
