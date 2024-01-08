// function expression -FE
//FE - Storing function inside the variable

console.log("============step 1=============");

var display = function () {
    console.log("display");
}
display(); //call - function expression
//console.log(display);

var maleMarrageEligibility = function(gender, age, boyName){

    var result= gender=="male" && age>=21 ? `Hey ${boyName} you are eligible`:"you are not eligible.";
    console.log(result);
}
maleMarrageEligibility("male",25,"BillGates");
maleMarrageEligibility("male",17, "bill");

console.log("============step 2=============");

var femaleMarriageEligibility= function (gender,age, name) {

    var result= gender="female" && age>=18 ? `Hey ${name} you are eligible for marriage`:`not eligible for marriage`;
    console.log(result);
    
}
femaleMarriageEligibility("female",16,"Jenifer");
femaleMarriageEligibility("female",27,"Malinda");