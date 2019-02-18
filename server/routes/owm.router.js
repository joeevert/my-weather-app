const axios = require('axios');
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  let lat = req.body.lat;
  let lon = req.body.lng;
  console.log('currentPost', req.body.lat);
  let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OWM_API_KEY}`;
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