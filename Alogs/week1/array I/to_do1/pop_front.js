//Given an array, remove and return the value at the beginning of the array. 
//Do this without using any built-in array methods except pop()

function pop_front(arr) {
    var temp = arr[0];
    for (var x = 0; x < arr.length-1; x++){
        var swap = arr[x];
        arr[x] = arr[x+1];
        arr[x+1] = swap;
    }
    arr.pop();
    return temp;
}

var arr = [1,2,3,4];
console.log(pop_front(arr));
console.log(arr);

//output: 1
//output: [2,3,4]