

var marriageEligibility=function(gender,age) {
    if (age<0 || age == undefined || isNaN(age) || age==null) { // condition for marriage
        console.log(`${gender,age} Underfined output`);    
    } else {
        if (gender=="male" && age>=21) {
            console.log(`${gender},${age} ==> You are eligible for marriage`);
        } else {
            if (gender=="female" && age>=18) {
                console.log(`${gender},${age} ==> You are eligible for marriage`);
            } else {
             console.log(`${gender},${age}, ==> You are not eligible for marriage`);   
            }
            
        }
        
    }
    
}
marriageEligibility("male",17);
marriageEligibility("male",25);
marriageEligibility("female",28);
marriageEligibility("female",16);
marriageEligibility("Other",35);
marriageEligibility("Other", 41);


