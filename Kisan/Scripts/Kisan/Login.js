var Kisan = angular.module('login', ['KisanApp']);
Kisan.controller('LoginController', function ($rootScope, $location, $scope, $http, $httpParamSerializer, $state) {
    if ($rootScope.Authentication != undefined && $rootScope.Authentication != '') {
        $state.go('Dashboard');
    }
    $scope.LoginSubmit = function () {
        var th = this;
        $http({
            url: "/TOKEN",
            method: "POST",
            data: $httpParamSerializer({ grant_type: 'password', username: th.LogCtrl.login.email, password: th.LogCtrl.login.password }),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        }).then(function (Data) {
            $rootScope.Authentication = angular.fromJson(Data.data);
            $state.go('Dashboard');
        }, function (responce) { debugger; });
    }
});
