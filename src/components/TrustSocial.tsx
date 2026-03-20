
import Image from "next/image";
import { Instagram, Users, Sparkles, ShieldCheck } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function TrustSocial() {
  const igImages = PlaceHolderImages.filter(img => img.id.startsWith('ig-'));

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="font-headline text-4xl font-bold">Why Trust Us?</h3>
            <p className="text-muted-foreground leading-relaxed">
              We specialize in creating moments of pure joy through the art of floral design. 
              Our commitment to freshness and elegance has made us a favorite choice.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-6 bg-white/50 rounded-3xl border border-primary/5">
              <div className="bg-primary/10 p-3 rounded-2xl">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold">2000+ Happy Customers</h4>
                <p className="text-xs text-muted-foreground">Spreading love across the city</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white/50 rounded-3xl border border-primary/5">
              <div className="bg-primary/10 p-3 rounded-2xl">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold">Freshness Guaranteed</h4>
                <p className="text-xs text-muted-foreground">Handpicked blooms every morning</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white/50 rounded-3xl border border-primary/5">
              <div className="bg-primary/10 p-3 rounded-2xl">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold">Safe Same-Day Delivery</h4>
                <p className="text-xs text-muted-foreground">Delivered with care in 2-5 hours</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white/50 rounded-3xl border border-primary/5">
              <div className="bg-primary/10 p-3 rounded-2xl">
                <Instagram className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold">Follow @ElegantsBlooms</h4>
                <p className="text-xs text-muted-foreground">Tag us in your special moments</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-8">
              {igImages.slice(0, 2).map((img, i) => (
                <div key={i} className="relative aspect-square rounded-[2rem] overflow-hidden shadow-lg transform group-hover:-rotate-2 transition-transform duration-500">
                  <Image src={img.imageUrl} fill alt="Instagram" className="object-cover" />
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {igImages.slice(1, 3).map((img, i) => (
                <div key={i} className="relative aspect-square rounded-[2rem] overflow-hidden shadow-lg transform group-hover:rotate-2 transition-transform duration-500">
                  <Image src={img.imageUrl} fill alt="Instagram" className="object-cover" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass px-6 py-3 rounded-full shadow-2xl z-20 flex items-center gap-2 font-bold text-primary">
            <Instagram className="w-5 h-5" />
            @ElegantsBlooms
          </div>
        </div>
      </div>
    </section>
  );
}
