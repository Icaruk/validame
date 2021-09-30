
// Import
const {validame, validameConfig} = require("./index");

validameConfig.language = "es";



let error = validame("pepe", {
	
});



if (error === "") {
	console.log( "playground ✅" );
} else {
	console.log("playground ❌", error );
};




