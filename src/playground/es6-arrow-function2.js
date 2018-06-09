// arguments object - no longer bound with arrow functions

const add = function (a, b) {
    console.log(arguments);
    return a + b
}
console.log(add(55,1))

const addArrow = (a, b) => {
    // console.log(arguments)
    return a + b;
}
console.log(add(1, 1));

// this keyword - no longer bound

const user = {
    name: 'Marcelo',
    cities: ['Franca', 'Riviera', 'Arraial dAjuda'],
    printPlacesLived: function() {
        console.log(this.name);
        console.log(this.cities);

        const that = this;

        this.cities.forEach(function(city) {
            console.log(that.name + ' has traveled to ' + city);
        });
    }
};
user.printPlacesLived();

const userArrow = {
    name: 'Marcelo',
    cities: ['Franca', 'Riviera', 'Arraial dAjuda'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has traveled to ' + city)
    }
};
console.log(userArrow.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number)
    }
}

console.log(multiplier.multiply());