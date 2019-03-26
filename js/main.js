jQuery(function($) {'use strict';
    new WOW().init();
}); 
$(document).ready(function() {
  $(window).on('load', function(){
    $('.loader-overlay').hide();  
  });
	// Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname){
	      let target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      if (target.length) {
	        $('html, body').animate({
	          	scrollTop: (target.offset().top - 45)
	        	}, 1000, "easeInOutExpo");
	        return false;
	      }
    }
  });	
  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });
  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '.main-nav',
    offset: 46
  });
	//about-section
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
	//animated typing message
	$("#introduction").typed({
		strings: ["Hi! I'm Min.", "I'm a Front End Developer based in New York City."],
		typeSpeed: 100,
		loop: true,
		startDelay: 100
	});
  //portfolio project
  const projects = [
    {
      id:1,
      videoPath: 'img/portfolio/dish-finder.webm',
      alternativePath: 'img/portfolio/dish-finder.mp4',
      projectName: 'DishFinder',
      techStack: 'HTML, CSS, JavaScript, jQuery, Bootstrap, Node.js, Express.js, Handlebars, MongoDB'
    },
    {
      id:2,
      videoPath: 'img/portfolio/lumi.webm',
      alternativePath: 'img/portfolio/lumi.mp4',
      projectName: 'Lumi Asian Fusion',
      techStack: 'HTML, CSS, JavaScript, jQuery, Bootstrap'
    },    
    {
      id:3,
      videoPath: 'img/portfolio/payoment.webm',
      alternativePath: 'img/portfolio/payoment.mp4',
      projectName: 'Payoment',
      techStack: 'HTML, CSS, JavaScript, jQuery, Bootstrap'
    },
    {
      id:4,
      videoPath: 'img/portfolio/wellness-biscuit.webm',
      alternativePath: 'img/portfolio/wellness-biscuit.mp4',
      projectName: 'Wellness Biscuit',
      techStack: 'HTML, CSS, JavaScript, jQuery, Bootstrap'
    },
    {
      id:5,
      videoPath: 'img/portfolio/boxing-gym.webm',
      alternativePath: 'img/portfolio/boxing-gym.mp4',
      projectName: 'Boxing Gym',
      techStack: 'HTML, CSS, JavaScript, jQuery, Bootstrap'
    },
    {
      id:6,
      videoPath: 'img/portfolio/lily.webm',
      alternativePath: 'img/portfolio/lily.mp4',
      projectName: 'Yoga Studio',
      techStack: 'HTML, CSS, JavaScript, jQuery, Bootstrap'
    },              
    {
      id:7,
      videoPath: 'img/portfolio/surtom.webm',
      alternativePath: 'img/portfolio/surtom.mp4',
      projectName: 'Surtom Construction',
      techStack: 'HTML, CSS, JavaScript, jQuery, Bootstrap'
    }, 
    {
      id:8,
      videoPath: 'img/portfolio/smart-capital.webm',
      alternativePath: 'img/portfolio/smart-capital.mp4',
      projectName: 'Smart Capital',
      techStack: 'HTML, CSS, JavaScript, Wordpress'
    }
  ];
  let counter = 0;
  let player = document.getElementById('project-player'); 

  $('#projectName').text(projects[counter].projectName);
  $('#techStack').text(projects[counter].techStack);
  $('#web-video').attr('src', projects[counter].videoPath);
  $('#alternative-video').attr('src', projects[counter].alternativePath);
  player.pause();
  player.load();
  player.play();  

  $("#next-project").click(function () {
    counter++;
    if(counter > 7){
      counter=0;
    }
    $('#projectName').text(projects[counter].projectName);
    $('#techStack').text(projects[counter].techStack);
    player.load();
    player.play();
    $('#web-video').attr('src', projects[counter].videoPath);
    $('#alternative-video').attr('src', projects[counter].alternativePath);
  });
  /* -----------------------------  contact modal ----------------------------- */  
  $("#message").click(function (){
    $(".contact-modal").show('slide', {direction:'down'}, 500);
  });
  $("#close-modal").click(function (){
    $(".contact-modal").hide('slide', {direction:'down'}, 500);
  });
  //get current year for copyright
  let year = new Date().getFullYear();
  $('.currentYear').text(year);
});