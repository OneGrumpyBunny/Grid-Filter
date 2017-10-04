var phas = ["plan","understand","strategize","create","launch","maintain"];
$(document).ready(function() {    
$(".phaseSelector").click(function() {  
    var thisPhase = $(this).attr('id');
		var activePhase = "";
		// Show all button
		if (thisPhase == "reset"){
			// reset links
			$(".phaseSelector").removeClass("active");
			// show all tools
				$(".grid-item").hide( "scale", 500 );
				//$(".grid-item").fadeOut("slow");
				 for (i = 0; i <= 10; i++) {
					 $("."+phas[i]).delay(504).show( "scale", 500 );
					 //$("."+phas[i]).fadeIn("slow");
				 }
    	} else {
			//show only active phase 
		  for (i = 0; i <= 6; i++) {
				//remove previous active phase
				activePhase=$("#"+phas[i]).attr('id');
					if (activePhase != thisPhase) {
						$("."+phas[i]).hide( "scale", 500 );
						//$("."+phas[i]).fadeOut("slow");
						$("#"+phas[i]).removeClass("active");
					} else {
							// make current link active
							$("#"+thisPhase).addClass("active");   
							$("."+phas[i]).hide( "scale", 500 );
							//$("."+phas[i]).fadeOut("slow");
							
							$("."+thisPhase).delay(510).show( "scale", 500 );
							//$("."+thisPhase).delay(500).fadeIn("slow");
					}// if
        } // for
    } // else
});// click()

});
