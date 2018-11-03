<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

mail($email,$name,$message);