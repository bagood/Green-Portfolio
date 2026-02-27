import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Settings,
  ChevronRight,
  Download,
  Search,
  CheckCircle2,
  X
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
  const [activeSection, setActiveSection] = useState("about");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "intro", "skills", "projects", "science", "journey", "contact"];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skillCategories = [
    {
      title: "Sustainability & ESG",
      icon: <Target className="w-6 h-6" />,
      skills: ["GRI 2021 Standards", "SASB Standards", "SEOJK 16", "Materiality Assessment", "Carbon Accounting (GHG)", "Sustainability Report Development"]
    },
    {
      title: "Environmental Science",
      icon: <Globe className="w-6 h-6" />,
      skills: ["Bioremediation", "Renewable Energy Awareness", "Biodiversity Awareness", "Ecosystem Impact Analysis"]
    },
    {
      title: "Project & Data Management",
      icon: <Zap className="w-6 h-6" />,
      skills: ["Project Coordination", "Timeline Planning", "Event Logistics", "Stakeholder Communication", "Performance Tracking", "Data-driven Reporting"]
    },
    {
      title: "Tools & Platforms",
      icon: <Settings className="w-6 h-6" />,
      skills: ["Trello", "Notion", "Figma", "Google Workspace", "Microsoft Office Suite", "Collaborative Tools"]
    }
  ];

  const bootcampProjects = [
    {
      id: "carbon",
      title: "Carbon Accounting & GHG Inventory",
      category: "Sustainability Implementation",
      description: "Conducted Greenhouse Gas (GHG) emission inventories and simplified calculations for corporate operations.",
      image: projectCarbon,
      icon: <BarChart3 className="w-5 h-5" />,
      details: {
        problem: "Corporate operations often lack clear visibility into their indirect emission sources, leading to incomplete sustainability disclosures.",
        methodology: "GHG Protocol Corporate Standard, simplified emission factors for scope 1 and 2 emissions.",
        conclusion: "Identified that energy-intensive office cooling accounted for 65% of indirect emissions, suggesting targeted renewable energy procurement."
      }
    },
    {
      id: "greenwash",
      title: "Greenwashing Risk & Compliance",
      category: "Strategic Analysis",
      description: "Analyzed corporate disclosures against GRI 2021 standards to identify potential greenwashing risks.",
      image: heroBg,
      icon: <ShieldCheck className="w-5 h-5" />,
      details: {
        problem: "Vague environmental claims in annual reports often misalign with actual project implementation, creating legal and reputational risks.",
        methodology: "GRI 2021 Disclosure Gap Analysis, verification against external sustainability commitments.",
        conclusion: "Found discrepancies in 'Net Zero' timelines where carbon offsets were prioritized over absolute reduction strategies."
      }
    },
    {
      id: "materiality",
      title: "Strategic Program Alignment",
      category: "ESG Strategy",
      description: "Mapped corporate initiatives to relevant GRI materiality topics and evaluated strategic consistency.",
      image: projectReport,
      icon: <FileText className="w-5 h-5" />,
      details: {
        problem: "CSR programs often operate in silos, disconnected from the core business's most significant environmental and social impacts.",
        methodology: "Double Materiality Assessment, Stakeholder Engagement Matrix.",
        conclusion: "Proposed realigning the community fund toward water sanitation projects to match the company's high local water dependency."
      }
    },
    {
      id: "benchmarking",
      title: "Sustainability Reporting Benchmarking",
      category: "Disclosure Quality",
      description: "Benchmarked disclosure quality between sector leaders against GRI and SASB standards.",
      image: projectReport,
      icon: <Search className="w-5 h-5" />,
      details: {
        problem: "Companies often struggle to understand how their disclosures impact their ESG ratings relative to industry peers.",
        methodology: "GRI 2021 vs. SASB Comparison Framework.",
        conclusion: "Telkomsel showed higher quantitative transparency in data privacy compared to Indosat, leading to better social pillar scores."
      }
    },
    {
      id: "report-dev",
      title: "Sustainability Report Development",
      category: "Reporting Frameworks",
      description: "End-to-end data collection and report structure for a telecommunications sector report.",
      image: projectReport,
      icon: <CheckCircle2 className="w-5 h-5" />,
      details: {
        problem: "Merging SEOJK 16 (local) and GRI 2021 (global) requirements into a single, cohesive reporting structure.",
        methodology: "SEOJK 16 & GRI 2021 Integration Mapping.",
        conclusion: "Streamlined data collection by 20% by creating a unified template that satisfied both regulatory and international standards."
      }
    }
  ];

  const scienceProjects = [
    {
      title: "Oil Spill Policy Documentation",
      role: "Policy Review",
      description: "Conducted a policy review of the PT PHE ONWJ oil spill incident for academic and stakeholder reference.",
      image: projectOcean,
      badge: "Oil Spill Research"
    },
    {
      title: "SDGs Data Matrix",
      role: "Classified Database",
      description: "A classified database of 169 targets relevant to Renewable Energy and Bioremediation.",
      image: projectCarbon,
      badge: "Renewable Energy"
    },
    {
      title: "The Biological Exhibition",
      role: "Leadership",
      description: "Leadership of a 50+ member team for a biodiversity-focused educational event for 300+ participants.",
      image: heroBg,
      badge: "Conservation Education"
    }
  ];

  const combinedJourney = [
    {
      role: "B2B Project Officer",
      company: "Binar Academy (Professional Experience)",
      period: "Sept 2024 – Nov 2024",
      description: "Managed logistics and documentation for employee innovation bootcamp, achieving 4.6/5 participant satisfaction."
    },
    {
      role: "Employee Innovation Project Officer",
      company: "Bank Syariah Indonesia (Professional Experience)",
      period: "Dec 2023 – Mar 2024",
      description: "Directed company-wide innovation program for 17,000+ participants, increasing program satisfaction by 15%."
    },
    {
      role: "Vice President of Branding",
      company: "Student Energy at Padjadjaran University (Community Leadership)",
      period: "Jun 2023 – Dec 2023",
      description: "Directed Renewable Energy advocacy and youth awareness, building partnerships with 3 renewable energy stakeholders."
    },
    {
      role: "B2B Project Officer",
      company: "Binar Academy (Professional Experience)",
      period: "Aug 2023 – Dec 2023",
      description: "Executed 7 student-centric training programs, reducing operational costs by 10% and improving outcomes by 20%."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-tight text-primary">Novia Amanda</span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground -mt-1">Sustainability Enthusiast</span>
          </div>
          <div className="hidden lg:flex gap-10 text-[13px] font-bold uppercase tracking-wider">
            {[
              { id: "about", label: "Home" },
              { id: "intro", label: "About" },
              { id: "skills", label: "Expertise" },
              { id: "projects", label: "ESG Gallery" },
              { id: "science", label: "Science" },
              { id: "journey", label: "Journey" },
              { id: "contact", label: "Contact" }
            ].map(item => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                className={`transition-all relative group ${activeSection === item.id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
              >
                {item.label}
                <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-primary origin-left transition-transform duration-300 ${activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'}`} />
              </a>
            ))}
          </div>
          <Button variant="default" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 px-6 font-bold" asChild>
            <a href="/cv.pdf" download>
              <Download className="mr-2 w-4 h-4" /> Download CV
            </a>
          </Button>
        </div>
      </nav>
      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center pt-24 container mx-auto px-6 relative">
        <div className="absolute top-0 right-0 -z-10 w-[70vw] h-[70vw] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn}>
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-foreground leading-[1.05] mb-8">
              Innovating <br /><span className="text-primary italic">for a Greener</span> future.
            </h1>
            <p className="text-xl md:text-2xl font-medium text-primary leading-tight max-w-xl mb-10">
              Bridging Biological Science and Corporate Strategy through Data-Driven ESG Frameworks.
            </p>
            <div className="flex flex-wrap gap-6">
              <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-16 px-10 text-lg font-bold" asChild>
                <a href="#projects">Discover ESG Gallery</a>
              </Button>
              <div className="flex items-center gap-4 text-muted-foreground font-bold">
                <div className="w-12 h-px bg-border" />
                Scroll to explore
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-background"
          >
            <img src={heroBg} className="absolute inset-0 w-full h-full object-cover" alt="Hero" />
            <div className="absolute inset-0 bg-primary/30 mix-blend-multiply" />
            <div className="absolute bottom-10 left-10 right-10 p-8 bg-background/20 backdrop-blur-xl rounded-3xl border border-white/20">
              <p className="text-white font-serif italic text-2xl">"Data is the foundation of sustainability reporting, but science is the soul of our strategy."</p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Interactive Introduction Section */}
      <section id="intro" className="py-32 bg-secondary/50 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeIn} className="space-y-12">
              <div className="inline-flex items-center gap-4 text-primary mb-4 font-bold tracking-[0.2em] uppercase text-xs">
                <div className="w-8 h-px bg-primary" />
                Nice to meet you
              </div>
              <div className="space-y-8 text-3xl md:text-5xl font-serif leading-tight">
                <p>Hi! I'm <span className="text-primary underline decoration-2 underline-offset-8 italic">Novia Amanda</span>.</p>
                <p className="text-muted-foreground text-[40px]">Imagine a world where biological ecosystems and corporate strategies don't just coexist, but thrive together. That's where I come in.</p>
                <p className="text-[40px]">I hold a degree in <span className="text-primary font-bold">Biology</span>, giving me the scientific literacy to truly understand environmental impacts. But I'm also a <span className="text-primary font-bold">Project Manager</span> with a track record of handling innovation for 17,000+ people.</p>
                <p className="text-muted-foreground text-[40px]">Most recently, I've spent three intensive months deep-diving into <span className="text-foreground italic">Environmental Social Governance (ESG)</span>. Now, I'm on a mission: <span className="text-foreground">Bridging Biological Science and Corporate Strategy through Data-Driven ESG Frameworks.</span></p>
              </div>
              <div className="pt-12">
                <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground h-16 px-10 font-bold uppercase tracking-wider" asChild>
                  <a href="#skills">See my expertise</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Categorized Skills Section */}
      <section id="skills" className="py-32 container mx-auto px-6">
        <motion.div {...fadeIn} className="text-center mb-24">
          <h2 className="text-5xl font-serif font-bold mb-6 italic">The Toolkit.</h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">Categorized expertise bridging technical science and corporate management.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {skillCategories.map((cat, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-card p-10 rounded-[3rem] border border-border/50 hover:border-primary/40 transition-all shadow-sm hover:shadow-2xl"
            >
              <div className="mb-8 p-4 bg-primary text-primary-foreground rounded-2xl w-fit shadow-lg shadow-primary/20">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold mb-8 min-h-[3rem] leading-tight">{cat.title}</h3>
              <ul className="space-y-4">
                {cat.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="text-sm text-muted-foreground flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                    <span className="leading-relaxed">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Engagement Gallery (ESG Projects) */}
      <section id="projects" className="py-32 bg-primary/5">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="mb-24 text-center">
            <h2 className="text-6xl font-serif font-bold mb-6 italic text-primary">Strategic ESG Gallery.</h2>
            <div className="w-40 h-1 bg-primary mx-auto mb-8 rounded-full" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Deep-diving into Greenhouse Gas inventory, sustainability benchmarking, and risk compliance.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {bootcampProjects.map((project, idx) => (
              <motion.div 
                key={idx} 
                {...fadeIn} 
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedProject(project)}
                className="group bg-card rounded-[3.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer border border-border/30"
              >
                <div className="relative h-72 overflow-hidden">
                  <img src={project.image} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" alt={project.title} />
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-8 left-8">
                    <Badge className="bg-background/90 text-primary px-4 py-2 rounded-full font-bold shadow-xl backdrop-blur-md">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-10">
                  <div className="flex items-center gap-3 text-primary mb-4">
                    {project.icon}
                    <span className="text-xs font-black uppercase tracking-widest">ESG Milestone</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-6 group-hover:text-primary transition-colors">{project.title}</h3>
                  <Button variant="link" className="p-0 text-primary font-bold h-auto">View Case Study <ChevronRight className="ml-1 w-4 h-4" /></Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Science-Driven Sustainability Section */}
      <section id="science" className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="flex flex-col md:flex-row items-end justify-between gap-8 mb-24">
            <div className="max-w-2xl">
              <h2 className="text-6xl font-serif font-bold mb-6">Science-Driven <br /><span className="text-primary italic">Sustainability.</span></h2>
              <div className="w-20 h-1 bg-primary rounded-full mb-8" />
              <p className="text-xl text-muted-foreground leading-relaxed italic">My biology background provides the scientific ground-truth that makes corporate sustainability strategy credible and impactful.</p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {scienceProjects.map((item, idx) => (
              <motion.div 
                key={idx}
                {...fadeIn}
                className="relative group p-1 rounded-[3rem] bg-gradient-to-b from-primary/20 to-transparent"
              >
                <div className="bg-background rounded-[2.9rem] p-8 h-full">
                  <Badge variant="outline" className="mb-6 border-primary/20 text-primary bg-primary/5 uppercase font-black text-[10px] tracking-widest">{item.badge}</Badge>
                  <h3 className="text-2xl font-serif font-bold mb-4">{item.title}</h3>
                  <p className="text-sm font-bold text-primary mb-6">{item.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Professional Journey & Social Impact (Centered Timeline) */}
      <section id="journey" className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeIn} className="text-center mb-32">
            <h2 className="text-6xl font-serif font-bold mb-6 italic">Professional Journey <br />& Social Impact.</h2>
            <div className="w-32 h-1 bg-primary-foreground/30 mx-auto" />
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-primary-foreground/20 hidden md:block" />
            <div className="space-y-24">
              {combinedJourney.map((exp, idx) => (
                <motion.div 
                  key={idx}
                  {...fadeIn}
                  className={`relative flex flex-col md:flex-row items-center gap-16 ${idx % 2 === 0 ? 'md:flex-row-reverse text-right' : ''}`}
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary-foreground border-8 border-primary z-20 hidden md:block shadow-xl" />
                  <div className="w-full md:w-1/2">
                    <div className={`p-10 rounded-[3.5rem] bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-500 shadow-2xl ${idx % 2 === 0 ? 'hover:-translate-x-2' : 'hover:translate-x-2'}`}>
                      <Badge className="mb-6 bg-accent text-accent-foreground font-black tracking-widest text-[10px] uppercase border-none">{exp.period}</Badge>
                      <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                      <h4 className="text-lg font-serif italic text-accent/80 mb-6">{exp.company}</h4>
                      <p className="text-primary-foreground/70 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                  <div className="md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-32 container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn}>
            <h2 className="text-6xl font-serif font-bold mb-8">Let's craft the <br /><span className="text-primary italic">Strategy.</span></h2>
            <p className="text-xl text-muted-foreground mb-12">I am currently open to sustainability, ESG reporting, and environmental project management roles.</p>
            <div className="space-y-6">
              <a href="mailto:noviamnda09@gmail.com" className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all shadow-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase font-black tracking-widest text-muted-foreground mb-1">Send an Email</p>
                  <p className="text-xl font-bold">noviamnda09@gmail.com</p>
                </div>
              </a>
              <a href="https://linkedin.com/in/novia-amanda" target="_blank" className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all shadow-lg">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase font-black tracking-widest text-muted-foreground mb-1">LinkedIn Network</p>
                  <p className="text-xl font-bold">in/novia-amanda</p>
                </div>
              </a>
            </div>
          </motion.div>
          <motion.div {...fadeIn} className="bg-secondary p-12 rounded-[4rem] border border-primary/10 relative shadow-2xl">
             <div className="absolute top-0 right-0 p-10"><Leaf className="w-12 h-12 text-primary/20" /></div>
             <p className="text-3xl font-serif leading-tight italic mb-8">Ready to bring biological literacy to your ESG reports?</p>
             <Button size="lg" className="w-full rounded-full bg-primary h-20 text-xl font-bold" asChild>
               <a href="mailto:noviamnda09@gmail.com">Start the Conversation</a>
             </Button>
          </motion.div>
        </div>
      </section>
      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-background/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              className="bg-card w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[3.5rem] shadow-2xl border border-border/50 relative"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 p-4 bg-background/50 hover:bg-background rounded-full transition-all z-10"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-auto overflow-hidden">
                  <img src={selectedProject.image} className="w-full h-full object-cover" alt={selectedProject.title} />
                </div>
                <div className="p-10 md:p-16">
                  <Badge className="bg-primary/10 text-primary border-none mb-6">{selectedProject.category}</Badge>
                  <h3 className="text-4xl font-serif font-bold mb-8">{selectedProject.title}</h3>
                  <div className="space-y-10">
                    <div>
                      <h4 className="text-xs uppercase font-black tracking-[0.2em] text-primary mb-3">The Problem</h4>
                      <p className="text-muted-foreground leading-relaxed italic">"{selectedProject.details.problem}"</p>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase font-black tracking-[0.2em] text-primary mb-3">The Methodology</h4>
                      <p className="text-muted-foreground leading-relaxed">{selectedProject.details.methodology}</p>
                    </div>
                    <div className="p-8 bg-primary/5 rounded-3xl border border-primary/10">
                      <h4 className="text-xs uppercase font-black tracking-[0.2em] text-primary mb-3">The Strategic Conclusion</h4>
                      <p className="text-foreground font-bold leading-relaxed">{selectedProject.details.conclusion}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <footer className="py-20 text-center border-t border-border/20">
        <p className="text-xs font-black tracking-[0.4em] text-primary/40 uppercase">Novia Amanda Dwiputri • 2026</p>
      </footer>
    </div>
  );
}
