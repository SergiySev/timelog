<?php
include 'config.php';

$valid = true;
$description = $timespent = "";
$error = array();

function validate($cell, $err_name, &$holder, &$error, &$valid, &$conn) {
  if(isset($_POST[$cell]) && !empty($_POST[$cell]))
  {
      $holder = mysqli_real_escape_string($conn, $_POST[$cell]);
  }
  else
  {
      $valid = false;
      $error[$cell] = "{$err_name} is required";
      $holder = '';
  }
}

validate('description', 'Description', $description, $error, $valid, $conn);
validate('timespent', 'Time Spent', $timespent, $error, $valid, $conn);

if($valid)
{
      $sql = "INSERT INTO timelog (id, description, timespent) VALUES (NULL, '$description', '$timespent')";
      $query = mysqli_query($conn, $sql);

      if($query)
      {
          $retrive_sql = "SELECT * FROM timelog WHERE id = (SELECT MAX(id) FROM timelog)";
          $retrive_query = mysqli_query($conn, $retrive_sql);

          if($retrive_query)
          {
              $data = mysqli_fetch_assoc($retrive_query);
              echo json_encode($data);
          }
      }
      else
      {
          $data = array("valid"=>false, "msg"=>"Data not inserted.");
          echo json_encode($data);
      }
}
else
{
    $resp = [];
    $resp = array("valid"=>false, "msg"=>$error);
        echo json_encode($resp);
}
