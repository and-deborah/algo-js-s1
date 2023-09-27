let a = 3

while (a < 9) {
    a++ // pas de } ici, sinon la boucle ne s'effectuera que jusqu'ici

    if (a == 8) {
        break // pour stopper la boucle
    }
    if (a == 7) {
        continue // pour revenir au début de la boucle
    }

console.log(a)
} // là on peut fermer

