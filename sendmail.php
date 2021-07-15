<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->Charset = "UTF-8";
$mail->setLanguage("ru", "phpmailer/language/");
$mail->IsHtml(true);

$mail->setFrom("info@kiwidesign.by", "kiwidesign"); // от кого придет
$mail->addAddress("site@gmail.com"); // куда придет
$mail->Subject = "Привет! Это письмо"; //заголовок пиьсма

$body = "<h1>Сообщение от kiwidesign.by</h1>"; //h1 письма

if(trim(!empty($_POST["name"]))){
    $body.="<p><strong>Имя:</strong> ".$_POST["name"]."</p>";  // Шаблон - в сообщении будет "Имя: ИмяУказанноеПриОтправке"
}

if(trim(!empty($_POST["tel"]))){
    $body.="<p><strong>Телефон:</strong> ".$_POST["tel"]."</p>"; // Шаблон
}

if(trim(!empty($_POST["type"]))){
    $body.="<p><strong>Тип помещения:</strong> ".$_POST["type"]."</p>"; // Шаблон
}

if(trim(!empty($_POST["flat"]))){
    $body.="<p><strong>Площадь:</strong> ".$_POST["flat"]."</p>"; // Шаблон
}

if(trim(!empty($_POST["service"]))){
    $body.="<p><strong>Пакет услуг:</strong> ".$_POST["service"]."</p>"; // Шаблон
}

$mail->Body = $body;

if (!$mail->send()) {
    $message = "Ошибка";
} else {
    $message = "Данные отправлены";
}

$response = ["message" => $message];

header("Content-type: application/json");
echo json_encode($response);
?>