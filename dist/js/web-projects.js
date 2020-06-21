//-----------------------------
//loader
//-----------------------------
setTimeout(function(){
  document.querySelector('.loader-overlay').style.display = "none";
}, 1000);

$(document).ready(function() {
  //-----------------------------
  //mobile menu icon
  //-----------------------------
  let navLinkContainer = $('.navbar .container');
  $('.hamburger-icon, .link-list a').click(function(){
  	if($(window).width() < 992){
	  	if(navLinkContainer.hasClass('open')){
				$('.hamburger-icon img').attr('src', 'dist/img/icons/bars.svg')
	  		navLinkContainer.removeClass('open slideInRight');
	  	}else{
				navLinkContainer.addClass('open slideInRight');
				$('.hamburger-icon img').attr('src', 'dist/img/icons/blue-close-icon.svg')
	  	}
  	}
	});
	//remove 'open' class the window resizes
	$(window).on('resize', function(){
	  if($(window).width() > 992) {
	  	navLinkContainer.removeClass('open');
	  	$('.hamburger-icon img').attr('src', 'dist/img/icons/bars.svg')
	  }
	});	
	//-----------------------------
  //slick slider
  //-----------------------------
	$('.projects-container').slick({
	  mobileFirst: true,
	  responsive: [{
	    breakpoint: 992,
	      settings: {
	        slidesToShow: 1,
	        dots: false,
	        infinite: true,
	        arrows: true
	      }
	    },
	    {
	      breakpoint: 0,
	      settings: {
	      	slidesToShow: 1,
	        dots: true,
	        arrows: false
	      }

	    }]
	});
});
