function verification(palavra){
	var palavra = document.getElementById("palavra").value
	var tbody = document.getElementById("tbody")
	var tr = document.createElement("tr")
	var tdPalavra = document.createElement("td")
	var tdQt = document.createElement("td")
	var tdPc = document.createElement("td")
	var qntA = 0
	for(var i = 0; i < palavra.length;i++){
		if(palavra[i] == "a" || palavra[i] == "A" ){
			qntA += 1
		}	
	}
	tdQt.innerHTML = qntA
	tdPalavra.innerHTML = palavra
	tr.appendChild(tdPalavra)
	tr.appendChild(tdQt)	
	var pc = (100/palavra.length)*qntA
	console.log(pc)
	tdPc.innerHTML = pc +"%"
	tr.appendChild(tdPc)	
	tbody.appendChild(tr)
}