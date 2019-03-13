module.exports = function getZerosCount(number, base) {
  x=base;
  let arr = [];
  let rez = [];
  if(x > 0 && x != 1){
  for(let i = 2; i <= x; i++){
    while(x % i == 0 && x > 1){
      arr.push(i);
      x = x / i;
    }
      if(x/i == 1)arr.push(x);
    }
  }
for(let i = 0; i < arr.length; i++) {
  result = 0;
  num=number;
  while (num >1){
    num=Math.floor(num/arr[i]);
    result += num;
  }
  var j, count = 0, len = arr.length;
    for(j = 0; j < len; j++)
      if(arr[j] == arr[i])
        count++;
  rez.push(Math.floor(result/count));
}
min = rez[0];
var min_number;
  for (i = 0; i < rez.length; ++i) {
      if (rez[i] < min) {min = rez[i];}
  }
  return min;
}
