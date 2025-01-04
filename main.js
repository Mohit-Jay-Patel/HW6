var day = new Date().getDay();

switch(day){
    case 0:
    case 6:
        console.log("It's a Weekend!!");
        break;
    case 1:
    case 2:
    case 3:
        console.log("Wait for Weekend..");
        break;
    case 4:
    case 5:
        console.log("Weekend is near");

}