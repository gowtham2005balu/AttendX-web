const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components', 'Solutions');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const f of files) {
  const filePath = path.join(dir, f);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace the arrow spans inside "Learn More" buttons
  // There are two forms of the arrow span:
  // 1. <span className="w-[16px] h-[16px] flex items-center justify-center text-[14px]">→</span>
  // 2. <span>→</span>
  // We want to replace these with <ArrowRight size={14} />.
  // Wait, these spans might be used outside "Learn More", but they are only for CTA buttons.
  
  let modified = false;
  
  // Replace complex span
  const regex1 = /<span className="w-\[16px\] h-\[16px\] flex items-center justify-center text-\[14px\]">→<\/span>/g;
  if (regex1.test(content)) {
    content = content.replace(regex1, '<ArrowRight size={14} />');
    modified = true;
  }
  
  // Replace simple span
  const regex2 = /<span>→<\/span>/g;
  if (regex2.test(content)) {
    content = content.replace(regex2, '<ArrowRight size={14} />');
    modified = true;
  }
  
  // Replace missing import if ArrowRight is not imported
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
    console.log(`Updated arrows in ${f}`);
  }
}
