// Is Palindrome
// Strings like "Able was I, ere I saw Elba" or "Madam, I'm Adam" could be considered palindromes, because (if we ignore spaces, punctuation, and capitalization) the letters are the same when reading from the back to the front.

// Create a function that returns a boolean whether the string is a strict palindrome. For "a x a" or "racecar", return true. Do not ignore spaces, punctuation and capitalization: if given "Dud" or "oho!", return false.

// Second: now do ignore white space (spaces, tabs, returns), capitalization and punctuation.

function is_palindrome1(string) {
    for (var i = 0; i < string.length/2; i++) {
        if (string[i] != string[string.length-1-i]){
            return false;
        }
    }
    return true;
}


function is_palindrome2(string) {
    var lowerStrArr = string.toLowerCase().match(/[a-z0-9]/g);
    for (var i = 0; i < lowerStrArr.length/2; i++) {
        if (lowerStrArr[i] != lowerStrArr[lowerStrArr.length-1-i]){
            return false;
        }
    }
    return true;
}

var str1 = "racecar";
var str2 = " a x a";
var str3 = "rewq";
var str4 = "Dud";
// console.log(is_palindrome1(str1));
// console.log(is_palindrome1(str2));
// console.log(is_palindrome1(str3));
// console.log(is_palindrome1(str4));
console.log(is_palindrome2(str1));
console.log(is_palindrome2(str2));
console.log(is_palindrome2(str3));
console.log(is_palindrome2(str4));