
const validame = require("../index");


describe("Longitud", () => {
	
	test("3-5", () => {
		expect(
			validame.v("hola", {
				min: 3,
				max: 5
			})
		).toBe("");
	});
	
	test("3-5 fail min", () => {
		expect(
			validame.v("ho", {
				min: 3,
				max: 5
			})
		).not.toBe("");
	});
	
	test("3-5 fail max", () => {
		expect(
			validame.v("holahola", {
				min: 3,
				max: 5
			})
		).not.toBe("");
	});
	
	
	
	test("4 minmax", () => {
		expect(
			validame.v("hola", {
				minmax: 4,
			})
		).toBe("");
	});
	
	test("4 minmax fail", () => {
		expect(
			validame.v("holaa", {
				minmax: 4,
			})
		).not.toBe("");
	});
	
});


