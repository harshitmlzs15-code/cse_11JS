// JSON parsing
let text = '{"employees":[' +
    '{"firstName":"John", "lastName":"Doe"},' +
    '{"firstName":"Anna", "lastName":"Smith"},' +
    '{"firstName":"Peter", "lastName":"Jones"}]}';

const obj = JSON.parse(text);
//json.stringify
document.getElementById("demo").innerHTML =
    obj.employees[1].firstName + " " + obj.employees[1].lastName;

// for...of loop
let arr = [10, 20, 30, 40];
for (let value of arr) {
    console.log(value); // 10, 20, 30, 40
}