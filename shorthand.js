let pi = 3.14
const nom = "pythagore"

//avant
let mathematicien = {
    nom : nom,
    pi : pi
};
console.log(mathematicien.nom, mathematicien.pi);

//Maintenant
let mathematicienNewWAy = {nom, pi};
console.log(mathematicienNewWAy.nom, mathematicienNewWAy.pi);

// on peut gagner quelque caractére et donc gagner en maintenabilité
// mais on peut se retrouver avec de cas asymétrique, beaucoup moins lisible

//avant
mathematicien = {
    nom : nom,
    pi : pi,
    ville : "athenes"
};

//Maintenant
//avant
mathematicienNewWAy = {
    nom,
    pi,
    ville : "athenes"
};
console.log(mathematicienNewWAy);

// ça marche aussi avec les fonction
let equation = (a, b) => a*a + b*b;
mathematicienNewWAy = {
    nom,
    pi,
    equation,
    ville : "athenes"
};
console.log(mathematicienNewWAy.equation(2,3));

// pour les fonction on peut les declarer d'une autre façon
mathematicienNewWAy = {
    nom,
    pi,
    equationShort(a, b) {
        return a*a + b*b + this.pi;
    },
    ville : "athenes"
};
console.log(mathematicienNewWAy.equationShort(2,3));

// ce qui se cache derriere cette nouvelle façon d'écrire permet les clé d'objet programatique
const propManquante = "propOublie";
mathematicienNewWAy = {
    nom,
    pi,
    equation,
    [propManquante] : "pas important",
    ville : "athenes"
};
console.log(mathematicienNewWAy);
