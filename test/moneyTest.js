import { formatCurrency } from "../scripts/utils/money.js";

console.log('Test Suite: formatCurrency()')

console.log('* Converts cents into dollars')
if (formatCurrency(2095) === '20.95') {
  console.log('Pass')
}
else {
  console.log('Fail')
}

console.log('* works with 0')
if (formatCurrency(0) === '0.00') {
  console.log('Pass')
}
else {
  console.log('Fail')
}

console.log('* round upto to the nearest cent')
if (formatCurrency(2000.05) === '20.01') {
  console.log('Pass')
}
else {
  console.log('Fail')
}