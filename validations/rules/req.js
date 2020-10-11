
module.exports = (stringParaValidar, mode, config) => {
	
	let error = "";
	
	
	switch (mode) {
		
		// Da error si viene como ""
		case 1:
			if (stringParaValidar === "") {
				error = config.rules.req.messages.error[config.language];
			};
		break;
		
		
		// Da error si viene como null o ""
		case 2:
			if (stringParaValidar === null || stringParaValidar === "") {
				error = config.rules.req.messages.error[config.language];
			};
		break;
		
		
		// No quiere req
		default: error = "";
		
	};
	
	
	return error;
	
};