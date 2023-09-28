// EXEMPLE TYPE

class hero{
    constructor(name, attack, pv){ // Paramètres de la classe
        this.name = name  // OBLIGER DE METTRE CE GENRE DE LIGNE POUR CHAQUE PARAMETRE
        this.attack = attack
        this.pv = pv
    }

    getLife(){
        console.log(this.pv)
    }

    attackMonster(monster){
        monster.pv -= this.attack
    }
}

class monsters{
    constructor(pv, attack){
        this.pv = pv
        this.attack = attack
    }
}


let Reinor = new hero("Reinor", 25, 300) // Pour créer une nouvelle instance
let gnome = new monsters(100, 20)

if (gnome.pv -= Reinor.attack <= 0){
    console.log("Le gnome est mort.")
}




// EXERCICE 8

class pokemon{ 
    constructor(name, attack, defense, hp, luck){ 
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }
}

let Flambusard = new pokemon("Flambusard", 36, 22, 100, 0.5)
let Absol = new pokemon("Absol", 32, 25, 100, 0.6)



console.log(Flambusard)
console.log(Absol)


function attackPokemon(pokemonOne, pokemonTwo){
    damage = pokemonOne.attack - pokemonTwo.defense
    pokemonTwo.hp -= damage
    return damage
}


/*function isLucky(pokemonOne, pokemonTwo){
    randomLuck = Math.random()
    if pokemonOne.luck > randomLuck{
        attackPokemon(pokemonOne, pokemonTwo)
    }
}*/



while (Flambusard.hp > 0 || Absol.hp > 0) {
    attackPokemon(Flambusard, Absol)
    console.log("Flambusard attaque Absol !")
    console.log(Absol.name + " " + "a subi" + " "+ damage + " " + "dégâts, " + "il lui reste" + " " + Absol.hp + " " + "PV")
    if (Absol.hp <= 0){
        console.log("Absol ne peut plus continuer le combat !")
        console.log("Flambusard est le vainqueur de ce duel !")
        break
        }
    attackPokemon(Absol, Flambusard)
    console.log("Absol attaque Flambusard !")
    console.log(Flambusard.name + " " + "a subi" + " "+ damage + " " + "dégâts, " + "il lui reste" + " " + Flambusard.hp + " " + "PV")
    if (Flambusard.hp <= 0){
        console.log("Flambusard ne peut plus continuer le combat !")
        console.log("Absol est le vainqueur de ce duel !")
        break
        }
    else{
        continue
    }
}

