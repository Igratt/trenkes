// Copies the web app from the repo root into www/ (what Capacitor bundles into the APK).
import { cpSync, mkdirSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const here = fileURLToPath(new URL('.', import.meta.url));
const root = here + '../';
const www = here + 'www/';

rmSync(www, { recursive: true, force: true });
mkdirSync(www, { recursive: true });
for (const f of ['index.html', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png']) {
  cpSync(root + f, www + f);
}
console.log('www/ refreshed from the repo root');
