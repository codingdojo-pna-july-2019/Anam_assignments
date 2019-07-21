// Longest Palindrome
// For this challenge, we will look not only at the entire string provided but also at the substrings within it. Return the longest palindromic substring. 

// Given "what up, daddy-o?", return "dad". 

// Given "uh... not much", return "u". 

// Include spaces as well (i.e. be strict, as in previous challenge): given "Yikes! my favorite racecar erupted!", return "e racecar e". Strings longer or shorter than complete words are OK.

// Second: re-solve the above problem, but ignore spaces, tabs, returns, capitalization and punctuation. Given "Hot puree eruption!", return "tpureeerupt".

// /check if string is palindrome
function palindrome_check(string) {
    for (var i = 0; i < string.length/2; i++) {
        if (string[i] != string[string.length-1-i]){
            return false;
        }
    }
    return true;
  }

  //The Main function that gets longest palindrome
  function longest_palindrome(string) {
    var newStr = string.toLowerCase().match(/[a-z0-9]/g).join("");
    //Check if the whole string is a palindrome
    if (palindrome_check(newStr)){
      return newStr;
    }
    //Create array of palindromes
    var pals = [];
    for (var a = 0; a < newStr.length-1; a++){
      var pal = newStr[a];
      var letter = newStr[a];
      for (var i = a+1; i < newStr.length; i++) {
        pal += newStr[i];
        if (newStr[i] == letter) {
          if (palindrome_check(pal)) {
            pals.push(pal);
          }
        }
      }
    }
    //Find longest palindrome in array
    if (pals.length < 1) {
      return string[0];
    } else {
      var longest = pals[0];
      for (var x = 0; x < pals.length; x++) {
        if (pals[x].length > longest.length) {
          longest = pals[x];
        }
      }
      return longest;
    }
  }
  
  var str1 = "what up, daddy-o?";
  var str2 = "uh... not much";
  var str3 = "Yikes! my favorite racecar erupted!";
  var str4 = "Hot puree eruption!";

  console.log(longest_palindrome(str1));
  console.log(longest_palindrome(str2));
  console.log(longest_palindrome(str3));
  console.log(longest_palindrome(str4));