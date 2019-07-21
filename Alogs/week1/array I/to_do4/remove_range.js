//Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array). Given ([20,30,40,50,60,70],2,4), change to [20,30,70] and return it.

function remove_range(arr, start, end) {
    for (var count = 0; count < (end - start + 1); count++) {
        remove_at(arr, start);
    }
    return arr;
}


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

var arr1 = [20, 30, 40, 50, 60, 70];
console.log(remove_range(arr1, 2, 4));