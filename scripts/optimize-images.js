const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'Images');
const MAX_WIDTH = 1200;
const JPG_QUALITY = 80;
const WEBP_QUALITY = 80;

async function optimizeImages() {
  const files = fs.readdirSync(IMAGES_DIR);

  // Delete unused duplicate
  const unusedFile = path.join(IMAGES_DIR, 'criminal-law-alt.jpg');
  if (fs.existsSync(unusedFile)) {
    fs.unlinkSync(unusedFile);
    console.log('Deleted unused: criminal-law-alt.jpg');
  }

  const imageFiles = files.filter((f) =>
    /\.(jpg|jpeg|png|webp|avif)$/i.test(f) && f !== 'criminal-law-alt.jpg'
  );

  console.log(`\nOptimizing ${imageFiles.length} images...\n`);

  for (const file of imageFiles) {
    const filePath = path.join(IMAGES_DIR, file);
    const ext = path.extname(file).toLowerCase();
    const baseName = path.basename(file, ext);
    const sizeBefore = fs.statSync(filePath).size;

    try {
      const image = sharp(filePath);
      const metadata = await image.metadata();

      // Resize if wider than MAX_WIDTH
      const resizeOpts = metadata.width > MAX_WIDTH ? { width: MAX_WIDTH } : {};

      // Compress and overwrite original (JPG/PNG → JPG)
      if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
        const compressedBuffer = await sharp(filePath)
          .resize(resizeOpts)
          .jpeg({ quality: JPG_QUALITY, progressive: true })
          .toBuffer();

        const jpgPath = path.join(IMAGES_DIR, `${baseName}.jpg`);
        fs.writeFileSync(jpgPath, compressedBuffer);

        // If original was PNG, delete it
        if (ext === '.png' && filePath !== jpgPath) {
          fs.unlinkSync(filePath);
        }
      }

      // Generate WebP variant
      if (ext !== '.avif') {
        const webpBuffer = await sharp(filePath)
          .resize(resizeOpts)
          .webp({ quality: WEBP_QUALITY })
          .toBuffer();

        const webpPath = path.join(IMAGES_DIR, `${baseName}.webp`);
        fs.writeFileSync(webpPath, webpBuffer);
      }

      const sizeAfter = fs.statSync(path.join(IMAGES_DIR, `${baseName}${ext === '.avif' ? '.avif' : '.jpg'}`)).size;
      const webpSize = fs.existsSync(path.join(IMAGES_DIR, `${baseName}.webp`))
        ? fs.statSync(path.join(IMAGES_DIR, `${baseName}.webp`)).size
        : 0;

      const reduction = ((1 - sizeAfter / sizeBefore) * 100).toFixed(1);
      console.log(
        `${file}: ${(sizeBefore / 1024).toFixed(0)}KB → ${(sizeAfter / 1024).toFixed(0)}KB (${reduction}% smaller) | WebP: ${(webpSize / 1024).toFixed(0)}KB`
      );
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
  }

  console.log('\nDone! All images optimized.');
}

optimizeImages();
