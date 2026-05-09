const fs = require('fs');
let content = fs.readFileSync('c:/Users/Amanda/Downloads/Green-Portfolio/Green-Portfolio/client/src/pages/Home.tsx', 'utf-8');

// 1. Add space between Back to Portfolio and Tags
content = content.replace('tracking-wider mb-2\">\n                      <CornerUpLeft className=\"w-4 h-4\" /> Back to Portfolio\n                    </button>\n                    <div className=\"flex flex-wrap gap-2 mb-2\">', 'tracking-wider mb-6\">\n                      <CornerUpLeft className=\"w-4 h-4\" /> Back to Portfolio\n                    </button>\n                    <div className=\"flex flex-wrap gap-2 mb-2\">');

// 2. Change the layout to eliminate space above QR
// Find Content Area
const contentAreaRegex = /\{\/\* Content Area \*\/\}\s*<div className="flex-1 overflow-y-auto p-5 md:p-6 custom-scrollbar">\s*<div className="grid lg:grid-cols-12 gap-8 lg:gap-8 h-full">\s*\{\/\* Left Column: Details \*\/\}\s*<div className="lg:col-span-8 space-y-6 md:space-y-8">/;

const newContentArea = `{/* Content Area */}
                <div className="flex-1 overflow-y-auto p-5 md:p-6 custom-scrollbar">
                  {(() => {
                    const hasImage = selectedProject.image && currentArray !== bootcampProjects;
                    return (
                      <div className={\`grid gap-8 lg:gap-8 h-full \${hasImage ? 'lg:grid-cols-12' : 'grid-cols-1'}\`}>
                        
                        {/* Left Column: Details */}
                        <div className={\`\${hasImage ? 'lg:col-span-8' : ''} space-y-6 md:space-y-8 flex flex-col h-full\`}>
                          <div className="space-y-6 md:space-y-8 flex-1">`;

content = content.replace(contentAreaRegex, newContentArea);

// We need to add the closing tags and the conditional QR code
// Let's find the end of the left column.
// The left column ends right before {/* Right Column: Visuals & QR */}
const leftColEndRegex = /<\/div>\s*\{\/\* Right Column: Visuals & QR \*\/\}/;
const newLeftColEnd = `</div>
                          {/* QR Code at the bottom if no image */}
                          {!hasImage && selectedProject.details.cta && (
                            <div className="mt-8 pt-6 border-t border-border/30">
                              <a href={selectedProject.details.cta} target="_blank" rel="noopener noreferrer" className="bg-card hover:bg-secondary/30 transition-colors rounded-[24px] p-5 border border-border/60 flex items-center justify-between gap-4 shadow-sm group max-w-2xl">
                                <div className="flex-1">
                                  <h4 className="font-bold text-sm uppercase tracking-widest mb-1 text-foreground">View Project File</h4>
                                  <p className="text-[13px] text-muted-foreground leading-snug">Scan or click to read full report</p>
                                </div>
                                <div className="bg-white p-2 rounded-[14px] shadow-sm shrink-0 border border-border/40 group-hover:scale-105 transition-transform">
                                  <QRCode value={selectedProject.details.cta} size={70} />
                                </div>
                              </a>
                            </div>
                          )}
                        </div>

                    {/* Right Column: Visuals & QR */}`;
content = content.replace(leftColEndRegex, newLeftColEnd);

// Then update the Right column to only render if hasImage
// {selectedProject.image && currentArray !== bootcampProjects && (
const rightColRegex = /<div className="lg:col-span-4 flex flex-col gap-6">\s*\{selectedProject\.image && currentArray !== bootcampProjects && \(/;
const newRightCol = `{hasImage && (
                          <div className="lg:col-span-4 flex flex-col gap-6">
                            {selectedProject.image && (`;
content = content.replace(rightColRegex, newRightCol);

// And we need to close the hasImage wrapper at the end of the right column
// The right column ends with `</a>\n                      )}\n                    </div>\n\n                  </div>\n                </div>`
const rightColEndRegex = /<\/a>\s*\)\}\s*<\/div>\s*<\/div>\s*<\/div>/;
const newRightColEnd = `</a>
                            )}
                          </div>
                        )}

                      </div>
                    );
                  })()}
                </div>`;
content = content.replace(rightColEndRegex, newRightColEnd);

fs.writeFileSync('c:/Users/Amanda/Downloads/Green-Portfolio/Green-Portfolio/client/src/pages/Home.tsx', content, 'utf-8');
console.log("Updated layout");
