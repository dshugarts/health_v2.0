const express = require('express');
const userStrategy = require('../strategies/sql.localstrategy');
const pool = require('../modules/pool.js');
const router = express.Router();

router.post('/', (request, response) => {
    if (request.isAuthenticated()) {
      const entry = request.body.entry;
      console.log("scoring router = ", entry);
      let sqlText = `INSERT INTO new_data 
      (id, data_date, physical_activity_value, physical_activity_score, age_value, age_score, bp_score, diastolic_value, family_history_value, family_history_score, gender, height_value, inactivity_value, inactivity_score, nicotine_value, nicotine_score, sleep_value, sleep_score, stress_management_value, stress_score, systolic_value, total_stress_value, waist_value, waist_score, weight_value, acsm_value, acsm_score, well_score)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28)`;
      pool.query(sqlText, [entry.id, entry.data_date, entry.physical_activity_value, entry.physical_activity_score, entry.age_value, entry.age_score, entry.bp_score, entry.diastolic_value, entry.family_history_value, entry.family_history_score, entry.gender, entry.height_value, entry.inactivity_value, entry.inactivity_score, entry.nicotine_value, entry.nicotine_score, entry.sleep_value, entry.sleep_score, entry.stress_management_value, entry.stress_score, entry.systolic_value, entry.total_stress_value, entry.waist_value, entry.waist_score, entry.weight_value, entry.acsm_value, entry.acsm_score, entry.well_score])
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


  router.get('/:id', (request, response) => {
    if (request.isAuthenticated()) {
    const id = request.params.id;
    console.log('ID EQUALS ' + id);
    const sqlText = `SELECT * FROM new_data WHERE id=$1 ORDER BY entry_id DESC LIMIT 1`;
    pool.query(sqlText, [id])
      .then(function(result) {
      //  console.log('Get result:', result);
        response.send(result.rows);
      })
      .catch(function(error){
      //  console.log('Error on Get:', error);
        response.sendStatus(500);
      })
    } else {
      response.sendStatus(403);
  }
  }); // end get


  router.put('/update/:id', (request, response) => {
    if (request.isAuthenticated()) {
    const id = request.params.id;
    console.log('in update rpouter', id);
    const entry = request.body.entry;
    let queryText = `UPDATE new_data SET age_value=$2, family_history_value=$3, physical_activity_value=$4, systolic_value=$5, diastolic_value=$6, nicotine_value=$7, acsm_value=$8, total_stress_value=$9, stress_management_value=$10, inactivity_value=$11, waist_value=$12, sleep_value=$13, height_value=$14, weight_value=$15, gender=$16, age_score=$17, physical_activity_score=$18, family_history_score=$19, bp_score=$20, nicotine_score=$21, acsm_score=$22, stress_score=$23, inactivity_score=$24, waist_score=$25, sleep_score=$26, well_score=$27, data_date=$28 WHERE entry_id=$1`;
    pool.query(queryText, [id, entry.age_value, entry.family_history_value, entry.physical_activity_value, entry.systolic_value, entry.diastolic_value, entry.nicotine_value, entry.acsm_value, entry.total_stress_value, entry.stress_management_value, entry.inactivity_value, entry.waist_value, entry.sleep_value, entry.height_value, entry.weight_value, entry.gender, entry.age_score, entry.physical_activity_score, entry.family_history_score, entry.bp_score, entry.nicotine_score, entry.acsm_score, entry.stress_score, entry.inactivity_score, entry.waist_score, entry.sleep_score, entry.well_score, entry.data_date])
      .then((result) => {
        response.sendStatus(200);
      })
      .catch((err) => {
        response.sendStatus(500);
      })
    } else {
      response.sendStatus(403);
    }
  }); // end update values




module.exports = router;