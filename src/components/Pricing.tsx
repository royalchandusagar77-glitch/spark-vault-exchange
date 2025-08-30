import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Crown, Users, Zap } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Community",
      price: "Free",
      description: "Perfect for getting started with idea sharing",
      icon: Users,
      features: [
        "Share unlimited ideas",
        "Rate and comment on ideas",
        "Access community discussions",
        "Basic search and filters",
        "Mobile app access"
      ],
      variant: "outline" as const,
      popular: false
    },
    {
      name: "Premium",
      price: "$19",
      period: "/month",
      description: "Unlock the wisdom of great minds",
      icon: Crown,
      features: [
        "Everything in Community",
        "Access to Great Minds collection",
        "500+ verified premium ideas",
        "Advanced analytics and insights",
        "Priority customer support",
        "Export and save ideas",
        "Early access to new features"
      ],
      variant: "premium" as const,
      popular: true
    },
    {
      name: "Pro",
      price: "$49",
      period: "/month",
      description: "For serious innovators and teams",
      icon: Zap,
      features: [
        "Everything in Premium",
        "Team collaboration tools",
        "Custom idea categories",
        "API access for integrations",
        "White-label solutions",
        "Dedicated account manager",
        "Custom reporting"
      ],
      variant: "default" as const,
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            💳 Simple Pricing
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Choose Your Innovation Journey</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start free with our community features, or unlock premium content from history's greatest minds.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 ${
                plan.popular 
                  ? 'border-premium shadow-premium scale-105' 
                  : 'hover:shadow-card'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-premium text-premium-foreground text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-6'}`}>
                <div className={`w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-4 ${
                  plan.name === 'Premium' ? 'bg-gradient-premium' : 
                  plan.name === 'Pro' ? 'bg-primary' : 'bg-secondary'
                }`}>
                  <plan.icon className={`w-8 h-8 ${
                    plan.name === 'Premium' ? 'text-premium-foreground' : 
                    plan.name === 'Pro' ? 'text-primary-foreground' : 'text-secondary-foreground'
                  }`} />
                </div>
                
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="text-3xl font-bold">
                  {plan.price}
                  {plan.period && <span className="text-lg text-muted-foreground">{plan.period}</span>}
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.variant} 
                  size="lg" 
                  className="w-full"
                >
                  {plan.name === 'Community' ? 'Get Started Free' : 
                   plan.name === 'Premium' ? 'Upgrade to Premium' : 'Contact Sales'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All plans include a 30-day money-back guarantee
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <span>✓ Cancel anytime</span>
            <span>✓ Secure payments</span>
            <span>✓ 24/7 support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;