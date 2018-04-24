$(document).ready(function(){

//=================   Danger Button    =================
	$('#notouchy').click(function(){
		alert('I said DO NOT CLICK THE BUTTON')
	});
//=================   Hide     ==========================

	$('#hidediv button:nth-of-type(1)').click(function(){
		$('h1').hide();
	});

//=================   Show     ==========================

	$('#showdiv button:nth-of-type(1)').click(function(){
		$('h1').show();
	});
//=================   Toggle     =========================
	$('#togglediv button:nth-of-type(1)').click(function(){
		$('#togglediv h2:nth-of-type(1)').toggle();
	});

//=================   Slideup     ========================
	$('#slideupdiv button:nth-of-type(1)').click(function(){
		$('#slideupdiv h2:nth-of-type(1)').slideUp();
	});

//=================   Slidedown     ======================
	
	$('#slidedowndiv button:nth-of-type(1)').click(function(){
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

