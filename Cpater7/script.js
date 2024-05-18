
// ! Part - 7

// *
// * Qs1:-  Weite an arrow function named arrayAverage that accepts an array 
// * of numbers and returns the average of those numbers

// let arr = [1,2,3,4,5,6];

// const arrAvg = (arr) => {
//     let total = 0;
//     for(let number of arr){
//         total+=number;
//     }
//     return total / arr.length;
// }

// console.log(arrAvg(arr));

// * Qs2:- Write an arrow function named isEven() that takes a single 
// * number as argument and returns if it is even or not.

// let num = 4;
// const isEve = (num) => num%2==0;
// console.log(isEven(num))



// * Qs3:- What is the output of the following code:
//  const object = {
//      message : 'Hello,World',
     
//      logMessage(){
//          console.log(this.message);
//      }
     
//  };
// setTimeout(object.logMessage,1000);//use .bind(object) then the out put is helloworld 

// * Qs4:- What is the output of the following code:

// let length = 4;

// function callback(){
//     console.log(this.length);
// } 
// const object = {
//     length: 5 ,
//     method(callback){
//         callback();
//     },
// };
// object.method(callback,1,2);