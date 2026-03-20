
"use client";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ShoppingBag, CreditCard, ShieldCheck } from "lucide-react";
import AddOns from "./AddOns";

export default function CheckoutModal({ isOpen, onClose, product }: { isOpen: boolean, onClose: () => void, product: any }) {
  const [agreed, setAgreed] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  if (!product) return null;

  const handleCheckout = () => {
    if (step === 1) setStep(2);
    else {
      alert("Order Placed Successfully! (Simulation)");
      onClose();
      setStep(1);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] p-0 border-none shadow-2xl glass">
        <DialogHeader className="p-8 pb-0">
          <DialogTitle className="font-headline text-3xl text-primary flex items-center gap-3">
            <ShoppingBag className="w-8 h-8" />
            Complete Your Order
          </DialogTitle>
          <DialogDescription className="text-muted-foreground italic">
            You're just a few steps away from making someone's day special.
          </DialogDescription>
        </DialogHeader>

        <div className="p-8 pt-6 space-y-6">
          {step === 1 ? (
            <>
              <div className="flex items-center gap-6 p-4 bg-primary/5 rounded-3xl border border-primary/10">
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden shadow-md">
                  <img src={product.imageUrl || `https://picsum.photos/seed/${product.id}/400/400`} alt={product.name} className="object-cover w-full h-full" />
                </div>
                <div>
                  <h5 className="font-bold text-xl">{product.name}</h5>
                  <p className="text-primary font-bold text-lg">{product.price}</p>
                </div>
              </div>

              <AddOns onAddonsChange={setSelectedAddons} />

              <div className="space-y-4">
                <h6 className="font-bold text-lg border-b pb-2">Delivery Details</h6>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Your Name</Label>
                    <Input placeholder="Enter your name" className="rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label>Phone Number</Label>
                    <Input placeholder="Recipient's phone" className="rounded-xl" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Delivery Address</Label>
                  <Textarea placeholder="Full address with landmark" className="rounded-xl min-h-[80px]" />
                </div>
                <div className="space-y-2">
                  <Label>Message for Card (Optional)</Label>
                  <Textarea placeholder="What should we write?" className="rounded-xl min-h-[80px]" />
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-12 space-y-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                <CreditCard className="w-10 h-10 text-primary" />
              </div>
              <h4 className="font-bold text-2xl">Confirm Payment</h4>
              <p className="text-muted-foreground">Select your preferred payment method below. Note: Only prepaid orders are accepted.</p>
              <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
                <Button variant="outline" className="h-16 rounded-2xl flex flex-col gap-1 border-primary/20">
                  <span className="font-bold">UPI / GPay</span>
                  <span className="text-[10px] text-muted-foreground">Instant Transfer</span>
                </Button>
                <Button variant="outline" className="h-16 rounded-2xl flex flex-col gap-1 border-primary/20">
                  <span className="font-bold">Cards</span>
                  <span className="text-[10px] text-muted-foreground">Debit / Credit</span>
                </Button>
              </div>
            </div>
          )}

          <div className="bg-white/40 p-6 rounded-3xl space-y-4">
             <div className="flex items-start space-x-3">
              <Checkbox id="terms" checked={agreed} onCheckedChange={(checked) => setAgreed(!!checked)} className="mt-1" />
              <div className="grid gap-1.5 leading-none">
                <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
                  I agree to the <span className="text-primary underline">Terms & Conditions</span>
                </label>
                <p className="text-xs text-muted-foreground italic">
                  * No Cash on Delivery. Orders are final once confirmed.
                </p>
              </div>
            </div>

            <Button 
              disabled={!agreed}
              onClick={handleCheckout}
              className="w-full py-8 text-xl font-bold rounded-2xl bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20"
            >
              {step === 1 ? "Next: Choose Payment" : "Place Secure Order"}
            </Button>
            
            <div className="flex items-center justify-center gap-2 text-muted-foreground text-xs">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              100% Secure SSL Encrypted Payments
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
