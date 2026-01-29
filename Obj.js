// // object is the collection of any type of data 
// const person ={
//     name : 'testing',
//     age: 20,
//     hobbies:['tv'],
//     greet: function(){
//         console.log("Hello")
//     }
// }


// // access values form object
// console.log(person.name)
// console.log(person['name'])

// // adding or modifying the data of obj 
// person.job = "react developer"
// person.salary = 50000
// console.log(person)

// delete person.salary
// console.log(person)

//nested object
const person1={
    name : "khushi",
    age : 20,
    address :{
        city:"keshod",
        zipcode:'362220',
        street :"123 main st."
    }
}
console.log(person1)
console.log(person1?.address?.city)
console.log(Object.keys(person1))
console.log(Object.values(person1))
