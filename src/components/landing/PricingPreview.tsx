import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import GradientButton from "@/components/ui/GradientButton";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const tiers = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    features: ["3 try-ons per day", "Basic outfit suggestions", "Standard AI processing"],
    glow: "none" as const,
    cta: "Get Started",
  },
  {
    name: "Pro",
    price: "₹299",
    period: "/month",
    features: ["Unlimited try-ons", "Advanced AI styling", "Priority processing", "Budget filters", "Save & compare looks"],
    glow: "pink" as const,
    cta: "Go Pro",
    popular: true,
  },
];

const PricingPreview = () => (
  <section className="py-24 bg-surface">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Simple <span className="gradient-text">Pricing</span>
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Start free. Upgrade when you're hooked.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <GlassCard glow={tier.glow} className="relative h-full flex flex-col">
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 text-xs font-semibold gradient-bg rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-extrabold">{tier.price}</span>
                <span className="text-sm text-muted-foreground">{tier.period}</span>
              </div>
              <ul className="space-y-2 mb-6 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check size={16} className="text-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/auth">
                <GradientButton
                  variant={tier.popular ? "filled" : "outline"}
                  className="w-full"
                >
                  {tier.cta}
                </GradientButton>
              </Link>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingPreview;
