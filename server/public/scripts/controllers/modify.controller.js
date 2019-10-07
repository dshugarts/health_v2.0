myApp.controller('ModifyController', ['$http', '$location', 'UserService', 'DataService', 'UpdateService', function($http, $location, UserService, DataService, UpdateService) {
   // console.log('ModifyController created');
    var self = this;
    self.userService = UserService;
    self.dataService = DataService;
    self.updateService = UpdateService;
    self.userObject = UserService.userObject;
    self.dataArray = DataService.dataArray;
    self.newEntry = DataService.newEntry;
    self.entryObject = DataService.entryObject;
    self.id = UserService.userObject.id;
    self.addEntry = DataService.addEntry;
    self.newNicotine = self.dataArray[0].nicotine_value.toString();
    self.newHistory = self.dataArray[0].family_history_value.toString();
    self.scoreData = UpdateService.scoreData;


    self.dataView = function() {
        $location.url('/data');
      }

      self.editData = function(data){
        data.editing = true;
      }

      self.cancelUpdate = function(data){
        data.editing = false;
      }

      self.saveData = function(data, nic, his){
      //  console.log('PUT DATA', data, nic, his);
        updateObject = {
            entry_id: data.entry_id,
            id: data.id,
            data_date: data.data_date,
            age_value: data.age_value,
            family_history_value: self.newHistory,
            physical_activity_value: data.physical_activity_value,
            systolic_value: data.systolic_value,
            diastolic_value: data.diastolic_value,
            nicotine_value: self.newNicotine,
            glu_value: data.glu_value,
            hdl_value: data.hdl_value,
            ldl_value: data.ldl_value,
            trg_value: data.trg_value,
            waist_value: data.waist_value,
            sleep_value: data.sleep_value,
            height_value: data.height_value,
            weight_value: data.weight_value,
            gender: data.gender
        }
      //  console.log('updateObject', updateObject);
        UpdateService.scoreData(updateObject);
      } // end saveData


  }]);