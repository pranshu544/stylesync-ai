import { motion } from "framer-motion";
import GradientButton from "@/components/ui/GradientButton";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

const Auth = () => (
  <div className="min-h-screen bg-background flex items-center justify-center px-4">
    {/* Ambient glow */}
    <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-gradient-pink/8 rounded-full blur-[120px]" />
    <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-purple/8 rounded-full blur-[120px]" />

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-2xl p-8 w-full max-w-sm text-center relative z-10"
    >
      <Link to="/">
        <motion.div
          className="logo-highlight mx-auto mb-4 w-fit"
          animate={{ boxShadow: [
            '0 0 20px -2px hsl(325 90% 58% / 0.5), 0 0 40px -4px hsl(272 72% 47% / 0.3)',
            '0 0 30px -2px hsl(272 72% 47% / 0.6), 0 0 50px -4px hsl(174 100% 42% / 0.4)',
            '0 0 20px -2px hsl(325 90% 58% / 0.5), 0 0 40px -4px hsl(272 72% 47% / 0.3)'
          ] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <img src={logo} alt="OutfitCheck AI" className="h-24 w-24" />
        </motion.div>
      </Link>
      <h1 className="text-2xl font-bold mb-2">Welcome to <span className="gradient-text">OutfitCheck AI</span></h1>
      <p className="text-sm text-muted-foreground mb-8">Sign in to start your virtual try-on experience.</p>

      <GradientButton
        className="w-full flex items-center justify-center gap-3"
        size="lg"
        onClick={() => {
          // Supabase Google OAuth will be wired here
          console.log("Google OAuth sign-in triggered");
        }}
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
          <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
          <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
        Continue with Google
      </GradientButton>

      <p className="mt-6 text-xs text-muted-foreground">
        By signing in, you agree to our{" "}
        <Link to="/privacy" className="text-accent hover:underline">Privacy Policy</Link>.
      </p>
    </motion.div>
  </div>
);

export default Auth;
