import re

with open("c:/Users/Amanda/Downloads/Green-Portfolio/Green-Portfolio/client/src/pages/Home.tsx", "r", encoding="utf-8") as f:
    content = f.read()

start_marker = "      {/* Project Modal */}\n      <AnimatePresence>"
end_marker = "      </AnimatePresence>\n      {/* Experience Deep Dive Modal */}"

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx != -1 and end_idx != -1:
    new_modal = """      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (() => {
          let currentArray: any[] = [];
          let currentIndex = -1;
          
          if (bootcampProjects.find(p => p.title === selectedProject.title)) {
            currentArray = bootcampProjects;
          } else if (scienceProjects.find(p => p.title === selectedProject.title)) {
            currentArray = scienceProjects;
          }

          if (currentArray.length > 0) {
            currentIndex = currentArray.findIndex(p => p.title === selectedProject.title);
          }

          const handleNext = (e: any) => {
            e.stopPropagation();
            if (currentIndex >= 0 && currentIndex < currentArray.length - 1) {
              setSelectedProject(currentArray[currentIndex + 1]);
            }
          };

          const handlePrev = (e: any) => {
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
                      {selectedProject.tags ? selectedProject.tags.map((tag: string, i: number) => (
                        <Badge key={i} className="bg-primary/10 text-primary border-none px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{tag}</Badge>
                      )) : (
                        <Badge className="bg-primary/10 text-primary border-none px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">{selectedProject.category || selectedProject.badge || selectedProject.type}</Badge>
                      )}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground leading-tight max-w-4xl">{selectedProject.title}</h3>
                  </div>
                  
                  {/* Navigation */}
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" className="rounded-full" onClick={handlePrev} disabled={currentIndex <= 0}>
                      <ArrowLeft className="w-5 h-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full" onClick={handleNext} disabled={currentIndex === -1 || currentIndex >= currentArray.length - 1}>
                      <ArrowRight className="w-5 h-5" />
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
                          <div className="grid md:grid-cols-3 gap-6">
                            {selectedProject.details.impacts.map((impact: any, idx: number) => (
                              <div key={idx} className="bg-secondary/30 p-6 rounded-2xl border border-border/40 hover:border-primary/30 transition-colors">
                                <div className="text-[10px] uppercase font-bold tracking-wider text-primary mb-2">{impact.subtitle}</div>
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
                              {selectedProject.details.approach.map((point: string, idx: number) => (
                                <li key={idx} className="flex gap-4">
                                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                  </div>
                                  <p className="text-[15px] text-muted-foreground font-medium">{point}</p>
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
                              {selectedProject.details.process.split('\\n\\n').map((para: string, idx: number) => {
                                if (para.startsWith('###')) {
                                  return <h5 key={idx} className="text-primary font-bold mt-6 mb-2">{para.replace('### ', '')}</h5>;
                                }
                                return (
                                  <div key={idx} className="space-y-2">
                                    {para.split('\\n').map((line: string, lIdx: number) => {
                                      if (line.startsWith('- ')) {
                                        return (
                                          <div key={lIdx} className="flex gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                            <p>{line.substring(2).replace(/\\*\\*/g, '')}</p>
                                          </div>
                                        );
                                      }
                                      return (
                                        <p key={lIdx} className="mb-2">
                                          {line.replace(/\\*\\*/g, '')}
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
                              {selectedProject.details.highlights.split('\\n\\n').map((para: string, idx: number) => {
                                if (para.startsWith('###')) {
                                  return <h5 key={idx} className="text-primary font-bold mt-6 mb-2">{para.replace('### ', '')}</h5>;
                                }
                                return (
                                  <div key={idx} className="space-y-2">
                                    {para.split('\\n').map((line: string, lIdx: number) => {
                                      const parts = line.split(/(\\*\\*.*?\\*\\*|\\*.*?\\*)/);
                                      return (
                                        <p key={lIdx}>
                                          {line.replace(/\\*\\*/g, '').replace(/\\*/g, '')}
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
                              {selectedProject.details.outcome.split('\\n\\n').map((para: string, idx: number) => {
                                if (para.startsWith('###')) {
                                  return <h5 key={idx} className="text-primary font-bold mt-6 mb-2 font-serif text-2xl">{para.replace('### ', '')}</h5>;
                                }
                                return (
                                  <div key={idx} className="space-y-4">
                                    {para.split('\\n').map((line: string, lIdx: number) => {
                                      if (line.startsWith('- ')) {
                                        return (
                                          <div key={lIdx} className="flex gap-4 items-start py-1">
                                            <div className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0 shadow-sm shadow-primary/20" />
                                            <p className="flex-1">{line.substring(2).replace(/\\*\\*/g, '').replace(/\\*/g, '')}</p>
                                          </div>
                                        );
                                      }
                                      return (
                                        <p key={lIdx} className="mb-2 text-sm md:text-base leading-relaxed">
                                          {line.replace(/\\*\\*/g, '').replace(/\\*/g, '')}
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
                              {(selectedProject.details.impact || selectedProject.details.conclusion).split('\\n\\n').map((para: string, idx: number) => {
                                if (para.startsWith('###')) {
                                  return <h5 key={idx} className="text-primary font-bold mt-6 mb-2 font-serif text-2xl">{para.replace('### ', '')}</h5>;
                                }
                                return (
                                  <div key={idx} className="space-y-4">
                                    {para.split('\\n').map((line: string, lIdx: number) => {
                                      if (line.startsWith('- ')) {
                                        return (
                                          <div key={lIdx} className="flex gap-4 items-start py-1">
                                            <div className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0 shadow-sm shadow-primary/20" />
                                            <p className="flex-1">{line.substring(2)}</p>
                                          </div>
                                        );
                                      }
                                      const parts = line.split(/(\\*\\*.*?\\*\\*|:)/);
                                      return (
                                        <p key={lIdx} className="mb-2 text-sm md:text-base leading-relaxed">
                                          {parts.map((part: string, pIdx: number) => {
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
                      {selectedProject.image && (
                        <div className="rounded-3xl overflow-hidden shadow-lg border border-border/50 aspect-video lg:aspect-square relative group">
                          <img src={selectedProject.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Project Cover" />
                          <div className="absolute inset-0 bg-primary/10" />
                        </div>
                      )}

                      {selectedProject.details.cta && (
                        <div className="bg-secondary/30 rounded-3xl p-6 border border-border/40 flex flex-col items-center text-center mt-auto">
                          <h4 className="font-bold text-sm uppercase tracking-wider mb-2">Scan to View Document</h4>
                          <p className="text-xs text-muted-foreground mb-6">Access the full report or documentation directly on your device.</p>
                          <div className="bg-white p-3 rounded-2xl shadow-sm mb-6 inline-block">
                            <QRCode value={selectedProject.details.cta} size={140} />
                          </div>
                          <Button className="w-full rounded-xl font-bold gap-2" size="lg" asChild>
                            <a href={selectedProject.details.cta} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4" /> Open Project Link
                            </a>
                          </Button>
                        </div>
                      )}
                    </div>

                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
"""
    new_content = content[:start_idx] + new_modal + "\n" + content[end_idx:]
    with open("c:/Users/Amanda/Downloads/Green-Portfolio/Green-Portfolio/client/src/pages/Home.tsx", "w", encoding="utf-8") as f:
        f.write(new_content)
    print("Successfully replaced modal content")
else:
    print("Markers not found", start_idx, end_idx)
