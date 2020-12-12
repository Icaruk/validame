
// Import
const {validame, validameConfig} = require("./index");


let error = validame("asd que tal 2.2", {
	min: 1,
	allow: "a 1 _"
});

if (error === "") {
	console.log( "playground2 ✅" );
} else {
	console.log("playground2 ❌", error );
};




