/* numbers = [7, 49, 51, 18, 64]
for(let i = 0; i < numbers.length; i++){
    numbers[i] += 12
    console.log(numbers)
}

let bag = ["ordi", "portable", "bouffe"]
console.log(bag) 

bag.push("chargeur") // pour ajouter un élément dans une liste
console.log(bag)

bag.splice(2,2)  // pour supprimer un élément : on indique de quel index à quel index on veut supprimer (ici, je supprime "bouffe")
console.log(bag) */

let names = []

names.push("Vincent")
names.push("Paul")
names.push("Arthur")

for(let i = 0; i < names.length; i++) {
    names[i] += "va à la pêche"
    console.log(i)
}