<?php
$to = 'michal.ciombor@gmail.com';
$subject = 'e-mail z kontakt form';
$message = 'test wiadomości';
$headers = "From: The seder name <michal.ciombor@gmail.com>\r\n";
$headers .="Reply-To:xxx@gmail.com";
$headers .= "Content-type: text/htm\r\n";

mail($to, $subject, $message, $headers);
?>
