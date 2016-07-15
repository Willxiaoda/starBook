window.onload=function(){
		//后端数据
		var num = '[{"id":"34","name1":"\u65e5\u4e86\u72d7\u4e86","listhref":"201510098246"},{"id":"31","name1":"\u4e66\u53551","listhref":""},{"id":"32","name1":"\u4e66\u53551","listhref":""},{"id":"33","name1":"\u4e66\u53551","listhref":""},{"id":"34","name1":"\u65e5\u4e86\u72d7\u4e86","listhref":""},{"id":"31","name1":"\u4e66\u53551","listhref":""}]';
		var data = JSON.parse(num);
		$('#name').append('<div id="up"><span>'+ data[1].id + '</span></div>');
		// alert(data[0].id);
	for(var i = 0; i < data.length; i++){
			//获取书架祖父节点
			var content = document.getElementById('container');
			//创建一个父div
			var outDiv = document.createElement('div');
			outDiv.id = 'namelist' + i;//设置div的ID
			// outDiv.className = 'namelist';//设置div的class
			var ul= document.createElement('ul');//创建一个ul
			//创建3个li标签
			var Name = document.createElement('li1');//姓名
			var stunum = document.createElement('li2');//学号
			var look = document.createElement('li3');//查看按钮
			var compile = document.createElement('li4');//编辑
			var a = document.createElement("a");
			// var input = document.createElement("input");
			// 内容并在li中添加a标签
			Name.innerHTML =  "  "+ data[i].name1 +" ";
			stunum.innerHTML = " "+ data[i].listhref + " ";
			// Delete.innerHTML = " <span>删除</span> ";
			// Compile.innerHTML = "<a href='D_addBook_edit.html'>编辑</a>";
			look.innerHTML = "<a href='personly.php' id ='look"+ (i+1)+ "'>查看</a>";
			compile.innerHTML = " <a href='D_bookList_edit.html' id ='compiles"+ (i+1)+ "''>修改</a> ";
			//li所带属性
			Name.id = 'book'+(i+1);
			stunum.id = 'link'+(i+1);
			look.id = 'looks'+(i+1) ;
			// compile.id='compiles'+(i+1);
			// Name.className = 'book';
			// stunum.className  = 'link';
			look.className = 'looks';
			// input.className = 'look';
			//input
			// input.type= 'button';
			// input.name = 'look' + i;
			// input.id= 'look'+(i+1);
			// input.value = '查看';
			// look.appendChild(input);
			//在ul中添加Li
			ul.appendChild(Name);
			ul.appendChild(stunum);
			ul.appendChild(look);
			ul.appendChild(compile);
			outDiv.appendChild(ul);
			content.appendChild(outDiv);
	}
	for (var i =0; i < data.length; i++){
				
	}	
} 