import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import GradientButton from "@/components/ui/GradientButton";
import { Heart, Share2, ArrowLeft, Sparkles, Palette, User, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { saveToHistory } from "./History";

interface Outfit {
  style_name: string;
  description: string;
  colors: string | string[];
  outfit_number?: number;
  outfit_image?: string;
}

interface ResultData {
  original_image?: string;
  outfits?: Outfit[];
  message?: string;
}

const Results = () => {
  const navigate = useNavigate();
  const [results, setResults] = useState<ResultData | null>(null);
  const [userPhoto, setUserPhoto] = useState<string>("");
  const [selectedOutfit, setSelectedOutfit] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem("outfitcheck_results");
    const preview = localStorage.getItem("outfitcheck_preview");

    if (!stored) {
      navigate("/upload");
      return;
    }

    try {
      const data = JSON.parse(stored);
      setResults(data);
      setUserPhoto(data.original_image || preview || "");

      // Save minimal info to history (only URLs, not full data)
      if (data.outfits && data.original_image) {
        const styles = data.outfits.map((o: any) => o.style_name).filter(Boolean);
        saveToHistory(data.original_image, styles);
      }
    } catch {
      navigate("/upload");
    }
  }, [navigate]);

  if (!results || !results.outfits) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 rounded-full gradient-bg animate-pulse mx-auto mb-4" />
          <p className="text-muted-foreground">Loading your results...</p>
        </div>
      </div>
    );
  }

  const outfits = results.outfits;
  const currentOutfit = outfits[selectedOutfit];
  const colors = Array.isArray(currentOutfit.colors)
    ? currentOutfit.colors
    : (currentOutfit.colors || "").split(",").map((c: string) => c.trim());

  // Gradient backgrounds for outfit placeholders (when no AI image)
  const outfitGradients = [
    "from-violet-600 via-purple-500 to-pink-500",
    "from-blue-600 via-cyan-500 to-teal-400",
    "from-orange-500 via-rose-500 to-pink-600",
    "from-emerald-500 via-green-500 to-lime-400",
  ];

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(
        `🎨 OutfitCheck AI suggested "${currentOutfit.style_name}" for me!\n${currentOutfit.description}`
      );
      alert("Copied to clipboard! Share it anywhere ✨");
    } catch {
      alert("Could not copy to clipboard");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            {/* Header */}
            <div className="text-center mb-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4"
              >
                <Sparkles size={16} className="text-primary" />
                <span className="text-sm font-medium text-primary">Analysis Complete!</span>
              </motion.div>
              <h1 className="text-3xl font-bold mb-2">
                Your <span className="gradient-text">AI Style</span> Report
              </h1>
              <p className="text-muted-foreground">
                Here are {outfits.length} personalized outfit recommendations just for you.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Left — User Photo */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <GlassCard glow="purple" className="sticky top-28">
                  <div className="flex items-center gap-2 mb-4">
                    <User size={18} className="text-primary" />
                    <h3 className="font-semibold">Your Photo</h3>
                  </div>
                  {userPhoto && (
                    <img
                      src={userPhoto}
                      alt="Your uploaded photo"
                      className="w-full max-h-[500px] object-contain rounded-xl border border-border/30"
                    />
                  )}
                  <div className="flex gap-3 mt-4">
                    <GradientButton size="sm" variant="outline" onClick={() => navigate("/upload")}>
                      <ArrowLeft size={16} className="mr-1" /> New Photo
                    </GradientButton>
                    <GradientButton size="sm" variant="outline" onClick={() => navigate("/history")}>
                      <Clock size={16} className="mr-1" /> History
                    </GradientButton>
                    <GradientButton size="sm" variant="outline" onClick={handleShare}>
                      <Share2 size={16} className="mr-1" /> Share
                    </GradientButton>
                  </div>
                </GlassCard>
              </motion.div>

              {/* Right — Outfit Cards */}
              <div className="space-y-4">
                {/* Outfit Tabs */}
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {outfits.map((outfit, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedOutfit(i)}
                      className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                        selectedOutfit === i
                          ? "gradient-bg text-white shadow-lg"
                          : "bg-card border border-border/30 text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {outfit.style_name}
                    </button>
                  ))}
                </div>

                {/* Selected Outfit Detail */}
                <motion.div
                  key={selectedOutfit}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <GlassCard glow="pink">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                        Outfit {selectedOutfit + 1} of {outfits.length}
                      </span>
                      <button className="text-muted-foreground hover:text-red-500 transition-colors">
                        <Heart size={20} />
                      </button>
                    </div>

                    {/* Outfit Image */}
                    <div className="mb-4 rounded-xl overflow-hidden border border-border/30 bg-muted/20">
                      {currentOutfit.outfit_image ? (
                        <img
                          src={currentOutfit.outfit_image}
                          alt={currentOutfit.style_name + " outfit"}
                          className="w-full h-72 object-cover"
                          loading="lazy"
                          onError={(e) => {
                            const el = e.target as HTMLImageElement;
                            el.onerror = null;
                            el.style.display = 'none';
                            el.parentElement?.classList.add('ai-img-fallback');
                          }}
                        />
                      ) : (
                        <div className={`w-full h-72 bg-gradient-to-br ${outfitGradients[selectedOutfit % outfitGradients.length]} flex items-center justify-center relative`}>
                          <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />
                          <div className="text-center text-white relative z-10">
                            <Sparkles size={36} className="mx-auto mb-3 drop-shadow-lg" />
                            <p className="font-bold text-lg drop-shadow-md">{currentOutfit.style_name}</p>
                            <p className="text-sm opacity-80 mt-1">AI Outfit Concept</p>
                          </div>
                        </div>
                      )}
                    </div>

                    <h2 className="text-2xl font-bold mb-3 gradient-text">
                      {currentOutfit.style_name}
                    </h2>

                    <p className="text-foreground/80 leading-relaxed mb-6 text-[15px]">
                      {currentOutfit.description}
                    </p>

                    {/* Color Palette */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Palette size={16} className="text-primary" />
                        <span className="text-sm font-medium">Color Palette</span>
                      </div>
                      <div className="flex gap-3 flex-wrap">
                        {colors.map((color: string, idx: number) => (
                          <div key={idx} className="flex items-center gap-2 bg-card rounded-lg px-3 py-2 border border-border/30">
                            <div
                              className="w-5 h-5 rounded-full border border-border/50 shadow-sm"
                              style={{ backgroundColor: color.toLowerCase().includes('#') ? color : undefined }}
                            />
                            <span className="text-sm capitalize">{color}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Shopping Tip */}
                    <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
                      <p className="text-sm text-muted-foreground">
                        💡 <span className="font-medium text-foreground">Style Tip:</span> Search for "{currentOutfit.style_name}" on Amazon, Myntra, or Ajio to find similar outfits at great prices!
                      </p>
                    </div>
                  </GlassCard>
                </motion.div>

                {/* All Outfits Mini Cards */}
                <h3 className="font-semibold text-sm text-muted-foreground pt-2">All Recommendations</h3>
                <div className="grid grid-cols-2 gap-3">
                  {outfits.map((outfit, i) => {
                    const outfitColors = Array.isArray(outfit.colors)
                      ? outfit.colors
                      : (outfit.colors || "").split(",").map((c: string) => c.trim());

                    return (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedOutfit(i)}
                        className={`cursor-pointer rounded-xl p-4 border transition-all ${
                          selectedOutfit === i
                            ? "border-primary bg-primary/5 shadow-md"
                            : "border-border/30 bg-card hover:border-primary/30"
                        }`}
                      >
                        {outfit.outfit_image ? (
                          <img
                            src={outfit.outfit_image}
                            alt={outfit.style_name}
                            className="w-full h-24 object-cover rounded-lg mb-2"
                            loading="lazy"
                            onError={(e) => {
                              const el = e.target as HTMLImageElement;
                              el.onerror = null;
                              el.style.display = 'none';
                            }}
                          />
                        ) : (
                          <div className={`w-full h-24 bg-gradient-to-br ${outfitGradients[i % outfitGradients.length]} rounded-lg mb-2 flex items-center justify-center`}>
                            <Sparkles size={18} className="text-white drop-shadow-md" />
                          </div>
                        )}
                        <div className="flex gap-1 mb-2">
                          {outfitColors.slice(0, 4).map((c: string, idx: number) => (
                            <div
                              key={idx}
                              className="w-3 h-3 rounded-full border border-border/30"
                              style={{ backgroundColor: c.toLowerCase().includes('#') ? c : undefined }}
                            />
                          ))}
                        </div>
                        <h4 className="font-semibold text-sm">{outfit.style_name}</h4>
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                          {outfit.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Try Again Button */}
                <GradientButton
                  className="w-full mt-4"
                  size="lg"
                  onClick={() => {
                    localStorage.removeItem("outfitcheck_results");
                    localStorage.removeItem("outfitcheck_preview");
                    navigate("/upload");
                  }}
                >
                  <Sparkles size={18} className="mr-2" /> Try Another Photo
                </GradientButton>
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
