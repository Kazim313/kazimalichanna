import { Mail, Phone, Github, Linkedin, Figma, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer id="contact" className="py-16 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Contact Section */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Get In{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-muted-foreground mb-8">
              Feel free to reach out for collaborations, opportunities, or just a friendly chat!
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="flex items-center justify-center gap-3 p-4 bg-muted/50 rounded-lg hover:bg-primary/10 transition-all duration-300 animate-fade-in-up">
              <Mail className="h-5 w-5 text-primary" />
              <a
                href="mailto:kazimalichanna@gmail.com"
                className="text-foreground hover:text-primary transition-colors"
              >
                kazimalichanna@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-muted/50 rounded-lg hover:bg-primary/10 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <Phone className="h-5 w-5 text-primary" />
              <a href="tel:+923003635230" className="text-foreground hover:text-primary transition-colors">
                (+92) 300 3635230
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-12">
            <Button
              variant="outline"
              size="icon"
              className="hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:scale-110 animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
              onClick={() => window.open("https://github.com", "_blank")}
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:scale-110 animate-fade-in-up"
              style={{ animationDelay: "250ms" }}
              onClick={() => window.open("https://linkedin.com", "_blank")}
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:scale-110 animate-fade-in-up"
              style={{ animationDelay: "300ms" }}
              onClick={() => window.open("https://figma.com", "_blank")}
            >
              <Figma className="h-5 w-5" />
            </Button>
          </div>

          {/* Footer Bottom */}
          {/* <div className="text-center pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              Made with <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" /> by Kazim Ali © 2025
            </p>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
