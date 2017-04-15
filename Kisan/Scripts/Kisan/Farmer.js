var Kisan = angular.module('Farmer', []);
Kisan.controller('FarmerController', function ($scope, Table_Limit_Options, Table_Options, $filter, screenIcons, $http) {
    $scope.RowsPerPage = Table_Limit_Options[1];
    $scope.limitOptions = Table_Limit_Options;
    $scope.options = angular.fromJson(Table_Options);
    $scope.query = { filter: '' };
    $scope.screenIcons = screenIcons;
    $scope.FormData = {};
    var data;
    Bind();
    function Bind() {
        var date = new Date();
        $http.get('api/Farmer?' + date).then(function (Data) {
            $scope.GridData = {};
            $scope.addRow = false;
            data = angular.fromJson(Data.data.table);
            $scope.GridData = { "count": data.length, "data": data };
        });
    }
    $scope.Reload = function () { Bind(); }
    $scope.AddRow = function () {
        $scope.addRow = true;
    }
    $scope.editData = function (editDataObj) {
        debugger;
        $scope.FormData = editDataObj;
        $scope.addRow = true;
    }
    $scope.BackToMainScreen = function () { Bind(); }
    $scope.saveData = function (ev, form) {
        $http.post('api/Farmer', this.FormData).then(function (Data) {
            debugger;
            Bind();
        });
    }

    $scope.deleteData = function (ev, DeleteData) {
        debugger;
        $http.delete('api/Farmer', { "farmerID": DeleteData.farmerID }).then(function (Data) {
            debugger;
            Bind();
        });
    }
    $scope.filter = { options: { debounce: 500 } };
    $scope.removeFilter = function () {
        $scope.filter.show = false;
        $scope.query.filter = '';

        if ($scope.filter.form.$dirty) {
            $scope.filter.form.$setPristine();
        }
    };
    var bookmark, FilterData;
    $scope.$watch('query.filter', function (newValue, oldValue) {
        if (!oldValue) { bookmark = $scope.query.page; }
        if (newValue !== oldValue) { $scope.query.page = 1; }
        if (!newValue) { $scope.query.page = bookmark; }
        if (data !== undefined) FilterData = $filter('filter')(data, $scope.query.filter);
        if (FilterData) $scope.GridData = { "count": FilterData.length, "data": FilterData };
    });
});
