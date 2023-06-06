import { classNames } from "./className"

describe("classNames", () => {
	test("only cls", () => {
		expect(classNames("red")).toBe("red")
	})

	test("first param and second", () => {
		expect(classNames("red", { hovered: true })).toBe("red hovered")
	})

	test("three params", () => {
		expect(classNames("red", { hovered: true }, ["as"])).toBe("red as hovered")
	})
})
