var isElectron = require('is-electron-renderer');

window.isElectron = isElectron;

function loadApp() { 
    return new Promise((resolve, reject) => {
        console.log('is this running in electron.js?: ', isElectron);
        const msgEl = document.getElementById('message');
        
        const runtime = isElectron ? 'electron.js' : 'a web browser'
        
        msgEl.innerHTML = 'This is ' + runtime + "!!!";
        
        if (isElectron) {
            console.log('requiring fs here worked in webpack 2, but not in 4, as it seems now it breaks the web build... to be continued...')
        }
        else {
            resolve()
        }
        
    })
}

loadApp().then(res => console.log(res), err => console.log(err))
