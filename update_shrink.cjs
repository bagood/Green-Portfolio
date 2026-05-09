const fs = require('fs');
let content = fs.readFileSync('c:/Users/Amanda/Downloads/Green-Portfolio/Green-Portfolio/client/src/pages/Home.tsx', 'utf-8');

// 1. Remove fixed height from modal wrapper
content = content.replace(
  'className="bg-card w-[95vw] max-w-6xl h-[90vh] max-h-[850px] overflow-hidden rounded-[2rem] shadow-2xl border border-border/50 relative flex flex-col"',
  'className="bg-card w-[95vw] max-w-6xl max-h-[95vh] overflow-hidden rounded-[2rem] shadow-2xl border border-border/50 relative flex flex-col"'
);

// 2. Remove overflow-y-auto and custom-scrollbar, use equal padding
content = content.replace(
  'className="flex-1 overflow-y-auto p-5 md:p-6 pb-10 md:pb-16 custom-scrollbar"',
  'className="p-5 md:p-6"'
);

// 3. Remove the spacer div
content = content.replace(
  /\{\/\* Explicit spacer to guarantee bottom margin\/padding is respected in scroll container \*\/\}\s*<div className="h-12 md:h-20 w-full shrink-0" \/>/,
  ''
);

// 4. Shrink header
content = content.replace(
  'h3 className="text-3xl md:text-4xl font-serif',
  'h3 className="text-2xl md:text-3xl font-serif'
);

// 5. Shrink gaps in grid
content = content.replace(
  '<div className={`grid gap-8 lg:gap-8',
  '<div className={`grid gap-6 lg:gap-6'
);
content = content.replace(
  'space-y-6 md:space-y-8 flex flex-col h-full',
  'space-y-4 md:space-y-6 flex flex-col h-full'
);
content = content.replace(
  'space-y-6 md:space-y-8 flex-1',
  'space-y-4 md:space-y-6 flex-1'
);

// 6. Shrink Overview
content = content.replace(
  '<p className="text-[15px] md:text-base',
  '<p className="text-sm md:text-[15px]'
);

// 7. Shrink Impacts
content = content.replace(
  'grid md:grid-cols-2 lg:grid-cols-3 gap-4',
  'grid md:grid-cols-2 lg:grid-cols-3 gap-3'
);
content = content.replace(
  'bg-secondary/30 p-4 md:p-5 rounded-2xl',
  'bg-secondary/30 p-4 rounded-xl'
);
content = content.replace(
  'h5 className="font-bold text-base',
  'h5 className="font-bold text-sm'
);
content = content.replace(
  'p className="text-sm text-muted-foreground',
  'p className="text-xs text-muted-foreground'
);

// 8. Shrink Selected Approach
content = content.replace(
  'bg-primary/[0.02] p-5 md:p-6 rounded-[1.5rem]',
  'bg-primary/[0.02] p-4 md:p-5 rounded-[1.2rem]'
);
content = content.replace(
  '<ul className="space-y-3">',
  '<ul className="space-y-2">'
);
// Careful, we have two approach texts, one in the map and one for the fallback. But wait, the previous replace text-[15px] to text-sm handles some.
// Let's replace the one in Selected Approach
content = content.replace(
  '<p className="text-[15px] text-foreground/80',
  '<p className="text-[13px] md:text-sm text-foreground/80'
);

// 9. Shrink QR Card inline
content = content.replace(
  'rounded-[24px] p-5 border',
  'rounded-[20px] p-4 border'
);

// 10. Also replace the other text-[15px] md:text-base to text-sm md:text-[15px] for Objective fallback
content = content.replace(
  /<p className="text-\[15px\] md:text-base/g,
  '<p className="text-sm md:text-[15px]'
);

fs.writeFileSync('c:/Users/Amanda/Downloads/Green-Portfolio/Green-Portfolio/client/src/pages/Home.tsx', content, 'utf-8');
console.log("Applied shrink changes");
