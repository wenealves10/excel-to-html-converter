class DataManipulation {

    static Process(data) {
        const database = data.split('\r\n')
        const rows = []

        database.forEach(element => {
            let row = element.split(',')
            rows.push(row)
        });

        return rows
    }
}

module.exports = DataManipulation;