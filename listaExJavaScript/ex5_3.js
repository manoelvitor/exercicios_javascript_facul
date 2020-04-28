var lista = [1, 5, 9, -2, -8, 7, -6, 0, -9, 3]
document.write(lista)

function porcNegativos(lista){
	//var ContPositivo = 0
	var contNegativo = 0	
	for(var i = 0; i < lista.length; i++){	
		if(lista[i] < 0){
			contNegativo += 1
		}			
	}
	var res = contNegativo*lista.length/100
	if (lista.length <= 10){
			var res = (contNegativo*lista.length/100)*100
		console.log(res)
	}
document.write("<br>"+"Esse vetor tem " + res + "% de numeros negativos")

}