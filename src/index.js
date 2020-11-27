const Reader = require('../Reader/Reader')
const dataManipulation = require('../Data-manipulation/DataManipulation')
const Table = require('../Table/Table')

const read = new Reader()

let date = read.read(__dirname+'/../escola.csv')
let databases = dataManipulation.Process(date)
const list = new Table(databases)

