// Return the element that is N-from-array’s-end. Given ([5,2,3,6,4,9,7],3), return 4. If the array is too short, return null.

function n_tolast(arr, num) {
    if (num > arr.length) {
      return null;
    }
    return arr[arr.length-num];
  }
  
  var arr1 = [5, 2, 3, 6, 4, 9, 7];
  var arr2 = [10]
  console.log(n_tolast(arr1, 3));
  console.log(n_tolast(arr2, 5));