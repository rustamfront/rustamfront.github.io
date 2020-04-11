<?php
// несколько получателей
if(isset($_POST['submit'])){
$to = "rustamfrontend@gmail.com"; // Здесь нужно написать e-mail, куда будут приходить письма
$from = $_POST['email'];
$tel = $_POST['name']; // this is the sender's Email address
$subject = "Форма отправки сообщений с сайта";
$subject2 = "Copy of your form submission";
$message =  "Пользователь оставил заявку:" . "\n\n" . $_POST['email'] . "\n\n" . $_POST['name'];
$message2 = "Here is a copy of your message " . "\n\n" . $_POST['email'];

$headers = "From:" . $from;
$headers2 = "From:" . $to;

mail($to,$subject,$message,$headers);
// mail($from,$subject2,$message2,$headers2);
}
?>