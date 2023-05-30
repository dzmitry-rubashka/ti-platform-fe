const any: any = "green";
const number: number = 6;
const string: string = "blue";
const boolean: boolean = false;
const xNull: null = null;
const num1: bigint = BigInt(100);

const list: number[] = [11, 22, 33];
const colors: string[] = ["red", "green", "blue"];

// Enum – перечисление, возможность дать имена наборам числовых значений:
enum Day {
  Monday,
  Friday,
  Saturday,
}
let b: Day = Day.Friday

//кортежи

// void - Используется для функций, которые не возвращают значений
const sayHi = (): void => {
  console.log("Hi!");
};
sayHi();

// Never: также представляет отсутствие значения и используется в качестве возвращаемого типа функций, которые генерируют или возвращают ошибку

const y: undefined = undefined;

// Определение функции
function add(a: number, b: number): number {
  return a + b;
}

// Вызов функции
let result1 = add(1, 2); // результат 3

class User {
  name: string;
  surname: string;
  year: number;
}

// Тот же класс, вместе с модификаторами:
class User {
  protected name: string;
  public surname: string;
  private _year: number;
}

// Функция может возвращать значение определенного типа
function addd(a: number, b: number): number {
  return a + b;
}
let result = add(1, 2);

// Необязательные параметры должны быть помечены вопросительным знаком ?.
function getName(firstName: string, lastName?: string) {
  if (lastName)
    return firstName + " " + lastName;
  else
    return firstName;
}

// Объединения или union не являются собственно типом данных
let id : number | string;
id = "1345dgg5";
console.log(id); // 1345dgg5
id = 234;
console.log(id);  // 234

// Оператор ! ставится после объекта, который теоретически может принимать значение null

// объекты
let person = { name: "Tom", age: 23 };
person = { name: "Bob" }; // ! Ошибка

let person1 = { name: "Tom", age: 23 };
person1 = { name: "Bob", age: 35 }; // Норм

let person11: { name: string; age?: number }; // Свойство age - необязательное

// определение КОРТЕЖА - кортеж состоит из двух элементов - строки и числа
let user: [string, number];

// Интерфейс определяет свойства и методы, которые объект должен реализовать.
// Другими словами, интерфейс - это определение кастомного типа данных, но без реализации.
