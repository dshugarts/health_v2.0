const express = require('express');
const userStrategy = require('../strategies/sql.localstrategy');
const pool = require('../modules/pool.js');
const router = express.Router();

router.get('/:name', (request, response) => {
  if (request.isAuthenticated()) {
    const name = request.params.name;
    const sqlText = `SELECT id, username, user_role FROM users WHERE username=$1`;
    pool.query(sqlText, [name])
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