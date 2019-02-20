// const axios = require('axios');
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
  const sqlText = 'SELECT * FROM "favorites" ORDER BY "name" ASC;';
  pool.query(sqlText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      res.sendStatus(500);
    })
})

router.post('/', (req, res) => {
  const favorite = req.body;
  const sqlText = 'INSERT INTO "favorites" ("name", "cityID") VALUES ($1, $2);';
  pool.query(sqlText, [favorite.name, favorite.id])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('error adding favorite', error);
      
      res.sendStatus(500);
    })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const sqlText = 'DELETE FROM "favorites" WHERE id=$1;';
  pool.query(sqlText, [id])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      res.sendStatus(500);
    })
})

module.exports = router;