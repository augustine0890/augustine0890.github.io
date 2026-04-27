const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  await page.goto('http://localhost:4000/cv/', {
    waitUntil: 'networkidle2',
    timeout: 30000,
  });

  // Use print media so _latex_extras.scss print rules apply
  await page.emulateMediaType('print');

  const outputPath = path.resolve('files/augustine-nguyen-cv.pdf');

  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '20mm', bottom: '20mm', left: '18mm', right: '18mm' },
  });

  await browser.close();
  console.log(`CV PDF written to ${outputPath}`);
})();
