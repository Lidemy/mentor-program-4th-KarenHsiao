<?php
require_once('./conn.php');

function getUserFromUsers(){
	global $conn;
	$sql = sprintf("SELECT * FROM Karen_users WHERE username='%s'",$_SESSION['username']);
	$result = $conn->query($sql);
	$row = $result->fetch_assoc();
	if(!$result){
		dei('$conn->error');
	}
	return $row; 
}
?>