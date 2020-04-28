function contador(palavra){
	var palavra = document.getElementById("palavra").value
	var p = document.getElementById("p")
	var contVogal = 0
	var contNum = 0
	for(var i = 0; i < palavra.length; i++){
		if(palavra[i] == "a" || palavra[i] == "e"||palavra[i] 
			== "i"|| palavra[i] == "o"|| palavra[i] == "u"){
				parseInt(contVogal)  
				contVogal+= 1				
			}
		if(palavra[i] == "1" || palavra[i] == "2"||palavra[i] 
			== "3"|| palavra[i] == "4"|| palavra[i] == "5" ||
			palavra[i] == "6" || palavra[i] == "7" || palavra[i] == "8"||
			palavra[i] == "9" || palavra[i] == "0"){
				parseInt(contNum)  
				contNum+= 1	
			}
		
	}	
		return p.innerHTML = contVogal + contNum

}