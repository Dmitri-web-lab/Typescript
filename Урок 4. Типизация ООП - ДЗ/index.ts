// // 1 Задание

// class TrustedUser {
// 	public user: string;

// 	constructor(user) {
// 		this.user = user;
// 	}
// 	getConfidenceRatio(examObject): number {
// 		let totalMessage: number = examObject.totalMessage;
// 		let warnings: number = examObject.warnings;
// 		let registrationPeriod: number = examObject.registrationPeriod;
// 		let score: number = (totalMessage * 2) - (warnings * 100) + registrationPeriod;
// 		return score;
// 	}
// }
// class ConfidenceHelper extends TrustedUser {

// 	static checkConfidenceRatio(examTrust: number): string {
// 		if (examTrust >= 0) {
// 			return "Есть доверие к пользователю: ";
// 		} else {
// 			return "Нет доверия к пользователю: ";
// 		}
// 	}
// }
// const users = [{
// 	name: "bob",
// 	totalMessage: 30,
// 	warnings: 4,
// 	registrationPeriod: 50,
// },
// {
// 	name: "sten",
// 	totalMessage: 90,
// 	warnings: 2,
// 	registrationPeriod: 80,
// }
// ];

// users.forEach((element) => {
// 	let usersElem = new ConfidenceHelper(element.name);
// 	console.log(usersElem);
// 	let coef = usersElem.getConfidenceRatio(element)
// 	console.log(coef);
// 	console.log(ConfidenceHelper.checkConfidenceRatio(coef) + element.name)
// })

// // 2 Задание

// class Product {
// 	private _name: string;
// 	private _cost: number;
// 	private _quantity: number;

// 	constructor(name: string, cost: number, quantity: number) {
// 		this._name = name;
// 		this._cost = cost;
// 		this._quantity = quantity
// 	}
// 	public get name() { return this._name; }
// 	public get cost() { return this._cost; }
// 	public get quantity() { return this._quantity; }
// 	public set name(value: string) { this._name = value; }
// 	public set cost(value: number) { this._cost = value; }
// 	public set quantity(value: number) { this._quantity = value; }

// 	log() {
// 		return `Робот пылесос: ${this._name}; Стоимость: ${this._cost}; Количество: ${this.quantity};`
// 	}
// }
// abstract class OrderItem { // Абстрактный класс заказа товара
// 	public name: string
// 	public total: number
// 	public cost: number
// 	public sale: number
// 	public quantity: number
// 	public other: number;

// 	abstract getCost(): number;

// 	compare(other: OrderItem): other is OrderItem {
// 		return other instanceof OrderItem;
// 	}
// }

// class SaleProduct extends OrderItem { // Скидка
// 	public noSale: number = 1;
// 	public sale: number = 50;
// 	public quantity: number;
// 	constructor(total: number, quantity: number) {
// 		super();
// 		this.quantity = quantity;
// 		this.total = total;
// 	}
	
// 		getCost(): number {
// 			if (this.quantity > 15) {
// 			return (this.total - this.sale) * this.quantity;
// 		}
// 		return this.noSale;
// 		}
	
// }
// class PercentProduct extends OrderItem { // Процент
// 	constructor(sale: number, cost: number, quantity: number) {
// 		super()
// 		this.sale = sale;
// 		this.cost = cost;
// 		this.quantity = quantity;
// 	}
// 	getCost(): number {
// 		let percentProduct = this.cost * this.quantity * (1 - this.sale / 100)
// 		return percentProduct;
// 	}
// }
// class SortProduct extends OrderItem {
// 	constructor(cost: number) {
// 		super()
// 		this.cost = cost;
// 	}
// 	getCost(): number {
// 		if (this.cost < 1000) {
// 		return -1;
// 	} else if (this.cost >= 1000 && this.cost < 3000) {
// 		return 0;
// 	} else {
// 		return 1;
// 	}
// }
// }
// class TransportationProduct extends OrderItem {
// 	public costDelivery: number = 1000;
// 	public batchGoods: number;

// 	constructor(batchGoods: number, cost: number) {
// 		super()
// 		this.batchGoods = batchGoods
// 		this.cost = cost
// 	}
// 	getCost(): number {
// 		return (this.costDelivery / this.cost) * this.batchGoods;
// 	}
// }

// const dataProduct = [
// 	{
// 		name: "Robotop",
// 		cost: 500,
// 		quantity: 16
// 	}, 
// 	{
// 		name: "Robocop",
// 		cost: 1500,
// 		quantity: 20
// 	}
// ] 
// dataProduct.forEach(element => {

// const product: Product = new Product(element.name, element.cost, element.quantity); // Товар
// console.log(product.name) // Наименование
// console.log(product.cost) // Стоимость
// console.log(product.log()) // Информация о товаре

