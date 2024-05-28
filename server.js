const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const usuarios = ['Nicolas', 'Felipe', 'Claudio', 'Brayan', 'Martin', 'Geremias', 'Kuchix', 'Emma'];


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'bienvenido.html'));
});

app.use(express.static("assets"));

app.get('/abracadabra/usuarios', (req, res) => {
    res.json(usuarios);
});

app.use("/abracadabra/juego/:usuario", (req, res, next) => {
    const usuario = req.params.usuario;
    const validar = usuarios
        .map((u) => u.toLowerCase())
        .includes(usuario.toLowerCase());
    if (validar) {
        next();
    } else {
        res.sendFile(__dirname + "/assets/who.jpeg");
    }
});

app.get("/abracadabra/juego/:usuario", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/abracadabra/conejo/:n", (req, res) => {
    const numero = Math.floor(Math.random() * 4) + 1;
    const n = +req.params.n;
    if (n === numero) {
        res.sendFile(__dirname + "/assets/conejito.jpg");
    } else {
        res.sendFile(__dirname + "/assets/voldemort.jpg");
    }
});

app.get("*", (req, res) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.listen(port, () => {
    console.log(`Servidor Express iniciado en el puerto ${port}`);
});
