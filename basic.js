//1 JavaScript Program To Print Hello World

// console.log("Hello World");

//JavaScript Program to Add Two Numbers
   /*  var x = 5;
    var y = 5;
    var sum = x + y;
    console.log(sum);
     */


//2 JavaScript Program to Find the Square Root

/* var x = 144;
  var result = Math.sqrt(x);
  console.log(result);
  */

/* let y = 64;
   var result = Math.sqrt(y);
   console.log(result);
   */

/*let x_1 = 144;
let x_2 = 100;
let x_3 = 80;

var result1 = Math.sqrt(x_1);
var result2= Math.sqrt(x_2);
var result3= Math.sqrt(x_3);

console.log(`the square root of ${x_1} is ${result1}`);
console.log(`the square root of ${x_2} is ${result2}`);
console.log(`the square root of ${x_3} is ${result3}`);
*/


//3 JavaScript Program to Calculate the Area of a Triangle

/*let baseLine = 50;
let height = 50;
let mediator = 2;
let square = baseLine * height;
let triangleArea = square/mediator;
console.log(triangleArea);
*/

/*var base = 10;
var height = 10;
var triangleAre = (base * height) / 2;
console.log(`the area of triangle is ${triangleAre}`);
*/

//3 JavaScript Program to Calculate the Area of a Triangle

/*var side1 = 10;
var side2 = 15;
var side3 = 20;
let s = (side1 + side2 + side3)/2
let area = Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));
console.log(`the are of triangle is ${area}`);
*/

//4 JavaScript Program to Swap Two Variables

/*var a = 10;
var b = 20;

var temp;
temp = a;
a = b;
b = temp;

console.log(`after swaping the valu of a is ${a}`);
console.log(`after swaping the valu of b is ${b}`);
*/

//5 Javascript Program to Solve Quadratic Equation

/*let root1, root2;

let a = 1;
let b = -3;
let c = 10;

let discriminant = ((b**2) -(4*a*c));
if(discriminant > 0){
   root1 = (-b + Math.sqrt(discriminant)) / (2*a);
   root2 = (-b - Math.sqrt(discriminant)) / (2*a);
console.log(` The roots of quadratic equation are ${root1} and ${root2}`);

}
else if(discriminant == 0){
   root1 = root2 = -b / (2*a);
   console.log(`The roots of quandratic equation are ${root1} and ${root2}`);
}
else{
   let realPart = (-b / (2*a)).toFixed(2);
   let imagPart = (Math.sqrt(-discriminant)/(2*a)).toFixed(2);
   console.log(`the roots of quandratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`);
}
*/



//7 JavaScript Program to Convert Kilometers to Miles
// 1km = 0.621371 miles

/*const klmiter = 5;
const factor = 0.621371;

const miles = klmiter*factor;
console.log(`${klmiter} kilomiters are equal to ${miles} miles`);
*/

//8 Javascript Program to Convert Celsius to Fahrenheit
// fahrenheight = (celsisus*(9/5))+32

/*const celsisus = 55;
const fahrenheight = (celsisus*(9/5))+32;
console.log(`${celsisus} degree celsisus is equal to ${fahrenheight} degree`);
*/

//9 Javascript Program to Generate a Random Number
/*const min = 28;
const max = 30;
const a = Math.floor(Math.random()*(max - min + 1)) + min;
console.log(`random valu between ${min} and ${max} is ${a}`);
*/


// 10 Javascript Program to Check if a number is Positive, Negative, or Zero

/*function checkNumber(num){
   var number = num;
   if(num > 0){
      console.log("The number is Posetive");
   }
   else if(num == 0){
      console.log("The number is Zero");
   }
   else{
      console.log("The number is Negative");
   }
}
checkNumber(0);
*/

//11 Javascript Program to Check if a Number is Odd or Even

