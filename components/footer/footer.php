<?php
$path = $_SERVER['SERVER_NAME'];
if ($path == "localhost"){
    
    $path = "/etalon";
}else{
    $path = "";
}
?>
<div class="footer">
            <div class="line"></div>
            <div class="content">
                <div class="footer-title">
                    &copy; ETALON
                </div>
                <div class="footer-adress">
                    УКРАЇНА, ЧЕРКАСЬКА ОБЛАСТЬ, УМАНЬ, 20300, ВУЛ. СТАРИЦЬКОГО, 5

                </div>
                <div class="footer-contact">
                        <a href=<?php echo $path."/pages/contact/contact.php"?>>Контакти</a>
                </div>
            </div>
        </div>




        <!--Importing bootstrap -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
        <!--The end of site -->
        </div>
    </body>
</html>