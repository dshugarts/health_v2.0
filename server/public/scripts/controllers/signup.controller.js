myApp.controller('SignupController', ['$http', '$location', 'UserService', 'SignupService', function($http, $location, UserService, SignupService) {
    // console.log('DisclaimerController created');
    var self = this;
    self.userService = UserService;
    self.signupService = SignupService;
    self.userObject = UserService.userObject;
    self.id = UserService.userObject.id;
    self.letPass = SignupService.letPass;
    self.addInfo = SignupService.addInfo;

    console.log('in signup controller id ', self.id);
 
 }]);