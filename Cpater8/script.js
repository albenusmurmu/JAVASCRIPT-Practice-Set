
// ! JS (Part 8)
// ! Practice Questions

// * Qs1. Square and sum the array elements using the arrow function and then 
// * find the  average of the array.

// let nums = [2,3,4,6];
// const square = nums.map((num) => num*num);
// console.log(square);
// let sum = square.reduce((acc,cur) => acc + cur  );
// console.log(sum)
// let avg = sum / nums.length;
// console.log(avg);

// * Qs2. Create a new array using the map function whose each element is 
// * equal to  the original element plus 5.

//  let arr = [3,4,5,6,7,8,9,-2,-3]
//  console.log(arr.map((el)=> el+5))
 

// * Qs3. Create  a new array whose elements are in uppercase of words
// * present in the  original array.
// let ele = ['adam','amnish','suresh','arush','abhi','aditiya']
// console.log(ele.map((string) => string.toUpperCase()))

// * Qs4. Write a function called doubleAndReturnArgs which accepts an array and 
// * a variable number of arguments. The function should return a new array with
// * the original array values and all of the  additional arguments doubled.

// const doubleAndReturnArgs = (arr,...args) => [
//     ...arr,
//     ...args.map((v) => v * 2),
//     ];
//     let doub = doubleAndReturnArgs([1,2,3],4,4);// [1,2,3,8,8]
//     let doub2 = doubleAndReturnArgs([2],10,4);//[2,20,8]
    
//     console.log(doub);
//     console.log(doub2);

//* Qs5. Write a function called mergeObjects that accepts two objects and 
// * returns a new object which contains all the keys and values of the first 
// * object and seccond object.

// let mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});
// merge = mergeObjects({a:1,b:2},{c:3,d:4}); // {a:1,b:2,c:3,d:4}
// console.log(merge)