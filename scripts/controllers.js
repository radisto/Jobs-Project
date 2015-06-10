myApp.controller('appController', function ($scope, myService) {
    var limit = 20;
    var skip = 0;
    var today = new Date();
    var options = {day: 'numeric', month: 'short'};
    $scope.jobs = [];
    $scope.more = function() {
        myService.showAllJobs(limit, skip)
        .then(function (data) {
            $scope.count = data.count - limit - skip;
            for (var j = 0; j < limit; j++) {
                var random = Math.floor((Math.random() * 5));
                var cities = ['Sofia', 'Sofia', 'Sofia', 'Sofia', 'Sofia', 'Sofia', 'Sofia', 'Sofia', 'Sofia', 'Sofia', 'Sofia', 'Sofia', 
                              'Plovdiv', 'Plovdiv', 'Varna', 'Varna', 'Burgas', 'Ruse', 'Stara Zagora', 'Pleven'];
                var randomCity = Math.floor((Math.random() * 20));
                var companies = ['Google', 'Microsoft', 'Apple', 'Facebook', 'IBM', 'Oracle', 'SAP', 'Adobe', 'Cisco', 'VMware',
                                 'HP', 'Intel', 'Siemens', 'Apple', 'Amazon'];
                var randomCompany = Math.floor((Math.random() * 15));
                newDate = new Date(today);
                newDate.setDate(today.getDate() - random);
                data.results[j].date = newDate.toLocaleDateString('en-US', options);
                data.results[j].city = cities[randomCity];
                data.results[j].company = companies[randomCompany];
            }
            for (var i = skip, n = 0; i < skip + limit; i++, n++) {
                $scope.jobs.push(data.results[n]);
            }
            skip += 20;
        }, function (error) {
            console.log(error);
        });
    }
    $scope.more();
    
    $scope.checkIfToday = function(date) {
        if (date.split(' ')[1] == today.getDate()) {
            return true;
        }
        return false;
    }
    
    $scope.checkIfYesterday = function(date) {
        var yesterday = new Date(today);
        yesterday.setDate(today.getDate()-1);
        if (date.split(' ')[1] == yesterday.getDate()) {
            return true;
        }
        return false;
    }
    
    $scope.sortDate = function (job) {
        return parseInt(job.date.split(' ')[1]);
    }
});