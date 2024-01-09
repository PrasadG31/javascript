let sum=0;
for (let index = 1; index <=10; index++) {
 sum = sum+index;    
}
console.log(`Sum of number from 1 to 10 is : ${sum}`);

console.log("==== Reading string char by char ====");
let str="Devloper";
for (let index = 0; index < str.length; index++) {
console.log(str.charAt(index));    
}

let word="Developer";
let result="";
for (let index = word.length-1; index >=0; index--) {
    result=result + word.charAt(index);
}
console.log(result);