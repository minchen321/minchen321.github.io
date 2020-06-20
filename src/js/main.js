$(document).ready(function() {
	//-----------------------------
  //loader
  //-----------------------------
  setTimeout(function(){
  	$('.loader-overlay').hide();
	}, 1000);

	//-----------------------------
  //third party plugins
  //-----------------------------
	new WOW().init();

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
	$("#intro-text").typed({
		strings: ["Hi! I'm Min.", "I'm a UI Developer and Designer based in New York City."],
		typeSpeed: 100,
		loop: true,
		startDelay: 100
	});

	//-----------------------------
	//about section
	//-----------------------------
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

	//-----------------------------
	//projects
	//-----------------------------
  $("#web-card").click(function (){
  	$('body').addClass('no-scroll');
    $("#portfolio-iframe").fadeIn();
    $("#portfolio-iframe iframe").attr('src', 'web-projects.html');
  });
	//-----------------------------
	//contact modal
	//-----------------------------
  $("#message").click(function (){
    $(".contact-modal").show('slide', {direction:'down'}, 300);
    setTimeout(function(){
    	$("body").addClass("no-scroll");
		}, 500);
  });
  $("#close-modal").click(function (){
    $(".contact-modal").hide('slide', {direction:'down'}, 300);
    $("body").removeClass("no-scroll");
  });
});
