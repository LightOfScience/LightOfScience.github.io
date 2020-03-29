<?php
    include_once 'db_conn.php';

    $name = $_GET['name'];
    $email = $_GET['email'];
    $sql = "INSERT INTO `newsletter_subscriber_list` (`Name`, `Email`) VALUES ('$name','$email');";
    mysqli_query($conn, $sql);

    header("Location: ?NewsletterSubmit=SUCCESSFUL");
?>