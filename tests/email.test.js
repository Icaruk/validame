
const {validame, validameConfig, validameUtils} = require("../index");


describe("email", () => {
	
	[
		"asd@asd.es",
		"1asd@asd.com",
		"asd2@asd.jp",
		"asd_asd@asd.com.es",
		"asd-asd@asd.es",
		"asd-@asd.es", // 5
		"asd_@asd.es",
		"asd--@asd.es",
		"asd__@asd.es",
		"as-as@asd.es",
		"as_as@asd.es", // 10
		"as--as--@asd.es",
		"as__as__@asd.es",
		"test@asd.com",
		"test-100@asd.com",
		"test.100@asd.com", // 15
		"test111@test.com",
		"test-100@test.net",
		"test.100@test.com.au",
		"test@1.com",
		"test@gmail.com.com", // 20
		"test+100@gmail.com",
		"_asd@asd.es",
		"test@a-b.es", // 23 
	].forEach( (_x, _idx) => {
		
		test(`email_${_idx}`, () => {
			expect(
				validame(_x, {
					allow: "email"
				})
			).toBe("");
		});
		
	});
	
	
	
	[
		"asdasd.es",
		"1asd@@asd.com",
		// "asd2@asd..jp",
		"asd,asd@asd.com.es",
		"asd!asd@asd.es",
		"asd!asd@asd.abcd",
		"asd;asd@asd.abcd",// 5
		"asdçasd@asd.abcd",
		"asdáasd@asd.abcd",
		"asd asd@asd.abcd",
		"asd	asd@asd.abcd",
		".asd@asd.es", // 10
		",asd@asd.es",
		" asd@asd.es",
		"-asd@asd.es",
		"ñasd@asd.es",
		"ásd@asd.es",
		"a'sd@asd.es",
		'a"sd@asd.es',
		"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", // 18
	].forEach( (_x, _idx) => {
		
		test(`email_nok_${_idx}`, () => {
			expect(
				validame(_x, {
					allow: "email"
				})
			).not.toBe("");
		});
		
	});
	
});