
// Import
const {validame, validameConfig} = require("./index");

validameConfig.language = "es";



let {isCorrect, message} = validame("123 a", {
	// none: [
	// 	/pepe/
	// ],
	all: [
		/[a-z]/,
		/[0-9]/,
	],
});


console.log( "" );


if (isCorrect) {
	console.log( "playground ✅" );
} else {
	console.log("playground ❌", message );
};




