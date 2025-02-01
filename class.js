let statement = "I Love Javascript"
document.getElementById("demo").innerHTML = statement;
document.getElementById("demo").textContent = "I Love Javascript"
console.log(statement);

/*let name, age, address;
name = "John"
age = 12
address = "Ibadan"
console.log(name, age, address);

let last = "Tunde";
    last = "Smith";
console.log(last);

let fname = "John";
let lname = "smith"
let fullName = fname +" "+ lname;
console.log(fullName);

let num = "10";
let num2 = 10;
let result = num === num2;
console.log(result);
console.log(typeof(num))    // To check Data Type

let num1 = 5;
let num3 = "John";
let mul = num1 * num3;
console.log(mul);

for(let i=0; i<=20; i++){
    if(i%2 !== 0){
        console.log(i);
    }
}

let num4 = 5 + 1;
let num5 = 5;
let ans = ++num5;
console.log(num4, ans);

function addition(a,b){
    return a + b;
}
console.log(addition(5,6));
console.log(null === false);

const person = {      // Object
    fname : "Tolu",
    lname : "Tope",
    age : 20,
    address : "Akobo",
    details(){      // Methods
        return `My name is ${person.fname} ${person.lname}, I am ${person.age} years old, I stay around ${person.address}.`
    }  
}
console.log(person.fname);
console.log(person["lname"]);
console.log(person);
console.log(person.details());

const human = {}
human.fname = "John";
human.lname = "Doe";
human.age = 21;
console.log(human);

const man = new Object()
man.fname = "John";
man.lname = "Doe";
man.age = 21;
console.log(man);

const user = {      // Object
    fname : "Tolu",
    lname : "Tope",
    age : 20,
    address : "Akobo",
    details(){      // Methods
        return `My name is ${this.fname} ${this.lname}, I am ${this.age} years old, I stay around ${this.address}.`
    }  
}
console.log(user.details());
console.log(user.fname.length);

let str = "Orange, Apple, Guava";
let removedValue = str.slice(0,-14);]
let removedValues = str.substr(-12,5);
let removedValuess = str.substring(0,10);
console.log(removedValue);
console.log(removedValues);
console.log(removedValuess);

let company = "Alutamart Technologies Alutamart";
let replacedValue = company.replace("Alutamart", "Alusoft");
let replacedValues = company.replace(/Alutamart/g, "Alusoft");  //to replace all
let replacedValuess = company.replace(/alutamart/ig, "Alusoft");  //to replace all and not being case sensitive
let replacedValuesss = company.replaceAll("Alutamart", "Alusoft");  //to replace all
console.log(replacedValue);
console.log(replacedValues);
console.log(replacedValuess);
console.log(replacedValuesss);

let text4 = "john";
let text5 = text4.replace("john", "John");
console.log(text5);

let text1 = "john";
let removedText = text1.slice(0,1);
let text2 = removedText.toUpperCase();
let removedText2 = text1.slice(1);
let text3 = removedText2.toLowerCase();
let finalText = text2 + text3;
console.log(finalText);

let fname1 = "John";
let lname1 = "Doe";
let fullName1 = fname1.concat(" ", lname1);
console.log(fullName1);

let txt = "    Content    ";
console.log(txt, txt.length);
let trimmedValue = txt.trim();   //trimStart() and trimEnd()
console.log(trimmedValue, trimmedValue.length);

let num6 = "4";
let padNum = num6.padStart(3, "0"); // 3 is the amount of number to be printed as the new number
console.log(padNum);
Number(padNum); // To convert it back to number

let schools = "Command, Pathfinder, Valencia";
let arr = schools.split(",");
console.log(arr);

let name1 = "Tunde Tolu Tola Tunde";
let result1 = name1.indexOf("Tunde");  //The result will be 0 because Tunde occured twice
let result2 = name1.indexOf("Tunde", 10); 
let result3 = name1.lastIndexOf("Tunde");
let result4 = name1.startsWith("Tunde");
let result5 = name1.slice(name1.indexOf("Tunde", 10));
let matchedValue = name1.match (/un/g);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(matchedValue);

let name2 = "This is Alusoft Tachnologies LTD";
let includedValue = name2.includes("Alusoft", name2.indexOf("Technologies"));
console.log(includedValue);

let name3 = "Donald";
let comment = `My brother's name is ${name3}`;
console.log(comment);

function addition(c,d){
    return c+d;
}
console.log(addition(5,7));
         OR
function addition(c,d){
    let result = c+d;
    console.log(result);
}
addition(5,7); 

function firstCap(value){
    let incomingValue = value.toLowerCase();
    let firstLetter = incomingValue.charAt(0).toUpperCase();
    let restValue = incomingValue(1);
    return `${firstLetter}${restvalue}`;
}
console.log(firstCap("tUnDe"));

function fname(value){
    let removedLetter = value.slice(0,1);     //You can also use charAt(0)
    let firstLetter = removedLetter.toUpperCase();
    let removedLetter2 = value.slice(1);
    let remainingLetter = removedLetter2.toLowerCase();
    let fullName = firstLetter.concat(remainingLetter);
    return fullName;
}
console.log(fname("YInKA"));

console.log(isarray(fname));   //To check if a variable is an array
// variable.toString    To convert to string
// variable.join(",");      To convert an array to string
// variable.split(",");    To convert a string to an array


let x = 10/"Tunde";
let y = 10/"10";
let z = new Number(300)
console.log(x,y);
console.log(isNaN(x));
console.log(z);

let xx = 9.656;
console.log(xx.toExponential(0));

console.log(new Date());
console.log(Number(new Date(21-09-2024)));
console.log(Number.isInteger(10));     //to check if a value is an integer

//---------------------------------ARRAY-------------------------

const cars = ["Benz", "BMW", "Toyota", "Lexus", "RR"];
cars.push("Camry", "Rav4");         //To add to the back
console.log(cars);
cars.pop();                         //To remove from the back
console.log(cars);
cars.shift();                       //To remove from the front
console.log(cars);
cars.unshift("Nissan");             //To add to the front
console.log(cars);
for(let i=0; i<cars.length; i++){
    //if(i===3)break;
        console.log(cars[i]);
}
let arrayString = cars.toString();   //To convert to string
console.log(arrayString); 
let middle = cars.at(2);      //To write out a particular index
console.log(middle); 
delete cars[1];
console.log(cars);
console.log(cars[1]);
console.log(cars.length-2);

const fruits = ["Apple", "Orange", "Mango", "Guava"];
const removedValue = fruits.slice(0);
const fruitsCars = cars.concat(fruits);
console.log(fruitsCars);
fruits.splice(2,0, "Grape", "Pineapple", "Lemon");  // 2 means it should start from index 2 and 0 means it should not remove anything
console.log(fruits);
fruits.splice(3,2, "Banana", "Cherry");  // 3 means it should start from index 3(pineapple) and 2 means it should remove two items(pineapple,lemon)
console.log(fruits);
fruits.splice(2,1);
console.log(fruits);
console.log(removedValue);
const spliced = fruits.toSpliced(2,0, "Cherry", "Watermelon"); //It does the same thing splice does the only difference is that it does not alter the original variable because it is stored in a new vaiable so we can access the original vaiable by calling it
console.log(spliced);
const sorted = fruits.toSorted();  // Its similar to sort
console.log(sorted);
console.log(fruits);
fruits.sort();   // it arranges an array alphabetically  You can also use .toSorted
console.log(fruits);
fruits.reverse();     // You can also use  .toReversed
console.log(fruits);

let num = [20, 100, 1, 200, 2, 10, 500];
let sortedNumber = num.toSorted();
console.log(sortedNumber);
num.sort (function(a,b){
    return a - b;
})
console.log(num);
}

function Palindrome(value){
let originalValue = value;
let changedValue = originalValue.split("");
let reverseValue = changedValue.toReversed();
let reversedValue = reverseValue.join("");
if (originalValue === reversedValue) {
    console.log("It's a Palindrome");
} 
else {
    console.log("It's not a Palindrome");
}
}
Palindrome('racecar');

// The methods (map, filter and reduce) don't alter the original value

const goodss = ["mango", "apple", "orange", "banana"];
goodss.forEach(function(value){
    console.log(value);
})

const num = [2, 10, 20, 50, 200];      // It can also be used for stings
num.map(function(value){          
    console.log(value*2);
})

const num1 = [2, 10, 20, 50, 200];  
let greater = num1.filter(function(value){          
    return value > 10;
})
console.log(greater);

const num2 = [2, 10, 20, 50, 200];  
let reduce = num2.reduce(function(value, total){          
    return value + total;
},0)                                          // This represents the number to be added to the first value (It can be any value)(It can also be empty which approximately means 0)
console.log(reduce);                          // reduceRight is similar to reduce. The only difference is that it starts from the right

const num3 = [2, 10, 20, 50, 200];  
let all = num3.every(function(value){          // To check if all the values are greater than 10
    return value > 10;
})
console.log(all);

const num4 = [2, 10, 20, 50, 200];  
let some = num4.some(function(value){          // To check if some of the values are greater than 10
    return value > 10;
})
console.log(some);
console.log(num4.indexOf(20));

const num5 = [2, 10, 20, 50, 200];  
let first = num5.find(function(value){        // It returns the first value that is greater than 10    
    return value > 10;
})
console.log(first);

const num6 = [2, 10, 20, 50, 200];  
let first2 = num6.findIndex(function(value){        // It returns the index of the first value that is greater than 10    
    return value > 10;
})
console.log(first2);

let str = "Hello World";
let newArr = Array.from(str);          // To convert any datatype to Array
console.log(newArr);

const goods = ["mango", "apple", "orange", "banana"];
for(let good of goods.keys()){                   // It brings out the index of the values in the array
    console.log(good);
}

const fruits = ["mango", "apple", "orange", "banana"];
for(let f of fruits.entries()){                   // It brings out the index and its value of the values in the array
    console.log(f);
}
console.log(fruits.includes("apple"));


// -------------------------------ClassWork--------------------------

let num = [20, 5, 12, -5, 0, 2, -4, -1];
num.sort (function(a,b){                 // Sort them in ascending order
    return a - b;
})
console.log(num);
let reverse = num.toReversed();          // Reverse the sorted numers 
console.log(reverse);
let reduce = num.reduce(function(value, total){          
    return value + total;                        // Add the numbers together
},0)                                          
console.log(reduce);   

function fruit(value){
    let change = value.split("")
    let first = change.at(0);
    console.log(first);
}
fruit("mango");                         // Bring out the first alphabet of the word


function fruitss(value){
    let changed = value.split("")
    let last = changed.at(changed.length-1);
    console.log(last);
}
fruitss("guava");                       // Bring out the last alphabet of the word

function letter(value){
    let newValue = value.split("");
    let newInput = newValue.join(",");
    for(i=0; i<value.length; i++){
        if(value === value.toUpperCase){
            console.log(value.toLowerCase);
        }
        else{
            console.log(value.toUpperCase);     // not correct!!!!
        }
    }
}
letter("Hello");

let nums = [1, 2, 3, 4, 5, 6];
for(i=2; i<=nums.length; i+=2){          // Bring out even numbers
    console.log(i);
}

for(i=2; i<=nums.length; i++){          // Bring out even numbers
    if(i % 2 === 0){
        console.log(i);
    }
}

function evenNumber(arr){
    let value = arr.filter(function(num){     // Another method of bringing out even numbers
        return num % 2 === 0;
    })
    console.log(value);
}
evenNumber(nums)

let num1 = [1, 2, 3];
let num2 = [4, 5, 6];
let combined = num1.concat(num2);
console.log(combined);
combined.map(function(value){          
    console.log(value*2);             // To bring out new values which is 2 times the original values
})
let spliced = nums.toSpliced(3,1);    // Bring out a particular value out of the other values
console.log(spliced);

//-----------------------------------Dates--------------------
let today = new Date();
console.log(today);
let neu = Date();
console.log(neu);
let another = Date(24*60*60*1000);
console.log(another);
let now = new Date("2024/07/31");     // You can also write it as 2022/05/10 or 2022,05,10 or "2024-11-25"
console.log(now.toString());
// For a string date i.e "2021/11/12" January = 1 and December = 12
//   For a normal date i.e 2021/11/12   January = 0 and December = 11
//   1000 milliseconds make 1 second
   
let noww = new Date();     
console.log(noww.toString());
let nowww = new Date();     
console.log(nowww.toDateString());
let d = new Date();     
console.log(d.toUTCString());
let dd = new Date();     
console.log(dd.toISOString());
let nau = new Date();
let year = nau.getFullYear();
console.log(year);
let month = nau.getMonth();
console.log(month);
let day = nau.getDay();
console.log(day);
let hours = nau.getHours();
console.log(hours);
let time = nau.getTime();
console.log(time);
let milli = nau.getMilliseconds();
console.log(milli);
let millis = now.getMilliseconds();
console.log(millis);

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const mon = new Date();
let mont = months[mon.getMonth()];
console.log(mont);

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const now4 = new Date();
let day2 = days[now4.getDay()];
console.log(day2);

let now5 = new Date();
now5.setFullYear(2020);
console.log(now5);
// H0w to define function to take in any number of parameter     rest and spread 
// optional chaining

console.log(Math.round(4.4)); // It rounds up numbers but doesn't round it up if its not up to 5
console.log(Math.ceil(4.4));  // It rounds up numbers and it will still round it up even if it is less than 5
console.log(Math.ceil(-4.4)); // It doesn't round up numbers when its a negative number
console.log(Math.floor(4.7)); // It does not round up numbers even if it is greater than 5
console.log(Math.floor(-4.7)); // It only rounds it up if it is a negative number
console.log(Math.trunc(4.6)); //It doesn't round up numbers even if its negative or greater than 5
console.log(Math.sign(4));    // It returns if x is negative, null or positive
console.log(Math.pow(8,2));   // It's just like writing 8**2 i.e 8 raise to the power of 2
console.log(Math.sqrt(64));   // TO calculate Square root
console.log(Math.abs(-3.2));  // returns the absolute (positive) value of x
console.log(Math.sin(90 * Math.PI / 180)); // To find th sin and convert from degree to radians
console.log(Math.cos(0 * Math.PI / 180)); 
let score = [2, 1, 5, 3, 7]
console.log(Math.max(...score));
console.log(Math.min(...score));
console.log(Math.random());  // returns a random number between 0 (inclusive), and 1 (exclusive)
console.log(Math.ceil(Math.random() * 11));
Math.log(10);   // returns the natural logarithm of x


function add() {
    const args = Array.from(arguments);
    return args.reduce((acc, cur) => acc + cur);
}
console.log(sum(2, 10, 5, 15, 8));

// ----------- OR ----------

function sum(...args){
    return args.reduce((a, b) => a + b);
}
console.log(sum(2, 10, 5, 15, 8));

switch (new Date().getDay()) {
    case 6:
      day = "Today is Saturday";
      break;
    case 0:
      day = "Today is Sunday";
      break;
    default:
      day = "Looking forward to the Weekend";
  }
  console.log(day);
 
const person = {
    fname : "John",
    lname : "Smith",
    age : 20,
    address : "Akobo"
}  
for(value in person){
    console.log(person[value]);
    
}

let cars = ["Benz", "RR", "Jaguar", "BMW"]
for(car of cars){
    console.log(car);
    
}
   
let x = 5;
let y = x++;
console.log(y);

let i = 0;
while(i < 10){
    console.log(i);
    i++;
}

let j = 0;
do{
    console.log(j);
    j++;
    
}while(j>5)
*/ 

for (let i=0; i<10; i++){
    if(i===5){break}
    console.log(i)
}
for (let j=0; j<10; j++){
    if(j===5){continue}
    console.log(j)
}

let x = 0;
while(x<=10){
    x++;
    if(x % 2 == 0){
        console.log(x);
        
    }
}
let y = 0;
while(y<=10){
    if(y % 2 == 0){
        console.log(y);
        
    }
    y++;
}
// ------------------------------ ITERABLES -------------------------------
let letters = new Set(["a", "b", "c", "a", "c", "d"]);
console.log(letters);
let fruits = new Set(["Orange", "Apple", "Mango", "Banana"])
for(fruit of fruits){
    console.log(fruit);
    
}

let goods = new Map([
    ["Rice", 78500],
    ["Garri", 50000],
    ["Beans", 20000]
])
console.log(goods.get("Garri"));
for(good of goods){
    console.log(good);
}

// ------------------------------- SETS -----------------------------
let empty = new Set();
empty.add("Benz");
empty.add("RR");
empty.add("Jaguar");
console.log(empty);
console.log(typeof empty);
console.log(empty.has("pay"));
for(car of empty.keys()){
    console.log(car);
    
}
