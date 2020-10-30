
const {validame, validameConfig, validameUtils} = require("../index");


describe("email", () => {
	
	[
		["email 1", "asd@asd.es"],
		["email 2", "1asd@asd.com"],
		["email 3", "asd2@asd.jp"],
		["email 4", "asd_asd@asd.com.es"],
		["email 5", "asd-asd@asd.es"],
	].forEach( _x => {
		
		test(_x[0], () => {
			expect(
				validame(_x[1], {
					allow: "email"
				})
			).toBe("");
		});
		
	});
	
	
	
	[
		["email fail 1", "asdasd.es"],
		["email fail 2", "1asd@@asd.com"],
		["email fail 3", "asd2@asd..jp"],
		["email fail 4", "asd,asd@asd.com.es"],
		["email fail 5", "asd!asd@asd.es"],
		["email fail 6", "asd!asd@asd.abcd"],
	].forEach( _x => {
		
		test(_x[0], () => {
			expect(
				validame(_x[1], {
					allow: "email"
				})
			).not.toBe("");
		});
		
	});
	
});