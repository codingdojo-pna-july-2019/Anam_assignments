// //
// Second-to-Last
// Return the second-to-last element of an array. Given [42,true,4,"Kate",7], return "Kate". If array is too short, return null.
function second_last(arr) {
    if (arr.length < 2) {
      return null;
    }
    return arr[arr.length-2];
  }
  
  var arr1 = [42, true, 4, "Kate", 7];
  var arr2 = [10];
  console.log(second_last(arr1));
  //output: Kate
  console.log(second_last(arr2));
  //output: null