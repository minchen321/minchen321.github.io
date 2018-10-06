$(document).ready(function() {
	let tiles = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];
    let sec = 0;
    let numOfClicks = 0;
    let matchingPairs = 0

	//initial page status
    $("#home-section").show();
	$("#game-section").hide();
	$("#result-section").hide();

	//refresh when quit btn is clicked
	$('#quit', '#replay').click(function(){
		location.reload();
	});	
	$('#replay').click(function(){
		location.reload();
	});	

    $('#start-game').click(function(){
	    $("#game-section").show('slide', {direction:'right'}, 700);
    	//timer    	
	    function pad(val) { 
	    	return val > 9 ? val : '0' + val; 
	    }
	    setInterval( function(){
	        $('#seconds').html(pad(++sec%60));
	        $('#minutes').html(pad(parseInt(sec/60,10)));
	    }, 1000);
    });

	//shuffle cards when game begins		    
	shuffle(tiles);
	for(let i = 0; i < tiles.length; i++){
		console.log(tiles[i] + ' ');
	 	$('#tiles-section').append('<div class="tile"><div class="card-content"><img class="back-img" src="img/tiles/icon-' + tiles[i] + '.png" alt="card"></div></div>');
	}	

	//shuffle an array
	function shuffle(array) {
	    let j, x;
	    for (let i = array.length - 1; i > 0; i--) {
	        j = Math.floor(Math.random() * (i + 1));
	        x = array[i];
	        array[i] = array[j];
	        array[j] = x;
	    }
	    return array;
	}

	//shuffle cards when replay btn on click	
	// $('#replay').click(function(){
	// 	shuffle(tiles);
	// 	$('.card-content').empty();		
	// 	for(let i = 0; i < tiles.length; i++){
 //    		$('.card-content').append('<img class="back-img" src="img/tiles/icon-' + tiles[i] + '.png" alt="card">');
 //    	}
 //    	$("#result-section").hide('slide', {direction:'right'}, 700);
	// });

	let currentSelections = [];
	$('.card-content').click(function(){
		let currentIndex = $('.card-content').index(this);
		// let selectedIndex = [];
		// selectedIndex.push(currentIndex);
		numOfClicks++;
		$(this).addClass('selectedOptions');
		$('.selectedOptions').css('z-index', '5');
		currentSelections.push(tiles[currentIndex]);
		if(currentSelections.length === 2){
			if(currentSelections[0] === currentSelections[1]){
				$('.selectedOptions').css('border', '5px solid #87D1A9');
				$('.selectedOptions').fadeOut(1300);
				$('.card-content').removeClass('selectedOptions');	
				matchingPairs++;
			}
			else{
				$('.selectedOptions').css('border', '5px solid #FF8484');
				setTimeout(matchingFailure, 400);
			}
			if(matchingPairs === 8) {
				setTimeout(successMsg, 1300);
				//final time
				let finalTime;
				if($('#minutes').text() != '00'){
					finalTime = $('#minutes').text() + ' m ' + $('#seconds').text() + ' s ';
				}
				else{
					finalTime = $('#seconds').text() + ' s ';
				}
				$('#final-time').text(finalTime);
			}
			currentSelections = [];
		}
		$('#numOfGuesses').text(Math.floor(numOfClicks/2));

	});

	function matchingFailure(){
		$('.selectedOptions').css('z-index', 'auto');
		$('.selectedOptions').css('border', '5px solid transparent');
		$('.card-content').removeClass('selectedOptions');	
	}

	function successMsg(){
		matchingPairs = 0;
		$("#result-section").show('slide', {direction:'right'}, 700);
	}

});