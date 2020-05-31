
// Import
const validame = require("./index");



module.exports = () => {
	
	let error = validame.v("Austin", {
		wl: "startWithVowel",
	});
	
	if (error === "") {
		console.log( "playground2 ✅" );
	} else {
		console.log("playground2 ❌", error );
	};
	
};


