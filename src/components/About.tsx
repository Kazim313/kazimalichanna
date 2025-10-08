import { Code2, Palette, Shield, Cloud } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Software Development",
      description: "Expert in Java, React, Node.js, and full-stack development",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful, user-centered interfaces with Figma",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Focused on building secure, resilient applications",
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      description: "AWS, Google Cloud, Docker, and scalable architectures",
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-16 animate-fade-in-up">
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            I am a BS Software Engineering graduate from Sukkur IBA University with a strong focus on Java development,
            cybersecurity, cloud computing, and UI/UX design. Passionate about solving real-world problems, I have
            experience in building secure, scalable, and user-centered applications. I enjoy turning ideas into
            functional digital products with a focus on both performance and aesthetics. Always eager to explore
            emerging technologies, collaborate in innovative teams, and contribute meaningfully to impactful projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="group hover:shadow-card transition-all duration-500 hover:-translate-y-2 border-border/50 hover:border-primary/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
