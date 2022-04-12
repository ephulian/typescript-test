// Basic Types
let id: number = 5;
let company: string = 'Perspective';
let isPublished: boolean = true;
let x: any = 'Hello';

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, 'Hello'];

// Tuple
let person: [number, string, boolean] = [1, 'John', true];
// Tuple Array
let employee: [number, string][];

employee = [
	[1, 'John'],
	[1, 'John'],
	[1, 'John'],
	[1, 'John'],
];

// Union
let personid: string | number;
personid = 'John';
personid = 34;

// Enumerated
enum Direction1 {
	Up,
	Down,
	Left,
	Right,
}

enum Direction2 {
	Up = 'Up',
	Down = 'Down',
	Left = 'Left',
	Right = 'Right',
}

// Objects
type User = {
	id: number;
	name: string;
};

type Point = number | boolean;
let p1: Point = 1; // || true

const user: User = {
	id: 1,
	name: 'John',
};

// Interfaces
interface UserInterface {
	id: number;
	name: string;
	age?: number;
	readonly uid?: number; // cannot reassing
}

const user1: UserInterface = {
	id: 2,
	name: 'John',
};

interface MathFunc {
	(x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// Type Assertion
let cid: any = 1;
let customerId = <number>cid;
let customerId2 = cid as number;

// Functions
function addNum(x: number, y: number): number {
	return x + y;
}

// Return Type - Void
function log(message: string | number): void {
	console.log(message);
}

// Classes
interface PersonInterface {
	id: number;
	name: string;
	age?: number;
	register(): string;
}

class Person implements PersonInterface {
	// private or protected make unaccessible
	id: number;
	name: string;

	constructor(id: number, name: string) {
		this.id = id;
		this.name = name;
	}

	register() {
		return `${this.name} is now registered`;
	}
}

const brad = new Person(1, 'Brad');

class Employee extends Person {
	position: string;

	constructor(id: number, name: string, position: string) {
		super(id, name);
		this.position = position;
	}
}

const tim = new Employee(4, 'Tim', 'Director');

// Generics
function getArray<Type>(items: Type[]): Type[] {
	return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(['brad', 'john', 'jill']);
