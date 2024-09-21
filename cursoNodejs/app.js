import timesDePelotas from "./tabela.js";
import express from "express";  //permite configurar um servidor.

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
    const campos = Object.keys(req.body)
    console.log(req.body);
    for(let campo of campos){
        paisSelecionado[campo] = req.body[campo]
    }
    res.status(200).send(paisSelecionado)
})

app.listen(7000, () => console.log('Active Server.'));


