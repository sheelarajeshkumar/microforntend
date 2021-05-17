function empInfo({name, ...others}){
    console.log(name);
    console.log(others);
}

let xEmp = {
    name:'rajesh',
    age: 28
};

empInfo(xEmp)

function empInfoArray([name, ...others]){
    console.log(name);
    console.log(others);
}
let array = [1,2,3,4,5,6,7]
empInfoArray(array);