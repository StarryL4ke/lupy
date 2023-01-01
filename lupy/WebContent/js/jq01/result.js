$(document).ready(function(){
	$('#ebtn').click(function(){
		$(location).attr('href', './ex01.html');
	});
	$('#pbtn').click(function(){
//		$(location).attr('search')
		$('#fr').stop().slideUp(300, function(){
		
		
		var param = $(location).attr('search');
		
		param = param.substring(1);//id=data&pw=data
		
		
		var data = {};
		
		var arr = param.split('&');//id=data,pw=data
		

	
		for(var i = 0 ; i < arr.length ; i++){
			var tmp = arr[i].split('=');//(id,data),(pw,data)
//			alert(tmp)
			var key = tmp[0]; // 'id', 'pw'
			var val = tmp[1]; // '', ''
			
			data[key] = val;
			data[tmp[0]] = tmp[1]
		}
		
/*		var val_id = data['id'];
		var val_pw = data['pw'];
		$('#pid').html(val_id);
		$('#ppw').html(val_pw);*/
		
		
		
		
		
		});
		$('#fr').slideDown(500);
	});
});