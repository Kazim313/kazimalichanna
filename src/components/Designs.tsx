import { ExternalLink, Vote, Briefcase, School } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Designs = () => {
  const designs = [
    {
      icon: Vote,
      title: "E-Voting System UI",
      client: "SISC IBA",
      description:
        "Designed a user-friendly e-voting interface with clean navigation, modern components, and mobile-first layouts for secure digital voting.",
      link: "https://www.figma.com/design/vBRg60eisfEQd8QJw9Q15G/Voting-SISC-SIBA--Copy-?t=p4dD8IeIHKwyTuS8-0",
      tags: ["Figma", "UI/UX", "Mobile Design", "Voting System"],
    },
    {
      icon: Briefcase,
      title: "Job Portal UI",
      client: "Community Template",
      description:
        "Built a modern job portal layout with sections for job listings, applications, employer dashboards, and candidate profiles.",
      link: "https://www.figma.com/design/Ocdzqz19K8ShHqh1Hae6Bz/Job-Portal-Figma-Template--Community-?t=p4dD8IeIHKwyTuS8-0",
      tags: ["Figma", "Web Design", "Job Board", "Dashboard"],
    },
    {
      icon: School,
      title: "School Management System UI",
      client: "Community Template",
      description:
        "Designed an academic management system dashboard for managing students, teachers, attendance, grades, and administrative reports.",
      link: "https://www.figma.com/design/ji21J5fIIw3AKMeFiQJWwV/School-Management-System--Community-?t=p4dD8IeIHKwyTuS8-0",
      tags: ["Figma", "Dashboard", "Education", "Admin Panel"],
    },
  ];

  return (
    <section id="designs" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            UI/UX Design{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {designs.map((design, index) => (
            <Card
              key={index}
              className="group border-border/50 hover:border-primary/50 hover:shadow-card transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <design.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {design.title}
                </h3>
                <p className="text-sm text-primary mb-3">{design.client}</p>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{design.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {design.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-muted text-foreground text-xs rounded-full border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  onClick={() => window.open(design.link, "_blank")}
                >
                  View on Figma
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Designs;
