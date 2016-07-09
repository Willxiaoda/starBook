<?php
error_reporting(0); 
include_once('Database.php');
$Database=new Database();
$data=$_POST;
echo $Database->register($data);
 ?>