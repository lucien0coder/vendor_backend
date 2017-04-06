let Person = require('./person')

class coder extends Person.Person {
    constructor(name, grade) {
        super(name); // 记得用super调用父类的构造方法!
        this.grade = grade;
    }

    myGrade() {
        console.log('I am at grade ' + this.grade);
    }
}

let lucien = new coder('lucien', '8')
lucien.hello()