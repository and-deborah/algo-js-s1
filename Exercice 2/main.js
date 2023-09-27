var a = 4 // ces variables auraient pu être notées const
var b = 4
var c = 3

switch(a) { // pour déclarer l'expression de référence
    case b :
        console.log("égal à b")
        break
    case c :
        console.log("égal à c")
        break
    default :
    console.log("égal à rien")
}