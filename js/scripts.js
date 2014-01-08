/* JavaScript Document */

$(window).load(function() {
	
	var div_h = $('.col-md-4').height();
	$('.col-md-8 .main_content').css('min-height', div_h - 30 );
	
	$('.main_content ul li a').attr('href','#pop_content');    
    $('.main_content ul li a').fancybox({
		autoSize: false,
		scrolling: 'no',
		padding: 0,
		width: 350,
		height: 190,
		helpers : {
		        overlay : {
		            css : {
		                'background' : 'rgba(0, 0, 0, 0.2)'
		            }
		        }
		    }
	}); 


});

	function Controller($scope) {
	
	  $scope.master = {};
	 
	  $scope.update = function(user) {
	    $scope.master = angular.copy(user);
	  };
	 
	  $scope.reset = function() {
	    $scope.user = angular.copy($scope.master);
	  };
	 
	  $scope.reset();
	}