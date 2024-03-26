<?php
$path = $_SERVER['SERVER_NAME'];
if ($path == "localhost"){
    
    $path = "/etalon";
}else{
    $path = "";
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="icon" href=<?php echo $path."/data/logo.svg"?> type="image/x-icon">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href=<?php echo $path."/index.css"?>>
    <title>Etalon</title>
</head>

<body>
    <div class="root">

        <div class="header">
            <nav class="navbar navbar-expand-md navbar-dark bg-success">
                <div class="container-fluid">
                    <a class="navbar-brand" href=<?php echo $path."/"?>><img style="height:50px;width:50px" src=<?php echo $path."/data/logo_white.svg"?> alt=""></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link"  href=<?php echo $path."/"?>>Головна</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href=<?php echo $path."/pages/about/about.php"?>>Про нас</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href=<?php echo $path."/pages/production/production.php"?>>Продукція</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href=<?php echo $path."/pages/services/services.php"?>>Послуги</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href=<?php echo $path."/pages/contact/contact.php"?>>Контакти</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Інше</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        
        </div>