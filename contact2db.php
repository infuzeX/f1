<?php
header("Access-Control-Allow-Origin:*");
header("Content-Type:application/json; charset=UTF-8");

require './db.php';
require './response.php';

$json = file_get_contents('php://input');
$data = json_decode($json);

if(isset($data)){

        //store object data in variable
$parent = $data ->parent;
$email = $data ->email;
$number = $data ->number;
$cname= $data ->cname;
$clas= $data ->class;

/*insert data*/
$query = "INSERT INTO course (`parent`,`email`,`number`,`cname`,`class`) VALUES ('$parent','$email',$number,'$cname','$clas')";
$inserted = mySqli_query($con , $query);

$res = new Response;
if($inserted){
    $res -> success = true;
    $res -> message = "Thankyou ,your Demo is Booked successfully.

Our Team will call you super soon.";
   }else{
    $res -> success = false;
    $res -> message = "failed to apply";
}
/*insert data*/
echo json_encode($res);
}

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, origin");
?>