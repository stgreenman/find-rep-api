// angular.module('myApp',[])
//


var sampleApp = angular.module('myApp', [])

.controller('myCtrl', ['$scope', '$http', function($scope,  $http){
  $scope.representatives = [];

  $scope.name = 'bob';
  $scope.hide = false;
  $scope.repType = 'Representatives';
  $scope.repSelected = "UT";
  $scope.data = '';
  $scope.setName = function(name){
    $scope.hide = true;
    $scope.repSelected = name;
  }
  $scope.congressType = "Representatives"

}])


.directive("mapClick", ['$http', function(http) {
  return {
    restrict: "A",
    link: function($scope, $http){
      $(document).ready(function() {



        $('.typeRep').unbind('click').click(function(){
          var dataT = $scope.data.name;
          $scope.hide = false;
          updateReps(dataT, $scope.repType, http, $scope)
        }),





        $('#map').usmap({
          'stateSpecificStyles': {
            'AK' : {fill: '#f00'}
          },
          'stateSpecificHoverStyles': {
            'HI' : {fill: '#ff0'}
          },

          'mouseoverState': {
            'HI' : function(event, data) {
              //return false;
          }
        },


        'click' : function(event, data) {
          $('#alert')
            .text('Click '+data.name+' on map 148975345')
            .stop()
            .css('backgroundColor', '#ff0')
            .animate({backgroundColor: '#ddd'}, 1000);
        },
        'click' : function(event, data){

          // stateDiv = "#".concat(data.name);
          stateSymbol = "".concat(data.name);
          $('#stateSelected').text(stateSymbol)
          $scope.stateSelected = stateSymbol;
          $scope.data = data;
          $scope.hide = false;

          console.log("state: " + $scope.stateSelected)
         var url = 'http://localhost:3000/' + $scope.repType + '/'+ $scope.stateSelected + '?callback=JSON_CALLBACK';

         http.jsonp(url).then(
           function(s) {
             var results = s.data[0].results,
              repObject = {};

              $scope.representatives.length = 0;
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
          },

           function(e) {
             $scope.error = e;
             console.log("error " + e)
           }
         )
      }
    })



      $('#over-md').click(function(event){
        $('#map').usmap('trigger', 'MD', 'mouseover', event);
      });

      $('#out-md').click(function(event){
        $('#map').usmap('trigger', 'MD', 'mouseout', event);
      });
    });
  }

}
}]);

function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element.fName);
}


function updateReps(stateAbr, rType, http, $scope){

  // stateSymbol = "".concat(data.name);
  // $('#stateSelected').text(stateSymbol)
  // $scope.stateSelected = stateSymbol



  var url = 'http://localhost:3000/' + rType + '/'+ stateAbr + '?callback=JSON_CALLBACK';


  http.jsonp(url).then(
   function(s) {
     var results = s.data[0].results,
      repObject = {};

// alert ('results' + results)

      $scope.representatives.length = 0;
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

        // alert('rep.name' + rep.name)

      $scope.representatives.push(rep)


        console.log("reps so far --" + $scope.representatives.forEach(logArrayElements))
      }
    },

   function(e) {
     $scope.error = e;
     console.log("error " + e)
   }
  )
}