/*function checkEvern(num){
   if(num % 2 == 0){
      console.log("The number is Even");
   }
   else{
      console.log("the number is Odd");
   }
}
checkEvern(8);
*/

/*const number = 5;
const result = (number % 2 == 0)? "evern":"odd";
console.log(result);
*/

//12 JavaScript Program to Find the Largest Among Three Numbers

/*function largestNumber(num1, num2, num3){
   var largest;
   if(num1 >= (num2 && num3)){
      largest = num1;
   }
   else if(num2 >= (num1 && num3)){
      largest = num2;
   }
   else{
      largest = num3;
   }
   console.log(largest);
}
largestNumber(12, 2, 7);
*/

/*function findMaxNumber(num1, num2, num3){
   var maxNumber = Math.max(num1, num2, num3);
   console.log(`The largest Number is ${maxNumber}`);
}
findMaxNumber(6, 8 , 45);
*/

//13 JavaScript Program to Check Prime Number

/*
let number = -19;
if(number === 1){
      console.log("The number is neither prime not composit")
}
else if(number > 1){
   for(var i = 2; i < number; i++){
      if(number % i == 0){
         console.log("The Number is not a prime Number");
         break;
      }
      else{
         console.log("The Number is a prime Number");
        break;
         
      }
   }
}
else{
   console.log("this is not a prime number");
}
*/


/*function isPrime(number){
   if(number === 1){
      console.log("The number is neither prime not composit")
   }
   else if(number === 2){
      console.log("The number is a prime number");
   }
   else if(number > 1){
      for(var i = 2; i < number; i++){
         if(number % i == 0){
            console.log("This is not a prime number");
            break;
         }
         else{
            console.log("this is a prime number");
            break;
         }
      }
   }
   else{
      console.log("not prime");
   }

}
isPrime(2);
*/




// 14 JavaScript Program to Print All Prime Numbers in an Interval


/*function allPrime(lowerNum, higherNum){
   for(var i = lowerNum; i <= higherNum; i++){
      var flag = 0;
      for(var j = 2; j < i; j++){
         if(i % j ==0){
            flag = 1;
            break;
         }
      }

      if(i > 1 && flag == 0){
         console.log(i);
      }
   }
}
allPrime(1, 10);
*/

//15 JavaScript Program to Find the Factorial of a Number

/*function findFact(value){
   var num = parseInt(value);
   let fact = 1;
   if(num < 0){
      console.log("It has no factorial");
   }
   else if(num === 0){
      console.log(`The factorial of ${num} is ${1}`);
   }
   else{
      for(var i = 1; i <= num; i++){
         fact *= i;
      }
      console.log(`The factorial of the  number of ${num} is ${fact}`);
   }
}
findFact(5.6);
*/



// 16 JavaScript Program to Display the Multiplication Table

/*function multiply(value){
   var num = parseInt(value);
   for(var i = 1; i <= 10; i++){
      var result = i * num;
      console.log(` ${num} * ${i} = ${result} `);
   }  
}
multiply(10);
*/

/*function fibonacci(n){
   var fibo = [0, 1];
   for(var i = 2; i < n; i++){
      fibo[i] = fibo[i - 1] + fibo[ i - 2];
   }
   return fibo;
}

var result = fibonacci(10);
console.log(result);
*/

/*function fiboNacci(n){
   var fibo = [0, 1];
   for(var i = 2; i < n; i++){
      fibo.push(fibo[i-1] + fibo[i-2]);
   }
   return fibo;
}
var result = fiboNacci(10);
console.log(result);
*/


//18 JavaScript Program to Check Armstrong Number
/*function armStron(num){
   var temp = num;
   var sum = 0;
   while(temp > 0){
      var remainder = (temp % 10);
      sum += remainder**3;
      temp = parseInt(temp/10);
   }
   if(num == sum){
      console.log("Armstrong number");
   }
   else{
      console.log("This is not ArmStrong num");
   }
}
armStron(152);
*/

   


   




    






