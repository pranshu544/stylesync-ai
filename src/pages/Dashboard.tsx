import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import GradientButton from "@/components/ui/GradientButton";
import { Heart, Clock, Settings, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-bold mb-8">
            Your <span className="gradient-text">Dashboard</span>
          </h1>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Saved Looks", value: "0", icon: Heart },
              { label: "Try-Ons Today", value: "0 / 3", icon: Clock },
              { label: "Plan", value: "Free", icon: CreditCard },
              { label: "Preferences", value: "Set up", icon: Settings },
            ].map((stat) => (
              <GlassCard key={stat.label} className="text-center py-4">
                <stat.icon size={20} className="mx-auto mb-2 text-muted-foreground" />
                <p className="text-xl font-bold">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </GlassCard>
            ))}
          </div>

          {/* Saved Looks */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Saved Looks</h2>
            <GlassCard className="flex flex-col items-center py-12">
              <Heart size={32} className="text-muted-foreground mb-3" />
              <p className="text-muted-foreground mb-4">No saved looks yet.</p>
              <Link to="/upload">
                <GradientButton size="sm">Try Your First Look</GradientButton>
              </Link>
            </GlassCard>
          </section>

          {/* History */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Recent History</h2>
            <GlassCard className="flex flex-col items-center py-8">
              <Clock size={32} className="text-muted-foreground mb-3" />
              <p className="text-muted-foreground">No history yet. Start a try-on!</p>
            </GlassCard>
          </section>

          {/* Preferences */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Style Preferences</h2>
            <GlassCard>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "Favorite Styles", placeholder: "Casual, Streetwear, Formal..." },
                  { label: "Budget Range", placeholder: "₹500 — ₹5,000" },
                  { label: "Favorite Colors", placeholder: "Black, White, Earth tones..." },
                ].map((pref) => (
                  <div key={pref.label}>
                    <label className="text-sm font-medium block mb-1">{pref.label}</label>
                    <input
                      className="w-full bg-muted border border-border/30 rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder={pref.placeholder}
                    />
                  </div>
                ))}
              </div>
              <GradientButton size="sm" className="mt-4">Save Preferences</GradientButton>
            </GlassCard>
          </section>

          {/* Subscription */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Subscription</h2>
            <GlassCard glow="pink">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="font-bold text-lg">Free Plan</p>
                  <p className="text-sm text-muted-foreground">3 try-ons per day. Upgrade for unlimited access.</p>
                </div>
                <Link to="/pricing">
                  <GradientButton size="sm">Upgrade to Pro</GradientButton>
                </Link>
              </div>
            </GlassCard>
          </section>
        </motion.div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Dashboard;
