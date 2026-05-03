const fs = require('fs');

const filePath = 'c:/Users/Amanda/Downloads/Green-Portfolio/Green-Portfolio/client/src/pages/Home.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// Cluster 01
let match = content.match(/<motion\.div layout className=\{\`grid gap-4 md:gap-6 \$\{activeCluster === "01" \? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5'\}\`\}>\s*\{bootcampProjects\.map\(\(project, idx\) => \([\s\S]*?<\/CardItem>\s*\)\)\}\s*<\/div>/);
if (match) {
  content = content.replace(match[0], match[0].replace('</div>', '</motion.div>'));
  console.log("Fixed Cluster 01");
}

// Cluster 02
match = content.match(/<motion\.div layout className=\{\`grid gap-4 md:gap-6 \$\{activeCluster === "02" \? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5'\}\`\}>\s*\{scienceProjects\.map\(\(item, idx\) => \([\s\S]*?<\/CardItem>\s*\)\)\}\s*<\/div>/);
if (match) {
  content = content.replace(match[0], match[0].replace('</div>', '</motion.div>'));
  console.log("Fixed Cluster 02");
}

// Cluster 03
match = content.match(/<motion\.div layout className=\{\`grid gap-4 md:gap-6 relative z-10 \$\{activeCluster === "03" \? 'md:grid-cols-2' : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5'\}\`\}>\s*\{combinedJourney\.map\(\(exp, idx\) => \([\s\S]*?<\/CardItem>\s*\)\)\}\s*<\/div>/);
if (match) {
  content = content.replace(match[0], match[0].replace('</div>', '</motion.div>'));
  console.log("Fixed Cluster 03");
}

fs.writeFileSync(filePath, content, 'utf-8');
console.log("File saved");
