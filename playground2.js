
// Import
const {validame, validameConfig} = require("./index");


let error = validame("a", {
	passWith: [""],
	min: 8,
});

if (error === "") {
	console.log( "playground2 ✅" );
} else {
	console.log("playground2 ❌", error );
};




