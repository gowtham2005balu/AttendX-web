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
  
  if (!content.includes("import { ArrowRight")) {
    const importRegex = /import\s+\{([^}]+)\}\s+from\s+'lucide-react';/;
    if (importRegex.test(content)) {
      content = content.replace(importRegex, (match, p1) => {
        if (!p1.includes('ArrowRight')) {
          return `import { ${p1}, ArrowRight } from 'lucide-react';`;
        }
        return match;
      });
    } else {
      content = `import { ArrowRight } from 'lucide-react';\n` + content;
    }
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Added ArrowRight import to ${path.basename(filePath)}`);
  }
}
