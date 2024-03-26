<?php
include("../../components/header/header.php");
?>
<div class="production">
    <div class="body">

        <h1 class="title">Продукція</h1>
        <div class="line"></div>
        <div class="content">
            <?php
            $products = json_decode(file_get_contents('../../data/production.json'), false);
            foreach ($products as $product) {
                $img = "../../data/".$product->img . "/0.jpeg";
                $title = $product->shortTitle;
                $id = $product->id;
                echo "
                        <div class='product'>
                            <div class='img'>
                                <a  href='../item/item.php?id=$id' >
                                    <img src='$img' alt='$title' />
                                </a>
                            </div>
                            <div class='title'>$title</div>
                            <a class='btn-link ' href='../item/item.php?id=$id'>
                                <button type='submit' class='btn btn-success'>Детальніше</button>
                            </a>
            
                
                        </div>
                        ";
            }
            ?>
        </div>
    </div>

</div>
<?php
include("../../components/footer/footer.php");
?>