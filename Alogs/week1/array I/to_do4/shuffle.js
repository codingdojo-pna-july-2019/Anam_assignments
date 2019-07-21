//In JavaScript, the Array object has numerous useful methods. It does not, however, contain a method that will randomize the order of an array’s elements. Let’s create shuffle(arr), to efficiently shuffle a given array’s values. Work in-place, naturally. Do you need to return anything from your function?
function shuffle(arr) {
    for (var i = 0; i < arr.length; i++) {
        var rand = Math.floor(Math.random()*arr.length);
        console.log(rand);
        var temp = arr[i];
        arr[i] = arr[rand];
        arr[rand] = temp;
    }
}

var arr1 = [1, 2, 3, 4];
console.log(`Before Shuffling- ${arr1}`);
shuffle(arr1);
console.log(`After Shuffling- ${arr1}`);