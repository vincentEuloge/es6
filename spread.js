// le spread operator ... sert soit à exploser un tableau de N element en N element individualisé
// soit à regrouper un nombre d'element N en un tableau de N element

const monTabToExploded = [1,2,3];

console.log("sans exploser", monTabToExploded)
console.log("en l'explosant", ...monTabToExploded)

// ça falicite pas mal de chose du style la concaténation.
const unDeuxiemeTab = [4, 5, 6];

const unTroisieme = [...monTabToExploded, ...unDeuxiemeTab]
console.log(unTroisieme)

// ou alors
monTabToExploded.push(...unTroisieme)
console.log(monTabToExploded)

//Avec les fonction
function attendTroisParam(a, b, c){
    console.log(a+b+c)
}
attendTroisParam(...unDeuxiemeTab)

//Mais on peut faire l'inverse lorsqu'on ne connait pas le nombre de param
function attendNParams(...desParams){
    console.log(desParams.length)
}
attendNParams(1, 2, 9, 11)

//Et on peut regrouper pour destructurer
function attendNParamsADestruct(...desParams){
    console.log(Math.max(...desParams))
}
attendNParamsADestruct(1, 2, 9, 11)