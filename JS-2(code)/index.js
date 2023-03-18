//Creating a object
// let rectangle = {
//     length : 2 , 
//     breadth : 5,

//     draw  :  function() {
//         console.log('drawing rectangle');
//     }

// };


//Factory Function---> It Create function as object and returns
// function createRectangle(l,b){ 
//     //object creation
//     return rectangle1 = {
//         //properties
//         length : l , 
//         breadth : b ,
    
//         //behaviour
//         draw() {
//             console.log('drawing rectangle');
//         }

//     };
// }
// //creating the factoryfunction object and calling the function
// let rectabgleObj1 = new createRectangle(5, 4);
// let rectabgleObj2 = new createRectangle(5, 4);
// let rectabgleObj3 = new createRectangle(5, 4);
// console.log(rectabgleObj1);
// console.log(rectabgleObj2);
// console.log(rectabgleObj3);


//Camelcase
//Pascalnotation
//'this' keyword refers to yhe current object
//Construction Function
// function Rectangle(len,bre){
//     this.length = len;
//     this.breadth = bre;

//     this.draw = function() {
//         console.log("drawing");
//     }
// }
// let rectangleObject = new Rectangle(4,5);
// console.log(rectangleObject);


//Dynamic Nature Object --> we can add or remove properties of the objects
// function Rectangle(len,bre){
//     this.length = len;
//     this.breadth = bre;

//     this.draw = function() {
//         console.log("drawing");
//     }
// }
// let rectangleObject = new Rectangle(4,5);
// console.log(rectangleObject);

// rectangleObject.color = 'yellow';
// console.log(rectangleObject);

// delete rectangleObject.color;
// console.log(rectangleObject);


//Primitive Types
// let a = 10;
// let b = a;
// a++;
// console.log(a);
// console.log(b);


//Reference Types
// let a = {value : 10};
// let b = a;
// a.value++;
// console.log(a.value);
// console.log(b.value);

//primitives are copied by their values
//references are copied by their address 


//pass by value
// let a = 10;
// function inc (a){   //creates new copy of a which is increse by 11 but it valid inside function
//     a++;
// }
// inc(a);
// console.log(a); //this line take initial variable value


//pass by reference
// let a = {value : 10};
// function inc(a){
//     a.value++;
// }
// inc(a);
// console.log(a);     //here address of 'a' can chnage the value of 'a'

//Primitive ---> number, string, boolean, undefined, null, symbol
//Reference ---> functions, objects, arrays


//for-in loop
// let rectangle = {
//     length : 2,
//     breadth : 4
// };
// for(let key in rectangle){
//     console.log(key, rectangle[key]);
// }

//keys are reflected through key variable
//values are reflected through rectangle[key]


//for-of loop
// let rectangle = {
//     length : 2,
//     breadth : 4
// };
// for (let key of Object.entries(rectangle)){    //it creates array of keys.printing key-pair values
//     console.log(key);
// }


// let rectangle = {
//     length : 2,
//     breadth : 4
// };
// if ('color' in rectangle) {
//     console.log('Present');
// }
// else {
//     console.log('Absent');
// }


//Object cloning using iteration
// let src = {
//     a : 10,
//     b : 20,
//     c : 30
// };
// let dest = {};
// for (let key in src){
//     dest[key] = src[key];
// }
// console.log(dest);

//Object cloning using assign
// let src = {
//     a : 10,
//     b : 20,
//     c : 30
// };
// let src2 = {value : 25}; 
// let dest = Object.assign({}, src, src2);
// console.log(dest);

//Object cloning using sprede
let src = {
    a : 10,
    b : 20,
    c : 30
};
let dest = {...src};
console.log(dest);
