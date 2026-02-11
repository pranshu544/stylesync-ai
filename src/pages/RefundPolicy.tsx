import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import { RotateCcw, AlertCircle, Clock, CreditCard, Ban, CheckCircle } from "lucide-react";

const RefundPolicy = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-bold text-center mb-4">
            Refund & <span className="gradient-text">Cancellation</span> Policy
          </h1>
          <p className="text-center text-muted-foreground mb-12 max-w-md mx-auto">
            Our policy ensures transparency for all transactions on OutfitCheck AI.
          </p>

          <div className="space-y-6">
            <GlassCard>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                  <RotateCcw size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Refund Eligibility</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Since OutfitCheck AI is a digital service that delivers AI-powered outfit recommendations instantly upon use, refunds are evaluated on a case-by-case basis. You may request a refund if:
                  </p>
                  <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle size={14} className="text-green-500 mt-0.5 shrink-0" /> You were charged multiple times for a single subscription due to a technical error.</li>
                    <li className="flex items-start gap-2"><CheckCircle size={14} className="text-green-500 mt-0.5 shrink-0" /> The service was completely unavailable and you could not use any features during the billing period.</li>
                    <li className="flex items-start gap-2"><CheckCircle size={14} className="text-green-500 mt-0.5 shrink-0" /> You were charged after successfully cancelling your subscription before the renewal date.</li>
                  </ul>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                  <Ban size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Non-Refundable Scenarios</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Refunds will not be provided in the following circumstances:
                  </p>
                  <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                    <li>• Dissatisfaction with AI-generated outfit recommendations (as results are subjective and vary by input).</li>
                    <li>• Failure to use the service during the active subscription period.</li>
                    <li>• Issues arising from uploading poor quality or non-compliant images.</li>
                    <li>• Partial use of the subscription period.</li>
                  </ul>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                  <CreditCard size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Cancellation Policy</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    You may cancel your Pro subscription at any time. Upon cancellation:
                  </p>
                  <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                    <li>• Your Pro features will remain active until the end of the current billing cycle.</li>
                    <li>• No further charges will be made after cancellation.</li>
                    <li>• Your account will automatically revert to the Free plan after the billing period expires.</li>
                    <li>• To cancel, contact us at <a href="mailto:support@outfitcheck.ai" className="text-primary hover:underline">support@outfitcheck.ai</a>.</li>
                  </ul>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Refund Processing Time</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Approved refunds will be processed within <strong>5–7 business days</strong> and credited back to the original payment method. The exact time for the refund to reflect in your account depends on your bank or payment provider.
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                  <AlertCircle size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">How to Request a Refund</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    To initiate a refund request, please email us at <a href="mailto:support@outfitcheck.ai" className="text-primary hover:underline">support@outfitcheck.ai</a> with the following details:
                  </p>
                  <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                    <li>• Your registered email address</li>
                    <li>• Razorpay payment ID / transaction reference</li>
                    <li>• Reason for refund request</li>
                    <li>• Date of transaction</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-2">
                    We aim to respond to all refund requests within <strong>48 hours</strong>.
                  </p>
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

export default RefundPolicy;
