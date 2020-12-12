
const {validame, validameConfig, validameUtils} = require("../index");


describe("password", () => {
	
	[
		["password [1,1,1]", "Aa1"],
		["password [1,1,1]", "ASDasd123"],
		["password [1,1,1]", "PepeJuan_123!ñ"],
	].forEach( _x => {
		
		test(_x[0], () => {
			expect(
				validame(_x[1], {
					password: [1, 1, 1]
				})
			).toBe("");
		});
		
	});
	
	[
		["password [3, 3, 3]", "AAAaaa111"],
		["password [3, 3, 3]", "PePeJuAn123"],
	].forEach( _x => {
		
		test(_x[0], () => {
			expect(
				validame(_x[1], {
					password: [3, 3, 3]
				})
			).toBe("");
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