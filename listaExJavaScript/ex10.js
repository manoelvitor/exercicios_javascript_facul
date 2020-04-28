var vetor = ["System Of A Down","Faith No More","Rage Agaist The Machine",
			"Bad Religion","Dead Fish","Slipknot","Arch Enemy",
			"Bullet For My Valentine","Ratos de Porão","Pense",
			"Sugar Kane","Rancore"]
function listaBandas(){
	for(var i = 0; i < vetor.length; i++){
		document.write(i+" "+vetor[i]+"<br>")
	}
}