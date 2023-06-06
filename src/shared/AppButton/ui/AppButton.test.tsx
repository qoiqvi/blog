/* eslint-disable i18next/no-literal-string */
import { render, screen } from "@testing-library/react"
import { AppButton, ThemeButton } from "./AppButton"

describe("App Button Component", () => {
	test("Наличие кнопки", () => {
		render(<AppButton>TEST</AppButton>)
		expect(screen.getByText("TEST")).toBeInTheDocument()
	})
	test("Клаас clear", () => {
		render(<AppButton theme={ThemeButton.CLEAR}>TEST</AppButton>)
		expect(screen.getByText("TEST")).toHaveClass("clear")
		screen.debug()
	})
})
