//ex01.	기능 할당
document.getElementById('rbtn').onclick = function(){
	document.getElementById('sid').value = '';
	document.getElementById('spw').value = '';
}

document.getElementById('cbtn').onclick = function(){
	var send_id = document.getElementById('sid').value;
	var send_pw = document.getElementById('spw').value;
	document.getElementById('pid').innerHTML = send_id;
	document.getElementById('ppw').innerHTML = send_pw;
	document.getElementById('fr2').style.display = 'block';
	document.getElementById('sid').value = '';
	document.getElementById('spw').value = '';
	document.getElementById('fr1').style.display = 'none';
}

document.getElementById('bbtn').onclick = function(){
	document.getElementById('pid').value = '';
	document.getElementById('ppw').value = '';
	document.getElementById('fr2').style.display = 'none';
	document.getElementById('fr1').style.display = 'block';
}

document.getElementById('sbtn').onclick = function(){
	var form_id = document.getElementById('pid').innerHTML;
	var form_pw = document.getElementById('ppw').innerHTML;
	
	var inputId = null;
	var inputPw = null;

	function addElement(){
		inputId = document.createElement('input');
		inputId.setAttribute('type', 'hidden');
		inputId.setAttribute('name', 'id');
		inputId.setAttribute('id', 'id');
//		inputId.value = form_id;
		
		inputPw = document.createElement('input');
		inputPw.setAttribute('type', 'hidden');
		inputPw.setAttribute('name', 'pw');
		inputPw.setAttribute('id', 'pw');
//		inputPw.value = form_Pw;
		
		frm.appendChild(inputId);
		frm.appendChild(inputPw);
		
//		document.getElementById('frm').innerHTML = inputId;
//		document.getElementById('frm').innerHTML = inputPw;
	}
	addElement();	

	document.getElementById('id').value = form_id;
	document.getElementById('pw').value = form_pw;
	document.getElementById('frm').submit();
}

/*
var inputId = null;
var inputPw = null;

function addElement(){
	inputId = document.createElement('input');
	inputId.html = '';
	inputId.setAttribute('type', 'hidden');
	inputId.setAttribute('name', 'id');
	inputId.setAttribute('id', 'id');
	
	inputId = document.createElement('input');
	inputId.html = '';
	inputId.setAttribute('type', 'hidden');
	inputId.setAttribute('name', 'pw');
	inputId.setAttribute('id', 'pw');
	
	document.body.insertAfter(inputId, document.getElementById('frm'));
	document.body.insertAfter(inputPw, document.getElementById('frm'));
}
addElement();
*/