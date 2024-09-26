// 1 Задание

class TrustedUser {
	public user: string;

	constructor(user) {
		this.user = user;
	}
	getConfidenceRatio(examObject): number {
		let totalMessage: number = examObject.totalMessage;
		let warnings: number = examObject.warnings;
		let registrationPeriod: number = examObject.registrationPeriod;
		let score: number = (totalMessage * 2) - (warnings * 100) + registrationPeriod;
		return score;
	}
}
class ConfidenceHelper extends TrustedUser {

	static checkConfidenceRatio(examTrust: number): string {
		if (examTrust >= 0) {
			return "Есть доверие к пользователю: ";
		} else {
			return "Нет доверия к пользователю: ";
		}
	}
}
const users = [{
	name: "bob",
	totalMessage: 30,
	warnings: 4,
	registrationPeriod: 50,
},
{
	name: "sten",
	totalMessage: 90,
	warnings: 2,
	registrationPeriod: 80,
}
];

users.forEach((element) => {
	let usersElem = new ConfidenceHelper(element.name);
	console.log(usersElem);
	let coef = usersElem.getConfidenceRatio(element)
	console.log(coef);
	console.log(ConfidenceHelper.checkConfidenceRatio(coef) + element.name)
})