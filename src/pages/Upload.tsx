import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import GradientButton from "@/components/ui/GradientButton";
import { Upload as UploadIcon, Camera, ImageIcon, AlertCircle, Sparkles } from "lucide-react";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp"];
const MAX_SIZE_MB = 10;

// n8n Webhook URL — Production URL use karo jab workflow active ho
const N8N_WEBHOOK_URL = "https://pranshu544.app.n8n.cloud/webhook/outfitcheck";

const UploadPage = () => {
  const navigate = useNavigate();
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("");

  const validateFile = (f: File): string | null => {
    if (!ACCEPTED_TYPES.includes(f.type)) return "Please upload a JPG, PNG, or WebP image.";
    if (f.size > MAX_SIZE_MB * 1024 * 1024) return `File must be under ${MAX_SIZE_MB}MB.`;
    return null;
  };

  const handleFile = useCallback((f: File) => {
    const err = validateFile(f);
    if (err) { setError(err); return; }
    setError(null);
    setFile(f);
    setPreview(URL.createObjectURL(f));
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
  }, [handleFile]);

  const handleGenerate = async () => {
    if (!file) return;
    setUploading(true);
    setProgress(0);
    setError(null);

    try {
      // Step 1: Upload progress animation
      setStatusText("📤 Uploading your photo...");
      setProgress(15);

      // Send image to n8n webhook
      const formData = new FormData();
      formData.append("Your_Input_Image", file);

      setStatusText("🤖 AI is analyzing your style...");
      setProgress(40);

      const response = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        body: formData,
      });

      setProgress(70);
      setStatusText("✨ Generating outfit recommendations...");

      if (!response.ok) {
        throw new Error("AI service is busy. Please try again in a moment.");
      }

      const data = await response.json();
      setProgress(100);
      setStatusText("🎉 Your outfits are ready!");

      // Save results and navigate
      localStorage.setItem("outfitcheck_results", JSON.stringify(data));
      localStorage.setItem("outfitcheck_preview", preview || "");

      setTimeout(() => {
        navigate("/results");
      }, 500);

    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
      setUploading(false);
      setProgress(0);
      setStatusText("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl font-bold text-center mb-2">
              Virtual <span className="gradient-text">Try-On</span>
            </h1>
            <p className="text-center text-muted-foreground mb-8">
              Upload a photo and let AI style you.
            </p>

            {!preview ? (
              <GlassCard
                className={`border-2 border-dashed transition-colors cursor-pointer ${
                  dragActive ? "border-primary" : "border-border/50"
                }`}
                onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
                onDragLeave={() => setDragActive(false)}
                onDrop={handleDrop}
                onClick={() => document.getElementById("file-input")?.click()}
              >
                <input
                  id="file-input"
                  type="file"
                  accept={ACCEPTED_TYPES.join(",")}
                  className="hidden"
                  onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
                />
                <div className="flex flex-col items-center py-12 gap-4">
                  <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center">
                    <UploadIcon size={28} />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold mb-1">Drag & drop your photo here</p>
                    <p className="text-sm text-muted-foreground">or click to browse · JPG, PNG, WebP · Max {MAX_SIZE_MB}MB</p>
                  </div>
                  <div className="flex gap-2">
                    <GradientButton size="sm" variant="outline" onClick={(e) => { e.stopPropagation(); document.getElementById("file-input")?.click(); }}>
                      <ImageIcon size={16} className="mr-1" /> Browse
                    </GradientButton>
                    <GradientButton size="sm" variant="outline" onClick={(e) => { e.stopPropagation(); /* Camera API placeholder */ }}>
                      <Camera size={16} className="mr-1" /> Camera
                    </GradientButton>
                  </div>
                </div>
              </GlassCard>
            ) : (
              <GlassCard>
                <div className="relative">
                  <img src={preview} alt="Preview" className="w-full max-h-96 object-contain rounded-lg" />
                  {!uploading && (
                    <button
                      className="absolute top-2 right-2 bg-card/80 rounded-full p-1.5 text-muted-foreground hover:text-foreground"
                      onClick={() => { setFile(null); setPreview(null); setProgress(0); }}
                    >
                      ✕
                    </button>
                  )}
                </div>
                {uploading && (
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full gradient-bg animate-pulse" />
                      <span className="text-sm text-muted-foreground">{statusText || "AI is styling your look..."}</span>
                    </div>
                    <Progress value={Math.min(progress, 100)} className="h-2" />
                  </div>
                )}
                {!uploading && (
                  <GradientButton className="w-full mt-4" size="lg" onClick={handleGenerate}>
                    Generate AI Outfits ✨
                  </GradientButton>
                )}
              </GlassCard>
            )}

            {error && (
              <div className="mt-4 flex items-center gap-2 text-destructive text-sm">
                <AlertCircle size={16} /> {error}
              </div>
            )}

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {["Full body photo works best", "Good lighting preferred", "Auto-deleted after use"].map((tip) => (
                <div key={tip} className="flex items-center gap-2 text-xs text-muted-foreground bg-card rounded-lg px-3 py-2 border border-border/30">
                  <div className="w-1.5 h-1.5 rounded-full gradient-bg shrink-0" />
                  {tip}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UploadPage;
