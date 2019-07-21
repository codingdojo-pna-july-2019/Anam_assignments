// //Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 

// Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". 

// Given "Live from New York, it's Saturday Night!", return "LFNYISN".

function acronyms(str) {
    var strArr = str.split(" ");
    var retStr = "";
    for (var x = 0; x < strArr.length; x++) {
        if (strArr[x] == false) {
            continue;
        } else {
            retStr += strArr[x][0].toUpperCase();
        }
    }
    return retStr;
}

var str1 = " there's no free lunch - gotta pay yer way.";
console.log(acronyms(str1));
var str2 = "Live from New York, it's Saturday Night!";
console.log(acronyms(str2));