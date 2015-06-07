myApp.service('myService', function ($http, $q, URL) {
    
    $http.defaults.headers.common['X-Parse-Application-Id'] = 'Mv248r8bnylYI52LQEv3oyBXUNJCQJGlGsmvtEGA';
    $http.defaults.headers.common['X-Parse-REST-API-Key'] = 'qrltHp4aereH1QyuEjNaWJYHwbfqkg1OHkwBDlS7';
    
    var service = {};

    service.showAllJobs = function (limit, skip) {
        var defer = $q.defer();
        $http.get('https://api.parse.com/1/classes/Job?count=1&limit=' + limit + '&skip=' + skip)
            .success(function (data) {
                defer.resolve(data);
            })
            .error(function (err) {
                defer.reject(err);
            });
        return defer.promise;
    };

    service.showCategoryJobs = function (category) {
        var defer = $q.defer();
        $http.get('https://api.parse.com/1/classes/Job?where={"category":"' + category + '"}')
            .success(function (data) {
                defer.resolve(data);
            })
            .error(function (err) {
                defer.reject(err);
            });
        return defer.promise;
    };

    service.postNewJob = function (name, category, company) {
        var defer = $q.defer();
        var newJob = {
            name: name,
            category: category,
            company: company
        };
        $http.post(URL, newJob)
            .success(function (data) {
                defer.resolve(data);
            })
            .error(function (err) {
                defer.reject(err);
            });
        return defer.promise;
    };

    return service;
});