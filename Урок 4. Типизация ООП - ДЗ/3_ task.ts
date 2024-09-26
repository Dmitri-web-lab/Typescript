// 3 Задание

interface CanRun {
	run(): number;
}
interface CanFly {
	fly(): number;
}
interface CanSwim {
	swim(): number;
}
abstract class HumanRun implements CanRun {
	abstract run(): number;
}
abstract class HumanFly implements CanFly {
	abstract fly(): number;
}
abstract class HumanSwim implements CanSwim {
	abstract swim(): number;
}

declare function humanNibiry(itemSkill: ReadonlyArray<CanRun>): ReadonlyArray<CanRun>; // Люди Нибиру, которые умеют только бегать
declare const humanNibiryRun: ReadonlyArray<CanRun>;

declare function humanEarth(itemSkill1: ReadonlyArray<CanSwim>, itemSkill2: ReadonlyArray<CanRun>): ReadonlyArray<CanSwim> | ReadonlyArray<CanRun>; // Земляне, которые умеют бегать и плавать
declare const humanEarthFly: ReadonlyArray<CanSwim>;
declare const humanEarthRun: ReadonlyArray<CanRun>;

declare function humanCripton(
	itemSkill1: ReadonlyArray<CanFly>,
	itemSkill2: ReadonlyArray<CanRun>,
	itemSkill3: ReadonlyArray<CanFly>): ReadonlyArray<CanFly> | ReadonlyArray<CanRun> | ReadonlyArray<CanSwim>; // Криптонцы, которые умеют всё
declare const humanCriptonSwim: ReadonlyArray<CanSwim>;
declare const humanCriptonFly: ReadonlyArray<CanFly>;
declare const humanCriptonRun: ReadonlyArray<CanRun>;