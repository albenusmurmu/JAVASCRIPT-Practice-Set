// * chapter 6

//  Logic Based Questions
// * to find greatest value
// let arr = [4,6,60,79,5,65,90,30,40];
// let large = 0;
// function largeNo(large){
//     for(let i=0; i<arr.length; i++){
//         if(large<arr[i]){
//             large = arr[i];
//         }
//     }
//     console.log(large);
// }
// largeNo(large)

//* Qs1:- Write a javaScript function thet returns array elements larger than a number.
// * output = [8,9,10,6,7]
// let arr = [8,9,10,1,2,3,4,5,6,7];
// let num = 5;
// function largeNo(arr,num){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>num){
//             console.log(arr[i]);
//         }
//     }
//    }
// largeNo(arr,num)

// * Qs2:- Write a javaScript function to extracts a list of country names as input
// * and returns the longest country name as output.
// * Example str = "abcdabcdefgggh"
// * Ans = "abcdefgh"
// ! Important
// let str = ("abcdabcdefgggh");
//  function getUnique(str){
//     let ans = "";
    
//     for(let i = 0; i<str.length; i++){
//         let currChar = str[i];
        
//         if(ans.indexOf(currChar) == -1){
//             // if current is not added, then add it in 
            
//             // otherwise it is a duplicate.
//             ans += currChar;
//         }
//     }
//     return ans;
//  }
 
//  console.log(getUnique(str));

//* Qs3:- Write a javaScript function that sccepts a list of country names as input
//* and return the longest country name as output.
// * Example : country = ["Australia", 'Germany',"United State of America"]
// * output : "United State of America"

// let country = ["Australia", 'Germany', "United State of America"];

// function longestName(country){
//     let ansIdx = 0;
//     for( let i=0; i < country.length; i++){
//         let ansLen = country[ansIdx].length;
//         let currLen = country[i].length;
//         if(currLen > ansLen){
//             ansIdx = i;
//         }
//     }
//     return country[ansIdx];
// }

// console.log(longestName(country))



// *Qs4:- Write a javaScript funtion to count the number of vowels in a 
// * string argument.

// let str = "albenuspetermurmu"

// function countVowels(str){
//     let count = 0;
//     for( let i = 0; i<str.length; i++){
//         if(
//             str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u" 
//             ){
//                 count++;
//             }
//         }
//     return count;
// }
// console.log(countVowels(str))

// * Qs5:-Write a JavaScript Function to generate a random number within a range(start,end)

// let start = 100;
// let end = 200;
// function generateRandom(start, end){
//     let diff = end - start;
//     return Math.floor(Math.random() * diff) + start;
// }

// console.log(generateRandom(start, end))
