
"use client";
import { MessageCircle, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StickyActions() {
  return (
    <>
      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/918876585923" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl shadow-green-500/30 hover:scale-110 transition-transform flex items-center justify-center animate-pulse"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[90%] md:hidden animate-in slide-in-from-bottom-10 duration-500">
        <Button size="lg" className="w-full bg-primary text-white hover:bg-primary/90 py-8 rounded-full text-lg font-bold shadow-2xl shadow-primary/40 border-none">
          <ShoppingCart className="w-6 h-6 mr-2" />
          Order Your Bloom Now
        </Button>
      </div>
    </>
  );
}
