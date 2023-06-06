import { fireEvent, screen } from "@testing-library/react"
import { Sidebar } from "./Sidebar"
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation"

describe("Sidebar tests", () => {
	test("To be in the doc", () => {
		renderWithTranslation(<Sidebar />)
		expect(screen.getByTestId("sidebar")).toBeInTheDocument()
		screen.debug()
	})
	test("Collapsed", () => {
		renderWithTranslation(<Sidebar />)
		const btn = screen.getByTestId("sb-button")
		expect(screen.getByTestId("sidebar")).toBeInTheDocument()
		fireEvent.click(btn)
		expect(screen.getByTestId("sidebar")).toHaveClass("collapsed")
	})
})
