
const validame = require("../index");


describe("Longitud", () => {
	
	test("req 0 text", () => {
		expect(
			validame.v("asdf", {
				req: 0
			})
		).toBe("");
	});
	
	test("req 0 empty", () => {
		expect(
			validame.v("", {
				req: 0
			})
		).toBe("");
	});
	
	test("req 0 null", () => {
		expect(
			validame.v(null, {
				req: 0
			})
		).toBe("");
	});
	
	
	
	test("req 1 text", () => {
		expect(
			validame.v("asdf", {
				req: 1
			})
		).toBe("");
	});
	
	test("req 1 empty", () => {
		expect(
			validame.v("", {
				req: 1
			})
		).not.toBe("");
	});
	
	test("req 1 null", () => {
		expect(
			validame.v(null, {
				req: 1
			})
		).toBe("");
	});	
	
	
	
	test("req 2 text", () => {
		expect(
			validame.v("asdf", {
				req: 2
			})
		).toBe("");
	});
	
	test("req 2 empty", () => {
		expect(
			validame.v("", {
				req: 2
			})
		).not.toBe("");
	});
	
	test("req 2 null", () => {
		expect(
			validame.v(null, {
				req: 2
			})
		).not.toBe("");
	});
	
});


