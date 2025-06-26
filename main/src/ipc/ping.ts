import { ipcMain } from "electron";

export function setupPingHandler() {
  ipcMain.handle("ping", () => {
    const currentTime = new Date().toLocaleString("ko-KR");
    console.log("pong! 현재 시간:", currentTime);
    return { message: "pong", timestamp: currentTime };
  });
}
