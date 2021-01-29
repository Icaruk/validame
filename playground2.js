
// Import
const {validame, validameConfig} = require("./index");


let error = validame("meli_20-@hotmail.com", {
	allow: "email"
});

if (error === "") {
	console.log( "playground2 ✅" );
} else {
	console.log("playground2 ❌", error );
};




