// ********print N Natural numbers

const printNNaturalNum = (n) => {
  // O(n)
  for (let i = 1; i <= n; i++) {
    console.log(i); //1,2,3
  }
};
//  printNNaturalNum(10)

const printReverseNNaturalNum = (n) => {
  // O(n)
  for (let i = 1; i <= n; i++) {
    console.log(n - i + 1); // 3,2,1
  }
};
// printReverseNNaturalNum(10)

//*********Print even numbers */
const printEvenNumbers = (n) => {
  //O(n)
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
};
//  printEvenNumbers(10)

//********Sum of N Natural numbers */
//Brute force

const sumOfNaturalNumbers = (n) => {
  //O(n)
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};
// console.log(sumOfNaturalNumbers(10));

// Optimized
const num = 5;
const sumOfNaturalNum = (num * (num + 1)) / 2; // O(1)
// console.log(sumOfNaturalNum);

//***********Factorial of N Number */

const factorialOfN = (n) => {
  //O(n)
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
};
// console.log(factorialOfN(6));

//********Sum of All Even numbers */
//Brute force
const sumOfAllEvenNum = (n) => {
  //O(n)
  let sum = 0;
  for (let i = 2; i <= n; i += 2) {
    if (i % 2 == 0) sum += i;
  }
  return sum;
};
// console.log(sumOfAllEvenNum(10));

//optimized
let evenCount = Math.floor(num / 2);
let sumOfEven = evenCount * (evenCount + 1); //O(1)
// console.log(sumOfEven);

//********Sum of All Even numbers */
//Brute force
const sumOfAllOddNum = (n) => {
  //O(n)
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) sum += i;
  }
  return sum;
};
// console.log(sumOfAllOddNum(5));

//optimized
let oddCount = Math.ceil(num / 2);
let sumOfOdd = oddCount * oddCount; //O(1)
// console.log(sumOfOdd);

//*********Print only the numbers that are both even and perfect square */
for (let i = 2; i <= 20; i += 2) {
  // O(n)
  let sqrt = Math.sqrt(i);
  if (i % 2 == 0 && Math.floor(sqrt) === sqrt) {
    // console.log(i);
  }
}

//*************************** Day - 2 ********************************** */

// Print largest number
const printLargestNum = (a, b, c) => {
  if (a >= b && a >= c) {
    console.log("a is largest");
  } else if (b >= a && b >= c) {
    console.log("b is largest");
  } else {
    console.log("c is largest");
  }
};

// printLargestNum(1,10,10)

//Check leap year
const checkLeapYear = (year) => {
  if (year % 400 === 0) {
    console.log("Leap year");
  } else if (year % 100 === 0) {
    console.log("Not leap year");
  } else if (year % 4 === 0) {
    console.log("Leap year");
  } else {
    console.log("Not leap year");
  }
};
// checkLeapYear(2026)

//Check palindrome number
const checkPalindromeNum = (num) => {
  let rev = 0;
  const actualNum = num;
  while (num > 0) {
    //O(n)
    let digit = num % 10;
    rev = rev * 10 + digit;
    num = Math.floor(num / 10);
  }
  // console.log(actualNum,rev);

  return actualNum === rev ? "palindrome" : "Not palindrome";
};

// console.log(checkPalindromeNum(1221));

//******Calculate electricity bill */
const calculateElectricBill = (unit) => {
  let amount = 0;
  if (unit <= 100) {
    amount = unit * 5;
  } else if (unit <= 200) {
    amount = 100 * 5 + (unit - 100) * 7;
  } else if (unit <= 300) {
    amount = 100 * 5 + 100 * 7 + (unit - 200) * 10;
  } else {
    amount = 100 * 5 + 100 * 7 + 100 * 10 + (unit - 300) * 12;
  }

  console.log(amount);
};

calculateElectricBill(250);
