class Table {
    constructor(date) {
        this.header = date[0]
        date.shift()
        this.body = date
    }

    get CountRow() {
        return this.body.length
    }

    get CountColumn() {
        return this.header.length
    }
}

module.exports = Table;