const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes Required
const currentWeatherRouter = require('./routes/currentWeather.router');
const favoritesRouter = require('./routes/favorites.router');
const searchRouter = require('./routes/search.router');

// Routes
app.use('/api/owm', currentWeatherRouter);
app.use('/api/favorites', favoritesRouter);
app.use('/api/search', searchRouter);

// Server static build
app.use(express.static('build'));

// App Set
const PORT = process.env.PORT || 5000;

// Listen
app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
})