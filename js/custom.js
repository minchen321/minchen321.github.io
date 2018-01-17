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
		    strings: ["Hi! I'm Min.", "I'm a creative web developer based in New York City."],
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
	    $("#front-end-developer").show('slide', {direction:'left'}, 1000);
    });

	$("#min-btn").click(function(){
	    $("#about-author").hide();
	    $("#about-min").show('slide', {direction:'right'}, 1000);
    });

    $("#back").click(function(){
    	$("#front-end-developer").hide('slide', {direction:'left'}, 1000);
        $("#about-author").show();
    });

    $("#previous").click(function(){
    	$("#about-min").hide('slide', {direction:'right'}, 1000);
        $("#about-author").show();
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
	var player = document.getElementById('videoPlayer');	
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
	$("#previous-project").click(function () {
		counter--;
		if(counter < 0){
			counter=6;
		}
		project.innerHTML= description[counter][0];
		tech.innerHTML = description[counter][1];
		player.pause();	
		projectImg.src = imgPath[counter];
		player.load();
    	player.play();
	});


      // var mp4Vid = document.getElementById('demo-video');

      // player.pause();

      // mp4Vid.src = "img/portfolio/payoment.mp4";

      // player.load();
      // player.play();
});
