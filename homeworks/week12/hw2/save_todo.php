<?php

require_once('conn.php');
header('Content-type:application/json;charset=utf-8');
header('Acsess-Control-Allow-Origin: *');

$data = $_POST['todo'];
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

if($row['content'] == null){		//未建立 id
	$sql = "INSERT INTO Karen_w12hw2_todo(content, user_id) VALUES(?, ?)";
}else{
	$sql = "UPDATE `Karen_w12hw2_todo` SET content=? WHERE user_id=?"; //已有 id
}

$stmt = $conn->prepare($sql);
$stmt->bind_param('ss',$data, $id);
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
		'message'=> 'save success!',
		'user_id' =>$id,
		'data'=>$row['content']
	);

$response = json_encode($json);
echo $response;
?>