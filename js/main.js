


var numberScroller = function(){
	var $window, 
		$numberContainer,
		stringToLoad = '',
		isADera = true,
		scrollInterval = null,
		incStep = 1;

	$(document).ready(function(){
		$window = $(window);
		$numberContainer = $("#numberContainer");

		

		$window.resize(function(){
			var wH = $window.height();

			$numberContainer.width($window.width()).height(wH).fitText().css('padding-top', ((wH - parseFloat($numberContainer.css('font-size').replace(/\D/, ''))) / 2) + 'px');
		}).keyup(function(e){
			var key = e.which || e.keyCode;

			//console.log(e.which +';'+ e.keyCode);
 
			//48- 57
			//13
			//189
			//65 = a
			//66 = b
			
		
			switch (key){
				case 65: // a
					isADera = true;
				break;
				case 66:
					isADera = false;
				break;
				case 48:
					stringToLoad += '0';
				break;
				case 49:
					stringToLoad += '1';
				break;
				case 50:
					stringToLoad += '2';
				break;
				case 51:
					stringToLoad += '3';
				break;
				case 52:
					stringToLoad += '4';
				break;
				case 53:
					stringToLoad += '5';
				break;
				case 54:
					stringToLoad += '6';
				break;
				case 55:
					stringToLoad += '7';
				break;
				case 56:
					stringToLoad += '8';
				break;
				case 57:
					stringToLoad += '9';
				break;
				case 13:
					stringToLoad = parseInt(stringToLoad);


					incStep = parseInt(Math.abs($numberContainer.text() - stringToLoad) / 10);

					console.log('incStep ' + incStep);

					scrollInterval = setInterval(scrollToNum, 25);
					
				break;

				default:
					clearMe();
				break;


			}

			console.log(stringToLoad + ' isADera');

		});

		$window.resize();


	});

	function clearMe(){
		isADera = true;
		stringToLoad = '';

		clearInterval(scrollInterval);
		scrollInterval = null;
	};

	function scrollToNum(){
		var currentNumber = parseInt($numberContainer.text()),
			isOver = false;

		if (currentNumber > stringToLoad){
			currentNumber -= incStep;
			if (currentNumber <= stringToLoad) isOver = true;
		} else {
			currentNumber += incStep;
			if (currentNumber >= stringToLoad) isOver = true;
		}

		if (isOver == true) {
			currentNumber = stringToLoad;
			$numberContainer.text(currentNumber);
			clearMe();
		}  else {
			$numberContainer.text(currentNumber);
		}

		
	};



}();
