export class Person{
    private name: string;
    protected lastName: string;
    public age: number;
    active: boolean;

    constructor(name: string, lastName: string, age: number, active: boolean){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.active = active;
    }

    toString(){
        return `${this.name} - ${this.lastName}, ${this.age} - ${this.active}`;
    }
}

const obj = new Person("rajesh", "kumar", 27,true);
console.log(obj)