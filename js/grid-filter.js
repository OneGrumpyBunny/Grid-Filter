 $(document).ready(function() {

            var phas = ["plan", "understand", "strategize", "create", "launch", "maintain"];

            $(".phaseSelector").click(function() { // listens for click
                var thisPhase = $(this).attr('id');
                if (thisPhase == "reset") {

                    // reset links
                    for (i = 0; i <= phas.length; i++) {
                        $(".phaseSelector").removeClass(phas[i]+"active");
                    }

                    // fadein all tiles
                    $(".grid-item").fadeIn("slow");
                } else {

                    // make current link active
                    $("#" + thisPhase).addClass(thisPhase+"active");

                    for (i = 0; i <= phas.length; i++) {

                        // fade in tiles that are active
                        if ($("#" + phas[i]).hasClass(phas[i]+"active")) {
                            $("." + phas[i]).fadeIn("slow");
                        } else {

                            // fadeout tiles that not active
                            $("." + phas[i]).fadeOut("slow");
                        } // if
                    } // for
                } // else

            }); // click()

        });