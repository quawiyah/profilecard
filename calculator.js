let input = document.getElementById("show");
let numberButtons = document.querySelectorAll(".btn");
let buttons = document.querySelectorAll(".btn");
let buttonOperator= document.querySelectorAll('.operator');
let result = document.querySelector('.result');

// let tipValue = "";
// let science = "";

// buttons.forEach(function(btn) {
//     btn.addEventListener("click", function() {
//         tipValue = Number(btn.getAttribute("data-tip"))
//         input.value += tipValue;
//     })
// })
let currentVal='';
let currentOperator='';

// numberButtons.forEach(function(btn){
//     btn.addEventListener('click',function(){
//         console.log('Welcom');
//         const buttonValue = btn.getAttribute('data-tip');
//         input.value += buttonValue;
//         currentVal=input.value;
//         // console.log(input);
        
//     })
// })

// buttonOperator.forEach(function(btn){
//     btn.addEventListener('click',function(){
//         console.log('GoodBye');
//         if(currentVal !== '' && !['+', '-', '*', '/'].includes(currentVal.slice(-1))){
//             const operator =btn.getAttribute('data-tip');
//             // currentOperator = btn.getAttribute('data-tip');
//             input.value +=operator;
//             currentVal =input.value;
//             currentOperator = operator;
//             // console.log(input);
            
//         }
        
//     })
// })

// result.addEventListener('click',function(){
//     // input.value = currentVal;
//     if(currentVal != ''){
//         try {
//             // Evaluate the expression safely
//             const result = eval(currentVal);
//             input.value = result;
//             currentVal = result.toString();
//             currentOperator = ''; // Clear operator after calculation
//         } catch (error) {
//             console.error('Error in calculation:', error);
//             input.value = 'Error';
//         }
//     }
// })



let val = '';


buttons.forEach(function(button) {
    button.addEventListener("click", function(e) {
        let buttonText = e.target.innerHTML;
        
        if(buttonText === "="){
            val = processExpression(val);
            val = eval(val);
            // try {
            //     // Evaluate the expression with trigonometric functions in degrees
            //     val = processExpression(val);
            //     val = eval(val);
            // } catch (error) {
            //     val = "Error";
            // }
            // //val = eval(val);
            input.value = val;
        }
        else if(buttonText === "AC"){
            val = "";
            input.value = val;
        }
        else if(buttonText == "DEL"){
            val = val.substring(0, val.length-1);
            input.value=val;
        }
        else if (["Sin", "Cos", "Tan", "Log"].includes(buttonText)) {
            // Add the function to the expression
            val += `${buttonText}(`;
            input.value = val;
        }
        else if (buttonText === ")") {
            // Close any open parentheses
            val += ")";
            input.value = val;
        }
        else if (buttonText == "x2"){
            val = Math.pow(val,2);
            input.value = val
        }
        else if (buttonText == "x3"){
            val = Math.pow(val,3);
            input.value = val
        }
        else if (buttonText == "Root"){
            val = Math.sqrt(val);
            input.value = val
        }
        // else if (buttonText == "Log"){
        //     val = Math.log(val);
        //     input.value = val
        // }
        else{
            val += buttonText;
            input.value = val;
        }
    })
})

// Function to process the expression and replace degree-based trigonometric functions with radians
function processExpression(expression) {
    expression = expression.replace(/Sin\(([^)]+)\)/g, (match, p1) => `Math.sin(${convertDegreesToRadians(p1)})`);
    expression = expression.replace(/Cos\(([^)]+)\)/g, (match, p1) => `Math.cos(${convertDegreesToRadians(p1)})`);
    expression = expression.replace(/Tan\(([^)]+)\)/g, (match, p1) => `Math.tan(${convertDegreesToRadians(p1)})`);
    expression = expression.replace(/Log\(([^)]+)\)/g, (match, p1) => `Math.tan(${p1})`);
    return expression;
}
// Function to convert degrees to radians
function convertDegreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}




//buttonSecond.forEach(function(btn) {
//    btn.addEventListener("click", function() {
//        science = btn.getAttribute("data-tip");
//        buttonSecond.textContent = "sin";
//        input.value += science;
//    })
//})



/*
let input = document.getElementById("show");
let buttons = document.querySelectorAll("button")

let string = "";
let arr = Array.from(buttons); 
console.log(arr);

arr.forEach(function(button) {
    button.addEventListener("click", function(e) {
        if(e.target.innerHTML == "="){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == "AC"){
            string = "";
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})

let numButton = document.querySelectorAll(".btn");
let arithmetic = document.querySelectorAll(".btn2");
//let plus = document.getElementsByClassName("btn8");
//let minus = document.getElementsByClassName("btn7");
//let divide = document.getElementsByClassName("btn5");
let equalTo = document.getElementsByClassName("submit");
let showCase = document.getElementById("show");

let numbers = 0;

function addition (...ar) {
    let addii = a + b;
        //equalTo.innerHtml = ar; 
        //showCase.innerHTML = equalTo
    return addii;
}
console.log(addition(1,2,3,4));

function subtraction (...ar){
    subtraction.addEventListener("click", function(e) {
        minus = a - b;
        equalTo.innerHtml = minus;
        
    })
}

function division (...ar){
    division.addEventListener("click", function(e) {
        divide = a / b;
        equalTo.innerHtml = divide;
    })
}

arithmetic.forEach(function(arith) {
    arith.addEventListener("click", function(e) {
        numbers = Number(arith.getAttribute("data-tip"))
        arithmetic.forEach(function(ccc) {
            ccc.classList.values
        })
    })
})
numButton.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        numbers = Number(btn.getAttribute("data-tip"))
        numButton.forEach( function(button) {
            button.classList.remove("active");
        })
        btn.classList.add("active");
        showCase.innerHTML = equalTo;
    })
})
*/