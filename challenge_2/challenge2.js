$(function(){

//all your code should go here

// (1) Make Feed Template toggle color on click
	var colorSet = true;

	$( "h1" ).on( "click", function() {
		if(colorSet)
			$(this).css('color', 'red');
  	else{
  		$(this).css('color', 'black');
  		}
  		colorSet = !colorSet;
  	});

// (2) Hide every odd list element
  	$("h5:odd").hide();

// (3) Change every word Bacon to LASER
//	$("p").text($("aside p").text().replace("Bacon", "Laser Vison"));

$("p").text(function(i, text) {
    return text.replace("Bacon", "LASER");
});

// (4)
	$(".row.post:gt(3)").remove();

// (5) Removed the two images from right side of page
  	$("p img").remove();

})

