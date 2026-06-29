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
    if (!nameWithoutExt.startsWith('prd') || nameWithoutExt.includes('temp')) {
      continue;
    }

    // We only need to process if it's the original file. To avoid reprocessing:
    // If it is already a .jpg fallback, .webp, or .avif, we should make sure all formats exist.
    // Let's check which formats exist for this product number:
    const numMatch = nameWithoutExt.match(/\d+/);
    if (!numMatch) continue;
    const num = numMatch[0];
    
    // Check if we already processed this product. Let's see:
    // If we have a .jpg fallback, a .webp, and a .avif all under 50KB, we can skip.
    const jpgPath = path.join(assetsDir, `prd${num}.jpg`);
    const webpPath = path.join(assetsDir, `prd${num}.webp`);
    const avifPath = path.join(assetsDir, `prd${num}.avif`);

    const hasJpg = fs.existsSync(jpgPath) && fs.statSync(jpgPath).size < 100000;
    const hasWebp = fs.existsSync(webpPath) && fs.statSync(webpPath).size < 100000;
    const hasAvif = fs.existsSync(avifPath) && fs.statSync(avifPath).size < 100000;

    if (hasJpg && hasWebp && hasAvif) {
      console.log(`Product prd${num} already optimized.`);
      continue;
    }

    const inputPath = path.join(assetsDir, file);
    console.log(`Optimizing product image: ${file}`);

    try {
      // Copy to temp input path to prevent "Cannot use same file for input and output"
      const tempInputPath = path.join(assetsDir, `temp_input_prd${num}${ext}`);
      fs.copyFileSync(inputPath, tempInputPath);

      // 1. Generate AVIF (width: 400px)
      await sharp(tempInputPath)
        .resize(400)
        .avif({ quality: 65 })
        .toFile(avifPath);

      // 2. Generate WebP (width: 400px)
      await sharp(tempInputPath)
        .resize(400)
        .webp({ quality: 80 })
        .toFile(webpPath);

      // 3. Keep fallback JPG (width: 400px, compressed)
      await sharp(tempInputPath)
        .resize(400)
        .jpeg({ quality: 80, progressive: true })
        .toFile(jpgPath);

      // Clean up temp input
      fs.unlinkSync(tempInputPath);

      // Clean up original file if it was named .png or .jpeg or other non-jpg
      if (ext !== '.jpg' && ext !== '.webp' && ext !== '.avif') {
        fs.unlinkSync(inputPath);
      }
      
      console.log(`Successfully optimized and converted: prd${num}`);
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
    const widths = [640, 1200, 1920];
    const tempInput = path.join(publicImageDir, 'temp_input_bg.jpeg');
    fs.copyFileSync(bgPath, tempInput);

    for (const w of widths) {
      // WebP
      await sharp(tempInput)
        .resize(w)
        .webp({ quality: 80 })
        .toFile(path.join(publicImageDir, `chemical_background_${w}.webp`));

      // AVIF
      await sharp(tempInput)
        .resize(w)
        .avif({ quality: 65 })
        .toFile(path.join(publicImageDir, `chemical_background_${w}.avif`));
    }

    // Replace original jpeg with optimized 1920px version
    await sharp(tempInput)
      .resize(1920)
      .jpeg({ quality: 80, progressive: true })
      .toFile(bgPath);

    fs.unlinkSync(tempInput);
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
