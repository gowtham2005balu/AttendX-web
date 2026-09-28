const fs = require('fs');
const path = require('path');

const filesToFix = [
  path.join(__dirname, 'src', 'components', 'Attendance', 'Attendance.tsx'),
  path.join(__dirname, 'src', 'components', 'Employee', 'Employee.tsx'),
  path.join(__dirname, 'src', 'components', 'Leave', 'Leave.tsx')
];

for (const filePath of filesToFix) {
  if (!fs.existsSync(filePath)) continue;
  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;

  const svgRegex = /<svg className="w-\[16px\] h-\[16px\]" fill="none" stroke="currentColor" strokeWidth="2\.5" viewBox="0 0 24 24">[\s\S]*?<\/svg>/g;
  
  if (svgRegex.test(content)) {
    content = content.replace(svgRegex, '<ArrowRight size={14} />');
    modified = true;
  }
  
  if (modified && !content.includes('ArrowRight')) {
    const importRegex = /import\s+\{([^}]+)\}\s+from\s+'lucide-react';/;
    if (importRegex.test(content)) {
      content = content.replace(importRegex, (match, p1) => {
        return `import { ${p1}, ArrowRight } from 'lucide-react';`;
      });
    } else {
      content = `import { ArrowRight } from 'lucide-react';\n` + content;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Fixed svg arrow in ${path.basename(filePath)}`);
  }
}
