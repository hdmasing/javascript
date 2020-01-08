//alert("Hello script file");
const name="hans";
const age=22;
const city="Pärnu";
const job="Tehnik";

console.log("Name," , name, typeof(name));
console.log("Age", age, typeof(age));


function hello(){
    console.log("Hello");

}
hello();
// create a list
//let html='<ul><li> Name:'+ name + '</li><li> Age' + age +'</li><li>City'+ city+'</li><li>Job'+ job  +'</li></ul>'; 

let html = `
    <ul>
        <li>Name: ${name}</li>
    
    </ul>
`;
document.body.innerHTML=html;
//Arrays
const numbers1 = [1, 2, 3, 4, 5];
console.log(numbers1);
console.log(typeof(numbers1));
numbers1.push(6);
console.log(numbers1);
numbers1.unshift(0);
console.log(numbers1);
numbers1.pop();
console.log(numbers1);
numbers1.splice(2, 1);
console.log(numbers1);
let index = numbers1.indexOf(5);
console.log(index);
let mixedArray = [22, 'banana', true];
mixedArray.forEach(element=>{
console.log(element, typeof(element));
});
console.log(mixedArray[1].lenght);

//Objects
let johnName = 'john';
let johnAge = 10;
let steveName='Steve'
let steveAge=20;
let person1 = {
    name:johnName,
    age:steveAge
}
let person2 = {
    name: steveName,
    age: steveAge

}
let people = [person1 ,person2];
console.log(people);
people.forEach(person=>{
    console.log(`person.name + is + ${person.age} + years old`);
})