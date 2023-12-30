console.log("-----step 1-----");

function name() {

}
console.log("The bad news is time flies. The good news is you're the pilot.");
console.log("You can be everything. You can be the infinite amount of things that people are.");


console.log("-----step 2-----");

function personalDetails(firstName,lastName,collageName) {
    console.log("First Name:",firstName);
    console.log("Last Name:",lastName);    
    console.log("College Name:",collageName);
}
personalDetails("Prasad","Ghorpade","DY patil");

console.log("-----step 3-----");

function swapValues(n1,n2) {
    console.log("Before Swap:","n1-->",n1,"n2-->",n2);
    var temp=n1;
    n1=n2;
    n2=temp;
    console.log("After Swap:", "n1-->",n1,"n2-->",n2);
}
swapValues("Virat","Anushka");
swapValues(1000,2000);

console.log("-----step 4-----");

function addition(num1,num2,num3) {
    console.log("Addition of :",num1,",",num2,",",num3);
    result=num1+num2+num3;
    console.log("Ans is :", result);
}

addition(10.23, 600,40);
addition('hello','Good','Morning');
