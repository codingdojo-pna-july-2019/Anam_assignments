//Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.

function leapYear(year) {
    if (((year % 4 == 0) && (year % 100 !=0)) || (year % 400 == 0 )) {
    console.log("it is a Leap Year!");
    } else {
    console.log("it is NOT a Leap Year!");
    }
    
    }
    console.log(leapYear(1000));