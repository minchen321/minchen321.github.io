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
  if($('.projects-container').length > 0) {
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
  }
  if($('.project-modal').length > 0) {
  	$('.open-craft').click(function(){
  		$('.craft-modal').fadeIn(300);
	  	const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
	  	const body = document.body;
			body.style.position = 'fixed';
			body.style.top = `-${scrollY}`;
			body.style.left = 0;

  	});
  	$('.craft-modal .close-modal-btn').click(function(){
  		$('.craft-modal').fadeOut(300);

  		const body = document.body;
			const scrollY = body.style.top;
			body.style.position = '';
			body.style.top = '';
			window.scrollTo(0, parseInt(scrollY || '0') * -1);
  	});  
  	$('.open-xbook').click(function(){
	  	const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
	  	const body = document.body;
			body.style.position = 'fixed';
			body.style.top = `-${scrollY}`;

  		$('.xbook-modal').fadeIn(300);
  	});
  	$('.xbook-modal .close-modal-btn').click(function(){
  		$('.xbook-modal').fadeOut(300);

  		const body = document.body;
			const scrollY = body.style.top;
			body.style.position = '';
			body.style.top = '';
			window.scrollTo(0, parseInt(scrollY || '0') * -1);
  	});  	
  }
	window.addEventListener('scroll', () => {
	  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
	});
	//-----------------------------
	// footer
	//-----------------------------
  let year = new Date().getFullYear();
  $('.currentYear').text(year);
});
