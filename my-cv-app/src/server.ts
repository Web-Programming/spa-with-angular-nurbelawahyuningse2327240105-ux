import express from 'express';
import { createRequestHandler } from '@angular/ssr';
import { fileURLToPath } from 'url';
import path from 'path';

// Setup agar __dirname bisa digunakan
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env['PORT'] || 4000;

// Folder statis dari source (bisa diubah ke dist nanti)
const browserFolder = path.join(__dirname, 'app');
app.use(express.static(browserFolder, { maxAge: '1y' }));

// SSR handler tanpa dist
app.get('*', async (req, res) => {
  try {
    // Import file routes server langsung dari source TS
    const routesModule = await import(path.join(__dirname, 'app', 'app.routes.server.ts'));
    const handler = createRequestHandler(routesModule);

    // Jalankan handler Angular
    const html = await handler(req);
    res.send(html);
  } catch (err) {
    console.error('❌ SSR Error:', err);
    res.status(500).send('SSR Error: ' + err);
  }
});

app.listen(port, () => {
  console.log(`✅ Angular SSR dev server running at http://localhost:${port}`);
});
