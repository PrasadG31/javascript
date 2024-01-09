

var  eligibility = function (gradscore,hscScore, sscScore, candidateName ) {
if (gradscore>=70 || hscScore>= 80 || sscScore>=90) {
    console.log(`Congrats! ${candidateName} you are eligible for interview.`);
    
} else {
    console.log(`${candidateName} Unfortunately you are not eligible.`);
}   
}
eligibility(80,86,90,"Prasad");
eligibility(70,65,55,"Atharv");
eligibility(60,79,88,"Amey");
