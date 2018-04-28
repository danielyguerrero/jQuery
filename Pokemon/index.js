$(document).ready(function(){
		//all my jquery code goes here
		//inside the anonymous function
        for (var i=300;i>=0;i--){
        	console.log(i);
        	$( "#title" ).after( "<img src='http://pokeapi.co/media/img/"+i+".png' alt=''>" );
        }
})

