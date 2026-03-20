
import { Menu, ShoppingBag, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full glass px-4 py-3 sm:px-8 border-b border-white/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="w-6 h-6 text-primary" />
        </Button>

        <div className="flex-1 text-center md:text-left">
          <h1 className="font-headline text-2xl font-bold italic text-primary tracking-tight">
            Elegants<span className="text-secondary">Blooms</span>
          </h1>
        </div>

        <nav className="hidden md:flex items-center gap-8 mr-8 text-sm font-medium">
          <a href="#" className="hover:text-primary transition-colors">Home</a>
          <a href="#shop" className="hover:text-primary transition-colors">Shop</a>
          <a href="#reviews" className="hover:text-primary transition-colors">Reviews</a>
          <a href="#policy" className="hover:text-primary transition-colors">Policies</a>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Heart className="w-5 h-5 text-primary" />
          </Button>
          <Button variant="primary" size="icon" className="relative bg-primary hover:bg-primary/90 rounded-full shadow-lg shadow-primary/20">
            <ShoppingBag className="w-5 h-5 text-white" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-secondary text-white text-[10px] flex items-center justify-center rounded-full">0</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
