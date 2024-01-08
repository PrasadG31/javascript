
console.log("++++++++++++Step 1+++++++++");


function squareOfWordLength(str) {
    var a=str.length;
    var result=a*a;
    console.log(`Lenght of word is : ${a} and it's lenght square is: ${result}`);
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart")

console.log("+++++++++++++Step 2++++++++++");

function nun() {
    var strg=" I am Angular Developer";
    var result=strg.length;
    console.log(`lenght of the string is : ${result}`);
    var words= strg.split(" ");
    console.log(`Total number of words: ${words.length}`);
    var division=result/words.length;
    console.log(`Division is : ${division}`);
    var multiply= result*words.length;
    console.log(`Multiplication is : ${multiply}`);

    
}nun();