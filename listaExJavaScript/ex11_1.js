function verification(palavra){
	var p = document.getElementById("p")
	var contA = 0
	var conta = 0
	var palavra = document.getElementById("palavra").value
	for(var i = 0; i < palavra.length; i++){
		if(palavra[i] == "A"){
			contA += 1	
		}
		if(palavra[i] == "a"){
			conta += 1			
		}		
	}
	var totalAa = contA + conta
	console.log(totalAa)
	p.innerHTML = "contem "+totalAa+ " letras A"
}
