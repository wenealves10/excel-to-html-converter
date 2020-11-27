class Table{
    constructor(date){
        this.header = date[0]
        date.shift()
        this.body = date
    }
}

module.exports = Table;