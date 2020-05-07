const app = angular.module('ResortsApp', []);

app.controller('MainController', ['$http', function($http){
const controller = this;
this.editFormShown = null;


//GET DRINKS
this.getResorts = function(){
  $http({
    method:'GET',
    url:'/resort'
  }).then(function(response){
    controller.resorts = response.data;
  });
};



//CREATE DRINK
this.createResort = function(){
  $http({
    method:'POST',
    url:'/resort',
    data: {

      location:this.updatedLocation,
      mountain:this.updatedMountain
    }
  }).then(function(response){
    controller.getResorts ();
    controller.location = null;
    controller.mountain = null;
  },function(error){
    console.log(error);
  })
}

//EDIT DRINK
this.editResorts  = function(resort){
  $http({
    method:'PUT',
    url:'/resort/' + resort._id,
    data: {
      location:this.updatedLocation,
      mountain:this.updatedMountain
          }
    }).then(function(response){
      controller.getResorts ();
      controller.editFormShown = null;
  });
};

//DELETE DRINK
this.deleteResorts = function(resort){
  $http({
    method:'DELETE',
    url:'/resort/' + resort._id
  }).then(function(response){
    controller.getResorts ();
  })
}
