// core modules: path

const path = require('path')
//dirname
console.log('folder name:',path.dirname(__filename))
//filename
console.log('file name:',path.basename(__filename))
//extension name
console.log('extension name:',path.extname(__filename))
//parse
console.log('parse:',path.parse(__filename))
//Join
console.log('join',path.join(__dirname,'order','app.js')) //join C:\Users\OM Computers\nodejs\order\app.js