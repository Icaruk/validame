
// Import
const {validame, validameConfig} = require("./index");

validameConfig.language = "es";

let dni = "26764264S";
let cif = "Q5749161E";
let mal = "123";
let mal2 = "pepe";

let error = validame("12345678Z", {
	allowOr: "cif dni"
});

console.log( "error", `(${typeof error}): `, error);

if (error === "") {
	console.log( "playground2 ✅" );
} else {
	console.log("playground2 ❌", error );
};




