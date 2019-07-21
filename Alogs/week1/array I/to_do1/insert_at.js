// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

function insert_at(arr, y, val) {
    arr[arr.length] = val;
    for (var x = arr.length-1; x > y; x--) {
        var temp = arr[x];
        arr[x] = arr[x-1];
        arr[x-1] = temp;
    }
    return arr;
}

var arr1 = [1, 2, 3, 4, 5]
console.log(insert_at(arr1, 3, 4));

//output: [1,2,3,4,4,5]