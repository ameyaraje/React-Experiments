'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    function Person() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anonymous';
        var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, Person);

        this.name = name;
        this.age = age;
    }

    // constructor (name = 'Anonymous') {
    //     this.name = name;
    // }

    _createClass(Person, [{
        key: 'getDesc',
        value: function getDesc() {
            return this.name + ' is ' + this.age + ' year(s) old';
        }
    }]);

    return Person;
}();

var user1 = new Person('Steve Rogers', 25);
var user2 = new Person('Babu Bhai');
var user3 = new Person(77);

console.log(user1.getDesc());
console.log(user2.getDesc());
console.log(user3.getDesc());
