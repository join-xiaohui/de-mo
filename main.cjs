
const {BrowserWindow, app , session } = require("electron")
const path = require('path')

const createWin = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        maximizable:false
    })
    win.loadURL("http://localhost:5173/").then(r => {})
    win.setMenu(null)
}
 
app.whenReady().then(() => {
    createWin()
});

app.on('ready', async () => {
    await session.defaultSession.loadExtension(
      path.join(__dirname, './public/ophjlpahpchlmihnnnihgmmeilfjmjjc/3.0.2_0'),
      { allowFileAccess: true }
    )
})
