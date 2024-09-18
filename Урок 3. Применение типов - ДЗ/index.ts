// 1 Задание

type House = {
	street: string | undefined, // Дополнена типизация помимо string
	apartmentCount?: number | string, // Дополнена типизация для вывода no information в случае недостатка данных, также знак "?" указывает на не основной параметр, который можно пропустить
	buildInfo: {
	year?: number | string, // То же что и на 5 строке кода
	material?: string,
	}
	};

	function getHouse(): House {
		let house: House = {
			street: 'Pushkina', // Этот параметр является основным и только его нужно записывать в обязательном порядке
			apartmentCount: 76, // Таким образом из-за перечисления типов при закомментировании данной строки не возникнет ошибки
			buildInfo: {
				year: 1996, 
				material: 'rocks'
			}};
		return house;
	}
	
	function handleHouse(): void { // Данная функция проверяет на наличие заполненных данных в передаваемом объекте 
		const house: House = getHouse();
	switch (undefined) { // Проверка осуществляется с помощью конструкции switch case, что упрощает читаемость кода
		case house.street:
			house.street = "(no information)";
		case house.apartmentCount:
			house.apartmentCount = "(no information)";
		case house.buildInfo.year:
			house.buildInfo.year = "(no information)";
			case house.buildInfo.material:
			house.buildInfo.material = "(no information)";	
		default:
			break;
	}

	console.log(`${house.street} st., ${house.apartmentCount} apartments total`); // Если закомментировать строку house.apartmentCount = 76, то выводит undefined, так как мы не ввели данные.
	console.log(`build in ${house.buildInfo.year}, build from ${house.buildInfo.material} `); // Если закомментировать house.buildInfo, то данные year и material становятся undefined, поэтому их невозможно вывести
	}
	handleHouse();

	// 2 Задание

	// Обычный тайпгард
		type Cat = {
			name: 'Pushok',
			meow: () => string
			}
			
			type Dog = {
			name: "Bobik",
			bark: () => string
			}
	
	function whatDoesThePetSay(pet: Dog | Cat): void { // Функция реализует проверку на передаваемый тип
		pet.name;
		
		if (pet.name == 'Bobik') { // Отсюда если был передан тип с именем "Bobik", то выводится функция bark()
			console.log(pet.bark());
		} else if (pet.name === 'Pushok') { // Иначе выводится функция meow()
			console.log(pet.meow());
		}
	}
	
			whatDoesThePetSay({name: "Bobik", bark: () => 'bark'}); // Передаем в функцию наши объекты
			whatDoesThePetSay({name: "Pushok", meow: () => 'meow'});

// Пользовательский тайпгард
// type Cat = {
// 	name: 'Pushok',
// 	meow: () => string
// 	}
	
// 	type Dog = {
// 	name: "Bobik",
// 	bark: () => string
// 	}

// 		function whatDoesThePetSay(pet: unknown): pet is Cat | Dog { // Пользовательский тайпгард проверяет объект на ряд соответствий, если все соответствия подходят то функция возвращает объект.
// return typeof pet === 'object' 
// 		&& pet !== null
// 		&& 'name' in pet
// 		&& typeof pet.name === 'string'
// }

// 	whatDoesThePetSay({name: "Bobik", bark: () => 'bark'});
// 	whatDoesThePetSay({name: "Pushok", meow: () => 'meow'});

// Тайпгард с оператором in
	// 	type Cat = {
	// 		name: 'Pushok',
	// 		meow: () => string
	// 		}
			
	// 		type Dog = {
	// 		name: "Bobik",
	// 		bark: () => string
	// 		}
	
	// function whatDoesThePetSay(pet: Dog | Cat): string {
	// 	if ('name' in pet) { // Оператор in используется для сужения параметров, относящихся только к определенному типу. Так например в нашем случае собака не может мяукать, а кошка гавкать
	// 		return pet.bark();
	// 	}
	// 	return pet.meow();
	// }
	
	// 		whatDoesThePetSay({name: "Bobik", bark: () => 'bark'});
	// 		whatDoesThePetSay({name: "Pushok", meow: () => 'meow'});

// 3 Задание
enum Durections { // enum - перечисления
	Up = 'Up', // в нашем случае перечисление строк, здесь каждый член был инициализирован константой с помощью строкового литерала.
	Down = 'Down',
	Left = 'Left',
	Right = 'Right'
}
//const Directions = ['Up', 'Down', 'Left', 'Right'];
let varUp: Durections = Durections.Up; // каждое значение enuma было заключено в переменную для удобства работы
let varDown: Durections = Durections.Down;
let varLeft: Durections = Durections.Left;
let varRight: Durections = Durections.Right;

type Player = {
x: number,
y: number,
move: (direcion: string, amount: number) => void,
}

const player: Player = {
x: 0,
y: 0,
move: function (direction: string, amount: number) {
switch (direction) {
case varUp:
this.y += amount;
break;
case varDown:
this.y -= amount;
break;
case varLeft:
this.x -= amount;
break;
case varRight:
this.x += amount;
break;
default:
break;
}
}
}

