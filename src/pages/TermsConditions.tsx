import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import { FileText, Users, CreditCard, AlertTriangle, Scale, ShieldCheck, Globe, Ban } from "lucide-react";

const sections = [
  {
    icon: FileText,
    title: "1. Introduction",
    content: `These Terms and Conditions ("Terms") govern your use of the OutfitCheck AI website and services (the "Service") operated by OutfitCheck AI ("we," "us," or "our"). By accessing or using our Service, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Service.

OutfitCheck AI is an AI-powered fashion styling platform that provides personalized outfit recommendations based on user-uploaded photographs.`,
  },
  {
    icon: Users,
    title: "2. User Eligibility & Account",
    content: `• You must be at least 13 years of age to use this Service. Users under 18 must have parental consent.
• You are responsible for maintaining the confidentiality of your account credentials.
• You agree to provide accurate and complete information when using our Service.
• One account per person. Sharing accounts is not permitted.
• We reserve the right to suspend or terminate accounts that violate these Terms.`,
  },
  {
    icon: Globe,
    title: "3. Service Description",
    content: `• OutfitCheck AI provides AI-generated outfit and styling recommendations based on photos uploaded by users.
• The Service is provided on an "as-is" and "as-available" basis.
• AI recommendations are generated algorithmically and are subjective in nature. We do not guarantee that suggestions will match individual preferences.
• We may modify, update, or discontinue features of the Service at any time without prior notice.
• Free plan users receive limited daily analyses. Pro plan users receive unlimited access as described on the Pricing page.`,
  },
  {
    icon: CreditCard,
    title: "4. Payments & Subscriptions",
    content: `• The Pro plan is available at ₹299/month (or as displayed on the Pricing page at the time of purchase).
• All payments are processed securely through Razorpay, a PCI-DSS compliant payment gateway.
• Subscription charges are recurring and will auto-renew at the end of each billing cycle unless cancelled.
• Prices are inclusive of applicable taxes unless stated otherwise.
• You agree to pay all charges associated with your selected plan.
• For refund and cancellation details, please refer to our Refund & Cancellation Policy.`,
  },
  {
    icon: ShieldCheck,
    title: "5. User Content & Privacy",
    content: `• By uploading photos, you grant OutfitCheck AI a limited, non-exclusive license to process the image solely for the purpose of generating outfit recommendations.
• All uploaded photos are automatically deleted within 15 minutes of processing. We do not permanently store your images.
• We do not sell, share, or distribute your photos to any third party.
• Only minimal metadata (style names, color preferences) may be retained if you choose to save results.
• For complete details, refer to our Privacy Policy.`,
  },
  {
    icon: Ban,
    title: "6. Prohibited Use",
    content: `You agree NOT to:
• Upload inappropriate, offensive, or illegal content.
• Use the Service for any unlawful purpose or in violation of any applicable law.
• Attempt to reverse-engineer, hack, or interfere with the Service's infrastructure.
• Use automated bots or scripts to access the Service.
• Resell, redistribute, or commercially exploit the Service without our written consent.
• Upload images of minors without appropriate parental consent.
• Impersonate any person or entity while using the Service.`,
  },
  {
    icon: AlertTriangle,
    title: "7. Limitation of Liability",
    content: `• OutfitCheck AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the Service.
• Our total liability for any claim arising from use of the Service shall not exceed the amount paid by you in the 3 months preceding the claim.
• We are not responsible for outfit recommendations not meeting subjective expectations, as AI results are generated algorithmically.
• We do not guarantee uninterrupted or error-free operation of the Service.`,
  },
  {
    icon: Scale,
    title: "8. Governing Law & Disputes",
    content: `• These Terms shall be governed by and construed in accordance with the laws of India.
• Any disputes arising from these Terms or the Service shall be subject to the exclusive jurisdiction of the courts in India.
• We encourage users to first contact us at support@outfitcheck.ai to resolve any disputes amicably before pursuing legal remedies.`,
  },
];

const TermsConditions = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-bold text-center mb-4">
            Terms & <span className="gradient-text">Conditions</span>
          </h1>
          <p className="text-center text-muted-foreground mb-12 max-w-md mx-auto">
            Please read these terms carefully before using OutfitCheck AI.
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
              By using OutfitCheck AI, you acknowledge that you have read, understood, and agree to these Terms and Conditions.
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

export default TermsConditions;
