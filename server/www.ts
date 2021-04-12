import express from 'express';
import http from 'http';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import appProxy from './apiProxy';
// import axios, { AxiosRequestConfig, Method } from 'axios';
// import apiProxy from './apiProxy';

const SERVICE_NAME = 'express-tsnode-react';
const apiPath = `/${SERVICE_NAME}/api/v1/`
const API_SERVER = 'http://localhost:8080';
const port = 4000;

const app = express();
app.disable('x-powered-by');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../build')));
app.get('/up', (req, res) => res.send('up'));
app.use(appProxy);
// app.all(`/${SERVICE_NAME}/*`,
//   async(req, res) => {
//     // const apiName = req.url.replace(apiPath, '');
//     try{
//       const config: AxiosRequestConfig = {
//         method: req.method as Method,
//         url: `${API_SERVER}${req.url}`,
//         data: { ...req.body },
//       }
//       console.log(config);
//       const response = await axios(config);
//       res.status(response.status).send(response.data);
//     } catch (error) {
//       res.sendStatus(404);
//     }

//   });
// app.all(`/${SERVICE_NAME}/*`, apiProxy);

const server = http.createServer(app);
server.listen(port, () => console.log(`Listening on ${port}`));
server.on('error', (error) => { console.error(error); });
