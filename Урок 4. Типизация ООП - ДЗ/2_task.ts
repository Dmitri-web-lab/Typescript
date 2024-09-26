// 2 Задание

class Product {
	private _name: string;
	private _cost: number;
	private _quantity: number;

	constructor(name: string, cost: number, quantity: number) {
		this._name = name;
		this._cost = cost;
		this._quantity = quantity
	}
	public get name() { return this._name; }
	public get cost() { return this._cost; }
	public get quantity() { return this._quantity; }
	public set name(value: string) { this._name = value; }
	public set cost(value: number) { this._cost = value; }
	public set quantity(value: number) { this._quantity = value; }

	log() {
		return `Робот пылесос: ${this._name}; Стоимость: ${this._cost}; Количество: ${this.quantity};`
	}
}
abstract class OrderItem { // Абстрактный класс заказа товара
	public name: string
	public total: number
	public cost: number
	public sale: number
	public quantity: number
	public other: number;

	abstract getCost(): number;

	compare(other: OrderItem): other is OrderItem {
		return other instanceof OrderItem;
	}
}

class SaleProduct extends OrderItem { // Скидка
	public noSale: number = 1;
	public sale: number = 50;
	public quantity: number;
	constructor(total: number, quantity: number) {
		super();
		this.quantity = quantity;
		this.total = total;
	}
	
		getCost(): number {
			if (this.quantity > 15) {
			return (this.total - this.sale) * this.quantity;
		}
		return this.noSale;
		}
	
}
class PercentProduct extends OrderItem { // Процент
	constructor(sale: number, cost: number, quantity: number) {
		super()
		this.sale = sale;
		this.cost = cost;
		this.quantity = quantity;
	}
	getCost(): number {
		let percentProduct = this.cost * this.quantity * (1 - this.sale / 100)
		return percentProduct;
	}
}
class SortProduct extends OrderItem {
	constructor(cost: number) {
		super()
		this.cost = cost;
	}
	getCost(): number {
		if (this.cost < 1000) {
		return -1;
	} else if (this.cost >= 1000 && this.cost < 3000) {
		return 0;
	} else {
		return 1;
	}
}
}
class TransportationProduct extends OrderItem {
	public costDelivery: number = 1000;
	public batchGoods: number;

	constructor(batchGoods: number, cost: number) {
		super()
		this.batchGoods = batchGoods
		this.cost = cost
	}
	getCost(): number {
		return (this.costDelivery / this.cost) * this.batchGoods;
	}
}

const dataProduct = [
	{
		name: "Robotop",
		cost: 500,
		quantity: 16
	}, 
	{
		name: "Robocop",
		cost: 1500,
		quantity: 20
	}
] 
dataProduct.forEach(element => {

const product: Product = new Product(element.name, element.cost, element.quantity); // Товар
console.log(product.name) // Наименование
console.log(product.cost) // Стоимость
console.log(product.log()) // Информация о товаре

const totalProduct = new SaleProduct(product.cost, product.quantity); // Передаем стоимость и количество
let sale = totalProduct.getCost()
let totalCostProduct = product.cost * product.quantity;
console.log(totalCostProduct); // Общая стоимость товаров
let saleProduct = (totalCostProduct - sale) / 100; // Скидка
const percentProduct = new PercentProduct(saleProduct, product.cost, product.quantity);
let totalPercentProduct = percentProduct.getCost()
console.log(totalPercentProduct); // Общая стоимость со скидкой
let sortNumberProduct = new SortProduct(product.cost)
console.log("Сортировочный номер: " + sortNumberProduct.getCost());
const deliveryProduct = new TransportationProduct(totalPercentProduct, product.cost);
console.log(deliveryProduct.getCost()); // Транспортные расходы
});