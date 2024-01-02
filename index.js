class Hero {

    constructor(name, age, type) {
        this.name = name
        this.age = age
        this.type = type
    }

    atacar() {

        let ataque = "";

        if (this.type === "Guerreiro") {
            ataque = "espada";
            console.log(`O ${this.type} atacou usando ${ataque}.`);
        } else if (this.type === "Mago") {
            ataque = "magia";
            console.log(`O ${this.type} atacou usando ${ataque}.`);
        } else if (this.type === "Monge") {
            ataque = "artes marciais";
            console.log(`O ${this.type} atacou usando ${ataque}.`);
        } else {
            ataque = "shuriken";
            console.log(`O ${this.type} atacou usando ${ataque}.`);
        };

    };

};

let hero1 = new Hero("Lothar", 30, "Guerreiro");
let hero2 = new Hero("Merlin", 100, "Mago");
let hero3 = new Hero("Chen", 50, "Monge");
let hero4 = new Hero("Naruto", 20, "Ninja");

console.log(hero1.atacar());
console.log(hero2.atacar());
console.log(hero3.atacar());
console.log(hero4.atacar());