let lastName = " nagu ";  //it is normal string

// let firstName = new String("NT");   //it is object

// // let msg = `This is  
// my first 
// message` ;
// console.log(msg);

// let words = msg.split(" ");
// console.log(words);

//template literal
// let msg = `Hello, 
// My Name Is
// ${lastName}`;
// console.log(msg);


//Date and Time
// let date = new Date();
// console.log(date);  //returns current date and time

//arrays
// let numbers = [1,3,5,7];
// console.log(numbers);

// numbers.push(9); ----> At begining
// numbers.unshift(8); ----> At ending
// numbers.splice(2, 0, 'a','b','c','d'); ----> At middle

//searching realated to values
// console.log(numbers.indexOf(5));    //index of 5 ..If number not present in an array then it will returns -1

// console.log(numbers.includes(8));   //it returns the given number is present or not


// //Callback function
// let courses = [
//     {no : 1, name : 'nagu'},
//     {no : 2, Name : 'sagu'}
// ];
// console.log(courses);
// let course1 = courses.find(function(course){
//     return course.name == 'nagu';
// })
// console.log(course1);


//Callback function using arrow
// let courses = [
//     {no : 1, name : 'nagu'},
//     {no : 2, name : 'sagu'}
// ];
// // console.log(courses);
// let course1 = courses.find(course => course.name === 'sagu');
// console.log(course1);


// let numbers = [1,2,3,4,5,6,7];
// numbers.pop();  //Removes at end 
// numbers.shift();    //Removes at start
// numbers.splice(2,1);     //Removes at middle
// console.log(numbers);


//Emptying an array
// let numbers = [1,2,3,4,5,6];
// let number1 = numbers;
// // numbers = [];   //this help removing array but it is not suffiecient because if we create another variable and store this array in that variable then all elements are stored in that variable with help of their addresses...so we use another method
// numbers.length = 0; //this will completly empty the array
// console.log(numbers);
// console.log(number1);


// //Combining the arrays
// let first = [1,2,3];
// let second = [4,5,6];
// let combined = first.concat(second);
// console.log(combined);


//Slicing the arrays
// let first = [1,2,3,4,5,6,7];
// let sliced = first.slice(1,3);   //here index 1 and 2 are slices not 3
// let sliced1 = first.slice(2);   //it slicices all elements from 2nd index
// let sliced2 = first.slice();    //it makes original copy of the array
// console.log(sliced);


//spred operator
// let first = [1,2,3];
// let second = [4,5,6];
// let combined = [...first,'a',true, ...second,'b',false];
// console.log(combined);


//Iteration in array
// //for of loop
// let arr = [10,20,30,40,50];
// for (let val of arr){
//     console.log(val);
// }

//for each loop
// let arr = [10,20,30,40,50];
// arr.forEach(number => console.log(number));


//Joining the array
// let numbers = [10,20,30,40,50];
// const joined = numbers.join(',');
// console.log(joined);


//spliting the array --> for breaking the array
// let message = 'This is my first message';
// let parts = message.split(' '); 
// console.log(parts);

// //for joining again the array
// let joined = parts.join('_');
// console.log(joined);


//sorting and reversing the array
// let numbers = [5,6,1,0,9,8,4,3];
// numbers.sort(); //sort in acending order
// console.log(numbers);
// numbers.reverse(); //print array in reverse
// console.log(numbers);


//sorting and reversing the array on objects --> not sure about the output
// let courses = [
//     {no : 4, name : 'nagu'},
//     {no : 1, Name : 'sagu'},
//     {no : 5, name : 'na'},
//     {no : 2, Name : 'sa'}
// ];
// let sorted = courses.sort(function(value){
//     return value ;
// });
// console.log(sorted);


//filtering the array using predicate /callback function
// let number = [1,2,-1,-4];
// let filtered = number.filter((value) =>  value >= 0);
// console.log(filtered);


//mapping the array
// let numbers = [7,8,9,10];
// console.log(numbers);
// let items = numbers.map((value) =>  'student_no' + value);
// console.log(items);


//mapping with objects
// let number = [1,2,-6,-9];
// let filtered = number.filter(value => value >= 0); 
// console.log(filtered);
// let items = filtered.map((num) =>  obj = {value : num});
// console.log(items);

//step-1(created an array)
// let number = [1,2,-6,-9];
//step-2(create predicate function for filter whitch takes only +ve values)
// let filtered = number.filter(function(value){
//     return value >= 0;
// })
//step-3(created predicate function for map..it map the values into seperate objects)
// let items = filtered.map(function(num){
//     return obj = {value : num};
// })


//using chaining
let number = [1,2,-6,-9];
console.log(filtered);
let items = number
                               .filter(value => value >= 0)
                               .map((num) =>  obj = {value : num});
console.log(items);
 
