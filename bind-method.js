const kibria = {
    name: 'RJ kibria',
    id: 101,
    money: 5000,
    treatDey: function (expense) {
        this.money = this.money - expense;
        console.log(this);
        return this.money;
    }
}

const heroBalam = {
    id: 102,
    money: 6000,
    name: 'Hero Balam'
}
const normalGolam = {
    id: 102,
    money: 7000,
    name: 'Normal Golam'
}

// kibria.treatDey(100);

const heroTreatDey = kibria.treatDey.bind(heroBalam);
heroTreatDey(500);
heroTreatDey(500);
heroTreatDey(500);
kibria.treatDey(500);
kibria.treatDey(500);
heroTreatDey(500);

const normalTrearDey = kibria.treatDey.bind(normalGolam);
normalTrearDey(2000);