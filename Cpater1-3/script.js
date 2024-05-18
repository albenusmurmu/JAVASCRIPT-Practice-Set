// * Qs1:- Create a Number Variable num with some value.
// *  now print "good" if the number is divisible by 10 and print "bad" if the number is not.
// let num="25";
// if(num%10 ===0){
//     console.log("good");
// }
// else{
//     console.log("bad");
// }
// *Qs2:- Take the user's name & age as input using promts.
// * Then return back the following statement to the user as an alert(by subsituting their name & age ):
// * name is age years old.
// * [use template Literals to print this sentence]

    // let name1 = prompt("Enter your Name: ");
    // let age = prompt("Enter your age :");
    // alert(`${name1} is ${age} years old.`);



// * Qs3:- Write a switch statement to print the months in a quarter.
      // * Months Quarter1: January, Febuary,March
      // * Months Quarter2: April, May, June,
      // * Months Quarter3: July, August, September
      // * Months Quarter4: October,november,December
      // * [ Use the number as the case value in switch]
// let quarter = 1;
// switch(quarter){
//     case 1 :
//         console.log("January, Febuary, March");
//         break;
//    case 2 :
//             console.log("April, May, June");
//             break;
//     case 3 :
//             console.log("July, August, September");
//             break;
//     case 4 :
//             console.log("October, november,December");
//             break;
//     default:
//         console.log("not a quarter");        
// }

// * Qs4:- A string is a golden string if it starts with with the character 'A' or 'a' and 
    // * and has a total length greater then 5.
    // * For a given string print if it is golden or not.

// let str="Apna peter";
// if((str[0]==="a" || str[0]==="A" ) && (str.length>5)){
//     console.log("It is golden string");
// }
// else{
//     console.log("It is not golden string");
// }





// * Qs5:- Write a program to find the largest of 3 numbers.
// let a=10;
// let b=40;
// let c= 70;
// if( a>b){
//     if(a>c){
//         console.log(`The largest of a = ${a}`);
//     }
//     else{
//         console.log(` The largest of c = ${c}`);
//     }
// }
// else{
//     if(b>c)
//     {
//   console.log(` The largest of c = ${b}`);
//     }
//     else{
//         console.log( `The largest of c = ${c}`);
//     }
// }


//  * Qs6:- Write a program to check if 2 numbers have the same last digit.
 // * Eg : 32 & 478552 have the same last digit i.e.2
// ! Important
// let num1=32;
// let num2=478552;

// if(num1%10 === num2%10){
//     console.log("They have the same last digit");
// }

// else{
//     console.log("They don't have the same last digit");
// }

// * Qs1:- Write a JavaScript program to get the n element of an array.[n can be any positive number].
// * For example: for array[7,9,0,-2] and n=3; 
// * Print,[7,9,0]
// let number = [7,9,0,-2];
// num.pop();
// console.log(number);
//! 0r
// let num = [7,9,0,-2];
// let n=3
// let ans = num.slice(0,n);
// console.log(ans);


// * Qs2:- Write a JavaScript program to get the last n elements of an array.[n can be any positive number].
// * For example: for array[7,9,0,-2] and n=3
// * Print,[9,0,-2]
// let num=[7,9,0,-2];
// num.shift();
// console.log(num);

// * Qs3:- Write a JavaScript program to check whether a string is blank or not.

// let str = prompt("Please enter Your password");
// // alert("Please enter a strong password");
// if (str.length >= 5){
//     console.log("The string is not blank");
//     //  alert("Please enter a strong password");
// }
// else{
//     alert("Please enter a strong password");
//     // prompt("Minimum Five Character")
//     console.log("The string is  blank");
// }

// * Qs4:- Write a JavaScript program to test whether the character at the given (character) index is lower case.
// let str = "ApNaCoLlEgE";
// let str2 = "3";
// // let str3 = "3";
// if(str[str2]==str[str2].toLowerCase()){
//     console.log("It is lower case");
    
// }
// else{
//     console.log("It is not lower case");
// }

//* Qs5:- Write a javaScript program to strip leading and trailing(removing white space) spacesfrom a string.
//  let str = prompt("Please enter a string");
// //  let str2 = str.trim();
// //  console.log(str2);
// console.log(`Original string = ${str}`)
// console.log( `String without spaces = ${str.trim()}`);
// let xyzx = str;
// console.log(xyzx);

// // * Qs6:- Write a program to check if a string is palindrome or not.

// let arr = ["hello", 'a',23,50,60,90, -6, 2.50];
// let item = 23;
// if (arr.indexOf(item) != -1){
//     console.log("The element is present in the array");
// }

// else{
//     console.log("The element is not present in the array");
// }