 
  console.log("==========step 1==========");

 var isEvenOrOdd = function(num) {
    if (num%2==0) {
        return "Even";
    } else {
        return "Odd";
    }
    
 }
  var result= isEvenOrOdd(45);
  console.log(`Given number '45' is  : ${result}`);

  var result= isEvenOrOdd(70);
  console.log(`Given number '70'is  : ${result}`);

  var result= isEvenOrOdd(67);
  console.log(`Given number '67'is  : ${result}`);

  var result= isEvenOrOdd(98);
  console.log(`Given number '98'is  : ${result}`);

  console.log("==========Step 2==========");
  
  var eligibleVote = function(age){
    if (age>=18) {
        return "Eligible to Vote"
         } else {
     return "Not eligile to Vote"
    }
  }
 var result=eligibleVote(18);
 console.log(`Your age is 18: ${result}`);

 var result=eligibleVote(20);
 console.log(`Your age is 20: ${result}`);

 var result=eligibleVote(17);
 console.log(`Your age is 17: ${result}`);

 var result=eligibleVote(40);
 console.log(`Your age is 40: ${result}`);

  console.log("==========step 3==========");


  var checkch= function (str) {
    result =str.lenght;
    if (result>10) {
        console.log(`String contain more than 10 character`);
        
    } else {
        console.log(`String does not contain less than 10 character`);
    }

  }
checkch("JavaScript - ES6");  
  

  console.log("==========step 4==========");

  var check = function(word) {
    if (word.startsWith("Java")) {
        console.log(`Given word ${word} starts with "Java"`);
        
    } else {
        console.log(`Given word ${word} does not starts with "Java"`);
    
    }
    
  }
  check("JavaScript Language");
  check("java");  // as it is not starting with capital letter