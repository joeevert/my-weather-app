const axios = require('axios');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  let url = `http://api.openweathermap.org/data/2.5/weather?lat=44.887001&lon=-93.285758&appid=${process.env.OWM_API_KEY}`;
  console.log('url', url);
  axios.get(url)
    .then((response) => {
      console.log('response', response);
      res.send(response.data)
    })
    .catch((error) => {
      console.log('error with GET request to OWP', error);
    })
})

module.exports = router;