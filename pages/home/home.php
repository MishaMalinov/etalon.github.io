<?php
include("../../components/header/header.php");
$products = json_decode(file_get_contents('../../data/production.json'), false);
?>

<div class="home">
    <div class="center">
        <h1 class="title">
            Головна
        </h1>
        <div class="line"></div>
        <div class="content">
            <div class="production">
                <div class="title">
                    Наша продукція
                </div>
                <div class="list">
                    <?php
                    foreach ($products as $product) {
                        $img = "../../data/" . $product->img . "/0.jpeg";
                        $title = $product->shortTitle;
                        $id = $product->id;
                        echo "
                                    <a  href='../item/item.php?id=$id' >
                                        <div class='block'>
                                            
                                            <img class='image' src='$img' alt='$title' />
                                            
                                            <div class='title'>$title</div>
                                        </div>
                                    </a>
                                    ";
                    }
                    ?>
                </div>
            </div>
            <div class="services">
                <div class="title">Послуги</div>
                <div class="list">
                    <div class="list-el">
                        <img src="../../data/slusWork.png" alt="">
                        <div class="label">Слюсарні роботи</div>
                    </div>
                    <div class="list-el">
                        <img src="../../data/gnutMetalu.png" alt="">
                        <div class="label">Гнуття металу</div>
                    </div>
                    <div class="list-el">
                        <img src="../../data/zvarWork.png" alt="">
                        <div class="label">Зварювальні роботи</div>
                    </div>
                    <div class="list-el">
                        <img src="../../data/tokarWork.png" alt="">
                        <div class="label">Токарні роботи</div>
                    </div>
                    <div class="list-el">
                        <img src="../../data/frezWork.png" alt="">
                        <div class="label">Фрезерні роботи</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<?php
include("../../components/footer/footer.php");
?>