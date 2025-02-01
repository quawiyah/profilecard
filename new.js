/*
let num1 = [1, 2, 3];
let num2 = [4, 5, 6];
let combined = num1.concat(num2);
console.log(combined);
combined.map(function(value){          
    console.log(value*2);
})
let num = [1, 2, 3, 4, 5, 6]
let spliced = num.toSpliced(3,1);
console.log(spliced);

let now = new Date();
let morning = now.getHours();
let afternoon = now.getHours();
let night = now.getHours();
// let am = 'AM';
// let pm = 'PM';               
if(morning < 12){
    console.log("Good Morning");
}
else if(afternoon < 19){
    console.log("Good Afternoon");
}
else{
    console.log("Good Night");
}


let today = new Date();
let day = today.getDay();
console.log(day);

if(day === 0){
    console.log("Today is Sunday");
    
}
else if(day === 1){
    console.log("Today is Monday");
    
}
else if(day === 2){
    console.log("Today is Tuesday");
    
}
else if(day === 3){
    console.log("Today is Wednesday");
    
}
else if(day === 4){
    console.log("Today is Thursday");
    
}
else if(day === 5){
    console.log("Today is Friday");
    
}
else{
    console.log("Today is Saturday");
    
}
*/


function number(...scores){
    let newScores = new Set(scores)
    let arrayUnique = Array.from(newScores);         
    console.log(arrayUnique);
}
number(1,2,2,2,3,1,4,6,3,6)

