import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Lightbulb, Users, Crown, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-ideas.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-subtle pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5 animate-glow"></div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="w-fit">
                🚀 Now with Premium Great Minds Collection
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Where <span className="bg-gradient-hero bg-clip-text text-transparent">Ideas</span> Come to Life
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Discover brilliant ideas from our community and unlock exclusive insights from history's greatest minds. Rate, share, and get inspired.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Explore Ideas
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                Join Community
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Ideas Shared</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Great Minds</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <Card className="p-8 bg-gradient-card border-0 shadow-elegant">
              <img 
                src={heroImage} 
                alt="Ideas and Innovation" 
                className="w-full h-80 object-cover rounded-lg"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 p-3 bg-card rounded-xl shadow-card animate-float">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              
              <div className="absolute -top-4 -right-4 p-3 bg-premium rounded-xl shadow-premium animate-float" style={{animationDelay: '1s'}}>
                <Crown className="w-6 h-6 text-premium-foreground" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 p-3 bg-accent rounded-xl shadow-card animate-float" style={{animationDelay: '2s'}}>
                <Users className="w-6 h-6 text-accent-foreground" />
              </div>
              
              <div className="absolute -bottom-4 -right-4 p-3 bg-card rounded-xl shadow-card animate-float" style={{animationDelay: '0.5s'}}>
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;