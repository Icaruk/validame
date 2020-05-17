
// Import
const vldm = require("./index");

vldm.o.language = "en";



let error = vldm.v(null, {
	req: 2,
	min: 4,
	max: 64,
	wl: "a A"
});

console.log( "Error2: ", error );

