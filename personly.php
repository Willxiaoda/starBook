<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>书单详情</title>
	<link rel="stylesheet" type="text/css" href="css/person.css" />
	<script type="text/javascript" src="js/jquery.js"></script>
	<style type="text/css">
		#container #title #title_content_left{
			float: left;
			font-size: 18px;
			padding: 50px 0 0 50px;
		}
		#container #title #title_content_left input{
			width: 152px;
			height: 25px;
			border: none;
		}
		#container #title #title_content_left #stuNum{
			width: 200px;

		}
		#container #title #title_content_right{
			float: right;
			width: 50px;
			height: 30px;
			margin: 45px 100px 0 0;
			line-height: 30px;
			text-align: center;
			background-color: #E7E3E3;
			border: 1px solid #000;
		}
		#container #title #title_content_right a{
			font-size: 18px;
			text-decoration: none;
			color: #000;
		}
	</style>
</head>
<body>
	<header>
		<a href="www.xingkong.us"><img src="images/logo.png" id="logo" /></a>
	</header>
	<div id="container">
		<div id="title">
			<div id="title_content_left">
				<span>姓名：</span>
				<input type="text" name="username" id="stuName" readonly />
				<span>学号：</span>
				<input type="text" name="stunum" id="stuNum" readonly />
			</div>
			<div id="title_content_right">
				<a href="J_addbook.html">返回</a>
			</div>
		</div>
		<form method="post" action="">
			 <div id="bookShelf" class="bookInfo">
				<div id="type">
					<ul>
						<li>书名</li>
						<li>价格</li>
						<li>折后价</li>
					</ul>
				</div>
			</div>
			<!-- <input type="submit" name="ensure" id="ensure" value="提交" /> -->
		</form>
		<div id="money">
		</div>
	</div>
</body>
<script type="text/javascript" src="./person.js.php" ></script>
<script type="text/javascript" src="./js/person.js" ></script>

</html>