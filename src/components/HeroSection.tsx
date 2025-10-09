import { useEffect, useState } from "react";
import { Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.png";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Software Engineer & UI/UX Designer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: "var(--gradient-hero)",
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Kazim Ali
              </span>
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground mb-8 h-12 flex items-center justify-center md:justify-start">
              <span className="font-medium border-r-2 border-primary pr-2 animate-blink">
                {displayText}
              </span>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              BS Software Engineering graduate passionate about building secure, scalable, and
              user-centered applications. Turning ideas into functional digital products with focus
              on performance and aesthetics.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary text-white hover:shadow-glow hover:scale-105 transition-all duration-300"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/KazimAli_CV.pdf";
                  link.download = "KazimAli_CV.pdf";
                  link.click();
                }}
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                onClick={scrollToAbout}
              >
                Learn More
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 animate-scale-in md:mr-8">
            <div className="relative w-56 h-56 md:w-72 md:h-72">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img
                src={profileImage}
                alt="Kazim Ali"
                className="relative rounded-full w-full h-full object-cover border-4 border-primary/20 shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
