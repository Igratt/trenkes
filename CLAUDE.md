# Trenkės skaičiuoklė

Grato (GitHub `Igratt`) skaičiuoklės PWA. Pastabos Claude sesijoms:

- Atsakyk lietuviškai, trumpai, pabaigoje aiški išvada: kas pasikeitė ir ką Gratui daryti.
- Taupyk tokenus.
- Prieš didelius ar neaiškius pakeitimus išsiaiškink klausimais, mažus sprendimus priimk pats.

## Techninis minimumas

- Statinė PWA be build žingsnio: `index.html`, `sw.js`, `manifest.webmanifest`, ikonos; `native/` – mobiliosios dalies failai.
- GitHub Pages rodo tiesiai `main` šaką: https://igratt.github.io/trenkes/. Todėl **kiekvienas commit į `main` iškart gyvas**. Pakeitimus daryk šakoje ir PR, suliejimas yra Grato sprendimas.
- Pakeitus failus patikrink `sw.js` talpyklos (cache) pavadinimą ar versiją, kitaip įdiegtos programos gali rodyti seną versiją.
- Darbalaukio versija (Electron exe) laikoma Grato kompiuteryje, ne šioje repozitorijoje.

## Kontekstas ir istorija

Projekto istorija ir Grato pageidavimai yra privačioje repozitorijoje `Igratt/claude-brain`
(`memory/project_trenkes_calculator.md`, `PROJEKTAI.md`, `pokalbiai/`). Jei ji pasiekiama
(`gh repo clone Igratt/claude-brain --depth 1`), perskaityk tą failą prieš darbą; jei ne, paprašyk Grato įklijuoti.
