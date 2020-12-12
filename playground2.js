
// Import
const {validame, validameConfig} = require("./index");


let error = validame("p", {
	password: [1]
});

if (error === "") {
	console.log( "playground2 ✅" );
} else {
	console.log("playground2 ❌", error );
};




