import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import GradientButton from "@/components/ui/GradientButton";
import { Phone, Mail, MapPin, Building, Clock, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Building,
    label: "Trade Name",
    value: "OutfitCheck AI",
    detail: "AI-Powered Fashion & Styling Platform",
  },
  {
    icon: Mail,
    label: "Email",
    value: "support@outfitcheck.ai",
    href: "mailto:support@outfitcheck.ai",
    detail: "We respond within 24 hours",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-XXXXXXXXXX",
    href: "tel:+91XXXXXXXXXX",
    detail: "Mon-Fri, 10 AM - 6 PM IST",
  },
  {
    icon: MapPin,
    label: "Registered Address",
    value: "OutfitCheck AI",
    detail: "Your Business Address, City, State - PIN, India",
  },
];

const Contact = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-bold text-center mb-4">
            Contact <span className="gradient-text">Us</span>
          </h1>
          <p className="text-center text-muted-foreground mb-12 max-w-md mx-auto">
            Have questions, feedback, or need support? We're here to help.
          </p>

          <div className="grid gap-4">
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-semibold text-primary hover:underline">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-semibold">{item.value}</p>
                    )}
                    <p className="text-sm text-muted-foreground mt-0.5">{item.detail}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <GlassCard glow="purple">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Business Hours</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                    <div>
                      <p className="font-medium text-foreground">Customer Support</p>
                      <p>Mon - Fri: 10:00 AM - 6:00 PM IST</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email Support</p>
                      <p>Available 24/7 (response within 24 hrs)</p>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Quick Support */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8"
          >
            <GlassCard>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                  <MessageCircle size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">Quick Support</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    For the fastest response, email us with your query and include your registered email address or payment ID if applicable.
                  </p>
                  <a href="mailto:support@outfitcheck.ai">
                    <GradientButton size="sm">
                      <Mail size={16} className="mr-1" /> Email Support
                    </GradientButton>
                  </a>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <div className="mt-12 text-center text-xs text-muted-foreground">
            OutfitCheck AI · AI-Powered Fashion Platform · India
          </div>
        </motion.div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Contact;
