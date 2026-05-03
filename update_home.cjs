const fs = require('fs');

const filePath = 'c:/Users/Amanda/Downloads/Green-Portfolio/Green-Portfolio/client/src/pages/Home.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Refactor CardItem to use layout and single motion.div
const cardItemRegex = /const CardItem = \(\{\s*isOpen.*?return \(\n\s*<motion\.div[\s\S]*?<\/motion\.div>\n\s*\);\n\s*\};/g;

const newCardItem = `const CardItem = ({ isOpen, item, type, index, onClick }: any) => {
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
        transition={{ layout: { duration: 0.5, type: "spring", bounce: 0.2 }, opacity: { duration: 0.3 }, y: { duration: 0.3, delay: index * 0.05 } }}
        whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.15, delay: 0 } }}
        onClick={(e: any) => { e.stopPropagation(); onClick(); }}
        className={\`group bg-card shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border border-border/40 flex flex-col h-full \${isOpen ? 'rounded-2xl overflow-hidden hover:shadow-2xl' : 'rounded-2xl p-4'}\`}
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
              <div className="h-40 overflow-hidden relative">
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
  };`;

// Find the entire CardItem body
const match = content.match(/const CardItem = \(\{[\s\S]*?className="text-\[9px\].*?ArrowRight[\s\S]*?<\/motion\.div>\n\s*\);\n\s*\};/);
if (match) {
  content = content.replace(match[0], newCardItem);
} else {
  console.log("CardItem not matched");
}


// 2. Add an icon to each key impact. We'll update the modal code to dynamically choose an icon for impacts.
// Wait, the user asked to "add an icon or simple graphic to each key impact related to the description".
// We can add logic to the modal impact rendering to display a specific icon based on index or title, or add them to the array.
// Modifying the array is cleaner. Let's add an `iconName` to each impact.
// Since adding to the array is hard with regex, we can just map an icon array inside the modal loop!
const impactsRenderRegex = /<div className="grid md:grid-cols-[^>]*>\s*\{selectedProject\.details\.impacts\.map\(\(impact:\s*any,\s*idx:\s*number\)\s*=>\s*\([\s\S]*?<\/div>\s*\)\)\}\s*<\/div>/;

const newImpactsRender = `<div className="grid md:grid-cols-3 gap-6">
                            {selectedProject.details.impacts.map((impact: any, idx: number) => {
                              const iconMap = [<BarChart3 className="w-6 h-6 text-primary" />, <Target className="w-6 h-6 text-primary" />, <Activity className="w-6 h-6 text-primary" />];
                              const IconToUse = iconMap[idx % iconMap.length];
                              return (
                                <div key={idx} className="bg-secondary/30 p-6 rounded-2xl border border-border/40 hover:border-primary/30 transition-colors group flex flex-col">
                                  <div className="mb-4 p-3 bg-primary/10 w-fit rounded-xl group-hover:bg-primary/20 transition-colors">
                                    {IconToUse}
                                  </div>
                                  <div className="text-[10px] uppercase font-bold tracking-wider text-primary mb-2 group-hover:underline decoration-primary/30 underline-offset-4">{impact.subtitle}</div>
                                  <h5 className="font-bold text-base mb-3 leading-tight text-foreground">{impact.title}</h5>
                                  <p className="text-sm text-muted-foreground">{impact.description}</p>
                                </div>
                              );
                            })}
                          </div>`;

content = content.replace(impactsRenderRegex, newImpactsRender);


// 3. Remove image in detail page for ESG cluster.
// In the right column:
// {selectedProject.image && (
//   <div className="rounded-3xl overflow-hidden shadow-lg border border-border/50 relative group h-48 lg:h-auto lg:aspect-square">
//     <img src={selectedProject.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Project Cover" />
//     <div className="absolute inset-0 bg-primary/10 transition-colors group-hover:bg-transparent" />
//   </div>
// )}
const imageRenderRegex = /\{selectedProject\.image\s*&&\s*\(\s*<div className="rounded-3xl overflow-hidden[\s\S]*?<\/div>\s*\)\}/;
const newImageRender = `{selectedProject.image && currentArray !== bootcampProjects && (
                        <div className="rounded-3xl overflow-hidden shadow-lg border border-border/50 relative group h-48 lg:h-auto lg:aspect-square">
                          <img src={selectedProject.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Project Cover" />
                          <div className="absolute inset-0 bg-primary/10 transition-colors group-hover:bg-transparent" />
                        </div>
                      )}`;
content = content.replace(imageRenderRegex, newImageRender);


// 4. Update the QR code & link to match the photo
// Photo layout: horizontal card.
// {selectedProject.details.cta && (
//   <div className="bg-secondary/30 rounded-3xl p-6 border border-border/40 flex flex-col items-center text-center mt-auto shadow-sm hover:shadow-md transition-shadow">
//     ...
//   </div>
// )}
const qrRenderRegex = /\{selectedProject\.details\.cta\s*&&\s*\(\s*<div className="bg-secondary\/30 rounded-3xl p-6[\s\S]*?<\/div>\s*\)\}/;
const newQrRender = `{selectedProject.details.cta && (
                        <a href={selectedProject.details.cta} target="_blank" rel="noopener noreferrer" className="bg-card hover:bg-secondary/30 transition-colors rounded-[24px] p-5 border border-border/60 flex items-center justify-between gap-4 shadow-sm group mt-auto">
                          <div className="flex-1">
                            <h4 className="font-bold text-sm uppercase tracking-widest mb-1 text-foreground">View Project File</h4>
                            <p className="text-[13px] text-muted-foreground leading-snug">Scan or click to read full report</p>
                          </div>
                          <div className="bg-white p-2 rounded-[14px] shadow-sm shrink-0 border border-border/40 group-hover:scale-105 transition-transform">
                            <QRCode value={selectedProject.details.cta} size={70} />
                          </div>
                        </a>
                      )}`;
content = content.replace(qrRenderRegex, newQrRender);

// Add Activity to lucide imports
if (!content.includes('Activity,')) {
  content = content.replace('ArrowRight,', 'ArrowRight,\n  Activity,');
}
if (!content.includes('BarChart3,')) {
  content = content.replace('Activity,', 'Activity,\n  BarChart3,');
}
if (!content.includes('Target,')) {
  content = content.replace('BarChart3,', 'BarChart3,\n  Target,');
}


fs.writeFileSync(filePath, content, 'utf-8');
console.log("File updated successfully.");
