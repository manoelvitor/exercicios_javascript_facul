var lista = []
function numPares(){
	var p = document.getElementById("p")	
	var p1 = document.getElementById("p1")	
	var num = document.getElementById("num")
	lista.push(num.value)
	p.innerHTML = lista
	var numPares = 0
	for(var i = 0; i < lista.length; i++){
		if(lista[i] % 2 ==0){
			numPares += 1
		}		
	}	
	p1.innerHTML = "O vetor tem " + numPares + " numeros pares"
}	
	