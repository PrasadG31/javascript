var greet = "Good Morning";
console.log(greet.charAt(0)); //to find character at num 0

console.log(greet.length); // to find lenth of string

var charAtIndex5 = greet.charAt(5);
console.log("character at index 5 is:", charAtIndex5); // to find the character at num 5

console.log(typeof charAtIndex5); // to find type of data type

var str1 = "hey";
var str2 = "there!";
var concatResult = str1.concat(str2); //to join 2 different strings
console.log("concat string result:", concatResult);

var indexOf = greet.indexOf("d"); // to find the index value from string
console.log("Index of D is:", indexOf);

var indexOfnin = greet.indexOf("nin"); //it will show the index value of first character
console.log("Index of nin is:", indexOfnin);

var indexofO = greet.lastIndexOf("o"); // it will show the last index of all the same characters
console.log("Last index of O :", indexofO);

var myName = "Prasad Ghorpade";
var replaceName = myName.replace("Ghorpade", "Chandrakant"); // used for replacement
console.log("Replaced name is :", replaceName);

var city = "  Pune  ";
console.log(city.length);
var trimResult = city.trim(); // to trim length
console.log("Trim result is:", trimResult.length);

//string templet by  using bactic
//to avoid multiple special character like "",

console.log(
  `Trim resul is: ${trimResult}, It's length is: ${trimResult.length}`
);

var num = 15;
var result = num.toString(); // to convert number to string
console.log(`Number is ${num} and it's type is ${typeof num}`);
console.log(
  `After conversion num is ${result} and it's type is ${typeof result}`
);

var isAvailable = greet.includes("ing");   // to check the availability of character
console.log(`Is available ${isAvailable}`);

var sliceResult=greet.slice(5,8);  // to find the substring of
console.log(`Slice is ${sliceResult}`);

var word="Jenny Herry";
var result=word.split(" "); // to split the  words
console.log(result,result.length);
console.log(typeof result);

