// 1- console.log("Hello Javascript")


// 2 - 

// console.log("Muzamil", 22, "karachi")

// 3- 

// console.warn("Please do not using AI Tool")

// 4- 

// console.error("Your Site is Hacked")

// 5- 

// console.table([2, 3, 4, 5])

// =============Variables================

// 1



// var studentName = "Muzamil Baig";
// var age = 22;


// age = studentName;

// let swap;

// age = swap

// console.log("student name", studentName,  "age", swap)


// 2

// const p1 = "Hello P1";
// console.log(p1);



// 3
// let withoutValue;

// console.log(withoutValue)



// 4- 


// let score = 10;

// console.log(++score)


// 5- 


// let firstName = "Muzamil"
// let lastName = "Baig"
// let fullName = "Muzamil Baig"


// console.log(firstName, lastName,"\n",fullName)



// =============DataTypes================

// let str = "I Am String";
// let num = 10;
// let bool = false;
// let nul = null;
// let und;


// console.log(str, typeof str)
// console.log(num , typeof num)
// console.log(bool, typeof bool)
// console.log(nul, typeof nul)
// console.log(und, typeof und)


// let phoneNum = "+923150240063";

// console.log(typeof phoneNum)



// // 5

// let bigNum = BigInt("10");
// console.log(bigNum)





// =============Type Conversion & Coercion==============


// let age = "22";

// let conNum = Number(age);
// console.log(conNum)

// 2
// console.log(conNum.toString())

// 3

// let myname = "muzamil";

// if(myname === "muzamil"){
//     console.log(true)
// }





// let numOne = "5";
// let numTwo = 2;


// console.log(numOne - numTwo)


// let conNum = "123abc";

// console.log(Number(conNum))







// =============Operators==============

// let numOne = +prompt("Enter The First Number");
// let nunTwo = +prompt("Enter The secound Number");


// 1
// console.log(++numOne + nunTwo++)
// // 2
// console.log(numOne + nunTwo)


// let age = +prompt("Enter The Age");

// let oneAdd = 1;

// age += oneAdd


// console.log(age)
// if (age >= 20 && age <= 50){
//     console.log("Yes You Are Adult")
// }

// else if (age <= 18) {
//     console.log("You Are Kid")
// }
// else{
//     console.log("Please Correct The Number")
// }





// =============Strings==============

// let myName = "Muzamil you learn javaScript";

// console.log(myName.length)
// console.log(myName.toUpperCase())
// console.log(myName.toLocaleLowerCase())





// if(myName.includes("javaScript")){
//     console.log("Were Found")
// }
// else{
//     console.log("Not Found")
// }

// let helWor = "Hello World";

// console.log(helWor.slice(5))


// let appRep = "apple";

// console.log(appRep)
// console.log(appRep.replace("apple", "mango"))


// let courOutline = "Html, Css, Javascript"

// console.log(courOutline.split(" "));


// let extraSpace = "M u z a m i l";
// console.log(extraSpace.replaceAll(" ", ""))


// let repWord = "Hi";

// let fiveTime = repWord.repeat(5);

// console.log(fiveTime.split(" "))

// console.log(fiveTime[0])



// let sentence = `My name is Aman
//                 and I am 20 years old`;


//                 console.log(sentence)









// ========================Numbers & Math======================


// let num = 4.7;
// console.log(Math.round(num) )


// let sqrRoot = 20;

// console.log(Math.sqrt(sqrRoot))



// let numbersMax = [10, 20, 5, 99]

// console.log(Math.max(...numbersMax) )


// let randomNum = Math.random() * 10 ;


// let round = randomNum;


// console.log(Math.round(round)  )




// let num = "99.9";

// // console.log(parseInt(num))

// let conNum = Number(num)

// console.log(Number.isInteger(conNum))





// ============Conditionals================


// 1
// let number = 50;

// if(number > 0){
//     console.log("This is positive");
// }
// else{
//     console.log("This is negative")
// }



// 2

// let num = 1;

// while(num <= 10){
    
//     if(num % 2 === 0){
//         console.log("Even number", num)
//     }
//     else{
//         console.log("Odd number", num)
//     }

//     num++
// }



// 3

// let age = prompt("Enter Your age");

// if(age >= 18 && age <= 60){
//     console.log("You Are Eligible your vote")
// }
// else {
//     console.log("You Are not eligible vote")
// }


// 4

// let numbers = [1, 8, 2, 8, 10, 22, 100];


// let largest = numbers[0];


// for(let i  = 0; i < numbers.length; i++){
 

//         if(numbers[i] > largest){
//              largest = numbers[i];
//         }

// }

// console.log(largest);





// let year = new Date().getFullYear();


// if(year % 4 === 0){
//     console.log(year + " is a Leap Year ")
// }
// else{
//     console.log(year + " is a not leap year")
// }




// let num = 150;

// if(num % 5 === 0 && num % 2 === 0){
//     console.log("Divisible by both 3 and 5")
// }
// else{
//     console.log("Not divisble by both")
// }



// let student = +prompt("Enter The Number");

// if(student >= 90){
//     console.log("Grade A")
// }
// else if (student >= 75 && student <= 90) {
//     console.log("Grade B")
// }

// else if (student >= 40 && student <= 75) {
//     console.log("Grade C")
// }
// else{
//     console.log("Fail")
// }







