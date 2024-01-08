

function monthOfYear(month) {
    switch (month) {
        case 1:
            console.log(`The month of Year ${month} is ==> January`);
            break;
            case 2:
                console.log(`The month of Year ${month} is ==> February`);

            break;
            case 3:
                console.log(`The month of Year ${month} is ==> March`);

            break;
            case 4:
                console.log(`The month of Year ${month} is ==> April`);

            break;
            case 5:
                console.log(`The month of Year ${month} is ==> May`);

            break;
            case 6:
                console.log(`The month of Year ${month} is ==> June`);

            break;
            case 7:
                console.log(`The month of Year ${month} is ==> July`);

            break;
            case 8:
                console.log(`The month of Year ${month} is ==> August`);

            break;
            case 9:
                console.log(`The month of Year ${month} is ==> September`);

            break;
            case 10:
                console.log(`The month of Year ${month} is ==> October`);

            break;
            case 11:
                console.log(`The month of Year ${month} is ==> November`);

            break;
            case 12:
                console.log(`The month of Year ${month} is ==> December`);

            break;
           
        default:
            console.log(`The month of Year ${month} is Invalid`);

            break;
    }
    
}
monthOfYear(0);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);

