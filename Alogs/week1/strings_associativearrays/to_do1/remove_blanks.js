// Create a function that, given a string, returns all of that string’s contents, but without blanks. 

// If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".


function remove_blanks(str) {
    return str.split(" ").join("");
}


var str1 = " Pl ayTha tF u nkyM usi       c   ";
console.log(remove_blanks(str1));