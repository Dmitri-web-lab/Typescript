// 1 Задание

type Person<T> = {
	name: string,
	age: T
}

type Bridge<U> = {
	city: string,
	age: U,

}

type Wine<I> = {
	manufacturer: string,
	age: I,
	grade: string,
}

function getOldestPerson<T>(items: Person[]): Person<T> {
	return items.sort((a, b) => b.age - a.age)[0];
}

function getOldestWine<I>(items: Wine[]): Wine<I> {
	return items.sort((a, b) => b.age - a.age)[0];
}

function getOldestBridge<U>(items: Bridge[]): Bridge<U> {
	return items.sort((a, b) => b.age - a.age)[0];
}

const dataPerson: Person = [{
	name: "bob",
	age: 50
},
{
	name: "Sten",
	age: 40
	},
	{
		name: "John",
		age: 25
		}
];

const dataBridge: Bridge = [{
	city: "Moscow",
	age: 2000
},
{
	city: "Ekaterinburg",
	age: 3000
	},
	{
		city: "Saint Petersburg",
		age: 2500
		}
];
const dataWine: Wine = [{
	manufacturer: "Spain",
	age: 300,
	grade: "semi - sweet",
},
{
	manufacturer: "Italy",
	age: 200,
	grade: "semi - dry",
	},
	{
	manufacturer: "France",
	age: 100,
	grade: "dry",
		}
]

let getSortPerson = getOldestPerson(dataPerson);
console.log(getSortPerson);
let getSortBridge = getOldestBridge(dataBridge);
console.log(getSortBridge);
let getSortWine = getOldestBridge(dataWine)
console.log(getSortWine);


// 2 Задание

type APIProvider<T, U> = {
	data: T[],
	meta: U
}
type dataUser = {
	id: number,
	name: string,
	registrationDate: string
}
type dataMeta = {
	trackId: string,
	trackerUrl: string
}
type UserResponse = APIProvider<dataUser, dataMeta>

// Было
const response: dataUser[] = [
{
id: 49,
name: "Kate",
registrationDate: "2020-08-30 14:17:23"
}
];

//Стало:
const response2: UserResponse = {
data: [
{
id: 49,
name: "Kate",
registrationDate: "2020-08-30 14:17:23"
}
],
meta: {
trackId: "Sqny0mSDCByG",
trackerUrl: "someTrackerUrl",
}
}

class Provider {
	getSomeOther(data) {
		console.log(data)
	}
}
const oldApiProvider = new Provider();
const newApiProvider = new Provider();

oldApiProvider.getSomeOther(response)
newApiProvider.getSomeOther(response2.data)

// 3 Задание

class MuArray<T, U> {

	protected entities: T;
	protected newArr: U;

	public areElementsEqual(index1, index2): boolean { 
		this.entities = index1
		this.entities = index2
		if (index1 === index2) {
			return true;
		}
		return false;
	}
	public flatten(arr: U[]): void {
		let newArr: U[] = [];

		function recurseExample(arr): number {
			arr.forEach(element => {
				if (typeof element == 'object') {
					return recurseExample(element)
				}
					newArr[newArr.length] = element
					return newArr;
			})
			return NaN;
		}
		
		arr.forEach(element => {
			if (typeof element == 'object') {
				recurseExample(element);
			} else {
				newArr[newArr.length] = element;
				console.log(newArr);
		}
		})
		console.log(newArr); 
	}
}
const arrExamle = [1,2,3,[4,8,[10, [87, 99] ,20]]]
const arrFlatten = new MuArray();
arrFlatten.flatten(arrExamle)
console.log(arrFlatten.areElementsEqual(arrExamle[2], arrExamle[3]));
