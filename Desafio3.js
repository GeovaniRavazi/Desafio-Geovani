//Desafio Batalha Final

class Heroi{
	constructor(nome, idade, tipo){
    	this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        }


atacar() {
    let ataque;
    if (this.tipo === "Mago") {
            ataque = "magia";
    }
    else if(this.tipo === "Guerreiro"){
            ataque = "espada";
    }
    else if(this.tipo === "Monge"){
        ataque = "artes marciais";
    }
    else if(this.tipo === "Ninja"){
        ataque = "Fatality";
    }
    
    console.log(`"${this.nome}" tem ${this.idade} anos é um ${this.tipo} que atacou usando ${ataque}.`);
 }

}

const HeroiPlay1 = new Heroi("Merlin",350,"Mago");
const HeroiPlay2 = new Heroi("Takeda", 32, "Guerreiro");
const HeroiPlay3 = new Heroi("Buda", 2030, "Monge");
const HeroiPlay4 = new Heroi("Sub-Zero", 60, "Ninja");

HeroiPlay1.atacar()
HeroiPlay2.atacar()
HeroiPlay3.atacar()
HeroiPlay4.atacar()

