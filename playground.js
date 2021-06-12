
// Import
const {validame, validameConfig} = require("./index");

validameConfig.language = "es";



let {isCorrect, message} = validame("asd 123 =_", {
	none: [
		/pepe/
	],
	all: [
		/[a-z]/,
		/[0-9]/,
	],
	any: [
		/_/,
		/=/,
	]
	
});


console.log( "" );


if (isCorrect) {
	console.log( "playground ✅" );
} else {
	console.log("playground ❌", message );
};




