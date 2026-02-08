import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Shield, Mail, Instagram, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/30 bg-surface">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <img src={logo} alt="StyleSync AI" className="h-8 w-8 rounded-lg" />
            <span className="font-bold gradient-text">StyleSync AI</span>
          </div>
          <p className="text-sm text-muted-foreground">
            AI-powered virtual try-on for the next generation of fashion lovers.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-3">Product</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/#how-it-works" className="hover:text-foreground transition-colors">How It Works</Link></li>
            <li><Link to="/pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
            <li><Link to="/upload" className="hover:text-foreground transition-colors">Try On</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-3">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-3">Connect</h4>
          <div className="flex gap-3 text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-foreground transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-foreground transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground">© 2026 StyleSync AI. All rights reserved.</p>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Shield size={14} />
          <span>Your photos are auto-deleted. We never store images permanently.</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
