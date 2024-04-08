// Desafio Partidas 

let Heroi = "Geovani"
let vitorias = 40
let derrotas = 10
let resultado = subtracao (vitorias, derrotas)


function subtracao (vitorias, derrotas){
    let resultado = (vitorias - derrotas)
    return resultado
}

if (vitorias<=10){
    nivel= "ferro"
}
else if(vitorias=11 && vitorias<=20){
    nivel= "Bronze"
}
else if(vitorias=21 && vitorias<=50){
    nivel="Prata"
}
else if(vitorias=51 && vitorias<=80){
    nivel="Ouro"
}
else if(vitorias=81 && vitorias<=90){
    nivel="Diamante"
}
else if(vitorias=91 && vitorias<=100){
    nivel="Lendario"
}

else if(vitorias>=100){
    nivel="Imortal"
}
   

console.log("O Guerreiro "  +  Heroi  +  " tem saldo de " + resultado + " vitorias e está no nivel " + nivel + ".")





