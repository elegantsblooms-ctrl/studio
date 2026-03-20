
"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CheckoutModal from "@/components/CheckoutModal";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Star, ChevronLeft } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";

const products = [
  { id: 7, name: "Violet Rose", price: "₹350", time: "5-7 days", tag: "Hot", imgId: "violet-rose" },
  { id: 8, name: "Pink + Reddish Pink", price: "₹400", time: "5-7 days", tag: "Premium", imgId: "pink-reddish-pink" },
  { id: 9, name: "Red + Pink", price: "₹350", time: "5-7 days", tag: "Bestseller", imgId: "red-pink" },
  { id: 10, name: "Munchy Violet", price: "₹400", time: "5-7 days", tag: "New", imgId: "munchy-violet" },
  { id: 11, name: "Pink Rose", price: "₹350", time: "5-7 days", tag: "Elegant", imgId: "pink-rose-cloudinary" },
  { id: 12, name: "Violet Plus Single White", price: "₹400", time: "5-7 days", tag: "Unique", imgId: "violet-white-single" },
];

export default function Category350Plus() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleProductClick = (product: any) => {
    const img = PlaceHolderImages.find(i => i.id === product.imgId);
    setSelectedProduct({
      ...product,
      imageUrl: img?.imageUrl
    });
    setIsCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      
      <main className="py-12 px-6 max-w-7xl mx-auto min-h-[60vh]">
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 font-semibold transition-colors group">
            <ChevronLeft className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" /> 
            Back to Collections
          </Link>
          <div className="space-y-2">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">Bouquets at ₹350+</h2>
            <p className="text-muted-foreground text-lg italic italic">Elegant selections starting from ₹350 (+ shipping charge)</p>
          </div>
          <div className="h-1 w-24 bg-primary rounded-full mt-6 opacity-30" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {products.map((product) => {
            const img = PlaceHolderImages.find(i => i.id === product.imgId);
            return (
              <Card key={product.id} className="group overflow-hidden border-none glass rounded-[2.5rem] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-80 overflow-hidden">
                  <Image 
                    src={img?.imageUrl || `https://picsum.photos/seed/${product.id}/600/600`}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    data-ai-hint={img?.imageHint || "flowers bouquet"}
                  />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <Badge className="bg-white/90 text-primary border-none backdrop-blur-md rounded-full px-4 py-1.5 text-[10px] font-black uppercase tracking-widest shadow-sm">
                      {product.tag}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="bg-white/90 p-2.5 rounded-full text-primary hover:bg-primary hover:text-white transition-all backdrop-blur-md shadow-sm">
                      <Star className="w-5 h-5 fill-current" />
                    </button>
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  <div className="flex justify-between items-start gap-4">
                    <div className="space-y-1">
                      <h4 className="font-bold text-2xl text-foreground group-hover:text-primary transition-colors leading-tight">{product.name}</h4>
                      <p className="text-sm text-muted-foreground flex items-center gap-1.5 font-medium">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        Delivery in {product.time}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-black text-primary block">{product.price}</span>
                      <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">+ shipping</span>
                    </div>
                  </div>

                  <Button 
                    onClick={() => handleProductClick(product)}
                    className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-white border-none py-8 rounded-2xl text-xl font-bold transition-all shadow-none group-hover:shadow-xl group-hover:shadow-primary/20"
                  >
                    <ShoppingCart className="w-6 h-6 mr-2" />
                    Order Now
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </main>

      <Footer />

      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
        product={selectedProduct} 
      />

      {/* Decorative background elements */}
      <div className="fixed top-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed bottom-1/4 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl pointer-events-none -z-10" />
    </div>
  );
}
