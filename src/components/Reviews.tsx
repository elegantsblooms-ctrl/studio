
import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const reviews = [
  { name: "Ananya", text: "Delivery was insanely fast! Highly recommend for last minute surprises! ✨", stars: 5 },
  { name: "Rohan", text: "Looked even better than photos 😍. The fragrance was amazing and lasted for days.", stars: 5 },
  { name: "Ishani", text: "Perfect surprise gift! The wrapping was premium and elegant. 💖", stars: 4 },
];

export default function Reviews() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto" id="reviews">
      <div className="text-center mb-12">
        <h3 className="font-headline text-4xl font-bold mb-2">Our Happy Blooms</h3>
        <p className="text-muted-foreground italic">What our beautiful community says</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((rev, idx) => (
          <Card key={idx} className="p-8 rounded-[2.5rem] glass border-none shadow-sm hover:shadow-xl transition-all relative group overflow-hidden">
            <Quote className="absolute -top-4 -left-4 w-16 h-16 text-primary/5 group-hover:text-primary/10 transition-colors" />
            
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < rev.stars ? 'text-accent fill-accent' : 'text-gray-200'}`} />
              ))}
            </div>

            <p className="text-foreground/80 leading-relaxed italic mb-8 relative z-10">"{rev.text}"</p>

            <div className="flex items-center gap-4">
              <Avatar className="w-12 h-12 border-2 border-primary/20">
                <AvatarImage src={`https://picsum.photos/seed/${rev.name}/100/100`} />
                <AvatarFallback>{rev.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h5 className="font-bold text-sm">{rev.name}</h5>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Verified Customer</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
