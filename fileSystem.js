const fs = require('fs')
//mkdir
fs.mkdir('./docs', (err) => {
    if (err) {
        console.log(err.message)
    }
    else console.log("Folder created")


})