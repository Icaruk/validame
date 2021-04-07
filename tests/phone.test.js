
const {validame, validameConfig, validameUtils} = require("../index");


describe("mobile", () => {
	
	[
		["phone 1", "600000000"],
		["phone 2", "754654654"],
		["phone 3", "789789789"],
		["phone 4", "989789789"],
	].forEach( _x => {
		
		test(_x[0], () => {
			expect(
				validame(_x[1], {
					allow: "phoneEs"
				})
			).toBe("");
		});
		
	});
	
	
	
	[
		["phone fail 1", "6000000001"],
		["phone fail 2", "754654654a"],
		["phone fail 3", "78978978"],
		["phone fail 4", "98978 9789"],
	].forEach( _x => {
		
		test(_x[0], () => {
			expect(
				validame(_x[1], {
					allow: "phoneEs"
				})
			).not.toBe("");
		});
		
	});
	
	
	
	[
		["mobile 1", "600000000"],
		["mobile 2", "654654654"],
		["mobile 3", "789789789"],
	].forEach( _x => {
		
		test(_x[0], () => {
			expect(
				validame(_x[1], {
					allow: "mobileEs"
				})
			).toBe("");
		});
		
	});
	
	
	
	[
		["mobile fail 1", "6000000001"],
		["mobile fail 2", "654654654a"],
		["mobile fail 3", "78978978"],
		["mobile fail 3", "7897897 8"],
	].forEach( _x => {
		
		test(_x[0], () => {
			expect(
				validame(_x[1], {
					allow: "mobileEs"
				})
			).not.toBe("");
		});
		
	});
	
	
	
	[
		["costlessPrefixEs 1", "costlessPrefixEs", "600456789"],
		["costlessPrefixEs 2", "costlessPrefixEs", "700456789"],
		["phoneEs costlessPrefixEs", "phoneEs costlessPrefixEs", "900456789"],
		["phoneEs costlessPrefixEs", "mobileEs costlessPrefixEs", "600456789"],
	].forEach( _x => {
		
		test(_x[0], () => {
			expect(
				validame(_x[2], {
					allow: _x[1]
				})
			).toBe("");
		});
		
	});
	
	
	
	[
		["costlessPrefixEs 1", "costlessPrefixEs", "901456789"],
		["costlessPrefixEs 2", "costlessPrefixEs", "807456789"],
		["phoneEs costlessPrefixEs", "phoneEs costlessPrefixEs", "807456789"],
		["phoneEs costlessPrefixEs", "mobileEs costlessPrefixEs", "807456789"],
	].forEach( _x => {
		
		test(_x[0], () => {
			expect(
				validame(_x[2], {
					allow: _x[1]
				})
			).not.toBe("");
		});
		
	});
	
});