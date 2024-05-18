// ! Chap 04

// *Qs:1- Write a java script program to delete all occurrences of element 'num' in a given array.
// * Example: if arr = [1,2,3,4,5,6,2,3]& num = 2
// * Result should be arr = [1,3,4,5,6,3]

// let arr = [1,2,3,4,5,6,2,3]
// let num = 2;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] == num){
//         arr.splice(i,1,)
//     }
// }
// console.log(arr);


// * Qs2:- Write a JS proram to find the no of digits in a number.
// * Example : if number = 287152, count = 6
// let number = 287152;
// let count = 0;
// let copy = number;
// while( copy > 0){
//     count++;
//     copy = Math.floor(copy/10);
// }
// console.log(count);


// * Qs3:- Write a JS program to find the sum of digits in a number.
// * Example : if number = 287152, sum = 25;
 
//  let number = 287152;
// let sum = 0;

// let copy = number;
// while( copy>0 ) {
//      digit = copy % 10; 
//      sum+= digit; 
//      copy = Math.floor(copy/10);
//  }
// console.log(sum);


// * Qs4 :- print the factorial of a number n.
// * [Factorial of a number n is the product of all positive integers less than or
// *  equal to a given positive integer and denoted by that integer]
// * Example : 
// * 7! (factorial of 7) = 1*2*3*4*5*6*7 = 5040
// * 5! (factorial of 5) = 1*2*3*4*5 = 120
// * 3! (factorial of 3) = 1*2*3 = 6
// * 0! Is always 1.
// let n = 5;
// let factorial = 1;
// for (let i = 1; i<=n; i++){
//     factorial *= i;
//     // console.log(`factorial of ${i} = ${factorial}`);
// }
// console.log(`factorial of ${n} is ${factorial}`)
// * Qs5:- Find the largest number in array with only positive numbers.

// let arr = [26,20,30,50,10,40,25,15]
// let largest = 0;
 
// for(let i = 0; i <= arr.length; i++){
//     if(largest < arr[i]){
//         largest = arr[i];
//     }
//     // console.log(largest);
// }
// console.log(largest);
