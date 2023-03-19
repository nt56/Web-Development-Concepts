//function declaration--->hoisting works here
// function run(){
//     console.log ("running");
// }
// run();   //calling the function


// //named function assignment --> hoisting not works here
// let stand = function walk(){
//     console.log("walking");
// };
// stand();    //no walk() calling the function


//Anonymous function assignment --> hoisting not works here
// let stand = function(){
//     console.log("walking");
// };
// stand();    //no walk() calling the function


//Dynamic function
// function sum(a,b){
//     return a + b;
// }
// console.log(sum(1,2));  //returns 3
// console.log(sum(1));    //returns NaN for undefined 'b'
// console.log(sum());     //returns NaN for undefined 'a' & 'b'
// console.log(sum(2,4,6,8));  //takes first two parameters(2,4) rest will be waste of memory


// //specail object
// function sum(a,b){
//     console.log(arguments);
//     return a + b;
// }
// let ans = sum(1,2,3,4,5,6,7,8.9);   //remaining parameters are stored in arguments as a object kay value pair format
// console.log(ans);


//Dynamic function using argument 
// function sum(){
//     let total = 0;
//     for (let value of arguments)
//         total = total + value;
//     return total;
// }
// let ans = sum(1,2,3,4,5,6,7,8,9);   //if you pass any number of parameter or not it will gives correct output
// console.log(ans);


// //REST operator - 1
// function sum(...args){
//     console.log(args);
// }
// sum(1,2,3,4,5,6);   //it will be stored in an array


//REST operator - 2 --> you can't write any parametere next of args
// function sum(num, value, ...args){
//     console.log(args);
// }
// sum(1,2,3,4,5,6);   //num - 1, value -2, args - rest of all


// //Default parameters - 1
// function interest(p, r=10, y=5){    //here r & y are the default parametrs
//     return p * r * y / 100;
// }
// console.log(interest(10000));   //you have to write all default parametrs from right of 'r'


//Default parameters - 2 (not recommended)
// function interest(p, r=10, y=5){    //here r & y are the default parametrs
//     return p * r * y / 100;
// }
// console.log(interest(10000, undefined, 8));   //you can declare undefined then it will execute
// //here p-10000, r-10, y-8 


//getter ---> access properties
//setter ---> change or mutate properties
//Demonstation
// let person ={
//     Fname : 'nagu',
//     Lname : 'tirth',

//     get fullName(){
//         return `${person.Fname}  ${person.Lname}`
//     },

//     set fullName(value){
//         let parts = value.split(' ');
//         this.Fname = parts[0];
//         this.Lname = parts[1];
//     }
// };

// person.fullName = 'sagu tirth';
// console.log(person.fullName);


//Error Handling
// let person ={
//     Fname : 'nagu',
//     Lname : 'tirth',

//     get fullName(){
//         return `${person.Fname}  ${person.Lname}`
//     },

//     set fullName(value){
//         if (typeof value !== String){
//             throw new Error("You have not sent a String");
//         }

//         let parts = value.split(' ');
//         this.Fname = parts[0];
//         this.Lname = parts[1];
//     }
// };
// try{
//     person.fullName = true;
// }
// catch(e){
//     alert(e);
// }
// console.log(person.fullName);


//Reduce function
let arr = [1,2,3,4];
let totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(totalSum);