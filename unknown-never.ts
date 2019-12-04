let userInput: unknown; // datatype not known prior stronger than any
let userName: string;

userInput = 5;
userInput = "Max";
// typescript will identify this check and will knot complain
if (typeof userInput === "string") {
  userName = userInput;
}

// whenever an error is thrown, the function returns nothing not even undefined
// because the application crushes
// therefore it is better to define a return type for a function that returns never
function generateError(message: string, code: number): never {
  throw { message, code };
  console.log("did not get here");
}
console.log("Did get here");
const error = generateError("An error occured!", 500); // this function truelly returns nothing not even undefined hence the :never return type
console.log(error);
