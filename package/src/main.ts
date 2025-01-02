import { app, BrowserWindow } from 'electron';
import { join, resolve } from 'path';
import { fork } from 'child_process';
import { existsSync } from 'fs';

let path = join(__dirname, '../../api/dist/src/index.js');
let pathFrontend = join(__dirname, '../../sistema/dist/sistema/browser/index.html');

if (!existsSync(path)) {
  console.error(`Arquivo não ecnontrado no caminho: ${path}`)
  process.exit(1);
}

let apiProcess = fork(path);

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: false
    }
  });

  win.loadFile(pathFrontend);
  win.webContents.on('did-fail-load', (event, errorCode, errorDescription) => {
    console.error(`Erro ao carregar a página: ${errorCode} - ${errorDescription}`);
  });
  win.webContents.openDevTools();

}

const startApi = () => {
  apiProcess.on('error', (error) => {
    console.error(`Erro ao inicar a API`, error);
  });

  apiProcess.on('exit', (code) => {
    console.log(`Processo da API encerrado com código: ${code}`);
  });
}

app.whenReady()
  .then(() => {
    startApi();
    createWindow();

    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
      }
    });
  })
  .catch(e => {
    e instanceof Error ? e.message : "Erro desconhecido."
  })

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('quit', () => {
  if (apiProcess) {
    apiProcess.kill();
  }
})