import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import { Truck, Zap, Globe, Clock, CheckCircle, Info } from "lucide-react";

const ShippingDelivery = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-bold text-center mb-4">
            Shipping & <span className="gradient-text">Delivery</span> Policy
          </h1>
          <p className="text-center text-muted-foreground mb-12 max-w-md mx-auto">
            OutfitCheck AI is a 100% digital service. Here's how we deliver our service to you.
          </p>

          <div className="space-y-6">
            <GlassCard glow="purple">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                  <Zap size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Digital-Only Service</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    OutfitCheck AI is a <strong>fully digital, cloud-based service</strong>. There are no physical products, shipments, or deliveries involved. All services are delivered electronically through our website platform.
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Service Delivery Timeline</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle size={14} className="text-green-500 mt-0.5 shrink-0" />
                      <span><strong>AI Outfit Analysis:</strong> Delivered instantly (10–30 seconds) after photo upload.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={14} className="text-green-500 mt-0.5 shrink-0" />
                      <span><strong>Pro Plan Activation:</strong> Activated immediately upon successful payment confirmation from Razorpay.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={14} className="text-green-500 mt-0.5 shrink-0" />
                      <span><strong>Pro Features Access:</strong> Available instantly after plan activation, no additional setup required.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                  <Globe size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Availability</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our service is available <strong>24 hours a day, 7 days a week</strong>, accessible from any device with an internet connection and a modern web browser. There are no geographical restrictions — our AI service is available globally.
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                  <Truck size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">No Physical Shipping</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    As OutfitCheck AI does not sell or ship any physical goods, there are <strong>no shipping charges, delivery timelines, or logistics</strong> involved. All outfit recommendations and styling suggestions are generated and displayed digitally on our platform.
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                  <Info size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Service Interruptions</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    While we strive for 99.9% uptime, occasional service interruptions may occur due to maintenance, updates, or unforeseen technical issues. In such cases:
                  </p>
                  <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                    <li>• We will notify users of planned maintenance in advance where possible.</li>
                    <li>• If extended downtime affects your Pro subscription, contact us for a proportional extension or credit.</li>
                    <li>• Email <a href="mailto:support@outfitcheck.ai" className="text-primary hover:underline">support@outfitcheck.ai</a> for any delivery-related concerns.</li>
                  </ul>
                </div>
              </div>
            </GlassCard>
          </div>

          <div className="mt-12 text-center text-xs text-muted-foreground">
            Last updated: February 2026 · OutfitCheck AI · All rights reserved.
          </div>
        </motion.div>
      </div>
    </main>
    <Footer />
  </div>
);

export default ShippingDelivery;
