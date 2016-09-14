/**
 * Hockey is the game. Make it happen.
 *
 * If you want to turn it into some other sport, have at it.
 *
 * Anyway, I have given you a basic HTML structure for a 
 * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
 * should make the page do what it needs to do, using your knowledge
 * of JS, HTML, CSS, and... sports.
 *
 * Here's what this 'game' should do:
 * 
 * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
 *   - shots have a random chance of succeeding or failing
 *   - number of shots taken should increase every click on the "SHOOT" button
 *   - number of hits obviously only increases when the shot is successful
 * 
 * 2. Clicking the "RESET" button resets all the shot and score counters and
 * adds 1 to the number of resets
 *
 * 3. Any time a team shoots and scores change the background color of
 *    page to that teams color
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */

 $(function(){

 	var resCount = $("#num-resets").text();

 	var tmOneShotNum = $("#teamone-numshots").text();
 	var tmTwoShotNum = $("#teamtwo-numshots").text();

 	var tmOneGoal = $("#teamone-numhits").text();
 	var tmTwoGoal = $("#teamtwo-numhits").text();

 	$(".right").data("two", { first: 0, last: 0 } );
 	$(".left").data("one", { first: 0, last: 0 } );

//Tests value to console
 	console.log(resCount);

//Reset 
 	$("#reset").click(function(){
 		resCount++
 		$("#num-resets").text(resCount);
 		$( "#teamtwo-numshots:first" ).text( $( ".right" ).data( "two" ).first );
		$( "#teamtwo-numhits:last" ).text( $( ".right" ).data( "two" ).last );
		$( "#teamone-numshots:first" ).text( $( ".left" ).data( "one" ).first );
		$( "#teamone-numhits:last" ).text( $( ".left" ).data( "one" ).last );
 	});

//Team one shot attempts 		
 	$( "#teamone-shoot" ).click(function(){
 	
 		var teamOneAttempt = Math.floor(Math.random()*6);
 			
		if (teamOneAttempt % 2 == 0){
 			tmOneGoal++
 			tmOneShotNum++
 			$("#teamone-numhits").text(tmOneGoal);
			$( "body" ).css( "background-color", "red" );
 		}else{
			tmOneShotNum++
			$("body").css("background-color", "white");
 		}
 		$("#teamone-numshots").text(tmOneShotNum);
 	});

	$( "#teamtwo-shoot" ).click(function(){
		var teamTwoAttempt = Math.floor(Math.random()*6);

		if (teamTwoAttempt % 2 == 0){
			tmTwoGoal++
			tmTwoShotNum++
			$("#teamtwo-numhits").text(tmTwoGoal);
	  		$( "body" ).css( "background-color", "blue" );
  		}else{
  			tmTwoShotNum++
			$("body").css("background-color", "white");
  		}
  		$("#teamtwo-numshots").text(tmTwoShotNum);
	});
 })