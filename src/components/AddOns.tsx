
"use client";
import { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const addons = [
  { id: "choc", name: "Chocolates 🍫", price: "₹150", imgId: "addon-choc" },
  { id: "teddy", name: "Teddy Bear 🧸", price: "₹250", imgId: "addon-teddy" },
  { id: "card", name: "Greeting Card 💌", price: "₹49", imgId: "addon-card" },
  { id: "wrap", name: "Premium Wrap 🎀", price: "₹99", imgId: "addon-wrap" },
];

export default function AddOns({ onAddonsChange }: { onAddonsChange: (ids: string[]) => void }) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (id: string) => {
    const newSelected = selected.includes(id) 
      ? selected.filter(i => i !== id) 
      : [...selected, id];
    setSelected(newSelected);
    onAddonsChange(newSelected);
  };

  return (
    <div className="py-8">
      <h4 className="font-headline text-2xl font-bold mb-6 text-center">Make It Extra Special ✨</h4>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {addons.map((addon) => {
          const img = PlaceHolderImages.find(i => i.id === addon.imgId);
          const isSelected = selected.includes(addon.id);
          return (
            <div 
              key={addon.id}
              onClick={() => toggle(addon.id)}
              className={`relative cursor-pointer group rounded-3xl overflow-hidden border-2 transition-all ${isSelected ? 'border-primary shadow-lg scale-105' : 'border-transparent bg-white/40'}`}
            >
              <div className="relative h-32 w-full">
                <Image 
                  src={img?.imageUrl || `https://picsum.photos/seed/${addon.id}/400/400`}
                  alt={addon.name}
                  fill
                  className="object-cover"
                />
                {isSelected && (
                  <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                    <div className="bg-white rounded-full p-1 shadow-lg">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                )}
              </div>
              <div className="p-3 text-center">
                <p className="font-bold text-sm truncate">{addon.name}</p>
                <p className="text-primary font-semibold text-xs">{addon.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
