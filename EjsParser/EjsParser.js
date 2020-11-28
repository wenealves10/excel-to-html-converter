const ejs = require('ejs')

class EjsParser {
    static async Parser(table) {
        try {
            return await ejs.renderFile('./views/base_ejs/base.ejs', {
                header: table.header,
                body: table.body
            })
        } catch (err) {
            return undefined
        }

    }
}

module.exports = EjsParser