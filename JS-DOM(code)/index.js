//monitorEvents(document); ---> It shows the events of the website
//UnmonitorEvents(document);    ---> Turn Off the events


//method-1(not work for remove)
// document.addEventListener('click',function () {
//     console.log('Click event');
// });

//only below method-2 can work on remove
//It does not work on inside listener function
// function eventListner(){
//     console.log('Mouse clicked');
// }
// document.addEventListener('click',eventListner);    //adding
// document.removeEventListener('click',eventListner); //remove


//Event Object --> which shows the all information about the event
// const content = document.querySelector('#heading');
// content.addEventListener('click', function (event) {
//     console.log(event);
// })


//The Default action --> we can change the default working of any element
// let links = document.querySelectorAll('a'); //gets all links in webpage
// let thirdLink = links[2];   //gets 3rd link in all links
// thirdLink.addEventListener('click', function(event){
//     event.preventDefault();
//     console.log("maza aaya...accha lga");
// })
//when you click on 3rd link it will return your text instead of open the facebook page because we change the behaviour of anchor tag


//method-1 (takes more memory)
// let myDiv = document.createElement('div');  //created a new element
// for (let i=1; i<=100; i++){
//     let newElement = document.createElement('p');   //created another element 
//     newElement.textContent = 'This is para ' + i;    //added text in paragraph
//     newElement.addEventListener('click', function () { //adding listner on newElement
//        console.log('I have clicked on para'); 
//     });
//     myDiv.appendChild(newElement);   //appending newElement on myDiv
// }
// document.body.appendChild(myDiv);     //appending myDiv on document 


//method-2(medium optimize)
// let myDiv = document.createElement('div');  //created a new element
// function paraStatus() { //adding listner on newElement
//     console.log('I have clicked on para'); 
//  }
// for (let i=1; i<=100; i++){
//     let newElement = document.createElement('p');   //created another element 
//     newElement.textContent = 'This is para ' + i;    //added text in paragraph

//     newElement.addEventListener('click', paraStatus);
//     myDiv.appendChild(newElement);   //appending newElement on myDiv
// }
// document.body.appendChild(myDiv);     //appending myDiv on document 


//method(optimized which takes less memory)
// let myDiv = document.createElement('div');  //created a new element
// function paraStatus(event) { //adding listner on newElement
//     console.log('I have clicked on para'); 
// }
// myDiv.addEventListener('click', paraStatus);
// for (let i=1; i<=100; i++){
//     let newElement = document.createElement('p');   //created  another element 
//     newElement.textContent = 'This is para ' + i;    //added text in paragraph
//     myDiv.appendChild(newElement);   //appending newElement on myDiv
// }
// document.body.appendChild(myDiv);     //appending myDiv on document 


//Event Target property(fully optimized code)
// let myDiv = document.createElement('div');  //created a new element
// function paraStatus(event) { //adding listner on newElement
//     console.log('para' + event.target.textContent); 
// }
// myDiv.addEventListener('click', paraStatus);
// for (let i=1; i<=100; i++){
//     let newElement = document.createElement('p');   //created  another element 
//     newElement.textContent = 'This is para ' + i;    //added text in paragraph
//     myDiv.appendChild(newElement);   //appending newElement on myDiv
// }
// document.body.appendChild(myDiv);     //appending myDiv on document 


// let element = document.querySelector('#wrapper');
// element.addEventListener('click', function (event) {
//     if(event.target.nodeName === 'SPAN'){   //it will work on perticular element i.e. 'span' 
//         console.log('span pr click kia hai ' + event.target.textContent);
//     }
// });


//Fragment
// let  fragment = document.createDocumentFragment();
// for (let i=0; i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para ' + i;
//     fragment.appendChild(newElement);
// }
// document.body.appendChild(fragment);    //1 Reflow , 1 Repaint


//below code tuns after 5 second --> this is async code which executes when call stack empty
// setTimeout(function(){
//     console.log('hello');
// }, 5000);


//async code
// setTimeout(function(){
//     console.log("third");
// }, 3000)

// //sync code
// function sync(){
//     console.log("second");
// } 
// sync();

// console.log("second");


//Promises
// let meraPromises = new Promise(function (resolve, reject){
//     setTimeout(function(){
//         console.log("I am inside promise");
//     }, 2000);
//     resolve(5566);
// });
// console.log(meraPromises);

//Multiple Promise Creation
// let meraPromise1 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("I am Inside promise-1");
//     },3000);
// });
// let meraPromise2 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("I am Inside promise-2");
//     },5000);
// });

//then() method in promise
// let meraPromise1 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("I am Inside promise-1");
//     },3000);
//     resolve(5624);
// });
// meraPromise1.then((value) => {
//     console.log(value);
// });
// console.log("hi");


//throwing error(method-1)
// let meraPromise1 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("I am Inside promise-1");
//     },3000);
//     reject(new Error("Error Occured"))
// });
// //then() method
// meraPromise1.then((value) => {
//     console.log(value);
// });
// //catch() method
// meraPromise1.catch((error) => {
//     console.log(error);
// });


//method-2
// let meraPromise1 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("I am Inside promise-1");
//     },3000);
//     reject(new Error("Error Occured"))
// });
// //then() method
// meraPromise1.then((value) => {console.log(value)}, (error) => {console.log(error)});


//promise chaining(imp)
// let waada1 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Settimout-1 started")
//     }, 5000);
//     resolve(true);
// })

// let output = waada1.then(() => {
//     let waada2 = new Promise(function(resolve, reject){
//         setTimeout(function(){
//             console.log("settiout-2 started");
//         }, 7000);
//         resolve("waada-2 resolved");
//     })
//     return waada2;
// })

// output.then((value) => {
//     console.log(value);
// });


//Async() --> this does not execues untill one statement complete
async function utility(){

    let delhiMausam = new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("Hot in delhi");
        }, 5000);
    });

    let mumbaiMousam = new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("cool in Mumbai");
        }, 6000);
    });

    let dm = await delhiMausam;
    let mm = await mumbaiMousam;

    return[dm,mm];

}
utility();