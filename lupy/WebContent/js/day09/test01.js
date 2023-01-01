document.getElementById('rbtn').onclick = function(){
	document.getElementById('id').value = '';
	document.getElementById('pw').value = '';
};
document.getElementById('lbtn').onclick = function(){
//속성 배당
	var send_id = document.frm.id.value;
	var send_pw = document.frm.pw.value;
	var send_name = document.frm.name.value;
//	var send_email = document.frm.email.value;
	var send_tel = document.frm.tel.value;
//입력검증
	if(!send_id){
		alert('아이디를 입력하세요')
		document.getElementById('id').focus();
		return;
	}
	if(!send_pw){
		alert('비밀번호를 입력하세요')
		document.getElementById('pw').focus();
		return;
	}
	if(!send_name){
		alert('이름을 입력하세요')
		document.getElementById('name').focus();
		return;
	}
/*	if(!send_email){
		alert('이메일을 입력하세요')
		document.getElementById('email').focus();
		return;
	}*/
	if(!send_tel){
		alert('전화번호를 입력하세요')
		document.getElementById('tel').focus();
		return;
	}
//형식검증
//아이디
	var idPattern = new RegExp('^[a-z][a-zA-Z0-9]{5,10}$')
	var idResult = idPattern.test(send_id);	
	if(!idResult){
		document.frm.id.value = '';
		ducument.frm.id.focus();
		return;
	}
//비밀번호
//첫문자: 소문자; 소문자 대문자 숫자 특수문자(@#$%*_!?) 각각 한개 이상 포함해야함
	var pwPattern = new RegExp('^[12345]$')
	var pwResult = pwPattern.test(send_pw);	
	if(!pwResult){
		document.frm.pw.value = '';
		ducument.frm.pw.focus();
		return;
	}
//이름
	var namePattern = new RegExp('^[가-힣]{2,10}$')
	var nameResult = namePattern.test(send_name);
	if(!nameResult){
		alert('이름 형식이 맞지 않습니다');
		document.getElementById('name').value = '';
		document.getElementById('name').focus();
		return;
	}
//이메일
/*	var emailPattern = new RegExp('^[a-zA-Z0-9_.#]{6,10}@[a-z]{4-10}[.][a-z]{3-5}$')
	var emailResult = emailPattern.test(send_email);
	if(!emailResult){
		alert('이메일 형식이 맞지 않습니다');
		document.getElementById('email').value = '';
		document.getElementById('email').focus();
		return;
	}*/
//전화번호
	var telPattern = new RegExp('^0[0-9]{1,2}-[0-9]{3,4}-[0-9]{4}$');	
	var telResult = telPattern.test(send_tel);
	if(!telResult){
		document.getElementById('tel').value = '';
		alert('전화번호 형식이 잘못되었습니다');
		document.getElementById('tel').focus();
		return;
	}

}