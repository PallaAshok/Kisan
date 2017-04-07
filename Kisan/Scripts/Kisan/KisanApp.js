/** KisanApp.js **/
var KisanApp = angular.module('KisanApp', ['ngMaterial', 'ngMessages', 'ngAnimate', 'ngAria', 'ui.router','Dashboard']);
KisanApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/Login");
    $stateProvider.state('Dashboard', { parent: "Kisan", url: "/Dashboard", templateUrl: "/Html/Dashboard.html", controller: "DashboardController" });
});

KisanApp.controller('KisanAppController', function PMToolController($rootScope) {
    var Auth = $rootScope.Authentication
});
