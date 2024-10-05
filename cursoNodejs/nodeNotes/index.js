import { createServer } from 'http';

createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'})//tipo de conteúdo que se está enviando
    response.end("<h1>Hello Server!</h1>");
}).listen(3000, (err) => {
    if(err){
        console.log(err)

    }else{
        console.log("Servidor rodando na porta 3000")
    }
})