function colorHeader(){
	var h1 = document.getElementById("h1")
	var x = document.getElementById("opc").value	
	if(x == 0){
		h1.style.backgroundColor = "blue"
		
	}
	else if(x == 1){
		h1.style.backgroundColor = "red"
		
	}
	else if(x == 2){
		h1.style.backgroundColor = "yellow"
	}
	else{
		h1.innerHTML = "ERRO"
		h1.style.backgroundColor = ""

	}
}