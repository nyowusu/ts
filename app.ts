enum EConversionTypes {
  AS_NUMBER,
  AS_TEXT
}

// this is the type alias
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  n: Combinable,
  b: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result: Combinable;
  if (typeof n === "number" && typeof b === "number") {
    if (resultConversion === "as-number") {
      result = n + b;
    } else {
      result = `${n}${b}`;
    }
  } else if (typeof n === "string" || typeof b === "string") {
    if (resultConversion === "as-number") {
      result = +n + +b;
    } else {
      result = `${n}${b}`;
    }
  }
  return result;
}

let combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

combinedAges = combine("30", "26", "as-text");
console.log(combinedAges);

combinedAges = combine("30", "Six", "as-number");
console.log(combinedAges);

// another example
interface IUser {
  name: string;
  age: number;
}

type User = { name: string; age: number };
function greet(user: IUser) {
  console.log(`Hi, I am ${user.name}`);
}
