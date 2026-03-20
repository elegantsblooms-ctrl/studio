
import { AlertCircle, Banknote, RefreshCcw, Zap } from "lucide-react";

export default function Policies() {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto" id="policy">
      <div className="bg-white/60 glass rounded-[3rem] p-8 md:p-12 shadow-sm border border-primary/10">
        <div className="text-center mb-10">
          <h3 className="font-headline text-3xl font-bold mb-2">Our Store Policies</h3>
          <p className="text-muted-foreground italic">Please read carefully before ordering</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex gap-4 p-6 rounded-3xl bg-red-50/50">
            <Banknote className="w-8 h-8 text-red-400 shrink-0" />
            <div>
              <h4 className="font-bold text-lg mb-1">No Cash on Delivery</h4>
              <p className="text-sm text-muted-foreground">To ensure instant confirmation and fast processing, we only accept prepaid orders.</p>
            </div>
          </div>
          <div className="flex gap-4 p-6 rounded-3xl bg-red-50/50">
            <RefreshCcw className="w-8 h-8 text-red-400 shrink-0" />
            <div>
              <h4 className="font-bold text-lg mb-1">No Refunds</h4>
              <p className="text-sm text-muted-foreground">Once the order is confirmed, we process it instantly. No refunds can be issued after confirmation.</p>
            </div>
          </div>
          <div className="flex gap-4 p-6 rounded-3xl bg-green-50/50">
            <Zap className="w-8 h-8 text-green-400 shrink-0" />
            <div>
              <h4 className="font-bold text-lg mb-1">Instant Processing</h4>
              <p className="text-sm text-muted-foreground">Our florists start working on your bouquet as soon as you hit pay for maximum freshness.</p>
            </div>
          </div>
          <div className="flex gap-4 p-6 rounded-3xl bg-blue-50/50">
            <AlertCircle className="w-8 h-8 text-blue-400 shrink-0" />
            <div>
              <h4 className="font-bold text-lg mb-1">Order Changes</h4>
              <p className="text-sm text-muted-foreground">Changes to address or message must be made within 15 minutes of ordering.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
