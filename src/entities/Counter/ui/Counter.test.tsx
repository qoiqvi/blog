import { fireEvent, screen } from "@testing-library/react"
import { Counter } from "./Counter"
import { ComponentRender } from "shared/lib/tests/ComponentRender/ComponentRender"

describe("Counter Component", () => {
	test("Component render", () => {
		ComponentRender(<Counter />, { initialState: { counter: { value: 10 } } })
		expect(screen.getByTestId("value")).toBeInTheDocument()
	})
	test("Increase button", () => {
		ComponentRender(<Counter />, { initialState: { counter: { value: 10 } } })
		const button = screen.getByTestId("inc-btn")
		fireEvent.click(button)
		expect(screen.getByTestId("value")).toHaveTextContent("11")
	})
	test("decrease button", () => {
		ComponentRender(<Counter />, { initialState: { counter: { value: 10 } } })
		const button = screen.getByTestId("dec-btn")
		fireEvent.click(button)
		expect(screen.getByTestId("value")).toHaveTextContent("9")
	})
})
