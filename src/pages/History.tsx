import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import GradientButton from "@/components/ui/GradientButton";
import { Clock, Trash2, ArrowLeft, Sparkles, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export interface HistoryItem {
  id: string;
  date: string;
  imageUrl: string;
  styles: string[];
}

const HISTORY_KEY = "outfitcheck_history";
const MAX_HISTORY = 20;

// Helper to get history from localStorage
export const getHistory = (): HistoryItem[] => {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
  } catch {
    return [];
  }
};

// Helper to save a new entry (only URL + style names + date)
export const saveToHistory = (imageUrl: string, styles: string[]) => {
  if (!imageUrl) return;
  const history = getHistory();
  const newItem: HistoryItem = {
    id: Date.now().toString(),
    date: new Date().toISOString(),
    imageUrl,
    styles,
  };
  // Avoid duplicates (same image URL)
  const filtered = history.filter((h) => h.imageUrl !== imageUrl);
  // Add new at top, limit to MAX_HISTORY
  const updated = [newItem, ...filtered].slice(0, MAX_HISTORY);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
};

const History = () => {
  const navigate = useNavigate();
  const [history, setHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    setHistory(getHistory());
  }, []);

  const handleDelete = (id: string) => {
    const updated = history.filter((h) => h.id !== id);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
    setHistory(updated);
  };

  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to clear all history?")) {
      localStorage.removeItem(HISTORY_KEY);
      setHistory([]);
    }
  };

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Clock size={22} className="text-primary" />
                  <h1 className="text-2xl font-bold">
                    Your <span className="gradient-text">Style History</span>
                  </h1>
                </div>
                <p className="text-sm text-muted-foreground">
                  {history.length} past {history.length === 1 ? "analysis" : "analyses"}
                </p>
              </div>
              <div className="flex gap-2">
                <GradientButton size="sm" variant="outline" onClick={() => navigate("/upload")}>
                  <ArrowLeft size={16} className="mr-1" /> Upload
                </GradientButton>
                {history.length > 0 && (
                  <GradientButton size="sm" variant="outline" onClick={handleClearAll}>
                    <Trash2 size={16} className="mr-1" /> Clear All
                  </GradientButton>
                )}
              </div>
            </div>

            {/* Empty State */}
            {history.length === 0 && (
              <GlassCard className="text-center py-16">
                <Sparkles size={40} className="mx-auto mb-4 text-muted-foreground/40" />
                <h3 className="font-semibold text-lg mb-2">No history yet</h3>
                <p className="text-muted-foreground mb-6">Upload a photo to get your first outfit recommendation!</p>
                <GradientButton onClick={() => navigate("/upload")}>
                  Try Your Style ✨
                </GradientButton>
              </GlassCard>
            )}

            {/* History Grid */}
            <div className="grid gap-4">
              {history.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <GlassCard className="flex items-center gap-4 group">
                    {/* Thumbnail */}
                    <div className="shrink-0">
                      <img
                        src={item.imageUrl}
                        alt="Past upload"
                        className="w-16 h-16 rounded-xl object-cover border border-border/30"
                        onError={(e) => {
                          const el = e.target as HTMLImageElement;
                          el.onerror = null;
                          el.src = "";
                          el.className = "w-16 h-16 rounded-xl bg-gradient-to-br from-violet-500 to-pink-500";
                        }}
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted-foreground mb-1">{formatDate(item.date)}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {item.styles.map((style, idx) => (
                          <span
                            key={idx}
                            className="text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full"
                          >
                            {style}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 shrink-0">
                      <a
                        href={item.imageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                        title="View image"
                      >
                        <ExternalLink size={16} />
                      </a>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="p-2 rounded-lg hover:bg-destructive/10 transition-colors text-muted-foreground hover:text-destructive"
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default History;
