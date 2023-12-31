
function stringHandsOn() {
    var givenstring ="  Hey you are doing good, keep it up  ";
    console.log(`Given string is: ${givenstring}`);
    console.log(`Length of string is: ${givenstring.length}`);
    var trimresult=givenstring.trim(" ")
    console.log(`Trim result is: ${trimresult},After trim lenght is:${trimresult.length}`);
    var trimcount=givenstring.length-trimresult.length;
    console.log(`Trim space is: ${trimcount}`);
    var firstchar=trimresult.charAt(0);
    var lastchar=trimresult.charAt(33);
    console.log(`First character is:${firstchar}, Last character is:${lastchar}`);
    var Total=trimresult.split(" ");
    console.log(`Total words are:${Total.length}`);
    var index=givenstring.indexOf("good");
    console.log(`Index of Good is:${index}`);
    var substring=trimresult.substring(22);
    console.log(`Substring from 22 is:${substring}`);
    var slice=trimresult.slice(25);
    console.log(`Slice from 25 is:${slice}`);
    var end=trimresult.includes("up");
    console.log(`String ends with :${end}`);
    var start=trimresult.includes("Hey");
    console.log(`String starts with :${start}`);
    
}
stringHandsOn();