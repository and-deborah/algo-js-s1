nameList = [Nerd, Insomniac, Thinker, Noob, Speedrunner, Cheater, Pro, Crybaby, Tanker, God]
deadlyAttack = [0.001, 0.5, 0.8, 0.666, 0.25]



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


    dying(survivorList){
        if (this.ripRate > Math.random()){
            survivorList.splice(indexOf(this.name), 1)
            console.log(this.name + " est mort sous l'attaque de " + killer.name + ".")
        }
    }


    dodge(){
        if (this.atkRate > Math.random()){
            killer.hp -= 10
            console.log(this.name + " esquive l'assaut de " + killer.name + " et lui inflige 10 dégâts en retour!")
        }
    }



    lastStraw(survivorList){
        if (this.atkButRip > Math.random()){
            killer.hp -= 15
            survivorList.splice(indexOf(this.name), 1)
            console.log(this.name + " a utilisé ses dernières forces pour infliger 15 points de dégâts à " + killer.name + ".")
        }
    }

}



victimActions = [dying(survivorList), dodge(), lastStraw(survivorList)]

victimActions[(Math.floor(Math.random() * victimActions.length))]



/* POUR CODER LES ATTAQUES DE JASON :
FAIRE UN PICK RANDOM SUR L'UN DES SURVIVANTS PRESENTS DANS LA LISTE "survivorList"
La ligne de code en question :  victim = survivorList[(Math.floor(Math.random() * survivorList.length))]



while killer.hp > 0 || survivorList != [] {
    victim = survivorList[(Math.floor(Math.random() * survivorList.length))]
    console.log(killer.name + " attaque " + victim + "!")
    victimActions[(Math.floor(Math.random() * victimActions.length))]   # déclenche une attaque contre la victime à l'aide de la liste victimActions 
    
}

*/








let jason = new killer("Jason", 100)


let survivorOne = new survivor(nameList[(Math.floor(Math.random() * nameList.length))], 0.3, 0.5, deadlyAttack[(Math.floor(Math.random() * deadlyAttack.length))] )

let survivorTwo = new survivor(nameList[(Math.floor(Math.random() * nameList.length))], 0.7, 0.35, deadlyAttack[(Math.floor(Math.random() * deadlyAttack.length))])

let survivorThree = new survivor(nameList[(Math.floor(Math.random() * nameList.length))], 0.5, 0.2, deadlyAttack[(Math.floor(Math.random() * deadlyAttack.length))])

let survivorFour = new survivor(nameList[(Math.floor(Math.random() * nameList.length))], 0.9, 0.9, deadlyAttack[(Math.floor(Math.random() * deadlyAttack.length))])

let survivorFive = new survivor(nameList[(Math.floor(Math.random() * nameList.length))], 0.1, 0.3, deadlyAttack[(Math.floor(Math.random() * deadlyAttack.length))])

survivorList = [survivorOne, survivorTwo, survivorThree, survivorFour, survivorFive]