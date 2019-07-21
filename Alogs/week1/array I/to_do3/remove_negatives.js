// Remove Negatives
// Implement removeNegatives() that accepts an array, removes negative values, and returns the same array (not a copy), preserving non-negatives’ order. As always, do not use built-in array functions.

function remove_Neg(arr) {
    for (var i = arr.length-1; i >= 0; i--) {
      if (arr[i] < 0) {
        for (var x = i; x < arr.length-1; x++) {
          var temp = arr[x];
          arr[x] = arr[x+1];
          arr[x+1] = temp;
        }
        arr.pop()
      }
    }
    return arr;
  }
  
  var arr1 = [-6, 0, 2, -7, 1, -1, 3, 5];
  console.log(remove_Neg(arr1));