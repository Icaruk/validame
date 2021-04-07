
const {validame, validameConfig, validameUtils} = require("../index");


describe("password", () => {
	
	[
		["password 1", [1, 1, 1], "Aa1"],
		["password 2", [1, 1, 1], "ASDasd123"],
		["password 3", [1, 1, 1], "PepeJuan_123!ñ"],
		["password 4", [3, 3, 3], "AAAaaa111"],
		["password 1", [3, 3, 3], "PepeJUAN@3640"],
	].forEach( _x => {
		
		test(_x[0], () => {
			expect(
				validame(_x[2], {
					password: _x[1]
				})
			).toBe("");
		});
		
	});
	
	
	
	[
		["password fail 1", "aaa"],
		["password fail 2", "AAA"],
		["password fail 3", "111"],
		["password fail 4", "aaaAAA"],
		["password fail 5", "aaa111"],
		["password fail 6", "AAA111"],
	].forEach( _x => {
		
		test(_x[0], () => {
			expect(
				validame(_x[1], {
					password: [1, 1, 1]
				})
			).not.toBe("");
		});
		
	});
	
	[
		["password fail [1,1,1]", "aaa"],
		["password fail [1,1,1]", "AAA"],
		["password fail [1,1,1]", "111"],
		["password fail [1,1,1]", "aaaAAA"],
		["password fail [1,1,1]", "aaa111"],
		["password fail [1,1,1]", "AAA111"],
	].forEach( _x => {
		
		test(_x[0], () => {
			expect(
				validame(_x[1], {
					password: [3, 3, 3]
				})
			).not.toBe("");
		});
		
	});
	
	
});