var EConversionTypes;
(function (EConversionTypes) {
    EConversionTypes[EConversionTypes["AS_NUMBER"] = 0] = "AS_NUMBER";
    EConversionTypes[EConversionTypes["AS_TEXT"] = 1] = "AS_TEXT";
})(EConversionTypes || (EConversionTypes = {}));
function combine(n, b, resultConversion) {
    var result;
    if (typeof n === "number" && typeof b === "number") {
        if (resultConversion === "as-number") {
            result = n + b;
        }
        else {
            result = "" + n + b;
        }
    }
    else if (typeof n === "string" || typeof b === "string") {
        if (resultConversion === "as-number") {
            result = +n + +b;
        }
        else {
            result = "" + n + b;
        }
    }
    return result;
}
var combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);
combinedAges = combine("30", "26", "as-text");
console.log(combinedAges);
combinedAges = combine("30", "Six", "as-number");
console.log(combinedAges);
