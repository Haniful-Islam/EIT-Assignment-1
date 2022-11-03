// object task one
const person = {
    fName: 'Haniful',
    lName: 'Islam',
    age: 20,
    profession: 'student'
}
// const entriesMethod = Object.entries(person)
// // console.log(entriesMethod);
// document.write('Value:', entriesMethod);
// const keysMethod = Object.keys(person)
// // console.log(keysMethod);
// document.write('Value:', keysMethod);
// const valuesMethod = Object.values(person)
// // console.log(valuesMethod);
// document.write('Value:', valuesMethod);
const hasownMethod = (Object.hasOwn(person, "fName"))
document.write(hasownMethod);

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
document.write(obj2);

