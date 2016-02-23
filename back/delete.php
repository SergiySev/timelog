<?php
include 'config.php';
$id = '';
if(isset($_POST['id']) && !empty($_POST['id']))
{
    $id = $_POST['id'];
}

$sql = "DELETE FROM timelog WHERE id = '$id'";
$query = mysqli_query($conn, $sql);

if($query)
{
    echo json_encode(array( 'msg' => "{$id} - successful deleted"));
} else {
    echo json_encode(array( 'msg' => "{$id} - error"));
}
