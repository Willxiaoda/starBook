window.onload=function(){
	var user = document.getElementById('usrename'); 
	var psd = document.getElementById('psd');
	var login = document.getElementById('login');
	var conten = document.getElementById('conten');
	var name_length = 0;
	var password_length = 0;

	user.onfocus = function(){
		conten.style.display="inline";
	};
	user.onblur = function(){
		name_length=this.value.length;
		// alert(name_length);
		// var re=/[^\w\u4e00-\u9fa5]/g;
		var re = /[0-9]/;
		if(this.value==""){
			conten.innerHTML='<i class="err"></i>不能为空!';
		}
		else if(!re.test(this.value)){
			conten.innerHTML='<i class="err"></i>学号只可以为数字'; 
		}
		else if(name_length != 12){
			conten.innerHTML='<i class="err"></i>学号位数有误!';
		}
		else
			conten.innerHTML='<i class="ok"></i>OK!';
	}
	psd.onfocus = function(){
		if (user.value.length == 0) {
			conten.innerHTML='<i class="err"></i>请先输入学号'; 
			// alert("错了");
			
		}else{
			conten2.style.display="inline";
		}
		
	};
	psd.onblur=function(){
		password_length = this.value.length; 
		var num1= /\s/;//空格判断
		if(this.value==""){
			conten2.style.display="inline";
			conten2.innerHTML='<i class="err"></i>不能为空!';
		}
		else if(num1.test(this.vale)){
			conten2.innerHTML='<i class="err"></i>含有空格!';
		}
		else{
			conten2.innerHTML='<i class="OK"></i>OK!';
		}
	};
	login.onclick = function(){
		if(1){

		}
		else{
			alert("登陆成功");
		}	
		
	};
}