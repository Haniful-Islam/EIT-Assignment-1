// write a program for concatenation two array(using spread operator)
const number3 = [4, 24, 13];
const number4 = [7, 35, 15];
const numbers = [...number3, ...number4];
// document.write(numbers);
// console.log(numbers)

// concat method
const conCat1 = 'Bangladesh is a';
const conCat2 = 'small country'

const result = conCat1.concat(' ', conCat2);//concat method  
// document.write(result);
// console.log(result);

//every method
const number1 = [20, 56, 30, 59, 34, 24];
const everyMetod = number1.every(checkout);
function checkout(num) {
    return num >= 21;
}
// document.write(everyMetod);
// console.log(everyMethod);
// some method
const number2 = [34, 19, 32, 41, 64];
const someMethod = number2.some(checkOut2);
function checkOut2(num1) {
    return num1 > 63;
}
// document.write("some Method:", someMethod)
// console.log(someMethod);

// fill method
const names = ['haniful', 'modhu', 'morsalin', 'raju'];
names.fill('antor', 2, 3)//fill(value,index,default length);
// document.write(names);
// console.log(names);

// from method
// create an array from a string;

let myName = 'haniful'
let fromMethod = Array.from(myName);
// console.log(fromMethod);
// document.write(fromMethod);


// join method
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.join(" * ");
// document.write(fruit);
// console.log(fruit);

// splice method
const names1 = ["morsalin", "haniful", "modhu", 'raju', "rumman"];

names1.splice(1, 2, 'antor');
// document.write(names1);
// console.log(names1)

const names2 = ["morsalin", "haniful", "modhu", 'raju', "rumman"];
const sliceMetod1 = names2.slice(1, 4);
// document.write(sliceMetod1);

// slice method
const age = [1, 2, 3, 4, 5, 6];
const sliceMethod2 = age.slice(2, 4);
// document.write('slice:', sliceMethod2);

//filter method
const number5 = [3, 4, 5, 6, 7];
const filterMethod = number5.filter(number => number > 5);
// console.log(filterMethod);
// document.write('<br>', filterMethod)

// find method
const number6 = [3, 4, 5, 6, 7];
const findMethod = number6.find(number => number > 5)
// console.log(findMethod);
// document.write('<br>', findMethod)

//map method
const number7 = [3, 4, 5, 6, 7];
const mapMethod = number7.map(number => number * number);
// console.log(mapMethod);
// document.write('<br>', mapMethod)



// findindex method
const number8 = [3, 4, 5, 6, 7];
const findIndexMethod = number8.findIndex(number => number > 5);
// console.log(findIndexMethod);
// document.write('<br>', findIndexMethod);

// reverse method
const names3 = ["morsalin", "haniful", "modhu", 'raju', "rumman"];
names3.reverse();
// console.log(names3);
// document.write('<br>', names3)

// forEach method
const names4 = ["morsalin", "haniful", "modhu", 'raju', "rumman"];
// names4.forEach(name => document.write('<br>',name));

// sort method
const names5 = ["morsalin", "haniful",'afif', "modhu", 'raju', "rumman"];
names5.sort();
// console.log(names5);
// document.write("<br>",names5);

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
