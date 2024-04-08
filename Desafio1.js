// Projeto Heroi

let nomeDoHeroi = "Geovani"
let XpHeroi = 8000


if(XpHeroi<=1000){
    XpHeroi= "ferro"
}
else if(XpHeroi>=1001 && XpHeroi<=2000){
    XpHeroi= "Bronze"
}
else if(XpHeroi>=2001 && XpHeroi<=5000){
    XpHeroi="Prata"
}
else if(XpHeroi>=5001 && XpHeroi<=7000){
    XpHeroi="Ouro"
}
else if(XpHeroi>=7001 && XpHeroi<=8000){
    XpHeroi="Pratina"
}
else if(XpHeroi>=8001 && XpHeroi<=9000){
    XpHeroi="Ascendente"
}
else if(XpHeroi>=9001 && XpHeroi<=10000){
    XpHeroi="Imortal"
}
else if(XpHeroi=10000){
    XpHeroi="Radiante"
}
   
console.log ("O Heroi de nome "  +  nomeDoHeroi  +  " está no nivel " +  XpHeroi )




