/*let dndCharProfile = {
    name : "Reinor",
    level : 6,
    class : "Paladin",
    atk : 25,
    def : 12.5,
    isAlive : false,
    inventory : ["water", "sword", "shield"]
}

let sentence = "Mon personnage a " + dndCharProfile.atk+ " d'attaque." //pour récupérer une clé en particulier. Ici, je récupère la valeur de atk
console.log(sentence)


EXERCICE 7
creer un profil (=objet) pr un personage.
Il doit y avoir au moins 3 clés : firstName, lastName, age (EN ANGLAIS)
puis afficher dans la console une phrase mettant "Prénom + Nom + 'a' + âge + ' et étudie à l'IIM' " */

let studentProfile = {
    firstName : "Déborah",
    lastName : "Andriamananjara",
    age : 18
}
let sentence = studentProfile.firstName + " " + studentProfile.lastName + " " + "a" + " " + studentProfile.age + " "+ "ans" + " " + "et étudie à l'IIM."

console.log(sentence)