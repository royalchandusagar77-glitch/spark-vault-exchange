import { Button } from "@/components/ui/button";
import { Lightbulb, Twitter, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Platform: [
      { name: "Community Ideas", href: "#community" },
      { name: "Premium Collection", href: "#premium" },
      { name: "How it Works", href: "#features" },
      { name: "Pricing", href: "#pricing" }
    ],
    Resources: [
      { name: "Documentation", href: "#" },
      { name: "API Reference", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "Blog", href: "#" }
    ],
    Company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press Kit", href: "#" },
      { name: "Contact", href: "#" }
    ]
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-gradient-hero">
                <Lightbulb className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold">IdeasHub</h3>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Where brilliant minds connect, share, and discover the ideas that shape our future.
            </p>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="font-semibold text-background">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-background/70 hover:text-background transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/70 text-sm">
            © 2024 IdeasHub. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-background/70 hover:text-background transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/70 hover:text-background transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-background/70 hover:text-background transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;