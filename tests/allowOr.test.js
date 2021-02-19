
const {validame, validameConfig, validameUtils} = require("../index");


describe("allowOr", () => {
	
	[
		["dni cif", "12345678Z"],
		["cif dni", "12345678Z"],
		["dni cif", "Q5749161E"],
		["cif dni", "Q5749161E"],
	].forEach( (_x, _idx) => {
		
		test(`pass ${_idx}`, () => {
			expect(
				validame(_x[1], {
					allowOr: _x[0]
				})
			).toBe("");
		});
		
	});
	
	
	
	[
		["dni cif", "asdf"],
		["cif dni", "asdf"],
		["dni cif", "123456789"],
		["cif dni", "123456789"],
	].forEach( (_x, _idx) => {
		
		test(`fail ${_idx}`, () => {
			expect(
				validame(_x[1], {
					allowOr: _x[0]
				})
			).not.toBe("");
		});
		
	});
	
	
});