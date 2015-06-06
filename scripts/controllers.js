myApp.controller('showController', function ($scope, myService) {
    var limit = 4;
    var skip = 0;
    $scope.jobs = {};
    $scope.more = function() {
        myService.showAllJobs(limit, skip)
        .then(function (data) {
            console.log(skip);
            for (var i = skip, n = 0; i < skip + limit; i++, n++) {
                $scope.jobs[i] = data.results[n];
            }
            console.log($scope.jobs);
            skip += 4;
        }, function (error) {
            console.log(error);
        });
    }
    $scope.more();
});

myApp.controller('submitController', function ($scope, myService) {
    $scope.showCategoryJobs = function (category) {
        myService.showCategoryJobs(category)
            .then(function (data) {
                $scope.jobs = data.results;
            }, function (error) {
                console.log(error);
            });
    }
});