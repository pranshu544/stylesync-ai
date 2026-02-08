import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";

const examples = [
  { label: "Casual Summer", before: "Before", after: "AI Styled" },
  { label: "Street Style", before: "Before", after: "AI Styled" },
  { label: "Date Night", before: "Before", after: "AI Styled" },
];

const Transformations = () => (
  <section className="py-24 bg-surface">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          AI <span className="gradient-text">Transformations</span>
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          See real examples of AI-powered outfit styling.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {examples.map((ex, i) => (
          <motion.div
            key={ex.label}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <GlassCard className="overflow-hidden">
              <div className="flex gap-2 mb-3">
                <div className="flex-1 h-48 rounded-lg bg-muted shimmer flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">{ex.before}</span>
                </div>
                <div className="flex-1 h-48 rounded-lg bg-gradient-to-br from-gradient-pink/10 to-gradient-purple/10 border border-border/30 flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">{ex.after}</span>
                </div>
              </div>
              <p className="text-sm font-medium text-center">{ex.label}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Transformations;
