nameList = [Nerd, Insomniac, Thinker, Noob, Speedrunner, Cheater, Pro, Crybaby, Tanker, Brute]
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
}












let jason = new killer("Jason", 100)


let survivorOne = new survivor(nameList[(Math.floor(Math.random() * nameList.length))], 0.3, 0.5, deadlyAttack[(Math.floor(Math.random() * deadlyAttack.length))] )

let survivorTwo = new survivor(nameList[(Math.floor(Math.random() * nameList.length))], 0.7, 0.35, deadlyAttack[(Math.floor(Math.random() * deadlyAttack.length))])

let survivorThree = new survivor(nameList[(Math.floor(Math.random() * nameList.length))], 0.5, 0.2, deadlyAttack[(Math.floor(Math.random() * deadlyAttack.length))])

let survivorFour = new survivor(nameList[(Math.floor(Math.random() * nameList.length))], 0.9, 0.9, deadlyAttack[(Math.floor(Math.random() * deadlyAttack.length))])

let survivorFive = new survivor(nameList[(Math.floor(Math.random() * nameList.length))], 0.1, 0.3, deadlyAttack[(Math.floor(Math.random() * deadlyAttack.length))])