angular.module('CounterApp', ['firebase'])
	
	.constant('fbURL', 'https://felman.firebaseio.com')

	.controller('MainCtrl', function($scope, fbURL, $firebase){

 		var felmanRef = new Firebase(fbURL);    	

    	var data = $firebase(felmanRef);

    	$scope.counter = data;

    	$scope.addDay = function (){

    		 felmanRef.update({total: parseInt($scope.counter.total) + 1});
    	}

    	$scope.removeDay = function (){

    		 felmanRef.update({total: parseInt($scope.counter.total) - 1});
    	}

    	$scope.resetStats = function (){

    		 felmanRef.update({total: 0});
    	}
	})

;