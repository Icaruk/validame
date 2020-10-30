
// Import
const {validame, validameConfig} = require("./index");


let error = validame("a", {
	min: 1,
	allow: "a"
});

if (error === "") {
	console.log( "playground2 ✅" );
} else {
	console.log("playground2 ❌", error );
};




