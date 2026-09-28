const fs = require('fs');
const path = require('path');

const dirsToScan = [
  path.join(__dirname, 'src', 'components', 'EmployeeApp'),
  path.join(__dirname, 'src', 'components', 'HRManager'),
  path.join(__dirname, 'src', 'components', 'Features')
];

for (const dir of dirsToScan) {
  if (!fs.existsSync(dir)) continue;
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));
  
  for (const f of files) {
    const filePath = path.join(dir, f);
    let content = fs.readFileSync(filePath, 'utf-8');
    let modified = false;

    // We want to replace ArrowRight variations inside buttons to match size={14}
    // Specifically looking for ones next to Learn More or just any ArrowRight inside black buttons.
    
    // Replace <ArrowRight className="w-4 h-4 text-white" />
    const regex1 = /<ArrowRight className="w-4 h-4 text-white" \/>/g;
    if (regex1.test(content)) {
      content = content.replace(regex1, '<ArrowRight size={14} />');
      modified = true;
    }
    
    // Replace <ArrowRight className="w-[16px] h-[16px] text-white stroke-[2.2] shrink-0" />
    const regex2 = /<ArrowRight className="w-\[16px\] h-\[16px\] text-white stroke-\[2\.2\] shrink-0" \/>/g;
    if (regex2.test(content)) {
      content = content.replace(regex2, '<ArrowRight size={14} />');
      modified = true;
    }
    
    // Replace <ArrowRight className="w-4 h-4 text-white" /> with specific stroke or other
    const regex3 = /<ArrowRight className="w-4 h-4 text-white" \/>/g; // caught by regex1
    
    // Also, if there are any <ArrowRight size={16} /> in other features like TrackAttendance
    const regex4 = /<ArrowRight className="w-4 h-4 text-white" \/>/g;
    
    // Also in TrackAttendance.tsx, SimplifyLeave.tsx, etc:
    // <ArrowRight className="w-4 h-4 text-white" /> -> caught by regex1
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Updated ArrowRight in ${f}`);
    }
  }
}
