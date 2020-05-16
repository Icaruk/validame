
// Import
const vldm = require("./index");
const fnc = require("./fnc");


// vldm options
vldm.o.language = "es";



let err = vldm.v("Hola 1", {
	// min: 10,
	wl: "a A 1 _",
});

console.log( "err: ", err );

