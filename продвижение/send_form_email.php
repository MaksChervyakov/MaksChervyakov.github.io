<?php
 
if(isset($_POST['email'])) {
 
     
 
    // EDIT THE 2 LINES BELOW AS REQUIRED
 
    $email_to = "dixite@yandex.ru";
 
    $email_subject = "Сообщение с сайта раскрутки групп";
 
     
 
     
 
    function died($error) {
 
        // your error code can go here
 
        echo "Мы извиняемся, мы нашли ошибку в заполненной Вами форме. ";
 
        echo "Данные ошибки возникли:<br /><br />";
 
        echo $error."<br /><br />";
 
        echo "Пожалуйста, <a href='http://xn----7sban6aa2babcefpng4k.xn--p1ai/'>вернитесь назад</a> и исправьте ошибку.<br /><br />";
 
        die();
 
    }
 
     
 
    // validation expected data exists
 
    if(!isset($_POST['first_name']) ||
 
        !isset($_POST['group']) ||
 
        !isset($_POST['email']) ||
 
        !isset($_POST['telephone'])) {
 
        died('Мы извиняемся, похоже, что есть какие-то ошибки с заполнением формы.');       
 
    }
 
     
 
    $first_name = $_POST['first_name']; // required
 
    $group = $_POST['group']; // required
 
    $email_from = $_POST['email']; // required
 
    $telephone = $_POST['telephone']; // not required
 
     
 
    $error_message = "";
 
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email_from)) {
 
    $error_message .= 'Ваш Email адрес показался нам не действительным.<br />';
 
  }
 
    $string_exp = "/^[a-zа-яё]+(?: [a-zа-яё]+)?$/i";
 
  if(!preg_match('/^[a-zA-Zа-яёА-ЯЁ\s\-]+$/u',$first_name)) {
 
    $error_message .= 'Введенное Вами Имя показалось нам не действительным.<br />';
 
  }
 	/*$group_exp = '^(?:https?:\/\/)?(?:www\.)?vk\.com\/(.*)\/?$';
  if(!preg_match($group_exp,$group)) {
 
    $error_message .= 'Введенная Вами Группа показалась нам не действующей.<br />';
 
  }*/
 
  if(strlen($error_message) > 0) {
 
    died($error_message);
 
  }
 
    $email_message = "Данные формы ниже.\n\n";
 
     
 
    function clean_string($string) {
 
      $bad = array("content-type","bcc:","to:","cc:","href");
 
      return str_replace($bad,"",$string);
 
    }
 
     
 
    $email_message .= "Имя: ".clean_string($first_name)."\n";
 
    $email_message .= "Группа: ".clean_string($group)."\n";
 
    $email_message .= "Email: ".clean_string($email_from)."\n";
 
    $email_message .= "Телефон: ".clean_string($telephone)."\n";
 
 
     
 
     
 
// create email headers
 
$headers = 'From: '.$email_from."\r\n".
 
'Reply-To: '.$email_from."\r\n" .
 
'X-Mailer: PHP/' . phpversion();
 
mail($email_to, $email_subject, $email_message, $headers);  
 
?>
 

<!DOCTYPE html>
<!--[if lte IE 9]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 9]><!-->
<html class="no-js">
<!--<![endif]--> 
 <head>
<meta charset="utf-8">
<title>Успешно отправлено!</title>
<!--=================================
Meta tags
=================================-->
<meta name="description" content="Раскрутка группы Вконтакте - живые подписчики по критериям">
<meta content="yes" name="apple-mobile-web-app-capable" />
<meta name="viewport" content="minimum-scale=1.0, width=device-width, maximum-scale=1, user-scalable=no" />
<!--=================================
Style Sheets
=================================-->
<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700,800&amp;subset=cyrillic' rel='stylesheet' type='text/css'>
<link href='https://fonts.googleapis.com/css?family=Marck+Script&amp;subset=cyrillic' rel='stylesheet' type='text/css'>
 <link rel="stylesheet" href="assets/css/main.css">
 </head>
 <body class="landing" data-spy="scroll" data-target="#navbar" data-offset="70">
<h2 align="center">Благодарим, что оставили заявку.<br> Свяжемся с Вами в ближайшие 24 часа.</h2>
<section id="section4" class="trial mt-40 mb-30 text-bold text-center">
<a class="btn btn-default" href="http://xn----7sban6aa2babcefpng4k.xn--p1ai/">Вернуться</a>
</section>
</body>
 
 
 
<?php
 
}
 
?>