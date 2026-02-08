import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import { Upload, Wand2, Shirt } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Your Photo",
    description: "Snap a selfie or upload a photo. We auto-delete it after processing.",
    glow: "pink" as const,
  },
  {
    icon: Wand2,
    title: "AI Styles You",
    description: "Our AI analyzes your look and curates outfits that match your vibe.",
    glow: "purple" as const,
  },
  {
    icon: Shirt,
    title: "Virtual Try-On",
    description: "See yourself wearing each outfit with realistic AI visualization.",
    glow: "teal" as const,
  },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          How It <span className="gradient-text">Works</span>
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Three simple steps to discover your perfect style.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <GlassCard glow={step.glow} className="text-center h-full">
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-4">
                <step.icon size={24} className="text-foreground" />
              </div>
              <span className="text-xs font-mono text-muted-foreground">Step {i + 1}</span>
              <h3 className="text-lg font-semibold mt-1 mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
