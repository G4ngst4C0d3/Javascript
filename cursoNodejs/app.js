/*  
    npm init -y
    npm install express
*/
import timesDePelotas from "./tabela.js";
import express from "express";  //permite configurar um servidor.

const app = express();

app.get('/', (req, res) => {
    res.send(timesDePelotas);
});

app.listen(7000, () => console.log('Active Server.'));


