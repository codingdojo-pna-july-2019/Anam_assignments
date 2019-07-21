// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

function min_front(arr) {
    var min = arr[0];
    var y = 0;
    for (var i = 1; i < arr.length; i++){
        if (arr[i] < min) {
            min = arr[i];
            y = i;
        }
    }
    for (var x = y; x > 0; x--){
        var temp = arr[x];
        arr[x] = arr[x-1];
        arr[x-1] = temp;
    }
    return arr;
}

var arr1 = [4, 2, 1, 3, 5];
console.log(min_front(arr1));
//output: [ 1, 4, 2, 3, 5 ]
