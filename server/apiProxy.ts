import express from 'express';
import axios, { AxiosRequestConfig } from 'axios';

const router = express.Router();

router.all('/', async(req, res) => {
  console.log(req.url);

  const config: AxiosRequestConfig = {
    method: req.method as any,
    url: req.url,
    data: req.body,
  }
  const response = await axios(config);
  res.status(response.status).send(response.data);
});

// module.exports = router;
export default router;