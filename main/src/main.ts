import { app, BrowserWindow } from "electron";
import path from "node:path";
import { setupPingHandler } from "./ipc/ping";

function createWindow() {
  // 브라우저 윈도우를 생성합니다.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // 개발 모드에서는 Vite 개발 서버의 URL 로드
  if (process.env.NODE_ENV === "development") {
    mainWindow.loadURL("http://localhost:5173"); // Vite 개발 서버 기본 포트
  } else {
    mainWindow.loadFile(path.join(__dirname, "../../renderer/dist/index.html"));
  }
}

// Electron이 초기화를 완료하고 브라우저 윈도우를 생성할 준비가 되었을 때
// 이 메서드가 호출됩니다. 일부 API는 이 이벤트가 발생한 후에만 사용할 수 있습니다.
app.whenReady().then(() => {
  // IPC 핸들러 설정
  setupPingHandler();

  createWindow();

  app.on("activate", function () {
    // macOS에서는 dock 아이콘을 클릭했을 때 다른 윈도우가 없다면
    // 일반적으로 새 윈도우를 다시 생성합니다.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// 모든 윈도우가 닫혔을 때 종료합니다 (macOS 제외).
// macOS에서는 사용자가 Cmd + Q로 명시적으로 종료할 때까지
// 애플리케이션과 메뉴 바가 활성 상태로 유지되는 것이 일반적입니다.
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

// 이 파일에는 앱의 메인 프로세스 관련 코드를 포함할 수 있습니다.
// 별도의 파일로 분리해서 여기서 require할 수도 있습니다.
