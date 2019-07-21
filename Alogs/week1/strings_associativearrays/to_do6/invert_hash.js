// Invert Hash
// Associative arrays are also called hashes (we’ll learn why later). Build invertHash(assocArr) to convert hash keys to values, and values to keys. 

// Example: given {"name": "Zaphod", "charm": "high", "morals": "dicey"}, return object {"Zaphod": "name", "high":"charm", "dicey": "morals"}.

function inver_hash(assocArr) {
    var newAssocArr = {};
    for (key in assocArr) {
      newAssocArr[assocArr[key]] = key;
    }
    return newAssocArr;
  }
  
  var assocArr1 = {"name": "Zaphod", "charm": "high", "morals": "dicey"};
  console.log(inver_hash(assocArr1));
//   Output: { Zaphod: 'name', high: 'charm', dicey: 'morals' }
