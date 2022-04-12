"use strict";
// Basic Types
let id = 5;
let company = 'Perspective';
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
// Tuple
let person = [1, 'John', true];
// Tuple Array
let employee;
employee = [
    [1, 'John'],
    [1, 'John'],
    [1, 'John'],
    [1, 'John'],
];
// Union
let personid;
personid = 'John';
personid = 34;
// Enumerated
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
let p1 = 1; // || true
const user = {
    id: 1,
    name: 'John',
};
const user1 = {
    id: 2,
    name: 'John',
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Type Assertion
let cid = 1;
let customerId = cid;
let customerId2 = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
// Return Type - Void
function log(message) {
    console.log(message);
}
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, 'Brad');
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const tim = new Employee(4, 'Tim', 'Director');
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['brad', 'john', 'jill']);
