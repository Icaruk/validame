
// Import
const {validame, validameConfig} = require("./index");


let error = validame(12, {
	// req: 1,
	// min: 3,
	// max: 4,
	// minMax: 3,
	allow: "aA _ 1 ñÑ",
});

if (error === "") {
	console.log( "playground2 ✅" );
} else {
	console.log("playground2 ❌", error );
};




