function lis(){
	var allLi = document.querySelectorAll("li")
	console.log(allLi)
	for(var i = 0; i < allLi.length; i++){
		document.write(allLi[i].innerHTML + "<br>")		
	}
}