import { Vote, Building2, Cloud, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      icon: Vote,
      title: "Blockchain-based E-Voting System",
      subtitle: "Final Year Project",
      description:
        "Built a blockchain-based e-voting system using Solidity and React Native for secure, transparent, and decentralized elections. Features included voter authentication, candidate selection, and real-time vote confirmation.",
      technologies: ["Solidity", "React Native", "Blockchain", "Web3", "Smart Contracts"],
    },
    {
      icon: Building2,
      title: "Hostel Management System",
      subtitle: "Java Desktop Application",
      description:
        "Desktop application for hostel administration with CRUD operations, authentication, and reporting tools for better management of students, rooms, and facilities.",
      technologies: ["Java", "MySQL", "Swing", "JDBC", "MVC Architecture"],
    },
    {
      icon: Cloud,
      title: "Cloud-Based File Storage & Sharing System",
      subtitle: "Full-Stack Web Application",
      description:
        "Developed a cloud-based storage and sharing system with encryption, real-time sync, and secure access management for seamless file collaboration.",
      technologies: ["React", "Node.js", "AWS S3", "MongoDB", "Socket.io", "AES Encryption"],
    },
    {
      icon: MessageSquare,
      title: "Daily Quote Notification App",
      subtitle: "Android Application",
      description:
        "Android app fetching motivational quotes via API, featuring custom notifications, personal quote saving, and beautiful Material Design UI.",
      technologies: ["Jetpack Compose", "Kotlin", "REST API", "Room Database", "Notifications"],
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Development{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group border-border/50 hover:border-primary/50 hover:shadow-card transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <project.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-primary mb-3">{project.subtitle}</p>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-muted text-foreground text-xs rounded-full border border-border hover:bg-primary hover:text-white hover:border-primary hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
