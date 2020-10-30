
const {validame, validameConfig, validameUtils} = require("../index");


describe("postalCodeEs", () => {
	
	[
		["cp 1", "23001"],
		["cp 2", "46008"],
		["cp 3", "46009"],
	].forEach( _x => {
		
		test(_x[0], () => {
			expect(
				validame(_x[1], {
					allow: "postalCodeEs"
				})
			).toBe("");
		});
		
	});
	
	
	
	[
		["cp 1", "2300a"],
		["cp 2", "46 009"],
		["cp 3", " 46009"],
	].forEach( _x => {
		
		test(_x[0], () => {
			expect(
				validame(_x[1], {
					allow: "postalCodeEs"
				})
			).not.toBe("");
		});
		
	});
	
	
});