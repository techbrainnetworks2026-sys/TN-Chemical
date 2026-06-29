const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const assetsDir = path.join(__dirname, 'src', 'assets');
const publicImageDir = path.join(__dirname, 'public', 'image');

async function optimizeProductImages() {
  const files = fs.readdirSync(assetsDir);
  console.log(`Found ${files.length} files in assets directory.`);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png', '.webp', '.avif'].includes(ext)) {
      continue;
    }

    const nameWithoutExt = path.basename(file, ext);
    // Only optimize product images
    if (!nameWithoutExt.startsWith('prd')) {
      continue;
    }

    const inputPath = path.join(assetsDir, file);
    console.log(`Optimizing product image: ${file}`);

    try {
      // 1. Generate AVIF (width: 400px)
      await sharp(inputPath)
        .resize(400)
        .avif({ quality: 65 })
        .toFile(path.join(assetsDir, `${nameWithoutExt}.avif`));

      // 2. Generate WebP (width: 400px)
      await sharp(inputPath)
        .resize(400)
        .webp({ quality: 80 })
        .toFile(path.join(assetsDir, `${nameWithoutExt}.webp`));

      // 3. Keep fallback JPG (width: 400px, compressed)
      // We will replace the original large file with the optimized one
      const tempPath = path.join(assetsDir, `temp_${nameWithoutExt}${ext}`);
      await sharp(inputPath)
        .resize(400)
        .jpeg({ quality: 80, progressive: true })
        .toFile(tempPath);

      // Remove original and rename temp
      fs.unlinkSync(inputPath);
      fs.renameSync(tempPath, path.join(assetsDir, `${nameWithoutExt}.jpg`));

      console.log(`Successfully optimized and converted: ${nameWithoutExt}`);
    } catch (err) {
      console.error(`Error processing ${file}:`, err);
    }
  }
}

async function optimizeHeroBackground() {
  const bgPath = path.join(publicImageDir, 'chemical_background.jpeg');
  if (!fs.existsSync(bgPath)) {
    console.log('Hero background not found at', bgPath);
    return;
  }

  console.log('Optimizing hero background image...');

  try {
    // Generate WebP and AVIF versions of the hero background at different responsive widths
    const widths = [640, 1200, 1920];
    for (const w of widths) {
      // WebP
      await sharp(bgPath)
        .resize(w)
        .webp({ quality: 80 })
        .toFile(path.join(publicImageDir, `chemical_background_${w}.webp`));

      // AVIF
      await sharp(bgPath)
        .resize(w)
        .avif({ quality: 65 })
        .toFile(path.join(publicImageDir, `chemical_background_${w}.avif`));
    }

    // Replace original jpeg with optimized 1920px version
    const tempBg = path.join(publicImageDir, 'temp_bg.jpeg');
    await sharp(bgPath)
      .resize(1920)
      .jpeg({ quality: 80, progressive: true })
      .toFile(tempBg);

    fs.unlinkSync(bgPath);
    fs.renameSync(tempBg, bgPath);

    console.log('Hero background optimized successfully.');
  } catch (err) {
    console.error('Error optimizing hero background:', err);
  }
}

async function run() {
  await optimizeProductImages();
  await optimizeHeroBackground();
  console.log('All image optimization complete!');
}

run();
