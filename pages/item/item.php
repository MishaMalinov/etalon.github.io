<?php
include("../../components/header/header.php");
?>

<?php
$id = -1;
if(isset($_GET["id"])){
    $id = $_GET['id'];
}
$item = json_decode(file_get_contents('../../data/production.json'), false)[$id];
print_r($item);
?>
<div class="item">
    <div class="container">
        <div class="col">
            <div class="row">
                <div class="col-md">
                    one of three
                </div>
                <div class="col-md">
                    two of three columns
                </div>
            </div>
            <div class="description">
                three of three columns
            </div>
        </div>
    </div>

</div>
<?php
include("../../components/footer/footer.php");
?>