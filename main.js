const { app, BrowserWindow } = require("electron");
const path = require("path");
app.commandLine.appendSwitch("enable-features", "FileSystemAccess");
function createWindow() {
  const win = new BrowserWindow({
    width: 1400, height: 900,
    webPreferences: { sandbox: false }
  });
  win.loadFile("index.html");
}
app.whenReady().then(createWindow);
app.on("window-all-closed", () => { if (process.platform !== "darwin") app.quit() });
