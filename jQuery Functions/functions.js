$(document).ready(function(){

//=================   Danger Button    =================
	$('#notouchy').click(function(){
		alert('I said DO NOT CLICK THE BUTTON')
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
		$('#togglediv h2').toggle(1000, function(){
			$('#again').toggle(1000);
		});
	});	

//=================   Slideup     ========================
	$('#slideupdiv button:nth-of-type(1)').click(function(){
		$('#slideupdiv h2:nth-of-type(1)').slideUp();
	});

//=================   Slidedown     ======================
	
	$('#slidedowndiv button').click(function(){
		$('#slideupdiv h2:nth-of-type(1)').slideDown();
	});
//=================   SlideToggle     ======================

	$('#slidetogglediv button:nth-of-type(1)').click(function(){
		$('#slidetogglediv h2:nth-of-type(1)').slideToggle();
	});
//=================   FadeOut     ==========================

	$('#fadeoutdiv button:nth-of-type(1)').click(function(){
		$('#fadeoutdiv h2:nth-of-type(1)').fadeOut();
	});

//=================   FadeIn     ==========================

	$('#fadeindiv button:nth-of-type(1)').click(function(){
		$('#fadeoutdiv h2:nth-of-type(1)').fadeIn();
	});

});

