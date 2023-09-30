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
    0.001,
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


    dying(survivorsList, victimsList){
        if (this.ripRate > Math.random()){
            victimsList.push(this.name)
            console.log(this.name + " est mort sous l'attaque de " + killer.name + ".")
            survivorsList.splice(indexOf(this.name), 1)
        }
    }


    dodge(){
        if (this.atkRate > Math.random()){
            killer.hp -= 10
            console.log(this.name + " esquive l'assaut de " + killer.name + " et lui inflige 10 dégâts en retour!")
        }
    }



    lastStraw(survivorsList, victimsList){
        if (this.atkButRip > Math.random()){
            killer.hp -= 15
            victimsList.push(this.name)
            console.log(this.name + " a utilisé ses dernières forces pour infliger 15 points de dégâts à " + killer.name + ".")
            survivorsList.splice(indexOf(this.name), 1)
        }
    }

}


let jason = new killer("Jason", 100)

let survivorOne = new survivor(nameList[(Math.floor(Math.random() * nameList.length))], 0.3, 0.5, deadlyAttack[(Math.floor(Math.random() * deadlyAttack.length))] )

let survivorTwo = new survivor(nameList[(Math.floor(Math.random() * nameList.length))], 0.7, 0.35, deadlyAttack[(Math.floor(Math.random() * deadlyAttack.length))])

let survivorThree = new survivor(nameList[(Math.floor(Math.random() * nameList.length))], 0.5, 0.2, deadlyAttack[(Math.floor(Math.random() * deadlyAttack.length))])

let survivorFour = new survivor(nameList[(Math.floor(Math.random() * nameList.length))], 0.9, 0.9, deadlyAttack[(Math.floor(Math.random() * deadlyAttack.length))])

let survivorFive = new survivor(nameList[(Math.floor(Math.random() * nameList.length))], 0.1, 0.3, deadlyAttack[(Math.floor(Math.random() * deadlyAttack.length))])

survivorsList = [
    survivorOne,
    survivorTwo,
    survivorThree,
    survivorFour,
    survivorFive]

victimActions = [  // COMMENT JE STOCKE MES FONCTIONS DANS UNE LISTEEEEEEE ???????????????
    dying(survivorsList, victimsList),
    dodge(),
    lastStraw(survivorsList, victimsList)]


/*var victimActions = {
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



while (killer.hp > 0 || survivorsList != []) {
    victim = survivorsList[(Math.floor(Math.random() * survivorsList.length))]  // Jason choisit sa prochaine victime (vivante bien sûr)
    console.log(killer.name + " attaque " + victim + "!")
    victimActions[(Math.floor(Math.random() * victimActions.length))]   // déclenche une attaque contre la victime à l'aide de la liste victimActions !!!!!!!!!! A MODIFIERRRRRR!!!!!!!!!!!!
    if (killer.hp <= 0 && survivorsList != []) {
        console.log("La team de choc a réussi à tuer " + killer.name + "! Mais prenons le temps d'appuyer sur F pour les membres qui se sont sacrifiés pour la bonne cause : " + victimsList)
        break
    }
    else if (killer. hp > 0 && survivorsList == []) {
        console.log("La team n'a pas réussi à tuer " + killer.name + " et se sont fait complètement annihiler, laissant " + killer.name + " continuer sa cavale...")
        break
    }
    else{
        continue
    }
}