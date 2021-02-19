
const {validame, validameConfig, validameUtils} = require("../index");


describe("cif", () => {
	
	[
		["cif 1", "U38269890"],
		["cif 2", "D01982016"],
		["cif 3", "S1645787A"],
	].forEach( _x => {
		
		test(_x[0], () => {
			expect(
				validame(_x[1], {
					allow: "cif"
				})
			).toBe("");
		});
		
	});
	
	
	
	[
		["cif 1", "123456789"],
		["cif 2", "U2938405"],
		["cif 3", "U293840545"],
		["cif 4", "U2938405Z"],
	].forEach( _x => {
		
		test(_x[0], () => {
			expect(
				validame(_x[1], {
					allow: "cif"
				})
			).not.toBe("");
		});
		
	});
	
	
	
});