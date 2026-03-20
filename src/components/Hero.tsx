
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-floral');

  return (
    <section className="relative w-full py-16 px-6 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroImage?.imageUrl || "https://picsum.photos/seed/flower1/1200/800"}
          alt="ElegantsBlooms Hero"
          fill
          className="object-cover opacity-20 blur-[2px]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50" />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="inline-block px-4 py-1.5 rounded-full glass text-primary font-medium text-sm mb-4 animate-bounce">
          🌸 Fresh Blooms Delivered Daily
        </div>
        
        <h2 className="font-headline text-5xl sm:text-7xl font-bold leading-tight text-foreground sparkle">
          Elegant Blooms for <br />
          <span className="italic text-primary">Every Emotion 💐</span>
        </h2>
        
        <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Same-day delivery. Fresh, beautiful, unforgettable bouquets designed 
          for your special moments. Soft luxury in every petal.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90 px-10 py-7 rounded-full text-lg font-semibold shadow-xl shadow-primary/30 transition-all hover:scale-105">
            Shop Now
          </Button>
          <Button size="lg" variant="outline" className="border-primary/20 glass px-10 py-7 rounded-full text-lg font-semibold hover:bg-white/40">
            View Bestsellers
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6 pt-12">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden">
                <Image src={`https://picsum.photos/seed/user${i}/100/100`} width={40} height={40} alt="User" />
              </div>
            ))}
          </div>
          <p className="text-sm font-medium text-muted-foreground">
            <span className="text-primary font-bold">2,000+</span> happy customers
          </p>
        </div>
      </div>
    </section>
  );
}
