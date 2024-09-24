import timesDePelotas from "./tabela.js";
import express from "express";  //permite configurar um servidor.
import { modeloTime, updatetime } from "./validate.js";


const app = express();
app.use(express.json()); //express trata as informações que chegam como json

app.get('/', (req, res) => {
    res.status(200).send(timesDePelotas);
});

app.get('/:pais', (req, res) => {
    const paisTime = req.params.pais
    const resposta = timesDePelotas.find((infoTime) => infoTime.pais === paisTime);
    res.status(200).send(resposta);
    if (!resposta) {
        res.status(404).send('Time não encontrado.');
        return;
    }
});

app.put('/pais', (req, res) => {
    const paisInformado = req.params.pais.toUppercase();
    const paisSelecionado = tabela.find(t => t.pais === paisInformado);
    if(!timesDePelotas){
        res.status(404).send('O time informado não é da cidade de Pelotas'); //codigo não foi encontrado
    }
    console.log(updatetime.validate(req.body));
    const campos = Object.keys(req.body)
    console.log(req.body);
    for(let campo of campos){
        paisSelecionado[campo] = req.body[campo]
    }
    res.status(200).send(paisSelecionado)
})

app.post('/', (req, res) =>{
    const novoTime = Object.keys(req.body);
    const {error} = modeloTime.validate(novoTime);
    if(error){
        res.status(400).send(error);
        return;
    }
    tabela.push(novoTime);
    res.status(200).send(novoTime);
});

app.delete('/:pais', (req, res) =>{
    const paisInformado = req.params.pais.toUppercase();
    //const timesDePelotas = tabela.find((t) => t.pais === paisInformado);
    const indiceTimesdePelotas = tabela.findIndex((t) => t.pais === paisInformado);
   const timeRemovido = tabela.splice(indiceTimesdePelotas, 1);
   res.status(200).send(timeRemovido);
});

app.listen(7000, () => console.log('Active Server.'));


