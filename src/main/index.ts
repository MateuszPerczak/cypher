import { app, BrowserWindow, Menu } from "electron";
import { join } from "path";
import { optimizer, is } from "@electron-toolkit/utils";

const createWindow = () => {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    title: "Cypher",
    webPreferences: {
      preload: join(__dirname, "../preload/index.js"),
      sandbox: false,
    },
  });

  if (is.dev) {
    window.loadURL("http://localhost:5173");
  } else {
    window.loadFile(join(__dirname, "../renderer/index.html"));
  }

  window.on("ready-to-show", () => window.show());

  return window;
};

const initWindow = () => {
  Menu.setApplicationMenu(null);
};

initWindow();

app.on("ready", () => {
  createWindow();
});

if (is.dev) {
  app.on("browser-window-created", (_, window) => {
    optimizer.watchWindowShortcuts(window);
  });
}
