myApp.controller('ResourcesController', ['$http', '$location', 'UserService', 'DataService', function($http, $location, UserService, DataService) {
  //  console.log('ResourcesController created');
    var self = this;
    self.userService = UserService;
    self.DataService = DataService;
    self.userObject = UserService.userObject;
    self.userObject = UserService.userObject;
    self.dataArray = DataService.dataArray;
    self.getData = DataService.getData;
    self.id = UserService.userObject.id;
    self.getAllResourceData = DataService.getAllResourceData;
    self.bpResourceOne = DataService.bpResourceOne;
    self.bpResourceTwo = DataService.bpResourceTwo;
    self.hdlResourceOne = DataService.hdlResourceOne;
    self.hdlResourceTwo = DataService.hdlResourceTwo;
    self.ldlResourceOne = DataService.ldlResourceOne;
    self.ldlResourceTwo = DataService.ldlResourceTwo;
    self.gluResourceOne = DataService.gluResourceOne;
    self.gluResourceTwo = DataService.gluResourceTwo;
    self.sleepResourceOne = DataService.sleepResourceOne;
    self.nicotineResourceOne = DataService.nicotineResourceOne;
    self.activityResourceOne = DataService.activityResourceOne;
    self.waistResourceOne = DataService.waistResourceOne;
    self.bpClass = DataService.bpClass;
    self.bpRisk = DataService.bpRisk;
    self.goBpResource = DataService.goBpResource;
    self.goHdlResource = DataService.goHdlResource;
    self.hdlClass = DataService.hdlClass;
    self.hdlRisk = DataService.hdlRisk;
    self.goLdlResource = DataService.goLdlResource;
    self.ldlClass = DataService.ldlClass;
    self.ldlRisk = DataService.ldlRisk;
    self.goGluResource = DataService.goGluResource;
    self.gluClass = DataService.gluClass;
    self.gluRisk = DataService.gluRisk;
    self.goWaistResource = DataService.goWaistResource;
    self.waistClass = DataService.waistClass;
    self.waistRisk = DataService.waistRisk;
    self.goActivityResource = DataService.goActivityResource;
    self.activityClass = DataService.activityClass;
    self.activityRisk = DataService.activityRisk;
    self.goNicotineResource = DataService.goNicotineResource;
    self.nicotineClass = DataService.nicotineClass;
    self.nicotineRisk = DataService.nicotineRisk;
    self.goSleepResource = DataService.goSleepResource;
    self.sleepClass = DataService.sleepClass;
    self.sleepRisk = DataService.sleepRisk;
    self.nicotineDisplay = DataService.nicotineDisplay;

    
    if (self.bpResourceOne != '') {
      self.bpone = true;
    } else if (self.bpResourceTwo != '') {
      self.bptwo = true;
    }

    if (self.hdlResourceOne != '') {
      self.hdlone = true;
    } else if (self.hdlResourceTwo != '') {
      self.hdltwo = true;
    }

    if (self.ldlResourceOne != '') {
      self.ldlone = true;
    } else if (self.ldlResourceTwo != '') {
      self.ldltwo = true;
    }

    if (self.gluResourceOne != '') {
      self.gluone = true;
    } else if (self.gluResourceTwo != '') {
      self.glutwo = true;
    }

    if (self.sleepResourceOne != '') {
      self.sleepone = true;
    } 

    if (self.nicotineResourceOne != '') {
      self.nicotineone = true;
    } 

    if (self.activityResourceOne != '') {
      self.activityone = true;
    } 

    if (self.waistResourceOne != '') {
      self.waistone = true;
    } 


  }]);