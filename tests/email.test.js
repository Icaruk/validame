
const {validame, validameConfig, validameUtils} = require("../index");


describe("email", () => {
	
	[
		["email 1", "asd@asd.es"],
		["email 2", "1asd@asd.com"],
		["email 3", "asd2@asd.jp"],
		["email 4", "asd_asd@asd.com.es"],
		["email 5", "asd-asd@asd.es"],
		["email 6", "asd-@asd.es"],
		["email 7", "asd_@asd.es"],
		["email 8", "asd--@asd.es"],
		["email 9", "asd__@asd.es"],
		["email 10", "as-as@asd.es"],
		["email 11", "as_as@asd.es"],
		["email 12", "as--as--@asd.es"],
		["email 13", "as__as__@asd.es"],
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
		
		["email fail 6", "asd;asd@asd.abcd"],
		["email fail 7", "asdçasd@asd.abcd"],
		["email fail 8", "asdáasd@asd.abcd"],
		["email fail 9", "asd asd@asd.abcd"],
		["email fail 10", "asd	asd@asd.abcd"],
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