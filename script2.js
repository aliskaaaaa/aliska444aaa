function rememberEntry() {
	var txt=document.getElementById('content').value;
	var dt=document.getElementById('data').value;
	var k=document.getElementById('key').value;
	let con=dt+'u'+txt;
	window.localStorage.setItem(k, con);
	listOut();
}
function clearList(){
	document.getElementById('toDo').innerHTML = "";
}
function ultraKill(){
	window.localStorage.clear();
	listOut();
}
function listOut(){
	clearList();
	for(let key in localStorage) {
	if (!localStorage.hasOwnProperty(key)) {
		continue;
  }
  let con=window.localStorage.getItem(key);
  let txt=con.slice(11)
  let dt=con.slice(0,10)
  if(con[10]=='d'){tip='task_done';}else{tip='task_undone'};
document.getElementById('toDo').insertAdjacentHTML('beforeend', '<div class="'+tip+'">'+key+'<br>'+'<input type=checkbox name="del" value="'+key+'"/><input type=date value='+dt+' readonly> '+'<br>'+txt+'</div>');
}
}
function checkKill(){
	var checkboxes = document.getElementsByName('del');
	for (var i=0; i<checkboxes.length; i++) {
		if (checkboxes[i].checked) {
			window.localStorage.removeItem(checkboxes[i].value);
    }
}
listOut();
}
function checkDone(){
	var checkboxes = document.getElementsByName('del');
	for (var i=0; i<checkboxes.length; i++) {
		if (checkboxes[i].checked) {
			key=checkboxes[i].value
			con=window.localStorage.getItem(key);
			window.localStorage.removeItem(key);
			con=con.slice(0,10)+'d'+con.slice(11);
			window.localStorage.setItem(key, con);
    }
}
listOut();
}
function checkUnDone(){
	var checkboxes = document.getElementsByName('del');
	for (var i=0; i<checkboxes.length; i++) {
		if (checkboxes[i].checked) {
			key=checkboxes[i].value
			con=window.localStorage.getItem(key);
			window.localStorage.removeItem(key);
			con=con.slice(0,10)+'u'+con.slice(11);
			window.localStorage.setItem(key, con);
    }
}
listOut();
}
function allCheck() {
    var checkboxes = document.getElementsByName('del');
    for (var checkboxx of checkboxes) {
        checkboxx.checked = true;
    }
}
function allUnCheck() {
    var checkboxes = document.getElementsByName('del');
    for (var checkboxx of checkboxes) {
        checkboxx.checked = false;
    }
}
function dateSort(aaa){
	let cons=[]
	for(let key in localStorage) {
	if (!localStorage.hasOwnProperty(key)) {
		continue;
  }
  let con=window.localStorage.getItem(key);
  con=con.slice(0,10)+'"!@#$"'+key+'"$#@!"'+con.slice(10);
  cons.push(con);
	}
	if(aaa){
	cons.sort().reverse();
	}
	else{
		cons.sort();
	}
	clearList();
	for(let i=0;i<cons.length;i++){
		let cn=cons[i];
		key=cn.slice(cn.indexOf('"!@#$"')+6,cn.indexOf('"$#@!"'));
		cn=cn.replace('"!@#$"'+key+'"$#@!"', '');
		let txt=cn.slice(11);
		let dt=cn.slice(0,10);
		if(cn[10]=='d'){tip='task_done';}else{tip='task_undone'};
		document.getElementById('toDo').insertAdjacentHTML('beforeend', '<div class="'+tip+'">'+key+'<br>'+'<input type=checkbox name="del" value="'+key+'"/><input type=date value='+dt+' readonly> '+'<br>'+txt+'</div>');
	};
}
function showDone(){
	clearList();
	for(let key in localStorage) {
	if (!localStorage.hasOwnProperty(key)) {
		continue;
  }
  let con=window.localStorage.getItem(key);
  let txt=con.slice(11)
  let dt=con.slice(0,10)
  if(con[10]=='d'){tip='task_done';document.getElementById('toDo').insertAdjacentHTML('beforeend', '<div class="'+tip+'">'+key+'<br>'+'<input type=checkbox name="del" value="'+key+'"/><input type=date value='+dt+' readonly> '+'<br>'+txt+'</div>');
}
  }
}
function showUndone(){
	clearList();
	for(let key in localStorage) {
	if (!localStorage.hasOwnProperty(key)) {
		continue;
  }
  let con=window.localStorage.getItem(key);
  let txt=con.slice(11)
  let dt=con.slice(0,10)
  if(con[10]=='u'){tip='task_undone';document.getElementById('toDo').insertAdjacentHTML('beforeend', '<div class="'+tip+'">'+key+'<br>'+'<input type=checkbox name="del" value="'+key+'"/><input type=date value='+dt+' readonly> '+'<br>'+txt+'</div>');
}
  }
}