// 1 Задание

interface Todo {
    title: string;
    description: string;
    completed: boolean;
}
type MyOmit = Exclude<Todo, 'title' | 'description' | 'completed'>

type TodoPreview = Pick<MyOmit, 'completed'>

const todo: TodoPreview = {
    completed: false,
}

// 2 задание

type First<T extends any[]> = T[0]

type arr1 = ['a', 'b', 'c'];

type arr2 = [3, 2, 1];

type head1 = First<[...arr1]> // type head1 = "a"

type head2 = First<[...arr2]> // type head2 = 3

// 3 задание

type Todo = {
    title: string;
    description: string;
    completed: boolean;
}

type OmitType = Omit<Todo, "completed">

type ReadonlyElements = Readonly<OmitType>

type CompletedElement = Pick<Todo, 'completed'>

type MyReadonly2<ReadonlyElements, CompletedElement> = ReadonlyElements & CompletedElement;

let todo: MyReadonly2<ReadonlyElements, CompletedElement> = {
    title: "Hey",
    description: "foobar",
    completed: false
}

todo.title = "Hello"
todo.description = "barFoo"
todo.comleted = true // OK

// 4 задание 

type XElements = { a: 1; b: 'hi'; z: string; } // Тип описывающий все элементы внутри Х
type XElementsNested = { x: XElements; } // Тип с вложенном объектом XElements

type X = { x: XElementsNested; y: string }

type YElem = Pick<X, 'y'> // Элемент y
type YElemReadonly = Readonly<YElem> // Ставим y - readonly

type ZElem = Pick<XElements, 'z'>
type ZElemReadonly = Readonly<ZElem>

type AElements = Omit<XElements, 'b' | 'z'>
type BElements = Omit<XElements, 'a' | 'z'>


type Deep = {
    x: {a: AElements, b: BElements, z: ZElemReadonly},
    y: YElemReadonly
}

type DeepReadonly<Deep> = Deep;

//type Todos = DeepReadonly<X>


const test: DeepReadonly<Deep> = {
    x: {
        a: 1,
        b: 'hi',
        z: 'try change me too'
    },
    y: 'try change me'
}
test.y = 'changed';
test.x.z = 'changed';