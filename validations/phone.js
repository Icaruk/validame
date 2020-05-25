
// const minmax = require("./minmax");


exports.phoneEs = (errorMessagesObj, string) => {
	
	let regex = new RegExp(/^[0-9]*$/, "");
	let correcto1 = regex.test(string);
	if (! correcto1) return errorMessagesObj[1];
	
	
	if (string.length !== 9) return errorMessagesObj[2];
	
	
	let correcto3 = ["6", "7", "8", "9"].includes(string.slice(0, 1));
	if (! correcto3) return errorMessagesObj[3];
	
};



exports.phoneEs_ne = (errorMessagesObj, string) => {
	
	let regex = new RegExp(/^[0-9]*$/, "");
	let correcto1 = regex.test(string);
	if (! correcto1) return "Sólo debe contener números.";
	
	let correcto2 = ["6", "7", "8", "9"].includes(string.slice(0, 1));
	if (! correcto2) return "Debe ser un número español.";
	
	let contieneNumerosMalos = ["901", "902", "905", "803", "806", "807"].includes(string.slice(0, 3));
	if (contieneNumerosMalos) return "El teléfono no es válido.";
	
};