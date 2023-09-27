class hero{
    constructor(name, attack, pv){ // Paramètres de la classe
        this.name = name  // OBLIGER DE METTRE CETTE LIGNE POUR CHAQUE CONSTRUCTEUR
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


let Reinor = new hero("Reinor", 25, 300) //Pour créer une nouvelle instance
let gnome = new monsters(100, 20)

if (gnome.pv -= Reinor.attack <= 0){
    console.log("Le gnome est mort.")
}



//TOUJOURS TESTER PETIT A PETIT

class pokemon{ // luck est une valeur entre 0 et 1. On en définit une par défaut, puis on en génère une nouvelle à l'aide de Math.random()
    constructor(name, attack, defense, hp, luck){ // qu'on affectera a une variable réutilisable (tout ça dans la fonction isLucky)
        // isLucky compare luck à la valeur randomisée générée avec Math.random
        this.name = name // si luck < random.value ---> True (donc le Pokémon attaque)
        this.attack = attack // sinon ---> False (donc le Pokémon skip son tour)
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }
}
let Flambusard = new pokemon("Flambusard", 30, 20, 300, 0.5)
let Absol = new pokemon("Absol", 27, 23, 300, 0.6)
let dmg = 0


function attackPokemon(hp, attack, defense, dmg){
    hp = this.hp - this.attack
    dmg = this.attack - this.defense
    // return quoi au juste? check ça plus tard
}


while (Flambusard.hp > 0 || Absol.hp > 0) {
    attackPokemon(Absol.hp, Flambusard.attack)
    console.log(Absol.name + " " + "a subi" + " "+ dmg + " " + "dégâts, " + "il lui reste" + " " + Absol.hp + " " + "PV")
    if (Absol.hp < 0){
        break
    } else {
        attackPokemon(Flambusard.hp, Absol.attack)
        console.log(Flambusard.name + " " + "a subi" + " "+ dmg + " " + "dégâts, " + "il lui reste" + " " + Flambusard.hp + " " + "PV")
    }
}

