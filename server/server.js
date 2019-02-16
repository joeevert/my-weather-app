const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes Required
const owmRouter = require('./routes/owm.router');

// Routes
app.use('/api/owm', owmRouter);

// Server static build
app.use(express.static('build'));

// App Set
const PORT = process.env.PORT || 5000;

// Listen
app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
})