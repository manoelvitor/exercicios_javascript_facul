var n=0
function num(){	
	var div1 = document.getElementById("div1")
	n +=1
	if(n%2==0){
		div1.style.backgroundColor = "red"
	}
	else{
		div1.style.backgroundColor = "yellow"
	}
	
}
setInterval(num,400)




