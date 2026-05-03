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

  const [selectedScienceProject, setSelectedScienceProject] = useState<any>(null);

  const [selectedExperience, setSelectedExperience] = useState<any>(null);
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
            <h4 className="text-[13px] md:text-sm font-bold mb-2 group-hover:text-primary transition-colors leading-tight line-clamp-2">{title}</h4>
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
              <h4 className="text-base md:text-lg font-bold mb-2 group-hover:text-primary transition-colors leading-tight">{title}</h4>
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
      const sections = ["about", "intro", "skills", "contact"];
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
      title: "Oil Spill Policy Documentation",
      role: "Policy Review",
      description: "Conducted a policy review of the PT PHE ONWJ oil spill incident for academic and stakeholder reference.",
      image: projectOcean,
      badge: "Oil Spill Research",
      details: {
        objective: "To investigate an unresolved real-world marine crisis, **2019 and 2021 oil spill incidents by PT Pertamina Hulu Energi Offshore North West Java (PHE ONWJ)**, evaluating corporate accountability against Indonesian environmental law and researching bioremediation as a sustainable, low-toxicity alternative to traditional chemical and physical responses.",
        highlights: "### Identification of an Unresolved Crisis\nInvestigated the root causes of two major spills—from the July 2019 gas bubble failure at well YYA-1 to the April 2021 subsea pipeline corrosion—which together severely impacted over **12 coastal villages**.\n\n### Legal & Policy Audit\nPerformed a rigorous analysis of corporate responses based on **Law No. 32 of 2009**, focusing on *Article 54 (Environmental Restoration)* and *Article 88 (Absolute Responsibility/Polluter Pays Principle)*.\n\n### Technical Critique\nEvaluated the limitations of physical and chemical responses, identifying that the use of chemical dispersants can lead to higher toxicity levels in marine ecosystems than the crude oil itself.\n\n### Bioremediation Research\nDeveloped a strategic alternative using a microbial consortium of **Bacillus subtilis** and **Pseudomonas putida**, capable of achieving **70–95% hydrocarbon removal** within a 1–2 month timeframe.",
        impact: "A comprehensive **investigative report and technical roadmap** proving that bioremediation is a viable, cost-effective, and low-impact solution for long-term industrial environmental recovery.",
        cta: "https://drive.google.com/file/d/1uKmiWsIIQ0ePt-EbW5AsxoFKdGKGj6rc/view?usp=sharing"
      }
    },
    {
      title: "SDGs Data Matrix",
      role: "Classified Database",
      description: "A classified database of 169 targets relevant to Renewable Energy and Bioremediation.",
      image: projectCarbon,
      badge: "Renewable Energy",
      details: {
        objective: "To conduct a comprehensive investigative analysis of the **169 UN SDG targets** to determine the technical and strategic alignment of bioremediation and renewable energy technologies with global sustainability goals.",
        highlights: "### Systems-Level Analysis\nEvaluated each of the 17 Sustainable Development Goals to identify where technical biological processes (bioremediation) intersect with **social, environmental, and economic targets**.\n\n### Evidence-Based Mapping\nSynthesized findings from over **10+ academic sources** (including *Bala et al., 2022* and *Arora, 2018*) to justify the relationship between microbial technology and specific targets like food security (**SDG 2**) and clean water (**SDG 6**).\n\n### Critical Evaluation\nBeyond identifying \"green\" benefits, I applied a rigorous lens to identify **\"no-relationship\" zones** (such as gender parity or financial regulations), ensuring a realistic and transparent assessment of the technology’s scope.\n\n### Multi-Pillar Integration\nAnalyzed the **\"Social\"** impact of environmental technology, such as how soil restoration directly improves agricultural productivity for small-scale farmers (**Target 2.3**).",
        impact: "The result is a **169-target classified matrix** that serves as a strategic reference for how bioremediation acts as a catalyst for:\n\n- **Resource Security**: Enhancing food safety and water accessibility through the removal of heavy metals and pollutants.\n- **Decarbonization**: Linking phytoremediation to the production of clean biofuels, contributing to a **14% potential share** of global energy demand.\n- **Responsible Industry**: Providing a low-cost, low-energy alternative for industrial waste management and urban air quality (**Target 11.6**).",
        cta: "https://docs.google.com/spreadsheets/d/1am_qHhNfdAHt1lKa04R2J-6WCauwCrZykGl6GdBuGeY/edit?usp=sharing"
      }
    },
    {
      title: "The Biological Exhibition",
      role: "Leadership",
      description: "Leadership of a 50+ member team for a biodiversity-focused educational event for 300+ participants.",
      image: heroBg,
      badge: "Conservation Education",
      details: {
        objective: "To lead a high-stakes educational initiative designed to bridge the gap between biological research and community awareness through strategic large-scale coordination.",
        highlights: "### Team Governance\nDirected a 50+ member multidisciplinary team, managing the end-to-end project lifecycle from initial logistics to final educational content design.\n\n### Resource Coordination\nOversaw complex registration systems, participant documentation, and venue logistics to ensure seamless execution for hundreds of stakeholders.\n\n### Content Integration\nFacilitated the curation of biological photography and imaging from the team, transforming raw field data into an engaging public exhibition focused on the Padjadjaran University Arboretum.\n\n### Quality Assurance\nImplemented a rigorous internal evaluation process to ensure all educational materials met high academic and professional standards.",
        impact: "### Large-Scale Engagement\nSuccessfully delivered the program to 300+ participants, significantly increasing local awareness of regional biodiversity and ecological conservation.\n\n### Performance Excellence\nAchieved an A-grade evaluation for project execution and a 93% positive feedback score from participants.\n\n### Professional Leadership\nDemonstrated the ability to manage large human systems and complex data sets, providing a foundation for future corporate ESG coordination.",
        cta: "https://www.youtube.com/watch?v=AVgHvqpRUOA"
      }
    }
  ];

  const combinedJourney = [
    {
      role: "B2B Project Officer",
      company: "Binar Academy",
      type: "Professional Experience",
      period: "Sept 2024 – Nov 2024",
      description: "Managed logistics and documentation for employee innovation bootcamp, achieving 4.6/5 participant satisfaction.",
      details: {
        role: "Role: B2B Project Officer",
        objective: "To lead the governance and execution of employee innovation bootcamps, driving cross-functional engagement and internal social development through rigorous project management.",
        highlights: "### Operational Governance\nManaged the end to end lifecycle of **logistics, schedules, and documentation** for a specialized innovation bootcamp.\n\n### Stakeholder Coordination\nFacilitated internal social development and cross-functional engagement for **18 participants**, ensuring seamless project flow.\n\n### Deliverable Management\nMaintained a high volume of **20+ program deliverables**, ensuring every milestone met corporate quality standards.\n\n### Proactive Communication\nExecuted a **stakeholder communication strategy** that ensured transparency and alignment throughout the event execution.",
        impact: "### Excellence in Execution\nAchieved a **4.6/5 participant satisfaction score**, proving the efficacy of the event’s design and logistical management.\n\n### Organizational Development\nSuccessfully fostered a **collaborative environment** that strengthened internal bonds and social engagement within the cohort.\n\n### Quality Assurance\nDelivered **100% of program requirements** on schedule, establishing a baseline for professional B2B service delivery."
      }
    },
    {
      role: "Employee Innovation Project Officer",
      company: "Bank Syariah Indonesia",
      type: "Professional Experience",
      period: "Dec 2023 – Mar 2024",
      description: "Directed company-wide innovation program for 17,000+ participants, increasing program satisfaction by 15%.",
      details: {
        role: "Role: Project Officer (Employee Innovation)",
        objective: "To direct the end-to-end execution of a company-wide innovation program for a top-tier financial institution, ensuring strategic alignment between corporate growth and massive-scale participant engagement.",
        highlights: "### Operational Governance\nDirected the management of a **17,000+ participant pool**, overseeing the complex logistics of registration, data verification, and communication flows to foster a culture of corporate innovation.\n\n### Investigative Feedback Synthesis\nApplied a researcher’s lens to analyze participant sentiment and program data, identifying friction points to optimize the user experience.\n\n### Stakeholder Liaison\nServed as the primary bridge between technical innovation teams and executive leadership, optimizing vendor management and logistics for executive-level demo days.\n\n### Data-Driven Reporting\nDeveloped comprehensive performance reports for the board of directors, translating raw engagement numbers into actionable strategic insights.",
        impact: "### Strategic Growth\nSuccessfully increased overall program satisfaction by **15%** through targeted improvements in communication and logistical coordination.\n\n### Scaled Impact\nManaged one of the largest talent innovation programs in the Indonesian banking sector, proving the capacity to maintain rigorous standards under massive organizational scale.\n\n### Efficiency Gains\nStreamlined the documentation and verification process for **thousands of concurrent users**, reducing administrative bottlenecks for high-stakes deliverables."
      }
    },
    {
      role: "Vice President of Branding",
      company: "Student Energy at Padjadjaran University",
      type: "Community Leadership",
      period: "Jun 2023 – Dec 2023",
      description: "Directed Renewable Energy advocacy and youth awareness, building partnerships with 3 renewable energy stakeholders.",
      details: {
        role: "Role: Vice President of Branding",
        objective: "To direct large-scale communication strategies and build strategic partnerships that accelerate renewable energy literacy and stakeholder engagement.",
        highlights: "### Cross-Functional Leadership\nDirected diverse, multidisciplinary teams to design and deliver **large-scale renewable energy advocacy programs**.\n\n### Strategic Partnership Building\nFormulated and executed a networking strategy that secured **three high-value partnerships** with renewable energy and youth-led stakeholders, expanding the organization’s professional ecosystem.\n\n### Digital Infrastructure Management\nOversaw the governance of digital communication platforms to ensure consistent messaging and high-impact outreach across all stakeholder groups.\n\n### Training & Capacity Building\nFacilitated the development of educational content designed to translate **complex energy transition data** into actionable insights for the community.",
        impact: "### Measurable Network Expansion\nSuccessfully expanded the organization’s total digital reach by **15%** through targeted branding and engagement strategies.\n\n### Community Growth\nBoosted active community engagement by **30%**, turning passive followers into active advocates for the energy transition.\n\n### Stakeholder Value\nDelivered a professional-grade networking framework that bridged the gap between student innovators and industrial energy leaders."
      }
    },
    {
      role: "B2B Project Officer",
      company: "Binar Academy",
      type: "Professional Experience",
      period: "Aug 2023 – Dec 2023",
      description: "Executed 7 student-centric training programs, reducing operational costs by 10% and improving outcomes by 20%.",
      details: {
        role: "Role: B2B Project Officer",
        objective: "To execute large scale training programs that bridge the gap between student needs and organizational social impact goals while maximizing operational resource efficiency.",
        highlights: "### Program Engineering\nExecuted **7 student-centric training programs**, focusing on aligning participant development with broader social impact objectives.\n\n### Database Leveraging\nUtilized feedback databases to identify performance gaps and drive **evidence-based program improvements**.\n\n### Resource Optimization\nManaged operational workflows to maximize output while maintaining high standards of educational quality.\n\n### Cross-Functional Leadership\nCoordinated between diverse learning tracks to ensure a **unified and consistent experience** for all participants.",
        impact: "Financial Efficiency\nSuccessfully reduced operational costs by 10% through strategic resource management and workflow optimization.\n\n### Outcome Improvement\nImproved overall participant outcomes by 20%, demonstrating the power of data-driven instructional adjustments.\n\n Total Engagement\nAchieved **100% participant engagement** across multiple learning tracks, proving the programs' relevance and quality."
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
              { id: "intro", label: "About" },
              { id: "skills", label: "Capabilities & Experience" }
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
                  <p className="text-muted-foreground text-lg italic border-l-4 border-primary pl-6 py-2">I bridge research and execution—so sustainability strategies don't just exist, but work in practice.</p>
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
      {/* Capabilities & Experience Section */}
      <section id="skills" className="pt-32 container mx-auto px-6">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-5xl font-serif font-bold mb-6 italic text-[#2e5c43]">Capabilities & Experience.</h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto mb-8">I turn analysis, research, and strategy into measurable sustainability impact.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["ESG Analysis & Reporting", "Carbon Accounting", "Materiality Assessment", "Environmental Systems Analysis", "Project & Stakeholder Management", "Data Analysis & Reporting", "Sustainability Strategy Execution"].map((skill, idx) => (
              <Badge key={idx} variant="secondary" className="px-4 py-2 rounded-full text-sm font-medium bg-primary/5 text-primary border-primary/20">{skill}</Badge>
            ))}
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
                        onClick={() => setSelectedScienceProject(item)}
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
                        onClick={() => setSelectedExperience(exp)}
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
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Let's Turn Sustainability Insights <br /><span className="text-primary italic">into Impact.</span></h2>
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
          
          if (bootcampProjects.find(p => p.title === selectedProject.title)) {
            currentArray = bootcampProjects;
          } else if (scienceProjects.find(p => p.title === selectedProject.title)) {
            currentArray = scienceProjects;
          }

          if (currentArray.length > 0) {
            currentIndex = currentArray.findIndex(p => p.title === selectedProject.title);
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
                className="bg-card w-[95vw] max-w-7xl h-[90vh] max-h-[850px] overflow-hidden rounded-[2rem] shadow-2xl border border-border/50 relative flex flex-col"
                onClick={e => e.stopPropagation()}
              >
                {/* Header Area */}
                <div className="flex-none p-6 md:p-8 border-b border-border/40 flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <button onClick={() => setSelectedProject(null)} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-bold uppercase tracking-wider mb-4">
                      <CornerUpLeft className="w-4 h-4" /> Back to Portfolio
                    </button>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {selectedProject.tags ? selectedProject.tags.map((tag, i) => (
                        <Badge key={i} className="bg-primary/10 text-primary border-none px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{tag}</Badge>
                      )) : (
                        <Badge className="bg-primary/10 text-primary border-none px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{selectedProject.category || selectedProject.badge || selectedProject.type}</Badge>
                      )}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground leading-tight max-w-4xl">{selectedProject.title}</h3>
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
                <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 h-full">
                    
                    {/* Left Column: Details */}
                    <div className="lg:col-span-8 space-y-10">
                      
                      {/* Overview */}
                      {selectedProject.details.overview && (
                        <section className="relative pl-6 border-l-2 border-primary">
                          <h4 className="text-xs uppercase font-black tracking-widest text-primary mb-3">Overview</h4>
                          <p className="text-lg md:text-xl font-medium leading-relaxed text-foreground/90">{selectedProject.details.overview}</p>
                        </section>
                      )}

                      {/* Impacts */}
                      {selectedProject.details.impacts && (
                        <section>
                          <div className="flex items-center gap-3 mb-6">
                            <Zap className="w-5 h-5 text-primary" />
                            <h4 className="text-xs uppercase font-black tracking-widest text-primary">Key Impact</h4>
                          </div>
                          <div className="grid md:grid-cols-2 gap-6">
                            {selectedProject.details.impacts.map((impact, idx) => (
                              <div key={idx} className="bg-secondary/30 p-6 rounded-2xl border border-border/40 hover:border-primary/30 transition-colors group">
                                <div className="text-[10px] uppercase font-bold tracking-wider text-primary mb-2 group-hover:underline decoration-primary/30 underline-offset-4">{impact.subtitle}</div>
                                <h5 className="font-bold text-base mb-3 leading-tight text-foreground">{impact.title}</h5>
                                <p className="text-sm text-muted-foreground">{impact.description}</p>
                              </div>
                            ))}
                          </div>
                        </section>
                      )}

                      {/* Selected Approach */}
                      {selectedProject.details.approach && (
                        <section>
                          <div className="flex items-center gap-3 mb-6">
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                            <h4 className="text-xs uppercase font-black tracking-widest text-primary">Selected Approach</h4>
                          </div>
                          <div className="bg-primary/[0.02] p-6 md:p-8 rounded-[2rem] border border-primary/10">
                            <ul className="space-y-4">
                              {selectedProject.details.approach.map((point, idx) => (
                                <li key={idx} className="flex gap-4">
                                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                  </div>
                                  <p className="text-[15px] text-foreground/80 font-medium leading-relaxed">{point}</p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </section>
                      )}

                      {/* Fallback for other projects that still use old fields */}
                      {!selectedProject.details.overview && selectedProject.details.objective && (
                        <section className="relative pl-6 border-l-2 border-primary">
                          <h4 className="text-xs uppercase font-black tracking-widest text-primary mb-3">Objective</h4>
                          <p className="text-lg md:text-xl font-medium leading-relaxed text-foreground/90">{selectedProject.details.objective}</p>
                        </section>
                      )}
                      
                      {/* Process & Highlights Fallback */}
                      {!selectedProject.details.impacts && selectedProject.details.process && (
                        <section className="bg-primary/[0.02] p-8 rounded-[2rem] border border-primary/5">
                          <div className="flex items-center gap-3 mb-6">
                            <Search className="w-5 h-5 text-primary" />
                            <h4 className="text-[10px] uppercase font-black tracking-[0.3em] text-primary/60">The Process & Highlights</h4>
                          </div>
                          <div className="text-muted-foreground leading-relaxed whitespace-pre-wrap text-sm md:text-[13px] prose prose-invert prose-sm max-w-none">
                            <div className="space-y-4">
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
                          <div className="flex items-center gap-3 mb-6">
                            <Zap className="w-5 h-5 text-primary" />
                            <h4 className="text-[10px] uppercase font-black tracking-[0.3em] text-primary/60">Highlights</h4>
                          </div>
                          <div className="text-muted-foreground leading-relaxed whitespace-pre-wrap text-sm md:text-[13px] prose prose-invert prose-sm max-w-none">
                            <div className="space-y-4">
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
                          <div className="flex items-center gap-3 mb-6">
                            <CheckCircle2 className="w-6 h-6 text-primary" />
                            <h4 className="text-[10px] uppercase font-black tracking-[0.3em] text-primary/60">The Strategic Outcome</h4>
                          </div>
                          <div className="text-foreground font-bold leading-relaxed whitespace-pre-wrap text-lg md:text-xl font-serif">
                            <div className="space-y-4">
                              {selectedProject.details.outcome.split('\n\n').map((para, idx) => {
                                if (para.startsWith('###')) {
                                  return <h5 key={idx} className="text-primary font-bold mt-6 mb-2 font-serif text-2xl">{para.replace('### ', '')}</h5>;
                                }
                                return (
                                  <div key={idx} className="space-y-4">
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
                          <div className="flex items-center gap-3 mb-6">
                            <Target className="w-6 h-6 text-primary" />
                            <h4 className="text-[10px] uppercase font-black tracking-[0.3em] text-primary/60">Impact & Conclusion</h4>
                          </div>
                          <div className="text-foreground font-bold leading-relaxed whitespace-pre-wrap text-lg md:text-xl font-serif">
                            <div className="space-y-4">
                              {(selectedProject.details.impact || selectedProject.details.conclusion).split('\n\n').map((para, idx) => {
                                if (para.startsWith('###')) {
                                  return <h5 key={idx} className="text-primary font-bold mt-6 mb-2 font-serif text-2xl">{para.replace('### ', '')}</h5>;
                                }
                                return (
                                  <div key={idx} className="space-y-4">
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

                    {/* Right Column: Visuals & QR */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                      {selectedProject.image && currentArray !== bootcampProjects && (
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

                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })()}

      </AnimatePresence>
      {/* Experience Deep Dive Modal */}
      <AnimatePresence>
        {selectedExperience && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-background/90 backdrop-blur-md"
            onClick={() => setSelectedExperience(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              className="bg-card w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl border border-border/50 relative p-8 md:p-16 custom-scrollbar"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedExperience(null)}
                className="absolute top-6 right-6 p-3 bg-background/80 hover:bg-background rounded-full transition-all z-50 shadow-md"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-wrap items-center gap-3 mb-8">
                <Badge className="bg-accent text-accent-foreground border-none px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">
                  {selectedExperience.type}
                </Badge>
                <Badge className="bg-secondary text-secondary-foreground border-none px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">
                  {selectedExperience.period}
                </Badge>
              </div>

              <div className="mb-12">
                <h3 className="text-3xl md:text-5xl font-serif font-bold mb-3 text-foreground">{selectedExperience.role}</h3>
                <h4 className="text-xl md:text-2xl font-serif italic text-primary">{selectedExperience.company}</h4>
              </div>

              <div className="space-y-16">
                <section className="relative pl-8 border-l-2 border-primary/10">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <h4 className="text-[10px] uppercase font-black tracking-[0.3em] text-primary/60 mb-4">Strategic Objective</h4>
                  <p className="text-xl md:text-2xl font-medium leading-relaxed italic text-foreground/80">
                    "{selectedExperience.details.objective}"
                  </p>
                </section>

                <section className="grid gap-12">
                  <div>
                    <div className="flex items-center gap-3 mb-8">
                      <Zap className="w-5 h-5 text-primary" />
                      <h4 className="text-[10px] uppercase font-black tracking-[0.3em] text-primary/60">Execution & Highlights</h4>
                    </div>
                    <div className="text-muted-foreground leading-relaxed whitespace-pre-wrap text-base md:text-lg space-y-6">
                      <div className="space-y-4">
                        {selectedExperience.details.highlights.split('\n').map((line: string, lIdx: number) => {
                          const parts = line.split(/(\*\*.*?\*\*|:)/);
                          return (
                            <p key={lIdx}>
                              {parts.map((part, pIdx) => {
                                if (part.startsWith('**') && part.endsWith('**')) {
                                  return <span key={pIdx} className="text-primary font-bold">{part.slice(2, -2)}</span>;
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
                    </div>
                  </div>

                  <div className="p-10 md:p-12 bg-primary/5 rounded-[3rem] border border-primary/10 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                      <CheckCircle2 className="w-24 h-24 text-primary" />
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-8">
                        <Target className="w-6 h-6 text-primary" />
                        <h4 className="text-[10px] uppercase font-black tracking-[0.3em] text-primary/60">The Impact</h4>
                      </div>
                      <div className="text-foreground font-bold leading-relaxed whitespace-pre-wrap text-xl md:text-2xl font-serif italic">
                        <div className="space-y-4">
                          {selectedExperience.details.impact.split('\n').map((line: string, lIdx: number) => {
                            const parts = line.split(/(\*\*.*?\*\*|:)/);
                            return (
                              <p key={lIdx}>
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
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Science Project Modal */}
      <AnimatePresence>
        {selectedScienceProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-background/90 backdrop-blur-md"
            onClick={() => setSelectedScienceProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              className="bg-card w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl border border-border/50 relative flex flex-col md:flex-row"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedScienceProject(null)}
                className="absolute top-6 right-6 p-3 bg-background/80 hover:bg-background rounded-full transition-all z-50 shadow-md"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full md:w-2/5 h-48 md:h-auto relative group overflow-hidden">
                <a href={selectedScienceProject.details.cta} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative">
                  <img src={selectedScienceProject.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={selectedScienceProject.title} />
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white backdrop-blur-sm">
                    <ExternalLink className="w-10 h-10 mb-2" />
                    <span className="font-bold uppercase tracking-widest text-xs">Preview Project Files</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent md:bg-gradient-to-r" />
                </a>
              </div>

              <div className="w-full md:w-3/5 p-8 md:p-16 overflow-y-auto custom-scrollbar">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <Badge className="bg-primary/10 text-primary border-none px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                    {selectedScienceProject.badge}
                  </Badge>
                  {selectedScienceProject.details.cta && (
                    <Button variant="outline" size="sm" className="rounded-full border-primary/20 text-xs h-8 hover:bg-primary/5" asChild>
                      <a href={selectedScienceProject.details.cta} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 w-3.5 h-3.5" /> Open Document
                      </a>
                    </Button>
                  )}
                </div>

                <h3 className="text-3xl md:text-5xl font-serif font-bold mb-10 leading-tight text-foreground">{selectedScienceProject.title}</h3>

                <div className="space-y-12">
                  <section className="relative pl-8 border-l-2 border-primary/10">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <h4 className="text-[10px] uppercase font-black tracking-[0.3em] text-primary/60 mb-4">Research Objective</h4>
                    <p className="text-lg md:text-xl font-medium leading-relaxed italic text-foreground/90">
                      "{selectedScienceProject.details.objective}"
                    </p>
                  </section>

                  <section className="bg-primary/[0.02] p-8 rounded-[2rem] border border-primary/5">
                    <div className="flex items-center gap-3 mb-6">
                      <Globe className="w-5 h-5 text-primary" />
                      <h4 className="text-[10px] uppercase font-black tracking-[0.3em] text-primary/60">Program Highlights</h4>
                    </div>
                    <div className="text-muted-foreground leading-relaxed whitespace-pre-wrap text-sm md:text-[13px] prose prose-invert prose-sm max-w-none">
                      <div className="space-y-4">
                        {selectedScienceProject.details.highlights.split('\n\n').map((para: string, idx: number) => {
                          if (para.startsWith('###')) {
                            return <h5 key={idx} className="text-primary font-bold mt-6 mb-2">{para.replace('### ', '')}</h5>;
                          }
                          return (
                            <div key={idx} className="space-y-2">
                              {para.split('\n').map((line: string, lIdx: number) => {
                                if (line.startsWith('- ')) {
                                  return (
                                    <div key={lIdx} className="flex gap-3">
                                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                      <p>{line.substring(2).replace(/\*\*/g, '')}</p>
                                    </div>
                                  );
                                }
                                return (
                                  <p key={lIdx} className="mb-2 leading-relaxed">
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

                  <section className="p-10 bg-primary/5 rounded-[2.5rem] border border-primary/10 shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                      <ShieldCheck className="w-6 h-6 text-primary" />
                      <h4 className="text-[10px] uppercase font-black tracking-[0.3em] text-primary/60">Impact / Outcome</h4>
                    </div>
                    <div className="text-foreground font-bold leading-relaxed whitespace-pre-wrap text-lg md:text-xl font-serif italic">
                      <div className="space-y-4">
                        {selectedScienceProject.details.impact.split('\n\n').map((para: string, idx: number) => {
                          if (para.startsWith('###')) {
                            return <h5 key={idx} className="text-primary font-bold mt-6 mb-2">{para.replace('### ', '')}</h5>;
                          }
                          return (
                            <div key={idx} className="space-y-4">
                              {para.split('\n').map((line: string, lIdx: number) => {
                                if (line.startsWith('- ')) {
                                  return (
                                    <div key={lIdx} className="flex gap-4 items-start py-1">
                                      <div className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0" />
                                      <p className="flex-1">{line.substring(2).replace(/\*\*/g, '')}</p>
                                    </div>
                                  );
                                }
                                return (
                                  <p key={lIdx} className="leading-relaxed">
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