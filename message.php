<?php
    //get all form values
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $website = $_POST['website'];
    $message = $_POST['message'];

    if(!empty($email) && !empty($message)){//if email and message fiels are not empty
        if(filter_var($email, FILTER_VALIDATE_EMAIL)){
            $receiver ="titouhiomar1@gmail.com";
            $subject = "Form: $name <$email>"; //subject of the email
            $body = "Name: $name\nEmail: $email\nPhone: $phone\nWebsite: $website\nMessage: $message\n\nRegards, \n$name";
            $sender = "From: $email";//sender email
            if(mail($receiver,$subject,$body,$sender)){
                echo "your message has been send";
            }else{
                echo "Sorry, Failed to send yoour message";
            }
        }else{
            echo "Enter a valid email address";
        }
    }else{
        echo "Email and Message field are required!";
    }
?>