
"use client";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const categories = [
  { 
    title: "Bouquets at ₹350+", 
    subtitle: "+ Shipping Charge", 
    color: "bg-pink-100/50", 
    href: "/category/350-plus" 
  },
  { 
    title: "Bouquets Under ₹500", 
    subtitle: "+ Delivery", 
    color: "bg-purple-100/50", 
    href: "#shop" 
  },
  { 
    title: "Bouquets Under ₹750", 
    subtitle: "+ Delivery", 
    color: "bg-rose-100/50", 
    href: "#shop" 
  },
  { 
    title: "Bouquets Under ₹1000", 
    subtitle: "+ Delivery", 
    color: "bg-lavender-100/50", 
    href: "#shop" 
  },
];

export default function CategorySelection() {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto" id="shop">
      <div className="text-center mb-10">
        <h3 className="font-headline text-3xl font-bold text-foreground">Shop by Budget</h3>
        <p className="text-muted-foreground mt-2">Find the perfect bloom for your budget</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat, idx) => (
          <Link key={idx} href={cat.href} className="block h-full group">
            <Card 
              className={`p-6 cursor-pointer border-none shadow-sm hover:shadow-xl transition-all duration-300 rounded-3xl ${cat.color} overflow-hidden relative flex flex-col justify-between h-48`}
            >
              <div className="relative z-10">
                <h4 className="font-bold text-lg text-foreground/80">{cat.title}</h4>
                <p className="text-sm text-muted-foreground">{cat.subtitle}</p>
              </div>
              <div className="mt-4 flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                Explore <ChevronRight className="w-4 h-4 ml-1" />
              </div>
              
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/20 rounded-full group-hover:scale-150 transition-transform duration-500 blur-xl" />
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
