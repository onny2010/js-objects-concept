//  1. using object literal
const student = { name: 'Sakib Al hasan', job: 'cricketer' };
//  2. constructor
const person = new Object();

//  3. 
// const human = object.create(null)
const human = object.create(student)
console.log(human.job);


class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const peop = new People('Manush', 12);
console.log(peop);

//  function 
function Manush(name) {
    this.name = name;
}
const man = new Manush('kader');
console.log(man);


