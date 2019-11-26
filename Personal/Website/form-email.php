<?php

if ($_POST["submit"])
{
    $recipient = "mitchellzhangsite@gmail.com";
    $subject = "Form to email message";
    $sender = $_POST["sender"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $mailBody = "Name: $sender\nEmail:$email\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $sender <$email>");

}

?>