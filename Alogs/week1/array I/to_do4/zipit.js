//Create a standalone function that accepts two arrays and combines their values sequentially into a new array, at alternating indices starting with first array. Extra values from either array should be included afterward. Given [1,2] and [10,20,30,40], return new array containing [1,10,2,20,30,40].

function zipit(x, y) {
    var newArr = [];
    var count = (x.length > y.length ? x.length : y.length);
    for (var i = 0; i < count; i++) {
        if ( i < x.length ) {
            newArr.push(x[i]);
        }
        if ( i < y.length ) {
            newArr.push(y[i]);
        }
    }
    return newArr;
}

var arr1 = [1, 2];
var arr2 = [10, 20, 30, 40];
console.log(zipit(arr1, arr2));