<?php
//error_reporting(E_ALL);
//ini_set('display_errors','On');

$db_hostname = 'localhost';
$db_username = 'root';
$db_password = '';
$db_name = 'scandiweb';

$conn = mysqli_connect($db_hostname, $db_username, $db_password, $db_name);

if(!$conn)
{
    echo "Unable to connect database".mysqli_error($conn);die;
}
else
{
  $ifNotEx = "CREATE TABLE IF NOT EXISTS `scandiweb`.`timelog` (
    `id` INT NOT NULL AUTO_INCREMENT ,
    `description` VARCHAR(50) NOT NULL ,
    `timespent` VARCHAR(10) NOT NULL ,
    `record_date` TIMESTAMP NOT NULL ,
    PRIMARY KEY (`id`)
  ) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1";
  
  mysqli_query($conn, $ifNotEx);
}
