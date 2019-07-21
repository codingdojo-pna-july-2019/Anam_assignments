// //Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.

function get_digits(str) {
    var stringArr = str.split("");
    var intStr = "";
    for (var x = 0; x < stringArr.length; x++) {
        if (stringArr[x]%1 == 0) {
            intStr += stringArr[x];
        }
    }
    return intStr/1;
}

var str1 = "0s1a3y5w7h9a2t4?6!8?0";
console.log(get_digits(str1));