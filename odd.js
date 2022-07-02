function isOdd (num) {
  num = num % 2 !== 0;
  return num;
}

console.log("9 is odd: " + isOdd(9));
console.log("12 is odd: " + isOdd(12));