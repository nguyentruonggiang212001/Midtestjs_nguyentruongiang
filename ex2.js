function checkNumber(n) {
  if (isNaN(n) || n <= 0) {
    return "invalid";
  }
  if (n % 3 !== 0 && n % 5 !== 0) {
    return "Không chia hết";
  } else if (n % 3 === 0 && n % 5 === 0) {
    return "chia hết cho 3 cả và 5 ";
  } else if (n % 3 === 0) {
    return "chia chết cho 3";
  } else {
    return "chia hết cho 5";
  }
}

console.log(checkNumber(15)); // "Chia hết cho cả 3 số: 3, 5 và 15"
console.log(checkNumber(9)); // "Chia hết cho 3"
console.log(checkNumber(30)); // "Chia hết cho 5"
console.log(checkNumber("15")); // "Invalid"
console.log(checkNumber(11));
