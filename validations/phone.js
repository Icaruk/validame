
exports.phoneEs = (errorMessagesObj, string) => {
	
	let regex = new RegExp(/^[0-9]*$/, "");
	let correcto1 = regex.test(string);
	if (! correcto1) return errorMessagesObj.wl.phoneEs.onlyNumbers;
	
	
	if (string.length !== 9) return errorMessagesObj.wl.phoneEs["9numbers"];
	
	
	let correcto3 = ["6", "7", "8", "9"].includes(string.slice(0, 1));
	if (! correcto3) return errorMessagesObj.wl.phoneEs.spanish;
	
	
	return "";
	
};



exports.mobileEs = (errorMessagesObj, string) => {
	
	let regex = new RegExp(/^[0-9]*$/, "");
	let correcto1 = regex.test(string);
	if (! correcto1) return errorMessagesObj.wl.mobileEs.onlyNumbers;
	
	
	if (string.length !== 9) return errorMessagesObj.wl.mobileEs["9numbers"];
	
	
	let correcto3 = ["6", "7"].includes(string.slice(0, 1));
	if (! correcto3) return errorMessagesObj.wl.mobileEs.spanish;
	
	
	return "";
	
};

