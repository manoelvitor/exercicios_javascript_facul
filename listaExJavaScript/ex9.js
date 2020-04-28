function validatorEmail(){
	var email = document.getElementById("email")
	var p = document.getElementById("p")
	var validador = email.value.search("@")
	if(validador >0){
		p.innerHTML = email.value
			
	}
	else{
		email.style.backgroundColor="#ffe6e6"
		alert("EMAIL INVALIDO")	
	}		
}