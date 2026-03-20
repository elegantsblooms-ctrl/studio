
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Star } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const products = [
  { id: 1, name: "Red Rose", price: "₹750", time: "5-7 days", tag: "Bestseller", imgId: "red-rose-premium" },
  { id: 7, name: "Violet Rose", price: "₹350", time: "5-7 days", tag: "New", imgId: "violet-rose" },
  { id: 11, name: "Pink Rose", price: "₹350", time: "5-7 days", tag: "New", imgId: "pink-rose-cloudinary" },
  { id: 9, name: "Red + Pink", price: "₹350", time: "5-7 days", tag: "New", imgId: "red-pink" },
  { id: 10, name: "Munchy Violet", price: "₹400", time: "5-7 days", tag: "New", imgId: "munchy-violet" },
  { id: 8, name: "Pink + Reddish Pink", price: "₹400", time: "5-7 days", tag: "New", imgId: "pink-reddish-pink" },
  { id: 12, name: "Violet Plus Single White", price: "₹400", time: "5-7 days", tag: "New", imgId: "violet-white-single" },
  { id: 2, name: "Lavender Dream", price: "₹499", time: "5-7 days", tag: "Trending", imgId: "bouquet-2" },
  { id: 3, name: "Blush White Elegance", price: "₹749", time: "5-7 days", tag: "Bestseller", imgId: "bouquet-3" },
  { id: 4, name: "Golden Sunset Blooms", price: "₹899", time: "5-7 days", tag: "New", imgId: "bouquet-4" },
  { id: 5, name: "Peony Paradise", price: "₹999", time: "5-7 days", tag: "Premium", imgId: "bouquet-5" },
  { id: 6, name: "Wildflower Charm", price: "₹399", time: "5-7 days", tag: "Trending", imgId: "bouquet-6" },
];

export default function FeaturedProducts({ onProductClick }: { onProductClick: (product: any) => void }) {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-10">
        <div>
          <h3 className="font-headline text-4xl font-bold text-foreground">Featured Bouquets</h3>
          <p className="text-muted-foreground mt-2 italic">Hand-picked fresh everyday</p>
        </div>
        <Button variant="link" className="text-primary font-semibold hidden sm:flex">View All Products</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => {
          const img = PlaceHolderImages.find(i => i.id === product.imgId);
          return (
            <Card key={product.id} className="group overflow-hidden border-none glass rounded-[2rem] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-80 overflow-hidden">
                <Image 
                  src={img?.imageUrl || `https://picsum.photos/seed/${product.id}/600/600`}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  data-ai-hint={img?.imageHint || "flowers bouquet"}
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <Badge className="bg-white/80 text-primary border-none backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider">
                    {product.tag}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <button className="bg-white/80 p-2 rounded-full text-primary hover:bg-primary hover:text-white transition-colors backdrop-blur-sm">
                    <Star className="w-5 h-5 fill-current" />
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">{product.name}</h4>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                      🚚 Delivery in {product.time}
                    </p>
                  </div>
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                </div>

                <Button 
                  onClick={() => onProductClick(product)}
                  className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-white border-none py-6 rounded-2xl text-lg font-bold transition-all shadow-none group-hover:shadow-lg group-hover:shadow-primary/20"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Order Now
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
