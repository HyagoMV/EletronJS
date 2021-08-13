const { app } = require('electron');

// Processo: Main
// App: Controle os eventos do ciclo de vida da aplicação.

// ----------------------------------------------------------------------------------------------------
// Evento: 'ready'
// ----------------------------------------------------------------------------------------------------
app.on('ready', () => {
    console.log('[app] ready');
});

// ----------------------------------------------------------------------------------------------------
// Evento: 'will-finish-launching'
// ----------------------------------------------------------------------------------------------------

app.on('will-finish-launching', () => {
    console.log('[app] will-finish-launching');
});

// ----------------------------------------------------------------------------------------------------
// Evento: 'window-all-closed'
// ----------------------------------------------------------------------------------------------------

app.on('window-all-closed', () => {
    console.log('[app] window-all-closed');

    app.quit();
});

// ----------------------------------------------------------------------------------------------------
// Evento: 'before-quit'
// ----------------------------------------------------------------------------------------------------

app.on('before-quit', () => {
    console.log('[app] before-quit');
});

// ----------------------------------------------------------------------------------------------------
// Evento: 'will-quit'
// ----------------------------------------------------------------------------------------------------

app.on('will-quit', () => {
    console.log('[app] will-quit');
});

// ----------------------------------------------------------------------------------------------------
// Evento: 'quit'
// ----------------------------------------------------------------------------------------------------

app.on('quit', () => {
    console.log('[app] quit');
});

// ----------------------------------------------------------------------------------------------------
// Evento: 'open-file' macOS
// ----------------------------------------------------------------------------------------------------

app.on('open-file', () => {
    console.log('[app] open-file');
});

// ----------------------------------------------------------------------------------------------------
// Evento: 'open-url' macOS
// ----------------------------------------------------------------------------------------------------

app.on('open-url', () => {
    console.log('[app] open-url');
});

// ----------------------------------------------------------------------------------------------------
// Evento: 'activate' macOS
// ----------------------------------------------------------------------------------------------------

app.on('activate', () => {
    console.log('[app] activate');
});

// ----------------------------------------------------------------------------------------------------
// Evento: 'did-become-active' macOS
// ----------------------------------------------------------------------------------------------------

app.on('did-become-active', () => {
    console.log('[app] did-become-active');
});

// ----------------------------------------------------------------------------------------------------
// Evento: 'continue-activity' macOS
// ----------------------------------------------------------------------------------------------------

app.on('continue-activity', () => {
    console.log('[app] continue-activity');
});

// ----------------------------------------------------------------------------------------------------
// Evento: 'will-continue-activity' macOS
// ----------------------------------------------------------------------------------------------------

app.on('will-continue-activity', () => {
    console.log('[app] will-continue-activity');
});

// ----------------------------------------------------------------------------------------------------
// Evento: 'continue-activity-error' macOS
// ----------------------------------------------------------------------------------------------------

app.on('continue-activity-error', () => {
    console.log('[app] continue-activity-error');
});

// ----------------------------------------------------------------------------------------------------
// Evento: 'activity-was-continued' macOS
// ----------------------------------------------------------------------------------------------------

app.on('activity-was-continued', () => {
    console.log('[app] activity-was-continued');
});

// ----------------------------------------------------------------------------------------------------
// Evento: 'update-activity-state' macOS
// ----------------------------------------------------------------------------------------------------

app.on('update-activity-state', () => {
    console.log('[app] update-activity-state');
});

// ----------------------------------------------------------------------------------------------------
// Evento: 'new-window-for-tab' no macOS
// ----------------------------------------------------------------------------------------------------

app.on('new-window-for-tab', () => {
    console.log('[app] new-window-for-tab');
});

// ----------------------------------------------------------------------------------------------------
// Evento: 'browser-window-blur'
// ----------------------------------------------------------------------------------------------------

app.on('browser-window-blur', () => {
    console.log('[app] browser-window-blur');
});

// ----------------------------------------------------------------------------------------------------
// Evento: 'browser-window-focus'
// ----------------------------------------------------------------------------------------------------

app.on('browser-window-focus', () => {
    console.log('[app] browser-window-focus');
});

// ----------------------------------------------------------------------------------------------------
// Evento: 'browser-window-created'
// ----------------------------------------------------------------------------------------------------

app.on('browser-window-created', () => {
    console.log('[app] browser-window-created');
});

// ----------------------------------------------------------------------------------------------------
// Evento: 'web-contents-created'
// ----------------------------------------------------------------------------------------------------

app.on('web-contents-created', () => {
    console.log('[app] web-contents-created');
});


// ----------------------------------------------------------------------------------------------------
// Evento: 'certificate-error'
// ----------------------------------------------------------------------------------------------------

app.on('certificate-error', () => {
    console.log('[app] certificate-error');
});

// ----------------------------------------------------------------------------------------------------
// Evento: 'select-client-certificate'
// ----------------------------------------------------------------------------------------------------

app.on('select-client-certificater', () => {
    console.log('[app] select-client-certificate');
});

// ----------------------------------------------------------------------------------------------------
// Evento: 'login'
// ----------------------------------------------------------------------------------------------------

app.on('login', () => {
    console.log('[app] login');
});

// ----------------------------------------------------------------------------------------------------
// Event: 'gpu-info-update'
// ----------------------------------------------------------------------------------------------------

app.on('gpu-info-update', () => {
    console.log('[app] gpu-info-update');
});

// ----------------------------------------------------------------------------------------------------
// Event: 'render-process-gone'
// ----------------------------------------------------------------------------------------------------

app.on('render-process-gone', () => {
    console.log('[app] render-process-gone');
});

// ----------------------------------------------------------------------------------------------------
// Event: 'child-process-gone'
// ----------------------------------------------------------------------------------------------------

app.on('child-process-gone', () => {
    console.log('[app] child-process-gone');
});

// ----------------------------------------------------------------------------------------------------
// Event: 'accessibility-support-changed' macOS e Windows
// ----------------------------------------------------------------------------------------------------

app.on('accessibility-support-changed', () => {
    console.log('[app] accessibility-support-changed');
});

// ----------------------------------------------------------------------------------------------------
// Evento: 'session-created'
// ----------------------------------------------------------------------------------------------------

app.on('session-created', () => {
    console.log('[app] session-created');
});


// ----------------------------------------------------------------------------------------------------
// Evento: 'second-instance'
// ----------------------------------------------------------------------------------------------------

app.on('second-instance', () => {
    console.log('[app] second-instance');
});

// ----------------------------------------------------------------------------------------------------
// Event: 'desktop-capturer-get-sources'
// ----------------------------------------------------------------------------------------------------

app.on('desktop-capturer-get-sources', () => {
    console.log('[app] desktop-capturer-get-sources');
});











