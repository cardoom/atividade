const express = require("express");
const app = express();
const port = process.env.port  || 3000;

app.get('/', (req, res) => {
    res.send("atividade antes da avaliação !!");
})
app.listen(port, () => {
    console.log("servidor rodando na porta 3000");
})
    