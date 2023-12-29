
console.log("===== Step 1 =====");


function square(num){
console.log("Given value is:", num);
var result=num*num;
console.log("Result is:", result);
}
square(9); //funcation call or invocation
square(15);
square(25);

console.log("===== Step 2 =====");

function multiply(n1, n2, n3)
{
console.log("Given numbers are:", n1, n2, n3);
var result=n1*n2*n3;
return result;
}
var returnvalue = multiply(5,5,5);
console.log("Multiplication is:", returnvalue);

var resultvalue= multiply(8,9,10);
console.log("multiplication is:", resultvalue);

console.log("===== Step 3 =====");

function swap(n1,n2){
    console.log("Before  swap", "n1->>",n1,"n2->>",n2);
    var temp=n1;
    n1=n2;
    n2=temp;
    console.log("After swap","n1->>",n1,"n2->>",n2);
}
swap(100,200);
swap("Jenny","menny");


