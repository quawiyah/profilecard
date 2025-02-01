/*let firstInput = document.getElementById("fname");
let secondInput = document.getElementById("lname")
let button = document.getElementById("btn")
button.addEventListener("click",function(e){
    e.preventDefault();
    let first = firstInput.value;
    let second = secondInput.value;
    let output = `Hello ${first} ${second}`;
    document.getElementById("result").innerHTML = output;
    console.log(output);
})*/

let theNumber = document.getElementById("number");
let button = document.getElementById("btn");
let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);
button.addEventListener("click",function(e){
    e.preventDefault();
    let number = parseInt(theNumber.value);
    if(number === randomNumber){
        document.getElementById("solution").innerHTML = `You got it right`;
        
    }
    else{
        document.getElementById("solution").innerHTML = `You got it wrong!!! The actual Number is: ${randomNumber}`;
    }
})
let nodeList = document.getElementsByClassName("hello");[0]  // The zero means the index it should bring out
console.log(nodeList);

//document.getElementById("amount").style.color = "red" // To style your html trough js

//let demo = document.getElementById("demo").innerHTML="Hello";
//console.log(demo);

//let newElement = document.createElement("p");    // To create a new element
//newElement.innerHTML="Hello World"
//document.body.appendChild(newElement);
//let anotherElement = document.createElement("h1");
//anotherElement.innerHTML = "What's up";
//document.body.replaceChild(anotherElement, newElement);