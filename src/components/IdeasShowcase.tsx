import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Star, 
  Crown, 
  Users, 
  Heart,
  MessageSquare,
  TrendingUp,
  Lightbulb
} from "lucide-react";

const IdeasShowcase = () => {
  const communityIdeas = [
    {
      id: 1,
      title: "Sustainable Urban Farming Pods",
      description: "Modular vertical farming systems that can be installed in any urban space, powered by renewable energy.",
      author: "Sarah Chen",
      avatar: "SC",
      rating: 4.8,
      likes: 234,
      comments: 45,
      category: "Environment"
    },
    {
      id: 2,
      title: "AI-Powered Learning Companion",
      description: "Personalized AI tutor that adapts to individual learning styles and provides real-time feedback.",
      author: "Marcus Johnson",
      avatar: "MJ",
      rating: 4.6,
      likes: 189,
      comments: 32,
      category: "Education"
    },
    {
      id: 3,
      title: "Blockchain-Based Voting System",
      description: "Secure, transparent, and tamper-proof digital voting platform using blockchain technology.",
      author: "Aisha Patel",
      avatar: "AP",
      rating: 4.9,
      likes: 567,
      comments: 78,
      category: "Technology"
    }
  ];

  const premiumIdeas = [
    {
      id: 1,
      title: "Theory of Disruptive Innovation",
      description: "Clayton Christensen's revolutionary framework for understanding how innovations reshape markets.",
      author: "Clayton Christensen",
      avatar: "CC",
      rating: 5.0,
      premium: true,
      field: "Business Strategy",
      year: "1997"
    },
    {
      id: 2,
      title: "Design Thinking Methodology",
      description: "Human-centered approach to innovation that integrates people, technology, and business needs.",
      author: "Tim Brown",
      avatar: "TB",
      rating: 4.9,
      premium: true,
      field: "Design & Innovation",
      year: "2008"
    }
  ];

  return (
    <section id="community" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Community Ideas */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              💡 Community Ideas
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Trending Innovations</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the most popular and highest-rated ideas from our creative community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {communityIdeas.map((idea) => (
              <Card key={idea.id} className="group hover:shadow-card transition-all duration-300 cursor-pointer">
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{idea.category}</Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{idea.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {idea.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {idea.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-6 h-6">
                        <AvatarFallback className="text-xs bg-primary text-primary-foreground">
                          {idea.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-muted-foreground">{idea.author}</span>
                    </div>
                    
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {idea.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="w-4 h-4" />
                        {idea.comments}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Premium Ideas */}
        <div id="premium">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-premium text-premium">
              👑 Great Minds Collection
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              Ideas from <span className="bg-gradient-premium bg-clip-text text-transparent">Visionaries</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Exclusive access to groundbreaking concepts from history's most influential thinkers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {premiumIdeas.map((idea) => (
              <Card key={idea.id} className="relative overflow-hidden group hover:shadow-premium transition-all duration-300 border-premium/20">
                <div className="absolute inset-0 bg-gradient-premium opacity-5"></div>
                <CardHeader className="relative space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Crown className="w-5 h-5 text-premium" />
                      <Badge variant="outline" className="border-premium text-premium">
                        {idea.field}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{idea.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-premium transition-colors">
                    {idea.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {idea.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="text-sm bg-premium text-premium-foreground">
                          {idea.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-sm font-medium">{idea.author}</div>
                        <div className="text-xs text-muted-foreground">{idea.year}</div>
                      </div>
                    </div>
                    
                    <Button variant="premium" size="sm">
                      Unlock Idea
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Ideas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IdeasShowcase;