import express from 'express';
import http from 'http';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import appProxy from './apiProxy';
import appConfig from '../src/confg';

const SERVICE_NAME = 'express-tsnode-react';

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
server.listen(appConfig.appPort, () => console.log(`Listening on ${appConfig.appPort}`));
server.on('error', () => { console.error(appConfig.appPort); });
