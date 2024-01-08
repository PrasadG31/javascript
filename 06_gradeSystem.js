
 var gradeSystem=function(marks) {

    if (marks<0 || marks>100 || marks==undefined || isNaN(marks)) { // invalid input
        console.log(`${marks} Invalid Input`);
    } else { // fail or  Pass
        if (marks<35) { //pass
            console.log(`${marks} Sorry!! you are failed`);
        } else { //pass
            if (marks>=35 && marks<50) { 
                console.log(`${marks} You are pass with  grade C`);
            } else if (marks>=50 && marks<75) {
                console.log(`${marks} Congratulations !! you are pass with  grade B`);
            } else {
                console.log(`${marks} Congratulations !! you are pass with grade A`);  
            }   
            }
        }
}
gradeSystem(68);
gradeSystem(78);
gradeSystem(20);
gradeSystem(110);
gradeSystem(-10);