// const totalProduct = new SaleProduct(product.cost, product.quantity); // Передаем стоимость и количество
// let sale = totalProduct.getCost()
// let totalCostProduct = product.cost * product.quantity;
// console.log(totalCostProduct); // Общая стоимость товаров
// let saleProduct = (totalCostProduct - sale) / 100; // Скидка
// const percentProduct = new PercentProduct(saleProduct, product.cost, product.quantity);
// let totalPercentProduct = percentProduct.getCost()
// console.log(totalPercentProduct); // Общая стоимость со скидкой
// let sortNumberProduct = new SortProduct(product.cost)
// console.log("Сортировочный номер: " + sortNumberProduct.getCost());
// const deliveryProduct = new TransportationProduct(totalPercentProduct, product.cost);
// console.log(deliveryProduct.getCost()); // Транспортные расходы
// });
// // 3 Задание

// interface CanRun {
// 	run(): number;
// }
// interface CanFly {
// 	fly(): number;
// }
// interface CanSwim {
// 	swim(): number;
// }
// abstract class HumanRun implements CanRun {
// 	abstract run(): number;
// }
// abstract class HumanFly implements CanFly {
// 	abstract fly(): number;
// }
// abstract class HumanSwim implements CanSwim {
// 	abstract swim(): number;
// }

// declare function humanNibiry(itemSkill: ReadonlyArray<CanRun>): ReadonlyArray<CanRun>; // Люди Нибиру, которые умеют только бегать
// declare const humanNibiryRun: ReadonlyArray<CanRun>;

// declare function humanEarth(itemSkill1: ReadonlyArray<CanSwim>, itemSkill2: ReadonlyArray<CanRun>): ReadonlyArray<CanSwim> | ReadonlyArray<CanRun>; // Земляне, которые умеют бегать и плавать
// declare const humanEarthFly: ReadonlyArray<CanSwim>;
// declare const humanEarthRun: ReadonlyArray<CanRun>;

// declare function humanCripton(
// 	itemSkill1: ReadonlyArray<CanFly>,
// 	itemSkill2: ReadonlyArray<CanRun>,
// 	itemSkill3: ReadonlyArray<CanFly>): ReadonlyArray<CanFly> | ReadonlyArray<CanRun> | ReadonlyArray<CanSwim>; // Криптонцы, которые умеют всё
// declare const humanCriptonSwim: ReadonlyArray<CanSwim>;
// declare const humanCriptonFly: ReadonlyArray<CanFly>;
// declare const humanCriptonRun: ReadonlyArray<CanRun>;

// // 4 Задание

// // Реализация с помощью делигирования

// // class AutoServis { // На примере автосервиса
// // 	role: string = "Сотрудник"; // Поля с указанием работников, их зарплат и профессий
// // 	salary: string = "Зарплата";
// // 	profession: string = "Профессия";
// // }
// // abstract class Job {
// // 	abstract role: AutoServis;
// // 	abstract getWork(): AutoServis;
// // }
// // class Handyman extends Job {
// // 	role: AutoServis;
// // 	getWork(): AutoServis {
// // 		return new AutoServis();
// // 	}
// // }
// // class Mechanic extends Job {
// // 	constructor(private readonly delegate: Job) {
// // 		super()
// // 	}
// // 	role: AutoServis;
// // 	getWork(): AutoServis {
// // 		return this.delegate.getWork();
// // 	}
// // }
// // class Person {
// // 	constructor(private readonly delegate: Mechanic) {}
// // 	getWork(name, salary, profession): void {
// // 		const worker1 = this.delegate.getWork();
// // 		console.log(`${worker1.role}: ${name}. ${worker1.salary}: ${salary}. ${worker1.profession}: ${profession}.`); // Вывод сотрудников
// // 	}
// // }

// // const mechanic: Mechanic = new Mechanic(new Handyman());
// // const person: Person = new Person(mechanic);
// // person.getWork("Петр", 30000, "Механик")
// // person.getWork("Александр", 25000, "Разнорабочий")

// // Реализация с помощью агрегирования

// abstract class Job {
// 	constructor( // Записываем основные поля
// 		public readonly name: string,
// 		public readonly salary: number,
// 		public readonly profession: string
// 	) {}
// }
// class Handyman extends Job { // Записываем рабочих
// 	constructor(salary: number) {
// 		super("Александр", salary, "Разнорабочий");
// 	}
// }
// class Mechanic extends Job {
// 	constructor(salary: number) {
// 		super("Петр", salary, "Механик");
// 	}
// }
// class Electric extends Job {
// 	constructor(salary: number) {
// 		super("Виктор", salary, "Электрик");
// 	}
// }
// abstract class AutoServis {
// 	constructor(public readonly job: ReadonlyArray<Job>) {}
// }
// class SalaryMonth extends AutoServis { // С помощью агрегирования создаем контейнер
// 	constructor() {
// 		super ([
// 			new Handyman(25000),
// 			new Mechanic(30000),
// 			new Electric(30000)
// 		]);
// 	}
// }

// const workers: AutoServis = new SalaryMonth();
// let staff = workers.job;
// staff.forEach(element => {
// 	console.log(`Сотрудник: ${element.name}. Зарплата: ${element.salary}. Профессия: ${element.profession}.`) // Выводим информацию о сотрудниках
// });