$(document).ready(function() {
	//-----------------------------
  //loader
  //-----------------------------
	// $(window).on('load', function(){
 //    setTimeout(function(){
 //    $('.loader-overlay').hide();
	// 	}, 1000);
 //  });

	$('.projects-container').slick({
		infinite: true,
	  mobileFirst: true,
	  responsive: [{
	    breakpoint: 992,
	      settings: {
	        slidesToShow: 1,
	        dots: false,
	        infinite: false,
	        arrows: true
	      }

	    },{

	      breakpoint: 0,
	      settings: {
	      	slidesToShow: 1,
	        dots: true,
	        arrows: false
	      }

	    }]
	});
 	$('.slick-arrow').addClass('zoom');
 	$("#close-iframe").click(function (){
 		let parentDoc = window.parent.document;
    let body = parentDoc.querySelector('body');
  	body.classList.remove('no-scroll');
  	let portfolioIframe = parentDoc.querySelector('#portfolio-iframe');
    portfolioIframe.style.display = 'none'
  });
});
