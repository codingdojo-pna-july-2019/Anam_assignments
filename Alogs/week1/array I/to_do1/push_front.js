//Push Front
// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

function push_front(arr, value) {
    arr[arr.length] = value;
    for (var x = arr.length-1; x > 0; x--) {
        var temp = arr[x];
        arr[x] = arr[x-1];
        arr[x-1] = temp;
    }
    return arr;
}

var arr = [7, 8, 9]
var value = 10
console.log(push_front(arr, value));

//output: [10, 7, 8, 9]