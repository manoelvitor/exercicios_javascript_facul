
 
 function verification(palavra){
	var palavra = document.getElementById("palavra").value
	var tbody = document.getElementById("tbody")
	var tr = document.createElement("tr")
	var tdPalavra = document.createElement("td")
	var tdQt = document.createElement("td")
	tr.appendChild(tdPalavra)
	var qntA = 0

	for(var i = 0; i < palavra.length;i++){
		if(palavra[i] == "a" or palavra[i] == "A"){
			var qntA += 1
		}
		tdQt.innerHTML = qntA
		tr.appendChild(tdQt)
		
	}	
	
	
	tbody.appendChild(tr)

	 
 }