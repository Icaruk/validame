
exports.postalCodeEs = (errorMessagesObj, string) => {
	
	// *******************
	// Compruebo longitud
	// *******************
	
	if (string.length !== 5) return errorMessagesObj.wl.postalCode["5numbers"];
	
	
	
	// *******************
	// Compruebo estructura
	// *******************
	
	let regex = new RegExp(/\d/, "");
	let correcto1 = regex.test(string);
	if (! correcto1) return errorMessagesObj.wl.postalCode.onlyNumbers;
	
	regex = new RegExp(/^(?:0?[1-9]|[1-4]\d|5[0-2])\d{3}$/, "");
	let correcto2 = regex.test(string);
	if (! correcto2) return errorMessagesObj.wl.postalCode.notValid;
	
	
	return "";
	
};