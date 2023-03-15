//below code print the string in browser's console
//This is external JS file which is linked to html file
// console.log("Hello welcome to JavaScript 4");

//variable declaration using let keyword
// let a = 5;
// let b = "hello";
// let c = 9.5;
// let d = true;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

//variable declaration using var keyword
// var a1 = 5;
// var b1 = "hello";
// var c1 = 9.5;
// var d1 = true;
// console.log(a1);
// console.log(b1);
// console.log(c1);
// console.log(d1);

//let vs var
//when we use let then it valid only till program termination after it will dead
//var is global variable
//redeclaration is allowed in var but not in let

// //const variable
// const num = 12;
// num = 13;   //It throws an error because we can't change the const variables

//Dynamic Typing-->You can change the variable type anytime
// let Fname = "Nagu";
// console.log(Fname);
// Fname = 3;
// console.log(Fname);

//Arithmetic operators
// let a = 8;
// let b = 2;
// let c = a + b;
// let c = a -  b;
// let c = a /  b;
// let c = a % b;
// let c = a ** b;
// let c = a * b;
// console.log(c);

//pre-increment ----> ++x
// let x = 10;
// console.log(++x);   //prints 11

// //post-increment ---> x++
// let a = 6;
// console.log(a++);   //prints 6 
// console.log(a);        //prints 7 

//Example of pre-increment and decrement
// let a = 5;
// let b = 10;
// let ans1 = (++a) * (--b);   //here a=6 & b=9
// let ans2 = (a++) * (--b);   //here a=6 & b=8
// let ans3 = (a++) * (b--);   //here a=7 & b=8
// let ans4 = (++a) * (b--);   //here a=9 & b=7
// console.log(ans1);
// console.log(ans2);
// console.log(ans3);
// console.log(ans4);

//Assignment operator
//x = x +5  or  x += 5
//x = x * 3 or  x *= 3

//comparison Operator
// console.log(2 > 3);
// console.log(2 < 3);
// console.log(2 >= 3);
// console.log(2 <= 3);
// console.log(2 === 3);   //strict equality(value+data checks)
// console.log(2 == 3);    //loose equality(value checks)
// console.log(2 !== 3);

//Ternary operator
// let age = 21;
// let status = (age >= 18) ? 'Yes Vote' : 'No Vote' ;
// console.log(status);

//If-Else
// let marks = 98;
// if (marks >= 90){
//     console.log('A');
// }
// else if(marks >= 80){
//     console.log('B');
// }
// else if(marks >= 70){
//     console.log("C");
// }
// else if(marks >= 60){
//     console.log("D");
// }
// else{
//     console.log('E');
// }

//Switch case
// let num = 2;
// switch(num) {
//     case 1 : console.log('A');
//     break;
//     case 2 : console.log('B');
//     break;
//     case 3 : console.log('C');
//     break;
//     default : console.log('E');
// }

//for loop
// for (let i=1; i<=5;  i++){
//     console.log(i);
// }

//while loop
// let i = 0;
// while(i <= 10){
//     console.log(i);
//     i++;
// }

//Do-while loop
let a = 1;
do{
    console.log(a);
    a++;
}while(a < 8);
  