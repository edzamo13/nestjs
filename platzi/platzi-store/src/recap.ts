const myName = 'Nicolas';
const myAge = 12;

const sum = (a: number, b: number) => {
  return a + b;
};

sum(12, 23);

class Person {
  //public is implicit
  private age;
  private name;

  constructor(age: number, name: string) {
    this.age = age;
    this.name = name;
  }

  getSummary() {
    return `my name is ${this.name} , ${this.age}`;
  }
}

const nicola = new Person(15, 'Edwin');
nicola.getSummary();
