
console.log("===== Step 1 =====");

var sweety="Sweety";
var cutie="Cutie";

console.log("Before Swap");
console.log("Sweety:", sweety);
console.log("Cutie:", cutie);

var temp=sweety;
sweety=cutie;
cutie=temp;

console.log("After Swap");
console.log("Sweety:", sweety);
console.log("Cutie:", cutie);

console.log("===== Step 2 =====");

var num1=100;
var num2=200;
var num3=300;

console.log("Before Swap");
console.log("Num 1 =>",num1);
console.log("Num 2 =>",num2);
console.log("Num 3 =>",num3);

var temp=num1;
num1=num2;
num2=num3;
num3=temp;

console.log("After Swap");

console.log("Num 1 =>",num1);
console.log("Num 2 =>",num2);
console.log("Num 3 =>",num3);
