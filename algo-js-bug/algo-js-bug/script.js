



let users = ["Stéphanie", "Gaïa", "Etienne", "Michel", "Roberto", "Julie"]  // faute ici

console.log(users)

function countCharacter(value) {  // faute ici
    return value.length
}

users.forEach(user => { 
    if (countCharacter(user) > 5) {  // fautes ici
        console.log("c'est un prénom long de plus de 5 lettres.")  // faute ici
    } else {
        console.log("ce n'est pas du tout un prénom long.")
    }
})





