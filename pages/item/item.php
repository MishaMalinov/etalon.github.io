<?php
include("../../components/header/header.php");
?>

<?php
$id = -1;
if(isset($_GET["id"])){
    $id = $_GET['id'];
}
$item = json_decode(file_get_contents('../../data/production.json'), false)[$id];
$img = '../../data/'.$item->img;
$title = $item->title;
$description = $item->description;
$images = scandir($img);
?>
<div class="item">
    <div class="container">
        <div class="col">
            <div class="row">
                <div class="col-md row-first">
                    <img src=<?php echo $img.'/0.jpeg';?> alt="">
                    <div class="images">
                        <?php
                            foreach($images as $image){
                                if(str_contains($image,'.jpeg') and substr_compare($image,'0',0,1)){
                                    echo "<img src='$img/$image' />";
                                }
                                
                            }
                        ?>
                    </div>
                </div>
                <div class="col-md row-second">
                    <h1 class='title'><?php echo $title;?></h1>
                </div>
            </div>
            <div class="description">
                <?php
                    echo $description;
                ?>
            </div>
        </div>
    </div>
<!-- <script>
    var fs = ;
    var files = fs.readdirSync('/assets/photos/');


</script> -->
</div>
<?php
include("../../components/footer/footer.php");
?>