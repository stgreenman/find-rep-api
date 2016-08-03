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
}]);


// .directive("mapClick", function() {
//   return {
//     restrict: "A",
//     link: function(){
//       alert("Howdy!");
//
//
//
//
//   $(document).ready(function() {
//     $('#map').usmap({
//       'stateSpecificStyles': {
//         'AK' : {fill: '#f00'}
//       },
//       'stateSpecificHoverStyles': {
//         'HI' : {fill: '#ff0'}
//       },
//
//       'mouseoverState': {
//         'HI' : function(event, data) {
//           //return false;
//         }
//       },
//
//
//       'click' : function(event, data) {
//         $('#alert')
//           .text('Click '+data.name+' on map 1')
//           .stop()
//           .css('backgroundColor', '#ff0')
//           .animate({backgroundColor: '#ddd'}, 1000);
//       }
//     });
//
//     // $('#map2').usmap({
//     //   'stateStyles': {
//     //     fill: '#025',
//     //     "stroke-width": 1,
//     //     'stroke' : '#036'
//     //   },
//     //   'stateHoverStyles': {
//     //     fill: 'teal'
//     //   },
//     //
//     //   'click' : function(event, data) {
//     //     $('#alert')
//     //       .text('Click '+data.name+' on map 2')
//     //       .stop()
//     //       .css('backgroundColor', '#af0')
//     //       .animate({backgroundColor: '#ddd'}, 1000);
//     //   }
//     // });
//
//     $('#over-md').click(function(event){
//       $('#map').usmap('trigger', 'MD', 'mouseover', event);
//     });
//
//     $('#out-md').click(function(event){
//       $('#map').usmap('trigger', 'MD', 'mouseout', event);
//     });
//   });
//
// }
//
// }
// });

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