player.move(varUp, 1); // Таким образом с перечислениями стало намного удобней работать нежели с массивом
player.move(varDown, 2);
player.move(varLeft, 2);
player.move(varRight, 3);

console.log(player.x === 1); // true
console.log(player.y === -1); // true

// 4 Задание

// type User = {
// 	type: string,
// 	name: string;
// 	age: number;
// 	occupation: string;
// 	}
	
// 	type Admin = {
// 	type: string,
// 	name: string;
// 	age: number;
// 	role: string;
// 	}
	
// 	export type Person = User | Admin;
	
// 	export const persons: Person[] = [
// 	{
// 	type: 'user',
// 	name: 'Max Mustermann',
// 	age: 25,
// 	occupation: 'Chimney sweep'
// 	},
// 	{
// 	type: 'admin',
// 	name: 'Jane Doe',
// 	age: 32,
// 	role: 'Administrator'
// 	},
// 	{
// 	type: 'user',
// 	name: 'Kate Müller',
// 	age: 23,
// 	occupation: 'Astronaut'
// 	},
// 	{
// 	type: 'admin',
// 	name: 'Bruce Willis',
// 	age: 64,
// 	role: 'World saver'
// 	}
// 	];
	
// 	function checkType(persons: Person): string {
// 		persons.type;
// 		let additionalInformation: string;
// 		if (persons.type === 'admin') {
// 			return additionalInformation = 'Admin';
// 		} else {
// 		return additionalInformation = 'User';
// 	}
// }
// 	export function logPerson(person: Person) {
// 	let returnAdditionalInfo = checkType(person);
// 	console.log(`- ${person.name}, ${person.age}, ${returnAdditionalInfo}`);
// 	}
	
// 	persons.forEach(logPerson);

	// 5 Задание

	// type User = {
	// 	type: 'user';
	// 	name: string;
	// 	age: number;
	// 	occupation: string;
	// 	}
		
	// 	type Admin = {
	// 	type: 'admin';
	// 	name: string;
	// 	age: number;
	// 	role: string;
	// 	}
		
	// 	export type Person = User | Admin;
		
	// 	export const persons: Person[] = [
	// 	{ type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
	// 	{ type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
	// 	{ type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
	// 	{ type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
	// 	];

	// 	export function isAdmin(person: Person) {
	// 	return person.type === 'admin';
	// 	}
		
	// 	export function isUser(person: Person) {
	// 	return person.type === 'user';
	// 	}

	// 	export function logPerson(person: Person) {
	// 	let additionalInformation: string = '';
	// 	if (isAdmin(person)) {
	// 	additionalInformation += 'Admin';
	// 	 console.log(`- ${person.name}, ${person.age}, ${additionalInformation}`);
	// } else if (isUser(person)) {
	// 	additionalInformation += 'User';
	// 	console.log(`- ${person.name}, ${person.age}, ${additionalInformation}`);
	// 	}
	// 	}
		
	// 	console.log('Admins:');
	// 	persons.filter(isAdmin).forEach(logPerson);
		
	// 	console.log('Users:');
	// 	persons.filter(isUser).forEach(logPerson);

		// Дополнительное Задание

		type User = {
			type: 'user';
			name: string;
			age: number;
			occupation: string;
			}
			
			type Admin = {
			type: 'admin';
			name: string;
			age: number;
			role: string;
			}
			
			export type Person = User | Admin;
			
			export const persons: Person[] = [
			{ 
			type: 'user', 
			name: 'Max Mustermann', 
			age: 25, 
			occupation: 'Chimney sweep' },
			{
			type: 'admin',
			name: 'Jane Doe',
			age: 32,
			role: 'Administrator'
			},
			{
			type: 'user',
			name: 'Kate Müller',
			age: 23,
			occupation: 'Astronaut'
			},
			{
			type: 'admin',
			name: 'Bruce Willis',
			age: 64,
			role: 'World saver'
			},
			{
			type: 'user',
			name: 'Wilson',
			age: 23,
			occupation: 'Ball'
			},
			{
			type: 'admin',
			name: 'Agent Smith',
			age: 23,
			role: 'Administrator'
			}
			];
			
			export const isAdmin = (person: Person): person is Admin => person.type === 'admin';
			export const isUser = (person: Person): person is User => person.type === 'user';
			
			export function logPerson(person: Person) {
			let additionalInformation = '';
			if (isAdmin(person)) {
			additionalInformation = person.role;
			}
			if (isUser(person)) {
			additionalInformation = person.occupation;
			}
			console.log(`- ${person.name}, ${person.age}, ${additionalInformation}`);
			}
			
			export function filterUsers(persons: Person[], criteria: object): Admin[] { // Фильтр админов, если фильтровать юзеров то вместо Admin[] нужно указать User[]
			return persons.filter(isAdmin).filter((user) => { // И здесь вместо isAdmin указать isUser
			const criteriaKeys = Object.keys(criteria) as (keyof User)[];
			return criteriaKeys.every((fieldName) => {
			return user[fieldName] === criteria[fieldName];
			});
			});
			}
			
			console.log('Users of age 23:');
			
			filterUsers(
			persons,
			{
			age: 23
			}
			).forEach(logPerson);