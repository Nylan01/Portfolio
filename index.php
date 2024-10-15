<?php
require 'vendor/autoload.php';
?>

<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta name="author" content="Nylan Paillassa" />
        <meta name="keywords" content="Portfolio" />
        <meta charset="utf-8" />
        <title>Nylan Portfolio</title>
        <link rel="stylesheet" type="text/css" href="mainpage.css" />
    </head>
    <body>
        <div class='container'>
            <section>
                <h1 class='one'>
                    Page d'entrée avec l'hologramme
                </h1>
            </section>
            <section>
                <h1 class='two'>
                    Page de présentation sur moi et mon travail
                </h1>
            </section>
            <section>
                <h1 class='three'>
                    Projets implémentés jeux etc...
                </h1>
            </section>
        </div>
        <div id='preloader'>
            <p id='loadingmsg'>In the digital realm, the outsider sees what others miss. 
                <br> Free from convention, they shape the future, coding from the shadows. 
                <br>Embrace the unknown, and let your work disrupt the ordinary.
            </p>
        </div>

        <!-- <div class=centered>
            <p id='loadingmsg'>Ok</p>
            <button type="button" onclick="location.href = 'test.php';">OK</button>
        </div>
    <script>
        var loader = document.getElementById("preloader");
        window.addEventListener("load", function(){
            loader.style.display = "none";
        }); -->
    </script>
    <script type="text/javascript" src="mainpage.js"></script>
    </body>
</html>
