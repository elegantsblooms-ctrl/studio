
import { Search, MapPin, CreditCard, Rocket } from "lucide-react";

const steps = [
  { icon: Search, title: "Pick your bouquet", desc: "Browse our collections or design your own 🌸", color: "bg-pink-100" },
  { icon: MapPin, title: "Add delivery details", desc: "Tell us where to send the love 📍", color: "bg-purple-100" },
  { icon: CreditCard, title: "Pay securely", desc: "Fast and safe online transactions 💳", color: "bg-rose-100" },
  { icon: Rocket, title: "We deliver with care", desc: "Fresh blooms arrived in 5-7 days 🚚💖", color: "bg-lavender-100" },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto bg-white/40 rounded-[3rem] my-16">
      <div className="text-center mb-16">
        <h3 className="font-headline text-4xl font-bold mb-4">How It Works</h3>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full opacity-30" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {steps.map((step, idx) => (
          <div key={idx} className="text-center group">
            <div className={`w-20 h-20 mx-auto rounded-3xl flex items-center justify-center mb-6 ${step.color} group-hover:rotate-12 transition-transform duration-300 shadow-sm group-hover:shadow-lg`}>
              <step.icon className="w-10 h-10 text-primary" />
            </div>
            <h4 className="font-bold text-lg mb-2">{step.title}</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
