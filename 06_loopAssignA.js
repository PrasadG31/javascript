console.log("===== Vowel Count =====");

let str="I am very good IT Developer";
let vowelCount=0;
for (let index = 0; index< str.length; index++) {
    let ch=str.charAt(index).toLowerCase();
    console.log(str.charAt(index));
    if (ch== "a" || ch== "e" || ch=="i" || ch=="o" || ch=="u") {
        vowelCount=vowelCount+1;
    }
}
console.log(`Vowel count is : ${vowelCount}`);

console.log("===== Sum of Cube from 1-5 =====");

let sum=0;
for (let index = 1; index <= 5; index++) {
    sum=index*index*index;
    sum=sum++;
    
}
console.log(sum);
