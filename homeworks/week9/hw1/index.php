<?php
session_start();
require_once('./conn.php');
require_once('./utils.php');
$username = NULL;
if(!empty($_SESSION['username'])){
	$username = $_SESSION['username'];
}
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
				<h1>Comments</h1>

				<div>
					<?php if($username){?>
						<a href="logout.php" class="login__btn">登出</a>
					
					<?php } else{?>
						<a href="register.php" class="reg__btn">註冊</a>
						<a href="login.php" class="login__btn">登入</a>
					<?php } ?>
				</div>
			</div>
			<?php
			if(!empty($_GET['errorCode'])){
				if($_GET['errorCode'] == 1){
					echo('<div class="empty__error">請填入完整資料</div>');
				}
			}
				
			?>
			<?php if($username){?>
			<div class="hello">
				<p>Hello <?php echo $username;?></p>
			</div>
		<?php } ?>
			<div class="add">
				<form method="POST" action="handle_add_comment.php">
					<textarea name="content" class="content" rows="5"></textarea>
					<br>
				<?php if($username){ ?>
					<input type="submit" class="add__submit">
				<?php } else{?>
						<h3>請先登入</h3>
			    <?php } ?>
			    </form>
			
			
			</div>
			</main>
			<hr>
			<section>
				<?php
					$sql = "SELECT * FROM Karen_comments ORDER BY created_at DESC";
					$result = $conn->query($sql);
					while($row = $result->fetch_assoc()){

				?>
					<div class="card">
						<div class="avatar">
						</div>
						<div class="card__content">
							<div class="info">
								<span class="author"><?php echo $row['nickname']?></span>
								<span class="time"><?php echo $row['created_at']?></span>
							</div>
							<div class="text">
								<?php echo $row['content']?>
							</div>
						</div>
					</div>
				<?php } ?>
			</section>
		</div>

	


</body>
</html>