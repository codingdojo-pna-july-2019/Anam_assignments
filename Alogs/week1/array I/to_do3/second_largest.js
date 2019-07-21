// Second-Largest
// Return the second-largest element of an array. Given [42,1,4,Math.PI,7], return 7. If the array is too short, return null.
function second_largest(arr) {
    if (arr.length < 2) {
      return null;
    } else {
      var x, y;
      if (arr[0] > arr[1]) {
        x = arr[0];
        y = arr[1];
      } else {
        x = arr[1];
        y = arr[0];
      }
      for (var i = 2; i < arr.length; i++) {
        if (arr[i] > x) {
          y = x;
          x = arr[i];
        } else if (arr[i] > y) {
          y = arr[i];
        }
      }
    }
    return y;
  }
  
  var arr1 = [42, 1, 4, Math.PI, 7];
  var arr2 = [10];
  console.log(second_largest(arr1));
  console.log(second_largest(arr2));