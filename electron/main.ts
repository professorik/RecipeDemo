import { app, BrowserWindow, ipcMain, dialog, shell } from 'electron'
import * as fs from "fs";
const excelToJson = require('convert-excel-to-json');

let mainWindow: BrowserWindow | null

declare const MAIN_WINDOW_WEBPACK_ENTRY: string
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string

// const assetsPath =
//   process.env.NODE_ENV === 'production'
//     ? process.resourcesPath
//     : app.getAppPath()

function createWindow () {
  mainWindow = new BrowserWindow({
    // icon: path.join(assetsPath, 'assets', 'icon.png'),
    width: 900,
    height: 700,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY
    }
  })

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
  // mainWindow.webContents.openDevTools({ mode: 'detach' });
}

async function registerListeners () {
  /**
   * This comes from bridge integration, check bridge.ts
   */
  ipcMain.on('message', (_, message) => {
    console.log(message)
  })
}

app.on('ready', createWindow)
  .whenReady()
  .then(registerListeners)
  .catch(e => console.error(e))

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

ipcMain.on('upload-file', (event, arg) => {
  dialog.showOpenDialog({
    properties: ['openFile'],
    filters: [
      { name: 'Excel', extensions: ['xlsx'] }
    ],
  }).then(result => {
    console.log(result.canceled)
    console.log(result.filePaths)

    const spreadsheet = excelToJson({
      sourceFile: result.filePaths[0]
    });
    event.reply('upload-file-reply', spreadsheet);
  }).catch(err => {
    console.log(err)
  });
})

ipcMain.on('print-to-pdf', event => {
  const win = BrowserWindow.fromWebContents(event.sender);
  dialog
      .showSaveDialog({
        defaultPath: 'PDF File',
        filters: [
          {
            name: 'PDF',
            extensions: ['pdf'],
          },
        ],
      })
      .then(dialogData => {
        if (dialogData.filePath) {
          console.log(dialogData.filePath)

          // @ts-ignore
          win.webContents.printToPDF({
            landscape: true,
            pageSize: 'A4'
          }).then(data => {
            // @ts-ignore
            fs.writeFile(dialogData.filePath, data, err => {
              if (err) return console.log(err.message);
              console.log(`Wrote PDF successfully to ${dialogData.filePath}`)
              // @ts-ignore
              shell.openPath(dialogData.filePath);
              // event.sender.send('wrote-pdf', pdfPath);
              event.reply('print-pdf-reply');
            })
          }).catch(error => {
            console.log(`Failed to write PDF to ${dialogData.filePath}: `, error)
          })
        }
      })
      .catch(err => console.log(err));
});
