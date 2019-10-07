myApp.service('ScoringService', ['$http', '$location', 'UserService', function($http, $location, UserService){
       console.log('ScoringService Loaded');
       var self = this;
       self.newEntry = {};
       self.entryObject = {list: []};
       self.dataArray = {
        list: []
    }

       self.toDashboard = function() {
        swal("Data successfully entered!", "", "success")
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
    } // end toMiddle

       self.postEntry = function(entry) {
        console.log("postENTRY = ", entry);
          $http({
              method: 'POST',
              url: '/scoring',
              data: {entry: entry}
          }).then(function (response) {
              console.log('post post', response, entry.id);
              self.getData(entry.id);
              self.toMiddle(entry.id);
          }).catch(function (error) {
           //   console.log('post error', error);
          })
      } // end postEntry

      self.getData = function(id){
        console.log('HHHHH', id);
        $http({
          method: 'GET',
          url: `/scoring/${id}`
        }).then(function(response){
        console.log('response', response.data);
        self.dataArray.list = response.data;
        console.log('DATA ARRAY', self.dataArray);
        if (self.dataArray.length === 0) {
            self.myScore = 0;
            console.log('TEST 1 ', self.myScore);
        } else {
            self.myScore = self.dataArray.list[0].well_score;
            console.log('TEST 2 ',  self.myScore);
          }
          console.log('DS myScore ', self.myScore);
            self.getAllReportData(self.dataArray.list);
        //  self.getAllResourceData(self.dataArray);
        }).catch(function(error){
         console.log('Error getting data', error);
        })
      } //end getData

       self.packEntry = function(newEntry, id) {
           console.log('id = ', id, 'entry = ', newEntry);

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
               id: id,
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

           self.postEntry(scoredObject);
       } // end packEntry

       self.getAllReportData = function(data){
          console.log('PDS', data);
           $http({
             method: 'GET',
             url: `/data/reports/${data.id}`
           }).then(function(response){
             console.log('response All Data', data);
             self.allReportDataArray = response.data;
             console.log('ALL JOIN DATA ', self.allReportDataArray);
   
             if (data[0].age_score === 5) {
                 self.ageReport = self.allReportDataArray[0].category_description;
                 self.ageRisk = 'Low Risk Value';
                 self.ageClass = 'bg-success';
                 self.ageShow = 0;
             } else if (data[0].age_score === 0) {
                 self.ageReport = self.allReportDataArray[1].category_description;
                 self.ageRisk = 'High Risk Value';
                 self.ageClass = 'bg-danger';
                 self.ageShow = 1;
             }
   
             if (data[0].bp_score === 12) {
                 self.bpReport = self.allReportDataArray[2].category_description;
                 self.bpRisk = 'Low Risk Value';
                 self.bpClass = 'bg-success';
                 self.bpShow = 0;
             } else if (data[0].bp_score < 12 && data[0].bp_score > 0) {
                 self.bpReport = self.allReportDataArray[3].category_description;
                 self.bpRisk = 'Moderate Risk Value';
                 self.bpClass = 'bg-warning';
                 self.bpShow = 1;
             } else if (data[0].bp_score === 0) {
                 self.bpReport = self.allReportDataArray[4].category_description;
                 self.bpRisk = 'High Risk Value';
                 self.bpClass = 'bg-danger';
                 self.bpShow = 1;
             }
   
             if (data[0].stress_score === 10) {
               self.stressReport = self.allReportDataArray[5].category_description;
               self.stressRisk = 'Low Risk Value';
               self.stressDisplay = 'Low Stress';
               self.stressClass = 'bg-success';
               self.stressShow = 0;
           } else if (data[0].stress_score < 10 && data[0].stress_score > 0) {
               self.stressReport = self.allReportDataArray[6].category_description;
               self.stressRisk = 'Moderate Risk Value';
               self.stressDisplay = 'Moderate Stress';
               self.stressClass = 'bg-warning';
               self.stressShow = 1;
           } else if (data[0].stress_score === 0) {
               self.stressReport = self.allReportDataArray[7].category_description;
               self.stressRisk = 'High Risk Value';
               self.stressDisplay = 'High Stress';
               self.stressClass = 'bg-danger';
               self.stressShow = 1;
           }
   
           if (data[0].inactivity_score === 12) {
               self.inactivityReport = self.allReportDataArray[8].category_description;
               self.inactivityRisk = 'Low Risk Value';
               self.inactivityClass = 'bg-success';
               self.inactivityShow = 0;
           } else if (data[0].inactivity_score < 12 && data[0].inactivity_score > 0) {
               self.inactivityReport = self.allReportDataArray[9].category_description;
               self.inactivityRisk = 'Moderate Risk Value';
               self.inactivityClass = 'bg-warning';
               self.inactivityShow = 1;
           } else if (data[0].inactivity_score === 0) {
               self.inactivityReport = self.allReportDataArray[10].category_description;
               self.inactivityRisk = 'High Risk Value';
               self.inactivityClass = 'bg-danger';
               self.inactivityShow = 1;
           }
   
           if (data[0].acsm_score === 10) {
               self.acsmReport = self.allReportDataArray[11].category_description;
               self.acsmRisk = 'Low Risk Value';
               self.acsmClass = 'bg-success';
               self.acsmShow = 0;
           } else if (data[0].acsm_score === 0) {
               self.acsmReport = self.allReportDataArray[13].category_description;
               self.acsmRisk = 'High Risk Value';
               self.acsmClass = 'bg-danger';
               self.acsmShow = 1;
           }
   
           if (data[0].waist_score === 10) {
               self.waistReport = self.allReportDataArray[14].category_description;
               self.waistRisk = 'Low Risk Value';
               self.waistClass = 'bg-success';
               self.waistShow = 0;
           } else if (data[0].waist_score < 10 && data[0].waist_score > 0) {
            self.waistReport = self.allReportDataArray[15].category_description;
            self.waistRisk = 'Moderate Risk Value';
            self.waistClass = 'bg-warning';
            self.waistShow = 1;
        } else if (data[0].waist_score === 0) {
               self.waistReport = self.allReportDataArray[15].category_description;
               self.waistRisk = 'High Risk Value';
               self.waistClass = 'bg-danger';
               self.waistShow = 1;
           }
   
           if (data[0].family_history_score === 5) {
               self.historyReport = self.allReportDataArray[16].category_description;
               self.historyRisk = 'Low Risk Value';
               self.historyDisplay = 'No';
               self.historyClass = 'bg-success';
               self.historyShow = 0;
           } else if (data[0].family_history_score === 0) {
               self.historyReport = self.allReportDataArray[17].category_description;
               self.historyRisk = 'High Risk Value';
               self.historyDisplay = 'Yes';
               self.historyClass = 'bg-danger';
               self.historyShow = 1;
           }
   
           if (data[0].physical_activity_score > 11) {
               self.activityReport = self.allReportDataArray[18].category_description;
               self.activityRisk = 'Low Risk Value';
               self.activityClass = 'bg-success';
               self.activityShow = 0;
           } else if (data[0].physical_activity_score < 12 && data[0].physical_activity_score > 0) {
            self.activityReport = self.allReportDataArray[19].category_description;
            self.activityRisk = 'Moderate Risk Value';
            self.activityClass = 'bg-warning';
            self.activityShow = 1;
        } else if (data[0].physical_activity_score === 0) {
               self.activityReport = self.allReportDataArray[19].category_description;
               self.activityRisk = 'High Risk Value';
               self.activityClass = 'bg-danger';
               self.activityShow = 1;
           }
   
           if (data[0].nicotine_score === 10) {
               self.nicotineReport = self.allReportDataArray[20].category_description;
               self.nicotineRisk = 'Low Risk Value';
               self.nicotineDisplay = 'No';
               self.nicotineClass = 'bg-success';
               self.nicotineShow = 0;
           } else if (data[0].nicotine_score === 0) {
               self.nicotineReport = self.allReportDataArray[21].category_description;
               self.nicotineRisk = 'High Risk Value';
               self.nicotineDisplay = 'Yes';
               self.nicotineClass = 'bg-danger';
               self.nicotineShow = 1;
           }
   
           if (data[0].sleep_score === 10) {
               self.sleepReport = self.allReportDataArray[22].category_description;
               self.sleepRisk = 'Low Risk Value';
               self.sleepClass = 'bg-success';
               self.sleepShow = 0;
           } else if (data[0].sleep_score === 4) {
            self.sleepReport = self.allReportDataArray[23].category_description;
            self.sleepRisk = 'Moderate Risk Value';
            self.sleepClass = 'bg-warning';
            self.sleepShow = 1;
            } else if (data[0].sleep_score === 0) {
               self.sleepReport = self.allReportDataArray[23].category_description;
               self.sleepRisk = 'High Risk Value';
               self.sleepClass = 'bg-danger';
               self.sleepShow = 1;
           }
   
   
           let bmiScore = 0;
           bmiScore = ((data[0].weight_value)/(data[0].height_value*data[0].height_value)*703);
           bmiScoreUse = Math.round((bmiScore *10)/10);
           self.mybmi = bmiScoreUse;
   
           if (bmiScoreUse < 25) {
               self.bmiReport = self.allReportDataArray[27].category_description;
               self.bmiRisk = 'Optimal Value';
               self.bmiClass = 'bg-success';
               self.bmiShow = 0;
           } else if (bmiScoreUse > 24.99 && bmiScoreUse < 30) {
               self.bmiReport = self.allReportDataArray[28].category_description;
               self.bmiRisk = 'Moderate Value';
               self.bmiClass = 'bg-warning';
               self.bmiShow = 1;
           } else if (bmiScoreUse > 29.99) {
               self.bmiReport = self.allReportDataArray[29].category_description;
               self.bmiRisk = 'High Value';
               self.bmiClass = 'bg-danger';
               self.bmiShow = 1;
           }
   
           if (data[0].well_score > 79) {
               self.wellReport = self.allReportDataArray[30].category_description;
               self.wellRisk = 'Low Risk Score';
               self.wellClass = 'bg-success';
           } else if (data[0].well_score < 80 && data[0].well_score > 49) {
               self.wellReport = self.allReportDataArray[31].category_description;
               self.wellRisk = 'Moderate Risk Score';
               self.wellClass = 'bg-warning';
           } else if (data[0].well_score < 50) {
               self.wellReport = self.allReportDataArray[50].category_description;
               self.wellRisk = 'High Risk Score';
               self.wellClass = 'bg-danger';
           }
           }).catch(function(error){
          //   console.log('Error getting data', error);
           })
           
         } //end getAllReportData


        // self.getData(id);
    }]); // end ScoringService