let add = (a,b) => {
    console.log(a+b);
}
add(30,20);

let person = new Object();
person.name = 'harshit';
person.age = 18; 
console.log(person);

// array
var myInfo = new Array();
var myInfo1 = Array();
console.log(myInfo, myInfo1);


let collection = [
    {},
    [],
    true,
    "john",
    function (){},
    12345432,
    undefined,
    null,
    new Date(),
    new String("abc"),
];
console.log(collection);

collection.teacherName = " John Mac";
collection.phoneNo = 34543234543;
console.log(collection);

const trainerInfo = ["Jitendra", 29, "ghaziabad", {isMarried: true}];
console.log(trainerInfo);
console.log(trainerInfo.length);
trainerInfo.contact = 987898789;
console.log(trainerInfo);
console.log(trainerInfo.length);


