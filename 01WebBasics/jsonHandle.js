const student = {
    name: 'Raghav',
    age: 25,
    isActive: true
}
console.log(student, typeof student);
// convert this object into string to store it in local storage

const studentObjToString = JSON.stringify(student)
console.log(studentObjToString, typeof studentObjToString);

localStorage.setItem('student', studentObjToString);

s = localStorage.getItem('student');
const studentToJson = JSON.parse(s);

console.log(studentToJson, typeof studentToJson);
console.log("My Name is - ",studentToJson.name);