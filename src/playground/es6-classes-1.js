class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi, I am ${this.name} and I'm ${this.age} years young!`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getGreeting() {
        let description = super.getGreeting();

        if(this.hasMajor()) {
            description += ` Their major is ${this.major}.`
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation() {
        return !!this.homeLocation;
    }
    getGreeting() {
        let description = super.getGreeting();

        if(this.hasHomeLocation()) {
            description += ` I'm visiting from ${this.homeLocation}.`            
        }

        return description;
    }
}

const me = new Traveler('Marcelo Melo', 31, 'Franca');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());