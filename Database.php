<?php 
class Database
{
	function __construct()
	{
		# 构造函数默认连接数据库
		header("Content-Type: text/html; charset=utf-8");
		$conn=mysql_connect("localhost", "root", "123456") or die("数据库链接错误");
		mysql_select_db("test", $conn);
		mysql_query("SET NAMES 'UTF8'");
	}
	//返回加密后的数据
	function encryption($string)
	{
		$string=$string+"zwc";
		for ($i=0; $i <3 ; $i++) { 
			$string=md5($string);
		}
		$string="zwc"+$string;
		for ($i=0; $i <3 ; $i++) { 
			$string=md5($string);
		}
		return substr($string ,1,17);
	}
	//可以解密的加密方法
	function encryption1($string)
	{
		for ($i=0; $i <3 ; $i++) { 
			$string=base64_encode($string);
		}
		return $string;
	}
	//解密方法
	function decryption($string)
	{
		for ($i=0; $i <3 ; $i++) { 
			$string=base64_decode($string);
		}
		return $string;
	}
	//返回数据0则登录失败，返回数据1则登录成功
	function login($data)
	{
		if(isset($data['password'])&&isset($data['studentnum'])){
			$sql = mysql_query("SELECT * FROM  `Admin` "); 
			$code = array();
			while($row = mysql_fetch_array($sql,0) )
			{
			    array_push($code,$row);
			}
			// print_r($code);
			// echo $this->encryption($data['password']);
			for ($i=0; $i < count($code); $i++) { 
				if($data['studentnum']==$code[$i]['studentnum']&&($this->encryption($data['password'])==$code[$i]['password'])){
					return 1;
				};
			}
			return 0;
		}
		else {
			return 0;
		};
	}
	function register($data)
	{
		// print_r($data);
		if(isset($data['username'])&&isset($data['password'])&&isset($data['studentnum'])){
			$sql = "INSERT INTO `Admin`(id, username, password,studentnum) VALUES (NULL, '".$data['username']."','".$this->encryption($data['password'])."','".$data['studentnum']."')";
			if(mysql_query($sql)){
				return 1;
			}else{
				return 0;
			}
		}
		else return 0;
	}
	function setlogin($data){
		session_start();
		$_SESSION['userid']=$data['studentnum'];
		$_SESSION['password']=$data['password'];
	}
	//返回值0为未登录，返回值为1为已登录，返回值为2为session与密码不符
	function checklogin()
	{
		if(isset($_SESSION['userid'])&&isset($_SESSION['password'])){
			$sql = mysql_query("SELECT * FROM  `Admin` "); 
			$code = array();
			while($row = mysql_fetch_array($sql,0) )
			{
			    array_push($code,$row);
			}
			// print_r($code);
			for ($i=0; $i < count($code); $i++) { 
				if($data['studentnum']==$_SESSION['userid']&&$this->encryption($_SESSION['password']=$data['password'])==$code['password']){
					return 1;
				};
			}
			return 2;
		}
		else return 0;
	}
}

 ?>