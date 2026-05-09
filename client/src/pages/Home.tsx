import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Activity,
  ArrowLeft,
  CornerUpLeft,
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
  ChevronDown,
  ChevronUp,
  Download,
  Search,
  CheckCircle2,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import QRCode from "react-qr-code";

// Import generated images
import heroBg from "@/assets/images/hero-bg.jpg";
import projectCarbon from "@/assets/images/project-carbon.jpg";
import projectOcean from "@/assets/images/project-ocean.jpg";
import projectReport from "@/assets/images/project-report.jpg";
import profileImg from "@/assets/images/profile.jpg";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const [selectedProject, setSelectedProject] = useState<any>(null);




  const [activeCluster, setActiveCluster] = useState<string>("01");

  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.1 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const CardItem = ({ isOpen, item, type, index, onClick }: any) => {
    const title = item.title || item.role;
    const description = item.description;
    const category = item.category || item.badge || item.type;
    const tags = item.tags || [category].filter(Boolean);
    const icon = item.icon || (type === "science" ? <Globe className="w-4 h-4" /> : <Zap className="w-4 h-4" />);
    const image = item.image;

    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ layout: { duration: 0.4, ease: "circOut" }, opacity: { duration: 0.3 }, y: { duration: 0.3, delay: index * 0.02 } }}
        whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.15, delay: 0 } }}
        onClick={(e: any) => { e.stopPropagation(); onClick(); }}
        className={`group bg-card shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer border border-border/40 flex flex-col h-full ${isOpen ? 'rounded-2xl overflow-hidden hover:shadow-2xl' : 'rounded-2xl p-4'}`}
      >
        {!isOpen ? (
          <motion.div layout="position" className="flex flex-col h-full">
            <h4 className="text-[13px] md:text-sm font-bold mb-1 group-hover:text-primary transition-colors leading-tight line-clamp-2">{title}</h4>
            <p className="text-[11px] md:text-xs text-muted-foreground flex-1 mb-3 line-clamp-2">{description}</p>
            <div className="mt-auto">
              <div className="flex flex-wrap gap-1.5 overflow-hidden max-h-[22px]">
                {tags.map((tag: string, i: number) => (
                  <Badge key={i} variant="secondary" className="bg-secondary/50 text-secondary-foreground text-[8px] md:text-[9px] font-medium px-2 py-0.5 whitespace-nowrap block">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div layout="position" className="flex flex-col h-full">
            {image && type !== "journey" && (
              <div className="h-40 overflow-hidden relative shrink-0">
                <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300" />
              </div>
            )}
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-2 text-primary mb-3">
                <div className="p-1.5 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {icon}
                </div>
                {type === "journey" && item.period && (
                  <span className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground ml-auto">{item.period}</span>
                )}
              </div>
              <h4 className="text-base md:text-lg font-bold mb-1 group-hover:text-primary transition-colors leading-tight">{title}</h4>
              {type === "journey" && item.company && (
                <p className="text-sm font-serif italic text-muted-foreground mb-3">{item.company}</p>
              )}
              <p className="text-xs md:text-sm text-muted-foreground flex-1 mb-6 line-clamp-3">{description}</p>
              <div className="mt-auto flex flex-col items-start gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((tag: string, i: number) => (
                    <Badge key={i} variant="secondary" className="bg-secondary/50 text-secondary-foreground text-[9px] md:text-[10px] font-medium px-2.5 py-0.5">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-primary group-hover:underline flex items-center gap-1">
                  {type === "project" ? "View Case Study" : "View Details"} <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    );
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
      const sections = ["about", "intro", "what-i-do", "skills", "contact"];
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
      title: "Built Multi-Sector GHG Inventory Model",
      tags: ["ESG Analysis", "Data Analysis", "GHG Protocol", "Carbon Accounting"],
      description: "Conducted Greenhouse Gas (GHG) emission inventories and simplified calculations for corporate operations.",
      image: projectCarbon,
      icon: <BarChart3 className="w-5 h-5" />,
      details: {
        overview: "Built a multi-sector carbon accounting model applying GHG Protocol to quantify emissions and evaluate renewable energy impact.",
        impacts: [
           { subtitle: "tCO₂eq Outputs", title: "Delivered Audit-Ready Emissions Data", description: "Produced standardized emissions outputs across finance and mining scenarios aligned with global reporting standards." },
           { subtitle: "2,000 kWp Solar Model", title: "Quantified Scope 2 Reduction Potential", description: "Modeled renewable energy integration to estimate measurable reduction in grid-based emissions." },
           { subtitle: "Decarbonization Pathways", title: "Built Scalable Carbon Framework", description: "Developed a reusable model for structured emissions tracking and future corporate use." }
        ],
        approach: [
           "Classified emissions into Scope 1, 2, and 3 categories",
           "Applied carbon calculation methodology to operational datasets",
           "Modeled solar integration (2,000 kWp) and multi-sector scenarios"
        ],
        cta: "https://docs.google.com/document/d/1gZ2QhxNor1ai8Lnx121xVPXr238DJ-8B0W6V-WxQq98/edit?usp=drive_link"
      }
    },
    {
      id: "greenwash",
      title: "Identified Greenwashing Risks in ESG Disclosures",
      tags: ["ESG Analysis", "GRI Compliance", "Risk Assessment", "Disclosure Audit"],
      description: "Audited corporate sustainability reports against GRI 2021 standards.",
      image: heroBg,
      icon: <ShieldCheck className="w-5 h-5" />,
      details: {
        overview: "Conducted a forensic ESG audit to identify greenwashing risks and evaluate alignment with GRI 2021 standards.",
        impacts: [
           { subtitle: "Disclosure Gap Analysis", title: "Identified High-Risk Reporting Gaps", description: "Detected inconsistencies between narrative claims and quantitative disclosures across key ESG metrics." },
           { subtitle: "GRI Compliance Screening", title: "Improved Transparency Benchmarking", description: "Evaluated alignment with GRI 2 & 3, highlighting missing targets and vague commitments." },
           { subtitle: "Governance Roadmap", title: "Enabled Shift Toward Measurable ESG Targets", description: "Proposed actionable improvements aligned with SEOJK 16 and investor-grade reporting expectations." }
        ],
        approach: [
           "Audited sustainability report against GRI 2021 standards",
           "Identified selective disclosure and vague commitments",
           "Analyzed gaps in emissions, biodiversity, and energy reporting"
        ],
        cta: "https://drive.google.com/file/d/1WZw56we-EUp-oZzYIsnBeccswmaNp4KM/view?usp=sharing"
      }
    },
    {
      id: "materiality",
      title: "Mapped ESG Programs to GRI Materiality Framework",
      tags: ["ESG Strategy", "Materiality Analysis", "Governance"],
      description: "Evaluated corporate initiatives against sustainability strategy and GRI topics.",
      image: projectReport,
      icon: <FileText className="w-5 h-5" />,
      details: {
        overview: "Performed a strategic ESG audit to evaluate whether corporate programs align with sustainability commitments and GRI materiality topics.",
        impacts: [
           { subtitle: "GRI Materiality Mapping", title: "Converted Programs into Measurable ESG Contributions", description: "Mapped social initiatives to GRI disclosures, enabling structured ESG reporting." },
           { subtitle: "Impact Verification", title: "Validated Strategic Consistency", description: "Confirmed alignment between program execution and corporate sustainability priorities." },
           { subtitle: "Strategic Positioning", title: "Reframed Initiative as ESG Value Driver", description: "Positioned community programs as contributors to long-term ESG performance." }
        ],
        approach: [
           "Mapped SheHacks 2023 to GRI material topics (GRI 413, GRI 3)",
           "Evaluated alignment with digital inclusion strategy",
           "Assessed program contribution to ESG disclosures"
        ],
        cta: "https://drive.google.com/file/d/1kQBjhYNLxetBqvWydqxV9TLtePyljhf_/view?usp=sharing"
      }
    },
    {
      id: "benchmarking",
      title: "Benchmarked ESG Reporting Across GRI & SASB",
      tags: ["ESG Reporting", "Data Analysis", "Compliance Analysis"],
      description: "Compared disclosure quality between telecom companies using global frameworks.",
      image: projectReport,
      icon: <Search className="w-5 h-5" />,
      details: {
        overview: "Conducted a comparative ESG reporting audit to evaluate disclosure quality and its relationship to ESG ratings.",
        impacts: [
           { subtitle: "Cross-Company Benchmarking", title: "Identified Reporting Strength Gaps", description: "Compared disclosure depth across two companies, highlighting differences in transparency and rigor." },
           { subtitle: "Framework Integration", title: "Bridged Impact and Investor Reporting", description: "Aligned GRI and SASB frameworks for a more comprehensive evaluation approach." },
           { subtitle: "ESG Rating Correlation", title: "Linked Reporting to Market Credibility", description: "Demonstrated how stronger disclosure practices contribute to improved ESG ratings." }
        ],
        approach: [
           "Benchmarked Telkomsel vs Indosat sustainability reports",
           "Evaluated GRI 2021 and SASB alignment",
           "Analyzed disclosures on emissions, data privacy, and governance"
        ],
        cta: "https://drive.google.com/file/d/1taLIHKW7spFJQ25edL6yrQIV6YcI_7Od/view?usp=sharing"
      }
    },
    {
      id: "report-dev",
      title: "Developed GRI-Compliant Sustainability Report Model",
      tags: ["ESG Reporting", "Data Management", "Strategy"],
      description: "Built a structured report using multi-year ESG data aligned with GRI and SEOJK 16.",
      image: projectReport,
      icon: <CheckCircle2 className="w-5 h-5" />,
      details: {
        overview: "Developed a forward-looking sustainability reporting model by consolidating historical ESG data and applying GRI 2021 and SEOJK 16 standards.",
        impacts: [
           { subtitle: "Multi-Year ESG Data Matrix", title: "Centralized 4-Year ESG Performance Data", description: "Structured fragmented disclosures into a single dataset spanning 2022–2025." },
           { subtitle: "Predictive ESG Modeling", title: "Enabled Forward-Looking Planning", description: "Projected ESG performance trends to support strategic sustainability decisions." },
           { subtitle: "GRI-Compliant Framework", title: "Built Investor-Ready Sustainability Report", description: "Developed a structured report aligned with global standards and regulatory requirements." }
        ],
        approach: [
           "Consolidated ESG performance metrics across E, S, and G pillars",
           "Applied trend-based forecasting to project 2025 performance data",
           "Structured reporting structure aligned with GRI and SEOJK 16"
        ],
        cta: "https://docs.google.com/document/d/1w_xZMDbmiP_9XJ8Z1n0I0MyCnVTOswUMf9QOZ-_lhQg/edit?usp=drive_link"
      }
    }
  ];

  const scienceProjects = [
    {
      id: "sdg-matrix",
      title: "Mapped Bioremediation Impact Across 169 SDG Targets",
      tags: ["Systems Analysis", "Data Analysis", "Impact Mapping", "Sustainability Strategy"],
      description: "Analyzed alignment between bioremediation technologies and UN SDGs using a systems-level, evidence-based approach.",
      image: projectCarbon,
      icon: <Globe className="w-5 h-5" />,
      details: {
        overview: "Developed a comprehensive SDG alignment model to evaluate how bioremediation contributes to environmental, social, and economic sustainability targets.",
        impacts: [
           { subtitle: "Matrix Development", title: "169 SDG Targets Mapped", description: "Built a structured matrix linking bioremediation to global sustainability priorities." },
           { subtitle: "Scientific Validation", title: "Evidence-Based Insights", description: "Validated impact using 10+ academic sources across environmental and social domains." },
           { subtitle: "Scope Analysis", title: "Realistic Scope Definition", description: "Identified both impact areas and non-relevant targets to ensure analytical accuracy." }
        ],
        approach: [
           "Evaluated all 17 SDGs to identify technical intersections",
           "Synthesized findings from academic research (Bala et al., 2022; Arora, 2018)",
           "Mapped environmental technologies to specific SDG targets (e.g. SDG 2, SDG 6)",
           "Assessed cross-pillar impact across environmental and social dimensions"
        ],
        cta: "https://docs.google.com/spreadsheets/d/1am_qHhNfdAHt1lKa04R2J-6WCauwCrZykGl6GdBuGeY/edit?usp=sharing"
      }
    },
    {
      id: "oil-spill",
      title: "Evaluated Oil Spill Response and Proposed Bioremediation Strategy",
      tags: ["Risk Analysis", "Environmental Policy", "Sustainability Research", "Impact Assessment"],
      description: "Investigated major oil spill incidents and assessed environmental, legal, and technical response effectiveness.",
      image: projectOcean,
      icon: <ShieldCheck className="w-5 h-5" />,
      details: {
        overview: "Conducted an investigative analysis of oil spill incidents to evaluate corporate accountability and develop a sustainable, low-impact remediation strategy.",
        impacts: [
           { subtitle: "Incident Investigation", title: "Crisis Root Cause Analysis", description: "Identified technical and operational failures across major spill incidents." },
           { subtitle: "Legal Audit", title: "Regulatory Compliance Assessment", description: "Evaluated corporate response against Indonesian environmental law." },
           { subtitle: "Technical Strategy", title: "Bioremediation Solution Model", description: "Proposed a microbial-based recovery strategy with 70–95% effectiveness." }
        ],
        approach: [
           "Investigated 2019 and 2021 oil spill incidents",
           "Analyzed compliance with Law No. 32 (Articles 54 & 88)",
           "Evaluated limitations of chemical and physical remediation",
           "Designed microbial bioremediation strategy (Bacillus & Pseudomonas)"
        ],
        cta: "https://drive.google.com/file/d/1uKmiWsIIQ0ePt-EbW5AsxoFKdGKGj6rc/view?usp=sharing"
      }
    },
    {
      id: "bio-exhibition",
      title: "Led Biodiversity Exhibition with 300+ Participants Engagement",
      tags: ["Project Management", "Stakeholder Engagement", "Science Communication", "Program Delivery"],
      description: "Directed a large-scale educational program translating biological research into public awareness.",
      image: heroBg,
      icon: <Users className="w-5 h-5" />,
      details: {
        overview: "Led the execution of a large-scale biological exhibition, transforming research outputs into an accessible and engaging public experience.",
        impacts: [
           { subtitle: "Public Engagement", title: "300+ Participants Engaged", description: "Successfully delivered a large-scale educational program." },
           { subtitle: "Program Quality", title: "93% Positive Feedback", description: "Achieved high satisfaction through structured program delivery." },
           { subtitle: "Performance Review", title: "A-Grade Project Evaluation", description: "Recognized for strong execution and quality assurance." }
        ],
        approach: [
           "Led a 50+ member multidisciplinary team",
           "Managed logistics, registration, and program coordination",
           "Curated biological content into public-facing exhibition",
           "Ensured quality through structured evaluation processes"
        ],
        cta: "https://www.youtube.com/watch?v=AVgHvqpRUOA"
      }
    }
  ];

  const combinedJourney = [
    {
      id: "binar-2024",
      title: "B2B Project Officer",
      company: "Binar Academy",
      type: "Professional Experience",
      period: "Sept 2024 – Nov 2024",
      description: "Managed logistics and documentation for employee innovation bootcamp, achieving 4.6/5 participant satisfaction.",
      tags: ["Project Management", "Stakeholder Management", "Program Delivery"],
      icon: <Users className="w-5 h-5" />,
      details: {
        overview: "Led the execution of a corporate innovation bootcamp, managing operations, stakeholders, and deliverables to ensure high-quality program delivery and participant experience.",
        impacts: [
           { subtitle: "Program Feedback", title: "4.6/5 Satisfaction Score", description: "Achieved high participant satisfaction through structured execution and experience design." },
           { subtitle: "Delivery Excellence", title: "100% On-Time Delivery", description: "Delivered 20+ program outputs on schedule with full compliance to quality standards." },
           { subtitle: "Team Dynamics", title: "Cross-Functional Engagement", description: "Facilitated collaboration across participants, strengthening internal engagement." }
        ],
        approach: [
           "Managed end-to-end logistics, scheduling, and documentation",
           "Coordinated stakeholders and participant engagement",
           "Maintained delivery of 20+ structured outputs",
           "Ensured transparent communication across all phases"
        ]
      }
    },
    {
      id: "bsi-2024",
      title: "Employee Innovation Project Officer",
      company: "Bank Syariah Indonesia",
      type: "Professional Experience",
      period: "Dec 2023 – Mar 2024",
      description: "Directed company-wide innovation program for 17,000+ participants, increasing program satisfaction by 15%.",
      tags: ["Program Management", "Data Analysis", "Stakeholder Management"],
      icon: <Settings className="w-5 h-5" />,
      details: {
        overview: "Directed execution of a large-scale corporate innovation program, aligning operational delivery with strategic business objectives and participant experience.",
        impacts: [
           { subtitle: "Scale & Reach", title: "17,000+ Participants Managed", description: "Handled one of the largest innovation programs in the sector with structured operations." },
           { subtitle: "Program Feedback", title: "+15% Satisfaction Increase", description: "Improved program experience through targeted operational and communication enhancements." },
           { subtitle: "Process Optimization", title: "Operational Efficiency Gains", description: "Streamlined verification and documentation processes at scale." }
        ],
        approach: [
           "Oversaw large-scale participant operations and data flows",
           "Analyzed feedback to identify experience gaps",
           "Coordinated between technical teams and executives",
           "Developed reports translating data into strategic insights"
        ]
      }
    },
    {
      id: "student-energy-2023",
      title: "Vice President of Branding",
      company: "Student Energy at Padjadjaran University",
      type: "Community Leadership",
      period: "Jun 2023 – Dec 2023",
      description: "Directed Renewable Energy advocacy and youth awareness, building partnerships with 3 renewable energy stakeholders.",
      tags: ["Sustainability Strategy", "Stakeholder Management", "Communication Strategy"],
      icon: <Globe className="w-5 h-5" />,
      details: {
        overview: "Directed branding strategy and stakeholder partnerships to strengthen renewable energy advocacy and expand organizational reach.",
        impacts: [
           { subtitle: "Audience Conversion", title: "+30% Community Engagement", description: "Converted passive audiences into active participants in sustainability initiatives." },
           { subtitle: "Brand Visibility", title: "+15% Digital Reach Growth", description: "Expanded visibility through targeted communication strategies." },
           { subtitle: "Network Expansion", title: "Strategic Partnerships Established", description: "Secured 3 key collaborations with energy and youth stakeholders." }
        ],
        approach: [
           "Led cross-functional teams for program execution",
           "Built partnership strategy with external stakeholders",
           "Managed digital communication platforms",
           "Developed educational content for energy literacy"
        ]
      }
    },
    {
      id: "binar-2023",
      title: "B2B Project Officer",
      company: "Binar Academy",
      type: "Professional Experience",
      period: "Aug 2023 – Dec 2023",
      description: "Executed 7 student-centric training programs, reducing operational costs by 10% and improving outcomes by 20%.",
      tags: ["Project Management", "Data Analysis", "Program Delivery"],
      icon: <CheckCircle2 className="w-5 h-5" />,
      details: {
        overview: "Managed execution of training programs, aligning participant development with organizational goals through structured operations and data-driven improvements.",
        impacts: [
           { subtitle: "Performance Growth", title: "+20% Outcome Improvement", description: "Enhanced participant performance through feedback-driven program adjustments." },
           { subtitle: "Resource Management", title: "-10% Operational Cost Reduction", description: "Optimized workflows and resource allocation." },
           { subtitle: "Participation Rate", title: "100% Participant Engagement", description: "Maintained full engagement across multiple learning tracks." }
        ],
        approach: [
           "Executed 7 structured training programs",
           "Leveraged feedback data for continuous improvement",
           "Optimized workflows for efficiency and quality",
           "Coordinated across multiple learning tracks"
        ]
      }
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
              { id: "intro", label: "About Me" },
              { id: "what-i-do", label: "What I Do" },
              { id: "skills", label: "My Work" }
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
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:text-primary" asChild>
              <a href="https://linkedin.com/in/novia-amanda" target="_blank" rel="noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:text-primary" asChild>
              <a href="mailto:noviamnda09@gmail.com">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="default" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 px-6 font-bold hidden sm:flex" asChild>
              <a href="#contact">
                Start a Conversation
              </a>
            </Button>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center pt-24 container mx-auto px-6 relative">
        <div className="absolute top-0 right-0 -z-10 w-[70vw] h-[70vw] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn}>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground leading-[1.05] mb-8">
              Turning Sustainability Data <br /><span className="text-primary italic">into Strategic Impact.</span>
            </h1>
            <p className="md:text-2xl font-medium max-w-xl mb-10 text-[#628471] text-[20px]">
              Biology-trained researcher translating complex ESG data into actionable insights, scalable programs, and real-world outcomes.
            </p>
            <div className="flex flex-wrap gap-6">
              <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-16 px-10 text-lg font-bold" asChild>
                <a href="#projects">Explore My Work</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground h-16 px-10 text-lg font-bold" asChild>
                <a href="#contact">Start a Conversation</a>
              </Button>
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
              <p className="text-white font-serif italic text-2xl">"The first law of ecology is that everything is related to everything else."</p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Interactive Introduction Section */}
      <section id="intro" className="py-32 bg-secondary/50 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-background rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                  <img src={profileImg} className="w-full h-full object-cover" alt="Novia Amanda" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
              </motion.div>

              <motion.div {...fadeIn} className="space-y-8">
                <div className="inline-flex items-center gap-4 text-primary mb-4 font-bold tracking-[0.2em] uppercase text-xs">
                  <div className="w-8 h-px bg-primary" />
                  Nice to meet you
                </div>
                <div className="space-y-6 text-xl md:text-2xl font-serif leading-tight">
                  <p>Hi, I'm <span className="text-primary underline decoration-2 underline-offset-8 italic font-bold">Novia Amanda</span>.</p>
                  <p className="text-muted-foreground">I work at the intersection of science, sustainability, and strategy—translating complex environmental data into actionable ESG insights and scalable impact.</p>
                  <p>With a background in <span className="font-bold text-[#2e5c43]">Biology</span>, I bring a <span className="font-bold text-[#2e5c43]">rigorous, investigative approach to analyzing complex systems</span>. I connect data to real-world decisions, identifying risks, opportunities, and pathways for sustainable growth.</p>
                  <p>Beyond research, I've led initiatives reaching <span className="font-bold text-[#2e5c43]">17,000+ beneficiaries</span>, turning insights into <span className="font-bold text-[#2e5c43]">programs that create measurable impact</span>.</p>
                  <p className="text-muted-foreground text-lg italic border-l-4 border-primary pl-6 py-2">I turn sustainability insights into systems organizations can actually use.</p>
                </div>
                <div className="pt-8">
                  <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground h-16 px-10 font-bold uppercase tracking-wider" asChild>
                    <a href="#projects">Explore My Work</a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* What I Do Section */}
      <section id="what-i-do" className="py-32 bg-primary/5 relative border-t border-border/20">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-5xl font-serif font-bold mb-6 italic text-[#2e5c43]">What I Do.</h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto italic">
              I combine analytical depth with structured execution to turn sustainability challenges into implementable solutions.
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {/* Card 1 */}
            <motion.div {...fadeIn} className="bg-card border border-border/40 rounded-3xl p-8 shadow-sm flex flex-col relative group hover:border-primary/30 transition-all duration-300">
              <div className="mb-6 p-4 bg-primary/10 w-fit rounded-2xl group-hover:bg-primary/20 transition-colors">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 leading-tight">ESG & Sustainability Analysis</h3>
              <p className="text-muted-foreground text-sm mb-8 font-medium">Not just reporting—structuring ESG into decision-making tools.</p>
              <div className="mt-auto">
                <div className="w-full h-px bg-border/50 mb-6" />
                <h4 className="text-[10px] uppercase font-black tracking-widest text-primary mb-4">What I do:</h4>
                <ul className="space-y-3">
                  {["Carbon accounting & GHG inventory (Scope 1–3)", "Sustainability reporting (GRI, SASB, SEOJK 16)", "ESG compliance & greenwashing risk analysis", "Materiality mapping & disclosure evaluation"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div {...fadeIn} className="bg-card border border-border/40 rounded-3xl p-8 shadow-sm flex flex-col relative group hover:border-primary/30 transition-all duration-300">
              <div className="mb-6 p-4 bg-primary/10 w-fit rounded-2xl group-hover:bg-primary/20 transition-colors">
                <BarChart3 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 leading-tight">Data Analysis & Research</h3>
              <p className="text-muted-foreground text-sm mb-8 font-medium">Turning complex data into clear direction and usable insight.</p>
              <div className="mt-auto">
                <div className="w-full h-px bg-border/50 mb-6" />
                <h4 className="text-[10px] uppercase font-black tracking-widest text-primary mb-4">What I do:</h4>
                <ul className="space-y-3">
                  {["Data synthesis & trend analysis", "Evidence-based research & validation", "Systems thinking (science → strategy)", "Impact modeling & scenario analysis"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div {...fadeIn} className="bg-card border border-border/40 rounded-3xl p-8 shadow-sm flex flex-col relative group hover:border-primary/30 transition-all duration-300">
              <div className="mb-6 p-4 bg-primary/10 w-fit rounded-2xl group-hover:bg-primary/20 transition-colors">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 leading-tight">Program Execution & Delivery</h3>
              <p className="text-muted-foreground text-sm mb-8 font-medium">Where strategy becomes real-world implementation.</p>
              <div className="mt-auto">
                <div className="w-full h-px bg-border/50 mb-6" />
                <h4 className="text-[10px] uppercase font-black tracking-widest text-primary mb-4">What I do:</h4>
                <ul className="space-y-3">
                  {["End-to-end project management", "Stakeholder coordination & communication", "Program optimization & performance tracking", "Translating insights into operational programs"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Work Section */}
      <section id="skills" className="pt-32 container mx-auto px-6">
        <motion.div {...fadeIn} className="text-center mb-16">
          <div className="inline-flex flex-col items-center mb-6">
            <span className="text-xs font-black tracking-[0.3em] uppercase text-primary/60 mb-3">Portfolio</span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold italic text-[#2e5c43] relative pb-6">
              My Work.
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-primary/20 rounded-full"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-1.5 bg-primary rounded-full"></div>
            </h2>
          </div>
        </motion.div>
      {/* Experience Clusters */}
      <div id="projects" className="py-10 pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto relative border-l border-border/30 pl-6 md:pl-12 ml-4 md:ml-6 space-y-16 md:space-y-24">
            <div className="absolute top-0 bottom-0 left-[-1px] w-[1px] bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

            {/* Cluster 01 */}
            <div className="relative">
              <div
                className={`absolute -left-[32px] md:-left-[56px] top-8 w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors duration-500 z-10 cursor-pointer ${activeCluster === "01" ? 'bg-primary border-primary/30' : 'bg-background border-border/40 hover:border-primary/50'}`}
                onClick={() => setActiveCluster(activeCluster === "01" ? "" : "01")}
              >
                <div className={`w-1.5 h-1.5 rounded-full transition-colors ${activeCluster === "01" ? 'bg-primary' : 'bg-primary/40'}`} />
              </div>

              <motion.div
                initial={false}
                animate={{
                  backgroundColor: "hsl(var(--secondary)/0.3)",
                }}
                className={`group cursor-pointer rounded-3xl transition-all duration-500 overflow-hidden ${activeCluster === "01" ? 'border border-border/20' : 'border border-border/40 hover:border-primary/30 shadow-sm hover:shadow-md'} ${activeCluster !== "01" && 'hover:-translate-y-1'}`}
                onClick={() => setActiveCluster(activeCluster === "01" ? "" : "01")}
              >
                <div
                  className={`select-none flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-500 ${activeCluster === "01" ? 'p-6 md:p-8 pb-0 md:pb-0' : 'p-6 md:p-8'}`}
                >
                  <div>
                    <div className="flex items-center gap-4">
                      <h3 className={`text-2xl md:text-3xl font-bold font-serif transition-colors ${activeCluster === "01" ? 'text-primary' : 'text-foreground/80 group-hover:text-primary'}`}>01</h3>
                      <h3 className={`text-2xl md:text-3xl font-bold transition-colors ${activeCluster === "01" ? 'text-foreground' : 'text-foreground/80 group-hover:text-primary'}`}>ESG & Sustainability Analysis</h3>
                    </div>
                    <p className={`text-sm md:text-base mt-2 max-w-3xl transition-colors ${activeCluster === "01" ? 'text-muted-foreground' : 'text-muted-foreground'}`}>Analyzing ESG risks, performance, and disclosures to drive better decisions.</p>
                  </div>
                  <div className={`flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-300 text-primary`}>
                    {activeCluster === "01" ? (
                      <>View Less <ChevronUp className="w-3 h-3 md:w-4 md:h-4" /></>
                    ) : (
                      <>View More <ChevronDown className="w-3 h-3 md:w-4 md:h-4" /></>
                    )}
                  </div>
                </div>

                <div className={`transition-all duration-500 ${activeCluster === "01" ? 'p-6 md:p-8 pt-6 md:pt-8' : 'px-6 pb-6 md:px-8 md:pb-8 pt-0'}`}>
                  <motion.div layout className={`grid gap-4 md:gap-6 ${activeCluster === "01" ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5'}`}>
                    {bootcampProjects.map((project, idx) => (
                      <CardItem
                        key={idx}
                        isOpen={activeCluster === "01"}
                        item={project}
                        type="project"
                        index={idx}
                        onClick={() => setSelectedProject(project)}
                      />
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Cluster 02 */}
            <div className="relative">
              <div
                className={`absolute -left-[32px] md:-left-[56px] top-8 w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors duration-500 z-10 cursor-pointer ${activeCluster === "02" ? 'bg-primary border-primary/30' : 'bg-background border-border/40 hover:border-primary/50'}`}
                onClick={() => setActiveCluster(activeCluster === "02" ? "" : "02")}
              >
                <div className={`w-1.5 h-1.5 rounded-full transition-colors ${activeCluster === "02" ? 'bg-primary' : 'bg-primary/40'}`} />
              </div>

              <motion.div
                initial={false}
                animate={{
                  backgroundColor: "hsl(var(--secondary)/0.3)",
                }}
                className={`group cursor-pointer rounded-3xl transition-all duration-500 overflow-hidden ${activeCluster === "02" ? 'border border-border/20' : 'border border-border/40 hover:border-primary/30 shadow-sm hover:shadow-md'} ${activeCluster !== "02" && 'hover:-translate-y-1'}`}
                onClick={() => setActiveCluster(activeCluster === "02" ? "" : "02")}
              >
                <div
                  className={`select-none flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-500 ${activeCluster === "02" ? 'p-6 md:p-8 pb-0 md:pb-0' : 'p-6 md:p-8'}`}
                >
                  <div>
                    <div className="flex items-center gap-4">
                      <h3 className={`text-2xl md:text-3xl font-bold font-serif transition-colors ${activeCluster === "02" ? 'text-primary' : 'text-foreground/80 group-hover:text-primary'}`}>02</h3>
                      <h3 className={`text-2xl md:text-3xl font-bold transition-colors ${activeCluster === "02" ? 'text-foreground' : 'text-foreground/80 group-hover:text-primary'}`}>Scientific Research & Environmental Systems</h3>
                    </div>
                    <p className={`text-sm md:text-base mt-2 max-w-3xl transition-colors ${activeCluster === "02" ? 'text-muted-foreground' : 'text-muted-foreground'}`}>Applying scientific rigor to understand environmental systems and inform sustainability decisions.</p>
                  </div>
                  <div className={`flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-300 text-primary`}>
                    {activeCluster === "02" ? (
                      <>View Less <ChevronUp className="w-3 h-3 md:w-4 md:h-4" /></>
                    ) : (
                      <>View More <ChevronDown className="w-3 h-3 md:w-4 md:h-4" /></>
                    )}
                  </div>
                </div>

                <div className={`transition-all duration-500 ${activeCluster === "02" ? 'p-6 md:p-8 pt-6 md:pt-8' : 'px-6 pb-6 md:px-8 md:pb-8 pt-0'}`}>
                  <motion.div layout className={`grid gap-4 md:gap-6 ${activeCluster === "02" ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5'}`}>
                    {scienceProjects.map((item, idx) => (
                      <CardItem
                        key={idx}
                        isOpen={activeCluster === "02"}
                        item={item}
                        type="science"
                        index={idx}
                        onClick={() => setSelectedProject(item)}
                      />
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Cluster 03 */}
            <div className="relative">
              <div
                className={`absolute -left-[32px] md:-left-[56px] top-8 w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors duration-500 z-10 cursor-pointer ${activeCluster === "03" ? 'bg-primary border-primary/30' : 'bg-background border-border/40 hover:border-primary/50'}`}
                onClick={() => setActiveCluster(activeCluster === "03" ? "" : "03")}
              >
                <div className={`w-1.5 h-1.5 rounded-full transition-colors ${activeCluster === "03" ? 'bg-primary' : 'bg-primary/40'}`} />
              </div>

              <motion.div
                initial={false}
                animate={{
                  backgroundColor: "hsl(var(--secondary)/0.3)",
                }}
                className={`group cursor-pointer rounded-3xl transition-all duration-500 overflow-hidden relative ${activeCluster === "03" ? 'border border-border/20' : 'border border-border/40 hover:border-primary/30 shadow-sm hover:shadow-md'} ${activeCluster !== "03" && 'hover:-translate-y-1'}`}
                onClick={() => setActiveCluster(activeCluster === "03" ? "" : "03")}
              >
                <div
                  className={`select-none flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-500 ${activeCluster === "03" ? 'p-6 md:p-8 pb-0 md:pb-0' : 'p-6 md:p-8'}`}
                >
                  <div>
                    <div className="flex items-center gap-4">
                      <h3 className={`text-2xl md:text-3xl font-bold font-serif transition-colors ${activeCluster === "03" ? 'text-primary' : 'text-foreground/80 group-hover:text-primary'}`}>03</h3>
                      <h3 className={`text-2xl md:text-3xl font-bold transition-colors ${activeCluster === "03" ? 'text-foreground' : 'text-foreground/80 group-hover:text-primary'}`}>Strategy & Impact Execution</h3>
                    </div>
                    <p className={`text-sm md:text-base mt-2 max-w-3xl transition-colors ${activeCluster === "03" ? 'text-muted-foreground' : 'text-muted-foreground'}`}>Turning insights into programs that deliver measurable social and organizational impact.</p>
                  </div>
                  <div className={`flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-300 text-primary`}>
                    {activeCluster === "03" ? (
                      <>View Less <ChevronUp className="w-3 h-3 md:w-4 md:h-4" /></>
                    ) : (
                      <>View More <ChevronDown className="w-3 h-3 md:w-4 md:h-4" /></>
                    )}
                  </div>
                </div>

                <div className={`transition-all duration-500 relative ${activeCluster === "03" ? 'p-6 md:p-8 pt-6 md:pt-8' : 'px-6 pb-6 md:px-8 md:pb-8 pt-0'}`}>
                  {activeCluster === "03" && (
                    <motion.div
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="absolute top-1/2 -translate-y-1/2 left-8 right-8 h-0.5 bg-border/60 rounded-full hidden lg:block origin-left z-0"
                    >
                      {combinedJourney.map((_, i) => (
                        <div key={i} className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/50" style={{ left: `calc(${(i / (combinedJourney.length - 1 || 1)) * 100}% - 4px)` }} />
                      ))}
                    </motion.div>
                  )}
                  <motion.div layout className={`grid gap-4 md:gap-6 relative z-10 ${activeCluster === "03" ? 'md:grid-cols-2' : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5'}`}>
                    {combinedJourney.map((exp, idx) => (
                      <CardItem
                        key={idx}
                        isOpen={activeCluster === "03"}
                        item={exp}
                        type="journey"
                        index={idx}
                        onClick={() => setSelectedProject(exp)}
                      />
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-32 bg-secondary/30 relative border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.1 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Let's Turn Sustainability Insights <br /><span className="text-primary italic">into Impact.</span></h2>
              <p className="text-xl text-muted-foreground mb-8">Open to opportunities in ESG, sustainability strategy, research, and impact-driven project management.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.1 }}
              className="bg-background p-8 md:p-10 rounded-3xl border border-border shadow-lg"
            >
              <div className="flex flex-col gap-6">
                <a href="mailto:noviamnda09@gmail.com" className="group flex items-start gap-4 p-4 -m-4 rounded-2xl hover:bg-secondary/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-black tracking-widest text-muted-foreground mb-1">Direct Email</p>
                    <p className="text-lg font-bold group-hover:text-primary transition-colors">noviamnda09@gmail.com</p>
                  </div>
                </a>
                <div className="w-full h-px bg-border/50" />
                <a href="https://linkedin.com/in/novia-amanda" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4 p-4 -m-4 rounded-2xl hover:bg-secondary/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-black tracking-widest text-muted-foreground mb-1">Professional Network</p>
                    <p className="text-lg font-bold group-hover:text-primary transition-colors">in/novia-amanda</p>
                  </div>
                </a>
                <div className="w-full h-px bg-border/50" />
                <a href="https://docs.google.com/document/d/1dShDcLryJxTyye3mo5ZwpyfmGmqnxxPj/edit?usp=sharing&ouid=113258424421884384056&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4 p-4 -m-4 rounded-2xl hover:bg-secondary/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                    <Download className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-black tracking-widest text-muted-foreground mb-1">Curriculum Vitae</p>
                    <p className="text-lg font-bold group-hover:text-primary transition-colors">Download CV</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (() => {
          let currentArray = [];
          let currentIndex = -1;
          
          if (bootcampProjects.find(p => p.id === selectedProject.id)) {
            currentArray = bootcampProjects;
            currentIndex = currentArray.findIndex(p => p.id === selectedProject.id);
          } else if (scienceProjects.find(p => p.id === selectedProject.id)) {
            currentArray = scienceProjects;
            currentIndex = currentArray.findIndex(p => p.id === selectedProject.id);
          } else if (combinedJourney.find(p => p.id === selectedProject.id)) {
            currentArray = combinedJourney;
            currentIndex = currentArray.findIndex(p => p.id === selectedProject.id);
          }

          const handleNext = (e) => {
            e.stopPropagation();
            if (currentIndex >= 0 && currentIndex < currentArray.length - 1) {
              setSelectedProject(currentArray[currentIndex + 1]);
            }
          };

          const handlePrev = (e) => {
            e.stopPropagation();
            if (currentIndex > 0) {
              setSelectedProject(currentArray[currentIndex - 1]);
            }
          };

          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-background/90 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 20, opacity: 0 }}
                className="bg-card w-[95vw] max-w-6xl max-h-[95vh] overflow-hidden rounded-[2rem] shadow-2xl border border-border/50 relative flex flex-col"
                onClick={e => e.stopPropagation()}
              >
                {/* Header Area */}
                <div className="flex-none p-5 md:p-6 pb-4 md:pb-5 border-b border-border/40 flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <button onClick={() => setSelectedProject(null)} className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-bold uppercase tracking-wider mb-6">
                      <CornerUpLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to Portfolio
                    </button>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {selectedProject.tags ? selectedProject.tags.map((tag, i) => (
                        <Badge key={i} className="bg-primary/10 text-primary border-none px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{tag}</Badge>
                      )) : (
                        <Badge className="bg-primary/10 text-primary border-none px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{selectedProject.category || selectedProject.badge || selectedProject.type}</Badge>
                      )}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground leading-tight max-w-4xl">{selectedProject.title}</h3>
                  </div>
                  
                  {/* Navigation */}
                  <div className="flex items-center gap-2 mt-4 md:mt-0 shrink-0">
                    <Button variant="outline" size="icon" className="rounded-full w-10 h-10 border-border/50 hover:bg-primary/5 hover:text-primary hover:border-primary/30" onClick={handlePrev} disabled={currentIndex <= 0}>
                      <ArrowLeft className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full w-10 h-10 border-border/50 hover:bg-primary/5 hover:text-primary hover:border-primary/30" onClick={handleNext} disabled={currentIndex === -1 || currentIndex >= currentArray.length - 1}>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5 md:p-6">
                  {(() => {
                    const hasImage = selectedProject.image && currentArray !== bootcampProjects && currentArray !== scienceProjects;
                    return (
                      <>
                        <div className={`grid gap-6 lg:gap-6 h-full ${hasImage ? 'lg:grid-cols-12' : 'grid-cols-1'}`}>
                        
                        {/* Left Column: Details */}
                        <div className={`${hasImage ? 'lg:col-span-8' : ''} space-y-4 md:space-y-6 flex flex-col h-full`}>
                          <div className="space-y-4 md:space-y-6 flex-1">
                      
                      {/* Overview */}
                      {selectedProject.details.overview && (
                        <section className="relative pl-6 border-l-2 border-primary">
                          <h4 className="text-xs uppercase font-black tracking-widest text-primary mb-2">Overview</h4>
                          <p className="text-sm md:text-[15px] font-medium leading-relaxed text-foreground/90">{selectedProject.details.overview}</p>
                        </section>
                      )}

                      {/* Impacts */}
                      {selectedProject.details.impacts && (
                        <section>
                          <div className="flex items-center gap-3 mb-4">
                            <Zap className="w-5 h-5 text-primary" />
                            <h4 className="text-xs uppercase font-black tracking-widest text-primary">Key Impact</h4>
                          </div>
                          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {selectedProject.details.impacts.map((impact: any, idx: number) => {
                              const iconMap = [<BarChart3 className="w-6 h-6 text-primary" />, <Target className="w-6 h-6 text-primary" />, <Activity className="w-6 h-6 text-primary" />];
                              const IconToUse = iconMap[idx % iconMap.length];
                              return (
                                <div key={idx} className="bg-secondary/30 p-4 rounded-xl border border-border/40 hover:border-primary/30 transition-colors group flex flex-col">
                                  <div className="mb-3 p-2.5 bg-primary/10 w-fit rounded-xl group-hover:bg-primary/20 transition-colors">
                                    {IconToUse}
                                  </div>
                                  <div className="text-[10px] uppercase font-bold tracking-wider text-primary mb-1 group-hover:underline decoration-primary/30 underline-offset-4">{impact.subtitle}</div>
                                  <h5 className="font-bold text-sm mb-2 leading-tight text-[15px] md:text-base text-foreground">{impact.title}</h5>
                                  <p className="text-xs text-muted-foreground">{impact.description}</p>
                                </div>
                              );
                            })}
                          </div>
                        </section>
                      )}

                      {/* Approach and QR Wrapper */}
                      <div className={`grid ${!hasImage && selectedProject.details.cta ? 'lg:grid-cols-2' : 'grid-cols-1'} gap-6 items-start`}>
                        {/* Selected Approach */}
                        {selectedProject.details.approach && (
                          <section>
                            <div className="flex items-center gap-3 mb-4">
                              <CheckCircle2 className="w-5 h-5 text-primary" />
                              <h4 className="text-xs uppercase font-black tracking-widest text-primary">Selected Approach</h4>
                            </div>
                            <div className="bg-primary/[0.02] p-4 md:p-5 rounded-[1.2rem] border border-primary/10 h-full">
                              <ul className="space-y-2">
                                {selectedProject.details.approach.map((point: string, idx: number) => (
                                  <li key={idx} className="flex gap-4">
                                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                      <div className="w-2 h-2 rounded-full bg-primary" />
                                    </div>
                                    <p className="text-[13px] md:text-sm text-foreground/80 font-medium leading-relaxed">{point}</p>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </section>
                        )}

                        {/* QR Code inline if no image */}
                        {!hasImage && selectedProject.details.cta && (
                          <section>
                            <div className="flex items-center gap-3 mb-4">
                              <ExternalLink className="w-5 h-5 text-primary" />
                              <h4 className="text-xs uppercase font-black tracking-widest text-primary">Project Link</h4>
                            </div>
                            <a href={selectedProject.details.cta} target="_blank" rel="noopener noreferrer" className="bg-card hover:bg-secondary/30 transition-colors rounded-[20px] p-4 border border-border/60 flex items-center justify-between gap-4 shadow-sm group">
                              <div className="flex-1">
                                <h4 className="font-bold text-sm uppercase tracking-widest mb-1 text-foreground">View Project File</h4>
                                <p className="text-[13px] text-muted-foreground leading-snug">Scan or click to read full report</p>
                              </div>
                              <div className="bg-white p-2 rounded-[14px] shadow-sm shrink-0 border border-border/40 group-hover:scale-105 transition-transform">
                                <QRCode value={selectedProject.details.cta} size={70} />
                              </div>
                            </a>
                          </section>
                        )}
                      </div>

                      {/* Fallback for other projects that still use old fields */}
                      {!selectedProject.details.overview && selectedProject.details.objective && (
                        <section className="relative pl-6 border-l-2 border-primary">
                          <h4 className="text-xs uppercase font-black tracking-widest text-primary mb-3">Objective</h4>
                          <p className="text-sm md:text-[15px] font-medium leading-relaxed text-foreground/90">{selectedProject.details.objective}</p>
                        </section>
                      )}
                      
                      {/* Process & Highlights Fallback */}
                      {!selectedProject.details.impacts && selectedProject.details.process && (
                        <section className="bg-primary/[0.02] p-8 rounded-[2rem] border border-primary/5">
                          <div className="flex items-center gap-3 mb-4">
                            <Search className="w-5 h-5 text-primary" />
                            <h4 className="text-[10px] uppercase font-black tracking-[0.3em] text-primary/60">The Process & Highlights</h4>
                          </div>
                          <div className="text-muted-foreground leading-relaxed whitespace-pre-wrap text-sm md:text-[13px] prose prose-invert prose-sm max-w-none">
                            <div className="space-y-3">
                              {selectedProject.details.process.split('\n\n').map((para, idx) => {
                                if (para.startsWith('###')) {
                                  return <h5 key={idx} className="text-primary font-bold mt-6 mb-2">{para.replace('### ', '')}</h5>;
                                }
                                return (
                                  <div key={idx} className="space-y-2">
                                    {para.split('\n').map((line, lIdx) => {
                                      if (line.startsWith('- ')) {
                                        return (
                                          <div key={lIdx} className="flex gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                            <p>{line.substring(2).replace(/\*\*/g, '')}</p>
                                          </div>
                                        );
                                      }
                                      return (
                                        <p key={lIdx} className="mb-2">
                                          {line.replace(/\*\*/g, '')}
                                        </p>
                                      );
                                    })}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </section>
                      )}

                      {/* Highlights Fallback */}
                      {!selectedProject.details.impacts && selectedProject.details.highlights && !selectedProject.details.technical && !selectedProject.details.process && (
                        <section className="bg-primary/[0.02] p-8 rounded-[2rem] border border-primary/5">
                          <div className="flex items-center gap-3 mb-4">
                            <Zap className="w-5 h-5 text-primary" />
                            <h4 className="text-[10px] uppercase font-black tracking-[0.3em] text-primary/60">Highlights</h4>
                          </div>
                          <div className="text-muted-foreground leading-relaxed whitespace-pre-wrap text-sm md:text-[13px] prose prose-invert prose-sm max-w-none">
                            <div className="space-y-3">
                              {selectedProject.details.highlights.split('\n\n').map((para, idx) => {
                                if (para.startsWith('###')) {
                                  return <h5 key={idx} className="text-primary font-bold mt-6 mb-2">{para.replace('### ', '')}</h5>;
                                }
                                return (
                                  <div key={idx} className="space-y-2">
                                    {para.split('\n').map((line, lIdx) => {
                                      const parts = line.split(/(\*\*.*?\*\*|\*.*?\*)/);
                                      return (
                                        <p key={lIdx}>
                                          {line.replace(/\*\*/g, '').replace(/\*/g, '')}
                                        </p>
                                      );
                                    })}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </section>
                      )}

                      {/* Strategic Outcome Fallback */}
                      {!selectedProject.details.impacts && selectedProject.details.outcome && (
                        <section className="p-10 bg-primary/5 rounded-[2.5rem] border border-primary/10 shadow-sm">
                          <div className="flex items-center gap-3 mb-4">
                            <CheckCircle2 className="w-6 h-6 text-primary" />
                            <h4 className="text-[10px] uppercase font-black tracking-[0.3em] text-primary/60">The Strategic Outcome</h4>
                          </div>
                          <div className="text-foreground font-bold leading-relaxed whitespace-pre-wrap text-[15px] md:text-base font-serif">
                            <div className="space-y-3">
                              {selectedProject.details.outcome.split('\n\n').map((para, idx) => {
                                if (para.startsWith('###')) {
                                  return <h5 key={idx} className="text-primary font-bold mt-6 mb-2 font-serif text-2xl">{para.replace('### ', '')}</h5>;
                                }
                                return (
                                  <div key={idx} className="space-y-3">
                                    {para.split('\n').map((line, lIdx) => {
                                      if (line.startsWith('- ')) {
                                        return (
                                          <div key={lIdx} className="flex gap-4 items-start py-1">
                                            <div className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0 shadow-sm shadow-primary/20" />
                                            <p className="flex-1">{line.substring(2).replace(/\*\*/g, '').replace(/\*/g, '')}</p>
                                          </div>
                                        );
                                      }
                                      return (
                                        <p key={lIdx} className="mb-2 text-sm md:text-base leading-relaxed">
                                          {line.replace(/\*\*/g, '').replace(/\*/g, '')}
                                        </p>
                                      );
                                    })}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </section>
                      )}

                      {/* Impact & Conclusion Fallback */}
                      {!selectedProject.details.impacts && !selectedProject.details.outcome && (selectedProject.details.impact || selectedProject.details.conclusion) && (
                        <section className="p-10 bg-primary/5 rounded-[2.5rem] border border-primary/10 shadow-sm">
                          <div className="flex items-center gap-3 mb-4">
                            <Target className="w-6 h-6 text-primary" />
                            <h4 className="text-[10px] uppercase font-black tracking-[0.3em] text-primary/60">Impact & Conclusion</h4>
                          </div>
                          <div className="text-foreground font-bold leading-relaxed whitespace-pre-wrap text-[15px] md:text-base font-serif">
                            <div className="space-y-3">
                              {(selectedProject.details.impact || selectedProject.details.conclusion).split('\n\n').map((para, idx) => {
                                if (para.startsWith('###')) {
                                  return <h5 key={idx} className="text-primary font-bold mt-6 mb-2 font-serif text-2xl">{para.replace('### ', '')}</h5>;
                                }
                                return (
                                  <div key={idx} className="space-y-3">
                                    {para.split('\n').map((line, lIdx) => {
                                      if (line.startsWith('- ')) {
                                        return (
                                          <div key={lIdx} className="flex gap-4 items-start py-1">
                                            <div className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0 shadow-sm shadow-primary/20" />
                                            <p className="flex-1">{line.substring(2)}</p>
                                          </div>
                                        );
                                      }
                                      const parts = line.split(/(\*\*.*?\*\*|:)/);
                                      return (
                                        <p key={lIdx} className="mb-2 text-sm md:text-base leading-relaxed">
                                          {parts.map((part, pIdx) => {
                                            if (part.startsWith('**') && part.endsWith('**')) {
                                              return <span key={pIdx} className="text-primary underline decoration-primary/30 underline-offset-4">{part.slice(2, -2)}</span>;
                                            }
                                            if (part === ':') {
                                              return <span key={pIdx} className="text-primary font-black mx-1">:</span>;
                                            }
                                            return part;
                                          })}
                                        </p>
                                      );
                                    })}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </section>
                      )}

                    </div>

                        </div>

                    {/* Right Column: Visuals & QR */}
                    {hasImage && (
                          <div className="lg:col-span-4 flex flex-col gap-6">
                            {selectedProject.image && (
                        <div className="rounded-3xl overflow-hidden shadow-lg border border-border/50 relative group h-48 lg:h-auto lg:aspect-square">
                          <img src={selectedProject.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Project Cover" />
                          <div className="absolute inset-0 bg-primary/10 transition-colors group-hover:bg-transparent" />
                        </div>
                      )}

                      {selectedProject.details.cta && (
                        <a href={selectedProject.details.cta} target="_blank" rel="noopener noreferrer" className="bg-card hover:bg-secondary/30 transition-colors rounded-[24px] p-5 border border-border/60 flex items-center justify-between gap-4 shadow-sm group mt-auto">
                          <div className="flex-1">
                            <h4 className="font-bold text-sm uppercase tracking-widest mb-1 text-foreground">View Project File</h4>
                            <p className="text-[13px] text-muted-foreground leading-snug">Scan or click to read full report</p>
                          </div>
                          <div className="bg-white p-2 rounded-[14px] shadow-sm shrink-0 border border-border/40 group-hover:scale-105 transition-transform">
                            <QRCode value={selectedProject.details.cta} size={70} />
                          </div>
                        </a>
                            )}
                          </div>
                        )}

                      </div>
                      
                    </>
                    );
                  })()}
                </div>
              </motion.div>
            </motion.div>
          );
        })()}

      </AnimatePresence>


      <footer className="py-20 text-center border-t border-border/20">
        <p className="text-xs font-black tracking-[0.4em] text-primary/40 uppercase">Novia Amanda Dwiputri • 2026</p>
      </footer>
    </div>
  );
}