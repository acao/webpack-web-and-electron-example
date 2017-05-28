const message = document.getElementById('message');
const string = 'is this running in electron.js?: ' + require('is-electron-renderer');
message.innerHTML = string;

