//two types of data types 
//1.primitve
    //Number
    //BigInt
    //String
    //Boolean
    //Symbol
    //null (value che tane value consider keri shako)
    //undefined
//2. non primitive
    //array
    //object
    //function

//1.primtive

//number
let num =1;
let num2 =2;

console.log("num",num ,num2);
//string

let name ="khushi";
let name2 ="nirali";

console.log("name",name,name2);
//boolean
let isTrue = true;
let isFalse = false;
console.log("boolean :",isTrue);
//undefined
let a;
console.log("undefined :",a);
//Bigint
 let BigInt = 123456778900887655;
 console.log(BigInt);

 //2.non primtive
 //object
  
 let student ={
    name:"khushi",
    roll:"3",
    adress:{
        city :"ksd",
    }
 }
 console.log(student);
 //array
 let b =[1,2,3,4,5,6,7,8,9,];
 console.log(b);

 //array of obejct
 let student1 ={

 }
 let arrayofstudent1 = [{},{}]
console.log(student1);
//function
function greet(){
    console.log("this is function");
}
greet();
//paramitterized function

function showvalues(value){
    console.log("this is value:",value);
    if(value==19){
        console.log("number -------");
    }
    
}
showvalues();
showvalues(19);
showvalues([1,2,3,4,5,]);
 

//function add(num1,num2){
    //sum=num1+num2;
    //console.log("ADD=",sum);
//}
//add(5,10);
//function sub(num1,num2){
    //sub=num1-num2;
    //console.log("SUB=",sub);
//}
//sub(10,5);
//function multi(num1,num2){
    //multi=num1*num2;
    //console.log("MULTIPLICATION=",multi);
//}
//multi(5,10);
//function div(num1,num2){
    //div=num1/num2;
    //console.log("division =",div);
//}
//div(20,5);
//arithmatic operater

const add =(num1,num2)=>{
    return num1+num2
}
console.log('this is arrow function : ', add(50,10))
const sub =(num1,num2)=>{
    return num1-num2
}
console.log('this is arrow function : ', sub(50,10))
const multi =(num1,num2)=>{
    return num1*num2
}
console.log('this is arrow function : ', multi(50,10))
const div =(num1,num2)=>{
    return num1/num2
}
console.log('this is arrow function : ', div(50,10));
//assiement operaters
let value =10;
console.log('DEFULIT VALUE :',value);

value += 5//value+5
console.log(value)

value -= 5//value-5
console.log(value)

value *= 5//value*5
console.log(value)

value /= 5//value/5
console.log(value)

let age =20;
let hasId =true
let nm="khushi"
let obj={
    nm :'khushi',
    rollno : 26
}

console.log("logical AND (&&) :",age>18 && hasId);

console.log("logical OR (||) :",age<18 || hasId);

console.log("logical NOT (!) :", ! hasId)
console.log(typeof age)
console.log(typeof hasId)
console.log(typeof nm)
console.log(typeof obj)
// conditional operater

let value1 =10;
let number = "10";

console.log(" value == number :",value == number);
console.log(" value === number :",value === number);
console.log(" value != number :",value != number);
