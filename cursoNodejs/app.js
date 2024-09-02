import timesDePelotas from "./tabela.js";
import express from "express";  //permite configurar um servidor.

const app = express();

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

app.listen(7000, () => console.log('Active Server.'));


