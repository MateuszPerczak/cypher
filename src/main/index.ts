import { join } from "path";
import { app, BrowserWindow, Menu, globalShortcut } from "electron";

const createWindow = () => {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    webPreferences: {
      preload: join(__dirname, "../preload/preload.js"),
    },
  });
  window.loadURL(
    import.meta.env.DEV ? "http://localhost:5173" : join(__dirname, "../../index.html"),
  );
  window.on("ready-to-show", () => window.show());

  return window;
};

const initWindow = () => {
  Menu.setApplicationMenu(null);
};

initWindow();

app.on("ready", () => {
  const window = createWindow();
  globalShortcut.register("CmdOrCtrl+F12", () => {
    window.isFocused() && window.webContents.toggleDevTools();
  });
});

// function createWindow() {
//   // Create the browser window.
//   Menu.setApplicationMenu(null);
//   const mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//     show: false,
//     webPreferences: {
//       preload: join(__dirname, "../preload/preload.js"),
//     },
//   });

//   mainWindow.on("ready-to-show", () => mainWindow.show());

//   // and load the index.html of the app.
//   mainWindow.loadURL(
//     isDev ? "http://localhost:5173" : join(__dirname, "../../index.html"),
//   );
//   // Open the DevTools.
//   if (isDev) {
//     mainWindow.webContents.openDevTools();
//   }
// }
