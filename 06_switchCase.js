
//1 --Monday
//2 --Tuesday
//3 --Wednesday

//7 --Sunday
function dayOfWeek(dayNum) {

switch (dayNum) {
    case 1:
        console.log(`Day Number ${dayNum} ==> Monay`);
        break;

        case 2:
        console.log(`Day Number ${dayNum} ==> Tuesday`);
        break;

        case 3:
        console.log(`Day Number ${dayNum} ==> Wednesday`);
        break;

        case 4:
        console.log(`Day Number ${dayNum} ==> Thursday`);
        break;

        case 5:
        console.log(`Day Number ${dayNum} ==> Friday`);
        break;

        case 6:
        console.log(`Day Number ${dayNum} ==> Saturday`);
        break;

        case 7:
        console.log(`Day Number ${dayNum} ==> Sunday`);
        break;

    default:
        console.log(`Invalid Input ${dayNum} No result found` );
        break;

}
}
dayOfWeek(2);
dayOfWeek(7);
dayOfWeek(5);
dayOfWeek(null);
dayOfWeek(NaN);
dayOfWeek(-2);
