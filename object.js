// object task one
const person = {
    fName: 'Haniful',
    lName: 'Islam',
    age: 20,
    profession: 'student'
}
// const entriesMethod = Object.entries(person)
// document.write('<br>', 'entries:',entriesMethod);
// // console.log(entriesMethod);
// const keysMethod = Object.keys(person)
// document.write('<br>', 'keys:', keysMethod);
// // console.log(keysMethod);
// const valuesMethod = Object.values(person)
// document.write('<br>', 'values:', valuesMethod);
// // console.log(valuesMethod);
// const hasownMethod = (Object.hasOwn(person, "fName"))
// document.write('<br>', hasownMethod);

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

console.log(obj);
// document.write('<br>', obj2);

