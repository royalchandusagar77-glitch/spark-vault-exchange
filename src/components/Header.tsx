import { Button } from "@/components/ui/button";
import { Crown, Lightbulb, Menu, Star } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-card/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-gradient-hero">
            <Lightbulb className="w-6 h-6 text-primary-foreground" />
          </div>
          <h1 className="text-xl font-bold text-foreground">IdeasHub</h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#community" className="text-muted-foreground hover:text-foreground transition-colors">
            Community
          </a>
          <a href="#premium" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
            <Crown className="w-4 h-4" />
            Premium
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button variant="hero" size="sm">
            Start Free
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;