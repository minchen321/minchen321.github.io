$(document).ready(function() {
	//-----------------------------
  //loader
  //-----------------------------
  setTimeout(function(){
  	$('.loader-overlay').hide();
	}, 1000);
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

	    },{

	      breakpoint: 0,
	      settings: {
	      	slidesToShow: 1,
	        dots: true,
	        arrows: false
	      }

	    }]
	});
	//-----------------------------
  //close button
  //-----------------------------
 	$("#close-iframe").click(function (){
 		let parentDoc = window.parent.document;
    parentDoc.querySelector('body').classList.remove('no-scroll');
  	let iframeContainer = parentDoc.querySelector('#portfolio-iframe');
    iframeContainer.style.display = 'none';
    parentDoc.querySelector('#portfolio-iframe iframe').src = '';
  });
});
