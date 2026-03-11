import fs from 'fs';
import path from 'path';

const galleryDir = path.join(process.cwd(), 'public/gallery');
// Change this to match your actual image extensions
const validExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.PNG', '.JPG'];

try {
  const files = fs.readdirSync(galleryDir)
    .filter(file => validExtensions.includes(path.extname(file)))
    .filter(file => !fs.statSync(path.join(galleryDir, file)).isDirectory());

  fs.writeFileSync(
    path.join(process.cwd(), 'public/gallery-data.json'),
    JSON.stringify(files)
  );
  console.log(`✅ Gallery data generated with ${files.length} images.`);
} catch (error) {
  console.error('❌ Error generating gallery data:', error);
}

