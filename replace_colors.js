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
  // Backgrounds
  content = content.replace(/(?<!\w)bg-white(?!\/|-[a-z])/g, 'bg-black');
  content = content.replace(/(?<!\w)bg-\[\#FBFAF8\]/g, 'bg-black');
  content = content.replace(/(?<!\w)bg-\[\#FAF7F2\]/g, 'bg-black');
  
  // Nav specific backgrounds
  content = content.replace(/(?<!\w)bg-\[\#FBFAF8\]\/95/g, 'bg-black/95');
  
  // Form elements & backgrounds that might have explicit white
  content = content.replace(/(?<!\w)bg-stone-50(?!\/|-[a-z])/g, 'bg-black');
  content = content.replace(/(?<!\w)bg-stone-100(?!\/|-[a-z])/g, 'bg-[#111]');

  // Text Colors
  content = content.replace(/(?<!\w)text-stone-900/g, 'text-white');
  content = content.replace(/(?<!\w)text-stone-800/g, 'text-white');
  content = content.replace(/(?<!\w)text-stone-700/g, 'text-stone-300');
  content = content.replace(/(?<!\w)text-stone-600/g, 'text-stone-300');
  content = content.replace(/(?<!\w)text-stone-500/g, 'text-stone-400');
  content = content.replace(/(?<!\w)text-black(?!\/|-[a-z])/g, 'text-white');
  content = content.replace(/(?<!\w)text-black\/(\d+)/g, 'text-white/$1');

  // Border Colors
  content = content.replace(/(?<!\w)border-black\/(10|15|20)/g, 'border-white/10');
  content = content.replace(/(?<!\w)border-stone-200\/80/g, 'border-white/10');
  content = content.replace(/(?<!\w)border-stone-200/g, 'border-white/10');
  content = content.replace(/(?<!\w)border-stone-300/g, 'border-white/10');

  // Fill/Stroke (SVG)
  content = content.replace(/(?<!\w)fill-black(?!\/|-[a-z])/g, 'fill-white');
  
  return content;
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
