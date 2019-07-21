//
// Remove Duplicates
// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.

function remove_duplicates(arr) {
    var x = 0;
    var count = 1;
    while (count < arr.length) {
        if (arr[x] == arr[count]){
            count++;
        } else {
            arr[x+1] = arr[count];
            x++;
            count++;
        }
    }
    for (var x = 0; x < x; x++) {
        arr.pop();
    }
    return arr;
}

var arr1 = [1, 1, 2, 3, 3, 4, 4, 5, 5, 5, 6, 6, 6, 7, 8, 8, 9, 9, 10];
console.log(remove_duplicates(arr1));

//output: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]