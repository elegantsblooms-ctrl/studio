
"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function CustomBouquet({ onOrderCustom }: { onOrderCustom: (details: any) => void }) {
  const customImg = PlaceHolderImages.find(i => i.id === "custom-base");

  const handleCustomEnquiry = () => {
    onOrderCustom({
      id: "custom-enquiry",
      name: "Bespoke Custom Bouquet",
      price: "Price on Request",
      imgId: "custom-base",
      time: "5-7 days"
    });
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto" id="custom">
      <div className="glass rounded-[3rem] overflow-hidden border-none shadow-2xl relative min-h-[400px] flex items-center justify-center text-center p-8 md:p-16">
        <Image 
          src={customImg?.imageUrl || "https://picsum.photos/seed/custom/1200/800"}
          fill
          alt="Custom Bouquet"
          className="object-cover opacity-30"
          data-ai-hint="flower arrangement"
        />
        
        <div className="relative z-10 max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            Bespoke Service
          </div>
          
          <h3 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
            We also do customised bouquets
          </h3>
          
          <p className="text-muted-foreground text-lg italic leading-relaxed">
            Looking for something truly unique? Our expert florists can craft a one-of-a-kind arrangement tailored specifically to your vision and occasion.
          </p>

          <div className="pt-4">
            <Button 
              onClick={handleCustomEnquiry}
              size="lg"
              className="py-8 px-12 text-xl font-bold rounded-full bg-primary hover:bg-primary/90 shadow-2xl shadow-primary/20 transition-all hover:scale-105"
            >
              Enquire About Custom Designs
            </Button>
            <p className="text-xs text-muted-foreground mt-4 font-medium uppercase tracking-tighter">
              Bespoke orders typically require 5-7 days for sourcing and design
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
