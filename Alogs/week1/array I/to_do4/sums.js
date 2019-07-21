//You will be given an array of numbers. After every tenth element, add an additional element containing the sum of those ten values. If the array does not end aligned evenly with ten elements, add one last sum that includes those last elements not yet been included in one of the earlier sums. Given the array [1,2,1,2,1,2,1,2,1,2,1,2,1,2], change it to [1,2,1,2,1,2,1,2,1,2,15,1,2,1,2,6].
function sums(arr) {
    var x = 0;
    var sum = 0;
    while (x < arr.length) {
        if ((x+1) % 11 == 0) {
            insert_at(arr, x, sum);
            sum = 0;
            x++;
        } else {
            sum += arr[x];
            x++;
        }
    }
    if ((x+1) % 11 != 0) {
        arr.push(sum);
    }
    return arr;
}
// function will help inserting value into array at given index

function insert_at(arr, y, val) {
    arr[arr.length] = val;
    for (var x = arr.length-1; x > y; x--) {
        var temp = arr[x];
        arr[x] = arr[x-1];
        arr[x-1] = temp;
    }
    return arr;
}

var arr1 = [1,2,1,2,1,2,1,2,1,2,1,2,1,2];
console.log(sums(arr1));