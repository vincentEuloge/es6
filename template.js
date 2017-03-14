// plus besoin de se prendre la tête avec la concatenation de string
const PI = 3.14;
const mathematicien = "Pythagore";
console.log("le nombre " + PI + " a été découvert par " + mathematicien)

// maintenant on a le templating
console.log(`le nombre ${PI} a été découvert par ${mathematicien}`)

//Sur lesquel on peut apposer des opération
function tag(strings, ...variables){
    if (variables[0] === 3.14) variables[1] = "Archimède"
    return `${strings[0]}${variables[0]}${strings[1]}${variables[1]}`
}
console.log(tag`le nombre ${PI} a été découvert par ${mathematicien}`)
