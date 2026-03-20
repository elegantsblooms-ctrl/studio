
"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategorySelection from "@/components/CategorySelection";
import FeaturedProducts from "@/components/FeaturedProducts";
import CustomBouquet from "@/components/CustomBouquet";
import UrgencyBanner from "@/components/UrgencyBanner";
import HowItWorks from "@/components/HowItWorks";
import Reviews from "@/components/Reviews";
import TrustSocial from "@/components/TrustSocial";
import Policies from "@/components/Policies";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";
import CheckoutModal from "@/components/CheckoutModal";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function ElegantsBloomsHome() {
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
      
      <main>
        <Hero />
        
        <CategorySelection />
        
        <FeaturedProducts onProductClick={handleProductClick} />

        <CustomBouquet onOrderCustom={handleProductClick} />
        
        <UrgencyBanner />
        
        <HowItWorks />
        
        <TrustSocial />
        
        <Reviews />
        
        <Policies />
      </main>

      <Footer />
      
      <StickyActions />

      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
        product={selectedProduct} 
      />

      {/* Background Decorative Sparkles */}
      <div className="fixed top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse blur-sm pointer-events-none opacity-20" />
      <div className="fixed bottom-40 right-10 w-3 h-3 bg-secondary rounded-full animate-pulse blur-sm pointer-none opacity-20" />
      <div className="fixed top-1/2 left-1/4 w-1 h-1 bg-accent rounded-full animate-pulse blur-sm pointer-events-none opacity-20" />
    </div>
  );
}
