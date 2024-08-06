
const request = require('request');

// https://docs.awesomeapi.com.br/

const moedas = 'USD-BRL,EUR-BRL,BTC-BRL'
request(options, callback)

const options = {
    url: `https://economia.awesomeapi.com.br/last/${moedas}`,
    method: 'GET',
    Headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8'
    }
}

const callback_cotacoes = function(erro, res, body){
    let json = JSON.parse(body)
    console.log(json)
}

const callback_dolar = (erro, res, body) => {
    let json = JSON.parse(body)
    cotacao = json.USDBRL['bid']
    dia = json.USDBRL['create-date']
    console.log('DOLAR = R$'+cotacao+' dia: '+dia)
}

request(options, callback_cotacoes)
request(options, callback_dolar)