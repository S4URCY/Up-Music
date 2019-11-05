/*const express = require('express');
const cors = require('cors');

const server = express();

server.use(cors());
server.use(express.json());


server.listen(process.env.PORT || 4201);*/
/*
const express = require('express');
const path = require('path');
const nomeApp = process.env.npm_package_name;
const app = express();
const cors = require('cors');
 
app.use(express.static(`$/dist/$`));
server.use(cors());
app.get('/*', (req, res) => {
res.sendFile(path.join(`$/dist/$/index.html`));
});
 
app.listen(process.env.PORT || 8080);*/

//Importa as dependências que acabamos de instalar
const express = require('express');
const path = require('path');

const app = express();

// Serve os arquivos estáticos da pasta dist (gerada pelo ng build)
app.use(express.static(__dirname + '/dist/upmusic'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/upmusic/index.html'));
});

// Inicia a aplicação pela porta configurada
app.listen(process.env.PORT || 8080);