# Electron + TypeScript + Vite + React

Modern Electron application template with TypeScript, using tsup for main process bundling and Vite for renderer process.

## Features

- 🚀 **Fast Development**: Hot reload for both main and renderer processes
- ⚡ **Vite**: Lightning fast build tool for renderer process
- 📦 **tsup**: Fast TypeScript bundler for main process
- 🎯 **TypeScript**: Full type safety across the entire application
- ⚛️ **React**: Modern UI library with hooks
- 🏗️ **Workspaces**: Separate main and renderer processes with npm workspaces
- 📱 **Cross-platform**: Build for Windows, macOS, and Linux

## Project Structure

```
├── package.json           # Root package with workspaces configuration
├── main/                  # Electron main process
│   ├── package.json
│   ├── tsup.config.ts     # tsup configuration for main process
│   └── src/
│       ├── main.ts        # Main entry point
│       ├── preload.ts     # Preload script
│       └── ipc/           # IPC handlers
│           └── ping.ts
├── renderer/              # React renderer process
│   ├── package.json
│   ├── vite.config.ts     # Vite configuration
│   ├── index.html
│   └── src/
│       ├── main.tsx       # React entry point
│       ├── App.tsx        # Main React component
│       └── assets/
└── resources/             # Static resources
```

## Getting Started

### Prerequisites

- Node.js 16 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd electron-tsup-vite

# Install dependencies
npm install
```

### Development

```bash
# Start development server (renderer + main + electron)
npm run dev
```

This command will:

1. Start Vite dev server for renderer process (http://localhost:5173)
2. Build and watch main process with tsup
3. Launch Electron when ready

### Building

```bash
# Build both processes
npm run build

# Build only main process
npm run build:main

# Build only renderer process
npm run build:renderer
```

### Packaging

```bash
# Package for current platform
npm run package

# Package as directory (for debugging)
npm run package:dir

# Package for specific platforms
npm run package:mac
npm run package:win
```

## Tech Stack

### Main Process

- **Electron**: Desktop app framework
- **TypeScript**: Type safety
- **tsup**: Fast bundler for Node.js

### Renderer Process

- **React**: UI library
- **TypeScript**: Type safety
- **Vite**: Build tool and dev server
- **ESLint**: Code linting

## Configuration

### Main Process (tsup)

- Entry points: `main.ts` and `preload.ts`
- Output format: CommonJS (required for Electron)
- Target: Node.js 16
- External: Electron (not bundled)

### Renderer Process (Vite)

- React with SWC plugin for fast refresh
- TypeScript with strict mode
- Hot module replacement in development

## Scripts

| Command                  | Description                       |
| ------------------------ | --------------------------------- |
| `npm run dev`            | Start development with hot reload |
| `npm run build`          | Build both main and renderer      |
| `npm run build:main`     | Build only main process           |
| `npm run build:renderer` | Build only renderer process       |
| `npm run package`        | Package app for distribution      |
| `npm run package:dir`    | Package as directory              |
| `npm run package:mac`    | Package for macOS                 |
| `npm run package:win`    | Package for Windows               |

## IPC Communication

The template includes a basic IPC setup:

- **Main Process**: Handles `ping` IPC calls
- **Preload Script**: Exposes safe APIs to renderer
- **Renderer Process**: Can call `window.versions.ping()`

## License

MIT

## Author

sunshower1127@gmail.com
