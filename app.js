var userInput; // datatype not known prior stronger than any
var userName;
userInput = 5;
userInput = "Max";
// typescript will identify this check and will knot complain
if (typeof userInput === "string") {
    userName = userInput;
}
// whenever an error is thrown, the function returns nothing not even undefined
// because the application crushes
// therefore it is better to define a return type for a function that returns never
function generateError(message, code) {
    throw { message: message, code: code };
    console.log("did not get here");
}
console.log("Did get here");
var error = generateError("An error occured!", 500);
console.log(error);
