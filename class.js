// base class
class Animal{
    //Encapsulation : encapsulate  the properties of an animal
    constructor(name,specie){
        this.name = name
        this.specie = specie
        
    }
    //Abstraction : Abstract method that must be implemented by sub-classes
    getBone(){
        console.log(`${this.name} has a bone`)
    }

    //Abstraction : Abstract method that must be implemented by sub-classes
    getBlood(){
        console.log(`${this.name}  has blood in it`)
    }
    
    uniqueTrait(){
        console.log(`${this.name}  has a unique trait `)
    }
}

class Anthropoda extends Animal{
    // Inheritance: Inherit the properties of the Animal class
    constructor(name){
        super(name,'Anthropod')
        
    }

     // polymorphism : overide the getBone & getBlood methods in Animals
    getBone(){
        console.log(` ${this.name} does not have a Backbone`)
    }

    getBlood(){
        console.log(`${this.name} is Cold-Blooded`)
    }
    
    uniqueTrait(){
        console.log(`${this.name} Fly's `)
    }


}

class Fish extends Animal{
    constructor(name){
        super(name,'Fish')
    }

    getBone(){
        console.log(`${this.name } has a Backbone`)
    }

    getBlood(){
        console.log(`${this.name} is Cold-Blooded`)
    }

    uniqueTrait(){
        console.log(`${this.name}  Swim's `)
    }
}

class Amphibia extends Animal{
    constructor(name){
        super(name,'Amphibian')
    }

    getBone(){
        console.log(`${this.name} has a Backbone`)
    }

    getBlood(){
        console.log(`${this.name} is Cold-blooded`)
    }

    uniqueTrait(){
        console.log(`${this.name} Leaps `)
    }
}

class Reptilia extends Animal{
    constructor(name){
        super(name,'Reptile')
    }

    getBone(){
        console.log(`${this.name} has a Backbone`)
    }

    getBlood(){
        console.log(`${this.name} is Cold-blooded`)
    }

    uniqueTrait(){
        console.log(`${this.name} Crawl's `)
    }
}

class Aves extends Animal{
    constructor(name){
        super(name,'Ave')
    }

    getBone(){
        console.log(`${this.name} has a Backbone`)
    }

    getBlood(){
        console.log(`${this.name} is Warm-blooded`)
    }

    uniqueTrait(){
        console.log(`${this.name} Fly's `)
    }
}

class Mammalia extends Animal{
    constructor(name){
        super(name,'Mammal')
    }

    getBone(){
        console.log(`${this.name} has a Backbone`)
    }

    getBlood(){
        console.log(`${this.name} is Warm-blooded`)
    }

    uniqueTrait(){
        console.log(`${this.name}  partakes in Gametogenesis `)
    }
}

//instantiate class
const eagle = new Aves('eagle')
console.log(eagle)


eagle.getBlood()

eagle.uniqueTrait()