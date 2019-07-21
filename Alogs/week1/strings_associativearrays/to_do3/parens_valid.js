// Create a function that, given an input string str, returns a boolean whether parentheses in str are valid. Valid sets of parentheses always open before they close, for example. For "Y(3(p)p(3)r)s", return true. Given "N(0(p)3", return false: not every parenthesis is closed. Given "N(0)t )0(k", return false, because the underlined ")" is premature: there is nothing open for it to close.

function parens_valid(str){
    var counto = 0;
    var countc = 0;
    for (var i = 0; i < str.length; i++) {
        if (countc > counto){
            return false;
        }
        if (str[i] == "(") {
            counto++;
        }
        if (str[i] == ")") {
            countc++;
        }
    }
    if (countc == counto) {
        return true;
    }
    return false;
}

var x = "Y(3(p)p(3)r)s";
var y = "N(0(p)3";
var z = "N(0)t )0(k";
var u = ")()(()";
console.log(parens_valid(x));
console.log(parens_valid(y));
console.log(parens_valid(z));
console.log(parens_valid(u));