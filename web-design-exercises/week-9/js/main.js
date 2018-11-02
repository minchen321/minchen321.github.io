$(document).ready(function() {
	let homeHeight = $('#home').height();
	let aboutHeight = $('#about').height();

	//smooth scrolling
	$('#home-link').click(function(){
		$('html, body').animate({scrollTop: 0}, 1000);
	});	
	$('#about-link').click(function(){
		$('html, body').animate({scrollTop: homeHeight - 220}, 1000);
	});
	$('#albums-link').click(function(){
		$('html, body').animate({scrollTop: homeHeight + aboutHeight - 220}, 1000);
	});


	$(window).scroll(function(e) {
		scrollTracker();
	});

	function scrollTracker() {
		let scroll = $(window).scrollTop();	
		let rightMargin = Math.floor((scroll - 500) * 0.05);
		let imgSize = $(window).scrollTop() - homeHeight - aboutHeight + 300;
		console.log(imgSize);

		if(rightMargin < 6){
			$('#intro').css({
				'right': rightMargin + '%'
			});
		}
		if(imgSize < 90){
			$('.album-card img').css({
				'width': imgSize + '%'
			});
		}
	}



});