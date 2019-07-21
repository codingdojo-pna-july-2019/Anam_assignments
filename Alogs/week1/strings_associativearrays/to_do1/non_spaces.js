// Accept a string and return the number of non-space characters found in the string. 

// For example, given "Honey pie, you are driving me crazy", return 29 (not 35).
function non_spaces(str) {
    var strArr = str.split("");
    var count = 0;
    for (var i = 0; i < strArr.length; i++) {
        if (strArr[i] == false) {
            continue;
        } else {
            count++;
        }
    }
    return count;
}

var str1 = "Honey pie, you are driving me crazy";
// return 29 (not 35)
console.log(non_spaces(str1));