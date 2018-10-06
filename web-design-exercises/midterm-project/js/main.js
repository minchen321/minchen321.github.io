$(document).ready(function() {
	let tiles = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];
    let sec = 0;
    let numOfGuesses = 0;
    let matchingPairs = 0
	let currentSelections = [];
	let selectedIndex = [];

	//initial page visibility
    $("#home-section").show();
	$("#game-section").hide();
	$("#result-section").hide();

	//refresh page
	$('#quit').click(function(){
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

	//shuffle tiles
	function shuffle(tileArr) {
	    let j, x;
	    for (let i = tileArr.length - 1; i > 0; i--) {
	        j = Math.floor(Math.random() * (i + 1));
	        x = tileArr[i];
	        tileArr[i] = tileArr[j];
	        tileArr[j] = x;
	    }
	    return tileArr;
	}

	$('.card-content').click(function(){
		let currentIndex = $('.card-content').index(this);		
		selectedIndex.push(currentIndex);
		$(this).addClass('selectedOptions');
		$('.selectedOptions').css('z-index', '5');
		currentSelections.push(tiles[currentIndex]);
		if(currentSelections.length === 2){
			if(currentSelections[0] === currentSelections[1] && selectedIndex[0] != selectedIndex[1]){
				$('.selectedOptions').css('border', '5px solid #87D1A9');
				$('.selectedOptions').fadeOut(1300);
				$('.card-content').removeClass('selectedOptions');	
				matchingPairs++;
				numOfGuesses++;
			}
			else{
				$('.selectedOptions').css('border', '5px solid #FF8484');
				setTimeout(matchingFailure, 400);
				if(selectedIndex[0] != selectedIndex[1]){
					numOfGuesses++;					
				}
			}
			if(matchingPairs === 8) {
				setTimeout(successMsg, 1200);
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
			selectedIndex = [];
		}
		$('#numOfGuesses').text(numOfGuesses);

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