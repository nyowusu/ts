function addFn(n: number, b: number) {
  return n + b;
}

function printResults(num: number) {
  console.log(`Results is ${num}`);
}

printResults(addFn(3, 4));

function addAndHandle(n: number, b: number, cb: (num: number) => void) {
  const result = addFn(n, b);
  cb(result);
}

// function types
let combineValues: (num: number, numb: number) => number;
combineValues = addFn;

console.log(combineValues(5, 4));

addAndHandle(10, 20, result => {
  console.log(result);
  return result;
});
