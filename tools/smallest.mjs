import fs from 'fs';

let result = '// This file is created automatically, do not edit manually. \n// Use "npm run smallest"';

[
    { format: 'png', mimeType: 'image/png' },
    { format: 'apng', mimeType: 'image/apng' },
    { format: 'bmp', mimeType: 'image/bmp' },
    { format: 'gif', mimeType: 'image/gif' },
    { format: 'heic', mimeType: 'image/heic' },
    { format: 'ico', mimeType: 'image/vnd.microsoft.icon' },
    { format: 'jpg', mimeType: 'image/jpeg' },
    { format: 'jxl', mimeType: 'image/jxl' },
    { format: 'tiff', mimeType: 'image/tiff' },
    { format: 'avif', mimeType: 'image/avif' },
    { format: 'webp', mimeType: 'image/webp' },
].forEach(item => {
    const file = fs.readFileSync('./src/image/smallest/smallest.' + item.format);
    result += `\n\n// Smallest ${item.format.toUpperCase()} ${item.mimeType.split('\/')[0]} is ${file.length} bytes.\nexport const ${item.format.toUpperCase()}_SMALLEST_BASE64 = 'data:${item.mimeType};base64,${Buffer.from(file).toString('base64')}';`;
});

fs.writeFileSync('./src/image/smallest/index.ts', result + '\n');
