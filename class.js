// avant pour crée un model on faisait
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getName = function() {
  return this.firstName + " " + this.lastName;
}

let bibi = new Person("bibi", "phoque")
console.log(bibi.getName())

//il y avait différente méthode pour crée des models et encore plus pour faire de l'héritage
//Maintenanant

class Person2{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getName(){
        return `${this.firstName} ${this.lastName}`
    }
}

let superman = new Person2("super", "man")
console.log(superman.getName())

//On peut aisément etendre une class
class MalePerson extends Person2{
    constructor(firstName, lastName, size){
        super(firstName, lastName)
        this.size = size;
    }
    getName(){
        return `${super.getName()} and i'm a ${this.size} male`
    }
}

let ironman = new MalePerson("iron", "man", "big")
console.log(ironman.getName())