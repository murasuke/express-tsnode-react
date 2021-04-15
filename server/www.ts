import express from 'express';
import http from 'http';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import appProxy from './apiProxy';

const SERVICE_NAME = 'express-tsnode-react';
const port = 4000;

const app = express();
app.disable('x-powered-by');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../build')));
app.get('/up', (req, res) => res.send('up'));
app.use(`/${SERVICE_NAME}`, appProxy);


const server = http.createServer(app);
server.listen(port, () => console.log(`Listening on ${port}`));
server.on('error', (error) => { console.error(error); });
