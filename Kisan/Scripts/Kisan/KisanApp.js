/** KisanApp.js **/
var KisanApp = angular.module('KisanApp', ['ngMaterial', 'ngMessages', 'ngAnimate', 'ngAria', 'ui.router', 'md.data.table', 'Farmer']);
KisanApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/Login");
    $stateProvider.state('Farmer', { parent: "Kisan", url: "/Farmer", templateUrl: "/Html/Farmer.html", controller: "FarmerController" });
});

KisanApp.controller('KisanAppController', function PMToolController($rootScope) {
    var Auth = $rootScope.Authentication
});
KisanApp.constant('Table_Options', angular.toJson({ rowSelection: false, multiSelect: true, autoSelect: true, decapitate: false, largeEditDialog: false, boundaryLinks: false, limitSelect: true, pageSelect: true }));
KisanApp.constant('Table_Limit_Options', [5, 10, 15, 30, 50, 100]);

/*icons for all screens*/
KisanApp.constant('screenIcons', {
    searchIcon: "../Img/search-icon.png",
    plusIcon: "../Img/plus_icon.png",
    editIcon: "../Img/edit.png",
    deleteIcon: "../Img/delete.png"
});
