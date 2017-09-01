<h2>Grid Filter using jQuery</h2>
<p>I was working on a project which needed this functionality, so I worked through familiarizing myself with the jQuery methods needed to filter tiles on a grid.</p>
<a href="https://github.com/OneGrumpyBunny/Grid-Filter">jQuery Grid Filter</a>

<html>
<head>
<link rel="stylesheet" href="style.css">
<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet">

<title>JQuery Tile Filter</title>

<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>


<script>
    $(document).ready(function() {

        var phas = ["plan", "understand", "strategize", "create", "launch", "maintain"];

        $(".phaseSelector").click(function() { // listens for click
            var thisPhase = $(this).attr('id');
            if (thisPhase == "reset") {

                // reset links
                $(".phaseSelector").removeClass("active");

                // fadein all tiles
                $(".grid-item").fadeIn("slow");
            } else {

                // make current link active
                $("#" + thisPhase).addClass("active");

                for (i = 0; i <= phas.length; i++) {

                    // fade in tiles that are active
                    if ($("#" + phas[i]).hasClass("active")) {
                        $("." + phas[i]).fadeIn("slow");
                    } else {

                        // fadeout tiles that not active
                        $("." + phas[i]).fadeOut("slow");
                    } // if
                } // for
            } // else

        }); // click()

    });
</script>
<div class="container">

    <div class="content">

        <h2>Tiles</h2>
        <div class="filters">
            <a id="plan" class="phaseSelector">Plan</a>
            <a id="understand" class="phaseSelector">Understand</a>
            <a id="strategize" class="phaseSelector">Strategize</a>
            <a id="create" class="phaseSelector">Create</a>
            <a id="launch" class="phaseSelector">Launch</a>
            <a id="maintain" class="phaseSelector">Maintain</a>
            <a id="reset" class="phaseSelector">Reset Tiles</a>
        </div>

        <div class="grid">

            <a href="#">
                <div class="grid-item strategize">
                    <h3>Strategize Tool 1</h3>
                </div>
            </a>
            <a href="#">
                <div class="grid-item create">
                    <h3>Create Tool 1</h3>
                </div>
            </a>

            <a href="#">
                <div class="grid-item plan">
                    <h3>Plan Tool 1</h3>
                </div>
            </a>


            <a href="#">
                <div class="grid-item understand">
                    <h3>Understand Tool 1</h3>
                </div>
            </a>
            <a href="#">
                <div class="grid-item create">
                    <h3>Create Tool 2</h3>
                </div>
            </a>
            <a href="#">
                <div class="grid-item maintain">
                    <h3>Maintain Tool 1</h3>
                </div>
            </a>

            <a href="#">
                <div class="grid-item understand">
                    <h3>Understand Tool 2</h3>
                </div>
            </a>


            <a href="#">
                <div class="grid-item strategize">
                    <h3>Strategize Tool 2</h3>
                </div>
            </a>

            <a href="#">
                <div class="grid-item launch">
                    <h3>Launch Tool 2</h3>
                </div>
            </a>


            <a href="#">
                <div class="grid-item plan">
                    <h3>Plan Tool 2</h3>
                </div>
            </a>
            <a href="#">
                <div class="grid-item launch">
                    <h3>Launch Tool 1</h3>
                </div>
            </a>

            <a href="#">
                <div class="grid-item maintain">
                    <h3>Maintain Tool 2</h3>
                </div>
            </a>
        </div>
        <!-- grid -->

    </div>
    <!-- content -->

</div>
<!-- container -->
</body>
</html>
