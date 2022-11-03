// for loop
document.write('<h3>for loop:<h3>');
for(let i = 1; i<=10; i++){
    document.write('<br>',i);
}

document.write('<h3>for of loop:<h3>');

const numbers = [1,2,3,4,5,6,7,8];
// for of loop
for(const number of numbers){
    document.write('<br>',number);
}
document.write('<h3>for in loop:<h3>');
const person = {
    fName:'Haniful',
    lName: 'Islam',
    age:20,
    profession: 'student'
}

// for in
for(const man in person){
    // console.log(man)
    document.write('<br>',man)
}


