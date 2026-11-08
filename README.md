# Lumina Glass

**A liquid-glass optical studio, browser audio lab and creative workspace.**

- **Live site:** https://pooya-labs.github.io/lumina-glass/
- **Repository:** https://github.com/pooya-labs/lumina-glass
- **Maintainer:** [Pooya Goodarzi](https://github.com/pooya-labs)

## What’s inside

- **Liquid Optical Studio** — tune optical parameters, preview the result, and save or export presets.
- **Web Audio EQ** — a five-band browser-native equalizer for the built-in tone, local audio files, and microphone input.
- **Sprint Workflow** — a compact local task board with persistent browser storage.
- **Project Ecosystem** — a current directory of Pooya Labs projects, live demos, and source repositories.

## Project ecosystem

| Project | Website | Source |
| --- | --- | --- |
| Pooya.OS | [Open](https://pooya-labs.github.io/pooya-os/) | [GitHub](https://github.com/pooya-labs/pooya-os) |
| AuraPulse | [Open](https://pooya-labs.github.io/aurapulse/) | [GitHub](https://github.com/pooya-labs/aurapulse) |
| NexusCanvas | [Open](https://pooya-labs.github.io/nexus-canvas/) | [GitHub](https://github.com/pooya-labs/nexus-canvas) |
| GlobalCart | [Open](https://pooya-labs.github.io/globalcart/) | [GitHub](https://github.com/pooya-labs/globalcart) |
| Aetherflow | — | [GitHub](https://github.com/pooya-labs/aetherflow) |
| Orbit | — | [GitHub](https://github.com/pooya-labs/orbit) |
| Salon Booking | — | [GitHub](https://github.com/pooya-labs/salon-booking) |
| Pooya Labs Platform | [Open](https://pooya-labs.github.io/pooya-labs-platform/) | [GitHub](https://github.com/pooya-labs/pooya-labs-platform) |

## Local-first behavior

Optical presets, EQ settings, and task-board data are stored in the current browser. They are not synchronized to a remote account or database. Audio is processed through the browser’s Web Audio API; microphone use requires permission and a secure context (HTTPS or localhost). Playback does not restart automatically after a reload.

## Stack

Next.js, React, TypeScript, Tailwind CSS, SVG/Canvas, Web Audio API, and localStorage.

## Development

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

## Links

- [GitHub profile](https://github.com/pooya-labs)
- [Pooya Labs Platform](https://pooya-labs.github.io/pooya-labs-platform/)
