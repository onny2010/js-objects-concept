const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};
// getting all the properties names
const keys = Object.keys(bottle);
// console.log(keys);

//  getting all values
const values = Object.values(bottle);
// console.log(values);


// getting all pairs
const pairs = Object.entries(bottle);
// console.log(pairs);


Object.freeze(bottle);
// Object.seal(bottle);
bottle.price = 100;
bottle.height = 16;
delete bottle.isCleaned;
console.log(bottle);