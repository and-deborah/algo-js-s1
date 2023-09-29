



let users = ["Stéphanie", "Gaïa", "Etienne", "Michel", "Roberto", "Julie"]  // faute ici

console.log(users)

function countCharacter(value) {  // faute ici
    return value.length
}

users.forEach(user => { 
    if (countCharacter(users) > 5) {  // faute ici
        console.log("c'est un prénom long de plus de 5 lettres.")  // faute ici
    } else {
        console.log("ce n'est pas du tout un prénom long.")
    }
})  // faute ici





