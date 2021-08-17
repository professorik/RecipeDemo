import { contextBridge, ipcRenderer } from 'electron'

export const api = {

  sendMessage: (message: string) => {
    ipcRenderer.send('message', message)
  },

  send: (channel: string) => {
    ipcRenderer.send(channel)
  },

  on: (channel: string, callback: Function) => {
    ipcRenderer.on(channel, (_, data) => callback(data))
  }
}

contextBridge.exposeInMainWorld('Main', api)
