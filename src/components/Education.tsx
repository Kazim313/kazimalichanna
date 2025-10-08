import { GraduationCap, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  const certificates = [
    { title: "Java Programming", date: "12/05/2023" },
    { title: "Cybersecurity Fundamentals", date: "20/03/2024" },
    { title: "Introduction to MongoDB", date: "17/04/2025" },
  ];

  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Education &{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Degree */}
          <Card className="border-border/50 hover:border-primary/50 hover:shadow-card transition-all duration-500 animate-fade-in-up">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">BS Software Engineering</h3>
                  <p className="text-lg text-primary mb-3">Sukkur IBA University (2021–2025)</p>
                  <p className="text-muted-foreground mb-4">
                    <strong>Core Subjects:</strong> Java, C, C++, OOP, Data Structures, Computer Networks,
                    Cybersecurity, Cloud Computing, Web Development, Database Systems (MySQL, MongoDB, SQLite)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certificates */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Professional Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {certificates.map((cert, index) => (
                <Card
                  key={index}
                  className="border-border/50 hover:border-primary/50 hover:shadow-card transition-all duration-500 hover:-translate-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground">{cert.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
