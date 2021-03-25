<?php 

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
 
//Load composer's autoloader
require 'vendor/autoload.php';
$mail = new PHPMailer(true);   

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$origin = $_POST['origin'];
$destination = $_POST['destination'];
$month = $_POST['month'];

// $name . $phone . $email . $origin . $destination . $month ;

// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function


                           // Passing `true` enables exceptions
try {
    //Server settings
    $mail->SMTPDebug = 0;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'p3plcpnl0646.prod.phx3.secureserver.net';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'test@parasvohra.com';                 // SMTP username
    $mail->Password = 'Parasvohra@966';                           // SMTP password
    $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 465;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('info@explorersgetaway.com', 'Mailer');
    $mail->addAddress('info@explorersgetaway.com'); 
    $mail->addAddress('pursharth01@gmail.com');    // Add a recipient          
    $mail->addAddress('pursharth.vohra@gmail.com');
    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Here is the subject';
    $mail->Body    = '  <br> Name : '.$name.'<br> Phone Number: '.$phone.' <br> Email : '.$email.' <br> Origin : '.$origin.' <br> Destination : '.$destination.' <br> Month : '.$month.' ';
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo "<html>";
    echo "<head></head>";
    echo "<body>";
    echo "<div style=\"position:absolute; width:400px; height:200px; left:50%; top:50%;  -ms-transform: translateX(-50%) translateY(-50%); -webkit-transform: translate(-50%,-50%); transform: translate(-50%,-50%); background-color: black; color: white; text-align:center; line-height: 200px; font-size: 24px \">Inquery sent</div>";
    echo "</body>";
    echo "</html>";
} catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}
header( "refresh:5;url=http://www.explorersgetaway.com" );


