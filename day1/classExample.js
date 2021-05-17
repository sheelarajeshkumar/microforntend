class Emp{
    constructor(name, position){
        this.name = name;
        this.position = position;
    }
    toString(){
        return this.name + ' -- '+ this.position;
    }
}

class Manager extends Emp {
    static default(){
        return new Manager('1','2','3');
    }
    constructor(name, position, project){
       super(name, position);
       this.project = project;
    }
    toString(){
        return this.name + ' -- '+ this.position + ' -- '+ this.project;
    }
}

console.log(Manager.default())