
//variaveis sobre o evento que será cadastrado
let dataDoEvento = new Date ("2021/10/05")
let hoje = new Date ();
let nomeDoEvento = "Tips for Frontend devs" 
let nomePalestrante = "Joanna Otmianowska"

//condicional para o cadastro do evento
if (dataDoEvento <= hoje) {
	console.log("A data do evento é inválida!")
} else { 
	console.log("Evento " + nomeDoEvento + " cadastrado! Ministrado por " + nomePalestrante) ;
}

//condicional para a idade do participante
let idadeParticipante = 25

if (idadeParticipante >= 18) {
	console.log("Cadastro de Participante Permitido!")
	
} else {
	console.log("Cadastro Inválido! O participante deve ser maior de idade!")
}

//condicional para a quantidade de participantes permitida
let participantes = ["Ana", "Mia", "Victoria", "Yasmin"];
let quantidadeDeParticipantes =  participantes.length;

if (quantidadeDeParticipantes < 100) {
	participantes.push("Thamires");
    let vagasDisponiveis = 100 - participantes.length
	console.log("Os participantes cadastrados são: " + participantes + "\nTemos o total de " + participantes.length + " participantes cadastrados! \nVocê ainda pode cadastrar " + vagasDisponiveis + " participantes!" );
} else {
	console.log("Limite de Participantes excedido!");
}

