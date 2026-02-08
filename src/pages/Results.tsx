import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import GradientButton from "@/components/ui/GradientButton";
import { Heart, Share2, ArrowLeftRight, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const mockOutfits = [
  { id: 1, name: "Casual Summer", style: "Casual", price: "₹800–₹1,500", colors: ["#FF4D8D", "#7B61FF", "#00C2A8"] },
  { id: 2, name: "Urban Street", style: "Streetwear", price: "₹1,200–₹2,500", colors: ["#1a1a2e", "#e94560", "#0f3460"] },
  { id: 3, name: "Formal Chic", style: "Formal", price: "₹2,000–₹4,000", colors: ["#2d2d2d", "#c9a227", "#f5f5f5"] },
  { id: 4, name: "Boho Vibes", style: "Bohemian", price: "₹900–₹1,800", colors: ["#d4a373", "#ccd5ae", "#e9edc9"] },
];

const Results = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl font-bold text-center mb-2">
              Your <span className="gradient-text">AI Styles</span>
            </h1>
            <p className="text-center text-muted-foreground mb-10">
              Here are your personalized outfit recommendations.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Try-on preview */}
              <GlassCard glow="purple" className="flex flex-col items-center justify-center min-h-[400px]">
                <div className="w-full h-80 rounded-xl shimmer flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">AI Try-On Preview</span>
                </div>
                <div className="flex gap-3 mt-4">
                  <GradientButton size="sm" variant="outline">
                    <Heart size={16} className="mr-1" /> Save
                  </GradientButton>
                  <GradientButton size="sm" variant="outline">
                    <Share2 size={16} className="mr-1" /> Share
                  </GradientButton>
                  <GradientButton size="sm" variant="outline">
                    <ArrowLeftRight size={16} className="mr-1" /> Compare
                  </GradientButton>
                </div>
              </GlassCard>

              {/* Outfit carousel */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Outfit {current + 1} of {mockOutfits.length}</h3>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setCurrent(Math.max(0, current - 1))}
                      className="p-2 rounded-lg bg-card border border-border/30 text-muted-foreground hover:text-foreground disabled:opacity-30"
                      disabled={current === 0}
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={() => setCurrent(Math.min(mockOutfits.length - 1, current + 1))}
                      className="p-2 rounded-lg bg-card border border-border/30 text-muted-foreground hover:text-foreground disabled:opacity-30"
                      disabled={current === mockOutfits.length - 1}
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>

                {mockOutfits.map((outfit, i) => (
                  <motion.div
                    key={outfit.id}
                    initial={false}
                    animate={{ opacity: i === current ? 1 : 0, height: i === current ? "auto" : 0 }}
                    className="overflow-hidden"
                  >
                    {i === current && (
                      <GlassCard>
                        <div className="w-full h-48 rounded-lg shimmer mb-4 flex items-center justify-center">
                          <span className="text-xs text-muted-foreground">Outfit Image</span>
                        </div>
                        <h4 className="text-lg font-bold">{outfit.name}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{outfit.style}</p>
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-sm font-semibold gradient-text">{outfit.price}</span>
                          <div className="flex gap-1">
                            {outfit.colors.map((c) => (
                              <div key={c} className="w-4 h-4 rounded-full border border-border/30" style={{ background: c }} />
                            ))}
                          </div>
                        </div>
                        <GradientButton className="w-full" size="md">
                          <ExternalLink size={16} className="mr-2" /> Shop This Look
                        </GradientButton>
                      </GlassCard>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Results;
