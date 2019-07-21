//Print all integar multiples of 5, from 512 to 4096. Afterward, also log how many there were. 
var count = 0;
for (var x = 512; x < 4097; x+=5) {
  console.log(x);
  count++;
}
console.log(count);