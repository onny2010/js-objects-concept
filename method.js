const student = {
    name: 'kibria',
    id: 101,
    money: 5000,
    major: 'mathematics',
    isRich: false,
    sub: ['eng', 'eco', 'math', 'calculus'],
    bestFriend: {
        name: 'kundu',
        major: 'math'
    },
    takeExam: function () {
        console.log(this.name, 'taking exam');
    },
    treatDey: function (expense, boksish) {
        this.money = this.money - expense;
        return this.money;
    }
}

student.takeExam();
const remaining1 = student.treatDey(900, 200);
const remaining2 = student.treatDey(500, 50);
console.log(remaining1);
console.log(remaining2);