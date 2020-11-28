const Reader = require('../Reader/Reader')
const dataManipulation = require('../Data-manipulation/DataManipulation')
const Table = require('../Table/Table')
const EjsParser = require('../EjsParser/EjsParser')
const HtmlGenerator = require('../HtmlGenerator/HtmlGenerator')
const PdfGenerator = require('../PdfGenerator/PdfGenerator')
async function main() {
    const read = new Reader()
    let date = read.read(__dirname + '/../escola.csv')
    let databases = dataManipulation.Process(date)
    const list = new Table(databases)
    const html = await EjsParser.Parser(list)
    HtmlGenerator.Generate(html)
    PdfGenerator.Generate(Date.now()+'table.pdf',html)
}

main()
