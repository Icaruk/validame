
// Import
const vldm = require("./index");

vldm.o.language = "en";



let error = vldm.v("1234", {
	req: 2,
	min: 4,
	max: 64,
	wl: "phoneEs"
});

console.log( "Error → ", error );

