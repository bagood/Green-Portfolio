import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Mail, 
  Linkedin, 
  Leaf, 
  BarChart3, 
  ShieldCheck, 
  FileText, 
  Droplets,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Import generated images
import heroBg from "@/assets/images/hero-bg.jpg";
import projectCarbon from "@/assets/images/project-carbon.jpg";
import projectOcean from "@/assets/images/project-ocean.jpg";
import projectReport from "@/assets/images/project-report.jpg";

export default function Home() {
  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const experiences = [
    {
      role: "B2B Project Officer",
      company: "Binar Academy (Contract)",
      period: "Sept 2024 – Nov 2024",
      description: "Managed logistics, schedules, and documentation for employee innovation bootcamp, facilitating internal social development and cross-functional engagement for 18 participants. Maintained 20+ program deliverables, achieving a 4.6/5 participant satisfaction score."
    },
    {
      role: "Employee Innovation Project Officer",
      company: "Bank Syariah Indonesia (Contract)",
      period: "Dec 2023 – Mar 2024",
      description: "Directed a company-wide innovation program for 17,000+ participants. Produced data-driven reports that increased program satisfaction by 15%, optimizing vendor management and logistics to ensure professional delivery for executive-level demo days."
    },
    {
      role: "B2B Project Officer",
      company: "Binar Academy (Intern)",
      period: "Aug 2023 – Dec 2023",
      description: "Executed 7 student-centric training programs, reducing operational costs by 10% and aligning participant needs with organizational social impact goals. Improved participant outcomes by 20% ensuring 100% engagement."
    }
  ];

  const projects = [
    {
      title: "Carbon Accounting & GHG Inventory",
      category: "Environmental Data",
      description: "Conducted Greenhouse Gas (GHG) emission inventories and simplified calculations for corporate operations.",
      image: projectCarbon,
      icon: <BarChart3 className="w-5 h-5" />
    },
    {
      title: "Sustainability Reporting Benchmarking",
      category: "ESG Frameworks",
      description: "Benchmarked disclosure quality against GRI 2021 and SASB standards to determine strategic reporting relationships with ESG ratings.",
      image: projectReport,
      icon: <FileText className="w-5 h-5" />
    },
    {
      title: "Oil Spill Policy Documentation",
      category: "Environmental Impact",
      description: "Conducted a policy review of the PT PHE ONWJ oil spill incident for academic and stakeholder reference.",
      image: projectOcean,
      icon: <Droplets className="w-5 h-5" />
    },
    {
      title: "Greenwashing Risk Analysis",
      category: "Compliance",
      description: "Analyzed corporate disclosures against GRI 2021 standards to identify greenwashing risks and verify sustainability alignments.",
      image: heroBg,
      icon: <ShieldCheck className="w-5 h-5" />
    }
  ];

  const skills = [
    "GRI 2021 Standards", "SASB Standards", "SEOJK 16", "Materiality Assessment", 
    "Carbon Accounting (GHG)", "Sustainability Reporting", "Bioremediation", 
    "Renewable Energy", "Biodiversity", "Project Coordination", "Data-driven Reporting"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <span className="font-serif text-xl font-bold tracking-tight text-primary">NA.</span>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <Button variant="default" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 md:pt-48 md:pb-32 container mx-auto px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/3" />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="max-w-2xl"
          >
            <Badge variant="secondary" className="mb-6 bg-secondary/50 text-primary hover:bg-secondary/50 border-none px-4 py-1 text-sm font-medium rounded-full">
              <Leaf className="w-4 h-4 mr-2 inline" />
              Sustainability & ESG Professional
            </Badge>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-[1.1] mb-6">
              Driving <span className="text-primary italic">Corporate</span> Sustainability.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              I am <strong className="text-foreground font-semibold">Novia Amanda Dwiputri</strong>, an adaptable professional blending scientific literacy with large-scale project management to create meaningful environmental and social impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <a href="#projects">
                  View Projects <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-primary/20 hover:bg-primary/5" asChild>
                <a href="https://www.linkedin.com/in/novia-amanda/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 w-4 h-4" /> LinkedIn
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <img 
              src={heroBg} 
              alt="Sustainability Abstract" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent mix-blend-multiply" />
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="mb-16"
          >
            <h2 className="text-4xl font-serif font-bold mb-4">Professional Journey</h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
          </motion.div>

          <div className="max-w-3xl border-l-2 border-primary/20 pl-8 space-y-12 relative">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-2 w-5 h-5 rounded-full bg-background border-4 border-primary" />
                <div className="bg-card p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                    <Badge variant="outline" className="w-fit border-primary/20 text-primary bg-primary/5">
                      {exp.period}
                    </Badge>
                  </div>
                  <h4 className="text-lg font-serif italic text-muted-foreground mb-4">{exp.company}</h4>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 container mx-auto px-6">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl font-serif font-bold mb-4">Selected Projects</h2>
            <div className="w-20 h-1 bg-primary rounded-full mb-4"></div>
            <p className="text-muted-foreground max-w-xl">
              Practical applications of ESG frameworks, carbon accounting, and environmental policy research.
            </p>
          </div>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div key={idx} variants={fadeIn}>
              <Card className="group overflow-hidden rounded-2xl border-none shadow-lg bg-card hover:shadow-xl transition-all duration-300 h-full flex flex-col cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <Badge className="bg-background/90 text-foreground backdrop-blur-sm hover:bg-background border-none flex items-center gap-1.5 px-3 py-1">
                      {project.icon}
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  <div className="mt-6 flex items-center text-primary font-medium text-sm">
                    View Details <ExternalLink className="w-4 h-4 ml-2" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-serif font-bold mb-6">Competencies & Expertise</h2>
            <p className="text-primary-foreground/80 text-lg">
              Equipped with a diverse skill set spanning environmental science, corporate sustainability frameworks, and data-driven project management.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
          >
            {skills.map((skill, idx) => (
              <motion.div key={idx} variants={fadeIn}>
                <div className="px-6 py-3 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm text-primary-foreground font-medium hover:bg-primary-foreground hover:text-primary transition-colors cursor-default">
                  {skill}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-card rounded-[3rem] p-10 md:p-20 text-center shadow-2xl border border-border/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative z-10"
          >
            <Leaf className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Let's Connect</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Open to opportunities in sustainability, ESG reporting, and impactful project management. Let's work together to drive positive change.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg" asChild>
                <a href="mailto:noviamnda09@gmail.com">
                  <Mail className="mr-2 w-5 h-5" /> noviamnda09@gmail.com
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-primary/20 hover:bg-primary/5 h-14 px-8 text-lg bg-background" asChild>
                <a href="https://www.linkedin.com/in/novia-amanda/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 w-5 h-5 text-[#0A66C2]" /> LinkedIn Profile
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 text-center text-muted-foreground">
        <p>© 2026 Novia Amanda Dwiputri. Sustainability Portfolio.</p>
      </footer>
    </div>
  );
}
