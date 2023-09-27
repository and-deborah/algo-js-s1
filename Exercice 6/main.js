for(let i = 0; i < numbers.length; i++){
    numbers[i] += 12
    console.log(numbers)
}

let bag = ["ordi", "portable", "bouffe"]
console.log(bag) 

bag.push("chargeur") // pour ajouter un élément dans une liste
console.log(bag)

bag.splice(2,2)  // pour supprimer un élément : on indique de quel index à quel index on veut supprimer (ici, je supprime "bouffe")
console.log(bag)