//-----------------------------
//loader
//-----------------------------
setTimeout(function(){
  document.querySelector('.loader-overlay').style.display = "none";
}, 1000);

$(document).ready(function() {
	//-----------------------------
  // tracking
  //-----------------------------
	$('a').click(function(){
		let action   = 'cta-click'
		let category = 'cta';
		let label = window.location.pathname;
		if ($(this).data('category')) {
			category = $(this).data('category');
		}
		if (typeof gtag !== 'undefined') {
			gtag('event', action, {
				'event_category': category,
				'event_label': label
			});
		}
		if (typeof ga !== 'undefined') {
      ga('send', 'event', category, action, label);
    }
	})
	//-----------------------------
  //third party plugins
  //-----------------------------
  if($('.wow').length > 0) {
		new WOW().init();
  }
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

	// smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname){
	      let target = $(this.hash);
	      let navbarHeight = 0;
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      if($(window).width() > 992){
					navbarHeight = 45;
	      }
	      if (target.length) {
	        $('html, body').animate({
	          	scrollTop: (target.offset().top - navbarHeight)
	        	}, 1000, "easeInOutExpo");
	        return false;
	      }
    }
  });

	// scrollspy
	$(window).bind('scroll', function() {
	  let currentTop = $(window).scrollTop() + 60;
	  let elems = $('section');
	  elems.each(function(index){
	    let elemTop = $(this).offset().top;
	    let elemBottom = elemTop + $(this).height();
	    if(currentTop >= elemTop && currentTop <= elemBottom){
	      let id = $(this).attr('id');
	      let navElem = $('.navbar a[href="#' + id+ '"]');
	    	navElem.parent().addClass('active').siblings().removeClass('active');
	    }
	  })
	});
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
	//animated typing intro message
	//-----------------------------
	if($('#intro-text').length > 0) {
		$("#intro-text").typed({
			strings: ["Hi! I'm Min.", "I'm a UI Developer and Designer based in New York City."],
			typeSpeed: 100,
			loop: true,
			startDelay: 100
		});
	}
	//-----------------------------
	//about section
	//-----------------------------
	if($('#about').length > 0) {
	  $("#aboutCoding").hide();
	  $("#aboutMin").hide();
		$("#aboutMe").show();
	  $("#coding-bg-btn").click(function(){
	    $("#aboutMe").hide("slide", { direction: "right"  }, 700 );
	    $("#aboutCoding").show( "slide", { direction: "left"  }, 700 );
	  });
	  $("#left-back").click(function(){
	    $("#aboutCoding").hide("slide", { direction: "left"  }, 700 );
	    $("#aboutMe").show( "slide", { direction: "right"  }, 700 );
	  });
	  $("#my-bg-btn").click(function(){
	    $("#aboutMe").hide("slide", { direction: "left"  }, 700 );
	       $("#aboutMin").show( "slide", { direction: "right"  }, 700 );
	    });
	    $("#right-back").click(function(){
	    	$("#aboutMin").hide("slide", { direction: "right"  }, 700 );
	    	$("#aboutMe").show( "slide", { direction: "left"  }, 700 );
	  });
	}
	//-----------------------------
	//contact modal
	//-----------------------------
  $("#message").click(function (){
    $(".contact-modal").show('slide', {direction:'down'}, 300);
    $("html, body").addClass("no-scroll");
  });
  $(".close-msg-btn").click(function (){
    $(".contact-modal").hide('slide', {direction:'down'}, 300);
    $("html, body").removeClass("no-scroll");
  });
  //-----------------------------
	//design projects
	//-----------------------------
  if($('.project-modal').length > 0) {
		
  	$('.open-project-modal').click(function() {
	  	const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
			const body = document.body;
			const projectType = $(this).data('project')
			body.style.position = 'fixed';
			body.style.top = `-${scrollY}`;
			$(`.${projectType}-modal`).fadeIn(300);
		});
  	$('.close-modal-btn').click(function(){
  		$('.project-modal').fadeOut(300);
  		const body = document.body;
			const scrollY = body.style.top;
			body.style.position = '';
			body.style.top = '';
			window.scrollTo(0, parseInt(scrollY || '0') * -1);
  	});
  }
  if($('#design-section').length > 0) {
		window.addEventListener('scroll', () => {
		  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
		});
  }
	//-----------------------------
	// footer
	//-----------------------------
  let year = new Date().getFullYear();
  $('.currentYear').text(year);
});
