
// Import
const validame = require("./index");

validame.o.language = "en";



let error = validame.v(null, {
	req: 2,
});

if (error === "") {
	console.log( "✅" );
} else {
	console.log("❌", error );
};




