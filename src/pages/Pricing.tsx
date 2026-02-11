import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import GradientButton from "@/components/ui/GradientButton";
import { Check, Sparkles } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useRazorpay } from "@/hooks/use-razorpay";

const tiers = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    features: [
      "3 try-ons per day",
      "Basic outfit suggestions",
      "Standard AI processing",
      "Auto-delete photos",
    ],
    glow: "none" as const,
    cta: "Get Started Free",
  },
  {
    name: "Pro",
    price: "₹299",
    period: "/month",
    features: [
      "Unlimited try-ons",
      "Advanced AI styling",
      "Priority processing",
      "Budget & trend filters",
      "Save & compare looks",
      "Early access to features",
    ],
    glow: "pink" as const,
    cta: "Go Pro",
    popular: true,
  },
];

const Pricing = () => {
  const { initiatePayment } = useRazorpay();
  const navigate = useNavigate();

  const handleCta = (tierName: string) => {
    if (tierName === "Pro") {
      initiatePayment();
    } else {
      navigate("/upload");
    }
  };

  return (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-muted-foreground mb-4">
            <Sparkles size={14} className="text-gradient-pink" /> Simple pricing
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Choose Your <span className="gradient-text">Plan</span>
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Start free. Upgrade when you need more power.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <GlassCard glow={tier.glow} className="relative h-full flex flex-col">
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 text-xs font-semibold gradient-bg rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-1">{tier.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold">{tier.price}</span>
                  <span className="text-muted-foreground">{tier.period}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check size={16} className="text-accent shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <GradientButton
                  variant={tier.popular ? "filled" : "outline"}
                  className="w-full"
                  size="lg"
                  onClick={() => handleCta(tier.name)}
                >
                  {tier.cta}
                </GradientButton>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </div>
  );
};

export default Pricing;
