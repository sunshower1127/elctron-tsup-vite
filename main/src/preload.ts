import { contextBridge, ipcRenderer } from "electron";

const versions = {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: () => ipcRenderer.invoke("ping"), // Example of invoking a main process function
  // we can also expose variables, not just functions
};

contextBridge.exposeInMainWorld("versions", versions);

// TypeScript declaration for the global window object
// This allows us to use `window.versions` in the renderer process
declare global {
  interface Window {
    versions: typeof versions;
  }
}
