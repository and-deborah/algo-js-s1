var a = "Jean"  // let marche aussi
var b = "Paul"
var result

function checkName(name1, name2){
    if(name1 === name2){  // ou encore return (name1 === name2) DIRECTEMENT
        return true  // on peut y mettre n'importe quoi, comme par exemple return "Bonjour"
    } else {
        return false  // return "Pas bonjour"
    }
}

result = checkName(a, b)

console.log(result)