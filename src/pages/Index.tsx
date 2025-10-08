import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Designs from "@/components/Designs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Designs />
      <Footer />
    </div>
  );
};

export default Index;
