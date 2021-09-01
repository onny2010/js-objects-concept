// console.log(this);
const kibria = {
    name: 'RJ kibria',
    id: 101,
    money: 5000,
    treatDeyArrow: () => {
        console.log(this);
    },
    treatDeyInside: function () {
        const myArrow = () => console.log(this);
        myArrow();
    },
    treatDey: function (expense, bokshis, tax) {
        this.money = this.money - expense - bokshis - tax;
        console.log('here5555', this);
        return this.money;
    }
}

const heroBalam = {
    id: 102,
    money: 6000,
    name: 'Hero Balam'
}

function add() {
    console.log(this);
}