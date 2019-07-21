//Create a function that changes a given array to list each original element twice, retaining original order. Convert [4,"Ulysses",42,false] to [4,4,"Ulysses","Ulysses",42,42,false,false].

function dou_tro(arr) {
    var count = arr.length;
    for (var i = count-1; i >= 0; i--) {
        //console.log(i, arr, arr[i]);
        arr.push(arr[i]);
        for (var x = arr.length-1; x > i+1; x--) {
            //console.log(x);
            var temp = arr[x];
            arr[x] = arr[x-1];
            arr[x-1] = temp;
        }
    }
    return arr;
}

var arr1 = [4, 'Ulysses', 42, false];
console.log(dou_tro(arr1)); 