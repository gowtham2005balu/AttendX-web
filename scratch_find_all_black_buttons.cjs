const fs = require('fs');
const path = require('path');

const dir = 'src/components/Solutions';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

const buttonMatches = [];

files.forEach(filename => {
  const filePath = path.join(dir, filename);
  const content = fs.readFileSync(filePath, 'utf8');

  // Match: <a [^>]*bg-\[#1A1A1A\][^>]*>[\s\S]*?<\/a>
  const regex = /<a\b[^>]*?(?:bg-\[#1A1A1A\]|bg-black)[^>]*?>[\s\S]*?<\/a>/gi;
  let m;
  while ((m = regex.exec(content)) !== null) {
    buttonMatches.push({
      file: filename,
      match: m[0]
    });
  }
});

console.log('Total black buttons found across Solutions:', buttonMatches.length);
buttonMatches.forEach(b => {
  const textMatch = b.match.match(/<span>(.*?)<\/span>/) || b.match.match(/>([^<]+)</);
  console.log(`${b.file} -> ${textMatch ? textMatch[1].trim() : b.match.replace(/\s+/g, ' ').slice(0, 60)}`);
});
