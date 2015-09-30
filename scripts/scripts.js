// A $( document ).ready() block.
$( document ).ready(function() {
	$( "#clickthison").click(function() {
    console.log( "clicked!" );
    	$("#clickthison").removeClass(".blue");
    	$("#clickthison").addClass(".red");
	});
});