
module.exports = (errorMessagesArr, string, mode) => {
	
	let error = "";
	
	
	switch (mode) {
		
		// Da error si viene como ""
		case 1:
			if (string == "") {
				error = errorMessagesArr[0];
			};
		break;
		
		
		// Da error si viene como null o ""
		case 2:
			if (string === null || string === "") {
				error = errorMessagesArr[0];
			};
		break;
		
		
		// No quiere req
		default: error = "";
		
	};
	
	
	return error;
	
};