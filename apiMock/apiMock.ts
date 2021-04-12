import express from 'express';

import logger from 'morgan';

const port = 8080;

const app = express();
app.disable('x-powered-by');
app.use(logger('dev'));

// Return status code 200 for all accesses.
app.all('/*', (req, res) => res.json([{ id:'id', data: 'data' }]));

app.listen(port, () => console.log(`Listening on ${port}`));
