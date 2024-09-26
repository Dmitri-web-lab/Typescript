// 4 Задание

// Реализация с помощью делигирования

class AutoServis { // На примере автосервиса
	role: string = "Сотрудник"; // Поля с указанием работников, их зарплат и профессий
	salary: string = "Зарплата";
	profession: string = "Профессия";
}
abstract class Job {
	abstract role: AutoServis;
	abstract getWork(): AutoServis;
}
class Handyman extends Job {
	role: AutoServis;
	getWork(): AutoServis {
		return new AutoServis();
	}
}
class Mechanic extends Job {
	constructor(private readonly delegate: Job) {
		super()
	}
	role: AutoServis;
	getWork(): AutoServis {
		return this.delegate.getWork();
	}
}
class Person {
	constructor(private readonly delegate: Mechanic) {}
	getWork(name, salary, profession): void {
		const worker1 = this.delegate.getWork();
		console.log(`${worker1.role}: ${name}. ${worker1.salary}: ${salary}. ${worker1.profession}: ${profession}.`); // Вывод сотрудников
	}
}

const mechanic: Mechanic = new Mechanic(new Handyman());
const person: Person = new Person(mechanic);
person.getWork("Петр", 30000, "Механик")
person.getWork("Александр", 25000, "Разнорабочий")

// Реализация с помощью агрегирования

abstract class Job {
	constructor( // Записываем основные поля
		public readonly name: string,
		public readonly salary: number,
		public readonly profession: string
	) {}
}
class Handyman extends Job { // Записываем рабочих
	constructor(salary: number) {
		super("Александр", salary, "Разнорабочий");
	}
}
class Mechanic extends Job {
	constructor(salary: number) {
		super("Петр", salary, "Механик");
	}
}
class Electric extends Job {
	constructor(salary: number) {
		super("Виктор", salary, "Электрик");
	}
}
abstract class AutoServis {
	constructor(public readonly job: ReadonlyArray<Job>) {}
}
class SalaryMonth extends AutoServis { // С помощью агрегирования создаем контейнер
	constructor() {
		super ([
			new Handyman(25000),
			new Mechanic(30000),
			new Electric(30000)
		]);
	}
}

const workers: AutoServis = new SalaryMonth();
let staff = workers.job;
staff.forEach(element => {
	console.log(`Сотрудник: ${element.name}. Зарплата: ${element.salary}. Профессия: ${element.profession}.`) // Выводим информацию о сотрудниках
});