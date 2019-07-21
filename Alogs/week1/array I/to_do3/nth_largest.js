// Nth-Largest
// Liam has "N" number of Green Belt stickers for excellent Python projects. Given arr and N, return the Nth-largest element, where (N-1) elements are larger. Return null if needed.

function nth_largest(arr, n){
    max = arr[0];
    min = arr[0];
    count = 1;
    while (count <= n) {
        var min2 = min;
        for (var x = 0; x < arr.length; x++) {
            if (count == 1) {
                if (arr[x] > max){
                    max = arr[x];
                    min2 = max;
                }
                if (arr[x] < min) {
                    min = arr[x];
                }
            } else {
                if (arr[x] < max && arr[x] > min2) {
                    min2 = arr[x];
                }
            }
        }
        max = min2;
        count++;
    }
    return max;
}

var y = [23, 5, 10, 4, 2];
console.log(nth_largest(y, 1));

