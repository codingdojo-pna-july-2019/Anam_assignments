// Zip Arrays into Map
// Associative arrays are sometimes called maps because a key (string) maps to a value. Given two arrays, create an associative array (map) containing keys of the first, and values of the second. For arr1 = ["abc", 3, "yo"] and arr2 = [42, "wassup", true], return {"abc": 42, 3: "wassup", "yo": true}.

function zip_arrays(arr1, arr2) {
    var assocArr = {};
    for (var x = 0; x < arr1.length; x++) {
      assocArr[arr1[x]] = arr2[x];
    }
    return assocArr;
  }
  
  var arr1 = ["abc", 3, "yo"];
  var arr2 = [42, "wassup", true];
  console.log(zip_arrays(arr1, arr2));

//   output: { '3': 'wassup', abc: 42, yo: true }