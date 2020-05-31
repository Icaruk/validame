
exports.email = (errorMessagesObj, string) => {
	
	// *******************
	// Compruebo estructura
	// *******************
	
	let regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "");
	let correcto = regex.test(string);
	if (! correcto) return errorMessagesObj.wl.email.structure;
	
	
	return "";
	
};