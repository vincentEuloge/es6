var creerSalutation = function(nom){
    return "salut " + nom;
}
console.log(creerSalutation("vincent"));

// les arrow fonction permettent d'écrire du code plus concis
var creerSalutationArrow =  nom => "salut " + nom;
console.log(creerSalutationArrow("vincent"));

// si plus d'un param, alors mettre des parenthese
var creerDoubleSalutationArrow =  (nom1, nom2) => "salut " + nom1 + " et " + nom2;
console.log(creerDoubleSalutationArrow("céline", "vincent"));

// l'arrow fonction est aussi utile pour le fameux this
// Avant, sans le that = this, et en mettant this.age, le this serait le context de newScope
var monObject = {
    age : 34,
    showAge : function(){
        var that = this;
        setTimeout(function newScope(){
            console.log(that.age);
        });
    }
}
monObject.showAge();
// Apres, le context de mon arrow function est celui de showAge qui est bien celui de mon objet
// A noter, si une arrow n'a pas de param, il faut mettre les parenthese, et si elle ne retourne rien, mettre des crochet
var monObjectArrow = {
    age : 34,
    showAge : function(){
        setTimeout(() => { console.log(this.age) });
    }
}
monObjectArrow.showAge();