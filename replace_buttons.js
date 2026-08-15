const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function replaceColors(content) {
  let lines = content.split('\n');
  for (let i = 0; i < lines.length; i++) {
    let regexText = /(?<!(hover|group-hover|focus|active|sm|md|lg|xl|2xl):)text-\[\#5C0005\]/;
    if (lines[i].includes('bg-black') && regexText.test(lines[i])) {
      // Replace bg-black only if it's not preceded by a pseudo-class or breakpoint
      lines[i] = lines[i].replace(/(?<!(hover|group-hover|focus|active|sm|md|lg|xl|2xl):)bg-black/g, 'bg-white');
    }
  }
  return lines.join('\n');
}

let count = 0;
walkDir(path.join(__dirname, 'src'), (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = replaceColors(content);
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent);
      console.log(`Updated ${filePath}`);
      count++;
    }
  }
});
console.log(`Total files updated: ${count}`);
