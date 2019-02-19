const axios = require('axios');
const express = require('express');
const router = express.Router();

// gets the weather for the location being searched
router.post('/', (req, res) => {
  let search = req.body.search;
  console.log('search', req.body.search);
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${process.env.OWM_API_KEY}`;
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