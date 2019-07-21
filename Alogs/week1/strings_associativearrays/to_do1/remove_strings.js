// Remove Shorter Strings
// Given a string array and value (length), remove any strings shorter than the length from the array.

function remove_strings(strArr, val) {
    for (var x = strArr.length-1; x >= 0; x--) {
        if (strArr[x].length < val) {
            for (var i = x; i < strArr.length-1; i++){
                var temp = strArr[i];
                strArr[i] = strArr[i+1];
                strArr[i+1] = temp;
            }
            strArr.pop();
        }
    }
    return strArr;
}

var str1 = ["Hi", "How", "are", "you?", "Good!"];
console.log(remove_strings(str1, 4));