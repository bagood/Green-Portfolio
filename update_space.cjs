const fs = require('fs');
let content = fs.readFileSync('c:/Users/Amanda/Downloads/Green-Portfolio/Green-Portfolio/client/src/pages/Home.tsx', 'utf-8');

const replacements = [
  ['className="bg-card w-[95vw] max-w-7xl h-[90vh] max-h-[850px] overflow-hidden rounded-[2rem] shadow-2xl border border-border/50 relative flex flex-col"', 'className="bg-card w-[98vw] max-w-[1400px] h-[95vh] max-h-[95vh] overflow-hidden rounded-[2rem] shadow-2xl border border-border/50 relative flex flex-col"'],
  ['p-6 md:p-8 border-b', 'p-5 md:p-6 pb-4 md:pb-5 border-b'],
  ['mb-4">', 'mb-2">'],
  ['className="flex flex-wrap gap-2 mb-4"', 'className="flex flex-wrap gap-2 mb-3"'],
  ['p-6 md:p-8 custom-scrollbar', 'p-5 md:p-6 custom-scrollbar'],
  ['lg:gap-12 h-full', 'lg:gap-8 h-full'],
  ['col-span-8 space-y-10', 'col-span-8 space-y-6 md:space-y-8'],
  ['mb-3">Overview</h4>', 'mb-2">Overview</h4>'],
  ['text-lg md:text-xl', 'text-[15px] md:text-base'],
  ['mb-6">', 'mb-4">'],
  ['lg:grid-cols-3 gap-6', 'lg:grid-cols-3 gap-4'],
  ['bg-secondary/30 p-6 rounded-2xl', 'bg-secondary/30 p-4 md:p-5 rounded-2xl'],
  ['mb-4 p-3 bg-primary/10 w-fit', 'mb-3 p-2.5 bg-primary/10 w-fit'],
  ['mb-2 group-hover', 'mb-1 group-hover'],
  ['mb-3 leading-tight', 'mb-2 leading-tight text-[15px] md:text-base'],
  ['p-6 md:p-8 rounded-[2rem]', 'p-5 md:p-6 rounded-[1.5rem]'],
  ['space-y-4', 'space-y-3']
];

replacements.forEach(([search, replace]) => {
  // Use regex to replace all occurrences globally
  // Escape regex special characters from search string
  const escapedSearch = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(escapedSearch, 'g');
  content = content.replace(regex, replace);
});

fs.writeFileSync('c:/Users/Amanda/Downloads/Green-Portfolio/Green-Portfolio/client/src/pages/Home.tsx', content, 'utf-8');
console.log("Updated spacing");
