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
import profileImg from "@/assets/images/profile.jpg";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const [selectedScienceProject, setSelectedScienceProject] = useState<any>(null);

  const [selectedExperience, setSelectedExperience] = useState<any>(null);
  const [expandedScience, setExpandedScience] = useState(false);
  const [expandedJourney, setExpandedJourney] = useState(false);

  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
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
      description: "Carbon Accounting: Conducted Greenhouse Gas (GHG) emission inventories and simplified calculations for corporate operations.",
      image: projectCarbon,
      icon: <BarChart3 className="w-5 h-5" />,
      details: {
        problem: "Corporate operations often lack clear visibility into their indirect emission sources, leading to incomplete sustainability disclosures.",
        methodology: "GHG Protocol Corporate Standard, simplified emission factors for scope 1 and 2 emissions.",
        conclusion: "Identified that energy-intensive office cooling accounted for 65% of indirect emissions, suggesting targeted renewable energy procurement.",
        objective: "To demonstrate technical mastery of the GHG Protocol by calculating and classifying carbon emissions across complex industrial scenarios, specifically for the Finance and Mining sectors.",
        technical: "Scope Classification\nI accurately categorized organizational activities into the three standard reporting tiers:\n- Scope 1 (Direct): Diesel combustion from onsite gensets.\n- Scope 2 (Indirect): Purchased electricity from the national grid.\n- Scope 3 (Value Chain): Downstream impacts, focusing on aviation-based business travel.\n\nQuantification Methodology\nApplied a rigorous investigative approach using the standard carbon accounting formula:\n GHG Emission = Data Aktivitas * EF * Global Warming Potential*\n\n### Renewable Energy Integration\nAnalyzed the decarbonization impact of a **2,000 kWp solar panel system**, calculating how it offsets direct grid dependence and reduces overall Scope 2 totals.",
        highlights: "### Financial Sector Simulation\nCalculated the monthly footprint for a 10-branch network consuming *1,000,000 kWh* and *5,000 liters* of diesel.\n\n### Mining Sector Simulation\nModeled high-intensity emissions for a facility consuming *3.4 million kWh* and *1 million liters* of diesel per month.",
        impact: "Analytical Accuracy\nEnsured all outputs were measured in **ton CO2eq**, aligning with international sustainability reporting requirements.",
        cta: "https://docs.google.com/document/d/1gZ2QhxNor1ai8Lnx121xVPXr238DJ-8B0W6V-WxQq98/edit?usp=drive_link"
      }
    },
    {
      id: "greenwash",
      title: "Greenwashing Risk & Compliance",
      category: "Strategic Analysis",
      description: "Greenwashing Risk & Compliance Analysis: Analyzed corporate disclosures against GRI 2021 standards to identify potential greenwashing risks and verify alignment with sustainability commitments.",
      image: heroBg,
      icon: <ShieldCheck className="w-5 h-5" />,
      details: {
        problem: "Vague environmental claims in annual reports often misalign with actual project implementation, creating legal and reputational risks.",
        methodology: "GRI 2021 Disclosure Gap Analysis, verification against external sustainability commitments.",
        conclusion: "Found discrepancies in 'Net Zero' timelines where carbon offsets were prioritized over absolute reduction strategies.",
        objective: "To analyze corporate sustainability disclosures for **Bayan Resources** against GRI 2021 Standards, identifying specific greenwashing risks and verifying if operational activities truly align with their stated environmental and social commitments.",
        process: "### Investigative Disclosure Audit\nPerformed a deep-dive audit of the 2023 Sustainability Report for Bayan Resources, scrutinizing the **\"Evidence Gaps\"** between their public narratives and their technical performance data.\n\n### Compliance Screening\nEvaluated the company against **GRI 2** (General Disclosures) and **GRI 3** (Material Topics) to detect common greenwashing red flags, such as *\"Selective Disclosure\"* or *\"Vague Commitments\"* regarding their core environmental impact.\n\n### Sector-Specific Analysis (Mining)\n- **The Narrative Risk**: Analyzed how Bayan Resources emphasizes social programs and land reclamation while potentially providing less granular, year-by-year data on Scope 1 and 2 emissions or direct biodiversity loss.\n- **Accountability Check**: Investigated the presence (or absence) of time-bound, measurable targets for decarbonization, contrasting active programs with the lack of a clear, verifiable roadmap to Net Zero.\n- **Operational Verification**: Analyzed whether community-focused programs (Social pillar) were being used as a *\"green distraction\"* to shift focus away from the inherent environmental risks of coal mining operations.",
        outcome: "The project resulted in a **Forensic ESG Audit Report** that provided:\n\n- **Risk Identification**: A technical breakdown of where corporate narratives failed to provide the quantitative evidence required by **GRI 302 (Energy)**, **GRI 304 (Biodiversity)**, and **GRI 305 (Emissions)**.\n- **Governance Corrective Actions**: Developed a series of recommendations for how Bayan Resources to improve transparency by adopting the target-setting rigor required for investor-grade reporting.\n- **Strategic Compliance Roadmap**: Proved that for a mining firm to be *\"future-proof,\"* it must move away from general CSR storytelling and toward the goal-based outcomes mandated by **SEOJK 16**.",
        cta: "https://drive.google.com/file/d/1WZw56we-EUp-oZzYIsnBeccswmaNp4KM/view?usp=sharing"
      }
    },
    {
      id: "materiality",
      title: "Strategic Program Alignment",
      category: "ESG Strategy",
      description: "Strategic Program Alignment: Mapped corporate initiatives to relevant GRI materiality topics and evaluate the consistency between program implementation and company sustainability strategy.",
      image: projectReport,
      icon: <FileText className="w-5 h-5" />,
      details: {
        problem: "CSR programs often operate in silos, disconnected from the core business's most significant environmental and social impacts.",
        methodology: "Double Materiality Assessment, Stakeholder Engagement Matrix.",
        conclusion: "Proposed realigning the community fund toward water sanitation projects to match the company's high local water dependency.",
        objective: "To perform a rigorous strategic audit of a corporate campaign to evaluate its disclosure quality against **GRI 2021 Materiality Topics** and determine if it authentically fulfills the company’s stated sustainability commitments.",
        process: "### Investigative Program Audit\nI selected **SheHacks 2023**, a program by Indosat Ooredoo Hutchison designed to reduce the gender gap in Indonesia’s tech industry by providing mentorship and funding to female entrepreneurs.\n\n### GRI Materiality Mapping\nI conducted a deep-dive analysis to find the technical *\"address\"* for this social program within the GRI 2021 framework:\n- **Social (S): GRI 413 (Local Communities)**: Evaluated how the program functions as a community engagement tool that drives local economic inclusion.\n- **Governance (G): GRI 3-3 (Management of Material Topics)**: Analyzed how Indosat manages *\"Digital Inclusion\"* as a material topic to mitigate social risk and drive sustainable growth.\n\n### Commitment Verification\nI investigated whether this program truly answered Indosat’s sustainability pillar of **\"Digital Nation,\"** verifying that the initiative provides the evidence required to back up their high-level ESG claims.",
        outcome: "The result is a **Strategic Alignment Matrix** that provides a blueprint for authentic corporate transparency:\n\n- **Verified Social Impact**: Successfully translated a *\"Community Development\"* campaign into a technical disclosure, proving that female empowerment is a measurable driver of ESG performance.\n- **Governance Audit**: Provided a clear rationale for how Indosat uses digital literacy as a tool to meet **GRI 413** requirements for social responsibility to local communities.\n- **Strategic Roadmap**: Demonstrated that the program is not just a *\"cost center\"* but a core component of Indosat's long-term commitment to a more inclusive digital economy in Indonesia.",
        cta: "https://drive.google.com/file/d/1kQBjhYNLxetBqvWydqxV9TLtePyljhf_/view?usp=sharing"
      }
    },
    {
      id: "benchmarking",
      title: "Sustainability Reporting Benchmarking",
      category: "Disclosure Quality",
      description: "Sustainability Reporting & Framework Benchmarking: Benchmarked disclosure quality between two companies against GRI 2021 and SASB standards to determine the relationship between strategic reporting and ESG ratings.",
      image: projectReport,
      icon: <Search className="w-5 h-5" />,
      details: {
        problem: "Companies often struggle to understand how their disclosures impact their ESG ratings relative to industry peers.",
        methodology: "GRI 2021 vs. SASB Comparison Framework.",
        conclusion: "Telkomsel showed higher quantitative transparency in data privacy compared to Indosat, leading to better social pillar scores.",
        objective: "To conduct a comparative technical audit of the sustainability reports of two leading telecommunications providers (**Telkomsel** and **Indosat Ooredoo Hutchison**) to evaluate their disclosure quality against **GRI 2021** and **SASB** standards and determine the direct relationship between strategic reporting and global **ESG Ratings**.",
        process: "### Investigative Benchmarking\nI performed a deep-dive analysis of the 2022–2023 disclosures for both companies, comparing how each organization manages industry-specific material risks.\n\n### Dual-Framework Mapping\nI audited the reports across two critical international standards to ensure a holistic evaluation:\n- **GRI 2021 (Impact-Focused)**: Evaluated how each company reports its multi-pillar impact on the economy, environment, and people.\n- **SASB (Investor-Focused)**: Focused on the Telecommunications Services Standard, specifically auditing disclosures on *Data Privacy, Data Security, and Product End-of-Life Management*.\n\n### ESG Rating Correlation\nI researched the external ESG scores, **Sustainalytics** used by IDX, for both firms to verify if superior disclosure quality—such as Telkomsel’s comprehensive Greenhouse Gas (GHG) reporting—resulted in a higher market rating.\n\n### Gap Analysis\nI identified critical *\"blind spots\"* in reporting, such as using year-by-year benchmarks to prove genuine progress toward net-zero and social inclusion goals.",
        outcome: "The project resulted in a **Strategic Reporting Audit** that provides:\n\n- **Compliance Leadership Assessment**: Evidence that Telkomsel’s integration of national regulations into their corporate strategy provides a more *\"future-proof\"* ESG profile than Indosat’s.\n- **Transparency Gap Analysis**: A technical breakdown showing that *\"telling a story\"* (Indosat) is not a substitute for *\"setting a target\"* (Telkomsel) when it comes to investor-grade reporting.\n- **Governance Roadmap**: A series of recommendations for how telecommunications firms can bridge the gap between reporting on activities and reporting on goal-based outcomes.",
        cta: "https://drive.google.com/file/d/1taLIHKW7spFJQ25edL6yrQIV6YcI_7Od/view?usp=sharing"
      }
    },
    {
      id: "report-dev",
      title: "Sustainability Report Development",
      category: "Reporting Frameworks",
      description: "Data Collection & Sustainability Report Development: Conducted end-to-end data collection and report structure for a telecommunications sector sustainability report in compliance with SEOJK 16 and GRI 2021 requirements.",
      image: projectReport,
      icon: <CheckCircle2 className="w-5 h-5" />,
      details: {
        problem: "Merging SEOJK 16 (local) and GRI 2021 (global) requirements into a single, cohesive reporting structure.",
        methodology: "SEOJK 16 & GRI 2021 Integration Mapping.",
        conclusion: "Streamlined data collection by 20% by creating a unified template that satisfied both regulatory and international standards.",
        objective: "To develop a comprehensive, **\"dummy\" 2025 Sustainability Report for Telkom Indonesia** by performing quantitative data forensics on historical disclosures (2022–2024) and applying trend-based forecasting to ensure strategic GRI compliance.",
        process: "### Investigative Data Collection\nConducted a deep-dive analysis of Telkom’s 2024 Sustainability Report to extract multi-year quantitative performance metrics across the **E, S, and G pillars**.\n\n### Predictive Trend Modeling\nUsed a researcher’s lens to analyze historical performance patterns and project **2025 data points**, transforming a static report into a forward-looking strategic model.\n\n### Customized GRI Framework\nSelected and implemented industry-specific GRI standards to address the material risks unique to the telecommunications sector:\n- **Foundational Standards**: General Disclosures (GRI 2-1 to 2-5, 2-7, 2-8, 2-29) and Materiality Analysis (GRI 3-1, 3-2, 3-3).\n- **Governance (G)**: Investigated metrics for Anti-corruption (GRI 205) and Anti-competitive Behavior (GRI 206) to ensure corporate integrity.\n- **Environmental (E)**: Quantified impacts for Energy (GRI 302), Emissions (GRI 305), and Waste (GRI 306).\n- **Social (S)**: Focused on Employment (GRI 401), Training (GRI 404), Diversity (GRI 405), and the industry-critical Customer Privacy (GRI 418).\n\n### Technical Compliance\nBridged the gap between raw data and professional disclosure requirements, ensuring the final report structure met the transparency expectations of **GRI 2021** and **SEOJK 16**.",
        outcome: "The project resulted in two high-stakes technical deliverables that serve as a professional model for corporate transparency:\n\n- **Consolidated ESG Data Matrix (2022–2025)**: A 4-year quantitative inventory that aligns historical data with projected 2025 performance. This matrix centralizes critical KPIs, transforming hundreds of pages of fragmented reporting into a single, scannable, and audit-ready data asset.\n- **GRI-Compliant Transparency Blueprint**: A structured Sustainability Report draft that maps corporate activities to international disclosure requirements. This deliverable proves the ability to translate complex *\"Social\"* and *\"Governance\"* data into the precise technical language required by global investors and the **SEOJK 16** regulatory framework.",
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
              { id: "skills", label: "Capabilities & Experience" },
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
            <p className="text-xl md:text-2xl font-medium text-primary leading-tight max-w-xl mb-10">
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
                  <p>With a background in Biology, I bring a rigorous, investigative approach to analyzing complex systems. I connect data to real-world decisions, identifying risks, opportunities, and pathways for sustainable growth.</p>
                  <p>Beyond research, I've led initiatives reaching 17,000+ beneficiaries, turning insights into programs that create measurable impact.</p>
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
      <section id="skills" className="py-32 container mx-auto px-6">
        <motion.div {...fadeIn} className="text-center mb-24">
          <h2 className="text-5xl font-serif font-bold mb-6 italic">Capabilities & Experience.</h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto mb-8">I turn analysis, research, and strategy into measurable sustainability impact.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["ESG Analysis & Reporting", "Carbon Accounting", "Materiality Assessment", "Environmental Systems Analysis", "Project & Stakeholder Management", "Data Analysis & Reporting", "Sustainability Strategy Execution"].map((skill, idx) => (
              <Badge key={idx} variant="secondary" className="px-4 py-2 rounded-full text-sm font-medium bg-primary/5 text-primary border-primary/20">{skill}</Badge>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Engagement Gallery (ESG Projects) */}
      <section id="projects" className="pt-10">
        <div className="container mx-auto">
          

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="md:col-span-2 lg:col-span-3 mb-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-primary" />
              <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-primary">01 — ESG & Sustainability Analysis</h3>
            </div>
            <p className="text-2xl font-serif italic text-muted-foreground">Analyzing ESG risks, performance, and disclosures to drive better decisions.</p>
          </div>
          
          {bootcampProjects.map((project, idx) => (
            <motion.div 
              key={idx} 
              {...fadeIn} 
              whileHover={{ y: -4 }}
              onClick={() => setSelectedProject(project)}
              className="group bg-card rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-border/50"
            >
              <div className="p-8">
                <div className="flex items-center gap-3 text-primary mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {project.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors min-h-[3.5rem] leading-tight">{project.title}</h4>
                <div className="flex flex-wrap gap-2 mt-8">
                  <Badge variant="secondary" className="bg-secondary/50 text-secondary-foreground text-xs font-medium px-3 py-1">
                    {project.category}
                  </Badge>
                </div>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 relative">
            <div className="md:col-span-2 lg:col-span-3 mb-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-px bg-primary" />
                <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-primary">02 — Scientific Research & Environmental Systems</h3>
              </div>
              <p className="text-2xl font-serif italic text-muted-foreground">Applying scientific rigor to understand environmental systems and inform sustainability decisions.</p>
            </div>
            
            <AnimatePresence>
              {(expandedScience ? scienceProjects : scienceProjects.slice(0, 3)).map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedScienceProject(item)}
                  whileHover={{ y: -4 }}
                  className="group bg-card rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-border/50"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-3 text-primary mb-6">
                      <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Globe className="w-6 h-6" />
                      </div>
                    </div>
                    <h4 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors min-h-[3.5rem] leading-tight">{item.title}</h4>
                    <div className="flex flex-wrap gap-2 mt-8">
                      <Badge variant="secondary" className="bg-secondary/50 text-secondary-foreground text-xs font-medium px-3 py-1">
                        {item.badge}
                      </Badge>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {scienceProjects.length > 3 && (
              <div className="col-span-full flex justify-center mt-8">
                <Button 
                  variant="ghost" 
                  onClick={() => setExpandedScience(!expandedScience)}
                  className="text-primary font-bold hover:bg-primary/5 rounded-full px-6"
                >
                  {expandedScience ? "View Less ↑" : "View More →"}
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Professional Journey & Social Impact (Centered Timeline) */}
      <section id="journey" className="py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 relative">
            <div className="md:col-span-2 lg:col-span-3 mb-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-px bg-primary" />
                <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-primary">03 — Strategy & Impact Execution</h3>
              </div>
              <p className="text-2xl font-serif italic text-muted-foreground">Turning insights into programs that deliver measurable social and organizational impact.</p>
            </div>
            
            <AnimatePresence>
              {(expandedJourney ? combinedJourney : combinedJourney.slice(0, 3)).map((exp, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedExperience(exp)}
                  whileHover={{ y: -4 }}
                  className="group bg-card rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-border/50"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-3 text-primary mb-6">
                      <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Zap className="w-6 h-6" />
                      </div>
                    </div>
                    <h4 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors min-h-[3.5rem] leading-tight">{exp.role}</h4>
                    <p className="text-sm font-serif italic text-muted-foreground mb-6">{exp.company}</p>
                    <div className="flex flex-wrap gap-2 mt-8">
                      <Badge variant="secondary" className="bg-secondary/50 text-secondary-foreground text-xs font-medium px-3 py-1">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {combinedJourney.length > 3 && (
              <div className="col-span-full flex justify-center mt-8">
                <Button 
                  variant="ghost" 
                  onClick={() => setExpandedJourney(!expandedJourney)}
                  className="text-primary font-bold hover:bg-primary/5 rounded-full px-6"
                >
                  {expandedJourney ? "View Less ↑" : "View More →"}
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-32 container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Let's Turn Sustainability Insights <br /><span className="text-primary italic">into Impact.</span></h2>
            <p className="text-xl text-muted-foreground mb-12">Open to opportunities in ESG, sustainability strategy, research, and impact-driven project management.</p>
            <div className="space-y-6">
              <Button size="lg" className="w-full sm:w-auto rounded-full bg-primary h-16 px-8 text-lg font-bold" asChild>
                <a href="mailto:noviamnda09@gmail.com">Start a Conversation</a>
              </Button>
              <div className="flex items-center gap-4 pt-4">
                <a href="mailto:noviamnda09@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium">
                  <Mail className="w-5 h-5" /> Email Me
                </a>
                <div className="w-1 h-1 rounded-full bg-border" />
                <a href="https://linkedin.com/in/novia-amanda" target="_blank" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium">
                  <Linkedin className="w-5 h-5" /> LinkedIn
                </a>
                <div className="w-1 h-1 rounded-full bg-border" />
                <a href="https://docs.google.com/document/d/1dShDcLryJxTyye3mo5ZwpyfmGmqnxxPj/edit?usp=sharing&ouid=113258424421884384056&rtpof=true&sd=true" target="_blank" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium">
                  <Download className="w-5 h-5" /> Download CV
                </a>
              </div>
              <p className="text-sm text-muted-foreground pt-8 italic">I typically respond within 1–2 days.</p>
            </div>
          </motion.div>
          <motion.div {...fadeIn} className="bg-card p-10 rounded-[3rem] border border-border/50 shadow-sm">
             <div className="flex flex-col gap-8">
               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                   <Mail className="w-5 h-5" />
                 </div>
                 <div>
                   <p className="text-xs uppercase font-black tracking-widest text-muted-foreground mb-1">Direct Email</p>
                   <p className="text-lg font-bold">noviamnda09@gmail.com</p>
                 </div>
               </div>
               <div className="w-full h-px bg-border/50" />
               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                   <Linkedin className="w-5 h-5" />
                 </div>
                 <div>
                   <p className="text-xs uppercase font-black tracking-widest text-muted-foreground mb-1">Professional Network</p>
                   <p className="text-lg font-bold">in/novia-amanda</p>
                 </div>
               </div>
             </div>
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
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-background/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              className="bg-card w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl border border-border/50 relative flex flex-col md:flex-row"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-3 bg-background/80 hover:bg-background rounded-full transition-all z-50 shadow-md"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full md:w-2/5 h-48 md:h-auto relative group overflow-hidden">
                <a href={selectedProject.details.cta} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative">
                  <img src={selectedProject.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={selectedProject.title} />
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
                    {selectedProject.category}
                  </Badge>
                  {selectedProject.details.cta && (
                    <Button variant="outline" size="sm" className="rounded-full border-primary/20 text-xs h-8 hover:bg-primary/5" asChild>
                      <a href={selectedProject.details.cta} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 w-3.5 h-3.5" /> Open Document
                      </a>
                    </Button>
                  )}
                </div>

                <h3 className="text-3xl md:text-5xl font-serif font-bold mb-10 leading-tight text-foreground">{selectedProject.title}</h3>
                
                <div className="space-y-12">
                  <section className="relative pl-8 border-l-2 border-primary/10">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <h4 className="text-[10px] uppercase font-black tracking-[0.3em] text-primary/60 mb-4">Core Objective</h4>
                    <p className="text-lg md:text-xl font-medium leading-relaxed italic text-foreground/90">
                      "{selectedProject.details.objective || selectedProject.details.problem}"
                    </p>
                  </section>
                  
                  {selectedProject.details.technical && (
                    <section className="bg-primary/[0.02] p-8 rounded-[2rem] border border-primary/5">
                      <div className="flex items-center gap-3 mb-6">
                        <Settings className="w-5 h-5 text-primary" />
                        <h4 className="text-[10px] uppercase font-black tracking-[0.3em] text-primary/60">The Technical Application</h4>
                      </div>
                      <div className="text-muted-foreground leading-relaxed whitespace-pre-wrap text-sm md:text-[13px] prose prose-invert prose-sm max-w-none">
                        <div className="space-y-4">
                          {selectedProject.details.technical.split('\n\n').map((para: string, idx: number) => {
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

                  {selectedProject.details.process && (
                    <section className="bg-primary/[0.02] p-8 rounded-[2rem] border border-primary/5">
                      <div className="flex items-center gap-3 mb-6">
                        <Search className="w-5 h-5 text-primary" />
                        <h4 className="text-[10px] uppercase font-black tracking-[0.3em] text-primary/60">The Process & Highlights</h4>
                      </div>
                      <div className="text-muted-foreground leading-relaxed whitespace-pre-wrap text-sm md:text-[13px] prose prose-invert prose-sm max-w-none">
                        <div className="space-y-4">
                          {selectedProject.details.process.split('\n\n').map((para: string, idx: number) => {
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

                  {selectedProject.details.highlights && !selectedProject.details.technical && !selectedProject.details.process && (
                    <section className="bg-primary/[0.02] p-8 rounded-[2rem] border border-primary/5">
                      <div className="flex items-center gap-3 mb-6">
                        <Zap className="w-5 h-5 text-primary" />
                        <h4 className="text-[10px] uppercase font-black tracking-[0.3em] text-primary/60">Highlights</h4>
                      </div>
                      <div className="text-muted-foreground leading-relaxed whitespace-pre-wrap text-sm md:text-[13px] prose prose-invert prose-sm max-w-none">
                        <div className="space-y-4">
                          {selectedProject.details.highlights.split('\n\n').map((para: string, idx: number) => {
                             if (para.startsWith('###')) {
                              return <h5 key={idx} className="text-primary font-bold mt-6 mb-2">{para.replace('### ', '')}</h5>;
                            }
                            return (
                              <div key={idx} className="space-y-2">
                                {para.split('\n').map((line: string, lIdx: number) => {
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

                  {selectedProject.details.outcome && (
                    <section className="p-10 bg-primary/5 rounded-[2.5rem] border border-primary/10 shadow-sm">
                      <div className="flex items-center gap-3 mb-6">
                        <CheckCircle2 className="w-6 h-6 text-primary" />
                        <h4 className="text-[10px] uppercase font-black tracking-[0.3em] text-primary/60">The Strategic Outcome</h4>
                      </div>
                      <div className="text-foreground font-bold leading-relaxed whitespace-pre-wrap text-lg md:text-xl font-serif">
                        <div className="space-y-4">
                          {selectedProject.details.outcome.split('\n\n').map((para: string, idx: number) => {
                             if (para.startsWith('###')) {
                              return <h5 key={idx} className="text-primary font-bold mt-6 mb-2 font-serif text-2xl">{para.replace('### ', '')}</h5>;
                            }
                            return (
                              <div key={idx} className="space-y-4">
                                {para.split('\n').map((line: string, lIdx: number) => {
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

                  {!selectedProject.details.outcome && (selectedProject.details.impact || selectedProject.details.conclusion) && (
                    <section className="p-10 bg-primary/5 rounded-[2.5rem] border border-primary/10 shadow-sm">
                      <div className="flex items-center gap-3 mb-6">
                        <Target className="w-6 h-6 text-primary" />
                        <h4 className="text-[10px] uppercase font-black tracking-[0.3em] text-primary/60">Impact & Conclusion</h4>
                      </div>
                      <div className="text-foreground font-bold leading-relaxed whitespace-pre-wrap text-lg md:text-xl font-serif">
                        <div className="space-y-4">
                          {(selectedProject.details.impact || selectedProject.details.conclusion).split('\n\n').map((para: string, idx: number) => {
                             if (para.startsWith('###')) {
                              return <h5 key={idx} className="text-primary font-bold mt-6 mb-2 font-serif text-2xl">{para.replace('### ', '')}</h5>;
                            }
                            return (
                              <div key={idx} className="space-y-4">
                                {para.split('\n').map((line: string, lIdx: number) => {
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
            </motion.div>
          </motion.div>
        )}
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