
"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Palette, Flower2, Gift } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const flowerTypes = [
  { id: "roses", name: "Classic Roses", price: 200 },
  { id: "lilies", name: "Oriental Lilies", price: 350 },
  { id: "tulips", name: "Spring Tulips", price: 400 },
  { id: "orchids", name: "Exotic Orchids", price: 500 },
];

const themes = [
  { id: "romantic", name: "Romantic Red", color: "bg-red-500" },
  { id: "pastel", name: "Pastel Dream", color: "bg-pink-200" },
  { id: "vibrant", name: "Vibrant Mix", color: "bg-yellow-400" },
  { id: "minimal", name: "Pure White", color: "bg-white" },
];

export default function CustomBouquet({ onOrderCustom }: { onOrderCustom: (details: any) => void }) {
  const [selectedFlowers, setSelectedFlowers] = useState<string>("roses");
  const [selectedTheme, setSelectedTheme] = useState<string>("pastel");
  const customImg = PlaceHolderImages.find(i => i.id === "custom-base");

  const handleOrder = () => {
    const flower = flowerTypes.find(f => f.id === selectedFlowers);
    const theme = themes.find(t => t.id === selectedTheme);
    onOrderCustom({
      id: "custom-order",
      name: `Custom ${flower?.name} (${theme?.name})`,
      price: `₹${(flower?.price || 0) + 150}`,
      imgId: "custom-base",
      time: "5-7 days"
    });
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto" id="custom">
      <div className="glass rounded-[3rem] overflow-hidden border-none shadow-2xl grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-96 lg:h-auto">
          <Image 
            src={customImg?.imageUrl || "https://picsum.photos/seed/custom/800/600"}
            fill
            alt="Custom Bouquet"
            className="object-cover"
            data-ai-hint="flower workshop"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent flex items-center p-12">
            <div className="max-w-xs text-white">
              <h3 className="font-headline text-4xl font-bold mb-4">Design Your Own</h3>
              <p className="opacity-90">Can't find what you're looking for? Create a bouquet that speaks your heart.</p>
            </div>
          </div>
        </div>

        <div className="p-8 lg:p-16 space-y-10 bg-white/60 backdrop-blur-sm">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Flower2 className="w-6 h-6 text-primary" />
              <h4 className="font-bold text-xl">1. Choose Primary Flowers</h4>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {flowerTypes.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setSelectedFlowers(f.id)}
                  className={`p-4 rounded-2xl border-2 transition-all text-sm font-semibold ${selectedFlowers === f.id ? 'border-primary bg-primary/5 text-primary' : 'border-transparent bg-white/50 hover:bg-white'}`}
                >
                  {f.name}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Palette className="w-6 h-6 text-primary" />
              <h4 className="font-bold text-xl">2. Select a Color Theme</h4>
            </div>
            <div className="flex flex-wrap gap-4">
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setSelectedTheme(t.id)}
                  className={`group relative w-12 h-12 rounded-full border-2 transition-all ${selectedTheme === t.id ? 'border-primary scale-110 shadow-lg' : 'border-white shadow-sm'}`}
                >
                  <div className={`w-full h-full rounded-full ${t.color}`} />
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity font-bold uppercase">{t.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-6">
            <Button 
              onClick={handleOrder}
              className="w-full py-8 text-xl font-bold rounded-[2rem] bg-primary hover:bg-primary/90 shadow-2xl shadow-primary/20"
            >
              <Gift className="w-6 h-6 mr-2" />
              Build My Bouquet
            </Button>
            <p className="text-center text-xs text-muted-foreground mt-4 italic">
              Custom designs take 5-7 days for perfect procurement & arrangement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
