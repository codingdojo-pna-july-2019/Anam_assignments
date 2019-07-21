//This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is essentially identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4), print the multiples of param1, starting at param2 and extending to param3. One exception: if a multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9), print 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).

function countdown(param1, param2, param3, param4) {
    var count = param2;
    while (count%param1 != 0) {
      count++;
    }
    while (count <= param3) {
      if (count == param4) {
        count += param1;
        continue;
      } else {
        console.log(count);
        count += param1;
      }
    }
  }
  
  countdown(3, 5, 17, 9);