const fs = require('fs');
let code = fs.readFileSync('src/app/layout.tsx', 'utf8');

// remove all injected scripts
code = code.replace(/<Script src="https:\/\/cdn\.tailwindcss\.com" strategy="beforeInteractive" \/>\n\s*<Script src="https:\/\/code\.iconify\.design\/iconify-icon\/1\.0\.8\/iconify-icon\.min\.js" strategy="lazyOnload" \/>\n\s*/g, '');

// add exactly one
code = code.replace(/<body suppressHydrationWarning>/, '<body suppressHydrationWarning>\n        <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />\n        <Script src="https://code.iconify.design/iconify-icon/1.0.8/iconify-icon.min.js" strategy="lazyOnload" />');

fs.writeFileSync('src/app/layout.tsx', code);
console.log("Fixed layout duplications!");
