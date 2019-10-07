myApp.service('SignupService', ['$http', '$location', 'UserService', function ($http, $location, UserService) {
    //  console.log('SignupService Loaded');
    var self = this;
    self.userService = UserService;
    self.userObject = UserService.userObject;
    id = UserService.userObject.id;

    self.addInfo = function (info) {
        console.log('addInfo = ', info, id);
        const entry = {
            id: id,
            first_name: info.first_name,
            last_name: info.last_name,
            email: info.email
        }
        $http({
            method: 'PUT',
            url: `/signup/info/${id}`,
            data: {
                entry: entry
            }
        }).then(function (response) {
            swal("Account successfully created!", "", "success")
            $location.path('/data_entry');
        }).catch(function (error) {
         //   console.log('goals put error', error);
        })
    } // end addInfo

    self.letPass = function () {
        console.log('in Signup Service id = ', id);
        const disclaimer = true;
        const entry = {
            id: id,
            disclaimer: disclaimer
        }
        console.log('in letPass entry = ', entry);
        $http({
            method: 'POST',
            url: '/signup',
            data: {
                entry: entry
            }
        }).then(function (response) {
            $location.path('/general_info');
        }).catch(function (error) {
          //  console.log('disclaimer error');
        })
    } // end letPass




}]);