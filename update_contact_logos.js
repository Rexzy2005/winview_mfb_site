const fs = require('fs');
let code = fs.readFileSync('src/components/landing/template_components/Contact.tsx', 'utf8');

code = code.replace(
  '<img src="/cbn_logo.png" alt="CBN Logo" className="h-6 sm:h-10 w-6 object-contain" />',
  '<img src="/cbn_logo.png" alt="CBN Logo" className="h-5 sm:h-8 w-auto object-contain" />'
);

code = code.replace(
  '<img src="/ndic_logo.png" alt="NDIC Logo" className="h-8 w-8 object-contain rounded-sm" />',
  '<img src="/ndic_logo.png" alt="NDIC Logo" className="h-5 sm:h-8 w-auto object-contain rounded-sm" />'
);

fs.writeFileSync('src/components/landing/template_components/Contact.tsx', code);
console.log("Updated Contact.tsx successfully!");
