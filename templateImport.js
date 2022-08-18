let fs = require('fs');

module.exports = fs.readFile('./src/template', (err, files) => {
    if(err) throw new Error(err);

    return files;
})