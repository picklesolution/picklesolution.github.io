// A $( document ).ready() block.
$( document ).ready(function() {
	$( "#redbutton").click(function() {
    	console.log( "clicked!" );
    		$("#clickthison").removeClass(".blue");
    		$("#clickthison").addClass(".red");
	});
	$( "#bluebutton").click(function() {
   	 	console.log( "clicked!" );
    		$("#clickthison").removeClass(".red");
    		$("#clickthison").addClass(".blue");
	});
});