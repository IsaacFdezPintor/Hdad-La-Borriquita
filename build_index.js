import fs from 'fs';
import path from 'path';

const styles1 = fs.readFileSync(path.resolve('parts/styles.css'), 'utf-8');
const styles2 = fs.readFileSync(path.resolve('parts/styles_content.css'), 'utf-8');
const part1 = fs.readFileSync(path.resolve('parts/header_hero_history.html'), 'utf-8');
const part2 = fs.readFileSync(path.resolve('parts/noticias_titulares_galeria.html'), 'utf-8');
const part3 = fs.readFileSync(path.resolve('parts/cultos_penitencia_hermano_caridad_footer.html'), 'utf-8');
const part4 = fs.readFileSync(path.resolve('parts/modals_and_overlays.html'), 'utf-8');
const scripts = fs.readFileSync(path.resolve('parts/scripts.js'), 'utf-8');

const htmlContent = `<!doctype html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Hermandad de la Borriquita - Fernán Núñez | Sitio Web Oficial</title>
  <meta name="description" content="Sitio web oficial de la Hermandad y Cofradía de Nuestro Padre Jesús de los Reyes en su Entrada Triunfal en Jerusalén y María Santísima del Rosario (La Borriquita) de Fernán Núñez (Córdoba)." />
  <meta property="og:title" content="Hermandad de la Borriquita - Fernán Núñez" />
  <meta property="og:description" content="Sitio web oficial de la Hermandad y Cofradía de Nuestro Padre Jesús de los Reyes en su Entrada Triunfal en Jerusalén y María Santísima del Rosario (La Borriquita) de Fernán Núñez (Córdoba)." />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />

  <!-- GOOGLE FONTS: CINZEL & MONTSERRAT -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">

  <style>
${styles1}

${styles2}
  </style>
</head>
<body>

${part1}

${part2}

${part3}

${part4}

<script>
${scripts}
</script>

</body>
</html>
`;

fs.writeFileSync(path.resolve('index.html'), htmlContent, 'utf-8');
console.log('Successfully built index.html! File size:', htmlContent.length, 'bytes');
