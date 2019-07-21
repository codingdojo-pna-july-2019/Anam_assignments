// //Remove At
// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).

function remove_at(arr, x) {
    var val = arr[x];
    for (var i=x; i < arr.length-1; i++) {
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
    arr.pop();
    return val;
}

var arr1 = [1, 2, 3, 4, 5];
console.log(remove_at(arr1, 0));
console.log(arr1);