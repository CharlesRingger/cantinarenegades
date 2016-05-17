/**
 * Created by cringger on 7/19/2014.
 */

var app = angular.module('MainApp', ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			controller:'HomeCtrl',
			templateUrl:'app/home.html'
		})
		.when('/Contact', {
			controller:'ContactCtrl',
			templateUrl:'app/contact.html'
		})
		.when('/Shows', {
			controller:'ShowsCtrl',
			templateUrl:'app/shows.html'
		})
		.when('/About', {
			controller:'AboutCtrl',
			templateUrl:'app/about.html'
		})
		.otherwise({
			redirectTo:'/'
		});
});


app.controller('MainCtrl', [ '$scope', '$location', function($scope, $location){

	$scope.sections = ['Home','About','Shows','Contact']
	$scope.sectionLoaded = function(sectionName){
		$scope.activeSection = sectionName;
	};
	$scope.activeSection = 'Home';
	$scope.sectionActive = function(section){
		return $scope.activeSection == section;
	};

	$scope.sectionClick = function(section){
		$('#site-header-collapse').collapse('hide');
		$location.path('/' + section);
	};

}]);

app.controller('HomeCtrl', [ '$scope', function($scope){
	$scope.sectionLoaded('Home');

}]);

app.controller('ContactCtrl', [ '$scope', function($scope){
	$scope.sectionLoaded('Contact');

}]);

app.controller('ShowsCtrl', [ '$scope', '$sce', function($scope, $sce){
	$scope.sectionLoaded('Shows');

	// Todo - Retrieve this from an API
	$scope.shows = [
		{
			Date: 'July 29, 2014',
			Time: '7:30 PM to 10:30 PM',
			Location: 'Live from Memphis',
			LocationURL: 'http://www.livefrommemphispianobar.com/',
			City: 'Corona',
			State: 'CA',
			MapEmbedSrc:  $sce.trustAsResourceUrl('https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3314.9693512225945!2d-117.50735200000003!3d33.813103999999996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcb92021b4ce8f%3A0x7b74cdad46005722!2sLive+From+Memphis!5e0!3m2!1sen!2sus!4v1405904372644')
		},
		{
			Date: 'Aug 12, 2014',
			Time: '7:30 PM to 10:30 PM',
			Location: 'Live from Memphis',
			LocationURL: 'http://www.livefrommemphispianobar.com/',
			City: 'Corona',
			State: 'CA',
			MapEmbedSrc:  $sce.trustAsResourceUrl('https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3314.9693512225945!2d-117.50735200000003!3d33.813103999999996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcb92021b4ce8f%3A0x7b74cdad46005722!2sLive+From+Memphis!5e0!3m2!1sen!2sus!4v1405904372644')
		},
		{
			Date: 'Aug 26, 2014',
			Time: '7:30 PM to 10:30 PM',
			Location: 'Live from Memphis',
			LocationURL: 'http://www.livefrommemphispianobar.com/',
			City: 'Corona',
			State: 'CA',
			MapEmbedSrc:  $sce.trustAsResourceUrl('https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3314.9693512225945!2d-117.50735200000003!3d33.813103999999996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcb92021b4ce8f%3A0x7b74cdad46005722!2sLive+From+Memphis!5e0!3m2!1sen!2sus!4v1405904372644')
		},
		{
			Date: 'Sept 06, 2014',
			Time: '9:00 PM',
			Location: 'Pier View Pub',
			LocationURL: 'http://mypierviewpub.com',
			City: 'Oceanside',
			State: 'CA',
			MapEmbedSrc:  $sce.trustAsResourceUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3338.6967707845365!2d-117.38153399999999!3d33.195825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc6e370d95e8cf%3A0xe0da94fa558785c!2sPierview+Pub!5e0!3m2!1sen!2sus!4v1405921405577')
		}
	];

}]);

app.controller('AboutCtrl', [ '$scope', function($scope){
	$scope.sectionLoaded('About');

}]);
