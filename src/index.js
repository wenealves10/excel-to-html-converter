const Reader = require('../Reader/Reader')
const dataManipulation = require('../Data-manipulation/DataManipulation')

const read = new Reader()

let date = read.read(__dirname+'/../escola.csv')
let databases = dataManipulation.Process(date)

console.log(databases)