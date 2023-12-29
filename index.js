class Hero {
    constructor(name, age, type) {
        this.name = name
        this.age = age
        this.type = type
    }
    atacar(type) {
        if (type === "Guerreiro") {
            let ataque = "espada";
            console.log(`O ${type} atacou usando ${ataque}.`);
        } else if (type === "Mago") {
            let ataque = "magia";
            console.log(`O ${type} atacou usando ${ataque}.`)
        } else if (type === "Monge") {
            let ataque = "artes marciais";
            console.log(`O ${type} atacou usando ${ataque}.`)
        } else {
            let = "shuriken"
            console.log(`O ${type} atacou usando ${ataque}.`)
        }
    }
}
let hero1 = new Hero("Lothar", 30, "Guerreiro");
let hero2 = new Hero("Merlin", 100, "Mago");
let hero3 = new Hero("Chen", 50, "Monge");
let hero4 = new Hero("Naruto", 20, "Ninja");
console.log(hero1);
console.log(hero2);
console.log(hero3);
console.log(hero4);