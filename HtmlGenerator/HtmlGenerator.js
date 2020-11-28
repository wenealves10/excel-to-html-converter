const fs = require('fs')


class HtmlGenerator{
    static async Generate(html){
        fs.writeFile('./views/html/index.html',html, err =>{
            if(!err){
                console.log('Salvo!')
            }else{
                console.log('Deu um Erro!')
            }
        })
    }
}

module.exports = HtmlGenerator