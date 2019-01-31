var description = new Array();
description[0] = ["DishFinder", "HTML, CSS, JavaScript, jQuery, Bootstrap, Node.js, Express.js, Handlebars, MongoDB"];
description[1] = ["Lumi Asian Fusion", "HTML, CSS, JavaScript, jQuery, Bootstrap"];
description[2] = ["Boxing Gym", "HTML, CSS, JavaScript, jQuery, Bootstrap"];
description[3] = ["Payoment", "HTML, CSS, JavaScript, jQuery, Bootstrap"];
description[4] = ["Surtom Construction", "HTML, CSS, JavaScript, jQuery, Bootstrap"];
description[5] = ["Smart Capital", "HTML, CSS, JavaScript, Wordpress"];
description[6] = ["CUNYPlus", "HTML, CSS, JavaScript, jQuery, Bootstrap, Node.js, Express.js, Handlebars, MongoDB"];

var imgPath = new Array();
imgPath[0] = ["img/portfolio/dish-finder.mp4"];
imgPath[1] = ["img/portfolio/lumi.mp4"];
imgPath[2] = ["img/portfolio/gym.mp4"];
imgPath[3] = ["img/portfolio/payoment.mp4"];
imgPath[4] = ["img/portfolio/surtom.mp4"];
imgPath[5] = ["img/portfolio/smart-capital.mp4"]
imgPath[6] = ["img/portfolio/cunyplus.mp4"]

jQuery(function($) {'use strict';
    //Initiat WOW JS
    new WOW().init();
}); 

$(document).ready(function() {
//------------------- home ------------------------------
	$(function(){
		$("#head-title").typed({
		    strings: ["Hi! I'm Min.", "I'm a Front End Developer based in New York City."],
		    typeSpeed: 100,
		    loop: true,
		    startDelay: 100
		});
	});

/* -----------------------------   about ----------------------------- */	
    $("#about-author").show();
	$("#front-end-developer").hide();
	$("#about-min").hide();

	$("#developer-btn").click(function(){
	    $("#about-author").hide();
	    $("#front-end-developer").show('slide', {direction:'left'}, 800);
    });

	$("#min-btn").click(function(){
	    $("#about-author").hide();
	    $("#about-min").show('slide', {direction:'left'}, 800);
    });

    $("#back").click(function(){
    	$("#front-end-developer").hide();
        $("#about-author").show('slide', {direction:'right'}, 800);
    });

    $("#previous").click(function(){
    	$("#about-min").hide();
        $("#about-author").show('slide', {direction:'left'}, 800);
    });

// ------------------- about me section ----------------------
	var illustration= document.querySelector("#developer-img img");
	var mq = window.matchMedia("(max-width: 991px)");
	if(mq.matches) {
	    illustration.setAttribute("src", "img/about/web-developer-mobile.png");
	} else {
	    illustration.setAttribute("src", "img/about/web-developer.png");
	}

	mq.addListener(function(changed) {
	    if(changed.matches) {
	    	illustration.setAttribute("src", "img/about/web-developer-mobile.png");
	    } else {
	        illustration.setAttribute("src", "img/about/web-developer.png");  
	    }
	});

/* -----------------------------  Portfolio Projects ----------------------------- */	
	var player = document.getElementById('video-player');	
	var projectImg = document.getElementById('demo-video');
	var project = document.getElementById('project');
	var tech = document.getElementById('tech-stack');
	var counter = 0;

	player.pause();

	project.innerHTML= description[counter][0];
	tech.innerHTML = description[counter][1];
	projectImg.src = imgPath[0];

	player.load();
    player.play();

	$("#next-project").click(function () {
		counter++;
		if(counter > 6){
			counter=0;
		}
		project.innerHTML= description[counter][0];
		tech.innerHTML = description[counter][1];
		player.pause();		
		projectImg.src = imgPath[counter];
		player.load();
    	player.play();
	});
	// $("#previous-project").click(function () {
	// 	counter--;
	// 	if(counter < 0){
	// 		counter=6;
	// 	}
		// project.innerHTML= description[counter][0];
		// tech.innerHTML = description[counter][1];
		// player.pause();	
		// projectImg.src = imgPath[counter];
		// player.load();
  //   	player.play();
	// });
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
