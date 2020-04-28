function somarP(){
	var a1 = document.getElementById("a1")
	var a2 = document.getElementById("a2")
	var res = document.getElementById("res")
	if (a1.innerHTML > 0 && a2.innerHTML > 0){
	res.innerHTML = parseInt(a1.innerHTML) + parseInt(a2.innerHTML)
	}
 }      