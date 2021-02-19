
// Import
const {validame, validameConfig} = require("./index");

validameConfig.language = "es";

let dni = "26764264S";
let cif = "Q5749161E";
let mal = "123";
let mal2 = "pepe";

let error = validame("123456789", {
	allowOr: "cif dni"
});

if (error === "") {
	console.log( "playground2 ✅" );
} else {
	console.log("playground2 ❌", error );
};




