<?php
require_once('conn.php');
header('Content-type:application/json;charset=utf-8');
header('Acsess-Control-Allow-Origin: *');
if(
	empty($_POST['content']) ||
	empty($_POST['site_key']) ||
	empty($_POST['nickname'])
){
	$json = array(
		'ok'=> false,
		'message' => 'please input content'
	);
	$response = json_encode($json);
	echo $response;
	die();
};


$nickname = $_POST['nickname'];
$content = $_POST['content'];
$site_key = $_POST['site_key'];

$sql = "INSERT INTO Karen_w12hw1_discussions(site_key, nickname, content) VALUES(?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt -> bind_param('sss', $site_key, $nickname, $content);
$result = $stmt->execute();

if(!$result){
	$json = array(
		'ok'=> false,
		'message'=> $conn->error
	);
	$response = json_encode($json);
	echo $response;
	die();
};
$json = array(
		'ok'=> true,
		'message'=> 'success!'
	);
$sql = "SELECT COUNT(*) FROM Karen_w12hw1_discussions";
$result = $conn->query($sql);
$row = $result->fetch_assoc();
$json = array(					//如何用 array_push 在 $json 裡插入一個物件
		'ok'=> true,
		'message'=> 'success!'
	);

$json['total_comments'] = $row['COUNT(*)'];
$response = json_encode($json);
echo $response;
?>