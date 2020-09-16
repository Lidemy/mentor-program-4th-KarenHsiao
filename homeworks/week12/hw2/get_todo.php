<?php

require_once('conn.php');
header('Content-type:application/json;charset=utf-8');
header('Acsess-Control-Allow-Origin: *');

$id = $_POST['id'];
$sql = "SELECT * FROM Karen_w12hw2_todo WHERE user_id = ?"; //先查詢資料庫裡是否有此 id
$stmt = $conn->prepare($sql);
$stmt->bind_param('s',$id);
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
$result = $stmt->get_result();
$row = $result->fetch_assoc();
if($row['content'] == ''){
	$json = array(
		'get_data'=>$row['content']
	);
	$response = json_encode($json);
	echo $response;
	die();
}
$json = array(
		'get_data'=>$row['content']
	);
$response = json_encode($json);
echo $response;


?>