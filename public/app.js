// angular.module('myApp',[])
//


var sampleApp = angular.module('myApp', [])

.controller('myCtrl', ['$scope', '$http', function($scope,  $http){
  $scope.representatives = [];

 $scope.name = 'bob';
 $scope.hide = false;
 $scope.repType = 'Representatives';
 $scope.repSelected = "zzz";
 $scope.setName = function(name){
   $scope.hide = true;
   $scope.repSelected = name;
 }




 $scope.congressType = "Representatives"
console.log("yellow")
   var url = 'http://localhost:3000/Representatives/UT?callback=JSON_CALLBACK';


   $http.jsonp(url).then(
     function(s) {
       var results = s.data[0].results,
        repObject = {};
      //  Object.keys(results).forEach(function(repIndex){

      console.log("length"+ results.length)
      for (var i = 0; i < results.length; i++){
        var rep = {
          name: "",
          fName : "",
          lName : "",
          party : "",
          district : "",
          phone : "",
          office : "",
          link : ""
        };
        console.log("repObject" + repObject.name)
        repObject = results[i];

        rep.name = repObject.name;
        rep.fName = repObject.name.split(' ')[0];
        rep.lName = repObject.name.split(' ')[1];
        rep.party = repObject.party;
        rep.district = repObject.district;
        rep.phone = repObject.phone;
        rep.office = repObject.office;
        rep.link = repObject.link;

         console.log(rep.fName)
        // console.log(rep.lName)
        // console.log(rep.district)
        // console.log(rep.phone)
        // console.log(rep.office)
        // console.log(rep.link)
        console.log("rep" + rep.fName)
        $scope.representatives.push(rep)


        console.log("reps so far --" + $scope.representatives.forEach(logArrayElements))
       }

       console.log($scope.representatives)
     },
     function(e) {
       $scope.error = e;
       console.log("error " + e)
     }
  );
}])

.controller('AppCtrl', function($scope) {
    var imagePath = 'img/list/60.jpeg';

    $scope.phones = [
      {
        type: 'Home',
        number: '(555) 251-1234',
        options: {
          icon: 'communication:phone'
        }
      },
      {
        type: 'Cell',
        number: '(555) 786-9841',
        options: {
          icon: 'communication:phone',
          avatarIcon: true
        }
      },
      {
        type: 'Office',
        number: '(555) 314-1592',
        options: {
          face : imagePath
        }
      },
      {
        type: 'Offset',
        number: '(555) 192-2010',
        options: {
          offset: true,
          actionIcon: 'communication:phone'
        }
      }
    ];
    $scope.todos = [
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
    ];
});


function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element.fName);
}
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
