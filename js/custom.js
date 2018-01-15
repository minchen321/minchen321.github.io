/* -----------------------------  Portfolio Projects ----------------------------- */	
var description = new Array();
description[0] = ["DishFinder", "Dish Finder is a JavaScript web application. It allows the users to write/see reviews for a specific item on a restaurant menu.", "HTML, CSS, JavaScript, jQuery, Bootstrap, Node.js, Handlebars.js(template engine), MongoDB"];
description[1] = ["Payoment", "A company website for Payoment Merchant Serivices", "HTML, CSS, JavaScript, Bootstrap"];
description[2] = ["Surtom", "A company website for Surtom Construction Contracting Corp.", "HTML, CSS, JavaScript, jQuery, Bootstrap"];
description[3] = ["CUNYPlus", "A communication platform to connect CUNY students by their areas of study.", "HTML, CSS, JavaScript, jQuery, Bootstrap"];
description[4] = ["Smart Capital", "A company website for Smart Capital Corporation.", "HTML, CSS, JavaScript, Wordpress"];
description[5] = ["Movie Quiz", "A Node.js movie quiz game with responsive front-end design.", "HTML, CSS, JavaScript, jQuery, Bootstrap"];
description[6] = ["RecipeBook", "A JavaScript web application allows users to manage their online recipes.", "HTML, CSS, JavaScript, Node.js, Dust (template engine), Postgres"];

var imgPath = new Array();
imgPath[0] = ["img/web-projects/dish-finder.gif"];
imgPath[1] = ["img/web-projects/payoment.gif"];
imgPath[2] = ["img/web-projects/surtom.gif"];
imgPath[3] = ["img/web-projects/cunyplus.gif"];
imgPath[4] = ["img/web-projects/smart-capital.gif"];
imgPath[5] = ["img/web-projects/movie-quiz.gif"]
imgPath[6] = ["img/web-projects/recipebook.gif"]

$(document).ready(function() {
//------------------- home ------------------------------
	$(function(){
		$("#head-title").typed({
		    strings: ["Hi! I'm Min.", "I'm a creative web designer based in New York City."],
		    typeSpeed: 100,
		    loop: true,
		    startDelay: 100
		});
	});
/* -----------------------------   about ----------------------------- */	
	// $("#roles").show();
	// $("#developer-slide").hide();
	// $("#me-slide").hide();	

 //    $("#developer-button").click(function(){
 //        $("#roles").hide();
 //        $("#developer-slide").show();
 //    });

 //    $("#me-button").click(function () {
 //      $("#roles").hide();
 //      $("#me-slide").show();
	// });
 //    $("#prev").click(function(){
 //    	$("#me-slide").hide();
 //        $("#roles").show();
 //    });	
 //    $("#back").click(function(){
 //    	$("#developer-slide").hide();
 //        $("#roles").show();
 //    });




    $("#about-author").show();
	$("#front-end-developer").hide();
	$("#me-slide").hide();

	$("#developer-btn").click(function(){
	    $("#about-author").hide();
	    $("#front-end-developer").show();
    });

    $("#back").click(function(){
    	$("#front-end-developer").hide();
        $("#about-author").show();
    });


// ------------------- about me section ----------------------
	var currentHeight = $(window).height()*4/10;
	var currentWidth = $(window).width()*33/100;
	console.log(currentHeight);

	var illustration= document.getElementById("illustration");
	var mq = window.matchMedia("(max-width: 991px)");
	if(mq.matches) {
	    illustration.setAttribute("src", "img/about/web-developer-mobile.png");
	    illustration.setAttribute("height", currentHeight);
	    illustration.setAttribute("width", "auto");
	} else {
	    illustration.setAttribute("src", "img/about/web-developer.png");
	   	illustration.setAttribute("height", "auto");
	   	illustration.setAttribute("width", currentWidth);
	}

	mq.addListener(function(changed) {
	    if(changed.matches) {
	    	illustration.setAttribute("src", "img/about/web-developer-mobile.png");
	    	illustration.setAttribute("height", currentHeight);
	    	illustration.setAttribute("width", "auto");
	    } else {
	        illustration.setAttribute("src", "img/about/web-developer.png");
	        illustration.setAttribute("height", "auto");
	     	illustration.setAttribute("width", currentWidth);   
	    }
	});

// ------------------- front end developer section ----------------------


/* -----------------------------  Portfolio Projects ----------------------------- */		
	// var projectDemo = document.getElementById('project-demo');
	// var projectName = document.getElementById('projectName');
	// var projectImg = document.getElementById('project-img');
	// var project = document.getElementById('project');
	// var intro = document.getElementById('intro');
	// var tech = document.getElementById('tech-stack');
	// var counter = 0;

	// project.innerHTML= description[counter][0];
	// projectName.innerHTML= description[counter][0];
	// intro.innerHTML = description[counter][1];
	// tech.innerHTML = description[counter][2];
	// projectImg.setAttribute('src', imgPath[0]);
	// projectDemo.setAttribute('src', imgPath[0]);

	// $(".next-project").click(function () {
	// 	counter++;
	// 	if(counter > 6){
	// 		counter=0;
	// 	}
	// 	project.innerHTML= description[counter][0];
	// 	projectName.innerHTML= description[counter][0];
	// 	intro.innerHTML = description[counter][1];
	// 	tech.innerHTML = description[counter][2];
	// 	projectImg.setAttribute('src', imgPath[counter]);
	// 	projectDemo.setAttribute('src', imgPath[counter]);
	// });

	// 	$("#previous-project").click(function () {
	// 	    counter--;
	// 	if(counter < 0){
	// 		counter=6;
	// 	}
	// 	project.innerHTML= description[counter][0];
	// 	projectName.innerHTML= description[counter][0];
	// 	intro.innerHTML = description[counter][1];
	// 	tech.innerHTML = description[counter][2];
	// 	projectImg.setAttribute('src', imgPath[counter]);
	// 	projectDemo.setAttribute('src', imgPath[counter]);
	// });
});
