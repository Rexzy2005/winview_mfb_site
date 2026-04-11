const fs = require('fs');
let code = fs.readFileSync('src/components/landing/template_components/Hero.tsx', 'utf8');

// Move FloatingCoins to background layer
code = code.replace(
  'z-[20] pointer-events-none opacity-[0.7] mix-blend-normal"',
  'z-0 pointer-events-none opacity-30 mix-blend-screen"'
);

code = code.replace(
  'z-[40] pointer-events-none opacity-100 mix-blend-normal"',
  'z-0 pointer-events-none opacity-30 mix-blend-screen"'
);

// Reduce logo sizes on mobile in Hero
code = code.replace(
  '<img src="/cbn_logo.png" alt="CBN Logo" className="h-9 sm:h-12 w-9 object-contain" />',
  '<img src="/cbn_logo.png" alt="CBN Logo" className="h-6 sm:h-10 w-auto object-contain" />'
);

code = code.replace(
  '<img src="/ndic_logo.png" alt="NDIC Logo" className="h-9 sm:h-12 sm:w-12 w-9 object-contain px-2 py-1 rounded-sm" />',
  '<img src="/ndic_logo.png" alt="NDIC Logo" className="h-6 sm:h-10 w-auto object-contain px-1 sm:px-2 py-0.5 sm:py-1 rounded-sm" />'
);

fs.writeFileSync('src/components/landing/template_components/Hero.tsx', code);
console.log("Updated Hero.tsx successfully!");
