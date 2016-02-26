<?php
include 'config.php';

$totalPages = 0;
$currentPage = isset($_POST['page']) ? ((int) $_POST['page']) : 1;
$pagesCount = 0;
$offset = 0;

$today = date("d.m.Y");

$totalSql = 'SELECT COUNT(*) AS count FROM timelog';
$totalPages = mysqli_fetch_object(mysqli_query($conn, $totalSql))->count;
$pagesCount = ceil( $totalPages / $limit );

if( $currentPage > $pagesCount && $pagesCount != 0) {
  $currentPage = $pagesCount;
} else if ($currentPage <= 0) {
  $currentPage = 1;
}

$offset = ( $currentPage - 1 ) * $limit;

$sql = "SELECT `id`, `description`,`timespent`, `record_date`, DATE_FORMAT(record_date,'%d.%m.%Y') AS date FROM timelog ORDER BY record_date DESC LIMIT {$limit} OFFSET {$offset}";
$result = array( 'data' => array(), 'paginator' => array('total' => $pagesCount, 'current' => $currentPage, 'today' => $today));

$query = mysqli_query($conn, $sql);

while ($row = mysqli_fetch_assoc($query)) {
  $key = $row['date'];
  if($key == $today) {
    $key = 'Today';
  }

  if(!array_key_exists( $key , $result['data']) ) {
    $result['data'][$key] = array();
  }
  array_push($result['data'][$key], $row);
}

echo json_encode($result);
