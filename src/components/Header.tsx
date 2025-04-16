
import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 py-4 backdrop-blur-md bg-background/80 border-b border-border/40">
      <div className="container flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Globe className="h-6 w-6 text-agent-blue blue-glow" />
          <span className="font-bold text-xl">AgentHub</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-sm text-foreground/80 hover:text-foreground transition">
            About
          </a>
          <a href="#features" className="text-sm text-foreground/80 hover:text-foreground transition">
            Features
          </a>
          <a href="#contact" className="text-sm text-foreground/80 hover:text-foreground transition">
            Contact
          </a>
          <a 
            href="#waitlist" 
            className="bg-agent-blue hover:bg-agent-blue-light text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Join Waitlist
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-0 top-[69px] bg-background z-40 md:hidden transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-6 p-8">
          <a 
            href="#about" 
            className="text-lg text-foreground/80 hover:text-foreground transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#features" 
            className="text-lg text-foreground/80 hover:text-foreground transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#contact" 
            className="text-lg text-foreground/80 hover:text-foreground transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
          <a 
            href="#waitlist" 
            className="bg-agent-blue hover:bg-agent-blue-light text-white px-4 py-3 rounded-md text-lg font-medium transition-colors text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Join Waitlist
          </a>
        </nav>
      </div>
    </header>
  );
}
