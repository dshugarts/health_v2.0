const express = require('express');
const userStrategy = require('../strategies/sql.localstrategy');
const pool = require('../modules/pool.js');
const router = express.Router();

router.post('/', (request, response) => {
    if (request.isAuthenticated()) {
      const entry = request.body.entry;
      console.log('router entry = ', entry);
      let sqlText = `INSERT INTO participant_info 
      (id, disclaimer)
      VALUES ($1, $2)`;
      pool.query(sqlText, [entry.id, entry.disclaimer])
      .then((result) => {
     // console.log('Added entry:', result);
      response.sendStatus(201);
    }).catch((error) => {
    //  console.log('Error posting entry:', error);
      response.sendStatus(500);
    })
  } else {
    response.sendStatus(403);
  }
  }); // end POST


  router.put('/info/:id', (request, response) => {
    if (request.isAuthenticated()) {
      const id = request.params.id;
      const entry = request.body.entry;
      console.log(entry);
      let queryText = `UPDATE participant_info 
        SET first_name=$2, last_name=$3, email=$4 WHERE id=$1`;
      pool.query(queryText, [id, entry.first_name, entry.last_name, entry.email])
        .then((result) => {
          response.sendStatus(200);
        })
        .catch((err) => {
          response.sendStatus(500);
        })
    } else {
        response.sendStatus(403);
    }
  }); // end participant info update


  router.get('/middle/:id', (request, response) => {
    if (request.isAuthenticated()) {
      const id = request.params.id;
      const sqlText = `SELECT id, username, user_role FROM users WHERE id=$1`;
      pool.query(sqlText, [id])
        .then(function (result) {
          //  console.log('Get result:', result);
          response.send(result.rows);
        })
        .catch(function (error) {
          //  console.log('Error on Get:', error);
          response.sendStatus(500);
        })
    } else {
        response.sendStatus(403);
    }
  }); // end get user by name



module.exports = router;