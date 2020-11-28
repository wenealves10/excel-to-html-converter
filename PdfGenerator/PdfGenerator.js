const htmlPdf = require('html-pdf')

class PdfGenerator{
    static Generate(filename, html){
        htmlPdf.create(html,{}).toFile(filename,err =>{})
    }
}

module.exports = PdfGenerator