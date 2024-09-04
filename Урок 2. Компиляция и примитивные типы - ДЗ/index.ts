// 1 Задание
const array1: number[] = [1, 2, 3, 4];
const array2: number[] = [5, 6];

function arrayDiff(arr1: number[], arr2: number[]): number[] {
	return arr1.filter(item => !arr2.includes(item));
}

console.log(arrayDiff(array1, array2));

// 2 Задание

const arr1: [number, number, number, null] = [1, 2, 3, null];
const arr2: [string, string, boolean] = ['safety', '=', true]
const arr3: [number[], string[]] = [
[1, 2, 3, 4, 5],
['1', '2', '3', '4', '5'],
]
const arr4: [number, number, boolean, string, undefined] = [
1, 2, true, 'str', undefined
]

const arr5: object = [
{
id: 1,
name: 'Студент',
},
{
id: 2,
name: 'Наставник',
}
]

// Задание 3

// let textUpperCase: string = '';

// function textUpperFunc(proposal): void {
// 	let arrayWords: string[] = proposal.split(' ');
// 	arrayWords.forEach(element => {
// 		textUpperCase += element[0].toUpperCase();
// 		for (let i: number = 1; i < element.length; i++) {
// 			textUpperCase += element[i];
// 		}
// 		textUpperCase += " ";
// 	})
// 	console.log(textUpperCase);
// }

// textUpperFunc("Не волнуйтесь, если что-то не работает. Если бы всё работало, вас бы уволили.");

// 4 Задание

// let textUpperCase: string = '';

// function textUpperFunc(proposal): void {
// 	let arrayWords: string[] = proposal.split(' ');

// 	let firstElem: number = arrayWords[0].length;
// 	let removeElem: boolean = delete arrayWords[firstElem];

// 	arrayWords.forEach(element => {
// 		textUpperCase += element[0].toUpperCase();
// 		for (let i: number = 1; i < element.length; i++) {
// 			textUpperCase += element[i];
// 		}
// 		textUpperCase += " ";
// 	})
// 	console.log(textUpperCase);
// }

// textUpperFunc("Не волнуйтесь, если что-то не работает. Если бы всё работало, вас бы уволили.");

// 5 Задание

const person1: object = {
	id: 2,
	name: 'bob'
}
const person2: object = {
	name: 'bob',
	id: 2
}
function areEqual(person1, person2): any {
let oneObjectKeys: string[] = Object.keys(person1);
let twoObjectKeys: string[] = Object.keys(person2);

let onePersonValue: string[] = Object.values(person1);
let twoPersonValue: string[] = Object.values(person2);

let checkKeys: number = 0;
let checkValue: number = 0;

// Проверка на одинаковое количество ключей у массивов
if (oneObjectKeys.length == twoObjectKeys.length) {
console.log("Количество ключей в обоих массивах одинаково.")
} else {
	console.log("Количество ключей в обоих массивах не одинаково.");
	return false;
}

// Проверка на наличие одинаковых ключей
for (let k: number = 0; k < oneObjectKeys.length; k++) {
	for (let j: number = 0; j < twoObjectKeys.length; j++) {
		if (oneObjectKeys[k] == twoObjectKeys[j]) {
			checkKeys++;
		}
	}
}
if (checkKeys == oneObjectKeys.length) {
	console.log("У обоих массивов одинаковые ключи");
} else {
	console.log("У обоих массивов разные ключи");
	return false;
}

// Проверка на одинаковые значения
for (let p: number = 0; p < onePersonValue.length; p++) {
	for (let t: number = 0; t < twoPersonValue.length; t++) {
		if (onePersonValue[p] == twoPersonValue[t]) {
			checkValue++;
		}
	}
}
if (checkValue == onePersonValue.length) {
	console.log("У обоих массивов одинаковые значения");
} else {
	console.log("У обоих массивов разные значения");
	return false;
}
return true
}
console.log(areEqual(person1, person2))

// 6 Задание

// export type User = {
// 	name: string,
// 	age: number,
// 	occupation: string
// };

// export const users: User[] = [
// {
// name: 'Roman Abramov',
// age: 25,
// occupation: 'Millionaire'
// },
// {
// name: 'Andrey Fox',
// age: 23,
// occupation: 'Developer'
// }
// ];

// export function logPerson(users: User) {
// console.log(`- ${users.name}, ${users.age}`);
// }

// console.log('Users:');
// users.forEach(logPerson);

// 7 Задание

type User = {
name: string;
age: number;
occupation: string;
}

type Admin = {
name: string;
age: number;
role: string;
}

export type Person = User 

export const persons: [Person, Admin, Person, Admin] = [
{
name: 'Roman Abramov',
age: 25,
occupation: 'Millionaire'
},
{
name: 'Jane Doe',
age: 32,
role: 'Administrator'
},
{
name: 'Andrey Fox',
age: 23,
occupation: 'Developer'
},
{
name: 'Bruce Willis',
age: 64,
role: 'World saver'
}
];

export function logPerson(persons: Person | Admin) {
console.log(`- ${persons.name}, ${persons.age}`);
}

persons.forEach(logPerson);