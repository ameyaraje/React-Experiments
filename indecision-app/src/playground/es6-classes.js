class Person {
    constructor (name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    // constructor (name = 'Anonymous') {
    //     this.name = name;
    // }

    getDesc() {
        return `${this.name} is ${this.age} year(s) old`
    }
}


const user1 = new Person('Steve Rogers', 25);
const user2 = new Person('Babu Bhai');
const user3 = new Person(77);

console.log(user1.getDesc());
console.log(user2.getDesc());
console.log(user3.getDesc());