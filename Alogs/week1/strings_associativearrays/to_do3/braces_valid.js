// Given a sequence of parentheses, braces and brackets, determine whether it is valid. Example:

// "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!" => true. "D(i{a}l[ t]o)n{e" => false. "A(1)s[O (n]0{t) 0}k" => false.

function braces_valid(str) {
    // var countp = 0;
    // var countb = 0;
    // var countc = 0;
    var count = 0;
    var last = [];
    for (var i = 0; i < str.length; i++) {
        if (count == -1) {
            return false;
        }
        if (str[i] == "{" || str[i] == "[" || str[i] == "("){
            count++;
            last.push(str[i]);
        }
        if (str[i] == "]") {
            if (last[last.length-1] == "[") {
                count--;
                last.pop();
            } else {
                return false;
            }
        }
        if (str[i] == ")") {
            if (last[last.length-1] == "(") {
                count--;
                last.pop()
            } else {
                return false;
            }
        }
        if (str[i] == "}") {
            if (last[last.length-1] == "{") {
                count--;
                last.pop()
            } else {
                return false;
            }
        }
    }
    if (count == 0) {
        return true;
    }
    return false;
}

var x = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
var y = "D(i{a}l[ t]o)n{e";
var z = "A(l)s[O(n]O{t) O}k";
console.log(braces_valid(x));
console.log(braces_valid(y));
console.log(braces_valid(z));