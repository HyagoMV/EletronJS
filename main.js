// Importa os módulos 
const { app, BrowserWindow } = require('electron');
const { ipcMain, nativeTheme } = require('electron');
const { Menu, Tray } = require('electron');
const path = require('path');

// ----------------------------------------------------------------------------------------------------

let win = null;

function createWindow () {
    win = new BrowserWindow({
      width: 800,
      height: 600,
      // Define um ícone para a janela 
      icon: __dirname + '/logo.png',
      webPreferences: {
          // Anexar um script de pré-carregamento 
        preload: path.join(__dirname, '/preload.js')
      }
    });

    // Remove a barra de menu
    win.removeMenu();
    
    // Carrega um arquivo local
    win.loadFile('index.html');

    // Carrega um arquivo remoto
    // win.loadURL("https://www.electronjs.org/");
    
    // Abre o DevTools para depuração
    // win.webContents.openDevTools();

    win.on('close', (e) => {
      // Impede o comportamento padrão
      e.preventDefault();
      // Novo comportamento
      win.hide();
    });

    ipcMain.handle('dark-mode:toggle', () => {
        if (nativeTheme.shouldUseDarkColors)
          nativeTheme.themeSource = 'light';
        else 
          nativeTheme.themeSource = 'dark';

        return nativeTheme.shouldUseDarkColors;
      });
    
    ipcMain.handle('dark-mode:system', () => {
        nativeTheme.themeSource = 'system';
    });

};

// ----------------------------------------------------------------------------------------------------

let tray = null;

// Aguarda o evento 'ready' ser disparado para criar uma janelas de navegador
// OBS: Algumas APIs somente podem ser usadas depois que este evento ocorre.
app.whenReady().then(() => {
    createWindow();

    // Chamado quando o evento 'activate' é disparado
    app.on('activate', () => {
        // No MacOS é NORMAL cria uma janela quando o processo que está ativo não possue nenhuma janela
        if (BrowserWindow.getAllWindows().length === 0)
          createWindow();
    });

    // Adiciona um ícone na bandeja
    // OBS: No Windows é recomendado usar '.ico'
    tray = new Tray(__dirname + '/example.ico')
    const contextMenu = Menu.buildFromTemplate([
      { label: 'Sair', click: () => app.exit()}
    ]);

    tray.setToolTip('This is my application.');
    tray.setContextMenu(contextMenu);
    tray.on('click', () => win.show());
});

// ----------------------------------------------------------------------------------------------------

// Chamado quando o evento 'window-all-closed' é disparado
app.on('window-all-closed', () => {
    // Encerrar o aplicativo quando todas as janelas foram fechadas, exceto no macOS
    // OBS: Para encerrar o aplicativo no MacOS use o atalho: Cmd + Q
    if (process.platform !== 'darwin') 
        app.quit();
});

// ----------------------------------------------------------------------------------------------------

