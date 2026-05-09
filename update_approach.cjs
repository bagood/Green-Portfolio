const fs = require('fs');
let content = fs.readFileSync('c:/Users/Amanda/Downloads/Green-Portfolio/Green-Portfolio/client/src/pages/Home.tsx', 'utf-8');

// Remove old QR
const qrStart = content.indexOf('{/* QR Code at the bottom if no image */}');
const qrEnd = content.indexOf('</div>\n                        </div>\n\n                    {/* Right Column: Visuals & QR */}');

if (qrStart !== -1 && qrEnd !== -1) {
  content = content.substring(0, qrStart) + content.substring(qrEnd);
}

// Replace Approach
const approachStart = content.indexOf('{/* Selected Approach */}');
const approachEndStr = '</section>\n                      )}';
const approachEnd = content.indexOf(approachEndStr, approachStart) + approachEndStr.length;

if (approachStart !== -1 && approachEnd !== -1) {
  const newApproachAndQr = `{/* Approach and QR Wrapper */}
                      <div className="grid lg:grid-cols-2 gap-6 items-start">
                        {/* Selected Approach */}
                        {selectedProject.details.approach && (
                          <section>
                            <div className="flex items-center gap-3 mb-4">
                              <CheckCircle2 className="w-5 h-5 text-primary" />
                              <h4 className="text-xs uppercase font-black tracking-widest text-primary">Selected Approach</h4>
                            </div>
                            <div className="bg-primary/[0.02] p-5 md:p-6 rounded-[1.5rem] border border-primary/10 h-full">
                              <ul className="space-y-3">
                                {selectedProject.details.approach.map((point: string, idx: number) => (
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

                        {/* QR Code inline if no image */}
                        {!hasImage && selectedProject.details.cta && (
                          <section>
                            <div className="flex items-center gap-3 mb-4">
                              <ExternalLink className="w-5 h-5 text-primary" />
                              <h4 className="text-xs uppercase font-black tracking-widest text-primary">Project Link</h4>
                            </div>
                            <a href={selectedProject.details.cta} target="_blank" rel="noopener noreferrer" className="bg-card hover:bg-secondary/30 transition-colors rounded-[24px] p-5 border border-border/60 flex items-center justify-between gap-4 shadow-sm group">
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
                      </div>`;
  content = content.substring(0, approachStart) + newApproachAndQr + content.substring(approachEnd);
}

fs.writeFileSync('c:/Users/Amanda/Downloads/Green-Portfolio/Green-Portfolio/client/src/pages/Home.tsx', content, 'utf-8');
console.log("Updated approach layout");
