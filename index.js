/* eslint strict: 0 */
'use strict';

const electron = require('electron');
const { app, BrowserWindow, Menu, shell, crashReporter } = electron;
let menu;
let template;
let mainWindow = null;

crashReporter.start({
  productName: 'webpack-electron-example',
  companyName: 'acao',
  submitURL: '',
  uploadToServer: false
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});


app.on('ready', () => {
  mainWindow = new BrowserWindow({ width: 1024, height: 728 });

  mainWindow.loadURL(`file://${__dirname}/src/index.html`);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
})
