import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import { Shield, Trash2, Eye, Database } from "lucide-react";

const sections = [
  {
    icon: Trash2,
    title: "Automatic Image Deletion",
    content: "All uploaded photos are automatically deleted within 15 minutes of processing. We never permanently store your raw images on our servers.",
  },
  {
    icon: Eye,
    title: "No Permanent Storage",
    content: "Your photos are processed in-memory and discarded. Only outfit metadata (style name, colors, price range) is saved if you choose to save a look.",
  },
  {
    icon: Database,
    title: "Minimal Data Collection",
    content: "We only store your email address (from Google OAuth), saved look preferences, and subscription status. No tracking cookies, no ad profiles, no data selling.",
  },
  {
    icon: Shield,
    title: "Secure Processing",
    content: "All uploads use signed URLs with HTTPS encryption. AI processing happens via secure API calls. Your data is never exposed to third parties beyond the AI inference step.",
  },
];

const Privacy = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-bold text-center mb-4">
            Your <span className="gradient-text">Privacy</span> Matters
          </h1>
          <p className="text-center text-muted-foreground mb-12 max-w-md mx-auto">
            StyleSync AI is built with privacy as a core principle. Here's exactly what we do with your data.
          </p>

          <div className="space-y-6">
            {sections.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                    <s.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.content}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center text-xs text-muted-foreground">
            Last updated: February 2026. Questions? Contact us at privacy@stylesync.ai
          </div>
        </motion.div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Privacy;
