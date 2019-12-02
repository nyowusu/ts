console.log("Time to get started");

function add(n: number, b: number, showResult = false, phrase?: string) {
  //   if (typeof n !== "number" || typeof b !== "number") {
  //     throw new Error("Invalid types");
  //   }
  if (showResult) {
    console.log(`${phrase} ${n} + ${b}`);
    return;
  }
  return n + b;
}

const num1 = 5;
const num2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

const result = add(num1, num2, null, resultPhrase);
console.log(result);
