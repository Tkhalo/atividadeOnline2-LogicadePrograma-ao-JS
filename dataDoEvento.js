//código para a condicional do cadastro do Evento

let dataDoEvento = new Date ("2021/10/05")
let hoje = new Date ();
let nomeDoEvento = "Tips for Frontend devs" 
let nomePalestrante = "Joanna Otmianowska"

if (dataDoEvento <= hoje) {
	console.log("A data do evento é inválida!")
} else { 
	console.log("Evento " + nomeDoEvento + " cadastrado! Ministrado por " + nomePalestrante) ;
}