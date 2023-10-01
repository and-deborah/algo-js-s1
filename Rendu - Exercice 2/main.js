nameList = [
    "Nerd",
    "Hermit",
    "Thinker",
    "Noob",
    "Pro",
    "Veteran",
    "Speedrunner",
    "Tryharder",
    "Troller",
    "Hacker",
    "Teamer",
    "Toxic",
    "Crybaby",
    "Simp",
    "Mod",
    "Admin",
    "God"]


deadlyAttack = [
    0.7,
    0.5,
    0.8,
    0.666,
    0.25]


victimsList = []


class killer {
    constructor (name, hp){
        this.name = name
        this.hp = hp
    }
}

class survivor {
    constructor (name, ripRate, atkRate, atkButRip){
        this.name = name
        this.ripRate = ripRate
        this.atkRate = atkRate
        this.atkButRip = atkButRip
    }
}


// ---> Hors de la classe survivor (j'y arrivais pas sans, désolé)

function dying(hero, villain, survivorsList, victimsList){
    randomOne = Math.random()
    if (hero.ripRate > randomOne){
        victimsList.push(hero.name)
        console.log(hero.name + " est mort sous l'attaque de " + villain.name + ".")
        survivorsList.splice(indexOf(hero.name), 1)
    }
}


function dodge(hero, villain){
    randomTwo = Math.random()
    if (hero.atkRate > randomTwo){
        villain.hp -= 10
        console.log(hero.name + " esquive l'assaut de " + villain.name + " et lui inflige 10 dégâts en retour!")
    }
}



function lastStraw(hero, villain, survivorsList, victimsList){
    randomThree = Math.random()
    if (hero.atkButRip > randomThree){
        villain.hp -= 15
        victimsList.push(hero.name)
        console.log(hero.name + " a utilisé ses dernières forces pour infliger 15 points de dégâts à " + villain.name + ".")
        survivorsList.splice(indexOf(hero.name), 1)
    }
}


let jason = new killer("Jason", 100)

let survivorOne = new survivor(nameList[(Math.floor(Math.random() * nameList.length))], 0.3, 0.5, deadlyAttack[(Math.floor(Math.random() * deadlyAttack.length))] )

let survivorTwo = new survivor(nameList[(Math.floor(Math.random() * nameList.length))], 0.7, 0.35, deadlyAttack[(Math.floor(Math.random() * deadlyAttack.length))])

let survivorThree = new survivor(nameList[(Math.floor(Math.random() * nameList.length))], 0.5, 0.2, deadlyAttack[(Math.floor(Math.random() * deadlyAttack.length))])

let survivorFour = new survivor(nameList[(Math.floor(Math.random() * nameList.length))], 0.9, 0.9, deadlyAttack[(Math.floor(Math.random() * deadlyAttack.length))])

let survivorFive = new survivor(nameList[(Math.floor(Math.random() * nameList.length))], 0.1, 0.3, deadlyAttack[(Math.floor(Math.random() * deadlyAttack.length))])

survivorsList = [
    survivorOne.name,
    survivorTwo.name,
    survivorThree.name,
    survivorFour.name,
    survivorFive.name]


// Ci-dessous, les lignes qui font tout malfonctionner
victimActions = [
    dying(survivor.name, jason),
    dodge(survivor.name, jason),
    lastStraw(survivor.name, jason)]


console.log("Notre team de choc est composée de " + survivorsList)


while (jason.hp > 0 || survivorsList != []) {
    victim = survivorsList[(Math.floor(Math.random() * survivorsList.length))] // on choisit une victime vivante
    console.log(jason.name + " attaque " + victim + "!")
    victimActions[(Math.floor(Math.random() * victimActions.length))]  // LIGNE PROBLEMATIQUE
    if (jason.hp <= 0 && survivorsList != []) {
        console.log("La team de choc a réussi à tuer " + jason.name + "! Mais prenons le temps d'appuyer sur F pour les membres qui se sont sacrifiés pour la bonne cause : " + victimsList)
        break
    }
    else if (jason. hp > 0 && survivorsList == []) {
        console.log("La team n'a pas réussi à tuer " + jason.name + " et se sont fait complètement annihiler, laissant " + jason.name + " continuer sa cavale...")
        break
    }
    else{
        continue
    }
}




// Toutes les tentatives ratées, dans l'espoir de randomiser le choix de fonction

/* "Stockage" de fonctions dans un array (n'a jamais été design pour fonctionner avec une telle syntaxe)

victimActions = [
    dying(),
    dodge()),
    lastStraw()]
*/


/* J'avais aussi essayé cette technique de "stockage" recommandée par des utilisateurs de StackOverflow, mais même ça j'ai raté

var victimActions = {
    dying : function() {
        if (this.ripRate > Math.random()){
            victimsList.push(this.name)
            console.log(this.name + " est mort sous l'attaque de " + killer.name + ".")
            survivorsList.splice(indexOf(this.name), 1)
        }
    },

    dodge : function(){
        if (this.atkRate > Math.random()){
            killer.hp -= 10
            console.log(this.name + " esquive l'assaut de " + killer.name + " et lui inflige 10 dégâts en retour!")
        }
    },

    lastStraw : function(){
        if (this.atkButRip > Math.random()){
            killer.hp -= 15
            victimsList.push(this.name)
            console.log(this.name + " a utilisé ses dernières forces pour infliger 15 points de dégâts à " + killer.name + ".")
            survivorsList.splice(indexOf(this.name), 1)
        }
    }
}
*/