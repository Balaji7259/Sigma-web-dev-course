// This is a simple JavaScript file that demonstrates object creation and prototype inheritance.
// let obj = {
//     a : 1,
//     b : "Balaji"
// }

// console.log(obj);

// let animal = {
//     eats : true
// }

// let rabbit = {
//     jumps : true
// }

// rabbit.__proto__ = animal; // rabbit inherits from animal

class Animal {
    constructor(name){
        this.name = name;
        console.log("Object is Created...")
    }
    eats() {
        console.log("Animal eating");
    }
    jumps() {
        console.log("Animal jumping");
    }
}

let a = new Animal("Balaji");
console.log(a);

class Lion extends Animal{
    constructor(name) {
        super(name);
        console.log("Lion is Created...");
    }
    eats() {
        super.eats(); // Call the parent class method
        console.log("Lion eating");
    }
    jumps() {
        super.jumps(); // Call the parent class method
        console.log("Lion jumping");
    }
}

let l = new Lion("Simba");
console.log(l);