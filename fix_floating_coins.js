const fs = require('fs');
let code = fs.readFileSync('src/components/landing/template_components/FloatingCoins.tsx', 'utf8');

// Make geometry smaller
code = code.replace(
  'new THREE.CylinderGeometry(1.5, 1.5, 0.4, 32)',
  'new THREE.CylinderGeometry(0.8, 0.8, 0.2, 32)'
);

// Lower z-index
code = code.replace(
  'zIndex: 100',
  'zIndex: 0'
);

// Remove debug background
code = code.replace(
  'className="absolute inset-0 w-full h-full pointer-events-none bg-red-500/20"',
  'className="absolute inset-0 w-full h-full pointer-events-none"'
);

// Lower opacity in Hero wrapper even more just in case
// Already handled previously by switching it to z-0 and opacity-30

// Reduce emissive to make them less bright and distracting
code = code.replace(
  'emissiveIntensity: 0.4',
  'emissiveIntensity: 0.1'
);

// Remove the center big coin block
code = code.replace(
  /const centerMesh[\s\S]+?baseY: 0\n    \}\);/,
  '// Center coin removed so it stays in background'
);

fs.writeFileSync('src/components/landing/template_components/FloatingCoins.tsx', code);
console.log("Updated FloatingCoins.tsx successfully!");
