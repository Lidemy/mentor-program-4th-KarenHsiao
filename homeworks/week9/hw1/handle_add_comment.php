<?php
session_start();
require_once('conn.php');
require_once('./utils.php');
if(empty($_POST['content'])){
	header('Location:index.php?errorCode=1');
	die();
}
$user = getUserFromUsers();
$nickname = $user['nickname'];
$content = $_POST['content'];


$sql = "INSERT INTO Karen_comments(nickname, content) VALUES('$nickname', '$content')";
$result = $conn->query($sql);
if(!$result){
	die('$conn->error');
}else{
	header('Location:index.php');
}

?>