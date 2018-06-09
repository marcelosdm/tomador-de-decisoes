const isAdult = (x) => {
    if (x <= 18) {
        console.log('You are not adult');
    } else {console.log('You are adult')};
};

const canDrink = (x) => {
    if (x <= 18) {
        console.log(`Sorry, but you can't drink`);
    } else {console.log(`Choose your beer`)};
}

export default (age) => age >= 60;

export { isAdult, canDrink };