/*const express = require('express');
const cors = require('cors');

const server = express();

server.use(cors());
server.use(express.json());


server.listen(process.env.PORT || 4201);*/

const express = require('express');
const path = require('path');
const nomeApp = process.env.npm_package_name;
const app = express();
 
app.use(express.static(`$/dist/$`));
 
app.get('/*', (req, res) => {
res.sendFile(path.join(`$/dist/$/index.html`));
});
 
app.listen(process.env.PORT || 8080);