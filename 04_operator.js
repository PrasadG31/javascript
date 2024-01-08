

var num=5;
var result = num%2; 
var resultvalue=result == 0 ? "Given number is evern" : "It is odd number";
console.log(resultvalue);

var n1="100";
var n2=100;
result=n1==n2;  // it will compare value only
result1=n1===n2; // it will compare value as well as data type
console.log(`comparison using == operator: ${result}`);
console.log(`comparison using === operator: ${result1}`);