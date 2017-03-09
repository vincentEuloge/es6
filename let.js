// pas grand chose à dire si ce n'est qu'on a le mot clé let
// qui a une notion de scope que var n'a pas
// Avant
var noScope = "ici";
{
    var noScope = "laMeme";
}
console.log(noScope); // laMeme

// Maintenant
let scope = "ici";
{
    let scope = "laMeme";
}
console.log(scope); //ici

// Conclusion, pour eviter toute surprise ne plus utiliser var, never!