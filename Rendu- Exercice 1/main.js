playlist = ["Usseewa - Ado", "Adventure of a Lifetime - Coldplay", "Butter - BTS", "Bohemian Rhapsody - Queen", "Anissa - Wejdene"]  // index 0 --> 4


class character {  
    constructor(name, sanity){
        this.name = name
        this.sanity = sanity
    }   


    journey(playlist, trafficLights, taxiSwap, currentMusic) {
        trafficLights = 0
        taxiSwap = 0
        while (trafficLights < 30 && this.sanity > 0){
            trafficLights += 1
            currentMusic = playlist[(Math.floor(Math.random() * playlist.length))]
            console.log(currentMusic + " est jouée à la radio...")

            if (currentMusic === playlist[4]) {
                this.sanity -= 1
                taxiSwap += 1
                if (this.sanity === 0){
                    console.log(this.name + " n'en peut plus d'entendre Anissa. " + this.name + " finit par exploser au bout de " + trafficLights + " feux.")
                    break  // "break" ne marche que dans une boucle WHILE
                } else{
                    console.log(this.name + " n'apprécie pas " + currentMusic +" , il change de taxi...")
                }
            } else{
                console.log(" Phew, pour une fois que ce n'est pas Anissa... il semble que " + this.name + " pourra rester dans ce taxi jusqu'au prochain feu...")
            }
       
            
            if (trafficLights === 30){
                console.log(this.name + " est bien arrivé à la maison après avoir changé de taxi " + taxiSwap + " fois, GG à lui")
                break
            }
        }
    }
}


let john = new character("John", 10)

john.journey(playlist)
