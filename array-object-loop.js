// write a program for concatenation two array(using spread operator)
const number3 = [4, 24, 13];
const number4 = [7, 35, 15];
const numbers = [...number3, ...number4];
document.write("<br>",numbers);
// console.log(numbers)

// concat method
const conCat1 = 'Bangladesh is a';
const conCat2 = 'small country'
const result = conCat1.concat(' ', conCat2);//concat method  
document.write("<br>",result);
// console.log(result);

//every method
const number1 = [20, 56, 30, 59, 34, 24];
const everyMetod = number1.every(checkout);
function checkout(num) {
    return num >= 21;
}
document.write("<br>",everyMetod);
// console.log(everyMethod);

// some method
const number2 = [34, 19, 32, 41, 64];
const someMethod = number2.some(checkOut2);
function checkOut2(num1) {
    return num1 > 63;
}
document.write("<br>","some Method:", someMethod)
// console.log(someMethod);

// fill method
const names = ['haniful', 'modhu', 'morsalin', 'raju'];
names.fill('antor', 2, 3)//fill(value,index,default length);
document.write("<br>",names);
// console.log(names);

// from method
// create an array from a string;

let myName = 'haniful'
let fromMethod = Array.from(myName);
// console.log(fromMethod);
document.write("<br>",fromMethod);

// join method
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.join(" * ");
document.write("<br>",fruit);
// console.log(fruit);

// splice method
const names1 = ["morsalin", "haniful", "modhu", 'raju', "rumman"];

names1.splice(1, 2, 'antor');
document.write("<br>",names1);
// console.log(names1)

const names2 = ["morsalin", "haniful", "modhu", 'raju', "rumman"];
const sliceMetod1 = names2.slice(1, 4);
document.write("<br>",sliceMetod1);

// slice method
const age = [1, 2, 3, 4, 5, 6];
const sliceMethod2 = age.slice(2, 4);
document.write("<br>",'slice:', sliceMethod2);

//filter method
const number5 = [3, 4, 5, 6, 7];
const filterMethod = number5.filter(number => number > 5);
// console.log(filterMethod);
document.write('<br>', filterMethod);

// find method
const number6 = [3, 4, 5, 6, 7];
const findMethod = number6.find(number => number > 5)
// console.log(findMethod);
document.write('<br>', findMethod);

//map method
const number7 = [3, 4, 5, 6, 7];
const mapMethod = number7.map(number => number * number);
// console.log(mapMethod);
document.write('<br>', mapMethod);

//includes method
const names11 = ["morsalin", "haniful", "modhu", 'raju', "rumman"];
const includesMethod = names11.includes('haniful',2);//incledes(searchValue, start)

document.write('<br>', includesMethod)


// findindex method
const number8 = [3, 4, 5, 6, 7];
const findIndexMethod = number8.findIndex(number => number > 5);
// console.log(findIndexMethod);
document.write('<br>', findIndexMethod);

// reverse method
const names3 = ["morsalin", "haniful", "modhu", 'raju', "rumman"];
names3.reverse();
// console.log(names3);
document.write('<br>', names3);

// forEach method
const names4 = ["morsalin", "haniful", "modhu", 'raju', "rumman"];
names4.forEach(name => document.write('<br>',name));

// sort method
const names5 = ["morsalin", "haniful",'afif', "modhu", 'raju', "rumman"];
names5.sort();
// console.log(names5);
document.write("<br>",names5);

// push method
const names6 = ["morsalin", "haniful", "modhu", 'raju', "rumman"];
names6.push('afif')
document.write("<br>",names6);

// unshift method
const names7 = ["morsalin", "haniful", "modhu", 'raju', "rumman"];
names7.unshift('afif')
document.write("<br>",names7);


// pop method
const names8 = ["morsalin", "haniful", "modhu", 'raju', "rumman"];
names8.pop('afif')
document.write("<br>",names8);

// shift method
const names9 = ["morsalin", "haniful", "modhu", 'raju', "rumman"];
names9.shift('afif');
document.write("<br>",names9);

// isArray Method
const names10 = ["morsalin", "haniful", "modhu", 'raju', "rumman"];
const isArrayMethod = Array.isArray(names10);
// console.log(isArrayMethod);
document.write('<br>', "isArray: ",isArrayMethod);




// ==============object method==============
// // object task one
const person = {
    fName: 'Haniful',
    lName: 'Islam',
    age: 20,
    profession: 'student'
}
const entriesMethod = Object.entries(person)
document.write('<br>', 'entries: ',entriesMethod);
// console.log(entriesMethod);
const keysMethod = Object.keys(person)
document.write('<br>', 'keys: ', keysMethod);
// console.log(keysMethod);
const valuesMethod = Object.values(person)
document.write('<br>', 'values: ', valuesMethod);
// console.log(valuesMethod);
const hasownMethod = (Object.hasOwn(person, "fName"))
document.write('<br>', hasownMethod);

// object task two
const obj1 = {
    a: 1,
    b: 3,
    c: 4
}
const obj2 = {
    a: 6,
    b: 7,
    c: 8
}

const obj = { ...obj1, ...obj2 };

// console.log(obj);
document.write('<br>', obj2);


//================= loops ============
//================= loops ============
//================= loops ============
// for loop
document.write('<br>','for  loop:')
for(let i = 1; i<=10; i++){
    document.write('<br>',i);
}

document.write('<br>','for of loop:')
// for of loop
const numbers11 = [1,2,3,4,5,6,7,8];
for(const number of numbers11){
    document.write('<br>',number);
}

document.write('<br>','for in loop:')
// for in
const person1 = {
    fName:'Haniful',
    lName: 'Islam',
    age:20,
    profession: 'student'
}
for(const man in person1){
    // console.log(man)
    document.write('<br>',man)
}



