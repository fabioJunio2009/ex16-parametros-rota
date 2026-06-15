const express = require('express');
const app = express();

// TODO: GET /usuarios/:id → 200, JSON { "id": "<valor do parâmetro>" }
// O Content-Type deve ser application/json

app.get("/usuarios/:id", (req, res)=>{
    res.type("application/json")
    res.send({"id": req.params.id})
})
app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));
