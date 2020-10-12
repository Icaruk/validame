
// Import
const {validame, validameConfig, validameUtils} = require("./index");



let error = validame("asd ñ", {
	// req: 1,
	// min: 3,
	// max: 4,
	// minMax: 3,
	allow: "a A 1 _ ñ",
});

if (error === "") {
	console.log( "playground2 ✅" );
} else {
	console.log("playground2 ❌", error );
};


