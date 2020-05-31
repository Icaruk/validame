
module.exports = (errorMessagesObj, string, mode) => {
	
	let error = "";
	
	
	switch (mode) {
		
		// Da error si viene como ""
		case 1:
			if (string == "") {
				error = errorMessagesObj.cantBeEmpty;
			};
		break;
		
		
		// Da error si viene como null o ""
		case 2:
			if (string === null || string === "") {
				error = errorMessagesObj.cantBeEmpty;
			};
		break;
		
		
		// No quiere req
		default: error = "";
		
	};
	
	
	return error;
	
};