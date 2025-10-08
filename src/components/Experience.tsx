import { Briefcase, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      icon: Briefcase,
      title: "Freelance Developer & Designer",
      company: "Fiverr",
      period: "Ongoing",
      description:
        "Worked on various international projects including responsive web apps (HTML, CSS, JS, React, Node.js), Android apps (Jetpack Compose), and modern UI/UX designs (Figma). Delivered creative, client-focused digital solutions.",
      skills: ["React", "Node.js", "Jetpack Compose", "Figma", "UI/UX Design"],
    },
    {
      icon: Rocket,
      title: "CEO & Founder",
      company: "Sweet Hives (PITB NICs Startup)",
      period: "2023 - 2024",
      description:
        "Founded a startup under PITB NICs producing organic honey. Built and managed the website for online sales, focusing on branding, digital presence, and customer engagement.",
      skills: ["Web Development", "E-Commerce", "Digital Marketing", "Brand Management"],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Work{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="border-border/50 hover:border-primary/50 hover:shadow-card transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                    <exp.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-lg text-primary mb-2">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
