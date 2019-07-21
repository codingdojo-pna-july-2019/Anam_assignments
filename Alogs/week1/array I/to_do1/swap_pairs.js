//Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.

function swap_pairs(arr) {
    if (arr.length%2 == 0) {
        for (var x = 0; x < arr.length; x+=2) {
            var temp = arr[x];
            arr[x] = arr[x+1];
            arr[x+1] = temp;
        }
    } else {
        for (var x = 0; x < arr.length-1; x+=2) {
            var temp = arr[x];
            arr[x] = arr[x+1];
            arr[x+1] = temp;
        }
    }
    return arr;
}

var arr1 = ["Brendan",true,42];
var arr2 = [1, 2, 3, 4];
console.log(swap_pairs(arr1));
console.log(swap_pairs(arr2));