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

const names = ['haniful', 'modhu', 'morsalin', 'raju'];

names.fill('antor', 2,3)//fill(value,index,default length);
document.write(names);
// console.log(names);

// from method
// create an array from a string;

let myName = 'haniful'
let fromMethod = Array.from(myName);
// console.log(fromMethod);
document.write(fromMethod);


// join method
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.join(" * ");
console.log(fruit);
