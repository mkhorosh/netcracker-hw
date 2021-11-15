function inherit(ParentClass) {
    function ChildClass() {
    }

    ChildClass.prototype = Object.create(ParentClass.prototype);
    ChildClass.prototype.constructor = ChildClass;
    ChildClass.prototype._super = ParentClass.prototype;

    return ChildClass;
}

function Animal() {
    this.name = 'Animal';
}

Animal.prototype.init = function (height, weight) {
    this.height = height;
    this.weight = weight;
}

Animal.prototype.greeting = function () {
    console.log(`|Hi! I am your ${this.name}.`);
    console.log(`|Height: ${this.height}m`);
    console.log(`|Weight: ${this.weight}kg`);
}

let Pet = inherit(Animal);

Pet.prototype.greetingPet = function () {
    this.name = 'Pet';
    this._super.greeting.call(this);
}

let Cat = inherit(Pet);

Cat.prototype.greetingCat = function () {
    this.name = 'Cat';
    this._super.greeting.call(this);
}

Cat.prototype.play = function () {
    console.log('Mrrr...');
}

let Horse = new Animal();
Horse.init(3, 10);
let Dog = new Pet();
Dog.init(1, 8);
let Pushok = new Cat();
Pushok.init(0.8, 6);

Horse.greeting();
Dog.greetingPet();
Pushok.greetingCat();
Pushok.play();
