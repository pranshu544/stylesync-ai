import { useCallback } from "react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface RazorpayOptions {
  amount?: number; // in paise (29900 = ₹299)
  planName?: string;
  customerEmail?: string;
  customerPhone?: string;
  onSuccess?: (response: any) => void;
  onFailure?: (error: any) => void;
}

const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export const useRazorpay = () => {
  const initiatePayment = useCallback(async (options: RazorpayOptions = {}) => {
    const loaded = await loadRazorpayScript();
    if (!loaded) {
      alert("Failed to load payment gateway. Please check your internet connection.");
      return;
    }

    const keyId = import.meta.env.VITE_RAZORPAY_KEY_ID;
    if (!keyId || keyId === "rzp_test_XXXXXXXXXX") {
      alert("Payment gateway is being set up. Please try again later.");
      return;
    }

    const amount = options.amount || Number(import.meta.env.VITE_RAZORPAY_PLAN_AMOUNT) || 29900;

    const rzpOptions = {
      key: keyId,
      amount: amount,
      currency: "INR",
      name: "OutfitCheck AI",
      description: options.planName || "Pro Plan - Monthly Subscription",
      image: "/logo.png",
      handler: function (response: any) {
        // Payment successful
        console.log("Payment successful:", response);
        if (options.onSuccess) {
          options.onSuccess(response);
        } else {
          alert("🎉 Payment successful! Welcome to OutfitCheck Pro!");
          // Store pro status
          localStorage.setItem("outfitcheck_pro", JSON.stringify({
            active: true,
            paymentId: response.razorpay_payment_id,
            activatedAt: new Date().toISOString(),
          }));
          window.location.reload();
        }
      },
      prefill: {
        email: options.customerEmail || "",
        contact: options.customerPhone || "",
      },
      notes: {
        plan: "pro_monthly",
        source: "outfitcheck_website",
      },
      theme: {
        color: "#a855f7", // Purple matching brand
      },
      modal: {
        ondismiss: function () {
          if (options.onFailure) {
            options.onFailure({ reason: "dismissed" });
          }
        },
      },
    };

    const rzp = new window.Razorpay(rzpOptions);
    rzp.on("payment.failed", function (response: any) {
      console.error("Payment failed:", response.error);
      if (options.onFailure) {
        options.onFailure(response.error);
      } else {
        alert("Payment failed. Please try again.");
      }
    });
    rzp.open();
  }, []);

  const isProUser = useCallback((): boolean => {
    try {
      const pro = JSON.parse(localStorage.getItem("outfitcheck_pro") || "{}");
      return pro.active === true;
    } catch {
      return false;
    }
  }, []);

  return { initiatePayment, isProUser };
};
