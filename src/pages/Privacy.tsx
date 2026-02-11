import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import { Shield, Trash2, Eye, Database, Lock, Cookie, UserCheck, FileText } from "lucide-react";

const sections = [
  {
    icon: FileText,
    title: "1. Information We Collect",
    content: `When you use OutfitCheck AI, we may collect the following information:

• Photos/Images: Uploaded temporarily for AI processing. These are automatically deleted within 15 minutes of analysis.
• Email Address: If you create an account or subscribe to Pro plan.
• Payment Information: Processed securely through Razorpay. We do NOT store your card details, bank account numbers, or UPI IDs on our servers. All payment data is handled by Razorpay (PCI-DSS compliant).
• Usage Data: Basic analytics like pages visited, features used, and device type to improve our service.
• Style Preferences: Outfit recommendations and saved results if you choose to store them.`,
  },
  {
    icon: Trash2,
    title: "2. Automatic Image Deletion",
    content: `Your privacy is our top priority regarding uploaded images:

• All uploaded photos are processed in-memory and automatically deleted within 15 minutes.
• We do NOT permanently store your raw images on our servers.
• Temporary image URLs (via Cloudinary) expire automatically.
• We never use your photos for AI training, marketing, or any purpose other than generating your outfit recommendations.`,
  },
  {
    icon: Eye,
    title: "3. How We Use Your Information",
    content: `We use collected information solely for:

• Providing AI-powered outfit recommendations based on your uploaded photos.
• Processing payments and managing your subscription through Razorpay.
• Sending transaction-related emails (payment receipts, subscription confirmations).
• Improving our AI models and service quality (using anonymized, aggregate data only).
• Communicating service updates or responding to support requests.

We do NOT sell, rent, or share your personal information with third parties for marketing purposes.`,
  },
  {
    icon: Lock,
    title: "4. Payment Data Security",
    content: `All payment transactions are processed by Razorpay, a PCI-DSS Level 1 compliant payment gateway:

• Your card details, bank information, and UPI credentials are encrypted and handled entirely by Razorpay.
• OutfitCheck AI never has access to your complete payment credentials.
• We only receive transaction confirmation details (payment ID, amount, status) from Razorpay for record-keeping.
• For Razorpay's privacy practices, visit: razorpay.com/privacy`,
  },
  {
    icon: Database,
    title: "5. Data Storage & Retention",
    content: `• Uploaded images: Deleted within 15 minutes of processing.
• Account information: Retained as long as your account is active. Deleted within 30 days of account deletion request.
• Payment records: Transaction records are retained for 7 years as per Indian tax and accounting regulations.
• Style history: Stored locally on your device (localStorage). You can clear this anytime from the History page.
• Analytics data: Anonymized and aggregated, retained for up to 12 months.`,
  },
  {
    icon: Shield,
    title: "6. Data Security Measures",
    content: `We implement industry-standard security measures:

• All data transmission uses HTTPS/TLS encryption.
• Image uploads use signed URLs for secure transfer.
• AI processing happens via secured API calls with authentication.
• We conduct regular security reviews of our infrastructure.
• Access to user data is restricted to authorized personnel only.`,
  },
  {
    icon: UserCheck,
    title: "7. Your Rights",
    content: `You have the right to:

• Access: Request a copy of your personal data held by us.
• Correction: Update or correct inaccurate personal information.
• Deletion: Request deletion of your account and associated data.
• Opt-out: Unsubscribe from non-essential communications.
• Data Portability: Request your data in a machine-readable format.

To exercise any of these rights, email us at support@outfitcheck.ai.`,
  },
  {
    icon: Cookie,
    title: "8. Cookies & Tracking",
    content: `OutfitCheck AI uses minimal cookies:

• Essential Cookies: Required for the website to function (session management).
• localStorage: Used to store your style history and preferences locally on your device.
• We do NOT use third-party advertising cookies or tracking pixels.
• We do NOT create ad profiles or sell browsing data.
• No data is shared with social media platforms.`,
  },
];

const Privacy = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-bold text-center mb-4">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-center text-muted-foreground mb-12 max-w-md mx-auto">
            OutfitCheck AI is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information.
          </p>

          <div className="space-y-6">
            {sections.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <GlassCard>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                      <s.icon size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">{s.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{s.content}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/10 text-center">
            <p className="text-sm text-muted-foreground">
              For any privacy-related concerns, contact us at{" "}
              <a href="mailto:support@outfitcheck.ai" className="text-primary hover:underline">support@outfitcheck.ai</a>
            </p>
          </div>

          <div className="mt-8 text-center text-xs text-muted-foreground">
            Last updated: February 2026 · OutfitCheck AI · All rights reserved.
          </div>
        </motion.div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Privacy;
