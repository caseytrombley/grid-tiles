(function() {

    var app = angular.module('GridApp', []);   

    app.controller('GridCtrl', function($scope, $http) {

        $http({ method: 'GET', url: 'data.json' }).success(function (data) {
            console.log('hello');
            $scope.tiles = data; // response data 
        }).
        error(function (data) {
            console.log(data);
        });
    });

})();