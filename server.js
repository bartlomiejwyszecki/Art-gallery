const express = require('express');
const jsonServer = require('json-server');
const history = require('connect-history-api-fallback');

const app = express();
app.use(history());
app.use("/", express.static("dist/Art-gallery"));
const router = jsonServer.router('data.json');
app.use(jsonServer.bodyParser);
app.use("/api", (req, resp, next) => router(req, resp, next));

const port = process.argv[3] || 4001;
app.listen(port, () => console.log(`Serwer nasłuchuje na porcie numer ${port}`));
