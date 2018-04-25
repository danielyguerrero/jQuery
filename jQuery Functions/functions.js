$(document).ready(function(){

//=================   Danger Button    =================
	$('#notouchy').click(function(){
		alert('I said "No clicky!')
	});
//=================   Hide     ==========================

	$('#hidediv').click(function(){
		$(this).hide(1000, function(){
			$('#where').show();
		});
	});

//=================   Show     ==========================

	$('#showdiv button:nth-of-type(1)').click(function(){
		$('#hidediv').show(1000, function(){
			$('#where').hide();
		});
	});
//=================   Toggle     =========================
	$('#togglediv button:nth-of-type(1)').click(function(){
		$('#togglediv h2').toggle(function(){
			$('#again').toggle();
		});
	});	

//=================   Slideup     ========================
	$('#slideupdiv button:nth-of-type(1)').click(function(){
		$('#slideupdiv h2:nth-of-type(1)').slideUp(function(){
			$('#help').toggle();
		});
	});

//=================   Slidedown     ======================
	
	$('#slidedowndiv button').click(function(){
		$('#slideupdiv h2:nth-of-type(1)').slideDown(function(){
			$('#help').toggle();
		});
	});
//=================   SlideToggle     ======================

	$('#slidetogglediv button:nth-of-type(1)').click(function(){
		$('#slidetogglediv h2:nth-of-type(1)').slideToggle(function(){
			$('#twice').toggle();
		});
	});
//=================   FadeOut     ==========================

	$('#fadeoutdiv button:nth-of-type(1)').click(function(){
		$('#fadeoutdiv h2:nth-of-type(1)').fadeOut(function(){
			$('#next').toggle();
		});
	});

//=================   FadeIn     ==========================

	$('#fadeindiv button:nth-of-type(1)').click(function(){
		$('#fadeoutdiv h2:nth-of-type(1)').fadeIn(function(){
			$('#next').toggle();
		});
	});

});

