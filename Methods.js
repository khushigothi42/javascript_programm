// //string methods
// //length(validation ma jrur pade string ne count kerva m ate ex.passowerd)
// //trim()
// //toUppercase()
// //toLowercase()
// //includes()
// //indexof()
// //slice()
// //substring()
// //replace()
// //concat()
// //split()

// let str = " Hello  javascript  world "
// console.log(str)
// console.log(" length() : ",str.length)

// //remove space kerva mate trim(ther two type of trim ltrim(left) and rtrim(right) )

// let trimtext = str.trim()
// console.log("trim() : ",trimtext)

// //toUppercase

// console.log("toUppercase () : ",str.toUpperCase())

// //toLowercase

// console.log("toLowercase () : ",str.toLowerCase())

// //includes  condtiton wise work kro tyre jarur pade
// console.log("includes :",str.includes("javascript"))
// console.log("includes :",str.includes("test"))

// //indexof
// console.log("indexof() :",str.indexOf("javascript"))

// //slice   phale thi string  ne jovi hoiy tyre mynese ji jrur pade 
// console.log("slice() :",str.slice(2,7))

// //substring   same as a slice but nagative value na api shako
// console.log("substirng() :",str.substring(2,7))

// //replace
// console.log("replace() : ",str.replace("javascript ","react"))

// //conncat joint keride 
// let extraRext = " - HELLO JS";
// console.log("Concat : ", str.concat(extraRext))

// //split
// console.log("split :", str.split(" "));


// //array method
//  // length()
//  // Push()
//  // Pop()
//  // unshift()
//  // shift()
//  // concat()
//  // includes()
//  // indexof()
//  // Splice()
//  // slice()
//  // join()
//  // delete()
//  //filter()
//  //find()
//  //for each()
//  //sort()
//  //reverse()
//  //flat()


// let arr = ['one','two','three','four','five']
// console.log("Defult Array : ",arr)

// console.log("length() :",arr.length)
// //console.log("push () :",arr.push("new added element"))
// arr.push("new adde element")
// console.log("array after push : ",arr)

// arr.pop()
// console.log("array after pop :",arr)
// arr.unshift("first element")
// console.log('array after unshift :',arr)

// arr.shift()
// console.log('array after shift :',arr)
// let newArr = ["str 1","str 2"];
// let MixedArr = arr.concat(newArr)//new array ape concat
// console.log("defult array after concat :",MixedArr)
// console.log("include () :",arr.includes("three"))
// console.log("indexof() :",arr.indexOf("two"))
// console.log("slice() :",arr.slice(2,4))
// console.log("splice() : ",arr.splice(2,4))
// console.log("old array : ",arr)
// console.log("join () :",arr.join (","))

// delete arr[4]
// console.log(arr)

// console.log("Array interation method :")
// let numbers =[1,2,3,4,5,]

// console.log("map : ", numbers.map(num => num * 2))
// console.log("after map old array : ", numbers)

// console.log("filter : ", numbers.filter(num => num > 2))
// console.log("after filter old arry : ", numbers)

// console.log("forEach : ")
// numbers.forEach(num => console.log(num))

// let num =[3,5,2,4,1]
// //console.log("sort() :", num.sort())
// console.log("reverse() :", num.reverse())

// let nestedArray = [1,2,[3,4],[5,6]]
// console.log("defult nested array :",nestedArray)
// let flatArray = nestedArray.flat()
// console.log("flatArray :",flatArray)

// //array destructuring
// let array = [1,2,3,4,5]
// const [first ,second,third ] = array
// console.log(first)
// console.log(second)
// console.log(third)\

//skipping values
let array1 =[1,2,3,4]
const [first ,third ] = array1
console.log(first)
console.log(third)

// rest operator
const num1 =[1,2,3,4,5]
const [fir,second ,...rest] = num1
console.log(fir)
console.log(second)
console.log(rest)