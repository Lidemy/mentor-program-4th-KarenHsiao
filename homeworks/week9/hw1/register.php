<?php
require_once('./conn.php');

?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>message board</title>
	<link rel="stylesheet" href="style.css">
</head>

<body>
	<header>
		注意 ! 本網站為練習使用，有資安風險，請勿註冊真實帳號密碼
	</header>
	<main>
		<div class="wrapper">
			<main>
			<div class="nav">
				<h1>註冊</h1>
				<div>
					<a href="index.php" class="reg__btn">回留言板</a>
					<a href="login.php" class="login__btn">登入</a>
				</div>
			</div>
			<?php
				if(!empty($_GET['errorCode'])){
					if($_GET['errorCode'] == '1'){
						echo('<div class="empty__error">請填入完整資料</div>');
					}
					if($_GET['errorCode'] == '2'){
						echo('<div class="empty__error">帳號已被註冊</div>');
					}
				}
			?>
			<div class="add">
				<form method="POST" action="handle_register.php">
					<div class="add__nickname">
						<span>暱稱 : </span>
						<input type="text" name="nickname" class="nickname">
					</div>
					<div class="add__username">
						<span>帳號 : </span>
						<input type="text" name="username" class="username">
					</div>
					<div class="add__password">
						<span>密碼 : </span>
						<input type="password" name="password" class="password">
					</div>
					<input type="submit" class="add__submit">
			    </form>
			</div>
			</main>
		</div>
</body>
</html>