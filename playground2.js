
// Import
const {validame, validameConfig, validameUtils} = require("./index");



let error = validame("hola", {
	// req: 1,
	// min: 3,
	// max: 4,
	// minMax: 3,
	allow: "postalCodeEs",
});

if (error === "") {
	console.log( "playground2 ✅" );
} else {
	console.log("playground2 ❌", error );
};

