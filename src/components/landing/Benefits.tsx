import { motion } from "framer-motion";
import { Zap, ShieldCheck, Wallet, TrendingUp } from "lucide-react";

const benefits = [
  { icon: Zap, title: "Lightning Fast", desc: "Get styled in under 10 seconds with real-time AI." },
  { icon: ShieldCheck, title: "Privacy First", desc: "Photos auto-delete after processing. Zero storage." },
  { icon: Wallet, title: "Budget Friendly", desc: "Find outfits that match your style AND your budget." },
  { icon: TrendingUp, title: "Trend Aware", desc: "AI trained on the latest fashion trends worldwide." },
];

const Benefits = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Why <span className="gradient-text">OutfitCheck AI</span>?
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Built for Gen Z. Designed for everyone.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="bg-card rounded-xl p-6 border border-border/30 text-center"
          >
            <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mx-auto mb-4">
              <b.icon size={22} className="text-foreground" />
            </div>
            <h3 className="font-semibold mb-1">{b.title}</h3>
            <p className="text-sm text-muted-foreground">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Benefits;
