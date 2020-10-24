
// Import
const {validame, validameConfig} = require("./index");


let error = validame("12.12", {
	// req: 1,
	// min: 3,
	// max: 4,
	// minMax: 3,
	allow: "2",
});

if (error === "") {
	console.log( "playground2 ✅" );
} else {
	console.log("playground2 ❌", error );
};




