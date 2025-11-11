import { Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Service } from '../data/mockData';
import { motion } from 'motion/react';

interface PricingCardProps {
  service: Service;
  onBookClick: () => void;
}

export function PricingCard({ service, onBookClick }: PricingCardProps) {
  return (
    <Card 
      className={`relative border-2 transition-all duration-300 ${
        service.popular 
          ? 'border-white bg-white text-black shadow-2xl scale-105' 
          : 'border-white bg-white text-black hover:bg-black hover:text-white'
      }`}
    >
      {service.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-1 border-2 border-black">
          Most Popular
        </div>
      )}
      
      <CardHeader className="text-center pb-8 pt-8">
        <CardTitle className="mb-2">{service.name}</CardTitle>
        <p className="text-sm opacity-70 mb-4">{service.description}</p>
        <CardDescription className="mt-4">
          <span className={service.popular ? "text-black" : ""}>{service.price}</span>
        </CardDescription>
      </CardHeader>

      <CardContent>
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
              className="flex items-start gap-2"
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${service.popular ? 'text-black' : ''}`} />
              <span className="text-sm">{feature}</span>
            </motion.li>
          ))}
        </motion.ul>
      </CardContent>

      <CardFooter className="pt-6">
        <motion.div 
          className="w-full"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            className={`w-full border-2 transition-all duration-300 ${
              service.popular 
                ? 'bg-black text-white border-black hover:bg-white hover:text-black' 
                : 'bg-transparent border-black hover:bg-black hover:text-white'
            }`}
            onClick={onBookClick}
          >
            Pesan Sekarang
          </Button>
        </motion.div>
      </CardFooter>
    </Card>
  );
}
