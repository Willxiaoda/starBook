window.onload = function  () {


	//后端数据
	var a='{"username":"\u5b66\u59d4\u59d3\u540d","studentnum":"201510098111","error_code":"0","book":["\u65b0\u4e16\u7eaa\u5927\u5b66\u82f1\u8bed\u7cfb\u5217\u6559\u6750\uff08\u7b2c\u4e8c\u7248\uff09\u9605\u8bfb\u6559\u7a0b\uff082\uff09\u5b66\u751f\u7528\u4e66","\u8ba1\u7b97\u673a\u82f1\u8bed(\u5b66\u751f\u7528\u4e66)","Java\u7a0b\u5e8f\u8bbe\u8ba1\u4e0e\u5b9e\u8df5\u6559\u7a0b","\u9ad8\u7b49\u6570\u5b66\uff08\u7b2c\u4e03\u7248\uff09\uff08\u4e0b\u518c\uff09","\u4e2d\u56fd\u8fd1\u73b0\u4ee3\u53f2\u7eb2\u8981\uff082015\u5e74\u4fee\u8ba2\u7248\uff09","Java\u7a0b\u5e8f\u8bbe\u8ba1\u4e60\u9898\u7cbe\u7f16","\u96f6\u70b9\u8d77\u98de\u5b66Dreamweaver+Flash+Photoshop CS6\u7f51\u9875\u8bbe\u8ba1\uff08\u914d\u5149\u76d8\uff09","\u79bb\u6563\u6570\u5b66\u53ca\u5e94\u7528(\u7b2c\u4e8c\u7248)","\u5927\u5b66\u751f\u5fc3\u7406\u5065\u5eb7\u6559\u80b2-\u5fc3\u7075\u6210\u957f\u624b\u518c"],"price":[0,1,2,3,4,5,6,7,8],"Dprice":[0,1,2,3,4,5,6,7,8]}';
	var b=JSON.parse(a);
	function adddata(){
		var num = b.Dprice.length ;
		var money =0;
		// $('#title').append('<div id="title_right"> <span>姓名：</span><p id="name">dongxfdf空i</p><span>学号</span><p id="stunum">xxxxshdsdj</p></div>');
		
		for (var i =0;i<num; i++) {
		//动态添加dom		
			$('#bookShelf').append('<div id="type'+(i+1)+'" class="bookInfo"><ul> <li id =" bookName'+(i+1)+' " class=" bookName"></id> ' + b.book[i] + '</li> <li id =" bookPr'+(i+1)+' " class="bookPr">' + b.price[i] + '</li>  <li id =" bookD'+(i+1)+' " class="bookD">'+b.Dprice[i]+'</li> </ul></div>');
			money += b.Dprice[i];
		}
		$('#money').append(	' <div id=" font"><p>总额为:'+ money +' RMB</p></div>');

	}
	adddata();
	// Console.log("22");
}