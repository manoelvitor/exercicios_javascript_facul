function captureP(){ 
	var paragrafos = document.querySelectorAll("p")
	for(var i = 0; i < paragrafos.length; i++){
		document.write("<br>"+paragrafos[i].innerHTML)
	}
}