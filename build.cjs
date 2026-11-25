const fs = require('node:fs');
const path = require('node:path');

const root = fs.realpathSync(__dirname);
const output = path.join(root, 'dist');
const media = new Set(['.jpg', '.jpeg', '.png', '.webp', '.svg', '.mp4', '.ico']);

if (fs.existsSync(output)) {
  const stats = fs.lstatSync(output);
  const resolved = fs.realpathSync(output);
  if (!stats.isDirectory() || stats.isSymbolicLink() || resolved !== output) {
    throw new Error('La carpeta dist debe estar dentro del proyecto.');
  }
  fs.rmSync(output, { recursive: true });
}

const outputAssets = path.join(output, 'assets');
fs.mkdirSync(outputAssets, { recursive: true });
for (const entry of ['index.html', 'style.css', 'app.js']) {
  fs.copyFileSync(path.join(root, entry), path.join(output, entry));
}
for (const entry of fs.readdirSync(path.join(root, 'assets'), { withFileTypes: true })) {
  if (entry.isFile() && media.has(path.extname(entry.name).toLowerCase())) {
    fs.copyFileSync(path.join(root, 'assets', entry.name), path.join(outputAssets, entry.name));
  }
}

console.log('Catálogo listo en dist/.');
