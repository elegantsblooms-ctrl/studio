
import { Instagram, Mail, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white/60 border-t border-primary/10 pt-16 pb-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6 md:col-span-2">
          <h2 className="font-headline text-3xl font-bold italic text-primary tracking-tight">
            Elegants<span className="text-secondary">Blooms</span>
          </h2>
          <p className="text-muted-foreground max-w-sm leading-relaxed">
            Spreading elegance and emotions through the finest flowers. 
            Designed for the modern generation that values soft luxury and fast delivery.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full glass border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
              <MessageSquare className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="font-bold text-lg">Quick Links</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
            <li><a href="#shop" className="hover:text-primary transition-colors">Our Bouquets</a></li>
            <li><a href="#reviews" className="hover:text-primary transition-colors">Customer Stories</a></li>
            <li><a href="#policy" className="hover:text-primary transition-colors">Order Policy</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-bold text-lg">Contact Us</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-primary" />
              WhatsApp: +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              hello@elegantsblooms.com
            </li>
            <li className="flex items-center gap-2 uppercase tracking-tighter text-[10px] font-bold">
              Available 24/7 for support
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-16 mt-16 border-t border-primary/5 text-center text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
        © 2024 ElegantsBlooms. Premium Floral Experience. 🌸 
        <span className="mx-2">|</span> Privacy Policy 
        <span className="mx-2">|</span> Terms of Service
      </div>
    </footer>
  );
}
