import express from 'express';
import axios, { AxiosRequestConfig, Method } from 'axios';

const API_SERVER = 'http://localhost:8080';

const router = express.Router();

router.all('*', async(req, res) => {

  try{
    const config: AxiosRequestConfig = {
      method: req.method as Method,
      url: `${API_SERVER}${req.url}`,
      data: { ...req.body },
    };

    console.log(JSON.stringify(config, null, '  '));
    const response = await axios(config);
    res.status(response.status).send(response.data);
  } catch (error) {
    res.sendStatus(500);
  }
});

// module.exports = router;
export default router;