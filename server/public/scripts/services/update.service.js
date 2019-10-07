myApp.service('UpdateService', ['$http', '$location', 'ScoringService', function($http, $location, ScoringService){
//    console.log('UpdateService Loaded');
    var self = this;
    self.scoringService = ScoringService;
    self.getData = ScoringService.getData;
    self.newEntry = {};
    self.entryObject = {};


    self.toDashboard = function() {
        
        swal("Data successfully updated!", "", "success")
        $location.url('/dashboard');
        self.newEntry = {};
    }


    self.toMiddle = function(id) {
        $http({
            method: 'GET',
            url: `/signup/middle/${id}`
          }).then(function(response){
           console.log('MIDDLE', response.data);
            self.toDashboard();
          }).catch(function(error){
           console.log('Error getting data', error);
          })
    }

    self.putData = function(entry) {
      //  console.log(entry);
        $http({
            method: 'PUT',
            url: `/scoring/update/${entry.entry_id}`,
            data: {entry: entry}
        }).then(function(response) {
          //  console.log('Update response = ', response);
            self.getData(entry.id);
            self.toMiddle(entry.id);
        }).catch(function (error) {
          //  console.log('put error', error);
        })
    } // end putData


    self.packEntry = function(newEntry) {

        let nicotine_score = 0;
        if (newEntry.nicotine_value === "false") {
            nicotine_score = 10;
        } else {
            nicotine_score = 0;
        } // end nicotine score if

        let age_score = 0;
        if ((newEntry.age_value < 46 && newEntry.gender === "M") || (newEntry.age_value < 56 && newEntry.gender === "F")) {
            age_score = 5;
        } else {
            age_score = 0;
        } // end age score if

        let family_history_score = 0;
        if (newEntry.family_history_value === "false") {
            family_history_score = 5;
        } else {
            family_history_score = 0;
        } // end family history score if

        let acsm_score = 0;
        if (newEntry.acsm_value === "No") {
            acsm_score = 10;
        } else {
            acsm_score = 0;
        } // end acsm score if

        let physical_activity_score = 0;
        if (newEntry.physical_activity_value >= 150) {
            physical_activity_score = 16;
        } else if (newEntry.physical_activity_value >= 120 && newEntry.physical_activity_value < 150) {
            physical_activity_score = 12;
        } else if (newEntry.physical_activity_value >= 90 && newEntry.physical_activity_value < 120) {
            physical_activity_score = 8;
        } else if (newEntry.physical_activity_value >=60 && newEntry.physical_activity_value < 90) {
            physical_activity_score = 4;
        } else {
            physical_activity_score = 0;
        } // end activity score if

        let inactivity_score = 0;
        if (newEntry.inactivity_value < 60) {
            inactivity_score = 12;
        } else if (newEntry.inactivity_value >= 60 && newEntry.inactivity_value < 90) {
            inactivity_score = 6;
        } else if (newEntry.inactivity_value >= 90 && newEntry.inactivity_value < 120) {
            inactivity_score = 3;
        } else {
            inactivity_score = 0;
        } // end inactivity score if

        let bp_score = 0;
        if (newEntry.systolic_value <= 120 && newEntry.diastolic_value <= 80) {
            bp_score = 12;
        } else if (newEntry.systolic_value > 120 && newEntry.systolic_value < 130) {
            bp_score = 8;
        } else if ((newEntry.systolic_value >= 130 && newEntry.systolic_value < 140) || (newEntry.diastolic_value > 80 && newEntry.diastolic_value < 90)) {
            bp_score = 4;
        } else if ((newEntry.systolic_value >= 179) || (newEntry.diastolic_value >= 119)) {
            swal("Hypertensive Crisis", "Please seek medical help immediately", "warning")
            bp_score = 0;
        } else {
            bp_score = 0;
        } // end bp score if

        let waist_score = 0;
        if ((newEntry.waist_value < 40 && newEntry.gender === "M") || (newEntry.waist_value < 35 && newEntry.gender === "F")) {
            waist_score = 10;
        } else if ((newEntry.waist_value >= 40 && newEntry.waist_value < 45 && newEntry.gender === "M") || (newEntry.waist_value >= 35 && newEntry.waist_value < 40 && newEntry.gender === "F")) {
            waist_score = 6;
        } else if ((newEntry.waist_value >= 45 && newEntry.waist_value < 50 && newEntry.gender === "M") || (newEntry.waist_value >= 40 && newEntry.waist_value < 45 && newEntry.gender === "F")) {
            waist_score = 3;
        } else {
            waist_score = 0;
        } // end waist score if

        let sleep_score = 0;
        if (newEntry.sleep_value >= 7) {
            sleep_score = 10;
        } else if (newEntry.sleep_value >= 5 && newEntry.sleep_value < 7) {
            sleep_score = 4;
        } else {
            sleep_score = 0;
        } // end sleep score if

        let stress_score = 0;
        if (newEntry.total_stress_value === "false") {
            stress_score = 10;
        } else if (newEntry.total_stress_value === "true" && newEntry.stress_management_value === "5") {
            stress_score = 6;
        } else if (newEntry.total_stress_value === "true" && newEntry.stress_management_value === "3") {
            stress_score = 3;
        } else {
            stress_score = 0;
        } // end stress score if

        let now_data_date = new Date();

        let well_score = 0;
        well_score += age_score;
        well_score += waist_score;
        well_score += bp_score;
        well_score += stress_score;
        well_score += inactivity_score;
        well_score += acsm_score;
        well_score += physical_activity_score;
        well_score += sleep_score;
        well_score += nicotine_score;
        well_score += family_history_score;

        scoredObject = {
            id: newEntry.id,
            entry_id: newEntry.entry_id,
            data_date: now_data_date,
            physical_activity_value: newEntry.physical_activity_value,
            physical_activity_score: physical_activity_score,
            age_value: newEntry.age_value,
            age_score: age_score,
            bp_score: bp_score,
            diastolic_value: newEntry.diastolic_value,
            family_history_value: newEntry.family_history_value,
            family_history_score: family_history_score,
            gender: newEntry.gender,
            height_value: newEntry.height_value,
            inactivity_value: newEntry.inactivity_value,
            inactivity_score: inactivity_score,
            nicotine_value: newEntry.nicotine_value,
            nicotine_score: nicotine_score,
            sleep_value: newEntry.sleep_value,
            sleep_score: sleep_score,
            stress_management_value: newEntry.stress_management_value,
            stress_score: stress_score,
            systolic_value: newEntry.systolic_value,
            total_stress_value: newEntry.total_stress_value,
            waist_value: newEntry.waist_value,
            waist_score: waist_score,
            weight_value: newEntry.weight_value,
            acsm_value: newEntry.acsm_value,
            acsm_score: acsm_score,
            well_score: well_score
        } // end scoredObject

        self.putData(scoredObject);
    } // end packEntry

  

}]);