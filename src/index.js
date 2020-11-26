const fs = require('fs')
const caminho = __dirname + '/../users.json'

fs.readFile(caminho,'utf-8',(err, date) =>{
    if(!err){
        const dates = JSON.parse(date)
        const form = dates.map(element =>{
            return `
             -------------------------------------
             nome: ${element.name}
             idade: ${element.old} anos
             nascimento: ${element.date}
             -------------------------------------
             `
        })

        fs.writeFile(__dirname+'/list.txt',form, err =>{
            if(!err){
                console.log('Arquivo salvo')
            }else{
                console.log(err)
            }
        })
    }
})


