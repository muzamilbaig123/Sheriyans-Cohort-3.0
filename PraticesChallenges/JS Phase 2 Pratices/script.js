// 1    
// (function () {
//     console.log("Hello World")
// })()


// 2

// function sum (a, b) {

//     let sumtwo = a + b;

//     console.log(sumtwo)

//     return sumtwo;
// }

// sum(1, 9)


// 3

// function sqrNum (num) {
//     console.log(num * num)
// }

// sqrNum(2)

// 4

// function checkEvenOdd (num) {

//         if(num % 2 === 0){
//             console.log("Even")
//         }
//         else{
//             console.log("Odd")
//         }

// }

// checkEvenOdd(5)


// 6

// function defPara (guest) {
//     console.log(guest)
// }

// defPara("Guest")




// 7
// function greeterNumber (num1, num2) {

//     if(num1 > num2){
//         console.log(`${num1} is greter`)
//     }
//     else if(num2 > num1){
//         console.log(`${num2} is greeter`);

//     }

// }

// greeterNumber(22, 1)




// 8

// function areaOfRectangle (lenght, width) {
//     let area = lenght * width;
    
//     console.log(area);

//     return area;
// }

// areaOfRectangle(10, 20);

// 9

// const ageCheck = (age) => {
//     if(age < 18 ){
//         console.log("Minor")
//     }
//     else if(age > 18){
//         console.log("Adult")
//     }
//     else{
//         console.log("Please correct Number")
//     }

// }
// ageCheck(20)



// 10


// const revStr = (name) => {
//     let rev = name;
//     let conStr = rev.split('');
//     let fullReverse = conStr.reverse();
//     let final = fullReverse;
//     console.log(...final)
        
// }

// revStr("Hello")














// =============Intermediate Level==============

// const mulExp = (num1, num2) => {
//     let mul = num1 * num2;
//     console.log(mul);

//     return mul;
// }

// mulExp(10, 10)






// const unliNumber = (...nums) => {

//     let totalNums = 0;

//     for(let i = 0; i < nums.length; i++){
        
//           totalNums += nums[i];  
         
          
//         }
        
//         return totalNums
// }

// const finalAns = unliNumber(1, 2, 10);

// console.log(finalAns)




// const checkVovel = (chr) => {
//     let count = 0;
//     let vovWord = ["a", "e", "i", "o", "u"];

//     for(let i = 0; i < chr.length; i++){
//         if(vovWord.includes(chr[i].toLowerCase())){
//             count++
//         }

//     }

//     return count;
// }

// console.log( checkVovel("Hello world") 



let x = 'Tic'

x = "Toc"
x = "Toe"
console.log(x)