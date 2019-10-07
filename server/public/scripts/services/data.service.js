myApp.service('DataService', ['$http', '$location', function($http, $location){
 //   console.log('DataService Loaded');
    var self = this;
    self.newEntry = {};
    self.entryObject = {};
    self.entryObject = {list: []};
    self.dataArray = [];
    self.myScore = '';
    self.pScore = '';
    self.allReportDataArray = [];
    self.allResourcesDataArray = [];
    self.ageReport = '';
    self.bpReport = '';
    self.hdlReport = '';
    self.ldlReport = '';
    self.gluReport = '';
    self.waistReport = '';
    self.historyReport = '';
    self.activityReport = '';
    self.nicotineReport = '';
    self.sleepReport = '';
    self.trgReport = '';
    self.bmiReport = '';
    self.hhsReport = '';
    self.bpResourceOne = '';
    self.bpResourceTwo = '';
    self.hdlResourceOne = '';
    self.hdlResourceTwo = '';
    self.ldlResourceOne = '';
    self.ldlResourceTwo = '';
    self.gluResourceOne = '';
    self.gluResourceTwo = '';
    self.sleepResourceOne = '';
    self.nicotineResourceOne = '';
    self.activityResourceOne = '';
    self.waistResourceOne = '';
    self.mybmi = '';
    self.sleepRisk = '';
    self.trgRisk = '';
    self.bmiRisk = '';
    self.ageRisk = '';
    self.bpRisk = '';
    self.ldlRisk = '';
    self.hdlRisk = '';
    self.gluRisk = '';
    self.waistRisk = '';
    self.nicotineRisk = '';
    self.historyRisk = '';
    self.activityRisk = '';
    self.nicotineDisplay = '';
    self.historyDisplay = '';
    self.ageClass = '';
    self.bpClass = '';
    self.ldlClass = '';
    self.hdlClass = '';
    self.gluClass = '';
    self.waistClass = '';
    self.historyClass = '';
    self.activityClass = '';
    self.nicotineClass = '';
    self.sleepClass = '';
    self.trgClass = '';
    self.hhsClass = '';
    self.bmiClass = '';
    self.cvdRisk = '';

    self.letPass = function() {
        $location.url('/dashboard');
    }

    self.goBpResource = function() {
        $location.url('/bp_resource')
    }

    self.goHdlResource = function() {
        $location.url('/hdl_resource')
    }

    self.goLdlResource = function() {
        $location.url('/ldl_resource')
    }

    self.goGluResource = function() {
        $location.url('/glu_resource')
    }

    self.goWaistResource = function() {
        $location.url('/waist_resource')
    }

    self.goActivityResource = function() {
        $location.url('/activity_resource')
    }

    self.goNicotineResource = function() {
        $location.url('/nicotine_resource')
    }

    self.goSleepResource = function() {
        $location.url('/sleep_resource')
    }

    self.goAcsmReport = function() {
        $location.url('/acsm_report')
    }

    self.goHhsReport = function() {
        $location.url('/hhs_report')
    }

    self.goBmiReport = function() {
        $location.url('/bmi_report')
    }

    self.goSleepReport = function() {
        $location.url('/sleep_report')
    }

    self.goNicotineReport = function() {
        $location.url('/nicotine_report')
    }

    self.goTrgReport = function() {
        $location.url('/trg_report')
    }

    self.goHistoryReport = function() {
        $location.url('/history_report')
    }

    self.goActivityReport = function() {
        $location.url('/activity_report')
    }

    self.goAgeReport = function() {
        $location.url('/age_report')
    }

    self.goStressReport = function() {
        $location.url('/stress_report')
    }

    self.goWaistReport = function() {
        $location.url('/waist_report')
    }

    self.goInactivityReport = function() {
        $location.url('/inactivity_report')
    }

    self.goBpReport = function() {
        $location.url('/bp_report')
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
    }

    self.postData = function(entry) {
      //  console.log(entry);
        $http({
            method: 'POST',
            url: '/data',
            data: {entry: entry}
        }).then(function (response) {
         //   console.log('post post', response, entry.id);
            self.getData(entry.id);
            self.toMiddle(entry.id);
        }).catch(function (error) {
         //   console.log('post error', error);
        })
    }

    self.getData = function(id){
        console.log('HHHHH', id);
        $http({
          method: 'GET',
          url: `/data/${id}`
        }).then(function(response){
         console.log('response', response.data);
          self.dataArray = response.data;
          console.log('DATA ARRAY', self.dataArray.length);
          if (self.dataArray.length === 0) {
              self.myScore = 0;
              console.log('TEST 1 ', self.myScore);
          } else {
            self.myScore = self.dataArray[0].cvd_score;
            console.log('TEST 2 ',  self.myScore);
          }
          
          self.pScore = ((self.myScore/20)*100) + "%";
          console.log('DS myScore ', self.myScore);
          self.getAllReportData(self.dataArray);
          self.getAllResourceData(self.dataArray);
        }).catch(function(error){
         console.log('Error getting data', error);
        })
      } //end getData

    self.addEntry = function(newEntry, id) {
    let glu_score = 0;
    if (newEntry.glu_value >= 100 && newEntry.glu_value < 126) {
        glu_score = 1;
    } else if (newEntry.glu_value < 100) {
        glu_score = 2;
    } else {
        glu_score = 0;
    } // end glu score if
    
    let nicotine_score = 0;
    if (newEntry.nicotine_value === "false") {
        nicotine_score = 2;
    } else {
        nicotine_score = 0;
    } // end nicotine if
   
    let sleep_score = 0;
    if (newEntry.sleep_value >= 7) {
        sleep_score = 2;
    } else {
        sleep_score = 0;
    } // end sleep if

    let family_history_score = 0;
    if (newEntry.family_history_value === "false") {
        family_history_score = 2;
    } else {
        family_history_score = 0;
    } // end family history if

    let bp_score = 0;
    if ((newEntry.systolic_value < 180 && newEntry.systolic_value > 130) || (newEntry.diastolic_value <120 && newEntry.diastolic_value > 80)) {
        bp_score = 1;
    } else if (newEntry.systolic_value < 131 && newEntry.diastolic_value < 81) {
        bp_score = 2;
    } else {
        bp_score = 0;
    } // end bp score

    let physical_activity_score = 0;
    if (newEntry.physical_activity_value >= 150) {
        physical_activity_score = 2;
    } else {
        physical_activity_score = 0;
    } // end activity score if

    let age_score = 0;
    if ((newEntry.age_value < 45 && newEntry.gender === "M") || (newEntry.age_value < 55 && newEntry.gender === "F")) {
        age_score = 2;
    } else {
        age_score = 0;
    } // end age score if

    let waist_score = 0;
    if ((newEntry.waist_value < 40 && newEntry.gender === "M") || (newEntry.waist_value < 35 && newEntry.gender === "F")) {
        waist_score = 2;
    } else {
        waist_score = 0;
    } // end waist score if

    let hdl_score = 0;
    if (newEntry.hdl_value > 59) {
        hdl_score = 2;
    } else if ((newEntry.hdl_value < 60 && newEntry.hdl_value > 40 && newEntry.gender === "M") || (newEntry.hdl_value < 60 && newEntry.hdl_value > 50 && newEntry.gender === "F")) {
        hdl_score = 1;
    } else {
        hdl_score = 0;
    } // end hdl score if

    let ldl_score = 0;
    if (newEntry.ldl_value < 100) {
        ldl_score = 2; 
    } else if (newEntry.ldl_value > 99 && newEntry.ldl_value < 130) {
        ldl_score = 1;
    } else {
        ldl_score = 0;
    } // end ldl score if


    let cvd_score = 0;
    cvd_score += age_score;
    cvd_score += waist_score;
    cvd_score += bp_score;
    cvd_score += hdl_score;
    cvd_score += ldl_score;
    cvd_score += glu_score;
    cvd_score += physical_activity_score;
    cvd_score += sleep_score;
    cvd_score += nicotine_score;
    cvd_score += family_history_score;


    let now_data_date = new Date();

    entryObject = {
        id: id,
        data_date: now_data_date,
        age_value: newEntry.age_value,
        family_history_value: newEntry.family_history_value,
        physical_activity_value: newEntry.physical_activity_value,
        systolic_value: newEntry.systolic_value,
        diastolic_value: newEntry.diastolic_value,
        nicotine_value: newEntry.nicotine_value,
        glu_value: newEntry.glu_value,
        hdl_value: newEntry.hdl_value,
        ldl_value: newEntry.ldl_value,
        trg_value: newEntry.trg_value,
        waist_value: newEntry.waist_value,
        sleep_value: newEntry.sleep_value,
        height_value: newEntry.height_value,
        weight_value: newEntry.weight_value,
        gender: newEntry.gender,
        age_score: age_score,
        physical_activity_score: physical_activity_score,
        family_history_score: family_history_score,
        bp_score: bp_score,
        nicotine_score: nicotine_score,
        glu_score: glu_score,
        hdl_score: hdl_score,
        ldl_score: ldl_score,
        waist_score: waist_score,
        sleep_score: sleep_score,
        cvd_score: cvd_score
    } // end entryObject

    self.postData(entryObject);

    } // end addEntry
    

    self.getAllReportData = function(data){
     //   console.log('PDS', data);
        $http({
          method: 'GET',
          url: `/data/reports/${data.id}`
        }).then(function(response){
       //   console.log('response All Data', data);
          self.allReportDataArray = response.data;
       //   console.log('ALL JOIN DATA ', self.allReportDataArray);

          if (data[0].age_score === 2) {
              self.ageReport = self.allReportDataArray[0].category_description;
              self.ageRisk = 'Low Risk Value';
              self.ageClass = 'bg-success';
          } else if (data[0].age_score === 0) {
              self.ageReport = self.allReportDataArray[1].category_description;
              self.ageRisk = 'High Risk Value';
              self.ageClass = 'bg-danger';
          }

          if (data[0].bp_score === 2) {
              self.bpReport = self.allReportDataArray[2].category_description;
              self.bpRisk = 'Low Risk Value';
              self.bpClass = 'bg-success';
          } else if (data[0].bp_score === 1) {
              self.bpReport = self.allReportDataArray[3].category_description;
              self.bpRisk = 'Moderate Risk Value';
              self.bpClass = 'bg-warning';
          } else if (data[0].bp_score === 0) {
              self.bpReport = self.allReportDataArray[4].category_description;
              self.bpRisk = 'High Risk Value';
              self.bpClass = 'bg-danger';
          }

          if (data[0].hdl_score === 2) {
            self.hdlReport = self.allReportDataArray[5].category_description;
            self.hdlRisk = 'Low Risk Value';
            self.hdlClass = 'bg-success';
        } else if (data[0].hdl_score === 1) {
            self.hdlReport = self.allReportDataArray[6].category_description;
            self.hdlRisk = 'Moderate Risk Value';
            self.hdlClass = 'bg-warning';
        } else if (data[0].hdl_score === 0) {
            self.hdlReport = self.allReportDataArray[7].category_description;
            self.hdlRisk = 'High Risk Value';
            self.hdlClass = 'bg-danger';
        }

        if (data[0].ldl_score === 2) {
            self.ldlReport = self.allReportDataArray[8].category_description;
            self.ldlRisk = 'Low Risk Value';
            self.ldlClass = 'bg-success';
        } else if (data[0].ldl_score === 1) {
            self.ldlReport = self.allReportDataArray[9].category_description;
            self.ldlRisk = 'Moderate Risk Value';
            self.ldlClass = 'bg-warning';
        } else if (data[0].ldl_score === 0) {
            self.ldlReport = self.allReportDataArray[10].category_description;
            self.ldlRisk = 'High Risk Value';
            self.ldlClass = 'bg-danger';
        }

        if (data[0].glu_score === 2) {
            self.gluReport = self.allReportDataArray[11].category_description;
            self.gluRisk = 'Low Risk Value';
            self.gluClass = 'bg-success';
        } else if (data[0].glu_score === 1) {
            self.gluReport = self.allReportDataArray[12].category_description;
            self.gluRisk = 'Moderate Risk Value';
            self.gluClass = 'bg-warning';
        } else if (data[0].glu_score === 0) {
            self.gluReport = self.allReportDataArray[13].category_description;
            self.gluRisk = 'High Risk Value';
            self.gluClass = 'bg-danger';
        }

        if (data[0].waist_score === 2) {
            self.waistReport = self.allReportDataArray[14].category_description;
            self.waistRisk = 'Low Risk Value';
            self.waistClass = 'bg-success';
        } else if (data[0].waist_score === 0) {
            self.waistReport = self.allReportDataArray[15].category_description;
            self.waistRisk = 'High Risk Value';
            self.waistClass = 'bg-danger';
        }

        if (data[0].family_history_score === 2) {
            self.historyReport = self.allReportDataArray[16].category_description;
            self.historyRisk = 'Low Risk Value';
            self.historyDisplay = 'No';
            self.historyClass = 'bg-success';
        } else if (data[0].family_history_score === 0) {
            self.historyReport = self.allReportDataArray[17].category_description;
            self.historyRisk = 'High Risk Value';
            self.historyDisplay = 'Yes';
            self.historyClass = 'bg-danger';
        }

        if (data[0].physical_activity_score === 2) {
            self.activityReport = self.allReportDataArray[18].category_description;
            self.activityRisk = 'Low Risk Value';
            self.activityClass = 'bg-success';
        } else if (data[0].physical_activity_score === 0) {
            self.activityReport = self.allReportDataArray[19].category_description;
            self.activityRisk = 'High Risk Value';
            self.activityClass = 'bg-danger';
        }

        if (data[0].nicotine_score === 2) {
            self.nicotineReport = self.allReportDataArray[20].category_description;
            self.nicotineRisk = 'Low Risk Value';
            self.nicotineDisplay = 'No';
            self.nicotineClass = 'bg-success';
        } else if (data[0].nicotine_score === 0) {
            self.nicotineReport = self.allReportDataArray[21].category_description;
            self.nicotineRisk = 'High Risk Value';
            self.nicotineDisplay = 'Yes';
            self.nicotineClass = 'bg-danger';
        }

        if (data[0].sleep_score === 2) {
            self.sleepReport = self.allReportDataArray[22].category_description;
            self.sleepRisk = 'Low Risk Value';
            self.sleepClass = 'bg-success';
        } else if (data[0].sleep_score === 0) {
            self.sleepReport = self.allReportDataArray[23].category_description;
            self.sleepRisk = 'High Risk Value';
            self.sleepClass = 'bg-danger';
        }

        if (data[0].trg_value < 150) {
            self.trgReport = self.allReportDataArray[24].category_description;
            self.trgRisk = 'Optimal Value';
            self.trgClass = 'bg-success';
        } else if (data[0].trg_value > 149 && data[0].trg_value < 201) {
            self.trgReport = self.allReportDataArray[25].category_description;
            self.trgRisk = 'Moderate Value';
            self.trgClass = 'bg-warning';
        } else if (data[0].trg_value > 200) {
            self.trgReport = self.allReportDataArray[26].category_description;
            self.trgRisk = 'High Value';
            self.trgClass = 'bg-danger';
        }

        let bmiScore = 0;
        bmiScore = ((data[0].weight_value)/(data[0].height_value*data[0].height_value)*703);
        bmiScoreUse = Math.round((bmiScore *10)/10);
        self.mybmi = bmiScoreUse;

        if (bmiScoreUse < 25) {
            self.bmiReport = self.allReportDataArray[27].category_description;
            self.bmiRisk = 'Optimal Value';
            self.bmiClass = 'bg-success';
        } else if (bmiScoreUse > 24.99 && bmiScoreUse < 30) {
            self.bmiReport = self.allReportDataArray[28].category_description;
            self.bmiRisk = 'Moderate Value';
            self.bmiClass = 'bg-warning';
        } else if (bmiScoreUse > 29.99) {
            self.bmiReport = self.allReportDataArray[29].category_description;
            self.bmiRisk = 'High Value';
            self.bmiClass = 'bg-danger';
        }

        if (data[0].cvd_score === 20) {
            self.hhsReport = self.allReportDataArray[30].category_description;
            self.cvdRisk = 'Low Risk Score';
            self.hhsClass = 'bg-success';
        } else if (data[0].cvd_score === 19) {
            self.hhsReport = self.allReportDataArray[31].category_description;
            self.cvdRisk = 'Low Risk Score';
            self.hhsClass = 'bg-success';
        } else if (data[0].cvd_score === 18) {
            self.hhsReport = self.allReportDataArray[32].category_description;
            self.cvdRisk = 'Low Risk Score';
            self.hhsClass = 'bg-success';
        } else if (data[0].cvd_score === 17) {
            self.hhsReport = self.allReportDataArray[33].category_description;
            self.cvdRisk = 'Low Risk Score';
            self.hhsClass = 'bg-success';
        } else if (data[0].cvd_score === 16) {
            self.hhsReport = self.allReportDataArray[34].category_description;
            self.cvdRisk = 'Low Risk Score';
            self.hhsClass = 'bg-success';
        } else if (data[0].cvd_score === 15) {
            self.hhsReport = self.allReportDataArray[35].category_description;
            self.cvdRisk = 'Low Risk Score';
            self.hhsClass = 'bg-success';
        } else if (data[0].cvd_score === 14) {
            self.hhsReport = self.allReportDataArray[36].category_description;
            self.cvdRisk = 'Low Risk Score';
            self.hhsClass = 'bg-success';
        } else if (data[0].cvd_score === 13) {
            self.hhsReport = self.allReportDataArray[37].category_description;
            self.cvdRisk = 'Moderate Risk Score';
            self.hhsClass = 'bg-warning';
        } else if (data[0].cvd_score === 12) {
            self.hhsReport = self.allReportDataArray[38].category_description;
            self.cvdRisk = 'Moderate Risk Score';
            self.hhsClass = 'bg-warning';
        } else if (data[0].cvd_score === 11) {
            self.hhsReport = self.allReportDataArray[39].category_description;
            self.cvdRisk = 'Moderate Risk Score';
            self.hhsClass = 'bg-warning';
        } else if (data[0].cvd_score === 10) {
            self.hhsReport = self.allReportDataArray[40].category_description;
            self.cvdRisk = 'Moderate Risk Score';
            self.hhsClass = 'bg-warning';
        } else if (data[0].cvd_score === 9) {
            self.hhsReport = self.allReportDataArray[41].category_description;
            self.cvdRisk = 'Moderate Risk Score';
            self.hhsClass = 'bg-warning';
        } else if (data[0].cvd_score === 8) {
            self.hhsReport = self.allReportDataArray[42].category_description;
            self.cvdRisk = 'Moderate Risk Score';
            self.hhsClass = 'bg-warning';
        } else if (data[0].cvd_score === 7) {
            self.hhsReport = self.allReportDataArray[43].category_description;
            self.cvdRisk = 'Moderate Risk Score';
            self.hhsClass = 'bg-warning';
        } else if (data[0].cvd_score === 6) {
            self.hhsReport = self.allReportDataArray[44].category_description;
            self.cvdRisk = 'High Risk Score';
            self.hhsClass = 'bg-danger';
        } else if (data[0].cvd_score === 5) {
            self.hhsReport = self.allReportDataArray[45].category_description;
            self.cvdRisk = 'High Risk Score';
            self.hhsClass = 'bg-danger';
        } else if (data[0].cvd_score === 4) {
            self.hhsReport = self.allReportDataArray[46].category_description;
            self.cvdRisk = 'High Risk Score';
            self.hhsClass = 'bg-danger';
        } else if (data[0].cvd_score === 3) {
            self.hhsReport = self.allReportDataArray[47].category_description;
            self.cvdRisk = 'High Risk Score';
            self.hhsClass = 'bg-danger';
        } else if (data[0].cvd_score === 2) {
            self.hhsReport = self.allReportDataArray[48].category_description;
            self.cvdRisk = 'High Risk Score';
            self.hhsClass = 'bg-danger';
        } else if (data[0].cvd_score === 1) {
            self.hhsReport = self.allReportDataArray[49].category_description;
            self.cvdRisk = 'High Risk Score';
            self.hhsClass = 'bg-danger';
        } else if (data[0].cvd_score === 0) {
            self.hhsReport = self.allReportDataArray[50].category_description;
            self.cvdRisk = 'High Risk Score';
            self.hhsClass = 'bg-danger';
        }
        }).catch(function(error){
       //   console.log('Error getting data', error);
        })
        
      } //end getAllReportData

      self.getAllResourceData = function(data){
      //  console.log('PDS', data);
        $http({
          method: 'GET',
          url: `/data/resources/${data.id}`
        }).then(function(response){
        //  console.log('response All Data', data);
          self.allResourcesDataArray = response.data;

        if (data[0].bp_score === 1) {
            self.bpResourceOne = self.allResourcesDataArray[0].resource_info;
        } else if (data[0].bp_score === 0) {
            self.bpResourceTwo = self.allResourcesDataArray[1].resource_info;
        } else {
            self.bpResourceOne = '';
            self.bpResourceTwo = '';
        }

        if (data[0].hdl_score === 1) {
            self.hdlResourceOne = self.allResourcesDataArray[2].resource_info;
        } else if (data[0].hdl_score === 0) {
            self.hdlResourceTwo = self.allResourcesDataArray[3].resource_info;
        } else {
            self.hdlResourceOne = '';
            self.hdlResourceTwo = '';
        }

        if (data[0].ldl_score === 1) {
            self.ldlResourceOne = self.allResourcesDataArray[4].resource_info;
        } else if (data[0].ldl_score === 0) {
            self.ldlResourceTwo = self.allResourcesDataArray[5].resource_info;
        } else {
            self.ldlResourceOne = '';
            self.ldlResourceTwo = '';
        }

        if (data[0].glu_score === 1) {
            self.gluResourceOne = self.allResourcesDataArray[6].resource_info;
        } else if (data[0].glu_score === 0) {
            self.gluResourceTwo = self.allResourcesDataArray[7].resource_info;
        } else {
            self.gluResourceOne = '';
            self.gluResourceTwo = '';
        }

        if (data[0].sleep_score === 0) {
            self.sleepResourceOne = self.allResourcesDataArray[8].resource_info;
        } else {
            self.sleepResourceOne = '';
        }

        if (data[0].nicotine_score === 0) {
            self.nicotineResourceOne = self.allResourcesDataArray[9].resource_info;
        } else {
            self.nicotineResourceOne = '';
        }
        
        if (data[0].physical_activity_score === 0) {
            self.activityResourceOne = self.allResourcesDataArray[10].resource_info;
        } else {
            self.activityResourceOne = '';
        }

        if (data[0].waist_score === 0) {
            self.waistResourceOne = self.allResourcesDataArray[11].resource_info;
        } else {
            self.waistResourceOne = '';
        }

        }).catch(function(error){
         //   console.log('Error getting data', error);
          })
          
        






        } //end getAllResourceData

}]);