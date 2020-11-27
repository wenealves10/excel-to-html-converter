const fs = require('fs')


class Reader {

    read(filePath) {
        try {

            return fs.readFileSync(filePath, 'utf-8')
        }
        catch(err){

            return undefined
        }
    }
}

module.exports = Reader;