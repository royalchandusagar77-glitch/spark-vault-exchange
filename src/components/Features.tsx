import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Crown, 
  Star, 
  TrendingUp, 
  MessageSquare, 
  Shield,
  Zap,
  Award
} from "lucide-react";

const Features = () => {
  const communityFeatures = [
    {
      icon: Users,
      title: "Community Ideas",
      description: "Share your creative thoughts and discover amazing ideas from innovators worldwide.",
      color: "bg-primary"
    },
    {
      icon: Star,
      title: "Rating System",
      description: "Rate ideas based on innovation, feasibility, and impact. Find the best concepts quickly.",
      color: "bg-accent"
    },
    {
      icon: MessageSquare,
      title: "Collaborative Discussion",
      description: "Engage in meaningful conversations and build upon each other's ideas.",
      color: "bg-primary"
    }
  ];

  const premiumFeatures = [
    {
      icon: Crown,
      title: "Great Minds Collection",
      description: "Access exclusive ideas and insights from history's most brilliant thinkers.",
      color: "bg-premium"
    },
    {
      icon: Award,
      title: "Curated Content",
      description: "Premium ideas carefully selected and verified by our expert team.",
      color: "bg-premium"
    },
    {
      icon: Zap,
      title: "Advanced Analytics",
      description: "Deep insights into idea trends, performance metrics, and impact analysis.",
      color: "bg-premium"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Community Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            🌟 Community Features
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Built for Innovators</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join a thriving community of creative minds sharing, rating, and building upon each other's ideas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {communityFeatures.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-card transition-all duration-300">
              <CardHeader>
                <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Premium Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-premium text-premium">
            👑 Premium Features
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Unlock <span className="bg-gradient-premium bg-clip-text text-transparent">Great Minds</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get exclusive access to ideas from Nobel laureates, successful entrepreneurs, and visionary thinkers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {premiumFeatures.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-premium transition-all duration-300 border-premium/20">
              <div className="absolute inset-0 bg-gradient-premium opacity-5"></div>
              <CardHeader className="relative">
                <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-premium-foreground" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="premium" size="xl">
            Upgrade to Premium
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;