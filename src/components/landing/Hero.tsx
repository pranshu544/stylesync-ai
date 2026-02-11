import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import GradientButton from "@/components/ui/GradientButton";
import { Sparkles } from "lucide-react";

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
    {/* Ambient glow */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-pink/8 rounded-full blur-[140px]" />
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-purple/8 rounded-full blur-[140px]" />

    <div className="container mx-auto px-4 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-muted-foreground mb-6">
          <Sparkles size={14} className="text-gradient-pink" />
          AI-Powered Virtual Try-On
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
          See It On{" "}
          <span className="gradient-text">You</span>
          <br />
          Before You Buy
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-8">
          Upload your photo, let AI style you with trending outfits, and virtually
          try them on — in seconds. Private, fast, and free to start.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/upload">
            <GradientButton size="lg">Try Your Style ✨</GradientButton>
          </Link>
          <Link to="/#how-it-works">
            <GradientButton size="lg" variant="outline">
              See How It Works
            </GradientButton>
          </Link>
        </div>
      </motion.div>

      {/* Floating fashion cards preview */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="mt-16 flex justify-center gap-5 md:gap-6"
      >
        {[
          {
            label: "Casual",
            color: "from-gradient-pink/20 to-gradient-purple/20",
            image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=560&fit=crop&crop=top",
          },
          {
            label: "Street",
            color: "from-gradient-purple/20 to-gradient-teal/20",
            image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=400&h=560&fit=crop&crop=top",
          },
          {
            label: "Formal",
            color: "from-gradient-teal/20 to-gradient-pink/20",
            image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=560&fit=crop&crop=top",
          },
        ].map((style, i) => (
          <motion.div
            key={style.label}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
            className={`relative w-32 h-44 md:w-44 md:h-60 rounded-2xl overflow-hidden border border-border/30 shadow-lg group cursor-pointer`}
          >
            <img
              src={style.image}
              alt={style.label}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent`} />
            <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
              <span className="text-sm font-semibold text-white drop-shadow-md">{style.label}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Hero;
