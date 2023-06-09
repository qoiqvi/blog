import { fireEvent, screen } from "@testing-library/react"
import { Sidebar } from "./Sidebar"
import { ComponentRender } from "shared/lib/tests/ComponentRender/ComponentRender"

describe("Sidebar tests", () => {
	test("To be in the doc", () => {
		ComponentRender(<Sidebar />)
		expect(screen.getByTestId("sidebar")).toBeInTheDocument()
		screen.debug()
	})
	test("Collapsed", () => {
		ComponentRender(<Sidebar />)
		const btn = screen.getByTestId("sb-button")
		expect(screen.getByTestId("sidebar")).toBeInTheDocument()
		fireEvent.click(btn)
		expect(screen.getByTestId("sidebar")).not.toHaveClass("collapsed")
	})
})
