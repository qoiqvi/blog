import { counterActions, counterReducer } from "./CounterSlice"
import type { CounterSchema } from "../types/CounterSchema"

describe("Counter Slice", () => {
	test("decrease", () => {
		const state: CounterSchema = {
			value: 10,
		}
		expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 })
	})
	test("increase", () => {
		const state: CounterSchema = {
			value: 10,
		}
		expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 })
	})
	test("empty state", () => {
		expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 })
	})
})
