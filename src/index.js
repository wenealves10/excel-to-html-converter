const Reader = require('../Reader/Reader')

const read = new Reader()

let date = read.read(__dirname+'/../escola.csv')

console.log(date)