import { useState } from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { toast } from 'sonner';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock submission - in real app, this would send to backend
    console.log('Form submitted:', formData);
    
    toast.success('Pesan Anda berhasil dikirim! Kami akan menghubungi Anda segera.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-black">Nama Lengkap</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Masukkan nama Anda"
            value={formData.name}
            onChange={handleChange}
            required
            className="border-2 border-black focus:border-black bg-white text-black"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-black">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="nama@email.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="border-2 border-black focus:border-black bg-white text-black"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject" className="text-black">Subjek</Label>
        <Input
          id="subject"
          name="subject"
          type="text"
          placeholder="Topik pesan Anda"
          value={formData.subject}
          onChange={handleChange}
          required
          className="border-2 border-black focus:border-black bg-white text-black"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-black">Pesan</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tuliskan pesan Anda di sini..."
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="border-2 border-black focus:border-black resize-none bg-white text-black"
        />
      </div>

      <Button 
        type="submit" 
        className="w-full bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-colors duration-300"
      >
        Kirim Pesan
      </Button>
    </form>
  );
}
