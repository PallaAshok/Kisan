(function () {
    'use strict';
    var Kisan = angular.module('KisanMaster', ['login']);

    Kisan.config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider, $locationProvider) {
        $urlRouterProvider.otherwise("/Login");
        $stateProvider.state('Login', { url: "/Login", templateUrl: "/Html/Login.html", controller: "LoginController" });
        $stateProvider.state('Kisan', { url: "/Kisan", templateUrl: "/Html/KisanApp.html", controller: "KisanAppController" });
    });

    Kisan.controller('mainCtrl', function ($scope) {
    });
})();