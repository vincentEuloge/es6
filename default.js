var creerSalutation = function(nom){
    return "salut " + nom;
}
console.log(creerSalutation()) // salut undefined

var creerSalutationDefault = function(nom = "jeune inconnu"){
    return "salut " + nom;
}
console.log(creerSalutationDefault()) // salut jeune inconnu
console.log(creerSalutationDefault("toi")) // salut toi