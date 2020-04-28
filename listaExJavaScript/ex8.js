var listaAlunos = [{aluno: "Artur", num:01},
				   {aluno: "Bianca", num:02},
				   {aluno: "Carlos", num:03},
				   {aluno: "Daniel", num:04},
				   {aluno: "Eduardo", num:05},
				   {aluno: "Fátima", num:06}]

function montaTabela(){
	var tbody = document.getElementById("tbody")
	for(var i = 0; i < listaAlunos.length; i++){
		var tr = tbody.insertRow(i)
		var tdAluno = tr.insertCell(0)
		var tdNum = tr.insertCell(1)
		tdAluno.innerHTML = listaAlunos[i].aluno
		tdNum.innerHTML = listaAlunos[i].num
		}
}