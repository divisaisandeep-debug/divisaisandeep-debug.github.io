import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Menu, X, Github, Linkedin, Mail, Download, 
  Code2, Database, Palette, Zap, Award, BookOpen,
  ArrowRight, ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { toast } = useToast();

  const skills = [
    { name: "HTML & CSS", level: 90, category: "Frontend" },
    { name: "JavaScript", level: 75, category: "Frontend" },
    { name: "Python", level: 70, category: "Backend" },
    { name: "C & C++", level: 65, category: "Programming" },
    { name: "React", level: 70, category: "Frontend" },
    { name: "PHP & XML", level: 60, category: "Backend" },
  ];

  const experience = [
    {
      role: "Web Developer",
      period: "Sep 2024 - Sep 2025",
      achievements: [
        "Coded websites using HTML, CSS, JavaScript languages",
        "Provided front-end development support with visually appealing designs",
        "Enhanced user experience through responsive web design",
        "Optimized website performance across multiple browsers"
      ]
    }
  ];

  const education = {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Indian Institute of Information Technology Manipur",
    location: "Imphal, India",
    graduation: "2028"
  };

  const certifications = [
    { name: "Git & GitHub Bootcamp", issuer: "Lets Upgrade", duration: "2 Days", date: "Sept 2025" },
    { name: "HTML & CSS Bootcamp", issuer: "LetsUpgrade", duration: "3 Days", date: "Sept 2025" },
    { name: "JavaScript Bootcamp", issuer: "LetsUpgrade", duration: "3 Days", date: "Sept 2025" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    e.currentTarget.reset();
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "skills", "education", "certifications", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-display font-bold tracking-tight"
          >
            DSS
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {["Home", "About", "Experience", "Skills", "Education", "Certifications", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium transition-colors hover:text-editorial-orange ${
                  activeSection === item.toLowerCase() ? "text-editorial-orange" : "text-foreground"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-background border-t border-border"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {["Home", "About", "Experience", "Skills", "Education", "Certifications", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left text-sm font-medium hover:text-editorial-orange transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-editorial-cream rounded-full text-sm font-medium mb-6">
                Available for opportunities
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-none mb-6 text-balance">
                Divi Sai
                <br />
                <span className="text-editorial-orange">Sandeep</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-xl">
                Web Developer & Computer Science Student crafting beautiful digital experiences
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="bg-editorial-orange hover:bg-editorial-orange/90 text-white rounded-none"
                >
                  Let's Connect
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-none"
                  asChild
                >
                  <a href="/DIVI-SAISANDEEP-Resume.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Resume
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-editorial-cream p-12 border-4 border-editorial-charcoal">
                <div className="space-y-6">
                  <div className="border-l-4 border-editorial-orange pl-6">
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Institution</h3>
                    <p className="text-lg font-semibold">IIIT Manipur</p>
                  </div>
                  <div className="border-l-4 border-editorial-orange pl-6">
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Degree</h3>
                    <p className="text-lg font-semibold">B.Tech CSE</p>
                  </div>
                  <div className="border-l-4 border-editorial-orange pl-6">
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Contact</h3>
                    <p className="text-sm">divisaisandeep@gmail.com</p>
                    <p className="text-sm">+91 9398873055</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-editorial-orange -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-editorial-cream">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4">
                <h2 className="text-5xl md:text-6xl font-display font-bold mb-4">
                  About
                </h2>
                <div className="w-20 h-1 bg-editorial-orange mb-6"></div>
              </div>
              <div className="lg:col-span-8 space-y-6">
                <p className="text-lg leading-relaxed">
                  I'm a <span className="font-semibold">Computer Science student</span> at the Indian Institute of Information Technology Manipur, 
                  with a strong foundation in web technologies and programming languages. My journey in tech is driven by 
                  curiosity and a passion for creating clean, functional digital solutions.
                </p>
                <p className="text-lg leading-relaxed">
                  With expertise in <span className="font-semibold">HTML, CSS, JavaScript, Python, C, and C++</span>, I focus on 
                  building responsive web applications that prioritize user experience. I'm a quick learner who thrives on 
                  challenges and is always eager to expand my technical skillset.
                </p>
                <p className="text-lg leading-relaxed">
                  Beyond coding, I'm passionate about reading and gaming—hobbies that help me stay creative, maintain focus, 
                  and balance my learning journey with recreation. I bring strong organizational skills, attention to detail, 
                  and a hardworking attitude to every project I undertake.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-12">
              Experience
            </h2>
            
            {experience.map((exp, index) => (
              <Card key={index} className="editorial-card rounded-none border-2 border-editorial-charcoal mb-8">
                <CardHeader className="bg-editorial-charcoal text-white">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <CardTitle className="text-2xl font-display">{exp.role}</CardTitle>
                    <span className="text-sm bg-editorial-orange px-4 py-1 rounded-full w-fit">
                      {exp.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-editorial-orange rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-lg">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-editorial-cream">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-12">
              Technical Skills
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="space-y-3"
                >
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                    <span className="text-sm text-muted-foreground">{skill.category}</span>
                  </div>
                  <div className="relative h-3 bg-white border border-editorial-charcoal">
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-editorial-orange"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-12">
              Education
            </h2>
            
            <Card className="editorial-card rounded-none border-4 border-editorial-charcoal overflow-hidden">
              <div className="bg-editorial-orange p-8 text-white">
                <h3 className="text-3xl font-display font-bold mb-2">{education.degree}</h3>
                <p className="text-lg opacity-90">Graduating {education.graduation}</p>
              </div>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <BookOpen className="w-6 h-6 text-editorial-orange flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-lg">{education.institution}</p>
                      <p className="text-muted-foreground">{education.location}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 px-6 bg-editorial-cream">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-12">
              Certifications
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="editorial-card rounded-none border-2 border-editorial-charcoal h-full">
                    <CardHeader className="bg-white">
                      <Award className="w-8 h-8 text-editorial-orange mb-3" />
                      <CardTitle className="text-xl font-display leading-tight">{cert.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-sm font-semibold mb-1">{cert.issuer}</p>
                      <p className="text-sm text-muted-foreground">{cert.duration} • {cert.date}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-display font-bold mb-4">
                Let's Connect
              </h2>
              <p className="text-xl text-muted-foreground">
                Have a project in mind? Let's talk about it.
              </p>
            </div>

            <Card className="editorial-card rounded-none border-4 border-editorial-charcoal">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      className="rounded-none border-2 border-editorial-charcoal focus:border-editorial-orange"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      className="rounded-none border-2 border-editorial-charcoal focus:border-editorial-orange"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="rounded-none border-2 border-editorial-charcoal focus:border-editorial-orange"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-editorial-orange hover:bg-editorial-orange/90 text-white rounded-none"
                  >
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground mb-4">Or reach out directly</p>
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="mailto:divisaisandeep@gmail.com"
                  className="flex items-center gap-2 text-editorial-orange hover:underline"
                >
                  <Mail size={20} />
                  divisaisandeep@gmail.com
                </a>
                <a
                  href="tel:+919398873055"
                  className="flex items-center gap-2 text-editorial-orange hover:underline"
                >
                  +91 9398873055
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t-4 border-editorial-charcoal bg-editorial-charcoal text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-display font-bold mb-2">Divi Sai Sandeep</h3>
              <p className="text-white/70">Web Developer & CS Student</p>
            </div>
            <div className="flex gap-6 md:justify-end">
              <a
                href="https://www.linkedin.com/in/divi-sai-sandeep"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-editorial-orange transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/divisaisandeep"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-editorial-orange transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="mailto:divisaisandeep@gmail.com"
                className="hover:text-editorial-orange transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/70 text-sm">
            <p>© {new Date().getFullYear()} Divi Sai Sandeep. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
