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
  ExternalLink,
  GraduationCap,
  Users,
  Target,
  Zap,
  Globe,
  Settings
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

  const leadership = [
    {
      role: "Vice President of Branding",
      company: "Student Energy at Padjadjaran University",
      period: "Jun 2023 – Dec 2023",
      description: "Directed cross-functional teams in Renewable Energy advocacy and youth awareness. Built partnerships with 3 renewable energy and youth-led stakeholders. Boosted engagement by 30% to promote sustainable energy awareness."
    },
    {
      role: "Project Officer of The Biological Exhibition",
      company: "Padjadjaran University",
      period: "Sep 2022 – Dec 2022",
      description: "Led a 50+ member team to execute a large-scale biodiversity & environmental education exhibition for 300+ participants focusing on biological conservation and ecological impact."
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

  const skillCategories = [
    {
      title: "Sustainability & ESG",
      icon: <Target className="w-6 h-6 text-primary" />,
      skills: ["GRI 2021 Standards", "SASB Standards", "SEOJK 16", "Materiality Assessment", "Carbon Accounting (GHG)", "Sustainability Report Development"]
    },
    {
      title: "Environmental Science",
      icon: <Globe className="w-6 h-6 text-primary" />,
      skills: ["Bioremediation", "Renewable Energy Awareness", "Biodiversity Awareness", "Ecosystem Impact Analysis"]
    },
    {
      title: "Project & Data Management",
      icon: <Zap className="w-6 h-6 text-primary" />,
      skills: ["Project Coordination", "Timeline Planning", "Event Logistics", "Stakeholder Communication", "Performance Tracking", "Data-driven Reporting"]
    },
    {
      title: "Tools & Platforms",
      icon: <Settings className="w-6 h-6 text-primary" />,
      skills: ["Trello", "Notion", "Figma", "Google Workspace", "Microsoft Office Suite", "Collaborative Tools"]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <span className="font-serif text-xl font-bold tracking-tight text-primary">NA.</span>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#experience" className="hover:text-primary transition-colors">Journey</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#skills" className="hover:text-primary transition-colors">Expertise</a>
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
            <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed">
              I am <strong className="text-foreground font-semibold">Novia Amanda Dwiputri</strong>, an adaptable professional blending scientific literacy with large-scale project management to create meaningful environmental and social impact.
            </p>
            
            {/* Education Highlight */}
            <div className="flex items-start gap-3 mb-8 p-4 bg-secondary/20 rounded-2xl border border-primary/10 max-w-lg">
              <GraduationCap className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <p className="text-sm font-bold text-foreground">Bachelor of Science in Biology</p>
                <p className="text-xs text-muted-foreground">Padjadjaran University • GPA 3.79/4.00</p>
              </div>
            </div>

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

      {/* Professional Journey (Centered Timeline) */}
      <section id="experience" className="py-24 bg-secondary/30 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-serif font-bold mb-4">Professional Journey</h2>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* Central Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-primary/20 hidden md:block" />

            <div className="space-y-16">
              {experiences.map((exp, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-20 hidden md:block" />
                  
                  <div className="w-full md:w-1/2">
                    <Card className="bg-card p-8 rounded-[2rem] shadow-sm border border-border/50 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="outline" className="border-primary/20 text-primary bg-primary/5">
                          {exp.period}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                      <h4 className="text-lg font-serif italic text-primary mb-4">{exp.company}</h4>
                      <p className="text-muted-foreground leading-relaxed text-sm">{exp.description}</p>
                    </Card>
                  </div>
                  <div className="md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Community Experience */}
      <section className="py-24 container mx-auto px-6">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-serif font-bold">Leadership & Impact</h2>
          </div>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {leadership.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="p-8 rounded-[2rem] border-none shadow-lg bg-primary/5 h-full hover:bg-primary/10 transition-colors">
                <div className="flex justify-between items-start mb-6">
                  <Badge className="bg-primary/10 text-primary border-none">{item.period}</Badge>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.role}</h3>
                <p className="text-primary font-serif italic mb-4">{item.company}</p>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-secondary/10">
        <div className="container mx-auto px-6">
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
                <Card className="group overflow-hidden rounded-[2.5rem] border-none shadow-lg bg-card hover:shadow-2xl transition-all duration-500 h-full flex flex-col cursor-pointer">
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500" />
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-6 left-6 z-20">
                      <Badge className="bg-background/90 text-foreground backdrop-blur-sm hover:bg-background border-none flex items-center gap-1.5 px-4 py-1.5 rounded-full shadow-sm">
                        {project.icon}
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-10 flex flex-col flex-grow">
                    <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed flex-grow text-sm">
                      {project.description}
                    </p>
                    <div className="mt-8 flex items-center text-primary font-bold text-sm tracking-wider uppercase">
                      View details <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categorized Skills Section */}
      <section id="skills" className="py-24 container mx-auto px-6">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl font-serif font-bold mb-6">Competencies & Expertise</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card p-8 rounded-[2rem] border border-border/50 hover:border-primary/30 transition-colors shadow-sm"
            >
              <div className="mb-6 p-3 bg-primary/5 rounded-2xl w-fit">
                {cat.icon}
              </div>
              <h3 className="text-lg font-bold mb-6 min-h-[3rem]">{cat.title}</h3>
              <ul className="space-y-3">
                {cat.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="text-sm text-muted-foreground flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-primary rounded-[4rem] p-10 md:p-20 text-center shadow-2xl relative overflow-hidden text-primary-foreground">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] opacity-20" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-background/10 rounded-full blur-[100px] opacity-20" />
          
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative z-10"
          >
            <Leaf className="w-16 h-16 text-primary-foreground/40 mx-auto mb-8 animate-bounce-slow" />
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Let's build a sustainable future.</h2>
            <p className="text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Open to opportunities in sustainability, ESG reporting, and impactful project management.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button size="lg" className="rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 h-16 px-10 text-lg font-bold" asChild>
                <a href="mailto:noviamnda09@gmail.com">
                  <Mail className="mr-3 w-6 h-6" /> Email Me
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-primary-foreground/30 hover:bg-primary-foreground/10 h-16 px-10 text-lg font-bold" asChild>
                <a href="https://www.linkedin.com/in/novia-amanda/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-3 w-6 h-6" /> LinkedIn
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-muted-foreground border-t border-border/20">
        <p className="text-sm tracking-widest uppercase font-bold text-primary/40">NA • 2026</p>
      </footer>
    </div>
  );
}
