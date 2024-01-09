
const arrayNum=[2,4,6,8];
console.log(arrayNum);
console.log(`Total elements in the array is: ${arrayNum.length}`);
console.log(`Array type is: ${typeof arrayNum}`);

console.log(`********** Read or Access the value from array **********`);

const elementAtIndex2 = arrayNum[2];
console.log(`Element at Index 2 is : ${elementAtIndex2}`);

console.log(`********** Traversing value from array **********`);


for (let index = 0; index < arrayNum.length; index++) {
    const element = arrayNum[index];
    console.log(element);
    
}

console.log(`********** Sum of array  **********`);
let sum=0;
for (let index = 0; index < arrayNum.length; index++) {
     sum = sum+arrayNum[index];
    
}
console.log(sum);

console.log(`********** Index of an element  **********`);

const indexOf6 = arrayNum.indexOf(6);
console.log(indexOf6);

const indexOf303 = arrayNum.indexOf(303);
console.log(indexOf303);

console.log(`********** adding element at the  end  **********`);

let array=["Jenny","Bill","Merry"];
array.push("Elon");
console.log(array);

console.log(`********** adding element at the  beginning  **********`);

array.unshift("Narayan");
console.log(array);

let arrayNumbers = [11,22,33,44,55];
arrayNumbers.shift();  // remove first element
console.log(arrayNumbers);

arrayNumbers.pop(); // remove last element
console.log(arrayNumbers);

console.log(`********** Selecting multiple elements  **********`);

let arraynums= [11,22,33,44,55,66,77];
let element=arraynums.slice(2);
console.log(element);

const elementMiddle=arraynums.slice(1,5);
console.log(elementMiddle);

console.log(`********** Removing or Deleting elements  **********`);

const removeElements = arraynums.splice(3);
console.log(removeElements);
console.log(arraynums);

console.log(`********** Removing or Deleting elements using start index and count  **********`);

let arrayNu=[11,22,33,44,55,66,77];
const removed=arrayNu.splice(2,3);
console.log(removed);
console.log(arrayNu);

console.log(`********** Replace element  **********`);

let arrayN=[11,22,33,44,55,66,77];
arrayN.splice(3,0,99);
console.log(arrayN);




