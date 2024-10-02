function taxiFare(km) {
  if (isNaN(km) || km <= 0) {
    return "invalid";
  }
  let bill = 0;
  if (km <= 1) {
    bill = km * 5000;
  } else if (km <= 30) {
    bill = 5000 + (km - 1) * 4000;
  } else {
    bill = 5000 + (km - 30) * 4000 * 3000;
  }
  return bill;
}
const km = Number(prompt("Nhập số km:"));

const result = taxiFare(km);
if (typeof result === "number") {
  alert(`Tổng tiền taxi cho ${km} km là: ${result} VND`);
} else {
  alert(result);
}
