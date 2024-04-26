const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronApi', {
  closeApp: () => {
    ipcRenderer.invoke('close-app')
  }
})
