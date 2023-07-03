import { addQueryParams } from "./addQueryParams"

describe("addQueryParams.test", () => {
	test("w 1 param ", () => {
		const params = addQueryParams({ test: "value" })
		expect(params).toBe("?test=value")
	})
	test("w mulltiple params ", () => {
		const params = addQueryParams({ test: "value", second: "sec" })
		expect(params).toBe("?test=value&second=sec")
	})
	test("w undef param ", () => {
		const params = addQueryParams({ test: "value", second: "sec", third: undefined })
		expect(params).toBe("?test=value&second=sec")
	})
})
