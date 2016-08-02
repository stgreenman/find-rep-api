// angular.module('myApp',[])
//


var sampleApp = angular.module('myApp', [])

.controller('myController', ['$scope', '$http', function($scope,  $http){
 $scope.name = 'bob';
 $scope.congressType = "Representatives"
console.log("yellow")
   var url = 'http://localhost:3000/Representatives/UT?callback=JSON_CALLBACK';

   $http.jsonp(url).then(
     function(s) {
      //  console.log(Object.keys(s.data[0].results))
      console.log(JSON.stringify(s.data[0].results[0].name))

     },
     function(e) {
       $scope.error = '';
       console.log("erroro" + e.token)
     }
  );



// 	$scope.party = '';
// 	$scope.fName = '';
// 	$scope.lName = '';
// 	$scope.district = '';
// 	$scope.phone = '';
// 	$scope.office = '';
//
//
}]);

// sampleApp .config(['$routeProvider',
//   function($routeProvider) {
//     $routeProvider.
//       when('/', {
//         templateUrl: 'home.html',
//         controller: 'myController'
//       }).
//       otherwise({
//         redirectTo: '/'
//       });
//   }]);
//















//
// angular.module('sortApp', ['ngMaterial'])
//
// .controller('mainController', function($scope) {
//   $scope.sortColumn     = 'name'; // set the default sort type
//   $scope.sortOrder = false;  // set the default sort order
//   $scope.searchCompanies   = '';     // set the default search/filter term
//
//   // create the list of sushi rolls
//   $scope.companies = [
//     { name: 'Vivint', type: 'Security', avgCom: '34%', avgSales: 2, rating: 5, $
//     { name: 'Bulwark', avgCom: '41%', avgSales: 4, avgSales: 2, rating: 5, loca$
//     { name: 'Hawk', avgCom: '32%', avgSales: 7, avgSales: 2, rating: 5, locatio$
//     { name: 'Aptive', avgCom: '37%', avgSales: 6, avgSales: 2, rating: 5, locat$
//   ];
//
// });
