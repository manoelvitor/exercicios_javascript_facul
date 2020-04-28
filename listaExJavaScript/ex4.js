function colorP(){ 
 var a1 = document.getElementById("a1")
 var a2 = document.getElementById("a2")
 if(a1.innerHTML.length < a2.innerHTML.length){
	a1.style.color = "red"
	a2.style.color = "green"
 }
 else{
	a1.style.color = "green"
	a2.style.color = "red"
 }
 
}