# entm-template

[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/ratprez)

Starter template for building [entm-core](https://github.com/RatPrez/entm-core) modules. Pre-configured TypeScript setup, correct build pipeline, and automatic registration with entm-core on resource start.

---

## Prerequisites

- [entm-core](https://github.com/RatPrez/entm-core) installed and running on your server
- Node.js + npm

---

## Getting Started

### 1. Copy this template

Download or clone this repo and drop it into your `resources` directory. Rename the folder to whatever your module is called.

### 2. Install dependencies

```bash
npm install
```

### 3. Build

```bash
npm run build
```

### 4. Add to server.cfg

```
ensure entm-core
ensure your-module-name
```

`entm-core` must be ensured **before** your module.

### 5. Done

The loader script registers your module with entm-core automatically on resource start. Your systems are added to the world and will tick with every frame.

---

## Development

| Command | Description |
|---|---|
| `npm run build` | Build client and server bundles |
| `npm run watch` | Rebuild on file changes |
| `npm run typecheck` | Type-check without building |

---

## Structure

```
your-module/
├── src/
│   ├── client/
│   │   └── index.ts   — client systems + __registerModule call
│   └── server/
│       └── index.ts   — server systems + __registerModule call
├── loader/
│   ├── client.js      — tells entm-core to load this module (client)
│   └── server.js      — tells entm-core to load this module (server)
├── dist/              — compiled output (generated)
└── fxmanifest.lua
```

---

## Writing Systems

See [entm-core](https://github.com/RatPrez/entm-core) for full documentation on components, systems, shared components, and the module API.

---

[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/ratprez)
